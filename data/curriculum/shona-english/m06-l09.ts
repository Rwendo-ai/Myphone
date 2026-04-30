import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-appointments',
  module: 6,
  lesson: 9,
  title: 'Appointments & Scheduling',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You have numbers, time, and days. Now let's put them together for real-life scheduling — making appointments, asking when something happens, and telling people when you'll arrive.",
    culturalNote: "In Zimbabwean professional and social life, confirming arrangements is important. People often follow up appointments with a call or message. Knowing how to confirm in Shona shows you're serious and culturally aware.",
  },

  chunks: [
    {
      id: 'ndichasvika',
      target: 'Ndichasvika na...',
      native: 'I will arrive at...',
      literal: 'I-will-arrive at...',
      emoji: '🚗',
      phonetic: 'ndi-cha-SVI-ka na',
      audioRef: null,
    },
    {
      id: 'tinosangana',
      target: 'Tinosangana riini?',
      native: 'When do we meet?',
      literal: 'We-meet when?',
      emoji: '🤝',
      phonetic: 'ti-no-san-GA-na ri-I-ni',
      audioRef: null,
    },
    {
      id: 'ndakamirira',
      target: 'Ndakamirira / Ndirikumirira',
      native: 'I waited / I am waiting',
      literal: 'I-waited / I-am-waiting',
      emoji: '⏳',
      phonetic: 'nda-ka-mi-RI-ra / ndi-ri-ku-mi-RI-ra',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Na + time/day = at [time], on [day]',
    explanation: "'Na' before a time or day means 'at' or 'on'. Ndichasvika nairi tatu (I'll arrive at 3). Tinosangana naChishanu (We meet on Friday). 'Na' is the time preposition.",
    examples: [
      { target: 'Ndichasvika na iri tatu', native: "I will arrive at 3 o'clock" },
      { target: 'Tinosangana naChishanu', native: 'We meet on Friday' },
      { target: 'Ndakamirira nguva refu', native: 'I waited a long time' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the scheduling phrase to its meaning',
      pairs: [
        { left: 'Ndichasvika na...', right: 'I will arrive at...' },
        { left: 'Tinosangana riini?', right: 'When do we meet?' },
        { left: 'Ndirikumirira', right: 'I am waiting' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say when you will arrive',
      sentence: 'Ndichasvika _____ iri shanu.',
      options: ['na', 'ku', 'mu'],
      correct: 'na',
      context: "I will arrive at 5 o'clock.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'When do we meet?',
      correct: ['Tinosangana riini?', 'tinosangana riini?', 'Tinosangana riini', 'tinosangana riini'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say 'We will meet on Monday'. What do you say?",
      question: 'We will meet on Monday:',
      options: [
        { text: 'Tinosangana naMuvhuro', correct: true },
        { text: 'Tinosangana muMuvhuro', correct: false },
        { text: 'Tinosangana Muvhuro', correct: false },
      ],
      explanation: "'Na' before the day means 'on [day]'. Tinosangana naMuvhuro = We meet on Monday.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am waiting for you'",
      words: ['Ndirikukumirira.'],
      correct: ['Ndirikukumirira.'],
      translation: 'I am waiting for you',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I will arrive at... (start of phrase)",
      correct: ['Ndichasvika na', 'ndichasvika na'],
    },
  ],

  rwenDialogue: {
    intro: "You're planning to visit Rwen's family. Confirm the arrangements.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uchauya rini? Mhuri inokumirira.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndichasvika naChishanu na iri tatu masikati.', native: "I will arrive on Friday at 3pm.", correct: true, feedback: "Day + time — a complete, specific arrival plan. The family can prepare." },
          { target: 'Ndichasvika mangwana', native: 'I will arrive tomorrow', correct: false, feedback: "Give a specific time too — 'Ndichasvika naChishanu na iri tatu masikati.' Friday at 3pm." },
          { target: 'Handizivi rinhi', native: "I don't know when", correct: false, feedback: "Pick a day and time — 'Ndichasvika naChishanu na iri tatu masikati.' Show up prepared." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! Chishanu na iri tatu — mhuri ichakumirira. We'll be ready.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'When do we meet?', correct: ['Tinosangana riini?', 'tinosangana riini?', 'Tinosangana riini', 'tinosangana riini'] },
      { prompt: 'I will arrive at... (start of phrase)', correct: ['Ndichasvika na', 'ndichasvika na'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Plan something in Shona today. Even a small thing — 'Ndichadya na iri tatu' (I will eat at 3). Say when you'll do something using na + time.",
    rwenSignoff: "Plans made in Shona feel real. Famba zvakanaka.",
  },
};

export default lesson;
