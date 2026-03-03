/**
 * SEO utilities — trade-agnostic. All metadata is generated from course/guide data.
 * Adding a new trade course automatically gets correct SEO via getCoursePageSEO(course).
 */

export function getCoursePageSEO(course) {
  if (!course) return null;
  const tradeName = course.trade;
  const tradeCode = course.tradeCode || '';
  const totalChapters = course.totalChapters ?? 0;
  const totalQuestions = course.totalQuestions ?? 0;

  return {
    title: `${tradeName} Red Seal Exam Prep — ${tradeCode} Study Guide`,
    description: `Prepare for your ${tradeName} Red Seal certification exam with confidence. ${totalChapters} chapters, ${totalQuestions}+ practice questions, and a full mock exam. Based on the official ${tradeCode} standard. Study at your own pace — one-time purchase, lifetime access.`,
    canonical: `/courses/${course.slug}`,
    ogType: 'product',
    ogImage: `/og-courses/${course.slug}.png`,
    structuredData: getCourseStructuredData(course),
  };
}

export function getLearnPageSEO(course, currentChapter) {
  if (!course || !currentChapter) return null;
  const tradeName = course.trade;
  const estimatedMinutes = currentChapter.estimatedMinutes ?? 15;

  return {
    title: `${currentChapter.title} — ${tradeName} Exam Prep`,
    description: `Study ${currentChapter.title} for your ${tradeName} Red Seal exam. ${estimatedMinutes} min read with practice questions and explanations.`,
    canonical: `/learn/${course.slug}`,
    noIndex: true,
  };
}

export function getHomePageSEO() {
  return {
    title: 'Red Seal Exam Prep for Canadian Trades — Study Guides & Practice Questions',
    description: 'CertReady offers comprehensive Red Seal exam preparation courses for Canadian trades certification candidates. Practice questions, study guides, mock exams. Pass first try.',
    canonical: '/',
  };
}

/** Guide object: { tradeName, slug, ... } or { name, slug, ... } */
export function getTradeGuideSEO(guide) {
  if (!guide) return null;
  const tradeName = guide.tradeName || guide.name;

  return {
    title: `${tradeName} Red Seal Exam — Complete Study Guide`,
    description: `Everything you need to know about the ${tradeName} Red Seal interprovincial exam. Exam weighting, what to study, pass rates, and free practice questions.`,
    canonical: `/guides/${guide.slug}`,
  };
}

export function getCourseStructuredData(course) {
  if (!course) return null;
  const price = typeof course.price === 'number' ? (course.price / 100).toFixed(2) : '0.00';

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description || `${course.trade} Red Seal exam preparation course`,
    provider: {
      '@type': 'Organization',
      name: 'CertReady',
      sameAs: 'https://www.certready.ca',
    },
    educationalLevel: 'Professional Certification',
    about: {
      '@type': 'Thing',
      name: `${course.trade} Red Seal Certification`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      instructor: {
        '@type': 'Organization',
        name: 'CertReady',
      },
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      url: `https://www.certready.ca/courses/${course.slug}`,
    },
    numberOfCredits: course.totalChapters ?? 0,
    totalHistoricalEnrollment: null,
  };
}

export function getOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CertReady',
    url: 'https://www.certready.ca',
    description: 'Online exam preparation courses for Canadian Red Seal trades certification candidates',
    sameAs: [],
  };
}

export function getFAQStructuredData(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** items = [{ name: 'Home', url: '/' }, { name: 'Courses', url: '/courses' }, ...] */
export function getBreadcrumbStructuredData(items) {
  if (!items || !items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.certready.ca${item.url}`,
    })),
  };
}

/** SEO for All Courses page */
export function getAllCoursesPageSEO() {
  return {
    title: 'Red Seal Exam Prep Courses — All Trades',
    description: "Browse CertReady's Red Seal exam preparation courses for Canadian trades. Hairstylist (332A), Plumber (306A), and more. One-time purchase, lifetime access, free first 2 chapters.",
    canonical: '/courses',
  };
}

/** SEO for free practice page — pass tradeName, tradeCode, tradeSlug, questionCount */
export function getPracticePageSEO({ tradeName, tradeCode, tradeSlug, questionCount = 5 }) {
  return {
    title: `Free ${tradeName} Red Seal Practice Questions`,
    description: `Try ${questionCount} free ${tradeName} Red Seal exam practice questions with full explanations. No account required. Based on the official ${tradeCode} standard.`,
    canonical: `/practice/${tradeSlug}`,
  };
}
