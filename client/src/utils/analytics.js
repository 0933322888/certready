/**
 * Lightweight, non-intrusive client-side analytics helper
 * Safely dispatches standard analytics events (e.g. gtag, plausible, custom events)
 */

export function trackPageView(pathname, title) {
  const pagePath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
  const pageTitle = title || (typeof document !== 'undefined' ? document.title : '');

  // 1. Google Analytics (gtag page_view)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href,
      });
    } catch (_err) {
      // Ignore tracking errors
    }
  }

  // 2. Plausible
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    try {
      window.plausible('pageview', {
        props: { path: pagePath },
      });
    } catch (_err) {
      // Ignore tracking errors
    }
  }

  // 3. Dispatch browser CustomEvent
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    try {
      const event = new CustomEvent('certready:pageview', {
        detail: { pagePath, pageTitle, timestamp: new Date().toISOString() },
      });
      window.dispatchEvent(event);
    } catch (_err) {
      // Ignore dispatch errors
    }
  }
}

export function trackEvent(eventName, properties = {}) {
  // 1. Google Analytics (gtag)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, properties);
    } catch (_err) {
      // Ignore tracking errors
    }
  }

  // 2. Plausible
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    try {
      window.plausible(eventName, { props: properties });
    } catch (_err) {
      // Ignore tracking errors
    }
  }

  // 3. Dispatch browser CustomEvent for local instrumentation or testing
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    try {
      const event = new CustomEvent('certready:analytics', {
        detail: { eventName, properties, timestamp: new Date().toISOString() },
      });
      window.dispatchEvent(event);
    } catch (_err) {
      // Ignore dispatch errors
    }
  }
}
