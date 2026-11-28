import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

/**
 * Static hero. Replaces the former rotating HeroCarousel so the value
 * proposition and calls to action are visible without any interaction.
 */
export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden border-b border-border" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-bg/95" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-accent uppercase mb-4">
          {t('home.hero.eyebrow')}
        </p>
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-5 leading-tight"
        >
          {t('home.hero.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a href="#trades" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('find_trade_clicked', { cta_location: 'hero', cta_text: 'Find Your Trade' })}
            >
              {t('home.hero.primaryCta')}
            </Button>
          </a>
          <Link to={paths.practiceTests} className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('explore_practice_tests_clicked', { cta_location: 'hero', cta_text: 'Explore Practice Tests' })}
            >
              {t('home.hero.secondaryCta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}