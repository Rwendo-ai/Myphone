import { CompanionContent } from '../../../../types/ai-companion';
import englishContent from '../english';

/**
 * AI Companion — Shona speaker variant.
 *
 * v1 STATUS: PHASE K STUB.
 *
 * The starter cards, topics, depth levels, memory schema, and crisis
 * triggers below are placeholder — currently re-exporting English
 * content with the speakerId field swapped to 'shona'. Phase K of
 * PRODUCT-DESIGN.md §8 authors fresh Shona content from a Shona
 * speaker's POV. Until then, a Shona-locale user using AI Companion
 * sees English content (acceptable for testing the architecture, not
 * for shipping).
 *
 * What needs authoring:
 *   - starterCards: ~10 Shona-language conversation starters with
 *     Shona system prompts. Mirror the en pattern — context-aware
 *     cards, time-of-day filters, depth-level gates.
 *   - topics: 6 Shona Topic flows (Process my day, Help me decide,
 *     Stuck, Tell me about yourself, Reflect on week, Practice English).
 *   - depthLevels: 5 levels with Shona names + descriptions.
 *   - memorySchema: 30 facts with Shona labels.
 *   - crisisTriggers: Shona phrase patterns for self-harm / DV /
 *     mental health distress (CRITICAL — needs native-speaker review).
 *   - crisisHandoffLine: a Shona handoff statement.
 */
const content: CompanionContent = {
  ...englishContent,
  speakerId: 'shona',
  // PLACEHOLDER — replace with authored Shona content in Phase K
  crisisHandoffLine:
    'Zvauri kutaura zvakakura kupfuura zvandakavakirwa. Ndapota taura nemumwe wevanotevera — vakadzidziswa izvi uye havatengiwi:',
};

export default content;
