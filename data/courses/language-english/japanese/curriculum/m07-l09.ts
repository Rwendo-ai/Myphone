import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Hosting in English — 英語で接客',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Welcome」「Please, sit down」「Help yourself」 — 英語圏の人をおもてなしする時の表現。",
    culturalNote: "日本のおもてなしは「至れり尽くせり」が基本ですが、英語圏では「Help yourself」（ご自由にどうぞ）と相手に任せるのも親切とされます。",
  },

  chunks: [
    { id: 'welcome', target: 'Welcome', native: 'ようこそ (Youkoso)', literal: 'Welcome', emoji: '🤗', phonetic: 'WEL-kum', audioRef: null },
    { id: 'sit_down', target: 'Please, sit down', native: 'お座りください (Osuwari kudasai)', literal: 'Please sit down', emoji: '🪑', phonetic: 'PLEEZ-SIT-down', audioRef: null },
    { id: 'help_yourself', target: 'Help yourself', native: 'ご自由にどうぞ (Gojiyuu ni douzo)', literal: 'Help yourself', emoji: '🍽️', phonetic: 'HELP-yor-SELF', audioRef: null },
  ],

  pattern: {
    name: 'Hosting phrases',
    explanation: "「Welcome」+ 場所：「Welcome to my home」。「Please + 動詞」で柔らかい命令：「Please sit down」「Please come in」。「Help yourself」は食べ物に対して使うと自然。",
    examples: [
      { target: 'Welcome to my home!', native: 'ようこそ我が家へ！' },
      { target: 'Please, sit down. Make yourself comfortable.', native: 'お座りください。くつろいで。' },
      { target: 'Help yourself to the food.', native: '食べ物はご自由にどうぞ。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Welcome', right: 'ようこそ' },
      { left: 'Please, sit down', right: 'お座りください' },
      { left: 'Help yourself', right: 'ご自由にどうぞ' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'ようこそ', correct: ['Welcome', 'welcome'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Help ____ to the food.', options: ['yourself', 'myself', 'you'], correct: 'yourself' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '英語のお客様への自然な接客は？', options: [
      { text: 'Welcome! Please sit down. Help yourself.', correct: true },
      { text: 'Sit. Eat.', correct: false },
      { text: 'Hai dozo.', correct: false },
    ], explanation: '英語では客にも選択を与えるのが親切。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['yourself', 'Help'], correct: ['Help', 'yourself'], translation: 'ご自由にどうぞ' },
    { type: 'translate', instruction: '英語で', prompt: 'お座りください', correct: ['Please, sit down', 'Please sit down', 'Sit down, please'] },
  ],

  rwenDialogue: {
    intro: '東京の自宅で、海外からの友達を迎えます。',
    lines: [
      { speaker: 'npc', target: "Hi Yuki! Thanks for inviting me.", native: 'やあユキ！招待ありがとう。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Welcome! Please, come in. Sit down — help yourself to the snacks.", native: 'ようこそ！どうぞ。お座りください — お菓子はご自由に。', correct: true, feedback: '完璧な英語のもてなし。' },
          { target: 'Come.', native: '来て。' , correct: false, feedback: '完全な文で。' },
          { target: 'Youkoso.', native: 'ようこそ。', correct: false, feedback: '英語：「Welcome!」。' },
        ],
      },
      { speaker: 'npc', target: "Thanks! Your home is lovely.", native: 'ありがとう！素敵なお家。' },
      { speaker: 'rwen', rwenLine: 'もてなしの英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'ようこそ (英語で)', correct: ['Welcome', 'welcome'] },
      { prompt: 'ご自由にどうぞ (英語で)', correct: ['Help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空のお客さん相手に：「Welcome」「Please sit down」「Help yourself」を順に言う。',
    rwenSignoff: 'Welcome to the next lesson!',
  },

  phase8: {
    scenario: '東京の自宅に海外の友人を初めて招き、英語でもてなす。',
    rwenRole: 'Sophie — 30歳のロンドン人、初訪日。',
    successCriteria: "User says 'Welcome!' on arrival, invites with 'Please sit down' or 'Please come in', offers 'Help yourself' for food, doesn't over-serve in Japanese way.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
