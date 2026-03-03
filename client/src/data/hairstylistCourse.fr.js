// =============================================================================
// French course content — replace with translated content as needed.
// For now re-exports English structure so UI and navigation work in French.
// =============================================================================

import { hairstylistCourse as courseEn } from './hairstylistCourse';

export const hairstylistCourseFr = {
  ...courseEn,
  title: 'Préparation à l\'examen de certification en coiffure',
  subtitle: 'Guide d\'étude complet — Métiers spécialisés Ontario 332A',
  trade: 'Coiffure',
  features: [
    '15 chapitres complets couvrant les 17 sujets d\'examen',
    'Plus de 75 questions pratiques avec explications',
    'Examen simulé de 50 questions (Chapitre 13)',
    'Glossaire de plus de 60 termes (Chapitre 14)',
    'Stratégies d\'examen et conseils d\'étude (Chapitre 15)',
    'Programme des niveaux 1 et 2 (480 h au total)',
    'Accès à vie — étudiez à votre rythme',
    'Basé sur la norme officielle 332A des métiers spécialisés de l\'Ontario',
  ],
  parts: courseEn.parts.map((part) => ({
    ...part,
    title: part.title,
    chapters: part.chapters.map((ch) => ({
      ...ch,
      title: ch.title,
      subtitle: ch.subtitle,
      sections: ch.sections?.map((sec) => ({
        ...sec,
        title: sec.title,
        content: sec.content,
      })) ?? [],
      practiceQuestions: ch.practiceQuestions ?? [],
    })),
  })),
};
