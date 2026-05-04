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
 * Sleep, Repaired — English source-of-truth curriculum.
 *
 * Unit 1: Sleep, Repaired. 8 lessons. Authored 2026-05-04.
 * Behavioural sleep micro-course anchored in CBT-I, Foster's chronobiology,
 * Walker's sleep architecture (with caveats), and ACT-based acceptance work
 * for the anxiety-sleep loop.
 *
 * See `docs/curriculum/TRACK-SLEEP-REPAIRED-PLAN.md` for the full track plan.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language packs
 * so the existing lesson runtime can load them without modification.
 */
export const lessons: Record<string, LessonData> = {
  // Unit 1 — Sleep, Repaired
  'm01-l01-sleep-is-a-skill':            m01l01,
  'm01-l02-what-sleep-actually-does':    m01l02,
  'm01-l03-body-clock-not-enemy':        m01l03,
  'm01-l04-wind-down-hour':              m01l04,
  'm01-l05-screen-question-honestly':    m01l05,
  'm01-l06-what-to-do-at-3am':           m01l06,
  'm01-l07-anxiety-sleep-loop':          m01l07,
  'm01-l08-when-body-wont-cooperate':    m01l08,
};

export default lessons;
