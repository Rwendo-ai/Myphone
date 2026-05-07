import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — さようなら',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Goodbye」「See you tomorrow」「Take care」は別れの英語表現。場面で使い分けます。",
    culturalNote: "日本語の「お疲れ様でした」は仕事終わりの万能挨拶ですが、英語にはぴったりの訳がありません。代わりに「Take care」（気をつけて）「Have a good evening」（よい夜を）など、相手の今後を気遣う言葉で別れます。",
  },

  chunks: [
    { id: 'goodbye', target: 'Goodbye', native: 'さようなら (Sayounara)', literal: 'Goodbye', emoji: '👋', phonetic: 'good-BAI', audioRef: null },
    { id: 'see_you_tomorrow', target: 'See you tomorrow', native: 'また明日 (Mata ashita)', literal: 'See-you tomorrow', emoji: '📅', phonetic: 'SEE-yoo-tuh-MOR-oh', audioRef: null },
    { id: 'take_care', target: 'Take care', native: '気をつけて (Ki wo tsukete)', literal: 'Take care (of yourself)', emoji: '💚', phonetic: 'tayk-KAIR', audioRef: null },
  ],

  pattern: {
    name: 'Parting phrases',
    explanation: "「Goodbye」はやや改まった別れ。日常では「Bye」「See you」「Take care」のほうが自然。「Take care」は健康・安全を気遣う温かい一言で、家族・友人・同僚すべてに使えます。",
    examples: [
      { target: 'Goodbye!', native: 'さようなら！' },
      { target: 'See you tomorrow.', native: 'また明日。' },
      { target: 'Take care.', native: '気をつけて。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Goodbye', right: 'さようなら' },
      { left: 'See you tomorrow', right: 'また明日' },
      { left: 'Take care', right: '気をつけて' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'また明日', correct: ['See you tomorrow', 'see you tomorrow'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: "____ care!", options: ['Take', 'Make', 'Do'], correct: 'Take' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '同僚と退社時、何と言うのが自然？', options: [
      { text: 'See you tomorrow!', correct: true },
      { text: 'Goodbye forever.', correct: false },
      { text: 'Hello.', correct: false },
    ], explanation: '「See you tomorrow」が同僚との自然な別れ。「Goodbye forever」は劇的すぎ。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['tomorrow', 'See', 'you'], correct: ['See', 'you', 'tomorrow'], translation: 'また明日' },
    { type: 'translate', instruction: '英語で', prompt: '気をつけて', correct: ['Take care', 'take care'] },
  ],

  rwenDialogue: {
    intro: '東京のオフィス、退社時刻。海外チームのZoom会議が終わります。',
    lines: [
      { speaker: 'npc', target: "Great meeting! See you tomorrow.", native: 'いいミーティングでした！また明日。' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thanks! See you tomorrow. Take care.', native: 'ありがとう！また明日。気をつけて。', correct: true, feedback: '温かい別れ — 「Take care」も自然に使えました。' },
          { target: 'Otsukaresama deshita.', native: 'お疲れ様でした。', correct: false, feedback: '英語圏では通じません。「See you tomorrow」が近い表現。' },
          { target: 'Goodbye forever.', native: 'さらば永遠に。', correct: false, feedback: '劇的すぎ — 普通の別れには「See you」「Take care」が自然。' },
        ],
      },
      { speaker: 'npc', target: 'You too! Bye.', native: 'あなたも！バイ。' },
      { speaker: 'rwen', rwenLine: '別れの挨拶クリア！「Take care」は英語の温かさを伝える便利な一言です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'また明日 (英語で)', correct: ['See you tomorrow', 'see you tomorrow'] },
      { prompt: '気をつけて (英語で)', correct: ['Take care', 'take care'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日の最後の会話で「Take care」または「See you tomorrow」を使ってみてください。',
    rwenSignoff: 'Take care, see you in the next lesson!',
  },

  phase8: {
    scenario: '東京駅、出張中の英語圏の同僚を改札で見送る場面。',
    rwenRole: 'Lisa — 35歳のロンドン同僚、出張帰り、丁寧でフレンドリー。',
    successCriteria: "User uses 'See you tomorrow' or 'Take care' (not 'Otsukaresama' or 'Goodbye forever'), tone is warm and brief, returns the parting greeting.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
