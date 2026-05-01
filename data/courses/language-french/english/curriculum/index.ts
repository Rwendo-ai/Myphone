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
  // Module 1 — Bonjour & Politesse
  'm01-l01-bonjour':         m01l01,
  'm01-l02-ca-va':           m01l02,
  'm01-l03-comment-allez':   m01l03,
  'm01-l04-merci':           m01l04,
  'm01-l05-sil-vous-plait':  m01l05,
  'm01-l06-name':            m01l06,
  'm01-l07-where-from':      m01l07,
  'm01-l08-tu-vous':         m01l08,
  'm01-l09-au-revoir':       m01l09,
  'm01-l10-conversation':    m01l10,
};

export default lessons;
