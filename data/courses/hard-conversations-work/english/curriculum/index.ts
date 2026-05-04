import { LessonData } from '../../../../../types/lesson';

import m01l01 from './m01-l01';
import m01l02 from './m01-l02';
import m01l03 from './m01-l03';
import m01l04 from './m01-l04';
import m01l05 from './m01-l05';
import m01l06 from './m01-l06';
import m01l07 from './m01-l07';
import m01l08 from './m01-l08';

/**
 * Hard Conversations at Work — English source-of-truth curriculum.
 *
 * Unit 1: 8 lessons. Authored 2026-05-04.
 * Track plan: `docs/curriculum/TRACK-HARD-CONVERSATIONS-WORK-PLAN.md`.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language packs
 * and the Knowing Yourself track, so the existing lesson runtime can load
 * them without modification.
 */
export const lessons: Record<string, LessonData> = {
  'm01-l01-before-you-open-your-mouth':       m01l01,
  'm01-l02-observation-without-evaluation':   m01l02,
  'm01-l03-feeling-and-need-underneath':      m01l03,
  'm01-l04-real-request-not-demand':          m01l04,
  'm01-l05-raising-it-with-your-manager':     m01l05,
  'm01-l06-feedback-that-doesnt-crush':       m01l06,
  'm01-l07-saying-no-walking-back-owning':    m01l07,
  'm01-l08-the-conversation-youve-been-avoiding': m01l08,
};

export default lessons;
