import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Daily routine — Morning',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「I wake up」「I take a shower」「I eat breakfast」 — 朝のルーティンを英語で。",
    culturalNote: "日本人の朝はテンポが速い — でも英語ではこれを文として描写できると、自分の生活を語れます。",
  },

  chunks: [
    { id: 'i_wake_up_at_6', target: 'I wake up at 6.', native: '6時に起きます (Roku-ji ni okimasu)', literal: 'I wake up at 6', emoji: '⏰', phonetic: 'ay-WAYK-UP-at-SIX', audioRef: null },
    { id: 'i_take_a_shower', target: 'I take a shower.', native: 'シャワーを浴びます (Shawaa wo abimasu)', literal: 'I take a shower', emoji: '🚿', phonetic: 'ay-TAYK-uh-SHOW-er', audioRef: null },
    { id: 'i_eat_breakfast', target: 'I eat breakfast.', native: '朝食を食べます (Choushoku wo tabemasu)', literal: 'I eat breakfast', emoji: '🍳', phonetic: 'ay-EET-BREK-fust', audioRef: null },
  ],

  pattern: {
    name: 'Daily routine verbs',
    explanation: "現在形で日常を表現：wake up, take a shower, eat breakfast, get dressed, leave home。「at + 時刻」で時間を加える。",
    examples: [
      { target: 'I wake up at 6 A.M.', native: '6時に起きます。' },
      { target: 'I take a shower.', native: 'シャワーを浴びます。' },
      { target: 'I eat breakfast at 7.', native: '7時に朝食を食べます。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I wake up at 6', right: '6時に起きる' },
      { left: 'I take a shower', right: 'シャワーを浴びる' },
      { left: 'I eat breakfast', right: '朝食を食べる' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '6時に起きます', correct: ['I wake up at 6', 'I wake up at six', 'I wake up at 6.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I take a ____.', options: ['shower', 'sleep', 'eat'], correct: 'shower' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「朝食を食べる」を英語で？', options: [
      { text: 'I eat breakfast', correct: true },
      { text: 'I drink breakfast', correct: false },
      { text: 'I make breakfast eat', correct: false },
    ], explanation: 'breakfast は eat（食べる）。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['shower', 'a', 'take', 'I'], correct: ['I', 'take', 'a', 'shower'], translation: 'シャワーを浴びる' },
    { type: 'translate', instruction: '英語で', prompt: '朝食を食べます', correct: ['I eat breakfast', 'I have breakfast', 'I eat breakfast.'] },
  ],

  rwenDialogue: {
    intro: 'ロンドン留学先で、ホストファミリーが朝のリズムを聞いてきます。',
    lines: [
      { speaker: 'npc', target: "What time do you usually wake up?", native: 'いつも何時に起きる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6:30, take a shower, and eat breakfast at 7.", native: '6時半に起きて、シャワーを浴びて、7時に朝食。', correct: true, feedback: '完璧 — 動詞3つを連結。' },
          { target: "Wake up six.", native: '起きる6。', correct: false, feedback: '完全な文で。' },
          { target: "I sleep break.", native: '私 寝る 休憩。', correct: false, feedback: '英語：「I wake up」「I take a break」。' },
        ],
      },
      { speaker: 'npc', target: "Early bird!", native: '早起きね！' },
      { speaker: 'rwen', rwenLine: '朝のルーティンマスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '6時に起きます (英語で)', correct: ['I wake up at 6', 'I wake up at six'] },
      { prompt: 'シャワーを浴びる (英語で)', correct: ['I take a shower', 'Take a shower'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の朝のルーティンを3文の英語で。',
    rwenSignoff: 'Wake up — and learn! See you next.',
  },

  phase8: {
    scenario: 'ロンドンのホストファミリーで朝の生活を説明。',
    rwenRole: 'Helen — ホストマザー。',
    successCriteria: "User uses present tense for routines, connects actions with 'and' or 'then', uses 'at + time' for specific times.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
