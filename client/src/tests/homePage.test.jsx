import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js';
import Hero from '../components/home/Hero.jsx';
import PromoBanner from '../components/home/PromoBanner.jsx';
import TradeSelector from '../components/home/TradeSelector.jsx';
import SampleQuestionPreview from '../components/home/SampleQuestionPreview.jsx';

function renderWithProviders(ui) {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>{ui}</MemoryRouter>
    </I18nextProvider>
  );
}

describe('homepage hero', () => {
  it('renders a single h1 and scrolls to the trade selector', () => {
    const { container } = renderWithProviders(<Hero />);

    expect(container.querySelectorAll('h1')).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Prepare with confidence. Practise with purpose.'
    );
    expect(screen.getByRole('link', { name: 'Find Your Trade' })).toHaveAttribute('href', '#trades');
  });
});

describe('PromoBanner', () => {
  it('shows the configured promo code and links to the trades page', () => {
    renderWithProviders(<PromoBanner />);

    expect(screen.getByText('BLACKFRIDAY')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Explore Courses' })).toHaveAttribute('href', '/trades');
  });
});

describe('TradeSelector', () => {
  it('links every trade card to its practice-test route', () => {
    const { container } = renderWithProviders(<TradeSelector />);
    const links = Array.from(container.querySelectorAll('#trades li a'));

    expect(links).toHaveLength(6);
    const hrefs = links.map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/practice-tests/hairstylist',
        '/practice-tests/carpenter',
        '/practice-tests/construction-electrician',
        '/practice-tests/plumber',
        '/practice-tests/refrigeration-air-conditioning-mechanic',
        '/practice-tests/welder',
      ])
    );
  });

  it('renders each card with the trade name and code badge, without icons', () => {
    const { container } = renderWithProviders(<TradeSelector />);
    const cards = Array.from(container.querySelectorAll('#trades li a'));

    expect(cards).toHaveLength(6);
    cards.forEach((card) => {
      expect(card).toHaveTextContent(/Red Seal \d{3}[A-Z]/);
      expect(card.querySelector('svg')).toBeInTheDocument();
    });
    // No emoji/icon glyphs should remain in the card text
    expect(container.querySelector('#trades').textContent).not.toMatch(/[\p{Extended_Pictographic}]/u);
  });

  it('emits trade_selected once with the trade name and code', () => {
    const listener = vi.fn();
    window.addEventListener('certready:analytics', listener);
    const { container } = renderWithProviders(<TradeSelector />);

    const carpenter = container.querySelector('a[href="/practice-tests/carpenter"]');
    fireEvent.click(carpenter);

    expect(listener).toHaveBeenCalledTimes(1);
    const { eventName, properties } = listener.mock.calls[0][0].detail;
    expect(eventName).toBe('trade_selected');
    expect(properties.trade_name).toBe('Carpenter');
    expect(properties.trade_code).toBe('403A');
    expect(properties.cta_location).toBe('homepage_trade_selector');
    window.removeEventListener('certready:analytics', listener);
  });
});

describe('SampleQuestionPreview', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('reveals the explanation and emits sample_question_answered once after answering', () => {
    const listener = vi.fn();
    window.addEventListener('certready:analytics', listener);
    renderWithProviders(<SampleQuestionPreview />);

    expect(screen.queryByText(/CSA Z94\.1 Class E/)).not.toBeInTheDocument();

    const section = screen.getByRole('region', { name: 'Try a Sample Question' });
    fireEvent.click(within(section).getByRole('button', { name: /C\.Class E/ }));

    expect(screen.getByText(/CSA Z94\.1 Class E/)).toBeInTheDocument();
    expect(listener).toHaveBeenCalledTimes(1);
    const { eventName, properties } = listener.mock.calls[0][0].detail;
    expect(eventName).toBe('sample_question_answered');
    expect(properties.is_correct).toBe(true);
    expect(properties.trade_code).toBe('403A');
    window.removeEventListener('certready:analytics', listener);
  });

  it('labels the question as a CertReady practice question, not an official exam item', () => {
    renderWithProviders(<SampleQuestionPreview />);

    expect(
      screen.getByText(/not an official Red Seal examination question/i)
    ).toBeInTheDocument();
  });
});