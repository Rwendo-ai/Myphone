import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'lost-confidence',
  type: 'self-development',
  displayName: "When You've Lost Confidence",
  // self-development packs do not target a language
  targetLanguageId: undefined,
  availableForSpeakers: ['english', 'shona', 'french', 'chinese', 'tagalog'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🌱',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
