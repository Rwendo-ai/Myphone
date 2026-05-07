import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — Casual greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Hi」と「Bye」は英語のカジュアル挨拶。同僚、友達、店員さんにもサッと使える短い言葉です。",
    culturalNote: "日本語の「お疲れ様です」は同僚への万能挨拶ですが、英語にはぴったり対応する言葉がありません。代わりに「Hi」（出会い）と「Bye」（別れ）を使います。アニメで聞く「バイバイ」は実は英語そのもの — カタカナ化された「Bye-bye」です。",
  },

  chunks: [
    { id: 'hi', target: 'Hi', native: 'やあ / ハイ', literal: 'Hi (Hai)', emoji: '👋', phonetic: 'HAY / ハイ', audioRef: null },
    { id: 'bye', target: 'Bye', native: 'バイ / じゃあね', literal: 'Goodbye (short)', emoji: '👋', phonetic: 'BAI / バイ', audioRef: null },
    { id: 'see_you_later', target: 'See you later', native: 'また後で (Mata ato de)', literal: 'See-you later', emoji: '🔁', phonetic: 'SEE-yoo-LAY-tuh', audioRef: null },
  ],

  pattern: {
    name: 'Casual greetings',
    explanation: "「Hi」は「Hello」よりカジュアル。友達、同僚、レジの店員に使えます。「Bye」も同様。フォーマルな場（初対面のクライアントなど）では「Hello」と「Goodbye」を使うほうが安全です。",
    examples: [
      { target: 'Hi!', native: 'やあ！' },
      { target: 'Bye!', native: 'じゃあね！' },
      { target: 'See you later', native: 'また後で' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: '英語と日本語を組み合わせてください',
      pairs: [
        { left: 'Hi', right: 'やあ' },
        { left: 'Bye', right: 'じゃあね' },
        { left: 'See you later', right: 'また後で' },
      ],
    },
    {
      type: 'translate',
      instruction: '英語で書いてください',
      prompt: 'またね',
      correct: ['Bye', 'bye', 'See you', 'see you', 'See you later'],
    },
    {
      type: 'multiple_choice',
      instruction: '正しい答えを選んでください',
      question: 'カフェの店員さんに別れる時、何と言いますか？',
      options: [
        { text: 'Bye!', correct: true },
        { text: 'Goodbye, sir.', correct: false },
        { text: 'Yes, please.', correct: false },
      ],
      explanation: 'カフェのカジュアルな場面では「Bye」で十分。「Goodbye, sir」はホテルのドアマンレベルです。',
    },
    {
      type: 'fill_blank',
      instruction: '空欄を埋めてください',
      sentence: 'See ____ later!',
      options: ['you', 'me', 'we'],
      correct: 'you',
    },
    {
      type: 'build_sentence',
      instruction: '正しい順番に並べてください',
      words: ['later', 'See', 'you'],
      correct: ['See', 'you', 'later'],
      translation: 'また後で',
    },
    {
      type: 'translate',
      instruction: '英語で書いてください',
      prompt: 'やあ！また後で。',
      correct: ['Hi! See you later.', 'Hi, see you later', 'Hi! See you later', 'hi see you later'],
    },
  ],

  rwenDialogue: {
    intro: 'シドニーへ留学中。寮の廊下でルームメイトとすれ違います。',
    lines: [
      { speaker: 'npc', target: 'Hi! Going out?', native: 'やあ！出かけるの？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi! Yeah, see you later.', native: 'やあ！うん、また後で。', correct: true, feedback: '自然！カジュアルな状況にぴったり。' },
          { target: 'Good afternoon, sir.', native: 'こんにちは、お客様。', correct: false, feedback: 'フォーマル過ぎ — ルームメイトには「Hi」だけで十分。' },
          { target: 'Bye-bye-bye.', native: 'バイバイバイ。', correct: false, feedback: '「Bye」一回で十分です。' },
        ],
      },
      { speaker: 'npc', target: 'Cool, see ya!', native: 'オッケー、またね！' },
      { speaker: 'rwen', rwenLine: 'カジュアル英語マスター！「See ya」は「See you」のさらにくだけた形です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'やあ (英語で)', correct: ['Hi', 'hi'] },
      { prompt: 'また後で (英語で)', correct: ['See you later', 'see you later', 'See you', 'see you'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日、誰かに「Hi」と「Bye」を言ってみてください。コンビニの店員さんでも、同僚でもOK。',
    rwenSignoff: 'See you tomorrow!',
  },

  phase8: {
    scenario: 'オーストラリアの大学キャンパス。学食でカジュアルな会話を交わします。',
    rwenRole: 'Jake — 21歳のオーストラリア人学生、フレンドリーで気さく。',
    successCriteria: "User uses 'Hi' (not 'Hello, sir'), uses 'Bye' or 'See you later' to part, and keeps the tone casual without over-formal Japanese-style apologies.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
