import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Caring for an Aging Parent — a self-development micro-course in the
 * Build Yourself umbrella. 10 lessons, one unit, 5–10 minutes each.
 *
 * Anchor traditions: Pauline Boss (ambiguous loss), Atul Gawande
 * (Being Mortal), adult attachment theory, Kristin Neff (self-compassion),
 * ACT (Hayes), George Bonanno (modern grief science).
 *
 * Source language: English (single source-of-truth; runtime translation
 * by Claude follows the same pattern as the Knowing Yourself track).
 *
 * IMPORTANT: this pack does not provide medical, legal, or financial
 * advice. Every lesson defers those decisions to the parent and their
 * professional team. See docs/curriculum/TRACK-CARING-AGING-PARENT-PLAN.md
 * for the full methodology and content-care notes.
 */
const meta: CoursePackMeta = {
  id: 'caring-aging-parent',
  type: 'self-development',
  displayName: 'Caring for an Aging Parent',
  // Self-development tracks have no target language.
  targetLanguageId: undefined,
  // Authored in English; speaker-specific variants are runtime-translated.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🤝',
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

/** Synchronous lesson lookup. Falls back to the english variant for any
 *  speaker that doesn't have a per-speaker variant authored yet — matches
 *  the language-shona pattern. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
