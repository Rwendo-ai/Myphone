import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — When to use it',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「The」は特定の物を指すときに使う冠詞。日本語にはない感覚で、最初は難しい部分です。",
    culturalNote: "日本語では「あの本」「その本」と指示語を使い分けますが、英語では「the book」一語で「お互い知っているあの本」を意味します。一度話に出た物は次から「the」を付けるのが基本ルール。",
  },

  chunks: [
    { id: 'the_book', target: 'The book', native: 'その本 (Sono hon)', literal: 'The book (specific)', emoji: '📘', phonetic: 'thuh-BUK', audioRef: null },
    { id: 'the_japan_team', target: 'The Japan team', native: '日本チーム (Nihon team)', literal: 'The Japan team', emoji: '⚽', phonetic: 'thuh-juh-PAN-teem', audioRef: null },
    { id: 'the_morning', target: 'The morning', native: 'その朝／朝に (Sono asa / Asa ni)', literal: 'The morning', emoji: '🌅', phonetic: 'thuh-MOR-ning', audioRef: null },
  ],

  pattern: {
    name: 'When to use "the"',
    explanation: "「the」を使う時：(1) 一度話題に出たもの (2) 唯一無二のもの (the sun, the moon) (3) お互いが知っているもの (the kitchen) (4) 国や団体名 (the Japan team)。一般的な「本」一冊なら「a book」、特定の本なら「the book」。",
    examples: [
      { target: 'I read a book. The book was great.', native: '本を読みました。その本は素晴らしかった。' },
      { target: 'The sun is bright today.', native: '今日は太陽が明るい。' },
      { target: 'The Japan team won.', native: '日本チームが勝った。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'The book', right: 'その本' },
      { left: 'The Japan team', right: '日本チーム' },
      { left: 'The morning', right: 'その朝／朝に' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'その本', correct: ['The book', 'the book'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I have a dog. ____ dog is brown.', options: ['The', 'A', 'An'], correct: 'The' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '太陽（唯一無二）に冠詞は？', options: [
      { text: 'the sun', correct: true },
      { text: 'a sun', correct: false },
      { text: 'sun', correct: false },
    ], explanation: '唯一無二の物には「the」。地球に太陽は一つだけだから。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['team', 'won', 'Japan', 'The'], correct: ['The', 'Japan', 'team', 'won'], translation: '日本チームが勝った' },
    { type: 'translate', instruction: '英語で', prompt: '朝に', correct: ['In the morning', 'in the morning'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの大学で英語の先生が「the」の使い方を解説します。',
    lines: [
      { speaker: 'npc', target: "I bought ___ book. ___ book is interesting.", native: '本を買いました。その本は面白いです。 (空欄を埋めて)' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I bought a book. The book is interesting.', native: '本を買いました。その本は面白いです。', correct: true, feedback: '完璧 — 最初は a、二回目は the。' },
          { target: 'I bought the book. The book is interesting.', native: 'その本を買いました。その本は面白いです。', correct: false, feedback: '最初に出た時は「a」、繰り返しから「the」に。' },
          { target: 'I bought book. Book is interesting.', native: '本買いました。本面白い。', correct: false, feedback: '冠詞を必ず付けて。' },
        ],
      },
      { speaker: 'npc', target: "Perfect — first 'a', then 'the'!", native: '完璧 — 最初は a、次は the！' },
      { speaker: 'rwen', rwenLine: '「the」の使い方マスター！繰り返し出る物が「the」です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'その本 (英語で)', correct: ['The book', 'the book'] },
      { prompt: '朝に (英語で)', correct: ['In the morning', 'in the morning'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '英語で2文：最初の文に「a [物]」、次の文に「the [同じ物]」を使う練習。',
    rwenSignoff: 'The lesson is over. See you next.',
  },

  phase8: {
    scenario: '英会話レッスンで the の使い分けドリル。',
    rwenRole: 'Mrs. Brown — 英語講師、丁寧。',
    successCriteria: "User uses 'a' for first mention, 'the' for second mention of same noun, uses 'the' for unique things (the sun, the moon).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
