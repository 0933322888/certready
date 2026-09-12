import { describe, it, expect } from 'vitest';
import { formatPrice, formatDate } from '../utils/formatters.js';
import { paths } from '../utils/routes.js';
import { COURSE_SLUGS, getCourse } from '../data/courseContent.js';

describe('formatters', () => {
  it('formats cents to CAD currency string properly', () => {
    const formatted = formatPrice(4900, 'CAD');
    expect(formatted).toContain('49');
    expect(formatted).toContain('$');
  });

  it('formats dates consistently', () => {
    const formatted = formatDate('2026-01-15T12:00:00Z');
    expect(formatted).toContain('2026');
    expect(formatted).toContain('January');
    expect(formatted).toContain('15');
  });
});

describe('routes', () => {
  it('builds canonical route paths', () => {
    expect(paths.trade('plumber-306a')).toBe('/trades/plumber-306a');
    expect(paths.tradeGuide('welder-456a')).toBe('/trades/welder-456a-red-seal');
    expect(paths.practiceTest('carpenter-403a')).toBe('/practice-tests/carpenter-403a');
    expect(paths.mockExam('autoservtech-310s')).toBe('/practice-tests/autoservtech-310s/mock-exam');
  });
});

describe('courseContent', () => {
  it('exports valid COURSE_SLUGS and all slugs resolve in getCourse', () => {
    expect(COURSE_SLUGS.length).toBeGreaterThan(0);
    COURSE_SLUGS.forEach((slug) => {
      const course = getCourse(slug, 'en');
      expect(course).not.toBeNull();
      expect(course.id).toBeDefined();
      expect(course.trade).toBeDefined();
    });
  });

  it('falls back to English when a language is not supported', () => {
    const course = getCourse('hairstylist-332a', 'es');
    expect(course).not.toBeNull();
    expect(course.id).toBe('hairstylist-332a');
  });
});
