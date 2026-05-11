/**
 * Reinforcement card schema — the end-of-module deck for Build Yourself
 * tracks. Replaces the flip-card pattern (which is for language vocab)
 * with a track-appropriate reinforcement type.
 *
 * One JSON file per (course, module) lives at:
 *   course-content/reinforcement-cards/<courseId>/m<NN>.json
 *
 * Card `variant` field carries the track's reinforcement shape:
 *
 *   insight    — Knowing Yourself          : concept + reflection question
 *   scenario   — Hard Conversations        : situation + sample script + the move underneath
 *   tip        — Parenting Under Pressure  : moment + reassurance + practical tip
 *   decision   — Money & Meaning           : decision-shaped situation + framing question
 *   permission — Grief Honestly            : feeling + permission/validation + small practice
 *   tonight    — Sleep Repaired            : specific tactic to try TONIGHT
 *   capability — Lost Confidence           : past-evidence prompt to surface forgotten wins
 *   moment     — Caring for an Aging Parent: hard situation + something to say + an after-line
 *
 * All variants share `id`, `module`, `variant`, `title`, `body`. Optional
 * fields surface the variant-specific content. UI renders the card with
 * the variant-appropriate layout (chooses which optional field to show).
 *
 * Source-of-truth is English. Runtime translation by Claude API caches
 * per (speaker, card) in `lesson_translation_cache` — see
 * docs/REINFORCEMENT-CARDS-TRANSLATION.md.
 */

export type CardVariant =
  | 'insight'
  | 'scenario'
  | 'tip'
  | 'decision'
  | 'permission'
  | 'tonight'
  | 'capability'
  | 'moment';

export interface ReinforcementCard {
  /** Stable id, scoped to (course, module). e.g. 'm01-c01-attention'. */
  id: string;
  /** Module number this card reinforces. */
  module: number;
  /** Which variant layout the card uses (one per track). */
  variant: CardVariant;
  /** Short headline shown on the card front. */
  title: string;
  /** Body paragraph — the core teaching, validation, or tip. */
  body: string;

  // ─── Variant-specific optional fields ───────────────────────────────

  /** insight / decision: a reflection question the user sits with. */
  reflectionQuestion?: string;

  /** scenario / moment: a short worked example or sample line to say. */
  sampleScript?: string;

  /** scenario: the underlying "move" being practised (NVC step, etc). */
  moveUnderneath?: string;

  /** tip: a specific small action the user can try right now. */
  tryThis?: string;

  /** permission / tip: explicit validation when the user feels stuck. */
  permission?: string;

  /** tonight: a concrete tactic for use tonight at bedtime. */
  tonightTactic?: string;

  /** capability: a prompt that surfaces past evidence of competence. */
  evidencePrompt?: string;

  /** moment: a one-line follow-up the user might say afterward. */
  afterLine?: string;
}
