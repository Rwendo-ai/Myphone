import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Married? Children? — 結婚していますか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "結婚や子供について英語で話せると、家族の話題にもついていけます。",
    culturalNote: "日本ではプライベートな質問として控えがちですが、英語圏ではカジュアルに話されます。「I'm single」「I'm married」「I have two kids」とシンプルに答えればOK。深掘りしたくなければ短く返すだけで大丈夫。",
  },

  chunks: [
    { id: 'are_you_married', target: 'Are you married?', native: '結婚していますか？ (Kekkon shite imasu ka?)', literal: 'Are you married?', emoji: '💍', phonetic: 'ar-yoo-MA-reed', audioRef: null },
    { id: 'i_have_two_children', target: 'I have two children', native: '子供が2人います (Kodomo ga futari imasu)', literal: 'I have two children', emoji: '👨‍👩‍👧‍👦', phonetic: 'ay-HAV-too-CHIL-dren', audioRef: null },
    { id: 'im_single', target: "I'm single", native: '独身です (Dokushin desu)', literal: 'I-am single', emoji: '🧍', phonetic: 'aym-SING-gul', audioRef: null },
  ],

  pattern: {
    name: 'Are you ...? + I have',
    explanation: "状態を聞く質問は「Are you + 形容詞?」（married, single）。所有を言う時は「I have + 名詞」。日本語の「〜います」と違い、英語では「I have」（持っている）と表現します。",
    examples: [
      { target: 'Are you married?', native: '結婚していますか？' },
      { target: "I'm married, with two kids.", native: '結婚していて、子供が2人います。' },
      { target: "I'm single.", native: '独身です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Are you married?', right: '結婚していますか？' },
      { left: 'I have two children', right: '子供が2人います' },
      { left: "I'm single", right: '独身です' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '独身です', correct: ["I'm single", 'I am single'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I ____ two children.', options: ['have', 'am', 'do'], correct: 'have' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '子供がいない場合は？', options: [
      { text: "I don't have children.", correct: true },
      { text: 'I no children.', correct: false },
      { text: 'Children no.', correct: false },
    ], explanation: '否定は「I don\'t have」。「I no children」は文法的に間違い。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['married', 'you', 'Are'], correct: ['Are', 'you', 'married'], translation: '結婚していますか？' },
    { type: 'translate', instruction: '英語で', prompt: '子供が2人います', correct: ['I have two children', 'I have two kids'] },
  ],

  rwenDialogue: {
    intro: 'シドニーのカフェで、隣の家族連れと自然と話が始まりました。',
    lines: [
      { speaker: 'npc', target: 'Are you married, Yuki?', native: '結婚しているの、ユキ？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm married. I have two children.", native: 'はい、結婚しています。子供が2人います。', correct: true, feedback: '完璧 — シンプルにまとめました。' },
          { target: 'Private question.', native: 'プライベートな質問。', correct: false, feedback: '英語圏ではよくある質問。短く答えてOK。' },
          { target: 'Yes, two children I have.', native: 'はい、2人子供います。', correct: false, feedback: '語順は「I have two children」。' },
        ],
      },
      { speaker: 'npc', target: "Lovely! How old are they?", native: '素敵！何歳？' },
      { speaker: 'rwen', rwenLine: '家族の話題マスター！シンプルが英語の基本です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '結婚していますか？ (英語で)', correct: ['Are you married?', 'are you married?'] },
      { prompt: '子供が2人います (英語で)', correct: ['I have two children', 'I have two kids'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の家族構成を英語で言ってみてください。「I\'m married/single. I have [N] children/no children.」',
    rwenSignoff: "Family is everything. See you next time.",
  },

  phase8: {
    scenario: 'シドニーのカフェで初対面の親と話す機会。家族について雑談。',
    rwenRole: 'Sarah — 38歳の母親、フレンドリー。',
    successCriteria: "User answers 'I'm married/single' clearly, uses 'I have' for children, returns the question without over-sharing or hiding.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
