import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 1 完成！今日は学んだ全てを使って、英語の最初の完璧な挨拶会話を組み立てます。",
    culturalNote: "日本語の初対面はゆっくり — 名刺交換、お辞儀、肩書き。英語の初対面はテンポが速い：Hello → 名前 → 出身 → Goodbye、全部30秒で終わることも。慣れていきましょう。",
  },

  chunks: [
    { id: 'review_hello_intro', target: 'Hello, my name is ...', native: 'こんにちは、私の名前は…です', literal: 'Hello, my name is...', emoji: '👋', phonetic: 'heh-LOH-may-NAYM-iz', audioRef: null },
    { id: 'review_where_from', target: "I'm from Japan", native: '日本の出身です', literal: 'I-am from Japan', emoji: '🌍', phonetic: 'aym-FROM-juh-PAN', audioRef: null },
    { id: 'review_goodbye_full', target: 'Goodbye, take care', native: 'さようなら、気をつけて', literal: 'Goodbye, take care', emoji: '🤝', phonetic: 'good-BAI-tayk-KAIR', audioRef: null },
  ],

  pattern: {
    name: 'Full greeting flow',
    explanation: "完璧な初対面会話は3部構成：(1) 挨拶 'Hello / Good morning' (2) 自己紹介 'My name is... / I\'m from...' (3) 別れ 'Goodbye / Take care'。これを見ないでスムーズにできれば、英語の旅が始まります。",
    examples: [
      { target: "Hello, my name is Yuki. I'm from Osaka.", native: 'こんにちは、私はユキです。大阪の出身です。' },
      { target: "How are you? I'm fine, thanks.", native: 'お元気ですか？元気です、ありがとう。' },
      { target: 'Nice to meet you. Goodbye!', native: 'はじめまして。さようなら！' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '対応する会話の流れを組み合わせてください', pairs: [
      { left: 'Hello, how are you?', right: "I'm fine, thanks" },
      { left: "What's your name?", right: 'My name is Yuki' },
      { left: 'Goodbye!', right: 'See you tomorrow' },
    ]},
    { type: 'translate', instruction: '英語で — 自己紹介', prompt: 'こんにちは、私はユキです。大阪の出身です。', correct: [
      "Hello, my name is Yuki. I'm from Osaka.",
      "Hello, my name is Yuki. I'm from Osaka",
      "Hello my name is Yuki. I'm from Osaka.",
    ]},
    { type: 'translate', instruction: '英語で — 「How are you?」 への返答', prompt: '元気です、ありがとう', correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine, thank you"] },
    { type: 'build_sentence', instruction: '完璧な別れの会話を並べ替え', words: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'], correct: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'], translation: 'さようなら、また明日、気をつけて' },
    { type: 'fill_blank', instruction: '初対面の会話を完成', sentence: "Hello, my ____ is Yuki.", options: ['name', 'home', 'day'], correct: 'name', context: '「What\'s your name?」 への答え。' },
    { type: 'translate', instruction: '英語で', prompt: 'さようなら、気をつけて', correct: ['Goodbye, take care', 'goodbye, take care', 'Goodbye take care'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークのMOMA美術館で、初対面の人と話すチャンス。',
    lines: [
      { speaker: 'npc', target: 'Hello! How are you?', native: 'こんにちは！お元気ですか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm fine, thanks. My name is Yuki. What's your name?", native: '元気です、ありがとう。私はユキです。お名前は？', correct: true, feedback: '完璧 — 答えて、名前を伝えて、質問も返した。これがネイティブのテンポです。' },
          { target: 'Hi.', native: 'やあ。', correct: false, feedback: '短すぎ — 初対面では名前と質問を加えて。' },
          { target: 'Where are you from?', native: '出身は？', correct: false, feedback: '質問に答える前に質問返ししてしまいました — まず「I\'m fine, thanks」から。' },
        ],
      },
      { speaker: 'npc', target: "I'm Sarah, from London. Nice to meet you, Yuki. Goodbye!", native: '私はサラ、ロンドン出身。はじめまして、ユキ。さようなら！' },
      { speaker: 'rwen', rwenLine: 'Module 1 完了！英語の初対面会話を最初から最後までできました。Module 2 でお会いしましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで完全な会話を書いてください。',
    prompts: [
      { prompt: "こんにちは、私はユキです。大阪の出身です。 (英語で)", correct: [
        "Hello, my name is Yuki. I'm from Osaka.",
        "Hello, my name is Yuki. I'm from Osaka",
        "Hello my name is Yuki. I'm from Osaka.",
      ]},
      { prompt: "はじめまして。さようなら！ (英語で)", correct: [
        'Nice to meet you. Goodbye!',
        'Nice to meet you. Goodbye',
        'Nice to meet you. Goodbye.',
        'nice to meet you. goodbye!',
      ]},
    ],
  },

  mission: {
    title: '今日のミッション — 完璧な会話',
    task: "今日、誰かに完璧な英語の会話を試してみてください — 'Hello' から 'Goodbye' まで。鏡相手でも構いません。",
    rwenSignoff: 'Module 1 完了！旅が始まりました。Module 2 で会いましょう。',
  },

  phase8: {
    scenario: '東京・浅草の浅草寺で、迷子の英語圏の観光客に話しかけられる。最初から最後まで完全な英語会話を。',
    rwenRole: 'Emma, 28, オーストラリアからの観光客、初日本、フレンドリーで時差ボケ気味。',
    successCriteria: "User runs the full flow: opens with greeting (Hello / Good afternoon), exchanges names ('My name is...' / 'What's your name?'), asks 'Where are you from?', and closes with 'Goodbye' or 'Take care'. All Module 1 chunks used naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
