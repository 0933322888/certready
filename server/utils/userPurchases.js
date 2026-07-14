import Purchase from '../models/Purchase.js';

/**
 * Whether the user already owns a course (handles ObjectId / string / populated docs).
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

/** Free-window grants (new-member offer) — course content only, not full mock exam. */
export function isFreeWindowPurchase(purchase) {
  if (!purchase?.stripeSessionId) return false;
  return String(purchase.stripeSessionId).includes('free_window');
}

/**
 * Full mock exam requires a completed purchase that is not a free-window grant
 * (paid Stripe checkout or non-window free promo).
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

/** Course slugs where the user has mock-exam (non free-window) access. */
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
