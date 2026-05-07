import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-portuguese',
  type: 'language',
  displayName: 'Learn Portuguese',
  targetLanguageId: 'portuguese',
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇧🇷',
  primaryColor: '#009C3B',  // Brazilian green
  secondaryColor: '#FFDF00', // Brazilian yellow
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
