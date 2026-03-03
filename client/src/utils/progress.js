const KEY = (courseId) => `certready_progress_${courseId}`;

export const markChapterComplete = (courseId, chapterId) => {
  const progress = getProgress(courseId);
  if (!progress.completed.includes(chapterId)) {
    progress.completed.push(chapterId);
    localStorage.setItem(KEY(courseId), JSON.stringify(progress));
  }
};

export const getProgress = (courseId) => {
  const stored = localStorage.getItem(KEY(courseId));
  return stored ? JSON.parse(stored) : { completed: [], lastChapter: null };
};

export const setLastChapter = (courseId, chapterId) => {
  const progress = getProgress(courseId);
  progress.lastChapter = chapterId;
  localStorage.setItem(KEY(courseId), JSON.stringify(progress));
};
