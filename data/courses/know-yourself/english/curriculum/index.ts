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
 * Knowing Yourself — English source-of-truth curriculum.
 *
 * Unit 1: Attention as the Foundation. Authored 2026-05-04.
 * Units 2-10 outlined in `docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md`,
 * to be authored by follow-up agents using Unit 1 as the template.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language packs
 * so the existing lesson runtime can load them without modification.
 */
export const lessons: Record<string, LessonData> = {
  // Unit 1 — Attention as the Foundation
  'm01-l01-looking-and-seeing':       m01l01,
  'm01-l02-one-breath-on-purpose':    m01l02,
  'm01-l03-voice-in-your-head':       m01l03,
  'm01-l04-already-back':             m01l04,
  'm01-l05-five-senses-check':        m01l05,
  'm01-l06-attention-becomes-life':   m01l06,
  'm01-l07-the-pause':                m01l07,
  'm01-l08-boredom-is-information':   m01l08,
  'm01-l09-sitting-with-what-you-avoid': m01l09,
  'm01-l10-attention-as-practice':    m01l10,
};

export default lessons;
