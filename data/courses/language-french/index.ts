import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-french',
  type: 'language',
  displayName: 'Learn French',
  targetLanguageId: 'french',
  // Only speakers with authored content. English-speaker variant only.
  // Add other speakers here once their variants are authored + uploaded.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,
  isActive: true,
  isComingSoon: false, // 100-lesson curriculum authored for English speakers
  emoji: '🇫🇷',
  primaryColor: '#0055A4',  // French blue
  secondaryColor: '#EF4135', // French red
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
