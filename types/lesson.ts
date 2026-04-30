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
 * Optional in v1 since the 100 existing lessons aren't backfilled with
 * scripted scenarios. When `phase8` is omitted, the lesson result screen
 * still shows a generic "Practice with Rwen" teaser card; if the user
 * has an AI tier, the conversation kicks off using the lesson title +
 * chunks as auto-derived context.
 */
export interface Phase8Config {
  scenario: string;          // "Greeting an elder at a Harare market at 7am"
  rwenRole: string;          // "Market stall owner, ~50yo, kind"
  successCriteria: string;   // "Used 'mamuka sei' (respectful), responded warmly"
  estimatedMinutes: 2 | 3 | 4;
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
}
