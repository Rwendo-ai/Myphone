import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Describing yourself — 自己描写',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I'm friendly」「I'm shy」で性格を伝えます。形容詞の使い方を覚えましょう。",
    culturalNote: "日本では謙遜が美徳ですが、英語圏では自分の良いところを言うのは普通。「I'm friendly」と素直に言えるのが大事です。",
  },

  chunks: [
    { id: 'im_friendly', target: "I'm friendly", native: 'フレンドリーです (Furendorii desu)', literal: 'I-am friendly', emoji: '😊', phonetic: 'aym-FREND-lee', audioRef: null },
    { id: 'im_shy_sometimes', target: "I'm shy sometimes", native: '時々シャイです (Tokidoki shai desu)', literal: 'I-am shy sometimes', emoji: '🙈', phonetic: 'aym-SHAI-sum-taymz', audioRef: null },
    { id: 'i_love_learning', target: 'I love learning', native: '学ぶのが大好きです (Manabu no ga daisuki desu)', literal: 'I love learning', emoji: '📖', phonetic: 'ay-LUV-LUR-ning', audioRef: null },
  ],

  pattern: {
    name: "I'm + adjective",
    explanation: "性格を表す形容詞：friendly（親しみやすい）、shy（シャイ）、quiet（静か）、outgoing（社交的）、curious（好奇心旺盛）。「sometimes」を付けると柔らかくなります。",
    examples: [
      { target: "I'm friendly.", native: 'フレンドリーです。' },
      { target: "I'm a bit shy at first.", native: '最初は少しシャイです。' },
      { target: 'I love learning new things.', native: '新しいことを学ぶのが好きです。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm friendly", right: 'フレンドリーです' },
      { left: "I'm shy sometimes", right: '時々シャイです' },
      { left: 'I love learning', right: '学ぶのが大好きです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'フレンドリーです', correct: ["I'm friendly", 'I am friendly'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm shy ____.", options: ['sometimes', 'sometime', 'some time'], correct: 'sometimes' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「学ぶことが好き」を英語で？', options: [
      { text: 'I love learning.', correct: true },
      { text: 'I love learn.', correct: false },
      { text: 'I love to learning.', correct: false },
    ], explanation: 'love + 動詞ing が自然。「to learn」も正解ですが「learning」のほうが好まれます。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['friendly', "I'm"], correct: ["I'm", 'friendly'], translation: 'フレンドリーです' },
    { type: 'translate', instruction: '英語で', prompt: '時々シャイです', correct: ["I'm shy sometimes", 'I am shy sometimes'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの新しいルームメイトに自己紹介。',
    lines: [
      { speaker: 'npc', target: 'How would you describe yourself?', native: '自分をどう表現する？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm friendly, but a bit shy at first. I love learning.", native: 'フレンドリーですが、最初は少しシャイです。学ぶのが好きです。', correct: true, feedback: '完璧 — バランスの取れた自己描写。' },
          { target: 'No personality.', native: '個性なし。', correct: false, feedback: '謙遜しすぎ — 一つでも良い特徴を伝えて。' },
          { target: 'I friendly.', native: '私フレンドリー。', correct: false, feedback: '動詞「am」が必要：「I\'m friendly」。' },
        ],
      },
      { speaker: 'npc', target: "Same — I'm a bit quiet too. We'll get along.", native: '私も少し静か。仲良くなれそう。' },
      { speaker: 'rwen', rwenLine: '性格描写マスター！「a bit」を付けると柔らかくなります。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'フレンドリーです (英語で)', correct: ["I'm friendly", 'I am friendly'] },
      { prompt: '学ぶのが大好きです (英語で)', correct: ['I love learning', 'I love to learn'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の性格を3つ「I\'m ___」で言ってみてください。',
    rwenSignoff: "I'm always here. See you next.",
  },

  phase8: {
    scenario: 'ロンドンのシェアハウス面接で、自分の性格を話す機会。',
    rwenRole: 'Mark — 30歳のシェアハウスのオーナー、慎重に人を見る。',
    successCriteria: "User uses 'I'm + adjective' (am, not just 'I friendly'), gives 2-3 personality traits, doesn't over-deprecate or over-promise.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
