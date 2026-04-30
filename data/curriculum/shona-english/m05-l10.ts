import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-rwen-family',
  module: 5,
  lesson: 10,
  title: "Rwen's Family — Full Conversation",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today you meet my whole family — and they meet you. Use every family word you've learned. This is real conversation, not practice. They are waiting.",
    culturalNote: "A Shona family gathering is a full sensory experience — food, laughter, many conversations at once, children running, elders sitting. Navigating it with even basic Shona shows extraordinary respect and effort.",
  },

  chunks: [
    {
      id: 'ndinokugamuchira',
      target: 'Ndinokugamuchira',
      native: 'I welcome you',
      literal: 'I-welcome-you',
      emoji: '🤗',
      phonetic: 'ndi-no-ku-ga-mu-CHI-ra',
      audioRef: null,
    },
    {
      id: 'mhuri_inokugamuchira',
      target: 'Mhuri inokugamuchira',
      native: 'The family welcomes you',
      literal: 'Family welcomes-you',
      emoji: '🏡',
      phonetic: 'mm-HU-ri i-no-ku-ga-mu-CHI-ra',
      audioRef: null,
    },
    {
      id: 'vanofarira_kukuziva',
      target: 'Vanofarira kukuziva',
      native: 'They are happy to know you',
      literal: 'They-are-happy to-know-you',
      emoji: '😊',
      phonetic: 'va-no-fa-RI-ra ku-ku-ZI-va',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ku- (infinitive) + ku- (you) — action directed at you',
    explanation: "'Ndinokugamuchira' — ndi-no-ku-gamuchira. The 'ku' before the verb stem here means 'you' (object prefix), not 'to' (infinitive). Context tells you which ku- is which. You'll feel the difference with practice.",
    examples: [
      { target: 'Ndinoku-gamuchira', native: 'I welcome you (ku = you, object)' },
      { target: 'Ndinoda ku-dzidza', native: 'I want to learn (ku = to, infinitive)' },
      { target: 'Ndinoku-ziva', native: 'I know you (ku = you, object)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndinokugamuchira', right: 'I welcome you' },
        { left: 'Mhuri inokugamuchira', right: 'The family welcomes you' },
        { left: 'Vanofarira kukuziva', right: 'They are happy to know you' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Rwen's grandmother says 'Ndinokugamuchira, mwanangu.' What does she mean?",
      question: 'Ndinokugamuchira means:',
      options: [
        { text: 'I welcome you', correct: true },
        { text: 'I love you', correct: false },
        { text: 'I am happy', correct: false },
      ],
      explanation: "Ndinokugamuchira = I welcome you. Ndi-no-ku-gamuchira = I-habitually-you-welcome.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I welcome you',
      correct: ['Ndinokugamuchira', 'ndinokugamuchira'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the welcome phrase',
      sentence: 'Mhuri _____ ndinokufara kukuziva.',
      options: ['inokugamuchira', 'anoenda', 'wakanaka'],
      correct: 'inokugamuchira',
      context: 'The family welcomes you — I am happy to know you.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'They are happy to know you'",
      words: ['Vanofarira', 'kukuziva.'],
      correct: ['Vanofarira', 'kukuziva.'],
      translation: 'They are happy to know you',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'The family welcomes you',
      correct: ['Mhuri inokugamuchira', 'mhuri inokugamuchira'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at Rwen's family home. Everyone is gathered. Navigate the full welcome — from grandmother to youngest child.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ndinokugamuchira, muzukuru wangu.',
        native: "I welcome you, my grandchild. (Ambuya speaks)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda, Ambuya. Ndinofara kukuziva. Mamuka sei?', native: 'Thank you, Grandmother. I am happy to know you. How did you wake?', correct: true, feedback: "Perfect — gratitude, joy, respectful morning greeting. Ambuya is moved." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Good — add more: 'Ndatenda, Ambuya. Ndinofara kukuziva. Mamuka sei?'" },
          { target: 'Mhoro', native: 'Hello', correct: false, feedback: "Too simple for this moment. Use: 'Ndatenda, Ambuya. Ndinofara kukuziva. Mamuka sei?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ndamuka. Urikudzidza chiShona here? Zvakanaka zvikuru!',
        native: 'I woke well. Are you learning Shona? Wonderful!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu, Ambuya. Ndinodzidzа ChiShona nokuti ndinoda mhuri yeZimbabwe.', native: 'Yes, Grandmother. I learn Shona because I love the family of Zimbabwe.', correct: true, feedback: "That sentence — in front of the whole family — will never be forgotten. That is why you are here." },
          { target: 'Hongu, ndinodzidzа', native: 'Yes, I learn', correct: false, feedback: "Add the why — 'nokuti ndinoda mhuri yeZimbabwe.' Because I love the family of Zimbabwe." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Answer her question about Shona: 'Hongu, ndinodzidzа ChiShona nokuti ndinoda mhuri yeZimbabwe.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mhuri yose yanyarara kunzwa izvozvo. Wakawana moyo wavo wose. Module 5 — yapera. Congratulations.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I welcome you', correct: ['Ndinokugamuchira', 'ndinokugamuchira'] },
      { prompt: 'They are happy to know you', correct: ['Vanofarira kukuziva', 'vanofarira kukuziva'] },
    ],
  },

  mission: {
    title: "Your Module 5 Mission",
    task: "Tell one person about Rwen's family today — describe what you learned about Shona family structure. Teaching it to someone else is the fastest way to make it yours.",
    rwenSignoff: "Mhuri yose inokugamuchira. The whole family welcomes you. Module 6 — numbers, time, and the market — begins next. Tichaonana.",
  },
};

export default lesson;
