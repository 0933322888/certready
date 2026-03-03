import Purchase from '../models/Purchase.js';

/**
 * Get current price and discount spots left for a course.
 * @param {Object} course - Course document (plain or mongoose doc)
 * @returns {Promise<{ currentPrice: number, fullPrice: number, discountedSpotsLeft: number }>}
 */
export async function getCoursePricing(course) {
  const fullPrice = course.price;
  const discountPrice = course.discountPrice;
  const discountCap = course.discountCap ?? 0;

  if (!discountCap || discountCap <= 0 || discountPrice == null) {
    return {
      currentPrice: fullPrice,
      fullPrice,
      discountedSpotsLeft: 0,
    };
  }

  const completedCount = await Purchase.countDocuments({
    course: course._id,
    status: 'completed',
  });

  const discountedSpotsLeft = Math.max(0, discountCap - completedCount);
  const currentPrice = discountedSpotsLeft > 0 ? discountPrice : fullPrice;

  return {
    currentPrice,
    fullPrice,
    discountedSpotsLeft,
  };
}
