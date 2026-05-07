import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — 出身は？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Where are you from?」は出身を聞く定番の質問。日本語の「ご出身は？」と同じです。",
    culturalNote: "海外で日本人だと知られると「Tokyo?」と聞かれることが多い。実は日本には47都道府県、英語圏の人にとっては「Japan」だけで十分通じます。「I'm from Osaka, Japan」のように都市と国を一緒に言うとわかりやすい。",
  },

  chunks: [
    { id: 'where_are_you_from', target: 'Where are you from?', native: '出身はどこですか？ (Shusshin wa doko desu ka?)', literal: 'Where are you from?', emoji: '🌍', phonetic: 'wair-ar-yoo-FROM', audioRef: null },
    { id: 'im_from', target: "I'm from ...", native: '…の出身です (... no shusshin desu)', literal: 'I-am from ...', emoji: '🏠', phonetic: 'aym-FROM', audioRef: null },
    { id: 'i_live_in', target: 'I live in ...', native: '…に住んでいます (... ni sundeimasu)', literal: 'I-live in ...', emoji: '🏘️', phonetic: 'aye-LIV-in', audioRef: null },
  ],

  pattern: {
    name: 'From vs In',
    explanation: "英語では「from」（出身）と「in」（現在の住所）を分けます。日本語の「東京の出身です」と「東京に住んでいます」の違いと同じ。前置詞の使い分けが鍵 — from は出発点、in は今いる場所。",
    examples: [
      { target: "I'm from Osaka.", native: '大阪の出身です。' },
      { target: 'I live in Tokyo.', native: '東京に住んでいます。' },
      { target: "I'm from Japan, but I live in Sydney.", native: '日本の出身ですが、シドニーに住んでいます。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Where are you from?', right: '出身はどこですか？' },
      { left: "I'm from Japan", right: '日本の出身です' },
      { left: 'I live in Tokyo', right: '東京に住んでいます' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '日本の出身です', correct: ["I'm from Japan", "i'm from Japan", 'I am from Japan'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: "I'm ____ Japan.", options: ['from', 'in', 'to'], correct: 'from' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '今住んでいる場所を言うときは？', options: [
      { text: 'I live in Tokyo.', correct: true },
      { text: 'I from Tokyo.', correct: false },
      { text: 'I am Tokyo.', correct: false },
    ], explanation: '住所には「live in」を使います。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['from', 'Japan', "I'm"], correct: ["I'm", 'from', 'Japan'], translation: '日本の出身です' },
    { type: 'translate', instruction: '英語で', prompt: '東京に住んでいます', correct: ['I live in Tokyo', 'i live in Tokyo'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークのカフェ。隣の人が話しかけてきます。',
    lines: [
      { speaker: 'npc', target: "Hi! Where are you from?", native: 'やあ！出身はどこ？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from Osaka, Japan. And you?", native: '大阪、日本の出身です。あなたは？', correct: true, feedback: '完璧 — 都市と国を言って、質問も返しました。' },
          { target: 'Japan country.', native: '日本の国。', correct: false, feedback: '「I\'m from Japan」のほうが自然。' },
          { target: 'I live Japan.', native: '日本住む。', correct: false, feedback: '「in」が必要：「I live in Japan」。' },
        ],
      },
      { speaker: 'npc', target: "Cool! I'm from Boston. First time in New York?", native: 'いいね！僕はボストン出身。ニューヨークは初めて？' },
      { speaker: 'rwen', rwenLine: 'よくできました！「from」（出身）と「in」（住所）の違いも理解できました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '日本の出身です (英語で)', correct: ["I'm from Japan", 'I am from Japan'] },
      { prompt: '東京に住んでいます (英語で)', correct: ['I live in Tokyo', 'i live in Tokyo'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日、自分の出身地を英語で「I\'m from [city], Japan」と声に出して練習してみてください。',
    rwenSignoff: 'Where are you from? Tell the world!',
  },

  phase8: {
    scenario: 'ニューヨーク観光中、タイムズスクエアで道を聞かれた延長で、相手が出身を聞いてきます。',
    rwenRole: 'Maria — 30歳のNY在住、明るくおしゃべり。',
    successCriteria: "User says 'I'm from [city], Japan' or 'I'm from Japan' (not 'I from Japan'), uses 'in' correctly when describing where they live, returns the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
