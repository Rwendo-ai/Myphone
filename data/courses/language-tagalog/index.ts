import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-tagalog',
  type: 'language',
  displayName: 'Learn Tagalog',
  targetLanguageId: 'tagalog',
  // Only speakers with authored content. English-speaker variant only.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇵🇭',
  primaryColor: '#0038A8',   // Philippines flag blue
  secondaryColor: '#CE1126', // Philippines flag red
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
