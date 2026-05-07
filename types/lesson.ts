export interface Chunk {
  id: string;
  target: string;
  native: string;
  literal?: string;
  emoji: string;
  phonetic: string;
  audioRef: null | string;
}

export interface PatternExample {
  target: string;
  native: string;
}

export interface Pattern {
  name: string;
  explanation: string;
  examples: PatternExample[];
}

export interface MatchPairsExercise {
  type: 'match_pairs';
  instruction: string;
  pairs: { left: string; right: string }[];
}

export interface FillBlankExercise {
  type: 'fill_blank';
  instruction: string;
  sentence: string;
  options: string[];
  correct: string;
  context?: string;
}

export interface TranslateExercise {
  type: 'translate';
  instruction: string;
  prompt: string;
  correct: string[];
}

export interface BuildSentenceExercise {
  type: 'build_sentence';
  instruction: string;
  words: string[];
  correct: string[];
  translation: string;
}

export interface MultipleChoiceExercise {
  type: 'multiple_choice';
  instruction: string;
  question: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
}

export type Exercise =
  | MatchPairsExercise
  | FillBlankExercise
  | TranslateExercise
  | BuildSentenceExercise
  | MultipleChoiceExercise;

export interface DialogueLine {
  speaker: 'npc' | 'user' | 'rwen';
  target?: string;
  native?: string;
  userChoices?: { target: string; native: string; correct: boolean; feedback: string }[];
  rwenAnimation?: string;
  rwenLine?: string;
}

export interface ActiveRecallPrompt {
  prompt: string;
  correct: string[];
}

/**
 * Phase 8 — per-lesson AI conversation. Per PRODUCT-DESIGN.md §6.
 *
 * Required on every newly-authored lesson. The lesson result screen
 * shows a "Practice with Rwen" card; if the user has a paid AI tier
 * (text_ai+), tapping it kicks off a 2-4 minute scripted conversation
 * using `scenario` + `rwenRole` + `successCriteria` as Claude's system
 * context. The chunks/pattern from the same lesson are auto-included.
 *
 * On successful Phase 8 completion, the lesson awards `bonusXp` on top
 * of `LessonData.xpReward`.
 */
export interface Phase8Config {
  scenario: string;          // "Greeting an elder at a Harare market at 7am"
  rwenRole: string;          // "Market stall owner, ~50yo, kind"
  successCriteria: string;   // "Used 'mamuka sei' (respectful), responded warmly"
  estimatedMinutes: 2 | 3 | 4;
  /** Extra XP awarded for completing Phase 8 — 5 is canonical. */
  bonusXp: number;
}

export interface LessonData {
  id: string;
  module: number;
  lesson: number;
  title: string;
  estimatedMinutes: number;
  xpReward: number;
  hook: {
    rwenLine: string;
    culturalNote: string;
  };
  chunks: Chunk[];
  pattern: Pattern;
  exercises: Exercise[];
  rwenDialogue: {
    intro: string;
    lines: DialogueLine[];
  };
  activeRecall: {
    instruction: string;
    prompts: ActiveRecallPrompt[];
  };
  mission: {
    title: string;
    task: string;
    rwenSignoff: string;
  };
  /** Optional Phase 8 (per-lesson AI conversation). Lessons without this
   *  fall back to an auto-generated context based on chunks + title. */
  phase8?: Phase8Config;
  /**
   * If true, the lesson screen renders the active jurisdiction's
   * `crisisResources` block at the end. Set on lessons that touch
   * suicidal ideation, self-harm, severe grief, domestic violence, or
   * acute distress. Three Build Yourself agents (Grief, Parenting, Aging
   * Parent) independently flagged this — relying on the model to mention
   * resources in prose is unreliable; a structural flag is.
   *
   * The runtime reads `jurisdiction.crisisResources` (already on
   * JurisdictionPack) and renders region-specific lines in the user's
   * spoken language.
   */
  crisisHandoff?: boolean;
  /**
   * Content version. Bump when the lesson is re-authored so cached copies
   * on devices get invalidated. The loader compares cached `version` against
   * the manifest's `version` for the same lesson id; mismatch (or missing
   * cache version) triggers a Storage refetch on next open.
   *
   * Default: 1 (treated as the initial v1 author).
   */
  version?: number;
}
