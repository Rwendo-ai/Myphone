import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-french',
  type: 'language',
  displayName: 'Learn French',
  targetLanguageId: 'french',
  // Every speaker EXCEPT french natives.
  availableForSpeakers: ['english', 'shona', 'chinese', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: true, // Module 1 only — full 100-lesson curriculum still being authored
  emoji: '🇫🇷',
  primaryColor: '#0055A4',  // French blue
  secondaryColor: '#EF4135', // French red
};

const englishVariant = {
  speakerId: 'english',
  curriculumLoader: async () => {
    const mod = await import('./english/curriculum');
    return mod.default ?? mod.lessons;
  },
};

const pack: CoursePack = {
  meta,
  variants: {
    english: englishVariant,
  },
};

/** Synchronous lesson lookup. Falls back to the english variant for any
 *  speaker without a per-speaker variant authored yet — see Phase K. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
