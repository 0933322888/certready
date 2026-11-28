import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

/**
 * Compact promotional strip shown directly below the hero.
 * Copy and code come from the configured promotion (see config/blackFridayPromo.js);
 * this component never invents expiry claims or discount amounts.
 */
export default function PromoBanner() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface border-b border-border" aria-labelledby="promo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="min-w-0">
            <h2 id="promo-heading" className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-1.5">
              {t('home.promo.title')}
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              {t('home.promo.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm">
              <span className="text-text-muted">{t('home.promo.codeLabel')}</span>
              <span className="font-mono font-bold tracking-wider">BLACKFRIDAY</span>
            </div>
            <Link to={paths.trades}>
              <Button
                className="w-full sm:w-auto"
                onClick={() => trackEvent('promo_clicked', { cta_location: 'promo_banner', cta_text: 'Explore Courses' })}
              >
                {t('home.promo.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}