import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { trackEvent } from '../utils/analytics.js';

describe('trackEvent', () => {
  let gtag;
  let plausible;
  let listener;

  beforeEach(() => {
    gtag = vi.fn();
    plausible = vi.fn();
    window.gtag = gtag;
    window.plausible = plausible;
    listener = vi.fn();
    window.addEventListener('certready:analytics', listener);
  });

  afterEach(() => {
    delete window.gtag;
    delete window.plausible;
    window.removeEventListener('certready:analytics', listener);
  });

  it('forwards the event name and properties to gtag exactly once', () => {
    trackEvent('trade_selected', { trade_name: 'Welder', trade_code: '456A' });

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith('event', 'trade_selected', {
      trade_name: 'Welder',
      trade_code: '456A',
    });
  });

  it('forwards the event to Plausible with properties', () => {
    trackEvent('promo_clicked', { cta_location: 'promo_banner' });

    expect(plausible).toHaveBeenCalledTimes(1);
    expect(plausible).toHaveBeenCalledWith('promo_clicked', {
      props: { cta_location: 'promo_banner' },
    });
  });

  it('dispatches a single local CustomEvent with the event name and properties', () => {
    trackEvent('sample_question_answered', { is_correct: true });

    expect(listener).toHaveBeenCalledTimes(1);
    const event = listener.mock.calls[0][0];
    expect(event.detail.eventName).toBe('sample_question_answered');
    expect(event.detail.properties).toEqual({ is_correct: true });
  });

  it('does not throw when no analytics globals are present', () => {
    delete window.gtag;
    delete window.plausible;

    expect(() => trackEvent('purchase_cta_clicked', { cta_text: 'Start Practising' })).not.toThrow();
    expect(listener).toHaveBeenCalledTimes(1);
  });
});