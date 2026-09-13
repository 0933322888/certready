/**
 * Email sender utility supporting Resend API (primary when RESEND_API_KEY is present)
 * and Nodemailer SMTP (fallback).
 * Defaults from address to support@certready.ca or EMAIL_FROM / SMTP_FROM.
 */

const RESET_EXPIRY_HOURS = 1;
const DEFAULT_FROM = process.env.EMAIL_FROM || process.env.SMTP_FROM || process.env.NODEMAILER_FROM || 'CertReady <support@certready.ca>';
const CONTACT_TO = process.env.CONTACT_EMAIL_TO || process.env.SUPPORT_EMAIL || 'support@certready.ca';

let resendClient = null;

async function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resendClient) {
    const { Resend } = await import('resend');
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

/**
 * Send an email using Resend if RESEND_API_KEY is available,
 * otherwise falling back to Nodemailer if SMTP is configured.
 */
export async function sendEmail({ to, subject, html, text, from = DEFAULT_FROM, replyTo }) {
  const resend = await getResendClient();

  if (resend) {
    try {
      const response = await resend.emails.send({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        text,
        reply_to: replyTo,
      });

      if (response.error) {
        throw new Error(response.error.message || JSON.stringify(response.error));
      }
      return { success: true, provider: 'resend', id: response.data?.id };
    } catch (err) {
      console.error('Failed to send email via Resend:', err.message);
      // Fall through to SMTP if configured, else rethrow/log
      if (!process.env.SMTP_HOST && !process.env.NODEMAILER_HOST) {
        throw err;
      }
      console.warn('Falling back to SMTP transport...');
    }
  }

  const useNodemailer = process.env.SMTP_HOST || process.env.NODEMAILER_HOST;
  if (useNodemailer) {
    try {
      const nodemailer = await import('nodemailer');
      const port = parseInt(process.env.SMTP_PORT || process.env.NODEMAILER_PORT || '587', 10);
      const secure = process.env.SMTP_SECURE === 'true' || port === 465;
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || process.env.NODEMAILER_HOST,
        port,
        secure,
        auth: (process.env.SMTP_USER || process.env.NODEMAILER_USER) ? {
          user: process.env.SMTP_USER || process.env.NODEMAILER_USER,
          pass: process.env.SMTP_PASS || process.env.NODEMAILER_PASS,
        } : undefined,
        ...(process.env.SMTP_REJECT_UNAUTHORIZED === 'false' && {
          tls: { rejectUnauthorized: false },
        }),
      });

      const info = await transporter.sendMail({
        from,
        to,
        replyTo,
        subject,
        text,
        html,
      });
      return { success: true, provider: 'nodemailer', id: info?.messageId };
    } catch (err) {
      console.error('Failed to send email via SMTP:', err.message);
      throw err;
    }
  }

  // Development fallback when neither Resend nor SMTP is configured
  console.log('--- Email sent (no email provider configured) ---');
  console.log('From:', from);
  console.log('To:', to);
  console.log('Subject:', subject);
  if (text) console.log('Text:', text);
  console.log('-------------------------------------------------');
  return { success: true, provider: 'console' };
}

export function getResetExpiry() {
  const d = new Date();
  d.setTime(d.getTime() + RESET_EXPIRY_HOURS * 60 * 60 * 1000);
  return d;
}

