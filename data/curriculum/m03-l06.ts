import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-tinogara',
  module: 3,
  lesson: 6,
  title: 'Tinogara — Where We Live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've already learned 'Ndinogara ku...' (I live in). Now let's expand — talking about where your family lives, where you grew up, and the difference between where you stay and where you're from.",
    culturalNote: "In Zimbabwe, 'kumusha' (back home / the village) holds deep emotional meaning. Even city-dwellers think of their rural home area as their true origin. Saying 'Kumusha kwangu ndi...' (my home is...) carries deep identity.",
  },

  chunks: [
    {
      id: 'tinogara',
      target: 'Tinogara ku...',
      native: 'We live in...',
      literal: 'We-live in...',
      emoji: '🏘️',
      phonetic: 'ti-no-GA-ra ku',
      audioRef: null,
    },
    {
      id: 'kumusha',
      target: 'Kumusha',
      native: 'Back home / In the village',
      literal: 'At-home/village',
      emoji: '🌳',
      phonetic: 'ku-mu-SHA',
      audioRef: null,
    },
    {
      id: 'kumusha_kwangu',
      target: 'Kumusha kwangu ndi...',
      native: 'My home area is...',
      literal: 'Home my it-is...',
      emoji: '📍',
      phonetic: 'ku-mu-SHA kwan-gu ndi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ti- (we) vs Ndi- (I) — plural self',
    explanation: "You know 'Ndinogara ku...' (I live in). Switch 'Ndi-' to 'Ti-' and it becomes 'Tinogara ku...' (We live in). This Ti- vs Ndi- switch works on all verbs — we've seen Ti-ripo (we are well) in Module 1.",
    examples: [
      { target: 'Ndinogara ku Harare', native: 'I live in Harare' },
      { target: 'Tinogara ku Harare', native: 'We live in Harare' },
      { target: 'Kumusha kwangu ndi Bulawayo', native: 'My home area is Bulawayo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Tinogara ku...', right: 'We live in...' },
        { left: 'Kumusha', right: 'Back home / The village' },
        { left: 'Kumusha kwangu ndi...', right: 'My home area is...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say "we live in London"',
      sentence: 'Tinogara _____ London.',
      options: ['ku', 'mu', 'pa'],
      correct: 'ku',
      context: 'You and your family live in London.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'We live in... (start of phrase)',
      correct: ['Tinogara ku', 'tinogara ku'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Ndaenda kumusha'. What did they do?",
      question: 'What does this mean?',
      options: [
        { text: 'They went back home / to the village', correct: true },
        { text: 'They went to a market', correct: false },
        { text: 'They went to school', correct: false },
      ],
      explanation: "'Ndaenda kumusha' — I went back home/to the village. 'Kumusha' is always the ancestral home or rural home area.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My home area is..."',
      words: ['ndi...', 'Kumusha', 'kwangu'],
      correct: ['Kumusha', 'kwangu', 'ndi...'],
      translation: 'My home area is...',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Back home / In the village',
      correct: ['Kumusha', 'kumusha'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks where you and your family live.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Mhuri yako inogara kupi? Musha wako uri kupi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tinogara ku... Kumusha kwangu ndi...', native: 'We live in... My home area is...', correct: true, feedback: "Two homes — where you live now and where you're from. That tells your whole story." },
          { target: 'Ndinogara ku...', native: 'I live in...', correct: false, feedback: "Good — and add 'Kumusha kwangu ndi...' to share where home truly is." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know where you live — 'Tinogara ku...' for your current home." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Zvakanaka. Kumusha kunoreva zvakawanda.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Home means everything. Now you can say where yours is — in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'We live in... (start of phrase)', correct: ['Tinogara ku', 'tinogara ku'] },
      { prompt: 'My home area is... (start of phrase)', correct: ['Kumusha kwangu ndi', 'kumusha kwangu ndi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say where you live AND where you're originally from — both in Shona. 'Ndinogara ku...' and 'Kumusha kwangu ndi...'",
    rwenSignoff: "Home is where your story starts. Famba zvakanaka.",
  },
};

export default lesson;
