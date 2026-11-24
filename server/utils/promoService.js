import Promo from '../models/Promo.js';
import Purchase from '../models/Purchase.js';

/**
 * Find a valid promo by code and check expiry + usage caps.
 * @param {string} rawCode - User input (trimmed, case-insensitive)
 * @param {mongoose.Types.ObjectId} [courseId] - Course ID for usageCapPerCourse check
 * @returns {Promise<{ promo: import('../models/Promo.js').default, message?: string } | { promo: null, message: string }>}
 */
export async function getValidPromo(rawCode, courseId = null) {
  if (!rawCode || typeof rawCode !== 'string') {
    return { promo: null, message: 'Invalid promo code' };
  }
  const code = rawCode.trim().toUpperCase();
  const promo = await Promo.findOne({ code, isActive: true });
  if (!promo) {
    return { promo: null, message: 'Invalid promo code' };
  }

  const now = new Date();
  if (promo.validFrom && now < promo.validFrom) {
    return { promo: null, message: 'This promo code is not yet valid' };
  }
  if (promo.validUntil && now > promo.validUntil) {
    return { promo: null, message: 'This promo code has expired' };
  }

  if (promo.usageCap != null) {
    const totalUsed = await Purchase.countDocuments({
      promoCode: promo.code,
      status: 'completed',
    });
    if (totalUsed >= promo.usageCap) {
      return { promo: null, message: 'This promo code has reached its usage limit' };
    }
  }

  if (promo.usageCapPerCourse != null && courseId) {
    const usedForCourse = await Purchase.countDocuments({
      promoCode: promo.code,
      course: courseId,
      status: 'completed',
    });
    if (usedForCourse >= promo.usageCapPerCourse) {
      return { promo: null, message: 'This promo code has reached its limit for this course' };
    }
  }

  return { promo };
}

export function calculatePromoPrice(promo, currentPrice) {
  if (promo.type === 'fixed_price') {
    return Math.min(currentPrice, promo.amountCents);
  }
  if (promo.type === 'free') {
    return 0;
  }
  return currentPrice;
}

/**
 * Get the first public promo for display on the site (carousel, course cards).
 * @returns {Promise<{ code: string, type: string, amountCents: number } | null>}
 */
export async function getPublicPromo() {
  const promo = await Promo.findOne({ public: true, isActive: true })
    .sort({ createdAt: 1 });
  return promo ? {
    code: promo.code,
    type: promo.type,
    amountCents: promo.amountCents,
  } : null;
}
