import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'language-shona',
  type: 'language',
  displayName: 'Learn Shona',
  targetLanguageId: 'shona',
  availableForSpeakers: ['english'],   // 'shona' speaker variant ships in Phase K
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
