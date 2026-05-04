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
 * Caring for an Aging Parent — English source-of-truth curriculum.
 *
 * Unit 1 (the only unit): a 10-lesson micro-course in the Build Yourself
 * umbrella, anchored in Pauline Boss (ambiguous loss), Atul Gawande
 * (Being Mortal), adult attachment theory, Kristin Neff (self-compassion),
 * ACT (Hayes), and George Bonanno's modern grief science.
 *
 * Authored 2026-05-04. See docs/curriculum/TRACK-CARING-AGING-PARENT-PLAN.md
 * for methodology, anchor traditions, and pedagogical decisions.
 *
 * IMPORTANT: this course does not provide medical, legal, or financial
 * advice. Every lesson defers those decisions to the parent and their
 * professional team. The content works on the caregiver's interior.
 *
 * Lesson keys follow the same `mNN-lNN-slug` convention as the language
 * packs and the Knowing Yourself track.
 */
export const lessons: Record<string, LessonData> = {
  // Unit 1 — Caring for an Aging Parent
  'm01-l01-role-reversal':                 m01l01,
  'm01-l02-ambiguous-loss':                m01l02,
  'm01-l03-anticipatory-grief':            m01l03,
  'm01-l04-childhood-wiring':              m01l04,
  'm01-l05-the-sibling':                   m01l05,
  'm01-l06-cruel-scared-not-themselves':   m01l06,
  'm01-l07-the-conversation-youve-been-avoiding': m01l07,
  'm01-l08-healthcare-advocacy':           m01l08,
  'm01-l09-caregiver-guilt':               m01l09,
  'm01-l10-the-call-and-after':            m01l10,
};

export default lessons;
