import { checkRateLimit } from "@/lib/rate-limit";
import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/email-template";
import {
  SITE_NAME,
  FIELD_LIMITS,
  SENDGRID_API_URL,
  EMAIL_SUBJECT_PREFIX,
  MESSAGES,
} from "@/lib/contact-config";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationSuccess {
  valid: true;
  data: ContactFormData;
}

interface ValidationFailure {
  valid: false;
  errors: Record<string, string>;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim();
}

function validateContactForm(
  body: unknown,
): ValidationSuccess | ValidationFailure {
  if (!body || typeof body !== "object") {
    return {
      valid: false,
      errors: { form: MESSAGES.invalidData },
    };
  }

  const raw = body as Record<string, unknown>;
  const name = sanitize(raw.name);
  const email = sanitize(raw.email);
  const subject = sanitize(raw.subject);
  const message = sanitize(raw.message);

  const errors: Record<string, string> = {};

  if (!name) {
    errors.name = MESSAGES.validation.nameRequired;
  } else if (name.length > FIELD_LIMITS.name) {
    errors.name = MESSAGES.validation.nameMaxLength;
  }

  if (!email) {
    errors.email = MESSAGES.validation.emailRequired;
  } else if (email.length > FIELD_LIMITS.email) {
    errors.email = MESSAGES.validation.emailMaxLength;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = MESSAGES.validation.emailInvalid;
  }

  if (!subject) {
    errors.subject = MESSAGES.validation.subjectRequired;
  } else if (subject.length > FIELD_LIMITS.subject) {
    errors.subject = MESSAGES.validation.subjectMaxLength;
  }

  if (!message) {
    errors.message = MESSAGES.validation.messageRequired;
  } else if (message.length > FIELD_LIMITS.message) {
    errors.message = MESSAGES.validation.messageMaxLength;
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, data: { name, email, subject, message } };
}

async function sendViaSendGrid(
  data: ContactFormData,
  html: string,
  text: string,
): Promise<boolean> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;
  const fromEmail = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !toEmail || !fromEmail) {
    return false;
  }

  const res = await fetch(SENDGRID_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail }] }],
      from: { email: fromEmail, name: `${SITE_NAME} Contact Form` },
      reply_to: { email: data.email, name: data.name },
      subject: `${EMAIL_SUBJECT_PREFIX}: ${data.subject}`,
      content: [
        { type: "text/plain", value: text },
        { type: "text/html", value: html },
      ],
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    console.error("[SendGrid Error]", res.status, errorBody);
    return false;
  }

  return true;
}

export async function POST(req: Request) {
  try {
    // 1. Rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return Response.json(
        { success: false, error: MESSAGES.rateLimited },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateCheck.retryAfterSeconds ?? 60),
          },
        },
      );
    }

    // 2. Parse JSON body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json(
        { success: false, error: MESSAGES.invalidBody },
        { status: 400 },
      );
    }

    // 3. Validate and sanitize
    const validation = validateContactForm(body);
    if (!validation.valid) {
      return Response.json(
        { success: false, errors: validation.errors },
        { status: 400 },
      );
    }

    const { data } = validation;

    // 4. Build email content
    const html = buildContactEmailHtml(data);
    const text = buildContactEmailText(data);

    // 5. Send email or log in dev mode
    const hasSendGrid = Boolean(process.env.SENDGRID_API_KEY);

    if (hasSendGrid) {
      const sent = await sendViaSendGrid(data, html, text);
      if (!sent) {
        return Response.json(
          { success: false, error: MESSAGES.sendFailed },
          { status: 500 },
        );
      }
    } else {
      console.log("[Contact Form - Dev Mode] Email would be sent:");
      console.log("  To:", process.env.CONTACT_EMAIL_TO ?? "(not set)");
      console.log("  From:", process.env.CONTACT_EMAIL_FROM ?? "(not set)");
      console.log("  Reply-To:", data.email);
      console.log("  Subject:", `${EMAIL_SUBJECT_PREFIX}: ${data.subject}`);
      console.log("  Name:", data.name);
      console.log("  Message:", data.message);
    }

    // 6. Success
    return Response.json({ success: true, message: MESSAGES.success });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return Response.json(
      { success: false, error: MESSAGES.serverError },
      { status: 500 },
    );
  }
}
