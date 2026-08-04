import { autoservtechCourse as course } from '../client/src/data/autoservtechCourse.js';
console.log('id/slug:', course.id, course.slug);
console.log('title:', course.title);
console.log('parts:', (course.parts || []).length);
const chapters = (course.parts || []).flatMap(p => p.chapters || []);
console.log('chapters:', chapters.length);
if (chapters.length > 0) {
  console.log('first chapter id/title:', chapters[0].id, '-', chapters[0].title || chapters[0].number);
  console.log('first chapter sample sections count:', (chapters[0].sections || []).length);
}
else {
  console.log('no chapters found');
}
