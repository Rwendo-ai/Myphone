import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Much」と「Many」の使い分け — 数えられるか、数えられないかで決まります。",
    culturalNote: "日本語では「水がたくさん」「友達がたくさん」と「たくさん」一語で済みますが、英語では water (uncountable) → much、friends (countable) → many と分けます。",
  },

  chunks: [
    { id: 'much_water', target: 'Much water', native: 'たくさんの水 (Takusan no mizu)', literal: 'Much water (uncountable)', emoji: '🌊', phonetic: 'much-WAW-ter', audioRef: null },
    { id: 'many_friends', target: 'Many friends', native: 'たくさんの友達 (Takusan no tomodachi)', literal: 'Many friends (countable)', emoji: '👥', phonetic: 'MEN-ee FRENDS', audioRef: null },
    { id: 'how_much_how_many', target: 'How much? / How many?', native: 'いくら？ ／ 何個？ (Ikura? / Nanko?)', literal: 'How much / How many', emoji: '🤔', phonetic: 'how-much / how-MEN-ee', audioRef: null },
  ],

  pattern: {
    name: 'Much (uncountable) / Many (countable)',
    explanation: "数えられない名詞 (water, money, time, music) → much。数えられる名詞 (friends, books, days) → many。「a lot of」はどちらにも使える便利な表現。",
    examples: [
      { target: 'How much money?', native: 'いくらのお金？' },
      { target: 'How many friends?', native: '何人の友達？' },
      { target: 'A lot of time / a lot of friends.', native: 'たくさんの時間／たくさんの友達。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Much water', right: 'たくさんの水' },
      { left: 'Many friends', right: 'たくさんの友達' },
      { left: 'How much?', right: 'いくら？' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'たくさんの友達', correct: ['Many friends', 'many friends', 'A lot of friends'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'How ____ books do you have?', options: ['many', 'much', 'any'], correct: 'many' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「水がたくさん」を英語で？', options: [
      { text: 'Much water', correct: true },
      { text: 'Many water', correct: false },
      { text: 'Many waters', correct: false },
    ], explanation: 'water は数えられない → much。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['friends', 'many', 'have', 'I'], correct: ['I', 'have', 'many', 'friends'], translation: '友達がたくさんいます' },
    { type: 'translate', instruction: '英語で', prompt: '何個の本？', correct: ['How many books?', 'how many books?'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの英会話クラスで much/many のドリル。',
    lines: [
      { speaker: 'npc', target: 'How ___ time do you have? How ___ friends are coming?', native: '時間はいくら？ 友達は何人来る？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'How much time, how many friends.', native: '時間はいくら、友達は何人。', correct: true, feedback: '完璧 — time は much、friends は many。' },
          { target: 'How many time, how much friends.', native: '時間は何人、友達はいくら。', correct: false, feedback: '逆です — time は数えられない（much）、friends は数えられる（many）。' },
          { target: 'How a lot of.', native: 'たくさん。', correct: false, feedback: '質問では「How much/many」を使います。' },
        ],
      },
      { speaker: 'npc', target: "You've got it.", native: '掴みましたね。' },
      { speaker: 'rwen', rwenLine: 'much/many マスター！数えられるかが鍵。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'たくさんの友達 (英語で)', correct: ['Many friends', 'A lot of friends'] },
      { prompt: '時間はいくら？ (英語で)', correct: ['How much time?', 'how much time?'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '5つの名詞を分類：much か many か。time, books, water, friends, music。',
    rwenSignoff: 'Many lessons, much progress!',
  },

  phase8: {
    scenario: '英会話クラスで much/many のクイズに答える。',
    rwenRole: 'Mrs. Brown — 英語講師、文法に厳しい。',
    successCriteria: "User uses 'much' for uncountable nouns (water, money, time) and 'many' for countable nouns (friends, books, days), can use 'a lot of' for both.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
