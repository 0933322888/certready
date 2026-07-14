import Purchase from '../models/Purchase.js';
import { isWithinFreeWindow } from './coursePricing.js';

/**
 * Whether the course id appears on the user's purchases array
 * (handles ObjectId / string / populated docs).
 * Note: free-window entries stay on this array after expiry; use
 * userHasContentAccess for current learn access.
 */
export function userOwnsCourse(user, courseId) {
  if (!user?.purchases?.length || !courseId) return false;
  const id = courseId.toString();
  return user.purchases.some((entry) => {
    if (!entry) return false;
    if (typeof entry === 'string') return entry === id;
    if (entry._id) return entry._id.toString() === id;
    return entry.toString() === id;
  });
}

/** Free-window grants — course content only while the 5-day window is active. */
export function isFreeWindowPurchase(purchase) {
  if (!purchase?.stripeSessionId) return false;
  return String(purchase.stripeSessionId).includes('free_window');
}

/**
 * Content access: permanent if any non-free-window purchase exists;
 * free-window grant only while registration free window is active.
 */
export async function userHasContentAccess(userId, courseId, userCreatedAt = null) {
  if (!userId || !courseId) return false;
  const purchases = await Purchase.find({
    user: userId,
    course: courseId,
    status: 'completed',
  })
    .select('stripeSessionId')
    .lean();

  if (!purchases.length) return false;

  for (const p of purchases) {
    if (!isFreeWindowPurchase(p)) return true;
  }

  // Only free-window grant(s) — expires after the new-member window
  return isWithinFreeWindow(userCreatedAt);
}

/**
 * Full mock exam requires a completed purchase that is not a free-window grant
 * (paid Stripe checkout or non-window free promo). That purchase also keeps
 * course content permanently after the free window ends.
 */
export async function userHasMockExamAccess(userId, courseId) {
  if (!userId || !courseId) return false;
  const purchase = await Purchase.findOne({
    user: userId,
    course: courseId,
    status: 'completed',
    stripeSessionId: { $not: /free_window/i },
  })
    .select('_id')
    .lean();
  return Boolean(purchase);
}

/** Course slugs with permanent (non free-window) access — includes mock exam. */
export async function getMockExamCourseSlugs(userId) {
  if (!userId) return [];
  const purchases = await Purchase.find({
    user: userId,
    status: 'completed',
    stripeSessionId: { $not: /free_window/i },
  })
    .populate('course', 'slug')
    .lean();
  return [
    ...new Set(
      purchases
        .map((p) => p.course?.slug)
        .filter(Boolean)
    ),
  ];
}

/**
 * Course docs the user can learn right now (for /auth/me purchases).
 * Free-window-only courses drop off after the free window ends unless upgraded.
 */
export async function getAccessibleCourseSummaries(userId, userCreatedAt) {
  if (!userId) return [];
  const purchases = await Purchase.find({
    user: userId,
    status: 'completed',
  })
    .populate('course', 'slug title tradeCode')
    .lean();

  const bySlug = new Map();
  const inWindow = isWithinFreeWindow(userCreatedAt);

  for (const p of purchases) {
    const course = p.course;
    if (!course?.slug) continue;
    if (isFreeWindowPurchase(p) && !inWindow) continue;
    bySlug.set(course.slug, {
      _id: course._id,
      slug: course.slug,
      title: course.title,
      tradeCode: course.tradeCode,
    });
  }

  return [...bySlug.values()];
}
