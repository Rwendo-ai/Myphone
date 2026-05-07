import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Money — How much is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「How much does it cost?」「It costs twenty dollars」 — 価格の英語。",
    culturalNote: "アメリカは dollars、イギリスは pounds、オーストラリアも dollars、ヨーロッパは euros。日本円は yen — 「I have 1000 yen」と単位を英語式に。",
  },

  chunks: [
    { id: 'how_much_cost', target: 'How much does it cost?', native: 'いくらですか？ (Ikura desu ka?)', literal: 'How much does it cost?', emoji: '💰', phonetic: 'how-MUCH-duz-it-kost', audioRef: null },
    { id: 'it_costs', target: 'It costs twenty dollars', native: '20ドルです (Ni-juu doru desu)', literal: 'It costs twenty dollars', emoji: '💵', phonetic: 'it-KOSTS-TWEN-tee-DOL-arz', audioRef: null },
    { id: 'expensive_cheap', target: "It's expensive / It's cheap", native: '高い／安い (Takai / Yasui)', literal: "It is expensive / cheap", emoji: '💸', phonetic: "its-eks-PEN-siv / its-CHEEP", audioRef: null },
  ],

  pattern: {
    name: 'Cost + currency',
    explanation: "「It costs + 数字 + 通貨」。通貨は複数形：dollars, pounds, yen（yen は単複同形）。「How much does X cost?」と「How much is X?」両方OK。",
    examples: [
      { target: 'How much does this cost?', native: 'これはいくら？' },
      { target: 'It costs twenty pounds.', native: '20ポンドです。' },
      { target: "It's expensive!", native: '高い！' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'How much does it cost?', right: 'いくら？' },
      { left: 'Twenty dollars', right: '20ドル' },
      { left: "It's expensive", right: '高い' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '20ドルです', correct: ['It costs twenty dollars', 'Twenty dollars', "It's twenty dollars"] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'It ____ twenty dollars.', options: ['costs', 'cost', 'costing'], correct: 'costs' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '日本円を英語で言うときの単位は？', options: [
      { text: 'yen (単複同形)', correct: true },
      { text: 'yens', correct: false },
      { text: 'en', correct: false },
    ], explanation: '「1000 yen」「2000 yen」 — 単複同形です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['dollars', 'twenty', 'costs', 'It'], correct: ['It', 'costs', 'twenty', 'dollars'], translation: '20ドルです' },
    { type: 'translate', instruction: '英語で', prompt: '安い', correct: ["It's cheap", 'It is cheap', "It's cheap."] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのお土産屋で価格の確認。',
    lines: [
      { speaker: 'npc', target: 'How much would you like to spend?', native: 'いくらの予算？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'How much does this scarf cost?', native: 'このスカーフはいくら？', correct: true, feedback: '完璧 — 完全な質問。' },
          { target: 'Money?', native: 'お金？', correct: false, feedback: '「How much does it cost?」と。' },
          { target: 'Ikura?', native: 'いくら？', correct: false, feedback: '英語：「How much?」。' },
        ],
      },
      { speaker: 'npc', target: "It's twenty pounds.", native: '20ポンド。' },
      { speaker: 'rwen', rwenLine: '価格の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'いくらですか？ (英語で)', correct: ['How much does it cost?', 'How much is it?'] },
      { prompt: '20ドルです (英語で)', correct: ['It costs twenty dollars', 'Twenty dollars'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '部屋の物3つに価格を設定して英語で言う：「This costs ___ yen」',
    rwenSignoff: "Priceless lesson — see you next!",
  },

  phase8: {
    scenario: 'ロンドンのマーケットで複数の商品の価格を聞く。',
    rwenRole: 'Liz — 35歳の店主。',
    successCriteria: "User asks 'How much does it cost?' or 'How much is it?', understands prices in pounds/dollars, comments 'It's expensive/cheap' appropriately.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
