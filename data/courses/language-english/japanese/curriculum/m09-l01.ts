import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — 場所を尋ねる',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Where is the bank?」「Excuse me, the toilets?」 — 旅先で必須の質問。",
    culturalNote: "海外では迷ったら遠慮せず聞くのが鉄則。日本人は遠慮しがちですが、現地の人はたいてい親切に教えてくれます。",
  },

  chunks: [
    { id: 'where_is_the_bank', target: 'Where is the bank?', native: '銀行はどこですか？ (Ginkou wa doko desu ka?)', literal: 'Where is the bank?', emoji: '🏦', phonetic: 'WHAIR-iz-thuh-BANK', audioRef: null },
    { id: 'excuse_me_toilets', target: 'Excuse me, the toilets?', native: 'すみません、トイレは？ (Sumimasen, toire wa?)', literal: 'Excuse me, the toilets?', emoji: '🙏', phonetic: 'ek-SKYOOZ-mee-thuh-TOY-lets', audioRef: null },
    { id: 'over_there', target: 'Over there', native: 'あちらです (Achira desu)', literal: 'Over there', emoji: '👉', phonetic: 'OH-ver-THAIR', audioRef: null },
  ],

  pattern: {
    name: 'Where is + the + place',
    explanation: "場所を聞く基本：「Excuse me」+「Where is the [場所]?」。建物・施設には「the」を付けます。短縮形「The toilets?」も口語OK。",
    examples: [
      { target: 'Where is the bank?', native: '銀行はどこ？' },
      { target: 'Where is the station?', native: '駅はどこ？' },
      { target: "It's over there.", native: 'あちらにあります。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Where is the bank?', right: '銀行はどこ？' },
      { left: 'Excuse me, the toilets?', right: 'すみません、トイレは？' },
      { left: 'Over there', right: 'あちらです' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '銀行はどこですか？', correct: ['Where is the bank?', 'where is the bank?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Where ____ the bank?', options: ['is', 'are', 'do'], correct: 'is' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '海外で道を聞き始める時の自然な英語は？', options: [
      { text: 'Excuse me, where is...?', correct: true },
      { text: 'Hello! Where?', correct: false },
      { text: 'Sumimasen.', correct: false },
    ], explanation: '「Excuse me」で注意を引いてから質問。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['bank', 'the', 'is', 'Where'], correct: ['Where', 'is', 'the', 'bank'], translation: '銀行はどこ？' },
    { type: 'translate', instruction: '英語で', prompt: 'あちらです', correct: ['Over there', 'over there', "It's over there"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンで両替所を探しています。',
    lines: [
      { speaker: 'npc', target: 'Hi, can I help?', native: 'やあ、お手伝いしましょうか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the bank?', native: 'すみません、銀行はどこですか？', correct: true, feedback: '完璧。' },
          { target: 'Bank?', native: '銀行？', correct: false, feedback: '完全な質問で。' },
          { target: 'Ginkou doko?', native: '銀行どこ？', correct: false, feedback: '英語：「Where is the bank?」。' },
        ],
      },
      { speaker: 'npc', target: "It's over there, on the corner.", native: 'あちら、角にあります。' },
      { speaker: 'rwen', rwenLine: '場所質問マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '銀行はどこですか？ (英語で)', correct: ['Where is the bank?', 'where is the bank?'] },
      { prompt: 'あちらです (英語で)', correct: ['Over there', "It's over there"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '5つの場所で「Where is the __?」を声に出して練習。',
    rwenSignoff: 'Where am I going? See you next!',
  },

  phase8: {
    scenario: 'ロンドンの繁華街で銀行・駅・トイレを探す。',
    rwenRole: 'Sam — 通行人、親切。',
    successCriteria: "User starts with 'Excuse me', uses 'Where is the [place]?' with 'the', listens for 'over there' / direction words.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
