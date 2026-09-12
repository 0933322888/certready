import { describe, it, expect } from 'vitest';
import { isWithinFreeWindow, getCoursePricing, FREE_WINDOW_DAYS } from '../utils/coursePricing.js';
import { userOwnsCourse, isFreeWindowPurchase } from '../utils/userPurchases.js';

describe('coursePricing', () => {
  it('returns false when registeredAt is null, undefined, or invalid', () => {
    expect(isWithinFreeWindow(null)).toBe(false);
    expect(isWithinFreeWindow(undefined)).toBe(false);
    expect(isWithinFreeWindow('invalid-date')).toBe(false);
  });

  it('correctly determines whether user is within free window', () => {
    const now = new Date();
    expect(isWithinFreeWindow(now.toISOString())).toBe(true);

    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() - (FREE_WINDOW_DAYS + 1));
    expect(isWithinFreeWindow(expiredDate.toISOString())).toBe(false);
  });

  it('calculates course pricing for anonymous visitor vs registered user in free window', async () => {
    const mockCourse = { price: 149, discountedSpots: 10 };

    // Anonymous visitor
    const anonPricing = await getCoursePricing(mockCourse, null);
    expect(anonPricing.fullPrice).toBe(149);
    expect(anonPricing.isFreeWindowActive).toBe(false);
    expect(anonPricing.freeUntil).toBe(null);

    // User within free window
    const recentUser = { createdAt: new Date().toISOString() };
    const freePricing = await getCoursePricing(mockCourse, recentUser);
    expect(freePricing.isFreeWindowActive).toBe(true);
    expect(freePricing.freeUntil).toBeInstanceOf(Date);
  });
});

describe('userPurchases', () => {
  it('checks if user owns course across string ids, ObjectIds, and populated objects', () => {
    const courseId = 'course123';

    expect(userOwnsCourse(null, courseId)).toBe(false);
    expect(userOwnsCourse({ purchases: [] }, courseId)).toBe(false);

    // String entry
    expect(userOwnsCourse({ purchases: ['course123'] }, courseId)).toBe(true);
    expect(userOwnsCourse({ purchases: ['other'] }, courseId)).toBe(false);

    // Populated object entry with _id
    expect(userOwnsCourse({ purchases: [{ _id: 'course123' }] }, courseId)).toBe(true);

    // Object entry with toString()
    const customObj = { toString: () => 'course123' };
    expect(userOwnsCourse({ purchases: [customObj] }, courseId)).toBe(true);
  });

  it('identifies free-window purchases by stripeSessionId marker', () => {
    expect(isFreeWindowPurchase(null)).toBe(false);
    expect(isFreeWindowPurchase({})).toBe(false);
    expect(isFreeWindowPurchase({ stripeSessionId: 'cs_test_123' })).toBe(false);
    expect(isFreeWindowPurchase({ stripeSessionId: 'free_window_course_123' })).toBe(true);
  });
});
