import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: 'Plurals — adding -s',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "英語の複数形は「-s」を付けるのが基本。日本語にはない仕組みです。",
    culturalNote: "日本語では「猫が3匹」「猫がたくさん」と数や副詞で複数を表しますが、英語では名詞自体が変化：cat → cats。これが言語の根本的な違いの一つです。",
  },

  chunks: [
    { id: 'cats', target: 'Cat → Cats', native: '猫 → 猫たち (Neko → Nekotachi)', literal: 'Cat → Cats', emoji: '🐱', phonetic: 'kat → kats', audioRef: null },
    { id: 'days', target: 'Day → Days', native: '日 → 日々 (Hi → Hibi)', literal: 'Day → Days', emoji: '📅', phonetic: 'day → days', audioRef: null },
    { id: 'friends', target: 'Friend → Friends', native: '友達 → 友達たち (Tomodachi → Tomodachi-tachi)', literal: 'Friend → Friends', emoji: '👥', phonetic: 'frend → frends', audioRef: null },
  ],

  pattern: {
    name: 'Regular plurals: add -s',
    explanation: "規則変化：(1) 通常は「-s」を付ける (cat → cats) (2) -s/-x/-ch/-sh で終わる単語は「-es」(bus → buses) (3) 子音+y は y を i に変えて -es (baby → babies)。",
    examples: [
      { target: 'One cat → two cats', native: '猫一匹 → 猫二匹' },
      { target: 'One bus → two buses', native: 'バス一台 → バス二台' },
      { target: 'One baby → two babies', native: '赤ちゃん一人 → 赤ちゃん二人' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Cat → Cats', right: '猫 → 猫たち' },
      { left: 'Day → Days', right: '日 → 日々' },
      { left: 'Friend → Friends', right: '友達たち' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '友達二人', correct: ['Two friends', 'two friends'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I have three ____.', options: ['cats', 'cat', 'cates'], correct: 'cats' },
    { type: 'multiple_choice', instruction: '正しい複数形', question: '「bus」の複数形は？', options: [
      { text: 'buses', correct: true },
      { text: 'buss', correct: false },
      { text: 'bus', correct: false },
    ], explanation: '-s で終わる単語は -es を付けて buses。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['friends', 'have', 'two', 'I'], correct: ['I', 'have', 'two', 'friends'], translation: '友達が二人います' },
    { type: 'translate', instruction: '英語で', prompt: '猫が三匹', correct: ['Three cats', 'three cats'] },
  ],

  rwenDialogue: {
    intro: '英会話レッスンで複数形の練習。',
    lines: [
      { speaker: 'npc', target: 'How many friends do you have here, Yuki?', native: 'ここに何人友達がいる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I have five friends.', native: '友達が5人います。', correct: true, feedback: '完璧 — 複数形の -s が付きました。' },
          { target: 'I have five friend.', native: '友達5。', correct: false, feedback: '複数なので「friends」と s を付けて。' },
          { target: 'Five friend exist.', native: '5友達 存在。', correct: false, feedback: '「I have five friends」が自然。' },
        ],
      },
      { speaker: 'npc', target: "Five friends in two months — that's great!", native: '2ヶ月で5人の友達 — 素晴らしい！' },
      { speaker: 'rwen', rwenLine: '複数形マスター！「-s」を忘れずに。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '友達二人 (英語で)', correct: ['Two friends', 'two friends'] },
      { prompt: '猫が三匹 (英語で)', correct: ['Three cats', 'three cats'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '部屋の物の数を「[数] [複数形]」で5つ言う。「two books, three pens」など。',
    rwenSignoff: 'Two ears, two eyes, one mouth. Listen more!',
  },

  phase8: {
    scenario: '英会話レッスンで複数形のドリル。',
    rwenRole: 'Mrs. Brown — 英語講師。',
    successCriteria: "User adds '-s' to plurals correctly, uses '-es' for words ending in s/x/ch/sh, doesn't say 'two friend' (Japanese tendency).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
