const BLACK_FRIDAY_PROMO_START = '2026-11-24T00:00:00.000Z';
const BLACK_FRIDAY_PROMO_END = '2026-12-01T04:59:59.999Z';

export function isBlackFridayPromoActive(now = new Date()) {
  const currentTime = now instanceof Date ? now.getTime() : new Date(now).getTime();
  return currentTime >= new Date(BLACK_FRIDAY_PROMO_START).getTime()
    && currentTime <= new Date(BLACK_FRIDAY_PROMO_END).getTime();
}
