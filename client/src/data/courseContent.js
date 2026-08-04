import { hairstylistCourse as courseEn } from './hairstylistCourse';
import { hairstylistCourseFr } from './hairstylistCourse.fr';
import hairstylistCourseRU from './hairstylistCourse.ru';
import plumberCourseData from './plumberCourse';
import plumberCourseDataFR from './plumberCourse.fr';
import plumberCourseDataRU from './plumberCourse.ru';
import carpenterCourseData from './carpenterCourse';
import electricianCourseData from './constructionElectrician';
import electricianCourseDataFR from './constructionElectrician.fr';
import hvacCourse from './hvacCourse';
import welderCourseData from './welderCourse';
import autoservtechCourseData from './autoservtechCourse';

const coursesByLang = {
  en: {
    'hairstylist-332a': courseEn,
    'plumber-306a': plumberCourseData,
    'autoservtech-310s': autoservtechCourseData,
    'carpenter-403a': carpenterCourseData,
    'construction-electrician-309a': electricianCourseData,
    'refrigeration-air-conditioning-mechanic-313a': hvacCourse,
    'welder-456a': welderCourseData,
  },
  fr: {
    'hairstylist-332a': hairstylistCourseFr,
    'plumber-306a': plumberCourseDataFR,
    'autoservtech-310s': autoservtechCourseData,
    'carpenter-403a': carpenterCourseData,
    'construction-electrician-309a': electricianCourseDataFR,
    'refrigeration-air-conditioning-mechanic-313a': hvacCourse,
    'welder-456a': welderCourseData,
  },
  ru: {
    'hairstylist-332a': hairstylistCourseRU,
    'plumber-306a': plumberCourseDataRU,
    'autoservtech-310s': autoservtechCourseData,
    'carpenter-403a': carpenterCourseData,
    'construction-electrician-309a': electricianCourseData,
    'refrigeration-air-conditioning-mechanic-313a': hvacCourse,
    'welder-456a': welderCourseData,
  },
};

/** All course slugs available for purchase (single source of truth) */
export const COURSE_SLUGS = ['hairstylist-332a', 'plumber-306a', 'autoservtech-310s', 'carpenter-403a', 'construction-electrician-309a', 'refrigeration-air-conditioning-mechanic-313a', 'welder-456a'];

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
  // { code: 'ru', label: 'Русский' },
];
