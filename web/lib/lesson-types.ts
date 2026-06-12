/**
 * Lesson content types — verbatim mirror of the mobile app's
 * types/lesson.ts. The lesson JSONs in the Supabase `course-content`
 * bucket are authored against this schema; keep the two files in sync
 * (drift here breaks both clients silently).
 */

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
  crisisHandoff?: boolean;
  version?: number;
}
