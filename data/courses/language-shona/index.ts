import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-shona',
  type: 'language',
  displayName: 'Learn Shona',
  targetLanguageId: 'shona',
  // Every speaker EXCEPT the target language's own native speakers — you
  // can't "learn" your own native language. Speaker-specific variants fall
  // back to the english variant at lesson-load time (see getLessonSync).
  availableForSpeakers: ['english', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🇿🇼',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
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
 *  speaker that doesn't have a per-speaker variant authored yet — this lets
 *  french / chinese / tagalog speakers learn Shona using the english-source
 *  content while their UI chrome renders in their own speaker pack. Phase K
 *  will author proper per-speaker variants. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
