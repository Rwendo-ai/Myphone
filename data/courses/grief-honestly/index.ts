import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

const meta: CoursePackMeta = {
  id: 'grief-honestly',
  type: 'self-development',
  displayName: 'Grief, Honestly',
  // Self-development tracks are speaker-agnostic at authoring time.
  // English is the source of truth; runtime translation handles the rest.
  availableForSpeakers: ['english', 'french', 'chinese', 'tagalog', 'shona'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🌒',
  primaryColor: '#2A2D3A',
  secondaryColor: '#7B7F95',
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
 *  speaker that doesn't have a per-speaker variant authored yet — the
 *  source-of-truth content is English; runtime translation handles other
 *  speakers until per-speaker variants are authored. */
export function getLessonSync(_speakerId: string, lessonId: string): LessonData | undefined {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lessons = require('./english/curriculum').default as Record<string, LessonData>;
  return lessons[lessonId];
}

export default pack;
