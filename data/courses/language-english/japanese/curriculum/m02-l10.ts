import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 2 完成！困った時の英語フレーズを連結して、海外で生き抜く会話力を組み立てます。",
    culturalNote: "海外旅行で本当に必要なのは「完璧な文法」ではなく「困った時に聞き返せる勇気」。Please / Sorry / Could you / I don't understand を組み合わせれば、ほぼ何でも乗り切れます。",
  },

  chunks: [
    { id: 'review_excuse_help', target: 'Excuse me, can you help me?', native: 'すみません、助けてもらえますか？', literal: 'Excuse me, can you help me?', emoji: '🙋', phonetic: 'eks-KYOOZ-mee-KAN-yoo-HELP-mee', audioRef: null },
    { id: 'review_dont_understand', target: "I don't understand. Slowly, please.", native: 'わかりません。ゆっくりお願いします。', literal: 'I do-not understand. Slowly please.', emoji: '🤷', phonetic: 'ay-DOHNT-un-der-STAND', audioRef: null },
    { id: 'review_thank_you_lots', target: 'Thank you so much for your help.', native: '助けてくれて本当にありがとう。', literal: 'Thank you so much for your help', emoji: '🙏', phonetic: 'THANK-yoo-soh-MUCH', audioRef: null },
  ],

  pattern: {
    name: 'Survival flow: attract + ask + clarify + thank',
    explanation: "海外サバイバルの4ステップ：(1) Excuse me で注意を引く (2) Could you help me? で頼む (3) Slowly, please / I don't understand で調整 (4) Thank you so much で締める。日本人の丁寧さがそのまま使える組み立てです。",
    examples: [
      { target: "Excuse me, do you speak English?", native: 'すみません、英語を話しますか？' },
      { target: "I don't understand. Could you repeat, slowly?", native: 'わかりません。ゆっくり繰り返してもらえますか？' },
      { target: 'Thank you so much for your help.', native: '助けてくれて本当にありがとう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '会話の流れを組み合わせ', pairs: [
      { left: 'Excuse me', right: 'すみません（呼びかけ）' },
      { left: "I don't understand", right: 'わかりません' },
      { left: 'Thank you so much', right: '本当にありがとう' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'すみません、助けてもらえますか？', correct: ['Excuse me, can you help me?', "Excuse me, could you help me?", 'Excuse me can you help me?'] },
    { type: 'translate', instruction: '英語で', prompt: 'わかりません。ゆっくりお願いします。', correct: ["I don't understand. Slowly, please.", "I don't understand. Slowly please", "I don't understand, slowly please"] },
    { type: 'build_sentence', instruction: '並べ替え', words: ['help', 'your', 'for', 'much', 'so', 'Thank', 'you'], correct: ['Thank', 'you', 'so', 'much', 'for', 'your', 'help'], translation: '助けてくれて本当にありがとう' },
    { type: 'fill_blank', instruction: '空欄', sentence: "Could you help me, ____?", options: ['please', 'sorry', 'thanks'], correct: 'please' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '初めて声をかける時の正しい順序は？', options: [
      { text: 'Excuse me → Could you help me?', correct: true },
      { text: 'Help! → Sorry', correct: false },
      { text: 'Yes → Thank you', correct: false },
    ], explanation: 'まず Excuse me で注意を引いて、Could you help me? で頼みます。' },
  ],

  rwenDialogue: {
    intro: 'ロンドンの地下鉄で行き先がわからない。駅員に英語で全部聞きます。',
    lines: [
      { speaker: 'user', userChoices: [
        { target: 'Excuse me, do you speak English? Could you help me?', native: 'すみません、英語を話しますか？助けてもらえますか？', correct: true, feedback: '完璧な始まり！' },
        { target: 'Hello.', native: 'こんにちは。', correct: false, feedback: '助けが必要なら「Excuse me, could you help me?」のほうが直接的。' },
      ]},
      { speaker: 'npc', target: 'Yes, of course. What do you need?', native: 'はい、もちろん。何が必要ですか？' },
      { speaker: 'user', userChoices: [
        { target: "I'm lost. I don't understand the map. Slowly, please.", native: '迷っています。地図がわかりません。ゆっくりお願いします。', correct: true, feedback: '状況説明＋ペース調整、完璧。' },
        { target: 'Map.', native: '地図。', correct: false, feedback: '一語より完全な文で。' },
      ]},
      { speaker: 'npc', target: "No problem. Take this line, get off at King's Cross.", native: '大丈夫。この線に乗って、キングスクロスで降りて。' },
      { speaker: 'user', userChoices: [
        { target: 'Thank you so much for your help!', native: '助けてくれて本当にありがとう！', correct: true, feedback: 'お礼で締めくくり、完璧なサバイバル会話！' },
      ]},
      { speaker: 'rwen', rwenLine: 'Module 2 完了！海外で困っても自力で乗り切れる英語力がつきました。Module 3 で会いましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'すみません、助けてもらえますか？ (英語で)', correct: ['Excuse me, can you help me?', 'Excuse me, could you help me?'] },
      { prompt: '助けてくれて本当にありがとう (英語で)', correct: ['Thank you so much for your help', 'Thank you so much for your help.'] },
    ],
  },

  mission: {
    title: 'サバイバル会話 — 今日のミッション',
    task: '声に出して全部の流れを練習：「Excuse me → Could you help me? → I don\'t understand. Slowly, please → Thank you so much.」',
    rwenSignoff: 'Module 2 クリア！どこへ行っても大丈夫です。',
  },

  phase8: {
    scenario: 'ロンドンのヒースロー空港で乗り継ぎ便のゲートがわからない。スタッフに全部英語で聞いて解決する。',
    rwenRole: 'Sarah — 30歳の空港案内係、丁寧で忍耐強い。',
    successCriteria: "User runs the full survival flow: 'Excuse me' → 'Could you help me?' → 'I don't understand, slowly please' when needed → 'Thank you so much'. Uses Module 2 chunks naturally without panic.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
