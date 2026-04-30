import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { LessonData } from '../../../types/lesson';

/**
 * Learn English course pack.
 *
 * v1 status: METADATA ONLY. The Shona-speaker variant of the English
 * curriculum (target=English, native=Shona) is Phase K work — see
 * PRODUCT-DESIGN.md §8.
 */
const meta: CoursePackMeta = {
  id: 'language-english',
  type: 'language',
  displayName: 'Learn English',
  targetLanguageId: 'english',
  availableForSpeakers: ['shona'],     // populated when Phase K ships
  revenuecatProductId: null,
  isActive: false,                     // not yet shippable — no curriculum
  isComingSoon: true,
  emoji: '🇬🇧',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {},
};

export function getLessonSync(_speakerId: string, _lessonId: string): LessonData | undefined {
  return undefined; // no curriculum yet
}

export default pack;
