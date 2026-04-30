import { CoursePack, CoursePackMeta } from '../../../types/packs';

/**
 * AI Companion course pack.
 *
 * v1 status: METADATA ONLY. Starter cards, Topics, depth-level copy, and
 * memory schema are Phase J work — see PRODUCT-DESIGN.md §2.2 for the
 * relationship-as-product design and §8 Phase J for content scope.
 */
const meta: CoursePackMeta = {
  id: 'ai-companion',
  type: 'ai-companion',
  displayName: 'AI Companion',
  targetLanguageId: undefined,         // no target language — chat is in the speaker's language
  availableForSpeakers: ['english', 'shona'],
  revenuecatProductId: null,           // wired in Phase H; gated by tier (Text AI+)
  isActive: false,                     // not yet shippable — no content
  isComingSoon: true,
  emoji: '🦎',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {
    english: { speakerId: 'english' /* companionLoader Phase J */ },
    shona:   { speakerId: 'shona'   /* companionLoader Phase J */ },
  },
};

export default pack;
