/**
 * AI Companion course content types. Per PRODUCT-DESIGN.md §2.2.
 *
 * Each speaker variant of the ai-companion course pack contains:
 *   - starter-cards.ts: contextual conversation starters
 *   - topics.ts: structured multi-turn flows
 *   - depth-levels.ts: progression copy
 *   - memory-schema.ts: shape of "things Rwen remembers about you"
 *   - crisis-triggers.ts: speaker-language phrase patterns + handoff line
 *
 * The runtime composes course content (this) with speaker pack
 * (UI/AI prompts/voice) and jurisdiction pack (crisis phone numbers,
 * data residency).
 */

import { SpeakerPackId } from './packs';

/** Conversation starter card shown when the user opens Companion. */
export interface StarterCard {
  id: string;
  /** Display label on the card (in this speaker's language) */
  label: string;
  /** System prompt fragment prepended when user taps this card */
  systemPrompt: string;
  /** Time-of-day, day-of-week, or depth-level filters that gate visibility */
  showWhen?: {
    timeOfDay?: ('morning' | 'afternoon' | 'evening')[];
    dayOfWeek?: number[];                                    // 0=Sun … 6=Sat
    minDepthLevel?: 1 | 2 | 3 | 4 | 5;
    requiresMemory?: string[];                               // memory keys that must exist
  };
  /** If true, this card appears with a footer linking to crisis resources */
  hasCrisisFooter?: boolean;
}

/** Multi-turn structured flow ("Process my day", "Help me decide", etc.) */
export interface Topic {
  id: string;
  /** Display name */
  label: string;
  /** What the user expects from this topic — shown on tap, before they enter */
  description: string;
  /** Target turn count — Rwen tries to wrap up around this */
  targetTurns: number;
  /** Claude system prompt for this whole flow */
  systemPrompt: string;
  /** Min depth level to unlock */
  minDepthLevel: 1 | 2 | 3 | 4 | 5;
}

/** Relationship progression — see §2.2 design for thresholds. */
export interface DepthLevel {
  level: 1 | 2 | 3 | 4 | 5;
  /** Display name */
  name: string;
  /** Threshold: minimum cumulative interaction days */
  unlockDays: number;
  /** Threshold: minimum cumulative messages */
  unlockMessages: number;
  /** Short blurb shown on level-up */
  shortDescription: string;
  /** What this level unlocks (from this speaker's POV) */
  unlocks: string;
}

/** Shape of structured memory Rwen accumulates about the user. */
export interface MemoryFact {
  /** Stable key, e.g. 'sister_name', 'reason_for_learning' */
  key: string;
  /** Human-readable label for the Memory panel ("Your sister's name") */
  label: string;
  /** What kind of fact — used for grouping in the panel */
  category: 'people' | 'work' | 'goals' | 'preferences' | 'milestones' | 'context';
  /** Whether the user can edit this fact (most are yes) */
  editable: boolean;
}

/** Crisis trigger — phrase patterns in this speaker's language that
 *  signal the user needs professional help. Match → Rwen surfaces a
 *  pre-empted handoff to jurisdiction.crisisResources before the AI
 *  generates a normal reply. */
export interface CrisisTrigger {
  /** Categorisation for resource picking — composes with jurisdiction.crisisResources[].context */
  context: 'crisis_general' | 'mental_health' | 'domestic_violence' | 'youth';
  /** Substring or regex pattern (case-insensitive) to match user input */
  pattern: string | RegExp;
  /** Severity — 'critical' triggers immediate handoff; 'warning' adds a footer */
  severity: 'critical' | 'warning';
}

/** The full content bundle for one (course=ai-companion, speaker=X) variant. */
export interface CompanionContent {
  speakerId: SpeakerPackId;
  starterCards: StarterCard[];
  topics: Topic[];
  depthLevels: DepthLevel[];
  memorySchema: MemoryFact[];
  crisisTriggers: CrisisTrigger[];
  /** The Rwen handoff line shown to the user when a crisis trigger fires —
   *  in this speaker's language. The phone numbers come from jurisdiction. */
  crisisHandoffLine: string;
}
