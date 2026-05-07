import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — 何歳ですか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「How old are you?」は年齢を聞く質問。日本では失礼な質問になる場合もありますが、英語圏ではカジュアルに使われます。",
    culturalNote: "日本では年齢を聞くのは初対面では失礼ですが、英語圏では場面によります。学生同士なら普通、ビジネスでは避けたほうが無難。年齢の答えは「I'm 25」と数字だけ — 「years old」は付けても付けなくてもOK。",
  },

  chunks: [
    { id: 'how_old_are_you', target: 'How old are you?', native: '何歳ですか？ (Nansai desu ka?)', literal: 'How old are you?', emoji: '🎂', phonetic: 'how-OHLD-ar-yoo', audioRef: null },
    { id: 'im_x_years_old', target: "I'm X years old", native: '私はX歳です (Watashi wa X-sai desu)', literal: 'I-am X years old', emoji: '🔢', phonetic: 'aym-EKS-yeerz-ohld', audioRef: null },
    { id: 'twenty_five', target: 'Twenty-five', native: '二十五 (Nijuu-go)', literal: 'Twenty-five', emoji: '2️⃣5️⃣', phonetic: 'TWEN-tee-fyv', audioRef: null },
  ],

  pattern: {
    name: 'Age questions',
    explanation: "「How + 形容詞 + are you?」のパターン：How old, How tall, How heavy など。年齢の答えは「I'm 25 (years old)」。「years old」を省略するのも自然です。",
    examples: [
      { target: 'How old are you?', native: '何歳ですか？' },
      { target: "I'm twenty-five.", native: '25歳です。' },
      { target: "I'm thirty years old.", native: '30歳です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'How old are you?', right: '何歳ですか？' },
      { left: "I'm 25", right: '25歳です' },
      { left: 'Twenty-five', right: '二十五' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '25歳です', correct: ["I'm 25", "I'm twenty-five", "I'm 25 years old"] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'How ____ are you?', options: ['old', 'age', 'much'], correct: 'old' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '日本人として年齢を聞かれた時、自然な答えは？', options: [
      { text: "I'm 30.", correct: true },
      { text: 'Secret!', correct: false },
      { text: 'Why?', correct: false },
    ], explanation: '答えたくない時は「I\'d rather not say」が丁寧。普通は数字で答えます。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['old', 'are', 'How', 'you'], correct: ['How', 'old', 'are', 'you'], translation: '何歳ですか？' },
    { type: 'translate', instruction: '英語で', prompt: '二十五', correct: ['Twenty-five', 'twenty-five', 'twenty five'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの大学のオリエンテーション、新しい友達と雑談。',
    lines: [
      { speaker: 'npc', target: 'How old are you, Yuki?', native: '何歳？ユキ。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm twenty-five. And you?", native: '25歳です。あなたは？', correct: true, feedback: '完璧 — 質問も返しました。' },
          { target: 'Secret.', native: '秘密。', correct: false, feedback: '友達同士なら答えてもOK。失礼ではありません。' },
          { target: 'Twenty-five years.', native: '25年。', correct: false, feedback: '「I\'m twenty-five」のほうが自然です。' },
        ],
      },
      { speaker: 'npc', target: "Same here! We're the same age.", native: '同じ！同い年だね。' },
      { speaker: 'rwen', rwenLine: '年齢の伝え方マスター！数字を覚えるのが鍵です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '何歳ですか？ (英語で)', correct: ['How old are you?', 'how old are you?'] },
      { prompt: '25歳です (英語で)', correct: ["I'm 25", "I'm twenty-five", "I'm 25 years old"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の年齢を英語で「I\'m [age] years old」と3回声に出して。',
    rwenSignoff: "I'm ageless, but always learning. See you!",
  },

  phase8: {
    scenario: '大学のキャンパスで新しい友達と雑談、年齢の話に。',
    rwenRole: 'Tom — 24歳のオーストラリア人学生、カジュアル。',
    successCriteria: "User answers age with 'I'm [number]' (not 'Secret' unless playful), returns the question, uses numbers correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
