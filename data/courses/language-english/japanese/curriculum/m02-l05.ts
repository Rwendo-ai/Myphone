import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — わかりません",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「わかりません」を英語で言えれば、コミュニケーションは続けられます。「I don't understand」を恐れずに使いましょう。",
    culturalNote: "日本人はわからない時に黙ってうなずいてしまいがちですが、英語圏では「I don't understand」「Could you repeat?」と素直に聞き返すのが普通。それで失礼にはなりません。",
  },

  chunks: [
    { id: 'i_dont_understand', target: "I don't understand", native: 'わかりません (Wakarimasen)', literal: 'I do-not understand', emoji: '🤷', phonetic: 'ay-DOHNT-un-der-STAND', audioRef: null },
    { id: 'repeat_please', target: 'Repeat, please', native: 'もう一度お願いします (Mou ichido onegaishimasu)', literal: 'Repeat please', emoji: '🔁', phonetic: 'ree-PEET-PLEEZ', audioRef: null },
    { id: 'what_did_you_say', target: 'What did you say?', native: '何と言いましたか？ (Nan to iimashita ka?)', literal: 'What did you say? (past)', emoji: '❓', phonetic: 'WHUT-did-yoo-SAY', audioRef: null },
  ],

  pattern: {
    name: 'Negative + past question',
    explanation: "「don't」は「do not」の短縮形。否定文は「don't + 動詞」。「What did you say?」は過去形 — 「say」が「said」に変わるところに注目。",
    examples: [
      { target: "I don't understand.", native: 'わかりません。' },
      { target: "Could you repeat that?", native: 'もう一度お願いします。' },
      { target: 'What did you say?', native: '何と言いましたか？' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I don't understand", right: 'わかりません' },
      { left: 'Repeat, please', right: 'もう一度お願いします' },
      { left: 'What did you say?', right: '何と言いましたか？' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'わかりません', correct: ["I don't understand", "i don't understand", 'I do not understand'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I ____ understand.", options: ["don't", 'no', 'not'], correct: "don't" },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'わからない時、英語圏での自然な反応は？', options: [
      { text: "Could you repeat, please?", correct: true },
      { text: '*nods silently*', correct: false },
      { text: 'Yes, yes.', correct: false },
    ], explanation: '黙ってうなずくより、素直に聞き返すのが英語式コミュニケーション。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ["don't", 'I', 'understand'], correct: ['I', "don't", 'understand'], translation: 'わかりません' },
    { type: 'translate', instruction: '英語で', prompt: 'もう一度お願いします', correct: ['Repeat, please', 'Could you repeat, please?', 'Please repeat'] },
  ],

  rwenDialogue: {
    intro: 'ニューヨークの早口のタクシー運転手と会話。',
    lines: [
      { speaker: 'npc', target: "So-where-ya-headed?-Times-Square-or-Penn-Station?", native: 'どこ行く？タイムズスクエア？ペンステーション？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: 'すみません、わかりません。ゆっくりお願いします。', correct: true, feedback: '完璧 — 素直に聞き返すのが正解。' },
          { target: 'Yes.', native: 'はい。', correct: false, feedback: 'わからないまま「Yes」と言うのは危険。聞き返しましょう。' },
          { target: '*silent nod*', native: '*無言でうなずく*', correct: false, feedback: '英語圏では聞き返すのが普通。失礼ではありません。' },
        ],
      },
      { speaker: 'npc', target: 'Sorry. Where. Are. You. Going.', native: 'ごめん。どこ。に。行く。' },
      { speaker: 'rwen', rwenLine: '聞き返しマスター！黙るより聞き返すのが英語の流儀です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'わかりません (英語で)', correct: ["I don't understand", 'I do not understand'] },
      { prompt: 'もう一度お願いします (英語で)', correct: ['Repeat, please', 'Could you repeat?'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'わからない時に黙らずに「Sorry, I don\'t understand. Could you repeat?」と言う練習を。',
    rwenSignoff: "I'll always repeat for you. See you soon.",
  },

  phase8: {
    scenario: 'NYのタクシーで早口の運転手と話を続ける練習。',
    rwenRole: 'Tony — 50代のNYタクシー運転手、ものすごい早口。',
    successCriteria: "User says 'I don't understand' or 'Could you repeat?' when stuck (NOT silently nodding), uses 'Slowly, please' to manage pace, stays engaged in conversation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
