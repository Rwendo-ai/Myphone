import { CompanionContent } from '../../../../types/ai-companion';
import starterCards from './starter-cards';
import topics from './topics';
import depthLevels from './depth-levels';
import memorySchema from './memory-schema';
import crisisTriggers from './crisis-triggers';

/**
 * AI Companion content — English speaker variant.
 * The phone numbers come from the active jurisdiction pack at runtime.
 */
const content: CompanionContent = {
  speakerId: 'english',
  starterCards,
  topics,
  depthLevels,
  memorySchema,
  crisisTriggers,
  crisisHandoffLine:
    "What you're describing is bigger than what I'm built for. Please reach out to one of these — they're trained for this and they're free:",
};

export default content;
