import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — お母さんとお父さん',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Mother」「Father」「My parents」 — 家族について話す基本語彙です。",
    culturalNote: "日本語では他人の親を「お父さん／お母さん」、自分の親を「父／母」と分けますが、英語では「my mother / my father」または親しみを込めて「mum / dad」（イギリス）「mom / dad」（アメリカ）。",
  },

  chunks: [
    { id: 'mother', target: 'Mother', native: '母 / お母さん (Haha / Okaasan)', literal: 'Mother', emoji: '👩', phonetic: 'MUH-thuh', audioRef: null },
    { id: 'father', target: 'Father', native: '父 / お父さん (Chichi / Otousan)', literal: 'Father', emoji: '👨', phonetic: 'FAH-thuh', audioRef: null },
    { id: 'my_parents', target: 'My parents', native: '私の両親 (Watashi no ryoushin)', literal: 'My parents', emoji: '👨‍👩‍👧', phonetic: 'mahy PAIR-ents', audioRef: null },
  ],

  pattern: {
    name: 'Family possessives',
    explanation: "「My + 家族」で自分の家族を表します。formal: mother/father、casual: mum/dad（UK）, mom/dad（US）。複数形「parents」は両親、「siblings」は兄弟姉妹。",
    examples: [
      { target: 'My mother is a teacher.', native: '母は教師です。' },
      { target: 'My father lives in Osaka.', native: '父は大阪に住んでいます。' },
      { target: 'My parents are healthy.', native: '両親は元気です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Mother', right: '母' },
      { left: 'Father', right: '父' },
      { left: 'My parents', right: '私の両親' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '私の母', correct: ['My mother', 'my mother', 'My mum', 'My mom'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'My ____ are healthy.', options: ['parents', 'parent', 'family'], correct: 'parents' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「お父さん」のカジュアル英語（アメリカ）は？', options: [
      { text: 'Dad', correct: true },
      { text: 'Sir', correct: false },
      { text: 'Otousan', correct: false },
    ], explanation: 'アメリカ：dad。イギリス：dad。フォーマル：father。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['teacher', 'is', 'a', 'mother', 'My'], correct: ['My', 'mother', 'is', 'a', 'teacher'], translation: '母は教師です' },
    { type: 'translate', instruction: '英語で', prompt: '父は大阪に住んでいます', correct: ['My father lives in Osaka', 'My father lives in Osaka.'] },
  ],

  rwenDialogue: {
    intro: 'シドニーのホームステイ先で、家族写真を見ながら自己紹介。',
    lines: [
      { speaker: 'npc', target: 'Is this your family?', native: 'これあなたの家族？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, this is my mother and father. My parents live in Osaka.", native: 'はい、これが母と父。両親は大阪に住んでいます。', correct: true, feedback: '完璧 — 家族紹介ができました。' },
          { target: 'Okaasan and Otousan.', native: 'お母さんとお父さん。', correct: false, feedback: '英語では「my mother」「my father」と言いましょう。' },
          { target: 'Family.', native: '家族。', correct: false, feedback: '完全な文で：「This is my family」。' },
        ],
      },
      { speaker: 'npc', target: "Lovely family!", native: '素敵な家族！' },
      { speaker: 'rwen', rwenLine: '家族紹介マスター！「my parents」は両親まとめてです。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '私の母 (英語で)', correct: ['My mother', 'My mum', 'My mom'] },
      { prompt: '両親 (英語で)', correct: ['My parents', 'parents'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の家族を英語で紹介：「This is my mother. She is a [職業].」',
    rwenSignoff: 'Family first. See you next time.',
  },

  phase8: {
    scenario: 'シドニーのホームステイ先で、ホストファミリーに自分の家族写真を見せながら紹介。',
    rwenRole: 'Helen — 50歳のホストマザー、温かい。',
    successCriteria: "User uses 'my mother/father/parents' (with possessive 'my'), describes 1-2 facts about each (job, location), uses 'this is' to introduce.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
