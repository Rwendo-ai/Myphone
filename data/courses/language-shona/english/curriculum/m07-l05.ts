import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-ordering',
  module: 7,
  lesson: 5,
  title: 'Ordering at a Restaurant',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Harare has restaurants from street food to fine dining. Wherever you eat, knowing how to order in Shona changes the experience. The server's face changes. The food often comes faster. And the conversation starts.",
    culturalNote: "Many Zimbabwean restaurants offer both a menu and daily specials. Asking 'Chii chakaipa nhasi?' (What is the special today?) in Shona will often get you the freshest, best-value option — and earn you genuine appreciation.",
  },

  chunks: [
    {
      id: 'ndinopa',
      target: 'Ndinopa...',
      native: 'Please bring me... / I would like...',
      literal: 'I-give (request form)',
      emoji: '🍽️',
      phonetic: 'ndi-NO-pa',
      audioRef: null,
    },
    {
      id: 'menyu',
      target: 'Menyu',
      native: 'Menu',
      literal: 'Menyu (from English)',
      emoji: '📋',
      phonetic: 'ME-nyu',
      audioRef: null,
    },
    {
      id: 'chakaipa_nhasi',
      target: 'Chii chakaipa nhasi?',
      native: "What is today's special?",
      literal: 'What came-out today?',
      emoji: '⭐',
      phonetic: 'chii cha-KA-i-pa NHA-si',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Ndinopa — 'please bring me' (hospitality verb)",
    explanation: "'Ndinopa' literally means 'I give' but in the context of ordering food it functions as a polite request — 'please provide me with'. It's more polite than 'Ndinoda' (I want) in formal restaurant settings.",
    examples: [
      { target: 'Ndinopa sadza ne nyama', native: 'Please bring me sadza with meat' },
      { target: 'Ndinopa mvura', native: 'Please bring me water' },
      { target: 'Ndinoda menyu, ndapota', native: 'I would like the menu, please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the restaurant phrase to its meaning',
      pairs: [
        { left: 'Ndinopa...', right: 'Please bring me...' },
        { left: 'Menyu', right: 'Menu' },
        { left: 'Chakaipa nhasi?', right: "What's the special today?" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order sadza politely',
      sentence: 'Ndinopa sadza ne _____, ndapota.',
      options: ['nyama', 'mvura', 'menyu'],
      correct: 'nyama',
      context: 'Please bring me sadza with meat.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Please bring me... (start of phrase)',
      correct: ['Ndinopa', 'ndinopa'],
    },
    {
      type: 'multiple_choice',
      instruction: "You sit down at a restaurant. What do you ask for first?",
      question: 'First request at a restaurant:',
      options: [
        { text: 'Ndinoda menyu, ndapota', correct: true },
        { text: 'Ndaguta', correct: false },
        { text: 'Inodura', correct: false },
      ],
      explanation: "Ask for the menu first — 'Ndinoda menyu, ndapota.' Then order after reviewing it.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Please bring me water'",
      words: ['Ndinopa', 'mvura,', 'ndapota.'],
      correct: ['Ndinopa', 'mvura,', 'ndapota.'],
      translation: 'Please bring me water',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "What's the special today?",
      correct: ['Chii chakaipa nhasi?', 'chii chakaipa nhasi?'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a restaurant in Harare. The server approaches.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mangwanani. Mungade chii?',
        native: 'Good morning. What would you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mangwanani. Ndinoda menyu ndapota. Uye — chii chakaipa nhasi?', native: 'Good morning. I would like the menu please. And — what is the special today?', correct: true, feedback: "Greeted back, asked for the menu, asked about the special. The server is delighted." },
          { target: 'Ndinopa sadza ne nyama', native: 'Please bring me sadza with meat', correct: false, feedback: "Good order — but ask for the menu first and the special: 'Ndinoda menyu ndapota. Chii chakaipa nhasi?'" },
          { target: 'Ndinoda mvura', native: 'I want water', correct: false, feedback: "Ask for the menu first: 'Ndinoda menyu ndapota.' Then decide what to order." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The server answered in Shona. You ordered your meal in Shona. You're dining in Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please bring me... (start)', correct: ['Ndinopa', 'ndinopa'] },
      { prompt: "What's the special today?", correct: ['Chii chakaipa nhasi?', 'chii chakaipa nhasi?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you order food anywhere, mentally say the order in Shona first: 'Ndinopa [food], ndapota.' Then order in English. The Shona came first.",
    rwenSignoff: "Order with confidence. Famba zvakanaka.",
  },
};

export default lesson;
