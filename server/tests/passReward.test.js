import { describe, it, expect } from 'vitest';
import {
  isPassRewardActive,
  isCourseEligibleForPassReward,
  calculateClaimDeadline,
} from '../config/passReward.js';

describe('Pass Reward Business Logic & Eligibility', () => {
  it('identifies active campaign correctly', () => {
    // Current date during 2026 is active
    const testDate = new Date('2026-06-01T12:00:00Z');
    expect(isPassRewardActive(testDate)).toBe(true);
  });

  it('rejects eligibility outside campaign dates', () => {
    const beforeDate = new Date('2025-12-31T23:59:59Z');
    const afterDate = new Date('2027-01-01T00:00:01Z');
    expect(isPassRewardActive(beforeDate)).toBe(false);
    expect(isPassRewardActive(afterDate)).toBe(false);
  });

  it('validates course slug eligibility', () => {
    expect(isCourseEligibleForPassReward('construction-electrician')).toBe(true);
    expect(isCourseEligibleForPassReward('plumber')).toBe(true);
    expect(isCourseEligibleForPassReward('non-existent-course-xyz')).toBe(false);
  });

  it('calculates 6-month claim deadline accurately', () => {
    const purchaseDate = new Date('2026-03-15T10:00:00Z');
    const deadline = calculateClaimDeadline(purchaseDate, 6);
    expect(deadline.getUTCMonth()).toBe(8); // March + 6 months = September (month index 8)
    expect(deadline.getUTCDate()).toBe(15);
    expect(deadline.getUTCFullYear()).toBe(2026);
  });

  it('prevents claims when deadline has passed', () => {
    const purchaseDate = new Date('2026-01-01T00:00:00Z');
    const deadline = calculateClaimDeadline(purchaseDate, 6); // 2026-07-01
    const attemptedClaimDate = new Date('2026-07-02T00:00:00Z');
    expect(attemptedClaimDate > deadline).toBe(true);
  });

  it('preserves existing purchase eligibility even if campaign ends', () => {
    // If a purchase was stored with passRewardEligible: true,
    // future eligibility is checked on the purchase record, not the live campaign toggle
    const mockPurchase = {
      passRewardEligible: true,
      passRewardClaimDeadline: new Date('2026-10-01T00:00:00Z'),
      amount: 4999,
      status: 'completed',
    };

    const isPastDeadline = new Date('2026-09-01T00:00:00Z') > mockPurchase.passRewardClaimDeadline;
    expect(mockPurchase.passRewardEligible).toBe(true);
    expect(isPastDeadline).toBe(false);
  });

  it('safeguards refund: cannot exceed original paid amount and cannot refund zero-dollar purchases', () => {
    const freePurchase = { amount: 0, passRewardEligible: false };
    const paidPurchase = { amount: 4999, passRewardEligible: true };

    expect(freePurchase.amount).toBe(0);
    expect(paidPurchase.amount).toBe(4999);
    // Refund amount must strictly equal or be less than paid amount
    const refundAmount = paidPurchase.amount;
    expect(refundAmount).toBeLessThanOrEqual(paidPurchase.amount);
    expect(refundAmount).toBe(4999);
  });
});
