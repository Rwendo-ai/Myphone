import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-chinese',
  type: 'language',
  displayName: 'Learn Mandarin',
  targetLanguageId: 'chinese',
  // Every speaker EXCEPT chinese natives.
  availableForSpeakers: ['english', 'shona', 'french', 'tagalog'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: true,
  emoji: '🇨🇳',
  primaryColor: '#DE2910',   // Chinese flag red
  secondaryColor: '#FFDE00', // Chinese flag yellow
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
