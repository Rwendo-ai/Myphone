import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Parenting Under Pressure — self-development track under the
 * "Build Yourself" umbrella, parallel to Knowing Yourself.
 *
 * 12 lessons, one unit. Audience: parents at any stage —
 * toddlers through teens through adult kids. Written for a single
 * mum in Lagos, a stay-at-home dad in Sydney, and a grandparent
 * raising a grandchild in Manila.
 *
 * Plan: `docs/curriculum/TRACK-PARENTING-UNDER-PRESSURE-PLAN.md`.
 */
const meta: CoursePackMeta = {
  id: 'parenting-under-pressure',
  type: 'self-development',
  displayName: 'Parenting Under Pressure',
  targetLanguageId: undefined,
  // English source-of-truth; runtime translation by Claude per the
  // Knowing Yourself pattern.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '👨‍👩‍👧',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const englishVariant = {
  speakerId: 'english',
  curriculumLoader: async () => {
    const mod = await import('./english/curriculum');
    return mod.default ?? mod.lessons;
  },
};

const pack: CoursePack = {
  meta,
  variants: {
    english: englishVariant,
  },
};

/** Synchronous lesson lookup. Mirrors the language-pack pattern so the
 *  lesson runtime can load Parenting Under Pressure lessons identically
 *  to language lessons. Other speaker variants will fall back to the
 *  English source until per-speaker variants are authored. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
