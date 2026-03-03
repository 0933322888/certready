/**
 * Send password reset email.
 * If SMTP is configured (SMTP_HOST or NODEMAILER_*), sends via nodemailer.
 * Otherwise logs the reset link to console (for development).
 */

const RESET_EXPIRY_HOURS = 1;

export function getResetExpiry() {
  const d = new Date();
  d.setTime(d.getTime() + RESET_EXPIRY_HOURS * 60 * 60 * 1000);
  return d;
}

export async function sendPasswordResetEmail(toEmail, resetUrl) {
  const subject = 'CertReady — Reset your password';
  const text = `You requested a password reset. Click the link below to set a new password (valid for ${RESET_EXPIRY_HOURS} hour(s)):\n\n${resetUrl}\n\nIf you didn't request this, you can ignore this email.`;
  const html = `
    <p>You requested a password reset for your CertReady account.</p>
    <p><a href="${resetUrl}">Reset your password</a> (link valid for ${RESET_EXPIRY_HOURS} hour(s)).</p>
    <p>If you didn't request this, you can ignore this email.</p>
  `;

  const useNodemailer = process.env.SMTP_HOST || process.env.NODEMAILER_HOST;

  if (useNodemailer) {
    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || process.env.NODEMAILER_HOST,
        port: parseInt(process.env.SMTP_PORT || process.env.NODEMAILER_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: (process.env.SMTP_USER || process.env.NODEMAILER_USER) ? {
          user: process.env.SMTP_USER || process.env.NODEMAILER_USER,
          pass: process.env.SMTP_PASS || process.env.NODEMAILER_PASS,
        } : undefined,
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.NODEMAILER_FROM || '"CertReady" <noreply@certready.ca>',
        to: toEmail,
        subject,
        text,
        html,
      });
      return;
    } catch (err) {
      console.error('Failed to send password reset email:', err.message);
      console.log('Reset link (fallback):', resetUrl);
      return;
    }
  }

  // Development: log the link so you can copy it
  console.log('--- Password reset (no SMTP configured) ---');
  console.log('To:', toEmail);
  console.log('Reset link:', resetUrl);
  console.log('-------------------------------------------');
}
