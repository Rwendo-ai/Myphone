import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-delicious',
  module: 7,
  lesson: 6,
  title: 'Zvakanakisisa! — Expressing Taste',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've eaten. Now you need to express how it tasted. In Shona, complimenting food is not just politeness — it's a gift to the cook. 'Zvakanakisisa' (excellent/delicious) said sincerely is one of the most welcome phrases you can offer.",
    culturalNote: "In Zimbabwean culture, the cook — usually a woman of the household — invests enormous care in the meal. Expressing appreciation for the food completes the cycle of hospitality. Never eat silently and leave. Respond with warmth.",
  },

  chunks: [
    {
      id: 'zvakanakisisa',
      shona: 'Zvakanakisisa',
      english: 'Excellent / Delicious / Very good',
      literal: 'It-is-very-good-indeed',
      emoji: '😋',
      phonetic: 'zva-ka-na-ki-SI-sa',
      audioRef: null,
    },
    {
      id: 'zvinonaka',
      shona: 'Zvinonaka',
      english: 'It tastes good / It is delicious',
      literal: 'Things-are-good/tasty',
      emoji: '✨',
      phonetic: 'zvi-no-NA-ka',
      audioRef: null,
    },
    {
      id: 'makagadzira_zvakanaka',
      shona: 'Makagadzira zvakanaka',
      english: 'You cooked it well',
      literal: 'You-cooked it-well',
      emoji: '👨‍🍳',
      phonetic: 'ma-ka-ga-DZI-ra zva-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zvakanaka → Zvakanakisisa (intensified)',
    explanation: "Add '-isisa' to an adjective to intensify it maximally. Zvakanaka (it is good) → Zvakanakisisa (it is excellent/the best). This '-isisa' intensifier works broadly: ndinozivisisisa (I know very well indeed).",
    examples: [
      { shona: 'Zvakanaka', english: 'It is good' },
      { shona: 'Zvakanakisisa', english: 'It is excellent (maximally good)' },
      { shona: 'Ndinokudaisisa', english: 'I love you very much (maximally)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the taste expression to its meaning',
      pairs: [
        { left: 'Zvakanakisisa', right: 'Excellent / Delicious' },
        { left: 'Zvinonaka', right: 'It tastes good' },
        { left: 'Makagadzira zvakanaka', right: 'You cooked it well' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Express maximum appreciation',
      sentence: 'Sadza ino, zvakanaki_____!',
      options: ['sisa', 'naka', 'enda'],
      correct: 'sisa',
      context: 'This sadza is excellent!',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Excellent / Delicious',
      correct: ['Zvakanakisisa', 'zvakanakisisa'],
    },
    {
      type: 'multiple_choice',
      instruction: "You finish a meal. What do you say to the cook?",
      question: 'Compliment the cook:',
      options: [
        { text: 'Makagadzira zvakanaka. Zvakanakisisa.', correct: true },
        { text: 'Ndaguta', correct: false },
        { text: 'Ndinoda sadza zvakare', correct: false },
      ],
      explanation: "'Makagadzira zvakanaka. Zvakanakisisa.' — You cooked it well. It was excellent. The most complete compliment to a cook.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The food is delicious'",
      words: ['Zvokudya', 'izvi', 'zvinonaka.'],
      correct: ['Zvokudya', 'izvi', 'zvinonaka.'],
      translation: 'The food is delicious',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'It tastes good',
      correct: ['Zvinonaka', 'zvinonaka'],
    },
  ],

  rwenDialogue: {
    intro: "You've finished Rwen's mother's sadza. She waits to hear your response.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Zvakachaka here?',
        english: 'Was it tasty?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Zvakanakisisa, Amai! Makagadzira zvakanaka zvikuru. Ndatenda.', english: "It was excellent, Mother! You cooked it very well. Thank you.", correct: true, feedback: "A complete compliment — excellence, credit to the cook, gratitude. The mother is moved." },
          { shona: 'Zvakanaka', english: "It's good", correct: false, feedback: "Go further — 'Zvakanakisisa, Amai! Makagadzira zvakanaka zvikuru.' The extra words mean everything." },
          { shona: 'Ndaguta', english: "I'm full", correct: false, feedback: "That tells her you're full, not that it was good. Add: 'Zvakanakisisa, Amai! Makagadzira zvakanaka.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Amai vanosvimha misodzi yemufaro. A compliment in the right language carries more weight than gold.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Excellent / Delicious', correct: ['Zvakanakisisa', 'zvakanakisisa'] },
      { prompt: 'You cooked it well', correct: ['Makagadzira zvakanaka', 'makagadzira zvakanaka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone cooks for you, say 'Zvakanakisisa' — even in English company. Watch how they receive that one Shona word.",
    rwenSignoff: "Compliment the cook. Always. Famba zvakanaka.",
  },
};

export default lesson;
