import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: "I like / I don't like food — 好き嫌い",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I love it」「I don't like it」「It's delicious」 — 食べ物の感想を英語で。",
    culturalNote: "日本では「美味しいです」と一言で済ませがちですが、英語圏では具体的に：「It's delicious」「The flavour is amazing」など熱意を持って褒めると喜ばれます。",
  },

  chunks: [
    { id: 'i_love_it', target: 'I love it', native: '大好きです (Daisuki desu)', literal: 'I love it', emoji: '❤️', phonetic: 'ay-LUV-it', audioRef: null },
    { id: 'i_dont_like', target: "I don't like it", native: '好きではありません (Suki dewa arimasen)', literal: "I do-not like it", emoji: '👎', phonetic: 'ay-DOHNT-LAYK-it', audioRef: null },
    { id: 'its_delicious', target: "It's delicious", native: '美味しいです (Oishii desu)', literal: "It is delicious", emoji: '😋', phonetic: 'its-de-LISH-us', audioRef: null },
  ],

  pattern: {
    name: 'Food opinions',
    explanation: "肯定：I love / like / enjoy。否定：I don't like / I'm not a fan of。最高級：It's delicious / amazing / fantastic。「Yummy」はカジュアルな「美味しい」。",
    examples: [
      { target: 'I love sushi.', native: '寿司が大好き。' },
      { target: "I don't like coffee.", native: 'コーヒーは好きじゃない。' },
      { target: "This is delicious!", native: 'これ美味しい！' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I love it', right: '大好き' },
      { left: "I don't like it", right: '好きじゃない' },
      { left: "It's delicious", right: '美味しい' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '美味しい', correct: ["It's delicious", 'It is delicious', 'Delicious'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I ____ like coffee.", options: ["don't", 'no', 'not'], correct: "don't" },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'ホストファミリーの料理を褒める時の自然な英語は？', options: [
      { text: "This is delicious! Thank you.", correct: true },
      { text: 'OK food.', correct: false },
      { text: 'Not bad.', correct: false },
    ], explanation: '英語圏では具体的に褒めるのが礼儀。「Not bad」は失礼に近い。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['delicious', 'is', 'It'], correct: ['It', 'is', 'delicious'], translation: '美味しい' },
    { type: 'translate', instruction: '英語で', prompt: '寿司が大好き', correct: ['I love sushi', 'i love sushi'] },
  ],

  rwenDialogue: {
    intro: 'シドニーのホストファミリーの夕食で、料理を褒める場面。',
    lines: [
      { speaker: 'npc', target: 'How is the lasagna?', native: 'ラザニアどう？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's delicious! I love it. Thank you.", native: '美味しい！大好きです。ありがとう。', correct: true, feedback: '完璧 — 具体的＋温かい褒め方。' },
          { target: 'OK.', native: 'オッケー。', correct: false, feedback: '失礼に近い — 「delicious」「I love it」と褒めて。' },
          { target: 'Oishii.', native: '美味しい。', correct: false, feedback: '英語：「It\'s delicious」。' },
        ],
      },
      { speaker: 'npc', target: "Glad you like it!", native: '気に入ってくれて嬉しい！' },
      { speaker: 'rwen', rwenLine: '食の感想マスター！褒め言葉が大事です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '美味しい (英語で)', correct: ["It's delicious", 'Delicious'] },
      { prompt: '好きじゃない (英語で)', correct: ["I don't like it", 'I do not like it'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日食べた物を英語で評価：「It was delicious / I loved it / I didn\'t like it」のどれか。',
    rwenSignoff: "I love teaching you. See you!",
  },

  phase8: {
    scenario: 'シドニーのホストファミリーで夕食を褒める。',
    rwenRole: 'Helen — ホストマザー、料理上手。',
    successCriteria: "User compliments food specifically with 'delicious' or 'I love it' (not generic 'OK'), expresses dislikes politely with 'I don't like' (not 'bad').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
