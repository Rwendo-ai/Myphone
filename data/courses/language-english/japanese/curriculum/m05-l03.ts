import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Sons & Daughters — 子供たち',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Son」「Daughter」「Children」 — 自分の子供について話す英語。",
    culturalNote: "日本語では「うちの息子」「うちの娘」と所有を出すのが普通。英語も同じく「my son」「my daughter」と言います。複数のときは「my kids」がカジュアル。",
  },

  chunks: [
    { id: 'son', target: 'Son', native: '息子 (Musuko)', literal: 'Son', emoji: '👦', phonetic: 'SUN', audioRef: null },
    { id: 'daughter', target: 'Daughter', native: '娘 (Musume)', literal: 'Daughter', emoji: '👧', phonetic: 'DAW-tuh', audioRef: null },
    { id: 'children', target: 'Children', native: '子供たち (Kodomotachi)', literal: 'Children', emoji: '🧒', phonetic: 'CHIL-druhn', audioRef: null },
  ],

  pattern: {
    name: 'My + family (children)',
    explanation: "「My son」「My daughter」「My children」「My kids」（カジュアル）。複数の子供は children（不規則複数形）。「How many children?」と聞かれたら数で答えます。",
    examples: [
      { target: 'My son is five.', native: '息子は5歳です。' },
      { target: 'My daughter studies music.', native: '娘は音楽を勉強しています。' },
      { target: 'I have three children.', native: '子供が3人います。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Son', right: '息子' },
      { left: 'Daughter', right: '娘' },
      { left: 'Children', right: '子供たち' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '私の娘', correct: ['My daughter', 'my daughter'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I have two ____.', options: ['children', 'childs', 'child'], correct: 'children' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'カジュアルに「子供」と言うなら？', options: [
      { text: 'My kids', correct: true },
      { text: 'My babies', correct: false },
      { text: 'My littles', correct: false },
    ], explanation: '「kids」は子供のカジュアル英語。書類では「children」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['five', 'is', 'son', 'My'], correct: ['My', 'son', 'is', 'five'], translation: '息子は5歳です' },
    { type: 'translate', instruction: '英語で', prompt: '子供が3人います', correct: ['I have three children', 'I have three kids', 'I have three children.'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨーク出張中、ホテルバーで他の出張者と家族の話。',
    lines: [
      { speaker: 'npc', target: 'Got any kids?', native: '子供いる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I have a son and a daughter. My son is five and my daughter is three.', native: 'はい、息子と娘がいます。息子は5歳、娘は3歳。', correct: true, feedback: '完璧 — 数と年齢も加えました。' },
          { target: 'Yes children.', native: 'はい子供。', correct: false, feedback: '完全な文で：「I have two children」。' },
          { target: 'My musuko five.', native: '息子5。', correct: false, feedback: '英語で：「My son is five」。' },
        ],
      },
      { speaker: 'npc', target: "Cute age! I have three teenagers.", native: '可愛い年齢！うちはティーン3人。' },
      { speaker: 'rwen', rwenLine: '子供の話マスター！「kids」のカジュアルさも覚えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '私の息子 (英語で)', correct: ['My son', 'my son'] },
      { prompt: '子供が3人います (英語で)', correct: ['I have three children', 'I have three kids'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '子供がいれば英語で紹介。いなければ「I don\'t have children」を練習。',
    rwenSignoff: 'Family is my favorite topic. See you!',
  },

  phase8: {
    scenario: 'NYのホテルバーで他の出張者と家族の話。',
    rwenRole: 'Tom — 40歳のシカゴ人、3人の親。',
    successCriteria: "User uses 'son/daughter/children/kids' correctly with 'my', states ages with 'is + number', returns the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
