import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — 私は…です',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I am」は自己紹介の中心。日本語の「私は…です」と同じ役割で、すべての文の出発点になります。",
    culturalNote: "日本語では「私は」を省くことが多いですが、英語では主語「I」を必ず言います。「I am」は「I'm」と短縮形で言うのが自然 — フォーマルな書き言葉以外は短縮形が標準。",
  },

  chunks: [
    { id: 'i_am', target: 'I am', native: '私は…です (Watashi wa ... desu)', literal: 'I am', emoji: '🙋', phonetic: 'ay-AM / アイ・アム', audioRef: null },
    { id: 'im_a_student', target: "I'm a student", native: '私は学生です (Watashi wa gakusei desu)', literal: 'I-am a student', emoji: '📚', phonetic: 'aym-uh-STOO-dnt', audioRef: null },
    { id: 'im_from_japan', target: "I'm from Japan", native: '日本の出身です (Nihon no shusshin desu)', literal: 'I-am from Japan', emoji: '🇯🇵', phonetic: 'aym-from-juh-PAN', audioRef: null },
  ],

  pattern: {
    name: 'I am / I\'m + role/origin',
    explanation: "「I am + 名詞」で身分・状態を表します。職業や役割には「a」が必要：「I'm a student」「I'm a teacher」。「from + 国」で出身地。日本語の「〜です」と語順が逆 — 主語＋動詞＋情報。",
    examples: [
      { target: "I'm a student.", native: '私は学生です。' },
      { target: "I'm from Japan.", native: '日本の出身です。' },
      { target: "I'm Yuki.", native: '私はユキです。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm a student", right: '私は学生です' },
      { left: "I'm from Japan", right: '日本の出身です' },
      { left: "I'm Yuki", right: '私はユキです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '私は学生です', correct: ["I'm a student", 'I am a student', "i'm a student"] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____ student.", options: ['a', 'the', 'one'], correct: 'a' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '職業を言う時、必要なものは？', options: [
      { text: '冠詞 a / an', correct: true },
      { text: '何もいらない', correct: false },
      { text: '助詞 は', correct: false },
    ], explanation: '英語では「a teacher」「an engineer」と冠詞が必要です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['Japan', 'from', "I'm"], correct: ["I'm", 'from', 'Japan'], translation: '日本の出身です' },
    { type: 'translate', instruction: '英語で', prompt: '私はユキです', correct: ["I'm Yuki", 'I am Yuki', "i'm Yuki"] },
  ],

  rwenDialogue: {
    intro: 'シドニーの語学学校、初日のクラス。先生に自己紹介を求められました。',
    lines: [
      { speaker: 'npc', target: 'Welcome! Tell us about yourself.', native: 'ようこそ！自己紹介してください。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm Yuki. I'm a student. I'm from Japan.", native: 'こんにちは、私はユキです。学生です。日本の出身です。', correct: true, feedback: '完璧 — 3つの「I\'m」で名前・職業・出身を伝えました。' },
          { target: 'Yuki student Japan.', native: 'ユキ 学生 日本。', correct: false, feedback: '主語と動詞が必要：「I\'m Yuki. I\'m a student.」' },
          { target: 'Watashi wa Yuki desu.', native: '私はユキです。', correct: false, feedback: '日本語ではなく英語で：「I\'m Yuki」。' },
        ],
      },
      { speaker: 'npc', target: "Wonderful! Welcome to Sydney, Yuki.", native: '素晴らしい！シドニーへようこそ、ユキ。' },
      { speaker: 'rwen', rwenLine: '自己紹介の基本マスター！「I\'m」を使えば何でも言えます。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '私は学生です (英語で)', correct: ["I'm a student", 'I am a student'] },
      { prompt: '日本の出身です (英語で)', correct: ["I'm from Japan", 'I am from Japan'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '鏡の前で「I\'m [名前]. I\'m a [職業]. I\'m from Japan.」を3回言う。',
    rwenSignoff: "I'm Rwen. I'm here for you. See you next!",
  },

  phase8: {
    scenario: 'シドニー語学学校の歓迎パーティーで、初対面の同級生に簡単な自己紹介。',
    rwenRole: 'Mia — 22歳のスペイン出身の留学生、フレンドリー。',
    successCriteria: "User uses 'I'm' (contraction, not 'I am'), states 3 facts (name + role + origin), uses 'a' before profession.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
