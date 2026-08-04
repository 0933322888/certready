import { getGuideBySlug } from '../client/src/data/tradeGuides.js';
const guide = getGuideBySlug('autoservtech');
console.log('guide.courseSlug:', guide?.courseSlug);
if (guide?.courseSlug === 'autoservtech-310s') {
  const mod = await import('../client/src/data/autoservtechCourse.js');
  const course = mod.autoservtechCourse || mod.default || null;
  console.log('course id/slug:', course?.id, course?.slug);
  const chapters = (course?.parts || []).flatMap(p => p.chapters || []);
  console.log('chapters count:', chapters.length);
  console.log('first chapter title:', chapters[0]?.title);
} else {
  console.log('guide not mapped to autoservtech-310s');
}
