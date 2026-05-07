import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'language-shona',
  type: 'language',
  displayName: 'Learn Shona',
  targetLanguageId: 'shona',
  // Only speakers with authored content. The English-speaker variant is
  // the only one currently uploaded to Storage; surfacing this course to
  // French/Chinese/Tagalog speakers would just fall back to the English
  // variant, which is poor UX. Add a speaker here only when its variant
  // is authored + uploaded.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🇿🇼',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
