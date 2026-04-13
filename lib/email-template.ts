import { SITE_NAME, SITE_DOMAIN } from "@/lib/contact-config";

interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactEmailHtml(data: ContactEmailData): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br>");
  const siteName = escapeHtml(SITE_NAME);
  const siteDomain = escapeHtml(SITE_DOMAIN);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0F0F0F;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">${siteName} Contact Form</h1>
            </td>
          </tr>
          <!-- Subject -->
          <tr>
            <td style="padding:24px 32px 0;">
              <h2 style="margin:0;color:#333333;font-size:18px;font-weight:600;">${subject}</h2>
            </td>
          </tr>
          <!-- Sender Info -->
          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;color:#666666;font-size:14px;border-bottom:1px solid #eeeeee;">
                    <strong style="color:#333333;">Name:</strong> ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#666666;font-size:14px;border-bottom:1px solid #eeeeee;">
                    <strong style="color:#333333;">Email:</strong> <a href="mailto:${email}" style="color:#2EA3F2;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 8px;color:#333333;font-size:14px;font-weight:600;">Message:</p>
              <div style="color:#444444;font-size:14px;line-height:1.6;background-color:#f9f9f9;padding:16px;border-radius:4px;">
                ${message}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0;color:#A9A9A9;font-size:12px;">
                This message was sent via the contact form on ${siteDomain}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailText(data: ContactEmailData): string {
  return `New Contact Form Submission
===========================

Subject: ${data.subject}
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
Sent via ${SITE_DOMAIN} contact form`;
}
