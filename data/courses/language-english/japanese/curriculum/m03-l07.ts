import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Where I live — 住んでいる場所',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I live in」「I grew up in」で住所と育った場所を伝えます。前置詞の使い分けが鍵です。",
    culturalNote: "日本では「東京の出身です」と一言で済ますことが多いですが、英語では「from」（出身）と「live in」（現住）を分けます。海外在住の日本人にはよく聞かれる質問です。",
  },

  chunks: [
    { id: 'i_live_in_tokyo', target: 'I live in Tokyo', native: '東京に住んでいます (Toukyou ni sundeimasu)', literal: 'I live in Tokyo', emoji: '🏘️', phonetic: 'ay-LIV-in-TOH-kyoh', audioRef: null },
    { id: 'i_grew_up_in', target: 'I grew up in ...', native: '…で育ちました (... de sodachimashita)', literal: 'I grew-up in ...', emoji: '🌱', phonetic: 'ay-GROO-up-in', audioRef: null },
    { id: 'for_ten_years', target: 'For ten years', native: '10年間 (Juu-nenkan)', literal: 'For ten years', emoji: '📅', phonetic: 'for-TEN-yeerz', audioRef: null },
  ],

  pattern: {
    name: 'Past tense: grew up + duration',
    explanation: "「grew up」は「grow up」の過去形 — 不規則動詞。「For + 期間」で何年間かを表現。「I've lived here for 10 years」のように現在完了形も使えます。",
    examples: [
      { target: 'I live in Tokyo.', native: '東京に住んでいます。' },
      { target: 'I grew up in Osaka.', native: '大阪で育ちました。' },
      { target: "I've lived here for ten years.", native: 'ここに10年住んでいます。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I live in Tokyo', right: '東京に住んでいます' },
      { left: 'I grew up in Osaka', right: '大阪で育ちました' },
      { left: 'For ten years', right: '10年間' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '東京に住んでいます', correct: ['I live in Tokyo', 'i live in Tokyo'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I grew ____ in Osaka.', options: ['up', 'on', 'in'], correct: 'up' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「育つ」の過去形は？', options: [
      { text: 'grew up', correct: true },
      { text: 'growed up', correct: false },
      { text: 'grow up', correct: false },
    ], explanation: '不規則動詞：grow → grew。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['years', 'ten', 'For'], correct: ['For', 'ten', 'years'], translation: '10年間' },
    { type: 'translate', instruction: '英語で', prompt: '大阪で育ちました', correct: ['I grew up in Osaka', 'i grew up in Osaka'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの留学生交流会で、自分の住所遍歴を話す機会。',
    lines: [
      { speaker: 'npc', target: 'Where do you live, Yuki?', native: 'どこに住んでいるの、ユキ？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I live in Tokyo, but I grew up in Osaka.', native: '東京に住んでいますが、大阪で育ちました。', correct: true, feedback: '完璧 — 現住所と出身地を区別できました。' },
          { target: 'Tokyo Osaka.', native: '東京大阪。', correct: false, feedback: '完全な文で：「I live in Tokyo」。' },
          { target: 'I am Tokyo.', native: '私は東京です。', correct: false, feedback: '「live in」を使いましょう。' },
        ],
      },
      { speaker: 'npc', target: "Cool. I've never been to Osaka.", native: '面白い。大阪行ったことないな。' },
      { speaker: 'rwen', rwenLine: '住所と出身地を分けて話せました！「grew up」も使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '東京に住んでいます (英語で)', correct: ['I live in Tokyo', 'i live in Tokyo'] },
      { prompt: '大阪で育ちました (英語で)', correct: ['I grew up in Osaka', 'i grew up in Osaka'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '「I live in ___. I grew up in ___. For ___ years.」を自分の場合で言う。',
    rwenSignoff: 'Home is where the heart is. See you next.',
  },

  phase8: {
    scenario: 'ロンドンの国際交流会で人生の遍歴を話す。',
    rwenRole: 'Anna — 28歳のドイツ人留学生、好奇心旺盛。',
    successCriteria: "User uses 'live in' for current home and 'grew up in' for childhood place, uses past tense 'grew' (not 'growed'), gives duration with 'for [years]'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
