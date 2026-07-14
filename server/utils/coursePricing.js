export const FREE_WINDOW_DAYS = 5;

/**
 * Whether the user's new-member free window is still active.
 * @param {Date|string|null|undefined} registeredAt
 */
export function isWithinFreeWindow(registeredAt) {
  if (!registeredAt) return false;
  const start = new Date(registeredAt);
  if (Number.isNaN(start.getTime())) return false;
  const freeUntil = new Date(start);
  freeUntil.setDate(freeUntil.getDate() + FREE_WINDOW_DAYS);
  return Date.now() <= freeUntil.getTime();
}

/**
 * Get current price for a course.
 * A user gets free access for the first 5 days after registration.
 * Free-window content access expires after that unless they purchase (e.g. mock exam unlock).
 * @param {Object} course - Course document (plain or mongoose doc)
 * @param {Object|null} user - User document (plain or mongoose doc)
 * @returns {Promise<{ currentPrice: number, fullPrice: number, discountedSpotsLeft: number, isFreeWindowActive: boolean, freeUntil: Date | null }>}
 */
export async function getCoursePricing(course, user = null) {
  const fullPrice = course.price;
  const registeredAt = user?.createdAt ? new Date(user.createdAt) : null;
  let isFreeWindowActive = false;
  let freeUntil = null;

  if (registeredAt && !Number.isNaN(registeredAt.getTime())) {
    freeUntil = new Date(registeredAt);
    freeUntil.setDate(freeUntil.getDate() + FREE_WINDOW_DAYS);
    isFreeWindowActive = Date.now() <= freeUntil.getTime();
  }

  const currentPrice = isFreeWindowActive ? 0 : fullPrice;

  return {
    currentPrice,
    fullPrice,
    discountedSpotsLeft: 0,
    isFreeWindowActive,
    freeUntil,
  };
}
