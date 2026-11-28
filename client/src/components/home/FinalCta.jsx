import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

/** Closing call to action above the footer. */
export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-bg" aria-labelledby="final-cta-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="final-cta-heading" className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
          {t('home.finalCta.title')}
        </h2>
        <p className="text-base sm:text-lg text-text-muted mb-8">
          {t('home.finalCta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a href="#trades" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('purchase_cta_clicked', { cta_location: 'final_cta', cta_text: 'Find Your Trade' })}
            >
              {t('home.finalCta.primaryCta')}
            </Button>
          </a>
          <Link to={paths.practiceTests} className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('purchase_cta_clicked', { cta_location: 'final_cta', cta_text: 'Start Practising' })}
            >
              {t('home.finalCta.secondaryCta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}