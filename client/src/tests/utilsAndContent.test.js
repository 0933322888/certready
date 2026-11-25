import { describe, it, expect } from 'vitest';
import { formatPrice, formatDate } from '../utils/formatters.js';
import { paths } from '../utils/routes.js';
import { COURSE_SLUGS, getCourse } from '../data/courseContent.js';
import { getAllChapters } from '../data/courseHelpers.js';
import { FREE_WINDOW_PREVIEW_PARTS, isChapterAccessible } from '../utils/freeWindowAccess.js';

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

  describe('free-window course access', () => {
    const course = {
      parts: [
        { chapters: [{ id: 'chapter-1' }, { id: 'chapter-2' }] },
        { chapters: [{ id: 'chapter-3' }, { id: 'chapter-4' }] },
        { chapters: [{ id: 'chapter-5', isFree: true }, { id: 'chapter-6' }] },
        { chapters: [{ id: 'mock-exam', isMockExam: true }] },
      ],
    };

    it('grants temporary access to all chapters in the first two parts', () => {
      const firstFourChapters = course.parts.slice(0, 2).flatMap((part) => part.chapters);
      const [chapter5, chapter6] = course.parts[2].chapters;
      const [mockExam] = course.parts[3].chapters;
      const trialAccess = { hasFreeWindowAccess: true };

      expect(FREE_WINDOW_PREVIEW_PARTS).toBe(2);
      firstFourChapters.forEach((chapter) => {
        expect(isChapterAccessible(chapter, course, trialAccess)).toBe(true);
      });
      expect(isChapterAccessible(chapter5, course, trialAccess)).toBe(true);
      expect(isChapterAccessible(chapter6, course, trialAccess)).toBe(false);
      expect(isChapterAccessible(mockExam, course, trialAccess)).toBe(false);
    });

    it('preserves full paid access and the public free-chapter preview', () => {
      const [chapter3] = course.parts[1].chapters;
      const [chapter5] = course.parts[2].chapters;
      const [mockExam] = course.parts[3].chapters;

      expect(isChapterAccessible(chapter3, course, { hasFullCourseAccess: true })).toBe(true);
      expect(isChapterAccessible(mockExam, course, {
        hasFullCourseAccess: true,
        hasMockExamAccess: true,
      })).toBe(true);
      expect(isChapterAccessible(chapter3, course)).toBe(false);
      expect(isChapterAccessible(chapter5, course)).toBe(true);
    });

    it('grants each course first two parts during the free window', () => {
      ['en', 'fr', 'ru'].forEach((language) => {
        COURSE_SLUGS.forEach((slug) => {
          const courseData = getCourse(slug, language);
          const freePartChapterIds = new Set(
            courseData.parts.slice(0, FREE_WINDOW_PREVIEW_PARTS)
              .flatMap((part) => part.chapters)
              .map((chapter) => chapter.id)
          );
          getAllChapters(courseData).forEach((chapter) => {
            if (chapter.isMockExam) return;
            const accessible = isChapterAccessible(chapter, courseData, { hasFreeWindowAccess: true });
            expect(accessible, `${language}: ${slug}: ${chapter.id}`).toBe(
              freePartChapterIds.has(chapter.id) || Boolean(chapter.isFree)
            );
          });
        });
      });
    });
  });

  it('falls back to English when a language is not supported', () => {
    const course = getCourse('hairstylist-332a', 'es');
    expect(course).not.toBeNull();
    expect(course.id).toBe('hairstylist-332a');
  });
});
