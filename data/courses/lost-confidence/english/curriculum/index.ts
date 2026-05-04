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
 * When You've Lost Confidence — English source-of-truth curriculum.
 *
 * Single unit, 8 lessons. Authored 2026-05-04. Plan: see
 * docs/curriculum/TRACK-LOST-CONFIDENCE-PLAN.md.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language packs
 * so the existing lesson runtime can load them without modification.
 */
export const lessons: Record<string, LessonData> = {
  'm01-l01-what-actually-happened':       m01l01,
  'm01-l02-not-your-failure':             m01l02,
  'm01-l03-distortions-after-a-knock':    m01l03,
  'm01-l04-comparison-spiral':            m01l04,
  'm01-l05-asking-for-help':              m01l05,
  'm01-l06-small-evidence':               m01l06,
  'm01-l07-becoming-a-beginner':          m01l07,
  'm01-l08-imposter-feeling':             m01l08,
};

export default lessons;
