import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-tagalog',
  type: 'language',
  displayName: 'Learn Tagalog',
  targetLanguageId: 'tagalog',
  // Every speaker EXCEPT tagalog natives.
  availableForSpeakers: ['english', 'shona', 'french', 'chinese'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: true,
  emoji: '🇵🇭',
  primaryColor: '#0038A8',   // Philippines flag blue
  secondaryColor: '#CE1126', // Philippines flag red
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
