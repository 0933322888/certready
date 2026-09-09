const KEY = (courseId) => `certready_progress_${courseId}`;

export const markChapterComplete = (courseId, chapterId) => {
  const progress = getProgress(courseId);
  if (!progress.completed.includes(chapterId)) {
    progress.completed.push(chapterId);
    localStorage.setItem(KEY(courseId), JSON.stringify(progress));
  }
};

export const markChapterIncomplete = (courseId, chapterId) => {
  const progress = getProgress(courseId);
  if (progress.completed.includes(chapterId)) {
    progress.completed = progress.completed.filter((id) => id !== chapterId);
    localStorage.setItem(KEY(courseId), JSON.stringify(progress));
  }
};

export const toggleChapterComplete = (courseId, chapterId) => {
  const progress = getProgress(courseId);
  const isCompleted = progress.completed.includes(chapterId);
  if (isCompleted) {
    progress.completed = progress.completed.filter((id) => id !== chapterId);
  } else {
    progress.completed.push(chapterId);
  }
  localStorage.setItem(KEY(courseId), JSON.stringify(progress));
  return !isCompleted;
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
