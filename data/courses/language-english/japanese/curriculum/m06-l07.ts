import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Months & Seasons — 月と季節',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "1月から12月までと、四季の英語。日付や予定を伝える時の必須語彙。",
    culturalNote: "日本の四季は四つはっきりしていますが、英語圏も同じ Spring / Summer / Autumn (US: Fall) / Winter。「Rainy season」（梅雨）は日本特有 — 英語圏には説明が必要です。",
  },

  chunks: [
    { id: 'first_months', target: 'January, February, March, April', native: '一月、二月、三月、四月 (Ichi-gatsu...)', literal: 'Jan-Apr', emoji: '🗓️', phonetic: 'JAN-yoo-eh-ree, FEB-roo-eh-ree, march, AY-pril', audioRef: null },
    { id: 'rainy_season', target: 'Rainy season', native: '梅雨 (Tsuyu)', literal: 'Rainy season', emoji: '🌧️', phonetic: 'RAY-nee-SEE-zn', audioRef: null },
    { id: 'summer_winter', target: 'Summer / Winter', native: '夏／冬 (Natsu / Fuyu)', literal: 'Summer / Winter', emoji: '☀️❄️', phonetic: 'SUM-er / WIN-ter', audioRef: null },
  ],

  pattern: {
    name: 'Months + in preposition',
    explanation: "月の前は「in」：in January, in July。月名は大文字始まり。季節：Spring（春）、Summer（夏）、Autumn / Fall（秋）、Winter（冬）。",
    examples: [
      { target: 'In January, it snows in Tokyo.', native: '1月、東京は雪が降ります。' },
      { target: "I love summer.", native: '夏が好き。' },
      { target: "Japan has a rainy season in June.", native: '日本は6月に梅雨があります。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'January', right: '一月' },
      { left: 'Summer', right: '夏' },
      { left: 'Winter', right: '冬' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '夏', correct: ['Summer', 'summer'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "____ January, it's cold.", options: ['In', 'On', 'At'], correct: 'In' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '梅雨を英語で説明すると？', options: [
      { text: 'Rainy season', correct: true },
      { text: 'Plum rain', correct: false },
      { text: 'Tsuyu month', correct: false },
    ], explanation: '「Rainy season」が一般的。文化説明には「Japan has a rainy season in June」と。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['summer', 'love', 'I'], correct: ['I', 'love', 'summer'], translation: '夏が好き' },
    { type: 'translate', instruction: '英語で', prompt: '冬', correct: ['Winter', 'winter'] },
  ],

  rwenDialogue: {
    intro: '東京で海外の友達に日本の気候を説明。',
    lines: [
      { speaker: 'npc', target: "When's the best time to visit Japan?", native: '日本に行くベストな時期は？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "In April for cherry blossoms, or autumn for the leaves. Avoid the rainy season in June.", native: '4月の桜か秋の紅葉。6月の梅雨は避けて。', correct: true, feedback: '完璧 — 月、季節、文化を英語で。' },
          { target: 'Sakura April.', native: '桜4月。', correct: false, feedback: '完全な文で：「In April」。' },
          { target: 'June bad rain.', native: '6月雨悪い。', correct: false, feedback: '「rainy season in June」と完全に。' },
        ],
      },
      { speaker: 'npc', target: "Cherry blossoms — that's a dream!", native: '桜 — 夢みたい！' },
      { speaker: 'rwen', rwenLine: '月と季節マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '一月 (英語で)', correct: ['January', 'january'] },
      { prompt: '夏 (英語で)', correct: ['Summer', 'summer'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '12ヶ月を英語で順番に。誕生月を「I was born in ___」で言う。',
    rwenSignoff: "Spring, summer, see you all year!",
  },

  phase8: {
    scenario: '海外の友達に日本の四季と訪日のおすすめ時期を説明。',
    rwenRole: 'Tom — 友達、初訪日予定。',
    successCriteria: "User capitalizes months and uses 'in + month', describes seasons (cherry blossoms, rainy season), gives travel recommendations.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
