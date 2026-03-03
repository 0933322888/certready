import { useState, useEffect } from 'react';
import api from '../utils/api';

/**
 * Fetches pricing for all published courses from the API.
 * Returns currentPrice, fullPrice, discountedSpotsLeft, and currency per slug.
 * @returns {{ pricingBySlug: Record<string, { currentPrice: number, fullPrice: number, discountedSpotsLeft: number, currency: string }>, loading: boolean }}
 */
export function useCoursePricing() {
  const [pricingBySlug, setPricingBySlug] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/courses')
      .then((res) => {
        const map = {};
        (res.data || []).forEach((c) => {
          map[c.slug] = {
            currentPrice: c.currentPrice ?? c.price,
            fullPrice: c.fullPrice ?? c.price,
            discountedSpotsLeft: c.discountedSpotsLeft ?? 0,
            currency: c.currency || 'CAD',
          };
        });
        setPricingBySlug(map);
      })
      .catch(() => setPricingBySlug({}))
      .finally(() => setLoading(false));
  }, []);

  return { pricingBySlug, loading };
}

/**
 * Fetches pricing for a single course by slug.
 * @param {string|null} slug - Course slug
 * @returns {{ pricing: { currentPrice: number, fullPrice: number, discountedSpotsLeft: number, currency: string } | null, loading: boolean }}
 */
export function useCoursePricingBySlug(slug) {
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(!!slug);

  useEffect(() => {
    if (!slug) {
      setPricing(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    api.get(`/courses/${slug}`)
      .then((res) => {
        setPricing({
          currentPrice: res.data.currentPrice ?? res.data.price,
          fullPrice: res.data.fullPrice ?? res.data.price,
          discountedSpotsLeft: res.data.discountedSpotsLeft ?? 0,
          currency: res.data.currency || 'CAD',
        });
      })
      .catch(() => setPricing(null))
      .finally(() => setLoading(false));
  }, [slug]);

  return { pricing, loading };
}
