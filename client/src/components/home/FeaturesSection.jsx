import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

const FEATURE_ICONS = ['📚', '❓', '📖', '📝', '⏱️', '♾️'];

export default function FeaturesSection() {
  const { t } = useTranslation();
  const features = t('home.features', { returnObjects: true });
  const featureList = Array.isArray(features) ? features : [];
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            {t('home.whatsIncludedHeading')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('home.whatsInsideDesc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-4xl mb-4">{feature.icon || FEATURE_ICONS[index]}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
