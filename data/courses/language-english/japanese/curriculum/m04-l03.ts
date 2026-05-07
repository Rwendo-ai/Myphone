import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: 'No article — Plural & abstract',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "冠詞を使わない場合もあります — 複数形の総称や抽象名詞には冠詞なし。",
    culturalNote: "「Books are good」「Love is important」のように、一般論や抽象概念には冠詞なし。日本語にはそもそも冠詞がないので、この場面は感覚的に近いかもしれません。",
  },

  chunks: [
    { id: 'books', target: 'Books', native: '本（一般論） (Hon - ippanron)', literal: 'Books (general)', emoji: '📚', phonetic: 'BUKS', audioRef: null },
    { id: 'love', target: 'Love', native: '愛（抽象） (Ai - chuushou)', literal: 'Love (abstract)', emoji: '❤️', phonetic: 'LUHV', audioRef: null },
    { id: 'children', target: 'Children', native: '子供たち（一般論） (Kodomotachi - ippanron)', literal: 'Children (general)', emoji: '👶', phonetic: 'CHIL-dren', audioRef: null },
  ],

  pattern: {
    name: 'No article: plurals + abstracts',
    explanation: "冠詞なしの場合：(1) 複数形の総称（Books are nice = 本というものは良い）(2) 抽象名詞（Love, peace, music）(3) 食べ物・飲み物の総称（I like coffee）。「The books」だと特定の本、「Books」だと本一般。",
    examples: [
      { target: 'Books are great.', native: '本は素晴らしい。' },
      { target: 'Love is important.', native: '愛は大切。' },
      { target: 'Children love games.', native: '子供はゲームが好き。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Books', right: '本（一般論）' },
      { left: 'Love', right: '愛' },
      { left: 'Children', right: '子供たち' },
    ]},
    { type: 'translate', instruction: '英語で — 一般論', prompt: '本は素晴らしい', correct: ['Books are great', 'books are great'] },
    { type: 'fill_blank', instruction: '空欄（冠詞なしも含む）', sentence: '____ is important.', options: ['Love', 'A love', 'The love'], correct: 'Love' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '一般論「コーヒーが好き」は？', options: [
      { text: 'I like coffee.', correct: true },
      { text: 'I like a coffee.', correct: false },
      { text: 'I like the coffee.', correct: false },
    ], explanation: '飲み物の総称には冠詞なし。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['important', 'is', 'Love'], correct: ['Love', 'is', 'important'], translation: '愛は大切' },
    { type: 'translate', instruction: '英語で', prompt: '子供はゲームが好き', correct: ['Children love games', 'children love games'] },
  ],

  rwenDialogue: {
    intro: '英会話のディスカッションクラスで一般論を語る練習。',
    lines: [
      { speaker: 'npc', target: "What's important to you, Yuki?", native: 'ユキ、大切なものは？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Family is important. Books are great. Love matters.', native: '家族は大切。本は素晴らしい。愛は重要。', correct: true, feedback: '完璧 — 抽象名詞・複数形どちらも冠詞なし。' },
          { target: 'A family important. The books great.', native: '家族大切。本素晴らしい。', correct: false, feedback: '一般論には冠詞なし — 「Family is important」。' },
          { target: 'I like the family.', native: '家族が好き。', correct: false, feedback: '一般論には the も a も不要。' },
        ],
      },
      { speaker: 'npc', target: "Beautifully put.", native: '美しい言葉だね。' },
      { speaker: 'rwen', rwenLine: '一般論の冠詞なしマスター！抽象名詞には a/the なし。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '本は素晴らしい (英語で)', correct: ['Books are great', 'Books are good'] },
      { prompt: '愛は大切 (英語で)', correct: ['Love is important', 'love is important'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '一般論を3つ「[名詞] is/are [形容詞]」で英語に。Family, Music, Booksなど。',
    rwenSignoff: 'Learning is endless. See you next.',
  },

  phase8: {
    scenario: '英会話のディスカッションクラスで人生観について話す。',
    rwenRole: 'Mrs. Brown — 英語講師。',
    successCriteria: "User omits articles for general/abstract nouns (Love, Family, Books), uses correct singular/plural agreement, doesn't say 'the love' for general love.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
