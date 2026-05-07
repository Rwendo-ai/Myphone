import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — …はどこですか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Where is the bathroom?」は海外で最も使う質問の一つ。場所を聞く「Where」を覚えましょう。",
    culturalNote: "日本語の「〜はどこですか？」は前置詞なしで成立しますが、英語は「Where is the bathroom?」のように動詞「is」が必要。語順は「Where + is + 名詞？」で固定です。",
  },

  chunks: [
    { id: 'where_is_the_bathroom', target: 'Where is the bathroom?', native: 'トイレはどこですか？ (Toire wa doko desu ka?)', literal: 'Where is the bathroom?', emoji: '🚻', phonetic: 'WHAIR-iz-thuh-BATH-room', audioRef: null },
    { id: 'where_is_the_exit', target: 'Where is the exit?', native: '出口はどこですか？ (Deguchi wa doko desu ka?)', literal: 'Where is the exit?', emoji: '🚪', phonetic: 'WHAIR-iz-thee-EK-sit', audioRef: null },
    { id: 'over_there', target: 'Over there', native: 'あちらです (Achira desu)', literal: 'Over there', emoji: '👉', phonetic: 'OH-ver-THAIR', audioRef: null },
  ],

  pattern: {
    name: 'Where is + the + noun',
    explanation: "「Where is the [場所]?」が定番。「the」を忘れると不自然 — 英語では特定の場所には必ず「the」を付けます。アメリカでは「bathroom」、イギリスでは「toilet」、フォーマルには「restroom」。",
    examples: [
      { target: 'Where is the bathroom?', native: 'トイレはどこですか？' },
      { target: 'Where is the exit?', native: '出口はどこですか？' },
      { target: "It's over there.", native: 'あちらにあります。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Where is the bathroom?', right: 'トイレはどこですか？' },
      { left: 'Where is the exit?', right: '出口はどこですか？' },
      { left: 'Over there', right: 'あちらです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'トイレはどこですか？', correct: ['Where is the bathroom?', 'Where is the toilet?', 'where is the bathroom?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Where ____ the exit?', options: ['is', 'are', 'do'], correct: 'is' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'アメリカで「トイレ」を聞く一番自然な言葉は？', options: [
      { text: 'Bathroom', correct: true },
      { text: 'Water closet', correct: false },
      { text: 'WC', correct: false },
    ], explanation: 'アメリカでは「bathroom」、イギリスでは「toilet」が自然。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['exit', 'is', 'the', 'Where'], correct: ['Where', 'is', 'the', 'exit'], translation: '出口はどこですか？' },
    { type: 'translate', instruction: '英語で', prompt: 'あちらです', correct: ['Over there', 'over there', "It's over there"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのデパートで急にトイレが必要になりました。',
    lines: [
      { speaker: 'npc', target: 'Hello, can I help you?', native: 'いらっしゃいませ、何かお手伝いできますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, where is the toilet?", native: 'すみません、トイレはどこですか？', correct: true, feedback: '完璧 — イギリスでは「toilet」が標準です。' },
          { target: 'Toilet?', native: 'トイレ？', correct: false, feedback: '一語だけだと無作法 — 「Where is the toilet, please?」のほうが丁寧。' },
          { target: 'I want bathroom.', native: 'バスルームを欲しい。', correct: false, feedback: '「Where is the...?」を使いましょう。' },
        ],
      },
      { speaker: 'npc', target: "It's over there, on the right.", native: 'あちら、右側にあります。' },
      { speaker: 'rwen', rwenLine: '場所を聞くマスター！緊急時にも使えます。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'トイレはどこですか？ (英語で)', correct: ['Where is the bathroom?', 'Where is the toilet?'] },
      { prompt: 'あちらです (英語で)', correct: ['Over there', "It's over there"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '部屋の中で「Where is the [item]?」を3つの物について自分に聞いてみてください。',
    rwenSignoff: 'See you over there — in the next lesson.',
  },

  phase8: {
    scenario: 'ロンドンの大型ショッピングモールで、トイレと出口を探す。スタッフに2回質問。',
    rwenRole: 'Lily — 25歳の店員、親切。',
    successCriteria: "User asks 'Where is the [bathroom/exit]?' with full sentence (not one word), uses 'the' correctly, says 'Excuse me' first.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
