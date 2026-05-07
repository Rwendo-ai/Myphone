import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-japanese',
  type: 'language',
  displayName: 'Learn Japanese',
  targetLanguageId: 'japanese',
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇯🇵',
  primaryColor: '#BC002D',  // Japanese flag red
  secondaryColor: '#FFFFFF', // White
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
