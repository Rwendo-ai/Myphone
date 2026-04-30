import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-kunwa',
  module: 8,
  lesson: 4,
  title: 'Kunwa — To Drink',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Kunwa (to drink) and kudya (to eat) are inseparable in daily life. They follow the same tense pattern — which means if you know kudya across tenses, you already know how kunwa works. One template, infinite verbs.",
    culturalNote: "Water (mvura) and tea (tii) are the most commonly consumed drinks in everyday Zimbabwean homes. Sharing a cup of tea is a significant act of hospitality and friendship — offered before any conversation begins.",
  },

  chunks: [
    {
      id: 'ndinowa',
      shona: 'Ndinowa',
      english: 'I drink (habitually)',
      literal: 'I-habitually-drink',
      emoji: '🥤',
      phonetic: 'ndi-NO-wa',
      audioRef: null,
    },
    {
      id: 'ndiri_kunwa',
      shona: 'Ndiri kunwa',
      english: 'I am drinking (now)',
      literal: 'I-am drinking',
      emoji: '🔄',
      phonetic: 'NDI-ri KU-nwa',
      audioRef: null,
    },
    {
      id: 'ndanwa',
      shona: 'Ndanwa',
      english: 'I drank / I have drunk',
      literal: 'I-drank (completed)',
      emoji: '✅',
      phonetic: 'nda-NWA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kunwa — same four-form pattern as all verbs',
    explanation: "Ndi-no-nwa (I drink, habitual). Ndiri ku-nwa (I am drinking). Nda-nwa (I drank). Ndicha-nwa (I will drink). This is exactly the kudya pattern — only the stem changes (-nwa instead of -dya). One pattern, every verb.",
    examples: [
      { shona: 'Ndinowa mvura', english: 'I drink water (regularly)' },
      { shona: 'Ndiri kunwa tii', english: 'I am drinking tea' },
      { shona: 'Ndanwa mvura', english: 'I drank water' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its tense',
      pairs: [
        { left: 'Ndinowa', right: 'I drink (habit)' },
        { left: 'Ndiri kunwa', right: 'I am drinking now' },
        { left: 'Ndanwa', right: 'I drank (past)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are drinking tea right now',
      sentence: 'Ndiri _____ tii zvino.',
      options: ['kunwa', 'kudya', 'kuenda'],
      correct: 'kunwa',
      context: 'I am drinking tea right now.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am drinking now',
      correct: ['Ndiri kunwa', 'ndiri kunwa'],
    },
    {
      type: 'multiple_choice',
      instruction: "Apply the pattern: 'I will drink water tomorrow'",
      question: 'Future tense for drinking:',
      options: [
        { text: 'Nichanwa mvura mangwana', correct: true },
        { text: 'Ndanwa mvura mangwana', correct: false },
        { text: 'Ndinowa mvura mangwana', correct: false },
      ],
      explanation: "Ndicha- marks the future. Nichanwa = I will drink (Ndicha- + nwa, with phonetic contraction).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I drank water'",
      words: ['Ndanwa', 'mvura.'],
      correct: ['Ndanwa', 'mvura.'],
      translation: 'I drank water',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I drink water (habitually)',
      correct: ['Ndinowa mvura', 'ndinowa mvura'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen offers you a drink. You're in the middle of a conversation.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Unoda kunwa chii? Ndine mvura ne tii.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinowa mvura nguva yose. Ndinopa mvura, ndatenda.', english: 'I drink water always. Please bring me water, thank you.', correct: true, feedback: "Habitual preference stated, polite request made. Natural and complete." },
          { shona: 'Ndanwa', english: 'I drank', correct: false, feedback: "That's past tense — you haven't drunk yet. Order now: 'Ndinopa mvura, ndatenda.'" },
          { shona: 'Ndinoda mvura', english: 'I want water', correct: false, feedback: "Good — add your habitual preference: 'Ndinowa mvura nguva yose. Ndinopa mvura, ndatenda.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mvura inosvika. Good choice — water is life in Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am drinking now', correct: ['Ndiri kunwa', 'ndiri kunwa'] },
      { prompt: 'I drank (past)', correct: ['Ndanwa', 'ndanwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you drink something today, say the tense: 'Ndiri kunwa [drink]' while drinking, 'Ndanwa [drink]' after. Simple, but it trains your tense instinct.",
    rwenSignoff: "Water is life. Kunwa — to drink — is to live. Famba zvakanaka.",
  },
};

export default lesson;
