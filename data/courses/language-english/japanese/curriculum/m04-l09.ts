import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed practice — articles in flow',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "今までの冠詞を全部使って、流れのある文を作ります。a → the の変化を意識しましょう。",
    culturalNote: "冠詞は文と文をつなぐ接着剤。最初の登場は a/an、再登場は the — 物語を作る感覚です。",
  },

  chunks: [
    { id: 'a_the_combo', target: 'I read a book. The book was good.', native: '本を読みました。その本は良かった。', literal: 'A → The progression', emoji: '📖', phonetic: 'I red uh buk. Thuh buk wuz gud.', audioRef: null },
    { id: 'no_the_combo', target: 'Children love music. The children at this school sing.', native: '子供は音楽が好き。この学校の子供たちは歌います。', literal: 'No article (general) → The (specific)', emoji: '🎵', phonetic: 'CHIL-dren luv MYU-zik', audioRef: null },
    { id: 'mixed_flow', target: 'I have a dog. The dog likes water.', native: '犬を飼っています。その犬は水が好き。', literal: 'A → The (same noun)', emoji: '🐕', phonetic: 'I hav a dog. Thuh dog laiks WAW-ter', audioRef: null },
  ],

  pattern: {
    name: 'A → The progression in stories',
    explanation: "ストーリーの中で：(1) 初登場 → a/an (2) 二回目以降 → the (3) 一般論 → 冠詞なし。日本語にはない感覚ですが、英語の文章作りでは必須です。",
    examples: [
      { target: "I bought an apple. The apple was sweet.", native: 'リンゴを買いました。そのリンゴは甘かった。' },
      { target: "Cats are nice. The cat next door is funny.", native: '猫はかわいい。隣の猫は面白い。' },
      { target: "I have a friend. The friend lives in Tokyo.", native: '友達がいます。その友達は東京に住んでいます。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I read a book', right: '本を読んだ（初登場）' },
      { left: 'The book was good', right: 'その本は良かった（再登場）' },
      { left: 'Children love music', right: '子供は音楽が好き（一般論）' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '犬を飼っています。その犬は水が好き。', correct: ['I have a dog. The dog likes water.', 'I have a dog. The dog likes water'] },
    { type: 'fill_blank', instruction: '空欄（a/the/なし）', sentence: 'I bought ___ apple. ___ apple was sweet.', options: ['an / The', 'the / a', 'a / an'], correct: 'an / The' },
    { type: 'multiple_choice', instruction: '正しい使い方', question: '初登場のリンゴ → 再登場のリンゴは？', options: [
      { text: 'an apple → the apple', correct: true },
      { text: 'the apple → an apple', correct: false },
      { text: 'apple → apple', correct: false },
    ], explanation: '初登場は an/a、再登場は the — これが英語のストーリー作り。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['water', 'likes', 'dog', 'The'], correct: ['The', 'dog', 'likes', 'water'], translation: 'その犬は水が好き' },
    { type: 'translate', instruction: '英語で', prompt: '友達がいます。その友達は東京に住んでいます。', correct: [
      'I have a friend. The friend lives in Tokyo.',
      'I have a friend. The friend lives in Tokyo',
    ]},
  ],

  rwenDialogue: {
    intro: '英作文ライティングクラスで、冠詞を使ったストーリー作り。',
    lines: [
      { speaker: 'npc', target: 'Tell me a short story using a, an, and the.', native: 'a, an, the を使った短い話を。' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I have a cat. The cat is black. Cats are nice.', native: '猫を飼っています。その猫は黒。猫はかわいい。', correct: true, feedback: '完璧 — a → the → 一般論（冠詞なし）。' },
          { target: 'I have the cat. A cat is black.', native: '私はその猫を持っている。猫は黒。', correct: false, feedback: '初登場は a、再登場は the。' },
          { target: 'I have cat. Cat black.', native: '猫持ってる。猫黒。', correct: false, feedback: '冠詞を必ず付けて。' },
        ],
      },
      { speaker: 'npc', target: "Beautifully done.", native: '素晴らしい。' },
      { speaker: 'rwen', rwenLine: '冠詞のフロー完成！ストーリーで a → the が使えます。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '本を読みました。その本は良かった。 (英語で)', correct: ['I read a book. The book was good.', 'I read a book. The book was good'] },
      { prompt: '犬を飼っています。その犬は水が好き。 (英語で)', correct: ['I have a dog. The dog likes water.', 'I have a dog. The dog likes water'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分で2文の英語ストーリーを作る：1文目に a/an、2文目に the。',
    rwenSignoff: 'A lesson done. The next is coming!',
  },

  phase8: {
    scenario: '英作文クラスで短いストーリーを語る練習。',
    rwenRole: 'Mrs. Brown — 英語講師。',
    successCriteria: "User uses 'a/an' for first mention and 'the' for second mention of same noun in a story, omits article for general plurals, demonstrates the article progression naturally.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
