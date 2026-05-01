import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: 'Maging & May — Be & Have',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome to verbs. Tagalog 'to be' barely shows up — Filipinos just say 'happy ako' (I happy). For 'have', you use one tiny word: may. And for 'don't have' — wala. Two words unlock half your sentences.",
    culturalNote: "Tagalog often skips a 'to be' verb entirely — 'Masaya ako' literally is 'Happy I' and means 'I am happy'. May (have) and wala (none/lack) are the everyday workhorses for possession.",
  },

  chunks: [
    {
      id: 'maging_masaya',
      target: 'Maging masaya',
      native: 'To be happy / to become happy',
      literal: 'Become happy',
      emoji: '😊',
      phonetic: 'ma-GING ma-SA-ya',
      audioRef: null,
    },
    {
      id: 'may_aso_ako',
      target: 'May aso ako',
      native: 'I have a dog',
      literal: 'Have dog I',
      emoji: '🐶',
      phonetic: 'my A-so a-KO',
      audioRef: null,
    },
    {
      id: 'wala_akong_oras',
      target: 'Wala akong oras',
      native: "I have no time / I don't have time",
      literal: 'None I-linker time',
      emoji: '⏰',
      phonetic: 'wa-LA a-KONG O-ras',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'May / Wala — have and lack',
    explanation: "Use **may** + thing + pronoun for 'have' (May aso ako = I have a dog). Use **wala** + pronoun + ng-linker + thing for 'don't have' (Wala akong oras). The little -ng glued onto ako is the linker — it just connects words.",
    examples: [
      { target: 'May tubig ako', native: 'I have water' },
      { target: 'May kapatid siya', native: 'She/he has a sibling' },
      { target: 'Wala kaming pera', native: 'We have no money' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Maging masaya', right: 'To be happy' },
        { left: 'May aso ako', right: 'I have a dog' },
        { left: 'Wala akong oras', right: "I don't have time" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your friend asks if you can hang out — but you have to work.',
      sentence: '_____ akong oras.',
      options: ['Wala', 'May', 'Maging'],
      correct: 'Wala',
      context: "Wala = none / don't have. May = have.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I have a dog',
      correct: ['May aso ako', 'may aso ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I have no money"',
      words: ['pera', 'akong', 'Wala'],
      correct: ['Wala', 'akong', 'pera'],
      translation: 'I have no money',
    },
    {
      type: 'multiple_choice',
      instruction: "A coworker asks if you have a pen.",
      question: 'You do have one — what do you say?',
      options: [
        { text: 'May ballpen ako', correct: true },
        { text: 'Wala akong ballpen', correct: false },
        { text: 'Maging ballpen', correct: false },
      ],
      explanation: "May = have. The structure is May + thing + pronoun.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I don't have time",
      correct: ['Wala akong oras', 'wala akong oras'],
    },
  ],

  rwenDialogue: {
    intro: "Your tita calls. She wants to chat. You've got a meeting in five minutes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, may oras ka ba?',
        native: 'Child, do you have time?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wala akong oras, tita, sorry', native: "I don't have time, auntie, sorry", correct: true, feedback: 'Honest and warm — perfect.' },
          { target: 'May aso ako', native: 'I have a dog', correct: false, feedback: "True maybe, but not the answer she's looking for." },
          { target: 'Maging masaya', native: 'To be happy', correct: false, feedback: "That's an infinitive, not a reply." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, tawag na lang ako mamaya.',
        native: "Okay, I'll just call later.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Two tools, big leverage. May for have, wala for lack — you'll use these every day.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a dog (in Tagalog)', correct: ['May aso ako', 'may aso ako'] },
      { prompt: "I have no time (in Tagalog)", correct: ['Wala akong oras', 'wala akong oras'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Use both *may* and *wala* five times today — out loud, in your head, in a text. "May kape ako." "Wala akong gana." Five each.',
    rwenSignoff: 'Sa susunod — until next time.',
  },

  phase8: {
    scenario: "It's a slow Sunday afternoon. Your tita Marivic calls to catch up, and she wants to know what you have going on this week — work, plans, problems. You'll need to mix may (have) and wala (don't have) naturally as she asks about your job, your time, your dog, your weekend.",
    rwenRole: "Tita Marivic — the curious aunt, ~58, warm and a bit nosy in the loving Filipino way; asks lots of small questions and loves any answer that uses real Tagalog.",
    successCriteria: "User uses may at least twice (e.g. May trabaho ako, May aso ako) and wala at least twice (e.g. Wala akong oras, Wala akong plano) in answering tita's questions, with the linker -ng appearing on wala constructions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
