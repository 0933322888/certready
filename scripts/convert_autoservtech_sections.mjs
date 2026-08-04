import fs from 'fs';
import path from 'path';
import { autoservtechCourse as course } from '../client/src/data/autoservtechCourse.js';

const outPath = path.resolve('client/src/data/autoservtechCourse.js');

let converted = 0;
for (const part of (course.parts || [])) {
  for (const chapter of (part.chapters || [])) {
    const secs = chapter.sections || [];
    if (secs.length === 0) continue;
    // Detect new-style: section objects that have 'content' array or 'title' and 'content'
    const isNew = secs.every(s => s && (Array.isArray(s.content) || s.content !== undefined || s.title));
    if (isNew) continue;
    // Wrap existing array into a single section with content
    const newSection = {
      id: `${chapter.id}-s1`,
      title: chapter.title,
      content: secs,
    };
    chapter.sections = [newSection];
    converted++;
  }
}

// Write back as an ES module exporting the object in pretty JSON-ish format
const code = `export const autoservtechCourse = ${JSON.stringify(course, null, 2)};\n\nexport default autoservtechCourse;\n`;
fs.writeFileSync(outPath, code, 'utf8');
console.log('Converted chapters:', converted);
console.log('Wrote', outPath);
