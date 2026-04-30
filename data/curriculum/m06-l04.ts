import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-days',
  module: 6,
  lesson: 4,
  title: 'Days of the Week — Mazuva Evhiki',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Days of the week in Shona tell a story — many are rooted in counting and in the Christian calendar that arrived with colonialism. Some days have both traditional and modern names. Let's learn the ones used today.",
    culturalNote: "Zimbabwe follows a Monday-Sunday work week. Markets (particularly the big ones) happen on specific days. Knowing the days allows you to make plans, keep appointments, and talk about your week like a local.",
  },

  chunks: [
    {
      id: 'svondo_muvhuro',
      shona: 'Svondo / Muvhuro',
      english: 'Sunday / Monday',
      literal: 'Svondo (from Sunday), Muvhuro (beginning/opening)',
      emoji: '📅',
      phonetic: 'SVON-do / mu-VHU-ro',
      audioRef: null,
    },
    {
      id: 'chipiri_chitatu',
      shona: 'Chipiri / Chitatu',
      english: 'Tuesday / Wednesday',
      literal: 'Chi-piri (second), Chi-tatu (third)',
      emoji: '📆',
      phonetic: 'chi-PI-ri / chi-TA-tu',
      audioRef: null,
    },
    {
      id: 'chishanu_mugovera',
      shona: 'Chishanu / Mugovera',
      english: 'Friday / Saturday',
      literal: 'Chi-shanu (fifth), Mu-govera (sharing day)',
      emoji: '🎉',
      phonetic: 'chi-SHA-nu / mu-go-VE-ra',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chi- days are numbered days',
    explanation: "Tuesday through Friday use the Chi- prefix with number roots: Chipiri (2nd day), Chitatu (3rd), China (4th), Chishanu (5th). Monday = Muvhuro (the opener). Saturday = Mugovera (sharing day). Sunday = Svondo.",
    examples: [
      { shona: 'Chi-piri', english: 'Tuesday (2nd day)' },
      { shona: 'Chi-tatu', english: 'Wednesday (3rd day)' },
      { shona: 'Chi-shanu', english: 'Friday (5th day)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the day to its meaning',
      pairs: [
        { left: 'Svondo', right: 'Sunday' },
        { left: 'Muvhuro', right: 'Monday' },
        { left: 'Mugovera', right: 'Saturday' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the day',
      sentence: 'Chi_____ ndiChipiri.',
      options: ['piri', 'tatu', 'shanu'],
      correct: 'piri',
      context: 'Tuesday — the second day.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Friday',
      correct: ['Chishanu', 'chishanu'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which day means 'the sharing day'?",
      question: 'Mugovera means:',
      options: [
        { text: 'Saturday', correct: true },
        { text: 'Friday', correct: false },
        { text: 'Sunday', correct: false },
      ],
      explanation: "Mugovera (Saturday) — the sharing day. Traditionally a day of community gathering and market.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I will go on Friday'",
      words: ['Ndichaenda', 'naChishanu.'],
      correct: ['Ndichaenda', 'naChishanu.'],
      translation: 'I will go on Friday',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Monday',
      correct: ['Muvhuro', 'muvhuro'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks when you can meet to continue learning.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tingaratidze riini? Ndicharava Chitatu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndichaenda naChishanu. Tingaratidza naChishanu here?', english: 'I will go on Friday. Can we meet on Friday?', correct: true, feedback: "Using the day name correctly in a real scheduling context. Rwen confirms Friday." },
          { shona: 'Chishanu', english: 'Friday (just the word)', correct: false, feedback: "Build a sentence — 'Tingaratidza naChishanu?' — Can we meet on Friday?" },
          { shona: 'Handizivi', english: "I don't know", correct: false, feedback: "Pick a day! 'Ndichaenda naChishanu' — I will go on Friday." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka. Chishanu — ticharatidza. I'll see you Friday.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Friday', correct: ['Chishanu', 'chishanu'] },
      { prompt: 'Saturday', correct: ['Mugovera', 'mugovera'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "What day is today in Shona? Say it. What day is tomorrow? Say that too. Plan your week — even one day — in Shona.",
    rwenSignoff: "Mazuva anoenda nekukasira — days pass quickly. Famba zvakanaka.",
  },
};

export default lesson;