export async function sendPasswordResetEmail(toEmail, resetUrl) {
  const subject = 'CertReady — Reset your password';
  const text = `You requested a password reset. Click the link below to set a new password (valid for ${RESET_EXPIRY_HOURS} hour(s)):\n\n${resetUrl}\n\nIf you didn't request this, you can ignore this email.`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #1e3a8a; margin-top: 0;">Reset Your Password</h2>
      <p>You requested a password reset for your CertReady account.</p>
      <p style="margin: 24px 0;">
        <a href="${resetUrl}" style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
          Reset Password
        </a>
      </p>
      <p style="font-size: 14px; color: #4b5563;">This link is valid for ${RESET_EXPIRY_HOURS} hour(s). If the button above doesn't work, copy and paste this link into your browser:</p>
      <p style="font-size: 13px; word-break: break-all; color: #2563eb;"><a href="${resetUrl}">${resetUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 13px; color: #6b7280; margin-bottom: 0;">If you didn't request this password reset, you can safely ignore this email.</p>
    </div>
  `;

  try {
    await sendEmail({
      to: toEmail,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error('Failed to send password reset email:', err.message);
    console.log('Reset link (fallback):', resetUrl);
  }
}

/**
 * Send purchase receipt / confirmation email to customer.
 */
export async function sendPurchaseConfirmationEmail({
  toEmail,
  userName,
  courseTitle,
  courseSlug,
  amount,
  currency = 'CAD',
  orderId,
  isFree = false,
  passRewardEligible = false,
  passRewardClaimDeadline = null,
}) {
  const clientUrl = process.env.CLIENT_URL || 'https://certready.ca';
  const courseUrl = courseSlug ? `${clientUrl}/learn/${courseSlug}` : `${clientUrl}/dashboard`;
  const formattedAmount = isFree || amount === 0
    ? 'Free'
    : `$${(amount / 100).toFixed(2)} ${currency.toUpperCase()}`;

  const formattedDeadline = passRewardClaimDeadline
    ? new Date(passRewardClaimDeadline).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const subject = `Your CertReady Order Confirmation: ${courseTitle}`;
  const greeting = userName ? `Hi ${escapeHtml(userName)},` : 'Hi there,';

  const text = `
Thank you for your purchase with CertReady!

${greeting}

Your access to "${courseTitle}" and the Full Mock Exam has been activated.

Order Summary:
- Item: ${courseTitle} (Full Course & Mock Exam Access)
- Amount: ${formattedAmount}
${orderId ? `- Order ID: ${orderId}\n` : ''}${passRewardEligible ? `\n🎉 CertReady Pass Reward: This purchase qualifies for our Pass Reward program! Pass your exam by ${formattedDeadline || 'within 6 months'} and submit your proof in your student dashboard to receive your course fee back.\n` : ''}
You can start studying right away by following this link:
${courseUrl}

If you have any questions or need assistance, reply to this email or reach us at ${CONTACT_TO}.

Best of luck with your exam preparation!
The CertReady Team
  `.trim();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
        <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">CertReady</h1>
        <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 14px;">Red Seal Exam Preparation</p>
      </div>

      <p style="font-size: 16px;">${greeting}</p>
      <p style="font-size: 16px;">Thank you for your purchase! Your access to <strong>${escapeHtml(courseTitle)}</strong> is now active, including full course material and the mock exam simulator.</p>

      ${passRewardEligible ? `
      <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <h4 style="margin: 0 0 8px 0; color: #065f46; font-size: 15px;">🎉 CertReady Pass Reward Qualified</h4>
        <p style="margin: 0; font-size: 14px; color: #047857;">
          This purchase qualifies for the CertReady Pass Reward! Pass your corresponding certification exam by <strong>${escapeHtml(formattedDeadline || 'within 6 months')}</strong>, provide reasonable proof in your dashboard, and receive your course fee back.
        </p>
      </div>
      ` : ''}

      <div style="background-color: #f3f4f6; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 16px; color: #1f2937;">Order Summary</h3>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #4b5563;">Course:</td>
            <td style="padding: 6px 0; font-weight: 600; text-align: right;">${escapeHtml(courseTitle)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #4b5563;">Access:</td>
            <td style="padding: 6px 0; font-weight: 600; text-align: right;">Full Course + Mock Exam</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #4b5563;">Total Paid:</td>
            <td style="padding: 6px 0; font-weight: 600; text-align: right;">${formattedAmount}</td>
          </tr>
          ${orderId ? `
          <tr>
            <td style="padding: 6px 0; color: #4b5563;">Order Ref:</td>
            <td style="padding: 6px 0; font-family: monospace; font-size: 12px; text-align: right;">${escapeHtml(String(orderId))}</td>
          </tr>` : ''}
        </table>
      </div>

      <div style="text-align: center; margin: 28px 0;">
        <a href="${courseUrl}" style="background-color: #2563eb; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block;">
          Go to Course & Mock Exam
        </a>
      </div>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

      <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 0;">
        Have questions or need help? Reach out anytime at <a href="mailto:${CONTACT_TO}" style="color: #2563eb;">${CONTACT_TO}</a>.<br />
        Wishing you the best on your Red Seal certification journey!
      </p>
    </div>
  `;

  try {
    await sendEmail({
      to: toEmail,
      subject,
      text,
      html,
    });
    console.log(`Purchase confirmation email sent to ${toEmail} for ${courseTitle}`);
  } catch (err) {
    console.error(`Failed to send purchase confirmation email to ${toEmail}:`, err.message);
  }
}

/**
 * Pass Reward notification emails
 */
export async function sendClaimSubmittedEmail({ toEmail, userName, courseTitle, claimId }) {
  const subject = `CertReady Pass Reward Claim Received: ${courseTitle}`;
  const greeting = userName ? `Hi ${escapeHtml(userName)},` : 'Hi there,';
  const text = `
${greeting}

We have successfully received your CertReady Pass Reward claim for "${courseTitle}".

Our team will review your submitted proof against the promotion requirements. Claims are typically reviewed within 2-4 business days.

Claim Reference: ${claimId}

You can check the status of your claim anytime in your CertReady student dashboard.

Best regards,
The CertReady Team
  `.trim();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #1e3a8a; margin-top: 0;">Pass Reward Claim Received</h2>
      <p>${greeting}</p>
      <p>Thank you for submitting your Pass Reward claim for <strong>${escapeHtml(courseTitle)}</strong>.</p>
      <div style="background-color: #f3f4f6; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <p style="margin: 0; font-size: 14px;"><strong>Claim Reference:</strong> ${escapeHtml(String(claimId))}</p>
        <p style="margin: 8px 0 0 0; font-size: 14px;"><strong>Status:</strong> Under Review</p>
      </div>
      <p>Our team will carefully verify your submitted exam pass proof. We will email you as soon as the review is complete.</p>
      <p style="font-size: 13px; color: #6b7280; margin-top: 24px;">Reminder: Your Pass Reward refund does not depend on leaving a review or feedback.</p>
    </div>
  `;

  try {
    await sendEmail({ to: toEmail, subject, text, html });
  } catch (err) {
    console.error(`Failed to send claim submitted email to ${toEmail}:`, err.message);
  }
}

export async function sendClaimApprovedEmail({ toEmail, userName, courseTitle, refundAmountCents, currency = 'CAD' }) {
  const formattedAmount = `$${(refundAmountCents / 100).toFixed(2)} ${currency.toUpperCase()}`;
  const subject = `Congratulations! Your CertReady Pass Reward has been Approved: ${courseTitle}`;
  const greeting = userName ? `Hi ${escapeHtml(userName)},` : 'Hi there,';
  const text = `
Congratulations on passing your exam!

${greeting}

We are delighted to let you know that your CertReady Pass Reward claim for "${courseTitle}" has been approved.

We are issuing a full refund of your course fee (${formattedAmount}) to your original payment method. Depending on your bank or credit card issuer, the credit should reflect on your statement within 5-10 business days.

Well done on reaching this certification milestone!

Best regards,
The CertReady Team
  `.trim();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <div style="border-bottom: 2px solid #10b981; padding-bottom: 16px; margin-bottom: 20px;">
        <h1 style="color: #065f46; margin: 0; font-size: 24px;">🎉 Congratulations on Passing!</h1>
      </div>
      <p>${greeting}</p>
      <p>Great news! Your Pass Reward claim for <strong>${escapeHtml(courseTitle)}</strong> has been approved.</p>
      <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <h4 style="margin: 0 0 6px 0; color: #065f46;">Refund Initiated</h4>
        <p style="margin: 0; font-size: 15px; font-weight: 600; color: #047857;">Amount: ${formattedAmount}</p>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #065f46;">Refunded to your original payment method via Stripe (5–10 business days).</p>
      </div>
      <p>Thank you for preparing with CertReady and proving your trade expertise.</p>
    </div>
  `;

  try {
    await sendEmail({ to: toEmail, subject, text, html });
  } catch (err) {
    console.error(`Failed to send claim approved email to ${toEmail}:`, err.message);
  }
}

export async function sendClaimRejectedEmail({ toEmail, userName, courseTitle, reason }) {
  const subject = `Update on your CertReady Pass Reward Claim: ${courseTitle}`;
  const greeting = userName ? `Hi ${escapeHtml(userName)},` : 'Hi there,';
  const text = `
${greeting}

Thank you for your patience while we reviewed your Pass Reward claim for "${courseTitle}".

Unfortunately, we were unable to approve the claim for the following reason:
${reason || 'The submitted proof did not meet the eligibility requirements.'}

If you believe this decision was in error or if you have alternative documentation, please feel free to reply directly to this email or reach us at ${CONTACT_TO}.

Best regards,
The CertReady Team
  `.trim();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #1e3a8a; margin-top: 0;">Pass Reward Claim Review Update</h2>
      <p>${greeting}</p>
      <p>Thank you for your patience while we reviewed your Pass Reward claim for <strong>${escapeHtml(courseTitle)}</strong>.</p>
      <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <h4 style="margin: 0 0 6px 0; color: #991b1b;">Review Status: Not Approved</h4>
        <p style="margin: 0; font-size: 14px; color: #7f1d1d;">${escapeHtml(reason || 'The submitted documentation does not meet the Pass Reward criteria.')}</p>
      </div>
      <p>If you have any questions or can provide clarification or alternative documentation, please reply to this email or contact <a href="mailto:${CONTACT_TO}">${CONTACT_TO}</a>.</p>
    </div>
  `;

  try {
    await sendEmail({ to: toEmail, subject, text, html });
  } catch (err) {
    console.error(`Failed to send claim rejected email to ${toEmail}:`, err.message);
  }
}

export async function sendRefundCompletedAndReviewInviteEmail({ toEmail, userName, courseTitle, refundAmountCents, currency = 'CAD' }) {
  const formattedAmount = `$${(refundAmountCents / 100).toFixed(2)} ${currency.toUpperCase()}`;
  const subject = `Refund Processed: CertReady Pass Reward (${courseTitle})`;
  const greeting = userName ? `Hi ${escapeHtml(userName)},` : 'Hi there,';
  const text = `
${greeting}

Your refund of ${formattedAmount} for "${courseTitle}" has completed processing.

Congratulations again on passing your exam!

If you'd like to help other candidates, we'd appreciate an honest review of your CertReady experience. Your feedback is entirely optional and was not a condition of your Pass Reward.

Best regards,
The CertReady Team
  `.trim();

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #1e3a8a; margin-top: 0;">Refund Processed</h2>
      <p>${greeting}</p>
      <p>Your refund of <strong>${formattedAmount}</strong> for <strong>${escapeHtml(courseTitle)}</strong> has been processed to your original payment method.</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <div style="background-color: #f9fafb; border-radius: 6px; padding: 16px; margin: 20px 0;">
        <h4 style="margin: 0 0 6px 0; color: #374151;">Optional Feedback</h4>
        <p style="margin: 0; font-size: 14px; color: #4b5563;">
          Congratulations again on passing your exam. If you'd like to help other candidates, we'd appreciate an honest review of your CertReady experience. <strong>Your feedback is entirely optional and was not a condition of your Pass Reward.</strong>
        </p>
      </div>
    </div>
  `;

  try {
    await sendEmail({ to: toEmail, subject, text, html });
  } catch (err) {
    console.error(`Failed to send refund completed email to ${toEmail}:`, err.message);
  }
}

/**
 * Send contact form submission to support inbox.
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const subj = subject && subject.trim() ? subject.trim() : 'CertReady – Contact form';
  const text = `Name: ${name || '(not provided)'}\nEmail: ${email || '(not provided)'}\n\nMessage:\n${message || ''}`;
  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name || '(not provided)')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || '(not provided)')}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subj)}</p>
    <hr/>
    <p>${escapeHtml(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  return sendEmail({
    to: CONTACT_TO,
    replyTo: email && email.trim() ? email.trim() : undefined,
    subject: `[Contact] ${subj}`,
    text,
    html,
  });
}

function escapeHtml(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
