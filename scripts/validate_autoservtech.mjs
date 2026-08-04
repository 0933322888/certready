import * as mod from '../client/src/data/autoservtechCourse.js';
const course = mod.autoservtechCourse || mod.default || null;
if (!course || typeof course !== 'object') {
  console.error('ERROR: autoservtechCourse export not found or not an object');
  process.exit(2);
}
const errors = [];
const requiredTop = ['id','slug','title','trade','tradeCode','price','currency','totalChapters','totalQuestions','parts'];
for(const k of requiredTop) if(!(k in course)) errors.push(`missing top-level property: ${k}`);
if(course.id !== course.slug) {
  errors.push(`id and slug mismatch: id='${course.id}' slug='${course.slug}'`);
}
if(!Array.isArray(course.parts) || course.parts.length===0) errors.push('parts must be a non-empty array');
const partIds = new Set();
const chapterIds = new Set();
course.parts && course.parts.forEach((p,pi)=>{
  if(!p || typeof p !== 'object') { errors.push(`part[${pi}] not an object`); return; }
  if(!p.id) errors.push(`part[${pi}] missing id`);
  if(partIds.has(p.id)) errors.push(`duplicate part id: ${p.id}`); else partIds.add(p.id);
  if(!Array.isArray(p.chapters)) errors.push(`part[${pi}].chapters must be array`);
  p.chapters && p.chapters.forEach((ch,ci)=>{
    const idx = `${pi}.${ci}`;
    if(!ch || typeof ch !== 'object') { errors.push(`part[${pi}].chapter[${ci}] not an object`); return; }
    if(!ch.id) errors.push(`chapter[${idx}] missing id`);
    if(chapterIds.has(ch.id)) errors.push(`duplicate chapter id: ${ch.id}`); else chapterIds.add(ch.id);
    if(!('title' in ch) && !('number' in ch)) errors.push(`chapter[${idx}] missing title and number`);
    if(!Array.isArray(ch.sections)) errors.push(`chapter[${idx}].sections must be array`);
    ch.sections && ch.sections.forEach((s,si)=>{
      if(!s || typeof s !== 'object') { errors.push(`chapter[${idx}].section[${si}] not an object`); return; }
      // support new-style sections with `content: []` and legacy inline content items with `type` at top-level
      if (Array.isArray(s.content)) {
        s.content.forEach((cb, cbi) => {
          if (!cb || typeof cb !== 'object') { errors.push(`chapter[${idx}].section[${si}].content[${cbi}] not an object`); return; }
          if (!cb.type) errors.push(`chapter[${idx}].section[${si}].content[${cbi}] missing type`);
        });
      } else if (!s.type) {
        errors.push(`chapter[${idx}].section[${si}] missing type or content array`);
      }
    });
  });
});

// Simple sanity: totalChapters matches counted chapters
const counted = course.parts ? course.parts.flatMap(p=>p.chapters||[]).length : 0;
if(counted !== course.totalChapters) {
  errors.push(`totalChapters mismatch: declared=${course.totalChapters} counted=${counted}`);
}

if(errors.length===0) {
  console.log('OK: autoservtechCourse structure looks valid');
  console.log(`parts=${course.parts.length} chapters=${counted}`);
  process.exit(0);
} else {
  console.error('FOUND ISSUES:');
  errors.forEach(e=>console.error('-',e));
  process.exit(1);
}
