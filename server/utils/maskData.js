/**
 * Utility functions to mask sensitive user and payment data in administrative views / responses.
 */

/**
 * Mask an email address.
 * Example: john.doe@example.com -> j***e@example.com
 * Example: a@b.com -> a***@b.com
 * Example: ab@example.com -> a***b@example.com
 */
export function maskEmail(email) {
  if (!email || typeof email !== 'string') return email;
  const parts = email.split('@');
  if (parts.length !== 2) return email;

  const [username, domain] = parts;
  if (!username) return email;

  let maskedUsername;
  if (username.length <= 1) {
    maskedUsername = `${username}***`;
  } else if (username.length === 2) {
    maskedUsername = `${username[0]}***${username[1]}`;
  } else {
    maskedUsername = `${username[0]}***${username[username.length - 1]}`;
  }

  return `${maskedUsername}@${domain}`;
}

/**
 * Mask an ID (e.g. MongoDB ObjectId, Account ID, Stripe Customer ID).
 * Shows first 4 and last 4 characters, masks the middle.
 * Example: 6649f81a1796d10e8f2a1b9c -> 6649...1b9c
 * Example: cus_1234567890 -> cus_...7890
 */
export function maskId(id) {
  if (!id) return id;
  const str = String(id);
  if (str.length <= 8) return '****';
  return `${str.slice(0, 4)}...${str.slice(-4)}`;
}

/**
 * Mask a Stripe Payment Intent or Stripe Session ID.
 * Keeps prefix (e.g. pi_ or cs_) and the last 4 characters.
 * Example: pi_3Pxyz1234567890ABCDEF -> pi_...CDEF
 */
export function maskPaymentIntent(pi) {
  if (!pi || typeof pi !== 'string') return pi;
  if (pi.length <= 8) return '****';

  if (pi.startsWith('pi_')) {
    return `pi_...${pi.slice(-4)}`;
  }
  if (pi.startsWith('cs_')) {
    return `cs_...${pi.slice(-4)}`;
  }
  return `${pi.slice(0, 4)}...${pi.slice(-4)}`;
}
