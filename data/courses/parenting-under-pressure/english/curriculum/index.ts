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
import m01l11 from './m01-l11';
import m01l12 from './m01-l12';

/**
 * Parenting Under Pressure — English source-of-truth curriculum.
 *
 * Self-development track, parallel to Knowing Yourself, under the
 * "Build Yourself" umbrella. Authored 2026-05-04.
 *
 * Plan: `docs/curriculum/TRACK-PARENTING-UNDER-PRESSURE-PLAN.md`.
 *
 * 12 lessons, one unit. 5–10 minutes each. Audience is parents at any
 * stage — toddlers through teens through adult kids — written for a
 * single mum in Lagos, a stay-at-home dad in Sydney, and a grandparent
 * raising a grandchild in Manila.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language
 * packs and the Knowing Yourself pack so the lesson runtime can load
 * them without modification.
 */
export const lessons: Record<string, LessonData> = {
  // Beat 1 — Regulate yourself first
  'm01-l01-nervous-system-thermostat':       m01l01,
  'm01-l02-three-second-pause':              m01l02,
  'm01-l03-name-what-you-feel':              m01l03,
  'm01-l04-your-attachment-pattern':         m01l04,
  // Beat 2 — Repair after the blow-up
  'm01-l05-rupture-and-repair':              m01l05,
  'm01-l06-real-apology-to-a-child':         m01l06,
  'm01-l07-self-compassion-after-screwing-up': m01l07,
  // Beat 3 — The hard hours
  'm01-l08-when-they-say-i-hate-you':        m01l08,
  'm01-l09-silent-treatment-and-the-phone':  m01l09,
  'm01-l10-late-night-when-nothing-works':   m01l10,
  // Beat 4 — Live with the long unsolved
  'm01-l11-the-child-hard-to-like-today':    m01l11,
  'm01-l12-good-enough-on-purpose':          m01l12,
};

export default lessons;
