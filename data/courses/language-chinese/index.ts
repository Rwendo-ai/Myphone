import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-chinese',
  type: 'language',
  displayName: 'Learn Mandarin',
  targetLanguageId: 'chinese',
  // Only speakers with authored content. English-speaker variant only.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇨🇳',
  primaryColor: '#DE2910',   // Chinese flag red
  secondaryColor: '#FFDE00', // Chinese flag yellow
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
