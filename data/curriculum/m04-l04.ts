import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-ri-ma',
  module: 4,
  lesson: 4,
  title: 'Zai / Mazai — The Ri/Ma Class',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Some nouns in Shona don't have a visible prefix — but they still belong to a class. The Ri/Ma class is sneaky: singular nouns look bare, but add Ma- and suddenly you have plurals. Eggs, knives, stones.",
    culturalNote: "Many everyday objects in Zimbabwe fall into the Ri/Ma class — foods, tools, nature words. Recognising them helps you form plurals naturally and understand what people say about everyday life.",
  },

  chunks: [
    {
      id: 'zai_mazai',
      target: 'Zai / Mazai',
      native: 'Egg / Eggs',
      literal: 'Stem: zai, Plural: Ma-zai',
      emoji: '🥚',
      phonetic: 'ZAI / ma-ZAI',
      audioRef: null,
    },
    {
      id: 'banga_mabanga',
      target: 'Banga / Mabanga',
      native: 'Knife / Knives',
      literal: 'Stem: banga, Plural: Ma-banga',
      emoji: '🔪',
      phonetic: 'BA-nga / ma-BA-nga',
      audioRef: null,
    },
    {
      id: 'dombo_matombo',
      target: 'Dombo / Matombo',
      native: 'Stone / Stones',
      literal: 'Stem: dombo, Plural: Ma-tombo (stem changes)',
      emoji: '🪨',
      phonetic: 'DO-mbo / ma-TO-mbo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ma- prefix makes plurals in Ri/Ma class',
    explanation: "Singular nouns in this class appear bare (no prefix). To make them plural, add Ma-. Sometimes the stem changes slightly — dombo becomes matombo. Listen carefully.",
    examples: [
      { target: 'Zai → Ma-zai', native: 'Egg → Eggs' },
      { target: 'Banga → Ma-banga', native: 'Knife → Knives' },
      { target: 'Dombo → Ma-tombo', native: 'Stone → Stones' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match singular to plural',
      pairs: [
        { left: 'Zai', right: 'Mazai' },
        { left: 'Banga', right: 'Mabanga' },
        { left: 'Dombo', right: 'Matombo' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the plural form',
      sentence: 'Ndinoda mazai _____ matatu.',
      options: ['aya', 'ava', 'izvi'],
      correct: 'aya',
      context: 'I want three eggs.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Eggs (plural)',
      correct: ['Mazai', 'mazai'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you make 'banga' (knife) plural?",
      question: "Banga → ?",
      options: [
        { text: 'Mabanga', correct: true },
        { text: 'Vabanga', correct: false },
        { text: 'Zvibanga', correct: false },
      ],
      explanation: "Ri/Ma class uses Ma- for plural. Banga → Mabanga.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I need eggs"',
      words: ['mazai.', 'Ndinoda'],
      correct: ['Ndinoda', 'mazai.'],
      translation: 'I need eggs',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Knife',
      correct: ['Banga', 'banga'],
    },
  ],

  rwenDialogue: {
    intro: "You're in the kitchen with Rwen's family. Someone asks you to count the eggs.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mazai mangani ari pano?',
        native: 'How many eggs are here?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mazai matatu ari pano.', native: 'Three eggs are here.', correct: true, feedback: "Perfect — you used mazai (plural) correctly." },
          { target: 'Zai matatu', native: 'Three egg (singular)', correct: false, feedback: "For 'three eggs' you need the plural: Mazai matatu." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Try counting with mazai: 'Mazai matatu ari pano' — three eggs are here." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! You used the plural correctly. The family is impressed.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Eggs (plural)', correct: ['Mazai', 'mazai'] },
      { prompt: 'Stones (plural)', correct: ['Matombo', 'matombo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find 3 everyday objects and say their Shona plural with Ma-. Start with food: mazai (eggs), mabanga (knives), matombo (stones).",
    rwenSignoff: "Ma- is one of the most useful sounds in Shona. Famba zvakanaka.",
  },
};

export default lesson;
