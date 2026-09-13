export const formatPrice = (cents, currency = 'CAD') => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(cents / 100);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

/**
 * Rounds an integer down to the nearest ten and appends '+' (e.g. 324 -> "320+")
 */
export const formatRoundedQuestions = (count) => {
  const n = typeof count === 'number' ? count : parseInt(count, 10);
  if (!n || isNaN(n) || n <= 0) return '0';
  const rounded = Math.floor(n / 10) * 10;
  return `${rounded}+`;
};
