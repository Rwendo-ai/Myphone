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
 * language-english / Shona-speaker variant curriculum.
 *
 * Module 1 (Kwaziso & Hellos) authored: 10/10 lessons.
 * Modules 2-10 still pending — Phase K of PRODUCT-DESIGN.md §8.
 */
export const lessons: Record<string, LessonData> = {
  'm01-l01-hello':              m01l01,
  'm01-l02-hi-bye':             m01l02,
  'm01-l03-good-morning':       m01l03,
  'm01-l04-good-afternoon':     m01l04,
  'm01-l05-good-evening':       m01l05,
  'm01-l06-name':               m01l06,
  'm01-l07-where-from':         m01l07,
  'm01-l08-how-are-you-formal': m01l08,
  'm01-l09-goodbye':            m01l09,
  'm01-l10-conversation':       m01l10,
};

export default lessons;
