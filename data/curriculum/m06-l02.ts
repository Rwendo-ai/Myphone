import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-6-10',
  module: 6,
  lesson: 2,
  title: 'Nhamba 6–10 — Numbers Six to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Six to ten — and then we hit gumi (ten), the foundation of all larger numbers. Like building blocks: gumi plus chimwe = gumi nerimwe (eleven). Once you have one to ten, you can count to a hundred.",
    culturalNote: "The decimal system in Shona works beautifully once you know the base numbers. Markets, prices, phone numbers, dates — all built from these ten words. Master them and the whole system opens.",
  },

  chunks: [
    {
      id: 'tanhatu_nomwe_sere',
      target: 'Tanhatu / Nomwe / Sere',
      native: 'Six / Seven / Eight',
      literal: 'Tanhatu (6), Nomwe (7), Sere (8)',
      emoji: '6️⃣7️⃣8️⃣',
      phonetic: 'tan-HA-tu / NO-mwe / SE-re',
      audioRef: null,
    },
    {
      id: 'pfumbamwe_gumi',
      target: 'Pfumbamwe / Gumi',
      native: 'Nine / Ten',
      literal: 'Pfumbamwe (9), Gumi (10)',
      emoji: '9️⃣🔟',
      phonetic: 'pfum-BA-mwe / GU-mi',
      audioRef: null,
    },
    {
      id: 'gumi_nerimwe',
      target: 'Gumi nerimwe',
      native: 'Eleven',
      literal: 'Ten and-one = 11',
      emoji: '1️⃣1️⃣',
      phonetic: 'GU-mi ne-ri-MWE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gumi + ne + number = eleven onwards',
    explanation: "'Gumi' (10) + 'ne' (and) + number = any teen. Gumi nerimwe (11), gumi nepiri (12), gumi netatu (13). The pattern is simple: ten AND something. Like stacking blocks.",
    examples: [
      { target: 'Gumi nerimwe', native: 'Eleven (10 + 1)' },
      { target: 'Gumi nepiri', native: 'Twelve (10 + 2)' },
      { target: 'Gumi netatu', native: 'Thirteen (10 + 3)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each number to its meaning',
      pairs: [
        { left: 'Tanhatu', right: 'Six' },
        { left: 'Gumi', right: 'Ten' },
        { left: 'Pfumbamwe', right: 'Nine' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete eleven',
      sentence: 'Gumi _____ rimwe.',
      options: ['ne', 'na', 'ndi'],
      correct: 'ne',
      context: 'Gumi nerimwe = eleven.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Ten',
      correct: ['Gumi', 'gumi'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'twelve' in Shona?",
      question: 'Twelve:',
      options: [
        { text: 'Gumi nepiri', correct: true },
        { text: 'Gumi netatu', correct: false },
        { text: 'Makumi maviri', correct: false },
      ],
      explanation: "Gumi (10) + ne + piri (2) = Gumi nepiri (12).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have ten dollars'",
      words: ['Ndine', 'madora', 'gumi.'],
      correct: ['Ndine', 'madora', 'gumi.'],
      translation: 'I have ten dollars',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Eleven',
      correct: ['Gumi nerimwe', 'gumi nerimwe'],
    },
  ],

  rwenDialogue: {
    intro: "A child asks you to count to ten with them.",
    lines: [
      {
        speaker: 'npc',
        target: 'Verenga neni! Chimwe, piri...',
        native: 'Count with me! One, two...',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tatu, china, shanu, tanhatu, nomwe, sere, pfumbamwe, gumi!', native: 'Three, four, five, six, seven, eight, nine, ten!', correct: true, feedback: "You counted to ten in Shona! The child claps." },
          { target: 'Tatu, china, shanu...', native: 'Three, four, five... (stopped)', correct: false, feedback: "Keep going! Tatu, china, shanu, tanhatu, nomwe, sere, pfumbamwe, gumi!" },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Try! Tatu, china, shanu, tanhatu, nomwe, sere, pfumbamwe, gumi." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Gumi! You counted to ten in Shona. The child will remember you forever.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Nine', correct: ['Pfumbamwe', 'pfumbamwe'] },
      { prompt: 'Ten', correct: ['Gumi', 'gumi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from 1 to 10 in Shona out loud right now: Chimwe, piri, tatu, china, shanu, tanhatu, nomwe, sere, pfumbamwe, gumi. Then count from 10 down to 1.",
    rwenSignoff: "Gumi. You've reached ten. The whole number system is now yours to build on. Famba zvakanaka.",
  },
};

export default lesson;
