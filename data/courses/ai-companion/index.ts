import { CoursePack, CoursePackMeta } from '../../../types/packs';
import { CompanionContent } from '../../../types/ai-companion';
import englishContent from './english';
import shonaContent from './shona';

/**
 * AI Companion course pack.
 *
 * v1 status: SCAFFOLDED. The English speaker variant has authored
 * starter cards (10), Topic flows (6), depth levels (5), memory
 * schema (30 facts), and crisis triggers. Shona variant is a Phase K
 * stub re-exporting English content with the speakerId swapped —
 * needs fresh Shona authoring before shipping the sn pack.
 *
 * Memory extraction (the Claude pass that populates `companion_memory`
 * JSONB) is Phase J infrastructure work, not content work — separate
 * implementation task.
 */
const meta: CoursePackMeta = {
  id: 'ai-companion',
  type: 'ai-companion',
  displayName: 'AI Companion',
  targetLanguageId: undefined,
  availableForSpeakers: ['english', 'shona'],
  revenuecatProductId: null,           // wired in Phase H; gated by tier (Text AI+)
  isActive: true,                      // English variant content authored
  isComingSoon: false,
  emoji: '🦎',
  primaryColor: '#1A3C6E',
  secondaryColor: '#4A90D9',
};

const pack: CoursePack = {
  meta,
  variants: {
    english: {
      speakerId: 'english',
      companionLoader: async () => englishContent,
    },
    shona: {
      speakerId: 'shona',
      companionLoader: async () => shonaContent,
    },
  },
};

/** Synchronous content lookup for the active speaker. Used by the
 *  Companion screen which needs to render starter cards immediately. */
export function getCompanionContent(speakerId: string): CompanionContent | undefined {
  if (speakerId === 'english') return englishContent;
  if (speakerId === 'shona')   return shonaContent;
  return undefined;
}

export default pack;
