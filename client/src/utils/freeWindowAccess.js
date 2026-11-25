export const FREE_WINDOW_PREVIEW_PARTS = 2;

export function isChapterAccessible(chapter, course, {
  hasFullCourseAccess = false,
  hasFreeWindowAccess = false,
  hasMockExamAccess = false,
} = {}) {
  if (!chapter || !course) return false;
  if (chapter.isMockExam) return hasMockExamAccess;
  if (hasFullCourseAccess) return true;

  if (hasFreeWindowAccess) {
    const isInFreeParts = course.parts
      .slice(0, FREE_WINDOW_PREVIEW_PARTS)
      .some((part) => part.chapters.some((partChapter) => partChapter.id === chapter.id));
    return Boolean(chapter.isFree || isInFreeParts);
  }

  return Boolean(chapter.isFree);
}
