import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-japanese-food',
  module: 7,
  lesson: 8,
  title: 'Sharing Japanese food in English — 和食を英語で',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "和食を英語で説明できると、海外で日本文化を伝えられます。Sushi, ramen, miso — 全部英語にもなった日本語です。",
    culturalNote: "「Sushi」「ramen」「miso」「tempura」は英語の辞書にも載っています。説明する時は「It's a Japanese dish made with...」と前置きすると親切。",
  },

  chunks: [
    { id: 'sushi', target: "Sushi — Japan's iconic dish", native: '寿司 — 日本の代表料理 (Sushi - Nihon no daihyou ryouri)', literal: 'Sushi (raw fish + rice)', emoji: '🍣', phonetic: 'SOO-shee', audioRef: null },
    { id: 'ramen', target: 'Ramen — noodle soup', native: 'ラーメン — 麺のスープ料理 (Ramen)', literal: 'Ramen — noodle soup', emoji: '🍜', phonetic: 'RAH-men', audioRef: null },
    { id: 'miso_soup', target: 'Miso soup — soybean paste soup', native: '味噌汁 (Miso-shiru)', literal: 'Miso soup', emoji: '🍲', phonetic: 'MEE-soh-soop', audioRef: null },
  ],

  pattern: {
    name: 'Describing native food',
    explanation: "和食を英語で説明する型：「It's a Japanese dish made with [食材]」「It's similar to [西洋の料理]」。例：「Miso soup is made with soybean paste and seaweed」。",
    examples: [
      { target: "Sushi is rice with raw fish.", native: '寿司は生魚とご飯。' },
      { target: 'Ramen is noodles in soup.', native: 'ラーメンはスープの麺。' },
      { target: "Miso soup is made with soybean paste.", native: '味噌汁は大豆ペーストで作る。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Sushi', right: '寿司' },
      { left: 'Ramen', right: 'ラーメン' },
      { left: 'Miso soup', right: '味噌汁' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '寿司は生魚とご飯', correct: ['Sushi is rice with raw fish', 'Sushi is raw fish with rice', 'Sushi is rice with raw fish.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Miso soup is made ____ soybean paste.', options: ['with', 'of', 'from'], correct: 'with' },
    { type: 'multiple_choice', instruction: '正しい説明', question: 'ラーメンを英語で紹介するなら？', options: [
      { text: 'Ramen is a Japanese noodle soup.', correct: true },
      { text: 'Ramen Japanese.', correct: false },
      { text: 'Noodle.', correct: false },
    ], explanation: '完全な文＋カテゴリーで説明。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['noodle', 'a', 'soup', 'Ramen', 'is'], correct: ['Ramen', 'is', 'a', 'noodle', 'soup'], translation: 'ラーメンは麺のスープ' },
    { type: 'translate', instruction: '英語で', prompt: '味噌汁', correct: ['Miso soup', 'miso soup'] },
  ],

  rwenDialogue: {
    intro: 'シドニーでオーストラリア人の友達に和食を説明。',
    lines: [
      { speaker: 'npc', target: "What's miso soup?", native: '味噌汁って何？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's a Japanese soup made with soybean paste. We have it almost every day.", native: '大豆ペーストで作る日本のスープ。ほぼ毎日飲みます。', correct: true, feedback: '完璧 — 説明＋文化情報。' },
          { target: 'Soup.', native: 'スープ。', correct: false, feedback: 'もっと詳しく。' },
          { target: 'Daizu soup.', native: '大豆スープ。', correct: false, feedback: '英語：「soybean paste soup」。' },
        ],
      },
      { speaker: 'npc', target: "Sounds delicious. I want to try!", native: '美味しそう。試してみたい！' },
      { speaker: 'rwen', rwenLine: '和食紹介マスター！日本文化を伝えられました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '寿司は生魚とご飯 (英語で)', correct: ['Sushi is rice with raw fish', 'Sushi is raw fish with rice'] },
      { prompt: '味噌汁 (英語で)', correct: ['Miso soup', 'miso soup'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '好きな和食を1つ英語で説明：「It\'s a Japanese dish made with __」',
    rwenSignoff: 'Itadakimasu! See you next.',
  },

  phase8: {
    scenario: 'シドニーで友達に和食を紹介、レストラン選びの会話。',
    rwenRole: 'Mike — 30歳のオーストラリア人、和食初体験。',
    successCriteria: "User explains Japanese dishes in English with structure 'It's a Japanese [category] made with [ingredients]', uses pronunciation close to Japanese (sushi, ramen, miso), shares cultural context.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
