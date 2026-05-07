import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — こんばんは',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Good evening」は夕方〜夜の挨拶。日本語の「こんばんは」と同じタイミングで使います。",
    culturalNote: "「Good evening」はやや改まった響き。レストラン、ホテル、夜の会議で自然です。友達同士なら「Hi」だけで十分。「Good night」は別れる時か寝る前で、出会いには使いません — そこが日本語と違います。",
  },

  chunks: [
    { id: 'good_evening', target: 'Good evening', native: 'こんばんは (Konbanwa)', literal: 'Good evening', emoji: '🌆', phonetic: 'good-EEV-ning', audioRef: null },
    { id: 'how_was_your_day', target: 'How was your day?', native: '今日はどうでしたか？ (Kyou wa dou deshita ka?)', literal: 'How was your day? (past)', emoji: '🤔', phonetic: 'how-wuz-yor-DAY', audioRef: null },
    { id: 'it_was_good', target: 'It was good', native: '良かったです (Yokatta desu)', literal: 'It was good (past)', emoji: '✨', phonetic: 'it-wuz-GOOD', audioRef: null },
  ],

  pattern: {
    name: 'Past tense in greetings',
    explanation: "夕方になったら一日を振り返る質問。「How was your day?」は過去形で、「is」が「was」に変わります。日本語の「でした」と同じ役割。「It was good」と答えるのが自然 — 詳しい話は求められていません。",
    examples: [
      { target: 'Good evening!', native: 'こんばんは！' },
      { target: 'How was your day?', native: '今日はどうでしたか？' },
      { target: 'It was good, thanks.', native: '良かったです、ありがとう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Good evening', right: 'こんばんは' },
      { left: 'How was your day?', right: '今日はどうでしたか？' },
      { left: 'It was good', right: '良かったです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'こんばんは', correct: ['Good evening', 'good evening'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: 'How ____ your day?', options: ['was', 'is', 'were'], correct: 'was', context: '夕方の挨拶で過去形を使います。' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '夜7時、レストランで店員さんに会った時は？', options: [
      { text: 'Good evening', correct: true },
      { text: 'Good night', correct: false },
      { text: 'Good morning', correct: false },
    ], explanation: '「Good night」は別れる時専用。出会いには「Good evening」です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['good', 'It', 'was'], correct: ['It', 'was', 'good'], translation: '良かったです' },
    { type: 'translate', instruction: '英語で', prompt: '今日はどうでしたか？', correct: ['How was your day?', 'how was your day?', 'How was your day'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの和食レストランで日本人客対応のスタッフ。あなたが英語で挨拶を試します。',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: 'こんばんは！今日はどうでしたか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Good evening. It was good, thanks.', native: 'こんばんは。良かったです、ありがとう。', correct: true, feedback: '自然！過去形「was」もきれいに使えました。' },
          { target: 'Good night.', native: 'おやすみなさい。', correct: false, feedback: '「Good night」は寝る前か別れの挨拶。今は「Good evening」です。' },
          { target: 'My day is good.', native: '私の日は良いです。', correct: false, feedback: '質問が過去形なので答えも過去形「was」を使いましょう。' },
        ],
      },
      { speaker: 'npc', target: "Glad to hear it. Table for one?", native: 'よかったです。お一人様のテーブルですか？' },
      { speaker: 'rwen', rwenLine: '夜の挨拶クリア！過去形「was」も使いこなせました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'こんばんは (英語で)', correct: ['Good evening', 'good evening'] },
      { prompt: '良かったです (英語で)', correct: ['It was good', 'it was good'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今夜、家族に英語で「Good evening, how was your day?」と聞いてみてください。',
    rwenSignoff: 'Good night!',
  },

  phase8: {
    scenario: '東京のホテルバー、夜8時。アメリカ人ビジネスマンと出会い、軽い夕方の会話。',
    rwenRole: 'Mike — 50歳のシカゴから来た商談中のビジネスマン、リラックスした雰囲気。',
    successCriteria: "User uses 'Good evening' (not 'Good night' which is for parting), uses past tense 'was' correctly when answering 'How was your day?', keeps response brief and friendly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
