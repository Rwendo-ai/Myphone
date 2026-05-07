import { CoursePack, CoursePackMeta } from '../../../types/packs';
const meta: CoursePackMeta = {
  id: 'grief-honestly',
  type: 'self-development',
  displayName: 'Grief, Honestly',
  // Self-development tracks are speaker-agnostic at authoring time.
  // English is the source of truth; runtime translation handles the rest.
  availableForSpeakers: ['english', 'french', 'chinese', 'tagalog', 'shona'],
  revenuecatProductId: null,           // wired in Phase H
  isActive: true,
  isComingSoon: false,
  emoji: '🌒',
  primaryColor: '#2A2D3A',
  secondaryColor: '#7B7F95',
};


const pack: CoursePack = {
  meta,
  variants: {},
};

export { LESSON_MANIFEST, type LessonMeta } from './manifest';

export default pack;
