import { hairstylistCourse as courseEn } from './hairstylistCourse';
import { hairstylistCourseFr } from './hairstylistCourse.fr';
import plumberCourseData from './plumberCourse';

const coursesByLang = {
  en: {
    'hairstylist-332a': courseEn,
    'plumber-306a': plumberCourseData,
  },
  fr: {
    'hairstylist-332a': hairstylistCourseFr,
    'plumber-306a': plumberCourseData, // TODO: add plumberCourse.fr.js for French
  },
};

/** All course slugs available for purchase (single source of truth) */
export const COURSE_SLUGS = ['hairstylist-332a', 'plumber-306a'];

/**
 * Get course data for a given slug and language.
 * Uses base language code (e.g. 'en' from 'en-US'). Falls back to English if not available.
 */
export function getCourse(slug, lang = 'en') {
  const baseLang = (lang && String(lang).split('-')[0]) || 'en';
  const langCourses = coursesByLang[baseLang] || coursesByLang.en;
  return langCourses[slug] || coursesByLang.en[slug] || null;
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
];
