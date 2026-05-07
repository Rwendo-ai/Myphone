import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「This」「That」「These」「Those」は指示語。日本語の「これ・それ・あれ」と似ています。",
    culturalNote: "日本語は「これ・それ・あれ」の3段階ですが、英語は「this（近い）／that（遠い）」の2段階だけ。複数形は「these / those」で名詞も複数形に変わります。",
  },

  chunks: [
    { id: 'this_book', target: 'This book', native: 'この本 (Kono hon)', literal: 'This book (near)', emoji: '📕', phonetic: 'this-BUK', audioRef: null },
    { id: 'that_house', target: 'That house', native: 'あの家 (Ano ie)', literal: 'That house (far)', emoji: '🏠', phonetic: 'that-HOWS', audioRef: null },
    { id: 'these_children', target: 'These children', native: 'この子供たち (Kono kodomotachi)', literal: 'These children (plural near)', emoji: '👶', phonetic: 'theez-CHIL-dren', audioRef: null },
  ],

  pattern: {
    name: 'This/That + These/Those',
    explanation: "近い物：this（単数）、these（複数）。遠い物：that（単数）、those（複数）。名詞も単数・複数で一致：this book / these books。",
    examples: [
      { target: 'This book is mine.', native: 'この本は私のです。' },
      { target: 'That house is big.', native: 'あの家は大きい。' },
      { target: 'These children are my friends.', native: 'この子たちは私の友達。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'This book', right: 'この本' },
      { left: 'That house', right: 'あの家' },
      { left: 'These children', right: 'この子供たち' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'この本', correct: ['This book', 'this book'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '____ children are my students.', options: ['These', 'This', 'That'], correct: 'These' },
    { type: 'multiple_choice', instruction: '正しい指示語', question: '遠くにある複数の家は？', options: [
      { text: 'Those houses', correct: true },
      { text: 'That houses', correct: false },
      { text: 'These house', correct: false },
    ], explanation: '遠い＋複数 = those + 複数名詞。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['mine', 'is', 'book', 'This'], correct: ['This', 'book', 'is', 'mine'], translation: 'この本は私のです' },
    { type: 'translate', instruction: '英語で', prompt: 'あの家', correct: ['That house', 'that house'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの古本屋で、店員さんと商品の話。',
    lines: [
      { speaker: 'npc', target: 'Are you interested in any of these books?', native: 'これらの本に興味ある？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, this book looks great. How much is that one?', native: 'はい、この本良さそうです。あれはいくら？', correct: true, feedback: '完璧 — this（近い）と that（遠い）を使い分け。' },
          { target: 'This these book good.', native: 'これこれ本良い。', correct: false, feedback: '一つだけ指すなら「this book」。' },
          { target: 'That book here.', native: 'あの本ここ。', correct: false, feedback: '近い物は「this」、遠い物は「that」。' },
        ],
      },
      { speaker: 'npc', target: "That one is twenty dollars.", native: 'あれは20ドル。' },
      { speaker: 'rwen', rwenLine: '指示語マスター！this/that の使い分けができました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'この本 (英語で)', correct: ['This book', 'this book'] },
      { prompt: 'あの家 (英語で)', correct: ['That house', 'that house'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '部屋の物を「This is a [物]」「That is a [物]」で4つ言う。',
    rwenSignoff: 'This lesson is over. See you in that next one.',
  },

  phase8: {
    scenario: 'シドニーの古本屋で店員と商品の話。this/that を使い分け。',
    rwenRole: 'Pete — 60歳の古本屋店主、博識。',
    successCriteria: "User uses 'this' for near items and 'that' for far ones, matches plurals (these/those) with plural nouns, doesn't confuse the two-step English system with Japanese three-step (kore/sore/are).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
