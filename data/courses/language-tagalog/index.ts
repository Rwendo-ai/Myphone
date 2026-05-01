import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-tagalog',
  type: 'language',
  displayName: 'Learn Tagalog',
  targetLanguageId: 'tagalog',
  availableForSpeakers: ['english'],
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

/** Synchronous lesson lookup for code paths that need a specific lesson now (e.g. lesson screen).
 *  This bypasses the lazy loader for the bundled v1 case. */
export function getLessonSync(speakerId: string, lessonId: string): LessonData | undefined {
  if (speakerId === 'english') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const lessons = require('./english/curriculum').default as Record<string, LessonData>;
    return lessons[lessonId];
  }
  return undefined;
}

export default pack;
