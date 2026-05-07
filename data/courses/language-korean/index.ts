import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-korean',
  type: 'language',
  displayName: 'Learn Korean',
  targetLanguageId: 'korean',
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇰🇷',
  primaryColor: '#003478',  // Korean flag blue
  secondaryColor: '#C60C30', // Korean flag red
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
