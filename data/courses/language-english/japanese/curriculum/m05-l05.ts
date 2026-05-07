import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Aunts & Uncles — おばさん・おじさん',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Aunt」「Uncle」「Cousin」 — 親戚の英語。",
    culturalNote: "日本語では「父方の伯父／母方の叔父」と区別しますが、英語の uncle/aunt は両方カバー。区別したい時は「my mother's brother」など説明的に言います。",
  },

  chunks: [
    { id: 'aunt', target: 'Aunt', native: 'おばさん (Obasan)', literal: 'Aunt', emoji: '👩', phonetic: 'AHNT (or ANT)', audioRef: null },
    { id: 'uncle', target: 'Uncle', native: 'おじさん (Ojisan)', literal: 'Uncle', emoji: '👨', phonetic: 'UN-kuhl', audioRef: null },
    { id: 'cousin', target: 'Cousin', native: 'いとこ (Itoko)', literal: 'Cousin', emoji: '🧑', phonetic: 'KUH-zin', audioRef: null },
  ],

  pattern: {
    name: 'Extended family',
    explanation: "Uncle / Aunt は親の兄弟姉妹両方。Cousin はいとこ全員（性別関係なし）。区別したい時：「my father's brother」「my older cousin」など。",
    examples: [
      { target: 'My uncle is a doctor.', native: 'おじは医者です。' },
      { target: 'My aunt lives in Tokyo.', native: 'おばは東京に住んでいます。' },
      { target: 'I have many cousins.', native: 'いとこがたくさんいます。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Aunt', right: 'おばさん' },
      { left: 'Uncle', right: 'おじさん' },
      { left: 'Cousin', right: 'いとこ' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'いとこ', correct: ['Cousin', 'cousin', 'My cousin'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'My ____ is a doctor.', options: ['uncle', 'aunt', 'cousins'], correct: 'uncle' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「いとこたち」を英語で？', options: [
      { text: 'Cousins', correct: true },
      { text: 'Cousines', correct: false },
      { text: 'Cousin\'s', correct: false },
    ], explanation: '通常複数形：cousins。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['cousins', 'have', 'many', 'I'], correct: ['I', 'have', 'many', 'cousins'], translation: 'いとこがたくさんいます' },
    { type: 'translate', instruction: '英語で', prompt: 'おばは東京に住んでいます', correct: ['My aunt lives in Tokyo', 'My aunt lives in Tokyo.'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンで親戚の話に。',
    lines: [
      { speaker: 'npc', target: 'Big family?', native: '大家族？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes! I have many cousins. My uncle has five children.', native: 'はい！いとこがたくさん。おじには5人子供がいます。', correct: true, feedback: '完璧 — 拡張家族の話ができました。' },
          { target: 'Many family.', native: 'たくさん家族。', correct: false, feedback: '完全な文で：「I have a big family」。' },
          { target: 'Itoko many.', native: 'いとこたくさん。', correct: false, feedback: '英語で：「I have many cousins」。' },
        ],
      },
      { speaker: 'npc', target: "Lovely.", native: '素敵。' },
      { speaker: 'rwen', rwenLine: '親戚の英語マスター！uncle/aunt/cousin で広い家族を表現。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'おじ (英語で)', correct: ['Uncle', 'My uncle'] },
      { prompt: 'いとこがたくさんいます (英語で)', correct: ['I have many cousins', 'I have many cousins.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の親戚を3人英語で紹介。「My uncle / aunt / cousin is...」',
    rwenSignoff: "Family is wide. See you next.",
  },

  phase8: {
    scenario: 'ロンドンで家族の話。',
    rwenRole: 'Anna — 同僚、好奇心旺盛。',
    successCriteria: "User uses 'uncle/aunt/cousin' correctly (gender-neutral cousin), uses 'many cousins' for plural, can describe extended family briefly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
