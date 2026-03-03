import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Sarah M.',
    trade: 'Hairstylist',
    initials: 'SM',
    text: 'I passed my 332A exam on the first try thanks to CertReady. The practice questions were spot-on and the explanations helped me understand concepts I was struggling with.',
  },
  {
    name: 'James T.',
    trade: 'Hairstylist',
    initials: 'JT',
    text: 'The chapter-by-chapter breakdown made studying manageable. I could study at my own pace and the progress tracking kept me motivated.',
  },
  {
    name: 'Maria L.',
    trade: 'Hairstylist',
    initials: 'ML',
    text: 'Best investment I made for my certification. The content is comprehensive and the format is easy to follow. Highly recommend!',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            {t('home.trustedByHeading')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.trade}</p>
                </div>
              </div>
              <p className="text-text-primary leading-relaxed">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
