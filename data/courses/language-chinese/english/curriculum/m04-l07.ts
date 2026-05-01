import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-measure-bei',
  module: 4,
  lesson: 7,
  title: 'Bēi 杯 — for cups & glasses',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Walk into any Chinese tea house or coffee shop and you'll need this one: bēi (杯). One bēi means one cup of liquid. The character itself shows a 'wood' radical — old Chinese cups were wooden. Order anything to drink, you'll use bēi.",
    culturalNote: "Bēi works like English 'a cup of' or 'a glass of' — it counts the container, not the substance. Yì bēi shuǐ = one [container] of water. Yì bēi kāfēi = one coffee. Yì bēi chá = one tea. The same drink, in a bottle, would use a different word (píng, 瓶).",
  },

  chunks: [
    {
      id: 'yi_bei_shui',
      target: 'Yì bēi shuǐ',
      native: 'one cup/glass of water',
      literal: '(一杯水) lit: one-[bēi]-water',
      emoji: '💧',
      phonetic: 'yee-↘ bay-→ shway-↘↗',
      audioRef: null,
    },
    {
      id: 'liang_bei_kafei',
      target: 'Liǎng bēi kāfēi',
      native: 'two coffees',
      literal: '(两杯咖啡) lit: two-[bēi]-coffee',
      emoji: '☕',
      phonetic: 'lyang-↘↗ bay-→ kah-→ fay-→',
      audioRef: null,
    },
    {
      id: 'san_bei_cha',
      target: 'Sān bēi chá',
      native: 'three teas',
      literal: '(三杯茶) lit: three-[bēi]-tea',
      emoji: '🍵',
      phonetic: 'sahn-→ bay-→ chah-↗',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bēi (杯) — cups & glasses of liquid',
    explanation: 'Bēi is the bridge for any drink served in a cup or glass — water, tea, coffee, juice, beer. It counts the cup, not the liquid. For bottled drinks, use píng (瓶) instead.',
    examples: [
      { target: 'Yì bēi rè shuǐ', native: 'one cup of hot water' },
      { target: 'Liǎng bēi pí jiǔ', native: 'two glasses of beer' },
      { target: 'Sān bēi guǒzhī', native: 'three cups of juice' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Yì bēi shuǐ', right: 'one glass of water' },
        { left: 'Liǎng bēi kāfēi', right: 'two coffees' },
        { left: 'Sān bēi chá', right: 'three teas' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I want a coffee."',
      sentence: 'Wǒ yào yì _____ kāfēi.',
      options: ['bēi', 'zhāng', 'běn'],
      correct: 'bēi',
      context: 'Coffee in a cup — bēi. (For a bottle of beer or water, you\'d switch to píng 瓶.)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one glass of water',
      correct: ['Yì bēi shuǐ', 'yi bei shui', 'yì bēi shuǐ', '一杯水'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'two coffees',
      correct: ['Liǎng bēi kāfēi', 'liang bei kafei', 'liǎng bēi kāfēi', '两杯咖啡'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You sit down at a tea house. Which is correct?',
      question: 'I want one cup of tea',
      options: [
        { text: 'Wǒ yào yì bēi chá.', correct: true },
        { text: 'Wǒ yào yì zhī chá.', correct: false },
        { text: 'Wǒ yào yì běn chá.', correct: false },
      ],
      explanation: 'Liquid in a cup → bēi. Zhī is for animals; běn is for bound items. A "běn chá" would be a tea-book, which sadly does not exist.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Two coffees and one tea, please."',
      words: ['liǎng', 'kāfēi', 'qǐng', 'bēi', 'hé', 'yì', 'chá', 'bēi'],
      correct: ['Liǎng', 'bēi', 'kāfēi', 'hé', 'yì', 'bēi', 'chá', 'qǐng'],
      translation: 'Two coffees and one tea, please. (hé = and, qǐng = please)',
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small tea house mid-afternoon. The owner looks up from a wooden counter stacked with teacups. You're with a friend — order for both of you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ hǎo, hē shénme?',
        native: 'Hello, what would you like to drink?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Liǎng bēi chá, qǐng.', native: 'Two teas, please.', correct: true, feedback: 'Smooth — bēi, liǎng, please. He smiles and asks which kind.' },
          { target: 'Èr bēi chá.', native: 'Two teas (using èr).', correct: false, feedback: 'For "two of" anything, always liǎng — never èr. You\'ll be understood, but it sounds off.' },
          { target: 'Liǎng zhāng chá.', native: 'Two flat teas?', correct: false, feedback: 'Zhāng is for flat things. Tea in cups = bēi.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo — lǜchá háishì hóngchá?',
        native: 'OK — green tea or black tea?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Bēi is one of the friendliest measure words — you'll use it daily. Drinks, cafés, water with a meal. Lock it in.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one glass of water (pinyin or characters)',
        correct: ['Yì bēi shuǐ', 'yi bei shui', 'yì bēi shuǐ', '一杯水'],
      },
      {
        prompt: 'two coffees',
        correct: ['Liǎng bēi kāfēi', 'liang bei kafei', 'liǎng bēi kāfēi', '两杯咖啡'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order yourself one drink today and silently say it in Mandarin: 'yì bēi ___.' Coffee, tea, water — anything in a cup.",
    rwenSignoff: "Cups are bēi. Bottles are píng — we'll meet that one later. Zàijiàn.",
  },

  phase8: {
    scenario: "A traditional Chinese tea house in the late afternoon. You're ordering for yourself and a friend. You'll need to ask for at least two different drinks, use bēi correctly each time, and answer when the owner asks 'green or black?'",
    rwenRole: "Tea-house owner Old Zhōu (老周) — early 60s, knows his teas, takes pride in them. Friendly but expects you to know your basic measure words. He'll suggest a flavour if you hesitate.",
    successCriteria: "User uses 'bēi' with at least two different drinks (chá, kāfēi, shuǐ), uses 'liǎng bēi' rather than 'èr bēi' for two of something, and successfully picks one of the two tea types he offers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
