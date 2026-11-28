import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

/**
 * Trade selector — the primary discovery surface on the homepage.
 * Routes are derived from the existing tradeGuides data so the six live trades
 * stay in sync with the rest of the site.
 */
const TRADES = [
  { slug: 'hairstylist', code: '332A' },
  { slug: 'carpenter', code: '403A' },
  { slug: 'construction-electrician', code: '309A' },
  { slug: 'plumber', code: '306A' },
  { slug: 'refrigeration-air-conditioning-mechanic', code: '313A' },
  { slug: 'welder', code: '456A' },
];

export default function TradeSelector() {
  const { t } = useTranslation();

  return (
    <section id="trades" className="py-16 sm:py-20 bg-bg scroll-mt-20" aria-labelledby="trade-selector-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="trade-selector-heading" className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
            {t('home.tradeSelector.title')}
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            {t('home.tradeSelector.subtitle')}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {TRADES.map((trade) => (
            <li key={trade.slug}>
              <Link
                to={paths.practiceTest(trade.slug)}
                onClick={() => trackEvent('trade_selected', {
                  trade_name: t(`home.tradeSelector.trades.${trade.slug}.name`),
                  trade_code: trade.code,
                  cta_location: 'homepage_trade_selector',
                })}
                className="group flex h-full items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6 hover:border-accent hover:bg-accent/5 focus-visible:border-accent transition-colors"
              >
                <span className="min-w-0">
                  <span className="block text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {t(`home.tradeSelector.trades.${trade.slug}.name`)}
                  </span>
                  <span className="mt-1 inline-block rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-accent group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    {t('home.tradeSelector.codeLabel', { code: trade.code })}
                  </span>
                </span>
                <svg
                  className="h-5 w-5 shrink-0 text-text-dim group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            to={paths.practiceTests}
            className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
          >
            {t('home.tradeSelector.allPracticeTests')} →
          </Link>
        </div>
      </div>
    </section>
  );
}