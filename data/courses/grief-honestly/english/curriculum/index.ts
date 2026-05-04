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
 * Grief, Honestly — English source-of-truth curriculum.
 *
 * One unit, ten lessons. The heaviest of the Build Yourself tracks.
 * See `docs/curriculum/TRACK-GRIEF-HONESTLY-PLAN.md` for content-care
 * guardrails — every lesson includes an exit ramp, and lessons that
 * touch suicidal ideation or stuck grief explicitly reference the
 * jurisdiction-loaded crisis resources at runtime.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language
 * packs so the existing lesson runtime can load them without modification.
 */
export const lessons: Record<string, LessonData> = {
  // Unit 1 — Grief, Honestly
  'm01-l01-not-a-five-stage-map':         m01l01,
  'm01-l02-resilience-is-not-bypassing':  m01l02,
  'm01-l03-loneliness-of-grief':          m01l03,
  'm01-l04-ambiguous-loss':               m01l04,
  'm01-l05-loss-of-a-future':             m01l05,
  'm01-l06-identity-grief':               m01l06,
  'm01-l07-grief-in-the-body':            m01l07,
  'm01-l08-grief-at-work':                m01l08,
  'm01-l09-anniversary-late-stuck':       m01l09,
  'm01-l10-continuing-bonds':             m01l10,
};

export default lessons;
