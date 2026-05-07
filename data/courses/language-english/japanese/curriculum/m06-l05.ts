import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Half past, quarter to — 分の英語',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Half past」「Quarter to」 — 英語独特の時刻表現。",
    culturalNote: "日本語は「2時30分」「8時45分」と単純ですが、英語では「Half past two」（2時半）「Quarter to nine」（8時45分＝9時の15分前）と表現します。",
  },

  chunks: [
    { id: 'half_past', target: 'Half past two', native: '2時半 (Niji-han)', literal: 'Half past two = 2:30', emoji: '🕝', phonetic: 'haf-PAST-too', audioRef: null },
    { id: 'quarter_to', target: 'Quarter to nine', native: '8時45分 (Hachi-ji yonjuu-go-fun)', literal: 'Quarter to nine = 8:45', emoji: '🕘', phonetic: 'KWOR-ter-too-nyn', audioRef: null },
    { id: 'five_past', target: 'Five past six', native: '6時5分 (Roku-ji go-fun)', literal: 'Five past six = 6:05', emoji: '🕕', phonetic: 'fyv-past-siks', audioRef: null },
  ],

  pattern: {
    name: 'Half / Quarter / Past / To',
    explanation: "Half past = 30分過ぎ（2:30 = half past two）。Quarter past = 15分過ぎ。Quarter to = 15分前（8:45 = quarter to nine）。Five past = 5分過ぎ。Ten to = 10分前。",
    examples: [
      { target: 'Half past two = 2:30', native: '2時半' },
      { target: 'Quarter to nine = 8:45', native: '9時15分前 = 8:45' },
      { target: 'Five past six = 6:05', native: '6時5分' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Half past two', right: '2時半' },
      { left: 'Quarter to nine', right: '8時45分' },
      { left: 'Five past six', right: '6時5分' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '2時半', correct: ['Half past two', 'half past two'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "It's quarter ____ nine.", options: ['to', 'past', 'at'], correct: 'to' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '8:45 を英語で？', options: [
      { text: 'Quarter to nine', correct: true },
      { text: 'Quarter past nine', correct: false },
      { text: 'Half past eight', correct: false },
    ], explanation: '15分前 = quarter to + 次の時刻。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['two', 'past', 'half'], correct: ['half', 'past', 'two'], translation: '2時半' },
    { type: 'translate', instruction: '英語で', prompt: '6時5分', correct: ['Five past six', 'five past six'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの友達と待ち合わせの時間調整。',
    lines: [
      { speaker: 'npc', target: "Let's meet at half past two.", native: '2時半に会おう。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Half past two — that's 2:30. See you then!", native: '2時半 — 2:30ね。また後で！', correct: true, feedback: '完璧 — 確認も。' },
          { target: '14:30?', native: '14:30？', correct: false, feedback: '英語ではAM/PMで言うのが自然 — 「2:30 P.M.」。' },
          { target: 'Half two?', native: '半二？', correct: false, feedback: '「Half past two」が標準。' },
        ],
      },
      { speaker: 'npc', target: "Yes, see you at the café.", native: 'カフェで会おう。' },
      { speaker: 'rwen', rwenLine: '時刻の英語マスター！half past / quarter to が使えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '2時半 (英語で)', correct: ['Half past two', 'half past two', "2:30"] },
      { prompt: '8時45分 (英語で)', correct: ['Quarter to nine', 'quarter to nine'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今の時刻を英語で言う：「half past」「quarter to」を使ってみる。',
    rwenSignoff: "Half past time to go. See you!",
  },

  phase8: {
    scenario: 'ロンドンで友人と待ち合わせの時間決め。',
    rwenRole: 'Sophie — 25歳のロンドン人、時間に正確。',
    successCriteria: "User uses 'half past', 'quarter to', 'quarter past', 'five past' for non-round times, can convert to/from digital format when needed.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
