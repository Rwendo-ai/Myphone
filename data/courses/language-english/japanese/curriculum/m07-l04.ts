import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Ordering food — 注文',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I'd like」「Could I have」「Without onions」 — 食べ物を注文する英語。",
    culturalNote: "日本では「〜をお願いします」と一発でOKですが、英語では「I'd like」「Could I have」と仮定法で柔らかく頼むのが上品。",
  },

  chunks: [
    { id: 'id_like', target: "I'd like...", native: '…をお願いします (... wo onegaishimasu)', literal: 'I would like ...', emoji: '👉', phonetic: 'ayd-LAYK', audioRef: null },
    { id: 'could_i_have', target: 'Could I have...', native: '…をいただけますか (... wo itadakemasu ka)', literal: 'Could I have ...', emoji: '🤲', phonetic: 'kud-ay-HAV', audioRef: null },
    { id: 'without_onions', target: 'Without onions', native: 'たまねぎ抜きで (Tamanegi nuki de)', literal: 'Without onions', emoji: '🚫', phonetic: 'with-OWT-UN-yuns', audioRef: null },
  ],

  pattern: {
    name: 'Polite ordering + modifications',
    explanation: "「I'd like + 料理名」が基本。「Could I have + 料理名?」はさらに丁寧。アレルギーや好みは「without + 食材」で除外、「with extra + 食材」で追加。",
    examples: [
      { target: "I'd like the chicken.", native: 'チキンをお願いします。' },
      { target: 'Could I have a salad?', native: 'サラダをいただけますか？' },
      { target: 'Without onions, please.', native: 'たまねぎ抜きでお願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'd like", right: '…をお願いします' },
      { left: 'Could I have', right: '…をいただけますか' },
      { left: 'Without onions', right: 'たまねぎ抜き' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'たまねぎ抜きで', correct: ['Without onions', 'without onions'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'd ____ the chicken.", options: ['like', 'love', 'want'], correct: 'like' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '一番丁寧な注文の仕方は？', options: [
      { text: 'Could I have the chicken, please?', correct: true },
      { text: 'Chicken!', correct: false },
      { text: 'Give me chicken.', correct: false },
    ], explanation: '「Could I have」+ please が最も丁寧。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['onions', 'without', 'please'], correct: ['without', 'onions', 'please'], translation: 'たまねぎ抜きでお願いします' },
    { type: 'translate', instruction: '英語で', prompt: 'チキンをお願いします', correct: ["I'd like the chicken", "I'd like chicken", 'I would like the chicken'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのレストランで本格的な注文。',
    lines: [
      { speaker: 'npc', target: 'Are you ready to order?', native: '注文の準備できた？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'd like the chicken curry, without onions, please.", native: 'はい、チキンカレーをたまねぎ抜きでお願いします。', correct: true, feedback: '完璧 — 丁寧＋アレンジ。' },
          { target: 'Chicken no onion.', native: 'チキン たまねぎなし。', correct: false, feedback: '完全な文で：「I\'d like the chicken without onions」。' },
          { target: 'Curry kudasai.', native: 'カレーください。', correct: false, feedback: '英語：「I\'d like the curry, please」。' },
        ],
      },
      { speaker: 'npc', target: "Got it. Anything to drink?", native: '了解。飲み物は？' },
      { speaker: 'rwen', rwenLine: '注文の英語マスター！「I\'d like」と「without」が使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'チキンをお願いします (英語で)', correct: ["I'd like the chicken", "I'd like chicken"] },
      { prompt: 'たまねぎ抜きで (英語で)', correct: ['Without onions', 'without onions'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空のレストランで注文：「I\'d like __, without __, please.」を3パターン。',
    rwenSignoff: "I'd like to see you next time. Without delay!",
  },

  phase8: {
    scenario: 'ロンドンのレストランで本格的な食事注文（カスタマイズ込み）。',
    rwenRole: 'Mark — サーバー、丁寧。',
    successCriteria: "User uses 'I'd like' or 'Could I have' (polite forms), specifies modifications with 'without' or 'with extra', adds 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
