// ─── Site / Brand ────────────────────────────────────────────
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Blockmaze";
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "blockmaze.org";

// ─── Rate Limiting ───────────────────────────────────────────
export const RATE_LIMIT_WINDOW_MS = Number(
  process.env.RATE_LIMIT_WINDOW_MS ?? 60_000,
);
export const RATE_LIMIT_MAX_REQUESTS = Number(
  process.env.RATE_LIMIT_MAX_REQUESTS ?? 5,
);

// ─── Field Validation Limits ─────────────────────────────────
export const FIELD_LIMITS = {
  name: Number(process.env.CONTACT_FIELD_LIMIT_NAME ?? 100),
  email: Number(process.env.CONTACT_FIELD_LIMIT_EMAIL ?? 254),
  subject: Number(process.env.CONTACT_FIELD_LIMIT_SUBJECT ?? 200),
  message: Number(process.env.CONTACT_FIELD_LIMIT_MESSAGE ?? 5000),
} as const;

// ─── Email Config ────────────────────────────────────────────
export const SENDGRID_API_URL =
  process.env.SENDGRID_API_URL ?? "https://api.sendgrid.com/v3/mail/send";
export const EMAIL_SUBJECT_PREFIX =
  process.env.CONTACT_EMAIL_SUBJECT_PREFIX ?? "Contact Form";

// ─── API Messages ────────────────────────────────────────────
export const MESSAGES = {
  success: "Your message has been sent successfully.",
  rateLimited: "Too many requests. Please try again later.",
  invalidBody: "Invalid request body.",
  invalidData: "Invalid request data.",
  sendFailed: "Failed to send message. Please try again later.",
  serverError: "An unexpected error occurred. Please try again later.",
  validation: {
    nameRequired: "Name is required.",
    nameMaxLength: `Name must be ${FIELD_LIMITS.name} characters or fewer.`,
    emailRequired: "Email is required.",
    emailMaxLength: "Email is too long.",
    emailInvalid: "Enter a valid email address.",
    subjectRequired: "Subject is required.",
    subjectMaxLength: `Subject must be ${FIELD_LIMITS.subject} characters or fewer.`,
    messageRequired: "Message is required.",
    messageMaxLength: `Message must be ${FIELD_LIMITS.message} characters or fewer.`,
  },
} as const;
