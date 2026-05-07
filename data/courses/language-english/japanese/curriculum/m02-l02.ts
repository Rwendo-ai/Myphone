import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — ありがとう',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Thank you」は感謝の基本。アニメで聞く「サンキュー」は実は英語そのまま — カタカナ化されただけです。",
    culturalNote: "日本では深いお辞儀で感謝を表しますが、英語では言葉で示します。「Thank you」は何度言っても多すぎることはなく、ドアを開けてもらった、塩を渡してもらった、小さなことすべてに使う文化です。",
  },

  chunks: [
    { id: 'thank_you', target: 'Thank you', native: 'ありがとう (Arigatou)', literal: 'Thank you', emoji: '🙏', phonetic: 'THANK-yoo', audioRef: null },
    { id: 'youre_welcome', target: "You're welcome", native: 'どういたしまして (Dou itashimashite)', literal: 'You-are welcome', emoji: '🤗', phonetic: 'yor-WEL-kuhm', audioRef: null },
    { id: 'thanks_a_lot', target: 'Thanks a lot', native: '本当にありがとう (Hontou ni arigatou)', literal: 'Thanks a lot', emoji: '🌟', phonetic: 'THANKS-uh-LOT', audioRef: null },
  ],

  pattern: {
    name: 'Thanks + responses',
    explanation: "「Thank you」のカジュアル形が「Thanks」。返答は「You're welcome」が標準。「No problem」「No worries」（オーストラリア英語）も自然。日本語の「いえいえ」と同じ役割です。",
    examples: [
      { target: 'Thank you!', native: 'ありがとう！' },
      { target: "You're welcome.", native: 'どういたしまして。' },
      { target: 'Thanks a lot for your help.', native: '助けてくれて本当にありがとう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Thank you', right: 'ありがとう' },
      { left: "You're welcome", right: 'どういたしまして' },
      { left: 'Thanks a lot', right: '本当にありがとう' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'ありがとう', correct: ['Thank you', 'thank you', 'Thanks', 'thanks'] },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「Thank you」と言われたら？', options: [
      { text: "You're welcome.", correct: true },
      { text: 'Yes, please.', correct: false },
      { text: "I'm fine.", correct: false },
    ], explanation: '感謝には「You\'re welcome」または「No problem」で返します。' },
    { type: 'fill_blank', instruction: '空欄を埋める', sentence: "You're ____.", options: ['welcome', 'fine', 'sorry'], correct: 'welcome' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['lot', 'a', 'Thanks'], correct: ['Thanks', 'a', 'lot'], translation: '本当にありがとう' },
    { type: 'translate', instruction: '英語で', prompt: 'どういたしまして', correct: ["You're welcome", "you're welcome", 'No problem'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの空港でカートを押してくれた人にお礼。',
    lines: [
      { speaker: 'npc', target: "Here you go, mate.", native: 'はい、どうぞ。' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thanks a lot!', native: '本当にありがとう！', correct: true, feedback: '自然 — カジュアルでも温かい。' },
          { target: 'Sorry.', native: 'ごめんなさい。', correct: false, feedback: '謝る場面ではありません — 「Thanks」です。' },
          { target: 'Yes.', native: 'はい。', correct: false, feedback: '感謝には「Thank you」「Thanks」を使いましょう。' },
        ],
      },
      { speaker: 'npc', target: 'No worries!', native: '気にしないで！' },
      { speaker: 'rwen', rwenLine: 'オーストラリア英語のお礼マスター！「No worries」も覚えておきましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'ありがとう (英語で)', correct: ['Thank you', 'Thanks', 'thank you'] },
      { prompt: 'どういたしまして (英語で)', correct: ["You're welcome", "you're welcome", 'No problem'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日、5回「Thank you」または「Thanks」を口に出してください。',
    rwenSignoff: 'Thank you for learning with me!',
  },

  phase8: {
    scenario: 'シドニーのカフェで親切にしてもらう連続シーン。お礼を3回言う練習。',
    rwenRole: 'Sarah — 28歳のオーストラリア人カフェ店員、フレンドリー。',
    successCriteria: "User says 'Thank you' or 'Thanks' multiple times naturally, responds 'You're welcome' or 'No problem' when thanked back, uses 'Thanks a lot' for bigger help.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
