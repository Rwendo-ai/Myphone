import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — いくらですか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「How much?」は買い物の必須表現。値段を聞き、高いか安いか言える練習をします。",
    culturalNote: "日本では値段交渉はほぼなく、表示価格で買うのが普通。海外の市場（マーケット）では「It's expensive」と言うと値引き交渉のサインに。逆にデパートでは値引きしないので注意。",
  },

  chunks: [
    { id: 'how_much', target: 'How much?', native: 'いくらですか？ (Ikura desu ka?)', literal: 'How much?', emoji: '💰', phonetic: 'HOW-much', audioRef: null },
    { id: 'its_expensive', target: "It's expensive", native: '高いです (Takai desu)', literal: 'It-is expensive', emoji: '💸', phonetic: 'its-eks-PEN-siv', audioRef: null },
    { id: 'its_cheap', target: "It's cheap", native: '安いです (Yasui desu)', literal: 'It-is cheap', emoji: '🪙', phonetic: 'its-CHEEP', audioRef: null },
  ],

  pattern: {
    name: "It's + adjective",
    explanation: "「It's」は「It is」の短縮形。値段の感想は「It's [形容詞]」で表現：expensive（高い）、cheap（安い）、reasonable（妥当）。日本語の「〜です」と同じ役割。",
    examples: [
      { target: 'How much is it?', native: 'いくらですか？' },
      { target: "It's expensive!", native: '高いです！' },
      { target: "It's cheap.", native: '安いです。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'How much?', right: 'いくらですか？' },
      { left: "It's expensive", right: '高いです' },
      { left: "It's cheap", right: '安いです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'いくらですか？', correct: ['How much?', 'How much is it?', 'how much?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "It's ____.", options: ['expensive', 'expensives', 'expensiving'], correct: 'expensive' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '値札を見て驚いた時の自然な反応は？', options: [
      { text: "Wow, it's expensive!", correct: true },
      { text: 'Money no!', correct: false },
      { text: 'Big yen.', correct: false },
    ], explanation: '「expensive」が標準。「Wow」を付けると感情が出ます。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['expensive', "It's"], correct: ["It's", 'expensive'], translation: '高いです' },
    { type: 'translate', instruction: '英語で', prompt: '安いです', correct: ["It's cheap", "it's cheap", 'It is cheap'] },
  ],

  rwenDialogue: {
    intro: 'バンコクのナイトマーケットでお土産を見ています。',
    lines: [
      { speaker: 'npc', target: 'This T-shirt is very nice. Look!', native: 'このTシャツ、いいよ。見て！' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'How much is it?', native: 'いくらですか？', correct: true, feedback: '完璧 — 値段交渉の第一歩。' },
          { target: 'Money?', native: 'お金？', correct: false, feedback: '「How much?」が通じます。' },
          { target: 'Yen please.', native: '円お願いします。', correct: false, feedback: 'タイならバーツ。「How much is it?」で値段を聞きましょう。' },
        ],
      },
      { speaker: 'npc', target: 'Five hundred baht. Special price for you.', native: '500バーツ。特別価格だよ。' },
      { speaker: 'user', userChoices: [
        { target: "It's expensive! Three hundred?", native: '高い！300バーツ？', correct: true, feedback: 'バッチリ — 市場では値引き交渉が普通です。' },
        { target: 'Yes please.', native: 'はい、お願いします。', correct: false, feedback: 'マーケットでは交渉できます — 「It\'s expensive」と言ってみましょう。' },
      ]},
      { speaker: 'rwen', rwenLine: '値段交渉マスター！マーケットでは「expensive」が魔法の言葉です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'いくらですか？ (英語で)', correct: ['How much?', 'How much is it?'] },
      { prompt: '高いです (英語で)', correct: ["It's expensive", 'It is expensive'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '家の中の3つの物について「How much is it?」「It\'s expensive / cheap」を声に出して練習。',
    rwenSignoff: 'No price for friendship. See you next.',
  },

  phase8: {
    scenario: 'バンコクのチャトゥチャック市場でお土産の値段交渉に挑戦。',
    rwenRole: 'Noi — 35歳の市場の店主、英語OK、交渉好き。',
    successCriteria: "User asks 'How much?' clearly, uses 'It's expensive' to start negotiation, counter-offers a lower number, doesn't accept the first price out of politeness.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
