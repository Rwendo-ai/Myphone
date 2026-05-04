import { LessonData } from '../../../../../types/lesson';

import m01l01 from './m01-l01';
import m01l02 from './m01-l02';
import m01l03 from './m01-l03';
import m01l04 from './m01-l04';
import m01l05 from './m01-l05';
import m01l06 from './m01-l06';
import m01l07 from './m01-l07';
import m01l08 from './m01-l08';
import m01l09 from './m01-l09';
import m01l10 from './m01-l10';

/**
 * Money and Meaning — English source-of-truth curriculum.
 *
 * Unit 1: Money and Meaning (10 lessons). Authored 2026-05-04.
 * Plan: `docs/curriculum/TRACK-MONEY-AND-MEANING-PLAN.md`.
 *
 * Self-development micro-course about the user's relationship with money —
 * emotional, relational, philosophical. NOT financial advice. The product
 * disclaimer ("Rwen is an AI, not a financial advisor — check with a licensed
 * professional") is implicit in tone and explicit in Lesson 1's hook.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language packs
 * so the existing lesson runtime can load them without modification.
 */
export const lessons: Record<string, LessonData> = {
  // Unit 1 — Money and Meaning
  'm01-l01-money-is-a-relationship':       m01l01,
  'm01-l02-what-your-parents-taught-you':  m01l02,
  'm01-l03-scarcity-vs-sufficiency':       m01l03,
  'm01-l04-debt-without-shame':            m01l04,
  'm01-l05-broke-vs-have-less':            m01l05,
  'm01-l06-generosity-vs-self-protection': m01l06,
  'm01-l07-money-in-the-rooms-you-love-in': m01l07,
  'm01-l08-loneliness-of-more-and-less':   m01l08,
  'm01-l09-control-and-not':               m01l09,
  'm01-l10-enough':                        m01l10,
};

export default lessons;
