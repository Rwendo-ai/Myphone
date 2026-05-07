import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Numbers in shopping — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Two for ten」「Discount」「Total」 — 買い物で使う数字の英語。",
    culturalNote: "海外のセールでは「Buy 2, get 1 free」「50% off」が一般的。日本の「お一人様一点限り」のような細かい制限は珍しいです。",
  },

  chunks: [
    { id: 'two_for_ten', target: 'Two for ten dollars', native: '2個で10ドル (Niko de juu doru)', literal: 'Two for ten dollars', emoji: '🛍️', phonetic: 'too-for-TEN-DOL-arz', audioRef: null },
    { id: 'discount', target: 'Discount', native: '割引 (Waribiki)', literal: 'Discount', emoji: '🏷️', phonetic: 'DIS-kownt', audioRef: null },
    { id: 'total', target: 'Total / altogether', native: '合計 (Goukei)', literal: 'Total / altogether', emoji: '🧾', phonetic: 'TOH-tul / ahl-too-GEH-thur', audioRef: null },
  ],

  pattern: {
    name: 'Shopping math',
    explanation: "「[number] for [price]」= まとめ売り。「X% off」「X% discount」= 割引。「Total / altogether」= 合計。買い物で必須の表現です。",
    examples: [
      { target: 'Two for ten dollars.', native: '2個で10ドル。' },
      { target: 'Ten percent off.', native: '10%引き。' },
      { target: 'The total is fifty dollars.', native: '合計50ドル。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Two for ten', right: '2個で10' },
      { left: 'Discount', right: '割引' },
      { left: 'Total', right: '合計' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '割引', correct: ['Discount', 'discount'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'The ____ is fifty dollars.', options: ['total', 'discount', 'cost'], correct: 'total' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「10%引き」を英語で？', options: [
      { text: 'Ten percent off', correct: true },
      { text: 'Ten percent discount', correct: true },
      { text: 'Ten percent down', correct: false },
    ], explanation: '「off」または「discount」両方OK。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['dollars', 'ten', 'for', 'two'], correct: ['two', 'for', 'ten', 'dollars'], translation: '2個で10ドル' },
    { type: 'translate', instruction: '英語で', prompt: '合計50ドル', correct: ['The total is fifty dollars', 'Total fifty dollars', 'Fifty dollars total'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークのデパートでセール中の買い物。',
    lines: [
      { speaker: 'npc', target: 'These shirts are two for thirty dollars.', native: 'このシャツ2枚で30ドル。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two for thirty? Is there any discount on three?", native: '2枚で30？3枚なら割引ある？', correct: true, feedback: '完璧 — 数字を理解して交渉。' },
          { target: 'Total?', native: '合計？', correct: false, feedback: 'まず「Two for thirty」を確認。' },
          { target: 'Yasui?', native: '安い？', correct: false, feedback: '英語：「Cheap?」または「Discount?」。' },
        ],
      },
      { speaker: 'npc', target: "Three for forty — that's the deal.", native: '3枚で40。それがセール。' },
      { speaker: 'rwen', rwenLine: '買い物の数字マスター！discount/total が使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '割引 (英語で)', correct: ['Discount', 'discount'] },
      { prompt: '合計 (英語で)', correct: ['Total', 'altogether', 'total'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空の買い物：「Two shirts, ten dollars each. The total is twenty dollars.」のような文を3つ。',
    rwenSignoff: "Total: a great lesson. See you!",
  },

  phase8: {
    scenario: 'NYのデパートのセールで複数商品の価格交渉。',
    rwenRole: 'Tina — 30歳の販売員、フレンドリー。',
    successCriteria: "User uses 'X for Y dollars', asks about 'discount', requests 'total', does basic mental math in English.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
