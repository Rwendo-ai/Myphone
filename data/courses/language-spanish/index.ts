import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-spanish',
  type: 'language',
  displayName: 'Learn Spanish',
  targetLanguageId: 'spanish',
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇪🇸',
  primaryColor: '#AA151B',  // Spanish flag red
  secondaryColor: '#F1BF00', // Spanish flag yellow
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
