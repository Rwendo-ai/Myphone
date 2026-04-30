import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-mu-mi',
  module: 4,
  lesson: 3,
  title: 'Muti / Miti — Trees & Medicine',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "The Mu/Mi class covers trees, plants — and medicine. In Shona, the word for tree and the word for medicine are the same: muti. That's not a coincidence. Shona traditional medicine comes from trees.",
    culturalNote: "Traditional healers (n'anga) use muti — plant-based medicines — as central to healing practice. The double meaning of muti (tree/medicine) reflects how deeply nature and healing are connected in Zimbabwean culture.",
  },

  chunks: [
    {
      id: 'muti',
      shona: 'Muti',
      english: 'Tree / Medicine',
      literal: 'Mu-ti (class 3 prefix)',
      emoji: '🌳',
      phonetic: 'MU-ti',
      audioRef: null,
    },
    {
      id: 'miti',
      shona: 'Miti',
      english: 'Trees / Medicines',
      literal: 'Mi-ti (class 4 plural)',
      emoji: '🌲🌲',
      phonetic: 'MI-ti',
      audioRef: null,
    },
    {
      id: 'muriwo',
      shona: 'Muriwo',
      english: 'Vegetables / Relish',
      literal: 'Mu-riwo (plant class)',
      emoji: '🥬',
      phonetic: 'mu-RI-wo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mu- singular, Mi- plural (trees/plants)',
    explanation: "The Mu/Mi class covers plants, trees, and rivers. Don't confuse Mu- (plants) with Mu- (people) — the stems are different. People stems are human words; plant stems are nature words.",
    examples: [
      { shona: 'Mu-ti → Mi-ti', english: 'Tree → Trees' },
      { shona: 'Mu-riwo → Mi-riwo', english: 'Vegetable → Vegetables' },
      { shona: 'Mu-sha → Mi-sha', english: 'Village → Villages' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Muti', right: 'Tree / Medicine' },
        { left: 'Miti', right: 'Trees / Medicines' },
        { left: 'Muriwo', right: 'Vegetables' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "What is the Shona word for 'tree' AND 'medicine'?",
      question: 'One word, two meanings:',
      options: [
        { text: 'Muti', correct: true },
        { text: 'Munhu', correct: false },
        { text: 'Chinhu', correct: false },
      ],
      explanation: "Muti means both tree and medicine — because traditional medicine comes from trees.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Tree / Medicine',
      correct: ['Muti', 'muti'],
    },
    {
      type: 'fill_blank',
      instruction: 'Make it plural',
      sentence: 'Miti _____ yakakura.',
      options: ['iyi', 'ava', 'ivi'],
      correct: 'iyi',
      context: 'These trees have grown tall.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Trees are beautiful"',
      words: ['yakanaka.', 'Miti'],
      correct: ['Miti', 'yakanaka.'],
      translation: 'Trees are beautiful',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Vegetables / Relish',
      correct: ['Muriwo', 'muriwo'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen takes you outside to show you a large tree and explains its significance.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Muti uyu wakaita makore mazhinji. Tinoti muti — shandiswa sechiremba zvakare.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Muti — muti wemichero uye mushonga?', english: 'Tree — both a fruit tree and medicine?', correct: true, feedback: "Exactly. One word, two purposes. That's the depth of Shona vocabulary." },
          { shona: 'Muriwo uyu?', english: 'These vegetables?', correct: false, feedback: "Muriwo is vegetables. Muti is the word for both tree and medicine." },
          { shona: 'Ndanzwisisa', english: 'I understand', correct: false, feedback: "Good — tell Rwen what you understand: Muti = tree AND medicine." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hongu. Miti ndiyo mutsvairo wenyika — vasekuru vaiti.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Tree / Medicine', correct: ['Muti', 'muti'] },
      { prompt: 'Vegetables / Relish', correct: ['Muriwo', 'muriwo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find a tree today. Say 'Muti' and remember it means both tree AND medicine. That one word tells you something important about Shona culture.",
    rwenSignoff: "Nature is the first pharmacy. Famba zvakanaka.",
  },
};

export default lesson;
