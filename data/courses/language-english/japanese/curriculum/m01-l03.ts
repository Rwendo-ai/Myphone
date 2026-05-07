import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — おはようございます',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Good morning」は朝の挨拶。日本の「おはようございます」と似ていますが、英語では時間帯ごとに挨拶が変わります。",
    culturalNote: "日本では「おはようございます」が朝の万能挨拶ですが、英語の「Good morning」は正午まで使います。職場では先輩・後輩関係なく同じ言葉。お辞儀の代わりに目を合わせて軽く笑顔 — これが英語式です。",
  },

  chunks: [
    { id: 'good_morning', target: 'Good morning', native: 'おはようございます (Ohayou gozaimasu)', literal: 'Good morning', emoji: '🌅', phonetic: 'good-MOR-ning', audioRef: null },
    { id: 'did_you_sleep_well', target: 'Did you sleep well?', native: 'よく眠れましたか？ (Yoku nemuremashita ka?)', literal: 'Did-you sleep well?', emoji: '😴', phonetic: 'did-yoo-SLEEP-well', audioRef: null },
    { id: 'i_slept_well', target: 'I slept well', native: 'よく眠れました (Yoku nemuremashita)', literal: 'I-slept well', emoji: '✨', phonetic: 'aye-SLEPT-well', audioRef: null },
  ],

  pattern: {
    name: 'Time-of-day greetings (morning)',
    explanation: "英語では時間で挨拶が変わります：Good morning（朝〜正午）、Good afternoon（正午〜夕方）、Good evening（夕方以降）。日本語の「おはよう／こんにちは／こんばんは」と同じ仕組み。動詞「slept」は「sleep」の過去形 — 不規則変化です。",
    examples: [
      { target: 'Good morning!', native: 'おはようございます！' },
      { target: 'Did you sleep well?', native: 'よく眠れましたか？' },
      { target: 'Yes, I slept well, thanks.', native: 'はい、よく眠れました、ありがとう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Good morning', right: 'おはようございます' },
      { left: 'Did you sleep well?', right: 'よく眠れましたか？' },
      { left: 'I slept well', right: 'よく眠れました' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'おはようございます', correct: ['Good morning', 'good morning', 'Good morning!'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: 'Good ____! Did you sleep well?', options: ['morning', 'evening', 'night'], correct: 'morning' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「Did you sleep well?」 と聞かれたら？', options: [
      { text: 'Yes, I slept well, thanks.', correct: true },
      { text: 'I am sleep.', correct: false },
      { text: 'Goodnight.', correct: false },
    ], explanation: '「Slept」は「sleep」の過去形。不規則動詞です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['well', 'I', 'slept'], correct: ['I', 'slept', 'well'], translation: 'よく眠れました' },
    { type: 'translate', instruction: '英語で', prompt: 'よく眠れましたか？', correct: ['Did you sleep well?', 'did you sleep well?', 'Did you sleep well'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのホテル。朝、フロントスタッフが声をかけてきます。',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: 'おはようございます！よく眠れましたか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Good morning. Yes, I slept well, thanks.', native: 'おはようございます。はい、よく眠れました、ありがとう。', correct: true, feedback: '完璧 — 挨拶を返して質問にも答えました。' },
          { target: 'Hello.', native: 'こんにちは。', correct: false, feedback: '「Hello」より朝は「Good morning」のほうが自然。' },
          { target: 'I am sleep.', native: '私は眠っています。', correct: false, feedback: '「sleep」は動詞 — 過去形は「slept」です。' },
        ],
      },
      { speaker: 'npc', target: "Wonderful. Enjoy your breakfast.", native: '良かったです。朝食をお楽しみください。' },
      { speaker: 'rwen', rwenLine: '英語の朝の挨拶クリア！過去形「slept」も使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'おはようございます (英語で)', correct: ['Good morning', 'good morning'] },
      { prompt: 'よく眠れました (英語で)', correct: ['I slept well', 'i slept well'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '明日の朝、誰かに「Good morning」と声に出して言ってみてください。',
    rwenSignoff: 'おやすみなさい — Goodnight.',
  },

  phase8: {
    scenario: 'ロンドンのホテルの朝食会場。スタッフが朝の挨拶をしてきます。',
    rwenRole: 'Emma — ホテルのフロントスタッフ、25歳、温かい。',
    successCriteria: "User responds with 'Good morning' (not 'Hello' or 'Konnichiwa'), answers 'Did you sleep well?' with 'I slept well, thanks' using past tense correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
