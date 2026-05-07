import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Tea, coffee, drinks — お茶・コーヒー・飲み物',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Tea with milk」「Black coffee」「A glass of water」 — 飲み物の英語。",
    culturalNote: "日本では「お茶」と言えば緑茶ですが、英語の「tea」は紅茶が標準。緑茶は「green tea」と区別を。イギリスではミルクティー、アメリカではアイスティーが定番。",
  },

  chunks: [
    { id: 'tea_with_milk', target: 'Tea with milk', native: 'ミルクティー (Miruku-tii)', literal: 'Tea with milk', emoji: '🍵', phonetic: 'TEE-with-MILK', audioRef: null },
    { id: 'black_coffee', target: 'Black coffee', native: 'ブラックコーヒー (Burakku-koohii)', literal: 'Black coffee (no milk)', emoji: '☕', phonetic: 'BLAK-KOF-ee', audioRef: null },
    { id: 'glass_of_water', target: 'A glass of water', native: '水一杯 (Mizu ippai)', literal: 'A glass of water', emoji: '🥛', phonetic: 'a-GLAS-of-WAW-ter', audioRef: null },
  ],

  pattern: {
    name: 'Drink units',
    explanation: "飲み物の単位：a cup of tea / coffee（温かい飲み物）、a glass of water / juice（冷たい飲み物）、a bottle of beer。「with milk」「with sugar」「without sugar」で調整。",
    examples: [
      { target: 'A cup of tea, please.', native: 'お茶一杯お願いします。' },
      { target: 'Black coffee, no sugar.', native: 'ブラックコーヒー、砂糖なし。' },
      { target: 'A glass of water, please.', native: '水一杯お願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Tea with milk', right: 'ミルクティー' },
      { left: 'Black coffee', right: 'ブラックコーヒー' },
      { left: 'A glass of water', right: '水一杯' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '水一杯', correct: ['A glass of water', 'a glass of water'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'A ____ of coffee, please.', options: ['cup', 'glass', 'bottle'], correct: 'cup' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '緑茶を英語で頼むには？', options: [
      { text: 'Green tea, please', correct: true },
      { text: 'Tea, please', correct: false },
      { text: 'Ocha kudasai', correct: false },
    ], explanation: '英語の tea は紅茶が標準。緑茶は「green tea」と明示。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['water', 'of', 'glass', 'A'], correct: ['A', 'glass', 'of', 'water'], translation: '水一杯' },
    { type: 'translate', instruction: '英語で', prompt: 'ミルクティー', correct: ['Tea with milk', 'tea with milk', 'Milk tea'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのカフェで朝の注文。',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: '何にしますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A cup of tea with milk and a glass of water, please.", native: 'ミルクティーと水一杯お願いします。', correct: true, feedback: '完璧 — 単位と調整も。' },
          { target: 'Tea water.', native: 'お茶水。', correct: false, feedback: '完全な文で：「a cup of tea」。' },
          { target: 'Ocha mizu.', native: 'お茶水。', correct: false, feedback: '英語：「Tea and water, please」。' },
        ],
      },
      { speaker: 'npc', target: "Coming right up.", native: 'すぐ。' },
      { speaker: 'rwen', rwenLine: '飲み物の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'ミルクティー (英語で)', correct: ['Tea with milk', 'Milk tea'] },
      { prompt: '水一杯 (英語で)', correct: ['A glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'カフェの架空注文を3つ：「A cup of __」「A glass of __」「Without __」を使って。',
    rwenSignoff: 'Cheers — see you next!',
  },

  phase8: {
    scenario: 'ロンドンのカフェで朝の飲み物注文。',
    rwenRole: 'Olivia — バリスタ、25歳。',
    successCriteria: "User uses 'a cup of' for hot drinks, 'a glass of' for cold drinks, specifies 'with milk' or 'no sugar', adds 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
