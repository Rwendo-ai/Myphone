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

export const lessons: Record<string, LessonData> = {
  // Module 1 — Nǐ Hǎo & Politeness
  'm01-l01-nihao':         m01l01,
  'm01-l02-zaoshang':      m01l02,
  'm01-l03-xiexie':        m01l03,
  'm01-l04-qing':          m01l04,
  'm01-l05-name':          m01l05,
  'm01-l06-where-from':    m01l06,
  'm01-l07-pleased':       m01l07,
  'm01-l08-yes-no':        m01l08,
  'm01-l09-zaijian':       m01l09,
  'm01-l10-conversation':  m01l10,
};

export default lessons;
