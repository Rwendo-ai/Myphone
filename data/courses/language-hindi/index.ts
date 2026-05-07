import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-hindi',
  type: 'language',
  displayName: 'Learn Hindi',
  targetLanguageId: 'hindi',
  // English-speaker variant authored. Add other speakers when their variants
  // are uploaded to Storage.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false,
  emoji: '🇮🇳',
  primaryColor: '#FF9933',  // Saffron from Indian flag
  secondaryColor: '#138808', // Green from Indian flag
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
