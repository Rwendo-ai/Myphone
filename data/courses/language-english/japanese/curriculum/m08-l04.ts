import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need" — I want / I need',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Want」（欲しい）と「Need」（必要）の使い分け。",
    culturalNote: "日本語では「コーヒー欲しい」と直接言いにくいですが、英語の「I'd like a coffee」は丁寧な依頼。「I want」はやや子供っぽい響き、ビジネスでは「I'd like / I need」を使います。",
  },

  chunks: [
    { id: 'i_want_coffee', target: 'I want coffee.', native: 'コーヒーが欲しい (Koohii ga hoshii)', literal: 'I want coffee', emoji: '☕', phonetic: 'ay-WONT-KAW-fee', audioRef: null },
    { id: 'i_need_a_break', target: 'I need a break.', native: '休憩が必要 (Kyuukei ga hitsuyou)', literal: 'I need a break', emoji: '😮‍💨', phonetic: 'ay-NEED-uh-BRAYK', audioRef: null },
    { id: 'id_like_tea', target: "I'd like tea, please.", native: 'お茶をお願いします (Ocha wo onegaishimasu)', literal: "I would like tea please", emoji: '🍵', phonetic: 'ayd-LAYK-TEE-PLEEZ', audioRef: null },
  ],

  pattern: {
    name: 'Want / Need / Would like',
    explanation: "Want = 欲しい（直接的）。Need = 必要。I'd like = もっと丁寧な「欲しい」。ビジネス・接客では「I'd like」が無難。",
    examples: [
      { target: 'I want a new phone.', native: '新しい電話が欲しい。' },
      { target: 'I need water.', native: '水が必要。' },
      { target: "I'd like a coffee, please.", native: 'コーヒーをお願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I want', right: '欲しい' },
      { left: 'I need', right: '必要' },
      { left: "I'd like", right: 'お願いしたい' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '休憩が必要', correct: ['I need a break', 'I need a break.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'd ____ tea, please.", options: ['like', 'want', 'need'], correct: 'like' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'カフェで丁寧に注文する時は？', options: [
      { text: "I'd like a coffee, please.", correct: true },
      { text: 'I want coffee.', correct: false },
      { text: 'Coffee!', correct: false },
    ], explanation: '「I\'d like」+ please が大人の英語。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['break', 'a', 'need', 'I'], correct: ['I', 'need', 'a', 'break'], translation: '休憩が必要' },
    { type: 'translate', instruction: '英語で', prompt: 'お茶をお願いします', correct: ["I'd like tea, please", "I'd like tea please", "I'd like some tea, please"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのオフィスで休憩中。',
    lines: [
      { speaker: 'npc', target: "Coffee?", native: 'コーヒー？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like tea, please. I need a break too.", native: 'お茶お願いします。休憩も必要。', correct: true, feedback: '完璧 — 丁寧と必要を使い分け。' },
          { target: "I want tea.", native: 'お茶欲しい。', correct: false, feedback: '「I\'d like」のほうが大人。' },
          { target: 'Tea!', native: 'お茶！', correct: false, feedback: 'もっと丁寧に。' },
        ],
      },
      { speaker: 'npc', target: "Got it. I need one too.", native: '了解。私も必要。' },
      { speaker: 'rwen', rwenLine: 'want/need/I\'d like マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '休憩が必要 (英語で)', correct: ['I need a break', 'I need a break.'] },
      { prompt: 'お茶をお願いします (英語で)', correct: ["I'd like tea, please", "I would like tea, please"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '「I want / I need / I\'d like」を1つずつ使った文を作る。',
    rwenSignoff: 'I\'d like to see you next lesson, please!',
  },

  phase8: {
    scenario: 'ロンドンのオフィスで同僚との休憩タイム。',
    rwenRole: 'Lily — 同僚、フレンドリー。',
    successCriteria: "User uses 'I'd like' for polite requests (not just 'I want'), 'I need' for necessities, distinguishes the registers correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
