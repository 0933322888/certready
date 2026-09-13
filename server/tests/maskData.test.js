import { describe, it, expect } from 'vitest';
import { maskEmail, maskId, maskPaymentIntent } from '../utils/maskData.js';

describe('maskData utility', () => {
  describe('maskEmail', () => {
    it('masks standard email addresses correctly', () => {
      expect(maskEmail('john.doe@example.com')).toBe('j***e@example.com');
      expect(maskEmail('alice@domain.co.uk')).toBe('a***e@domain.co.uk');
    });

    it('masks short usernames appropriately', () => {
      expect(maskEmail('a@test.com')).toBe('a***@test.com');
      expect(maskEmail('ab@test.com')).toBe('a***b@test.com');
      expect(maskEmail('abc@test.com')).toBe('a***c@test.com');
    });

    it('handles falsy or invalid email inputs gracefully', () => {
      expect(maskEmail('')).toBe('');
      expect(maskEmail(null)).toBe(null);
      expect(maskEmail(undefined)).toBe(undefined);
      expect(maskEmail('notanemail')).toBe('notanemail');
    });
  });

  describe('maskId', () => {
    it('masks long IDs keeping first 4 and last 4 characters', () => {
      expect(maskId('6649f81a1796d10e8f2a1b9c')).toBe('6649...1b9c');
      expect(maskId('cus_1234567890ABCDEF')).toBe('cus_...CDEF');
    });

    it('masks short IDs with asterisks', () => {
      expect(maskId('12345678')).toBe('****');
      expect(maskId('123')).toBe('****');
    });

    it('handles falsy inputs gracefully', () => {
      expect(maskId('')).toBe('');
      expect(maskId(null)).toBe(null);
      expect(maskId(undefined)).toBe(undefined);
    });
  });

  describe('maskPaymentIntent', () => {
    it('masks Stripe Payment Intent IDs keeping pi_ prefix and last 4 chars', () => {
      expect(maskPaymentIntent('pi_3Pxyz1234567890ABCDEF')).toBe('pi_...CDEF');
    });

    it('masks Stripe Checkout Session IDs keeping cs_ prefix and last 4 chars', () => {
      expect(maskPaymentIntent('cs_test_a1b2c3d4e5f6g7h8i9j0')).toBe('cs_...i9j0');
    });

    it('masks other strings', () => {
      expect(maskPaymentIntent('random_payment_id_9999')).toBe('rand...9999');
    });

    it('handles short or falsy inputs gracefully', () => {
      expect(maskPaymentIntent('1234')).toBe('****');
      expect(maskPaymentIntent('')).toBe('');
      expect(maskPaymentIntent(null)).toBe(null);
      expect(maskPaymentIntent(undefined)).toBe(undefined);
    });
  });
});
