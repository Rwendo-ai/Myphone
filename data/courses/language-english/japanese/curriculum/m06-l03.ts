import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Hundreds, Thousands, Millions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "千、万、百万 — 大きな数字の英語。給料や人口を語る時の必須表現。",
    culturalNote: "日本語は4桁ごと（万、億）に区切りますが、英語は3桁ごと（thousand, million, billion）。1万 = 10 thousand と訳すのに混乱しがちです。",
  },

  chunks: [
    { id: 'one_thousand', target: 'One thousand', native: '千 (Sen)', literal: 'One thousand', emoji: '🔢', phonetic: 'wun-THOW-zand', audioRef: null },
    { id: 'ten_thousand', target: 'Ten thousand', native: '一万 (Ichi-man)', literal: 'Ten thousand (10,000)', emoji: '💵', phonetic: 'ten-THOW-zand', audioRef: null },
    { id: 'one_million', target: 'One million', native: '百万 (Hyaku-man)', literal: 'One million (1,000,000)', emoji: '💰', phonetic: 'wun-MIL-yon', audioRef: null },
  ],

  pattern: {
    name: '3-digit grouping',
    explanation: "英語は3桁ごとカンマ：1,000 = one thousand, 10,000 = ten thousand, 100,000 = one hundred thousand, 1,000,000 = one million。日本語の「万」「億」と区切りが違います。",
    examples: [
      { target: '1,000 = one thousand', native: '千' },
      { target: '10,000 = ten thousand', native: '一万' },
      { target: '1,000,000 = one million', native: '百万' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'One thousand', right: '千' },
      { left: 'Ten thousand', right: '一万' },
      { left: 'One million', right: '百万' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '一万', correct: ['Ten thousand', 'ten thousand'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '1,000,000 = one ____.', options: ['million', 'thousand', 'hundred'], correct: 'million' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '日本の人口（約1.2億）を英語で表すと？', options: [
      { text: '120 million', correct: true },
      { text: '12 oku', correct: false },
      { text: '1.2 hundred', correct: false },
    ], explanation: '1億 = 100 million（hundred million）。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['thousand', 'ten'], correct: ['ten', 'thousand'], translation: '一万' },
    { type: 'translate', instruction: '英語で', prompt: '百万', correct: ['One million', 'a million'] },
  ],

  rwenDialogue: {
    intro: 'シンガポールで物件価格の話。',
    lines: [
      { speaker: 'npc', target: "This apartment is one million dollars.", native: 'このアパートは百万ドル。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "One million? That's expensive!", native: '百万？高い！', correct: true, feedback: '完璧 — 数字を理解して反応。' },
          { target: 'Ten thousand?', native: '一万？', correct: false, feedback: 'million は百万 — 桁が違います。' },
          { target: 'Hundred ten?', native: '百十？', correct: false, feedback: 'one million = 1,000,000。' },
        ],
      },
      { speaker: 'npc', target: "Yes, prices here are crazy.", native: 'はい、ここの価格はすごい。' },
      { speaker: 'rwen', rwenLine: '大きな数字マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '一万 (英語で)', correct: ['Ten thousand', 'ten thousand'] },
      { prompt: '百万 (英語で)', correct: ['One million', 'a million'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の月収と年収を英語の単位で言う。「I earn __ thousand yen per month.」',
    rwenSignoff: 'A million thanks for learning!',
  },

  phase8: {
    scenario: 'シンガポールで物件・給料の話。',
    rwenRole: 'David — 40歳の不動産業者。',
    successCriteria: "User uses thousand/million correctly (3-digit grouping), converts Japanese 万 to 'ten thousand', doesn't confuse the systems.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
