import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「A」と「An」は英語の冠詞 — 数えられる名詞の単数形に必ず付きます。日本語にはない概念で、最初は混乱しやすい部分。",
    culturalNote: "日本語に冠詞はありません — 「本」だけで「a book」「the book」両方の意味になります。英語では「a book」を「book」と言うと不自然 — 必ず「a」「an」「the」のどれかを付けます。母音始まりの単語には「an」。",
  },

  chunks: [
    { id: 'a_book', target: 'A book', native: '一冊の本 (Issatsu no hon)', literal: 'A book', emoji: '📕', phonetic: 'uh-BUK', audioRef: null },
    { id: 'an_apple', target: 'An apple', native: '一個のリンゴ (Ikko no ringo)', literal: 'An apple (vowel start)', emoji: '🍎', phonetic: 'an-AP-ul', audioRef: null },
    { id: 'a_house', target: 'A house', native: '一軒の家 (Ikken no ie)', literal: 'A house', emoji: '🏠', phonetic: 'uh-HOWS', audioRef: null },
  ],

  pattern: {
    name: 'A / An rule',
    explanation: "「A」は子音始まりの単語の前（a book, a house, a dog）。「An」は母音 (a, e, i, o, u) 始まりの単語の前（an apple, an engineer, an hour）。発音で決まるので、書き始めの文字より「最初の音」を聞いて選びます。",
    examples: [
      { target: 'A book', native: '一冊の本' },
      { target: 'An apple', native: '一個のリンゴ' },
      { target: 'An hour (silent h)', native: '一時間（hは無音）' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'A book', right: '一冊の本' },
      { left: 'An apple', right: '一個のリンゴ' },
      { left: 'A house', right: '一軒の家' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '一個のリンゴ', correct: ['An apple', 'an apple'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I want ____ apple.', options: ['an', 'a', 'the'], correct: 'an' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「engineer」の前は？', options: [
      { text: 'an', correct: true },
      { text: 'a', correct: false },
      { text: 'the', correct: false },
    ], explanation: 'engineer は母音「e」始まり → an engineer。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['book', 'a', 'have', 'I'], correct: ['I', 'have', 'a', 'book'], translation: '本を一冊持っています' },
    { type: 'translate', instruction: '英語で', prompt: '一軒の家', correct: ['A house', 'a house'] },
  ],

  rwenDialogue: {
    intro: '東京の英会話レッスンで、先生が冠詞を教えてくれます。',
    lines: [
      { speaker: 'npc', target: "Yuki, point at things and say 'a' or 'an'.", native: 'ユキ、物を指して「a」か「an」を付けて。' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A book, a pen, an apple, an umbrella, a chair.', native: '本、ペン、リンゴ、傘、椅子。', correct: true, feedback: '完璧 — 子音と母音をきちんと使い分けました。' },
          { target: 'A book, a apple, a umbrella.', native: '本、リンゴ、傘。', correct: false, feedback: '「apple」「umbrella」は母音始まり → an apple, an umbrella。' },
          { target: 'Book, apple, chair.', native: '本、リンゴ、椅子。', correct: false, feedback: '冠詞「a/an」を必ず付けてください。' },
        ],
      },
      { speaker: 'npc', target: "Excellent! You've got the rule.", native: '完璧！ルール掴みました。' },
      { speaker: 'rwen', rwenLine: '冠詞ルール理解！「a / an」は発音で決まります。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '一個のリンゴ (英語で)', correct: ['An apple', 'an apple'] },
      { prompt: '一冊の本 (英語で)', correct: ['A book', 'a book'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '部屋の中の物10個を「a / an + 名詞」で言ってみてください。',
    rwenSignoff: 'A teacher to you, an honor for me.',
  },

  phase8: {
    scenario: '東京の英会話学校で先生が冠詞のドリル練習をします。',
    rwenRole: 'Mrs. Brown — 50歳のアメリカ人英語講師、忍耐強い。',
    successCriteria: "User correctly uses 'a' before consonant sounds and 'an' before vowel sounds, doesn't omit the article entirely (Japanese habit), self-corrects when wrong.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
