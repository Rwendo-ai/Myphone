import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Money and Meaning — self-development micro-course pack.
 *
 * Build Yourself umbrella sibling of `know-yourself`. Ten lessons, one unit,
 * 5–10 minutes each. About the user's relationship with money — emotional,
 * relational, philosophical. NOT financial advice; the product disclaimer
 * ("Rwen is an AI, not a financial advisor — check with a licensed
 * professional") is implicit in every lesson's tone and explicit in the
 * hook of Lesson 1.
 *
 * Plan: `docs/curriculum/TRACK-MONEY-AND-MEANING-PLAN.md`.
 *
 * v1 status: English source-of-truth authored. Other speaker variants
 * fall back to English at load time — fresh per-speaker authoring is
 * follow-up work along the same Phase K lines as the language packs.
 */
const meta: CoursePackMeta = {
  id: 'money-and-meaning',
  type: 'self-development',
  displayName: 'Money and Meaning',
  targetLanguageId: undefined,
  // Authored in English; runtime translation by Claude per the speaker
  // pack the user is currently using. Fresh per-speaker authoring is a
  // future workstream.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '💰',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {
    english: {
      speakerId: 'english',
      curriculumLoader: async () => {
        const mod = await import('./english/curriculum');
        return mod.default ?? mod.lessons;
      },
    },
  },
};

/** Synchronously fetch a Money and Meaning lesson. Falls back to the
 *  English source-of-truth for any speaker — runtime translation by
 *  Claude is the v1 strategy until per-speaker authoring lands. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
