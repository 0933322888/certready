import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../utils/analytics';

/**
 * Automatically tracks page views across all SPA route changes.
 * Supports Google Analytics (gtag), Plausible, and local CustomEvent.
 */
export default function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Short timeout to allow Helmet / SEO title update to complete
    const timer = setTimeout(() => {
      trackPageView(`${pathname}${search}`);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
