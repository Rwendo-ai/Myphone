import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'At a restaurant — レストランで',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「A table for two」「The menu, please」「The bill, please」 — レストラン英語の必須3つ。",
    culturalNote: "日本では店員さんを呼ぶときに「すみません」と声を上げますが、海外では手を軽く上げるか、目を合わせるのが普通。大声は失礼です。",
  },

  chunks: [
    { id: 'table_for_two', target: 'A table for two', native: '2人用のテーブル (Futari-you no teeburu)', literal: 'A table for two', emoji: '🪑', phonetic: 'a-TAY-bul-fer-TOO', audioRef: null },
    { id: 'menu_please', target: 'The menu, please', native: 'メニューをお願いします (Menyuu wo onegaishimasu)', literal: 'The menu please', emoji: '📋', phonetic: 'thuh-MEN-yoo-PLEEZ', audioRef: null },
    { id: 'the_bill', target: 'The bill, please', native: 'お会計お願いします (Okaikei onegaishimasu)', literal: 'The bill please', emoji: '🧾', phonetic: 'thuh-BILL-PLEEZ', audioRef: null },
  ],

  pattern: {
    name: 'Restaurant phrases',
    explanation: "「A table for + 数」で席を頼む。「The menu, please」「The bill, please」 — 「the」を忘れずに。アメリカでは「the check」、イギリスでは「the bill」。",
    examples: [
      { target: 'A table for two, please.', native: '2人用のテーブルをお願いします。' },
      { target: 'Could we have the menu?', native: 'メニューをいただけますか？' },
      { target: 'The bill, please.', native: 'お会計お願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'A table for two', right: '2人用のテーブル' },
      { left: 'The menu, please', right: 'メニューお願いします' },
      { left: 'The bill, please', right: 'お会計お願いします' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'お会計お願いします', correct: ['The bill, please', 'The check, please', 'Bill, please'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'A ____ for two, please.', options: ['table', 'menu', 'bill'], correct: 'table' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'アメリカで「お会計」を言うと？', options: [
      { text: 'The check, please', correct: true },
      { text: 'The bill, please', correct: true },
      { text: 'Money, please', correct: false },
    ], explanation: 'アメリカ：check、イギリス：bill。両方OK。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['please', 'menu', 'The'], correct: ['The', 'menu', 'please'], translation: 'メニューお願いします' },
    { type: 'translate', instruction: '英語で', prompt: '2人用のテーブル', correct: ['A table for two', 'a table for two'] },
  ],

  rwenDialogue: {
    intro: 'NYのレストランで2人で食事。',
    lines: [
      { speaker: 'npc', target: "Welcome! How many?", native: 'いらっしゃい！何名様？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please. Could we have the menu?", native: '2人用のテーブルお願いします。メニューもらえますか？', correct: true, feedback: '完璧。' },
          { target: 'Two.', native: '2。', correct: false, feedback: '「A table for two, please」が完全。' },
          { target: 'Futari!', native: '2人！', correct: false, feedback: '英語：「Two, please」または「For two」。' },
        ],
      },
      { speaker: 'npc', target: "Right this way.", native: 'こちらへどうぞ。' },
      { speaker: 'rwen', rwenLine: 'レストラン英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '2人用のテーブル (英語で)', correct: ['A table for two', 'a table for two'] },
      { prompt: 'お会計お願いします (英語で)', correct: ['The bill, please', 'The check, please'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'レストランの3フレーズを声に出して練習：table for two → menu, please → bill, please。',
    rwenSignoff: 'Bon appétit! See you next!',
  },

  phase8: {
    scenario: 'NYのレストランで席案内から会計まで。',
    rwenRole: 'Tony — 35歳のサーバー。',
    successCriteria: "User asks 'A table for [number]', requests 'The menu, please', asks for 'The bill/check, please' at end. Uses 'the' correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
