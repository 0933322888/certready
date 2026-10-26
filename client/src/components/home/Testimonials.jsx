import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import api from '../../utils/api';

export default function Testimonials() {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.get('/feedback/approved')
      .then((res) => setTestimonials(res.data))
      .catch(() => setTestimonials([]));
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            {t('home.trustedByHeading')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial._id} hover>
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial.customerName}</h4>
                  <p className="text-sm text-text-muted">
                    {testimonial.course?.title}{testimonial.course?.tradeCode ? ` (${testimonial.course.tradeCode})` : ''}
                  </p>
                </div>
              </div>
              <p className="text-text-primary leading-relaxed">“{testimonial.text}”</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
