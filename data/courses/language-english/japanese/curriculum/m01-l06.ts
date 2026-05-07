import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — お名前は？",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「What's your name?」は名前を聞く基本表現。日本語の「お名前は？」と同じ場面で使います。",
    culturalNote: "日本では名字（姓）を先に名乗りますが、英語では下の名前（first name）を先に言うのが普通：「I'm Yuki Tanaka」。ビジネスでも初対面なら下の名前で十分 — 英語圏は早くファーストネームに移行する文化です。",
  },

  chunks: [
    { id: 'whats_your_name', target: "What's your name?", native: 'お名前は？ (Onamae wa?)', literal: 'What is your name?', emoji: '❓', phonetic: 'wuts-yor-NAYM', audioRef: null },
    { id: 'my_name_is', target: 'My name is ...', native: '私の名前は…です (Watashi no namae wa ... desu)', literal: 'My name is ...', emoji: '🪪', phonetic: 'may-NAYM-iz', audioRef: null },
    { id: 'nice_to_meet_you', target: 'Nice to meet you', native: 'はじめまして (Hajimemashite)', literal: '(I-am) nice to meet you', emoji: '🤝', phonetic: 'nais-too-MEET-yoo', audioRef: null },
  ],

  pattern: {
    name: 'Self-introduction',
    explanation: "「What's」は「What is」の短縮形。英語の語順は「My name is Yuki」で、日本語と逆 — 主語＋動詞＋名前。「Nice to meet you」は「はじめまして」と同じ役割で、初対面の決まり文句です。",
    examples: [
      { target: "What's your name?", native: 'お名前は？' },
      { target: "My name is Yuki.", native: '私はユキです。' },
      { target: "Nice to meet you, Yuki.", native: 'はじめまして、ユキさん。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: "What's your name?", right: 'お名前は？' },
      { left: 'My name is...', right: '私の名前は…' },
      { left: 'Nice to meet you', right: 'はじめまして' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'はじめまして', correct: ['Nice to meet you', 'nice to meet you'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: "What's ____ name?", options: ['your', 'you', 'my'], correct: 'your' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「What\'s your name?」 と聞かれたら？', options: [
      { text: 'My name is Yuki.', correct: true },
      { text: 'Yes, please.', correct: false },
      { text: "I'm fine.", correct: false },
    ], explanation: '名前を聞かれたら名前で答えます。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['Yuki', 'is', 'My', 'name'], correct: ['My', 'name', 'is', 'Yuki'], translation: '私はユキです' },
    { type: 'translate', instruction: '英語で', prompt: 'お名前は？', correct: ["What's your name?", "What's your name", "what's your name?"] },
  ],

  rwenDialogue: {
    intro: 'シドニー留学初日、シェアハウスで新しいフラットメイトに会います。',
    lines: [
      { speaker: 'npc', target: "Hi! I'm Liam. What's your name?", native: 'やあ！僕はリアム。お名前は？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Liam! My name is Yuki. Nice to meet you.", native: 'やあリアム！私はユキ。はじめまして。', correct: true, feedback: '完璧 — 名前を返して、「Nice to meet you」も付けました。' },
          { target: 'Tanaka.', native: '田中。', correct: false, feedback: '英語では下の名前（first name）を先に。「My name is Yuki」のほうが自然。' },
          { target: 'Yes.', native: 'はい。', correct: false, feedback: '「What\'s your name?」は名前を聞く質問。名前で答えます。' },
        ],
      },
      { speaker: 'npc', target: "Nice to meet you too, Yuki!", native: 'こちらこそ、ユキ！' },
      { speaker: 'rwen', rwenLine: '自己紹介クリア！下の名前を先に言うのが英語式です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'お名前は？ (英語で)', correct: ["What's your name?", "What's your name", "what's your name?"] },
      { prompt: 'はじめまして (英語で)', correct: ['Nice to meet you', 'nice to meet you'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'ペットや人形に向かって「Hi, my name is [your name]. Nice to meet you.」と練習してみてください。',
    rwenSignoff: 'Nice to meet you, my friend.',
  },

  phase8: {
    scenario: 'シドニー大学の新入生オリエンテーション。隣の学生が話しかけてきます。',
    rwenRole: 'Sophie — 19歳のオーストラリア人新入生、人懐っこい。',
    successCriteria: "User says 'My name is [first name]' (not last name first), uses 'Nice to meet you' on first meeting, keeps responses warm but brief.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
