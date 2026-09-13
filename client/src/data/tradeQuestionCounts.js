/**
 * Real question counts per trade from the question bank.
 * Provides real counts and standardized rounded-to-tens display (e.g. 327 -> "320+").
 */

export const TRADE_QUESTION_COUNTS = {
  hairstylist: {
    actual: 328,
    tradeCode: '332A',
    courseSlug: 'hairstylist-332a',
  },
  'construction-electrician': {
    actual: 327,
    tradeCode: '309A',
    courseSlug: 'construction-electrician-309a',
  },
  autoservtech: {
    actual: 286,
    tradeCode: '310S',
    courseSlug: 'autoservtech-310s',
  },
  welder: {
    actual: 275,
    tradeCode: '456A',
    courseSlug: 'welder-456a',
  },
  plumber: {
    actual: 234,
    tradeCode: '306A',
    courseSlug: 'plumber-306a',
  },
  'refrigeration-air-conditioning-mechanic': {
    actual: 207,
    tradeCode: '313A',
    courseSlug: 'refrigeration-air-conditioning-mechanic-313a',
  },
  hvac: {
    actual: 207,
    tradeCode: '313A',
    courseSlug: 'refrigeration-air-conditioning-mechanic-313a',
  },
  carpenter: {
    actual: 199,
    tradeCode: '403A',
    courseSlug: 'carpenter-403a',
  },
};

/**
 * Total practice questions across all active trades in the platform.
 */
export const TOTAL_PLATFORM_QUESTIONS = 1856;

/**
 * Rounds an integer down to the nearest ten (e.g. 324 -> 320, 199 -> 190)
 */
export function roundDownToTen(n) {
  if (typeof n !== 'number' || isNaN(n) || n <= 0) return 0;
  return Math.floor(n / 10) * 10;
}

/**
 * Formats a count rounded to the nearest ten with a plus suffix (e.g. 324 -> "320+").
 */
export function formatQuestionCountRounded(n) {
  const rounded = roundDownToTen(n);
  return rounded > 0 ? `${rounded}+` : '0';
}

/**
 * Normalizes tradeSlug / courseSlug to trade key.
 */
function normalizeTradeKey(slugOrCode) {
  if (!slugOrCode) return '';
  const s = String(slugOrCode).toLowerCase().trim();
  if (s.includes('electrician') && !s.includes('industrial')) return 'construction-electrician';
  if (s.includes('plumber')) return 'plumber';
  if (s.includes('hairstylist')) return 'hairstylist';
  if (s.includes('autoservtech') || s.includes('310s')) return 'autoservtech';
  if (s.includes('carpenter')) return 'carpenter';
  if (s.includes('welder')) return 'welder';
  if (s.includes('refrigeration') || s.includes('hvac') || s.includes('313a')) return 'refrigeration-air-conditioning-mechanic';
  return s;
}

/**
 * Gets real question count for a trade or course slug.
 */
export function getTradeQuestionCount(slugOrCode) {
  const key = normalizeTradeKey(slugOrCode);
  return TRADE_QUESTION_COUNTS[key]?.actual || 0;
}

/**
 * Gets rounded display string for a trade or course slug (e.g. "320+").
 */
export function getTradeQuestionCountDisplay(slugOrCode) {
  const count = getTradeQuestionCount(slugOrCode);
  return formatQuestionCountRounded(count);
}
