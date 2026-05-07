import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Articles in real talk — Conversation capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 4 完成！冠詞・複数形・指示語を使った自然な会話を組み立てます。",
    culturalNote: "文法は会話の中で自然に流れることが大事。完璧でなくても、a/the と複数形を意識するだけで英語がぐっと自然になります。",
  },

  chunks: [
    { id: 'morning_flow', target: 'I woke up. I had a cup of coffee and an apple.', native: '起きました。コーヒーを一杯とリンゴを一つ食べました。', literal: 'I woke up. I had a cup of coffee and an apple.', emoji: '☕', phonetic: 'I wohk up. I had uh kup uv KAW-fee and an AP-ul', audioRef: null },
    { id: 'work_flow', target: 'I went to work. The meeting took three hours. I have many emails.', native: '仕事に行きました。会議は3時間。メールがたくさんあります。', literal: 'I went to work. The meeting took 3 hours. I have many emails.', emoji: '💼', phonetic: 'I went tu wurk', audioRef: null },
    { id: 'evening_flow', target: 'I came home. These children are mine. I love my family.', native: '家に帰りました。この子たちは私の子。家族が大好き。', literal: 'I came home. These children are mine. I love my family.', emoji: '🏠', phonetic: 'I kaym hohm', audioRef: null },
  ],

  pattern: {
    name: 'Articles in narrative flow',
    explanation: "ストーリーの中で：a coffee（初登場）→ the coffee（再登場）。複数：children（不規則）。指示語：these children。一般論：family（冠詞なし）。実際の会話で全部混ざります。",
    examples: [
      { target: 'I had a coffee. The coffee was hot.', native: 'コーヒーを飲みました。そのコーヒーは熱かった。' },
      { target: 'These children are happy.', native: 'この子たちは幸せ。' },
      { target: 'Family is everything.', native: '家族はすべて。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'A cup of coffee', right: 'コーヒー一杯' },
      { left: 'The meeting', right: 'その会議' },
      { left: 'These children', right: 'この子供たち' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'コーヒーを一杯とリンゴを一つ食べました', correct: [
      'I had a cup of coffee and an apple',
      'I had a cup of coffee and an apple.',
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'この子たちは私の子', correct: ['These children are mine', 'These children are mine.'] },
    { type: 'build_sentence', instruction: '並べ替え', words: ['home', 'I', 'came'], correct: ['I', 'came', 'home'], translation: '家に帰りました' },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I have ____ emails.', options: ['many', 'much', 'a'], correct: 'many' },
    { type: 'multiple_choice', instruction: '正しい使い方', question: '「一杯のコーヒー」を英語で？', options: [
      { text: 'A cup of coffee', correct: true },
      { text: 'The cup of coffee', correct: false },
      { text: 'Cup of coffee', correct: false },
    ], explanation: '初めて言うコーヒーは「a cup of coffee」。' },
  ],

  rwenDialogue: {
    intro: '東京の英語ジャーナリングセッションで、今日の出来事を英語で話します。',
    lines: [
      { speaker: 'npc', target: 'Tell me about your day.', native: '今日のことを話して。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I woke up early. I had a cup of coffee and an apple. The coffee was good. Then I went to work — the meeting took three hours.", native: '早起きしました。コーヒーとリンゴ。そのコーヒー良かった。仕事に行って、会議は3時間。', correct: true, feedback: '完璧 — a/an → the、much/many、複数形、全部使えました。' },
          { target: 'Wake up. Coffee. Apple. Work. Meeting. Long.', native: '起きる。コーヒー。リンゴ。仕事。会議。長い。', correct: false, feedback: '完全な文で、冠詞も付けて — 「I woke up」「I had a coffee」。' },
          { target: 'I had the coffee and the apple.', native: 'コーヒーとリンゴを食べた。', correct: false, feedback: '初登場なら a/an が自然 — 「a coffee and an apple」。' },
        ],
      },
      { speaker: 'npc', target: "Your English is flowing now!", native: '英語が自然になってきましたね！' },
      { speaker: 'rwen', rwenLine: 'Module 4 完了！文法の土台ができました。Module 5 で家族の話題を学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'コーヒーを一杯とリンゴを一つ食べました (英語で)', correct: ['I had a cup of coffee and an apple', 'I had a cup of coffee and an apple.'] },
      { prompt: 'メールがたくさんあります (英語で)', correct: ['I have many emails', 'I have many emails.', 'I have a lot of emails'] },
    ],
  },

  mission: {
    title: 'Module 4 ミッション — 一日の英語',
    task: '今日の出来事を3文の英語で書く：a/an、the、複数形を最低1つずつ使う。',
    rwenSignoff: 'Module 4 完了！文法の基礎が固まりました。',
  },

  phase8: {
    scenario: '英語ジャーナリングセッションで一日を振り返る。a/an/the/複数形を自然に使う。',
    rwenRole: 'Mrs. Brown — 英語講師、聞き上手。',
    successCriteria: "User narrates a day using 'a/an' for first mentions, 'the' for re-mentions, correct plurals, 'many' for countable nouns. Doesn't drop articles entirely.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
