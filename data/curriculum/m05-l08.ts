import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-children',
  module: 5,
  lesson: 8,
  title: 'Vana — Children & Babies',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Children are the future of the family — and in Zimbabwe, raising a child is truly a village effort. 'Mwana' (child) is one of the warmest words in Shona. It's used to address young people affectionately, even strangers.",
    culturalNote: "The Shona proverb 'Mwana wevamwe ndewako' means 'another person's child is your child too'. Children belong to the whole community, not just their parents. This is Ubuntu in practice.",
  },

  chunks: [
    {
      id: 'mwana',
      shona: 'Mwana',
      english: 'Child / Baby',
      literal: 'Mwana (child, Class 1)',
      emoji: '👶',
      phonetic: 'MWA-na',
      audioRef: null,
    },
    {
      id: 'vana',
      shona: 'Vana',
      english: 'Children',
      literal: 'Va-na (plural of mwana)',
      emoji: '👧👦',
      phonetic: 'VA-na',
      audioRef: null,
    },
    {
      id: 'mwana_wechikadzi',
      shona: 'Mwana wechikadzi / wechibhemu',
      english: 'Daughter / Son',
      literal: 'Child of-female / Child of-male',
      emoji: '👧👦',
      phonetic: 'MWA-na we-chi-KA-dzi / we-chi-BHE-mu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mwana / Vana — singular and plural',
    explanation: "Mwana (one child) becomes Vana (children) — following the Mu/Va class pattern. But mwana is irregular — it doesn't start with Mu-. Some Class 1 nouns are exceptions. The plural Va-na is regular.",
    examples: [
      { shona: 'Mwana wangu', english: 'My child' },
      { shona: 'Vana vangu', english: 'My children' },
      { shona: 'Vana vose', english: 'All children' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Mwana', right: 'Child' },
        { left: 'Vana', right: 'Children' },
        { left: 'Mwana wechikadzi', right: 'Daughter' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'my children'",
      sentence: 'Vana _____ vanotamba.',
      options: ['vangu', 'wangu', 'rangu'],
      correct: 'vangu',
      context: 'My children are playing.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Child',
      correct: ['Mwana', 'mwana'],
    },
    {
      type: 'multiple_choice',
      instruction: "The proverb says: 'Mwana wevamwe ndewako'. What does this mean?",
      question: "Mwana wevamwe ndewako:",
      options: [
        { text: "Another person's child is your child too", correct: true },
        { text: 'A child belongs only to their parents', correct: false },
        { text: 'Children should not speak to strangers', correct: false },
      ],
      explanation: "This proverb captures Ubuntu — children belong to the whole community. Everyone has a responsibility to care for all children.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have two children'",
      words: ['Ndine', 'vana', 'vaviri.'],
      correct: ['Ndine', 'vana', 'vaviri.'],
      translation: 'I have two children',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Children',
      correct: ['Vana', 'vana'],
    },
  ],

  rwenDialogue: {
    intro: "A child at the family gathering runs up to greet you. Respond warmly.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Mhoro, Sekuru / Amai!',
        english: 'Hello, Grandfather / Grandmother! (respectful title for you)',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Mhoro, mwanangu! Wakadii?', english: 'Hello, my child! How are you?', correct: true, feedback: "Using 'mwanangu' (my child) warmly — the child beams. That's Shona family love." },
          { shona: 'Mhoro', english: 'Hello', correct: false, feedback: "Warmer — call the child 'mwanangu' (my child): 'Mhoro, mwanangu! Wakadii?'" },
          { shona: 'Makadii', english: 'How are you (formal)', correct: false, feedback: "Too formal for a child — use 'Mhoro, mwanangu! Wakadii?' — warm and direct." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mwana anofarira. Kushevedza mwana 'mwanangu' — izvo zvimwe zvedu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Child', correct: ['Mwana', 'mwana'] },
      { prompt: 'Children', correct: ['Vana', 'vana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have children, say 'Vana vangu' (my children) today and feel the warmth in it. If you don't, think of a child you care about and say 'Mwana wangu' — my child — with that same warmth.",
    rwenSignoff: "Children are the future. Vana ndivanhu vemangwana. Famba zvakanaka.",
  },
};

export default lesson;
