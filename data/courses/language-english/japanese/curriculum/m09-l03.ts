import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'How far? — どのくらいの距離？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「How far?」「Five minutes' walk」「Just around the corner」 — 距離の英語。",
    culturalNote: "英語圏では距離を「徒歩何分」で表すのが一般的。「Five minutes」（5分）「Ten minutes' walk」（徒歩10分）が定番。",
  },

  chunks: [
    { id: 'how_far', target: 'How far?', native: 'どのくらい？ (Dono kurai?)', literal: 'How far?', emoji: '📏', phonetic: 'HOW-FAR', audioRef: null },
    { id: 'five_minutes_walk', target: "Five minutes' walk", native: '徒歩5分 (Toho go-fun)', literal: "Five minutes walk", emoji: '🚶', phonetic: 'fyv-MIN-its-WAWK', audioRef: null },
    { id: 'around_the_corner', target: 'Just around the corner', native: 'すぐそこ (Sugu soko)', literal: 'Just around the corner', emoji: '↩️', phonetic: 'JUST-uh-ROWND-thuh-COR-ner', audioRef: null },
  ],

  pattern: {
    name: 'Distance expressions',
    explanation: "距離の聞き方：「How far is it?」。答え方：「Five minutes' walk」「Ten minutes by car」「Just around the corner」（すぐそこ）。",
    examples: [
      { target: 'How far is the station?', native: '駅までどのくらい？' },
      { target: "It's five minutes' walk.", native: '徒歩5分です。' },
      { target: "It's just around the corner.", native: 'すぐそこ。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'How far?', right: 'どのくらい？' },
      { left: "Five minutes' walk", right: '徒歩5分' },
      { left: 'Just around the corner', right: 'すぐそこ' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '徒歩5分', correct: ["Five minutes' walk", 'Five minutes walk', "5 minutes' walk"] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'How ____ is the station?', options: ['far', 'long', 'much'], correct: 'far' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「すぐそこ」を英語で？', options: [
      { text: 'Just around the corner', correct: true },
      { text: 'Right here', correct: false },
      { text: 'Sugu soko', correct: false },
    ], explanation: '「Just around the corner」が口語的。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['far', 'How', 'is', 'it'], correct: ['How', 'far', 'is', 'it'], translation: 'どのくらいの距離？' },
    { type: 'translate', instruction: '英語で', prompt: 'すぐそこ', correct: ['Just around the corner', "It's just around the corner"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンで地下鉄駅までの距離を聞きます。',
    lines: [
      { speaker: 'npc', target: 'Need help?', native: '助けがいる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How far is the Tube station?", native: '地下鉄駅までどのくらい？', correct: true, feedback: '完璧。' },
          { target: 'Station far?', native: '駅遠い？', correct: false, feedback: '完全な質問で：「How far is...?」。' },
          { target: 'Doko?', native: 'どこ？', correct: false, feedback: '英語：「How far?」。' },
        ],
      },
      { speaker: 'npc', target: "Just five minutes' walk — straight ahead.", native: '徒歩5分 — 真っ直ぐ。' },
      { speaker: 'rwen', rwenLine: '距離の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'どのくらい？ (英語で)', correct: ['How far?', 'How far is it?'] },
      { prompt: '徒歩5分 (英語で)', correct: ["Five minutes' walk", 'Five minutes walk'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '家から3つの場所までの距離を英語で：「The __ is __ minutes\' walk.」',
    rwenSignoff: "Just a click away. See you!",
  },

  phase8: {
    scenario: 'ロンドンで複数の場所までの距離を聞く。',
    rwenRole: 'Local — 親切な現地人。',
    successCriteria: "User asks 'How far is...?', understands 'X minutes' walk' / 'just around the corner', uses time-based distance estimates.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
