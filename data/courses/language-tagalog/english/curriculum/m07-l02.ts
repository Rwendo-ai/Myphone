import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Mga Pagkain — Common Foods',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In the Philippines, a meal isn't a meal without rice. Tagalog uses three different words for what English just calls 'rice' — depending on whether it's in the field, in the sack, or on your plate. Today we sort it out.",
    culturalNote: "Kanin (cooked rice on the plate), bigas (uncooked grain in the sack), palay (rice plant in the field). Three words, one staple — because rice IS Filipino food. And ulam? That's the dish you eat with your kanin. Kanin without ulam is not a meal.",
  },

  chunks: [
    {
      id: 'kanin',
      target: 'Kanin',
      native: 'Cooked rice (on the plate)',
      literal: 'Rice-as-food',
      emoji: '🍚',
      phonetic: 'KA-nin',
      audioRef: null,
    },
    {
      id: 'ulam',
      target: 'Ulam',
      native: 'Viand / main dish (eaten with rice)',
      literal: 'The-dish',
      emoji: '🍗',
      phonetic: 'U-lam',
      audioRef: null,
    },
    {
      id: 'bigas',
      target: 'Bigas',
      native: 'Uncooked rice (the grain)',
      literal: 'Rice-grain',
      emoji: '🌾',
      phonetic: 'bi-GAS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kanin vs bigas vs palay',
    explanation: "English says 'rice' for everything. Tagalog tracks the lifecycle: **palay** (in the field) → **bigas** (uncooked grain in your sack) → **kanin** (steamed, on your plate). Mixing them up makes Filipinos giggle warmly.",
    examples: [
      { target: 'Bumili ako ng bigas', native: 'I bought rice (uncooked, from the store)' },
      { target: 'Kumain ako ng kanin', native: 'I ate rice (cooked, the meal)' },
      { target: 'Ano ang ulam?', native: "What's the viand? (the dish with the rice)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Kanin', right: 'Cooked rice' },
        { left: 'Ulam', right: 'Main dish (with rice)' },
        { left: 'Bigas', right: 'Uncooked rice grain' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at a sari-sari store buying a sack to take home and cook. What word do you use?",
      sentence: 'Isang kilo ng _____, po.',
      options: ['bigas', 'kanin', 'ulam'],
      correct: 'bigas',
      context: "Bigas is the grain you buy. Kanin is what it becomes after cooking.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Cooked rice (on the plate)',
      correct: ['Kanin', 'kanin'],
    },
    {
      type: 'build_sentence',
      instruction: "Ask 'What's the viand?'",
      words: ['ulam', 'Ano', 'ang'],
      correct: ['Ano', 'ang', 'ulam'],
      translation: "What's the viand?",
    },
    {
      type: 'multiple_choice',
      instruction: "Lola ladles steaming rice onto your plate. What is she serving?",
      question: 'Which word fits?',
      options: [
        { text: 'Kanin', correct: true },
        { text: 'Bigas', correct: false },
        { text: 'Palay', correct: false },
      ],
      explanation: "Once it's cooked and on your plate, it's kanin — always.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'The main dish (eaten with rice)',
      correct: ['Ulam', 'ulam'],
    },
  ],

  rwenDialogue: {
    intro: "You're helping Tito Boy in the kitchen. He hands you a measuring cup and asks for help.",
    lines: [
      {
        speaker: 'npc',
        target: 'Pakikuha ng dalawang tasa ng bigas.',
        native: 'Please get two cups of bigas.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sige po — bigas, hindi kanin', native: 'Okay — bigas, not kanin', correct: true, feedback: 'Yes! You know the difference. Tito is impressed.' },
          { target: 'Sige po — kanin', native: 'Okay — kanin', correct: false, feedback: "Almost — but kanin is already cooked. He needs the uncooked grain." },
          { target: 'Walang bigas', native: 'No bigas', correct: false, feedback: "He just asked for it — he needs it!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Magaling! Mag-aaral ka pala ng tama.',
        native: "Excellent! You're learning properly.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words for one grain — that's how much rice matters here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Cooked rice (the food on the plate)', correct: ['Kanin', 'kanin'] },
      { prompt: 'The main dish that goes with rice', correct: ['Ulam', 'ulam'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name 5 foods you eat regularly. For each, ask yourself: would a Filipino call this kanin, ulam, or neither?",
    rwenSignoff: "I'll ask you tomorrow. Pagkain is a love language — paalam!",
  },

  phase8: {
    scenario: "You're in Tito Boy's kitchen in Cebu helping prep Sunday lunch. He's juggling a wok, calling out for ingredients in Tagalog. You need to fetch the right thing — bigas, kanin, or ulam — without mixing them up.",
    rwenRole: "Tito Boy — uncle and resident grill master, ~62yo, patient but loves teasing when you confuse bigas (raw) with kanin (cooked).",
    successCriteria: "User correctly identifies kanin (cooked rice), bigas (uncooked grain), and ulam (the dish) when tito asks. Bonus if they explain the difference back to him in their own simple Tagalog.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
