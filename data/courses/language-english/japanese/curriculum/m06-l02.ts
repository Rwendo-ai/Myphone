import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Numbers 11-100 — Eleven to One Hundred',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "11から100まで。価格や年齢、住所で必須の数字。",
    culturalNote: "英語の数字は10の位＋1の位の組み合わせ：twenty-one, thirty-five など。日本語の「二十一」と同じ仕組み。",
  },

  chunks: [
    { id: 'eleven_nineteen', target: 'Eleven, twelve, thirteen, fourteen, fifteen', native: '十一、十二、十三、十四、十五', literal: '11-15', emoji: '1️⃣2️⃣', phonetic: 'ee-LEH-vn, twelv, THUR-teen, FOR-teen, FIF-teen', audioRef: null },
    { id: 'tens', target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety', native: '二十、三十、四十…九十', literal: 'Tens', emoji: '🔢', phonetic: 'TWEN-tee, THUR-tee, FOR-tee, FIF-tee', audioRef: null },
    { id: 'one_hundred', target: 'One hundred', native: '百 (Hyaku)', literal: 'One hundred', emoji: '💯', phonetic: 'wun-HUN-dred', audioRef: null },
  ],

  pattern: {
    name: 'Compound numbers',
    explanation: "21 = twenty-one（ハイフン付き）。発音注意：thirteen vs thirty（teen の発音長め）、fifteen vs fifty（音の違い）。",
    examples: [
      { target: 'Twenty-five', native: '二十五' },
      { target: 'Thirty-seven', native: '三十七' },
      { target: 'One hundred', native: '百' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Twenty', right: '二十' },
      { left: 'Fifty', right: '五十' },
      { left: 'One hundred', right: '百' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '二十五', correct: ['Twenty-five', 'twenty-five', 'twenty five'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Forty, ____, sixty.', options: ['fifty', 'fivety', 'fivty'], correct: 'fifty' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '15 と 50 の違い：15 は？', options: [
      { text: 'Fifteen', correct: true },
      { text: 'Fifty', correct: false },
      { text: 'Five-ten', correct: false },
    ], explanation: '15 = fifteen（ティーン強め）、50 = fifty。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['five', 'twenty'], correct: ['twenty', 'five'], translation: '二十五（ハイフン付きで twenty-five）' },
    { type: 'translate', instruction: '英語で', prompt: '百', correct: ['One hundred', 'a hundred', 'one hundred'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークのお店で価格確認。',
    lines: [
      { speaker: 'npc', target: "It's twenty-five dollars.", native: '25ドル。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Twenty-five? Did you say 25 or 50?", native: '25？25と50どっち？', correct: true, feedback: '完璧 — 聞き分けが難しい時は確認。' },
          { target: 'OK.', native: 'オッケー。', correct: false, feedback: '価格は確認するのが安全。' },
          { target: 'Cheap.', native: '安い。', correct: false, feedback: 'まず数字を確認。' },
        ],
      },
      { speaker: 'npc', target: "Twenty-five. Two-five.", native: '25。2-5。' },
      { speaker: 'rwen', rwenLine: '数字の聞き分けマスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '二十五 (英語で)', correct: ['Twenty-five', 'twenty-five'] },
      { prompt: '百 (英語で)', correct: ['One hundred', 'a hundred'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の年齢、家の番地、電話番号下4桁を英語で言う。',
    rwenSignoff: 'Twenty-five lessons to go!',
  },

  phase8: {
    scenario: 'NYで価格を確認するシーン。',
    rwenRole: 'Mike — 35歳の店員。',
    successCriteria: "User distinguishes -teen vs -ty (15 vs 50), uses hyphen in compound numbers (twenty-five), confirms when unsure.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
