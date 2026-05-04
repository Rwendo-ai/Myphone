import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Learn English course pack — target language = English.
 *
 * v1 status: ONE EXAMPLE LESSON authored for the Shona speaker
 * variant (data/courses/language-english/shona/curriculum/m01-l01.ts).
 * Full 100-lesson curriculum is Phase K of PRODUCT-DESIGN.md §8 —
 * authored fresh per speaker, not translated from language-shona.
 */
const meta: CoursePackMeta = {
  id: 'language-english',
  type: 'language',
  displayName: 'Learn English',
  targetLanguageId: 'english',
  // Every speaker EXCEPT english natives. Per-speaker variants fall back
  // to the shona variant at load time (the only variant currently authored).
  availableForSpeakers: ['shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,                      // 1 lesson available — proves the architecture
  isComingSoon: true,                  // user-facing badge until Phase K ships full curriculum
  emoji: '🇬🇧',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {
    shona: {
      speakerId: 'shona',
      curriculumLoader: async () => {
        const mod = await import('./shona/curriculum');
        return mod.default ?? mod.lessons;
      },
    },
  },
};

/** Falls back to the shona variant (the only variant authored at v1) for
 *  any speaker — full per-speaker variants land in Phase K. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./shona/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
