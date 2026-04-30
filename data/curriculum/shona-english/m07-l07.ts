import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-hosting',
  module: 7,
  lesson: 7,
  title: 'Welcoming a Guest — The Host\'s Role',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In Zimbabwe, hosting is an art and a duty. The host's words set the tone for every visit. 'Tauya' (come in), 'Garai' (sit down), 'Tora' (have some) — these three words can make anyone feel at home.",
    culturalNote: "Shona hospitality is unconditional — guests are welcomed regardless of whether their arrival was expected. The phrase 'hatinzi tauya' (we don't say 'we came', implying you should have been here all along) captures this spirit perfectly.",
  },

  chunks: [
    {
      id: 'tauya_garai',
      target: 'Tauya / Garai',
      native: 'Come in / Sit down',
      literal: 'Come-here / Sit',
      emoji: '🚪🪑',
      phonetic: 'TAU-ya / ga-RAI',
      audioRef: null,
    },
    {
      id: 'tora_nedivi',
      target: 'Tora, nedivi',
      native: 'Please help yourself / Have some',
      literal: 'Take, this-side',
      emoji: '🤲',
      phonetic: 'TO-ra ne-DI-vi',
      audioRef: null,
    },
    {
      id: 'mauya_zvakanaka',
      target: 'Mauya zvakanaka',
      native: 'Welcome / You have arrived well',
      literal: 'You-have-come well',
      emoji: '🌟',
      phonetic: 'ma-U-ya zva-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Commands in hospitality — verb-first',
    explanation: "Hospitality commands start with the verb: Tauya (come), Garai (sit), Tora (take/have). These are direct but warm — not rude. In Shona, directness in hospitality is kindness, not rudeness. The warmth comes from tone and the words around them.",
    examples: [
      { target: 'Tauya, garai', native: 'Come in, sit down' },
      { target: 'Mauya zvakanaka', native: 'Welcome (you have come well)' },
      { target: 'Tora, nedivi — zvokudya zviripo', native: 'Please help yourself — there is food' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hosting phrase to its meaning',
      pairs: [
        { left: 'Tauya', right: 'Come in' },
        { left: 'Garai', right: 'Sit down' },
        { left: 'Mauya zvakanaka', right: 'Welcome' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Welcome a guest properly',
      sentence: 'Mauya _____, garai pano.',
      options: ['zvakanaka', 'zvakaipa', 'chete'],
      correct: 'zvakanaka',
      context: 'Welcome, sit down here.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Welcome / You have arrived well',
      correct: ['Mauya zvakanaka', 'mauya zvakanaka'],
    },
    {
      type: 'multiple_choice',
      instruction: "A guest arrives at your home. What are the first three things you say?",
      question: 'Host sequence for a guest:',
      options: [
        { text: 'Mauya zvakanaka → Tauya → Garai', correct: true },
        { text: 'Wambodya here? → Ndaguta → Tauya', correct: false },
        { text: 'Mutengo uri ngani? → Garai → Tauya', correct: false },
      ],
      explanation: "Welcome them (Mauya zvakanaka) → invite in (Tauya) → offer a seat (Garai). Then bring water, then food.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Please help yourself — sit here'",
      words: ['Tora,', 'nedivi.', 'Garai', 'pano.'],
      correct: ['Tora,', 'nedivi.', 'Garai', 'pano.'],
      translation: 'Please help yourself. Sit here.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Come in / Sit down',
      correct: ['Tauya, garai', 'tauya, garai'],
    },
  ],

  rwenDialogue: {
    intro: "You are now the host. A guest arrives at your door. Welcome them in Shona.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mhoro, shamwari.',
        native: 'Hello, friend.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mauya zvakanaka! Tauya, garai. Tora mvura, nedivi.', native: 'Welcome! Come in, sit down. Please have some water.', correct: true, feedback: "Welcome → come in → sit → offer water. Perfect Shona hosting sequence." },
          { target: 'Mhoro', native: 'Hello (simple)', correct: false, feedback: "You're the host — do more: 'Mauya zvakanaka! Tauya, garai.' Welcome them properly." },
          { target: 'Wambodya here?', native: 'Have you eaten?', correct: false, feedback: "Good instinct — but welcome and seat them first: 'Mauya zvakanaka! Tauya, garai.' Then ask about food." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Your guest sits down, smiling. That welcome in Shona said: 'You are safe. You are wanted here.'",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Welcome / You have arrived well', correct: ['Mauya zvakanaka', 'mauya zvakanaka'] },
      { prompt: 'Come in, sit down', correct: ['Tauya, garai', 'tauya, garai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone enters your space — a room, your home, even a meeting — mentally say 'Mauya zvakanaka. Garai.' Welcome them in Shona first, then in words.",
    rwenSignoff: "The best hosts make guests feel they never left. Famba zvakanaka.",
  },
};

export default lesson;
