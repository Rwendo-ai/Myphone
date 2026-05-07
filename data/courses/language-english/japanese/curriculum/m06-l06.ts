import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Days of the week — 曜日',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "曜日の英語は最初の文字を大文字に。Monday から Sunday まで。",
    culturalNote: "日本では月曜日が週の始まりですが、英語のカレンダーは Sunday 始まりが多い（特にアメリカ）。曜日は必ず大文字で書きます。",
  },

  chunks: [
    { id: 'weekdays', target: 'Monday, Tuesday, Wednesday, Thursday, Friday', native: '月、火、水、木、金 (Getsu, ka, sui, moku, kin)', literal: 'Weekdays', emoji: '📅', phonetic: 'MUN-day, TYOOZ-day, WENZ-day, THURZ-day, FRY-day', audioRef: null },
    { id: 'weekend', target: 'Saturday, Sunday', native: '土、日 (Do, nichi)', literal: 'Weekend', emoji: '🛌', phonetic: 'SAT-er-day, SUN-day', audioRef: null },
    { id: 'today_tomorrow', target: 'Today, tomorrow, yesterday', native: '今日、明日、昨日 (Kyou, ashita, kinou)', literal: 'Today, tomorrow, yesterday', emoji: '⏳', phonetic: 'too-DAY, too-MOR-oh, YES-ter-day', audioRef: null },
  ],

  pattern: {
    name: 'Days + on preposition',
    explanation: "曜日の前は「on」：on Monday, on Friday。「today」「tomorrow」「yesterday」には前置詞不要。「this week」「next week」「last week」も覚えておきましょう。",
    examples: [
      { target: "I'll see you on Monday.", native: '月曜に会いましょう。' },
      { target: 'Today is Wednesday.', native: '今日は水曜日。' },
      { target: 'Tomorrow is Friday.', native: '明日は金曜日。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Monday', right: '月曜日' },
      { left: 'Friday', right: '金曜日' },
      { left: 'Sunday', right: '日曜日' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '今日', correct: ['Today', 'today'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'll see you ____ Monday.", options: ['on', 'in', 'at'], correct: 'on' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '英語で曜日の書き方は？', options: [
      { text: 'Monday (大文字)', correct: true },
      { text: 'monday (小文字)', correct: false },
      { text: 'MONDAY (全大文字)', correct: false },
    ], explanation: '曜日は最初の文字を大文字に。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['Friday', 'is', 'tomorrow'], correct: ['tomorrow', 'is', 'Friday'], translation: '明日は金曜日' },
    { type: 'translate', instruction: '英語で', prompt: '昨日', correct: ['Yesterday', 'yesterday'] },
  ],

  rwenDialogue: {
    intro: '東京のオフィスで、海外チームと会議の予定。',
    lines: [
      { speaker: 'npc', target: 'When can we meet?', native: 'いつ会える？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How about Tuesday or Wednesday?", native: '火曜か水曜はどう？', correct: true, feedback: '完璧 — 大文字で曜日。' },
          { target: 'tuesday or wednesday?', native: '火曜か水曜？', correct: false, feedback: '曜日は大文字始まり。' },
          { target: 'Kayoubi suiyoubi.', native: '火曜日水曜日。', correct: false, feedback: '英語：「Tuesday or Wednesday」。' },
        ],
      },
      { speaker: 'npc', target: "Wednesday at 3 P.M. works.", native: '水曜午後3時で。' },
      { speaker: 'rwen', rwenLine: '曜日の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '月曜日 (英語で)', correct: ['Monday', 'monday'] },
      { prompt: '今日 (英語で)', correct: ['Today', 'today'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '7曜日全部を順番に英語で言う。',
    rwenSignoff: "See you on Monday — or any day!",
  },

  phase8: {
    scenario: '東京のオフィスで会議のスケジュール調整。',
    rwenRole: 'Susan — 35歳のNYのプロマネ。',
    successCriteria: "User capitalizes day names (Monday, not monday), uses 'on' before days (on Monday), uses today/tomorrow/yesterday correctly without preposition.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
