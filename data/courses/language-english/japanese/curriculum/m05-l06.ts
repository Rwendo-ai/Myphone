import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — A polite topic',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Mother-in-law」「Husband」「Wife」 — 結婚で増えた家族の英語。",
    culturalNote: "日本語で「義母」「義父」と言うのと同じく、英語では「-in-law」を付けます。文字通り「法律上の」関係。Husband / Wife はストレートに使えます。",
  },

  chunks: [
    { id: 'mother_in_law', target: 'Mother-in-law', native: '義母 (Gibo)', literal: 'Mother-in-law', emoji: '👩‍🦳', phonetic: 'MUH-thuh-in-law', audioRef: null },
    { id: 'father_in_law', target: 'Father-in-law', native: '義父 (Gifu)', literal: 'Father-in-law', emoji: '👨‍🦳', phonetic: 'FAH-thuh-in-law', audioRef: null },
    { id: 'spouse', target: 'My husband / My wife', native: '夫／妻 (Otto / Tsuma)', literal: 'My husband / My wife', emoji: '💍', phonetic: 'mahy HUZ-bund / mahy WAYF', audioRef: null },
  ],

  pattern: {
    name: '-in-law family',
    explanation: "結婚で増える家族：mother-in-law（義母）、father-in-law（義父）、brother-in-law（義兄／義弟）、sister-in-law（義姉／義妹）。配偶者：husband / wife。",
    examples: [
      { target: 'My mother-in-law is kind.', native: '義母は優しいです。' },
      { target: 'My husband is a teacher.', native: '夫は教師です。' },
      { target: 'My wife is from Osaka.', native: '妻は大阪出身です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Mother-in-law', right: '義母' },
      { left: 'Father-in-law', right: '義父' },
      { left: 'My husband', right: '夫' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '夫', correct: ['My husband', 'my husband', 'Husband'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'My mother-____-law is kind.', options: ['in', 'on', 'of'], correct: 'in' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「妻」を英語で？', options: [
      { text: 'My wife', correct: true },
      { text: 'My woman', correct: false },
      { text: 'My tsuma', correct: false },
    ], explanation: '配偶者の女性は「wife」、男性は「husband」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['teacher', 'a', 'is', 'husband', 'My'], correct: ['My', 'husband', 'is', 'a', 'teacher'], translation: '夫は教師です' },
    { type: 'translate', instruction: '英語で', prompt: '義母は優しい', correct: ['My mother-in-law is kind', 'My mother-in-law is kind.'] },
  ],

  rwenDialogue: {
    intro: '東京の結婚式の二次会で、海外から来た友達と話す機会。',
    lines: [
      { speaker: 'npc', target: 'Are you married, Yuki?', native: '結婚してる、ユキ？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, my husband is a teacher. My mother-in-law lives nearby.', native: 'はい、夫は教師。義母は近くに住んでいます。', correct: true, feedback: '完璧 — 配偶者と義家族の英語ができました。' },
          { target: 'Married yes.', native: '結婚はい。', correct: false, feedback: '完全な文で：「Yes, I\'m married」。' },
          { target: 'Otto teacher.', native: '夫教師。', correct: false, feedback: '英語：「My husband is a teacher」。' },
        ],
      },
      { speaker: 'npc', target: "Sounds like a close family.", native: '仲のいい家族みたいね。' },
      { speaker: 'rwen', rwenLine: '義家族・配偶者の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '夫 (英語で)', correct: ['My husband', 'Husband'] },
      { prompt: '義母 (英語で)', correct: ['Mother-in-law', 'My mother-in-law'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '結婚していれば配偶者を英語で紹介。「My husband/wife is __」',
    rwenSignoff: 'Family bonds across cultures. See you!',
  },

  phase8: {
    scenario: '結婚式の二次会で家族について雑談。',
    rwenRole: 'Sarah — 友人、社交的。',
    successCriteria: "User uses 'husband/wife' for spouse, '-in-law' suffix for in-laws (with hyphens), describes 1-2 facts.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
