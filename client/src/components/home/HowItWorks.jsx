import { useTranslation } from 'react-i18next';

const STEPS = [
  { icon: '📖', titleKey: 'home.howSteps.study.title', descKey: 'home.howSteps.study.desc' },
  { icon: '📝', titleKey: 'home.howSteps.practise.title', descKey: 'home.howSteps.practise.desc' },
  { icon: '📈', titleKey: 'home.howSteps.improve.title', descKey: 'home.howSteps.improve.desc' },
];

/** Lightweight three-step explanation of how candidates use CertReady. */
export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-surface" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            {t('home.howItWorksTitle')}
          </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.titleKey} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-2xl" aria-hidden="true">
                {step.icon}
              </div>
              <div className="md:mt-4">
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1.5">
                  <span className="text-accent mr-1.5">{index + 1}.</span>
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}