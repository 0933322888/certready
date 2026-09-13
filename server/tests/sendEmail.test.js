import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  sendEmail,
  sendPurchaseConfirmationEmail,
  sendPasswordResetEmail,
  getResetExpiry,
} from '../utils/sendEmail.js';

describe('sendEmail utility', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    delete process.env.RESEND_API_KEY;
    delete process.env.SMTP_HOST;
    delete process.env.NODEMAILER_HOST;
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  it('calculates password reset expiry in the future', () => {
    const before = new Date();
    const expiry = getResetExpiry();
    expect(expiry.getTime()).toBeGreaterThan(before.getTime());
  });

  it('falls back to console output when no provider is configured', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = await sendEmail({
      to: 'customer@example.com',
      subject: 'Test Subject',
      text: 'Test message',
      html: '<p>Test message</p>',
    });

    expect(result).toEqual({ success: true, provider: 'console' });
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('sends email using Resend when RESEND_API_KEY is configured', async () => {
    process.env.RESEND_API_KEY = 're_test_key_123';

    // Mock dynamic import of resend
    const mockSend = vi.fn().mockResolvedValue({ data: { id: 'msg_123' }, error: null });
    vi.doMock('resend', () => ({
      Resend: class {
        constructor() {
          this.emails = { send: mockSend };
        }
      },
    }));

    // Re-import to pick up mocked module
    const { sendEmail: reloadedSendEmail } = await import('../utils/sendEmail.js');

    const result = await reloadedSendEmail({
      to: 'customer@example.com',
      subject: 'Order Confirmation',
      html: '<p>Thank you!</p>',
      text: 'Thank you!',
    });

    expect(result.provider).toBe('resend');
    expect(result.id).toBe('msg_123');
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ['customer@example.com'],
        subject: 'Order Confirmation',
        from: expect.stringContaining('support@certready.ca'),
      })
    );
  });

  it('formats paid purchase confirmation email correctly', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await sendPurchaseConfirmationEmail({
      toEmail: 'learner@example.com',
      userName: 'John Doe',
      courseTitle: 'Automotive Service Technician',
      courseSlug: 'autoservtech-310s',
      amount: 14900,
      currency: 'cad',
      orderId: 'pur_12345',
      isFree: false,
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Purchase confirmation email sent to learner@example.com for Automotive Service Technician')
    );
  });

  it('formats free purchase / promo claim confirmation email correctly', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await sendPurchaseConfirmationEmail({
      toEmail: 'scholar@example.com',
      userName: 'Jane Smith',
      courseTitle: 'Construction Electrician',
      courseSlug: 'construction-electrician-309a',
      amount: 0,
      currency: 'cad',
      orderId: 'pur_free_999',
      isFree: true,
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Purchase confirmation email sent to scholar@example.com for Construction Electrician')
    );
  });

  it('does not throw when password reset email sending encounters console fallback', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await expect(
      sendPasswordResetEmail('forgot@example.com', 'https://certready.ca/reset?token=abc')
    ).resolves.not.toThrow();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
