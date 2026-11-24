import { describe, expect, it } from 'vitest';
import { calculatePromoPrice } from '../utils/promoService.js';

describe('calculatePromoPrice', () => {
  it('applies the Black Friday fixed price of $24.99', () => {
    expect(calculatePromoPrice(
      { type: 'fixed_price', amountCents: 2499 },
      4999
    )).toBe(2499);
  });

  it('caps fixed-price promos at the current price', () => {
    expect(calculatePromoPrice(
      { type: 'fixed_price', amountCents: 2999 },
      4999
    )).toBe(2999);
    expect(calculatePromoPrice(
      { type: 'fixed_price', amountCents: 5999 },
      4999
    )).toBe(4999);
  });

  it('sets free promos to zero', () => {
    expect(calculatePromoPrice({ type: 'free' }, 4999)).toBe(0);
  });
});
