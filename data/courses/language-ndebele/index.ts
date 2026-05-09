import { CoursePack, CoursePackMeta } from '../../../types/packs';

const meta: CoursePackMeta = {
  id: 'language-ndebele',
  type: 'language',
  displayName: 'Learn isiNdebele',
  targetLanguageId: 'ndebele',
  // Initial roll-out: English speakers only. Adding more source-language
  // variants later is just a matter of authoring per-speaker lesson sets.
  availableForSpeakers: ['english'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🇿🇼',
  // Use a slightly different blue from Shona so the two Zimbabwe courses
  // are visually distinguishable in the picker.
  primaryColor: '#1F4068',
  secondaryColor: '#5BA3D8',
};

const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
