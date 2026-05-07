import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: "What time? — 何時ですか？",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「What time is it?」と「It's seven o'clock」 — 時間の英語。",
    culturalNote: "日本語の「7時」と英語の「seven o'clock」は同じ。AM/PM の代わりに日本語は「午前／午後」を使います。",
  },

  chunks: [
    { id: 'what_time', target: 'What time is it?', native: '何時ですか？ (Nanji desu ka?)', literal: 'What time is it?', emoji: '⏰', phonetic: 'wat-tym-iz-it', audioRef: null },
    { id: 'seven_oclock', target: "It's seven o'clock", native: '7時です (Shichi-ji desu)', literal: "It is seven o'clock", emoji: '🕖', phonetic: 'its-SEH-vn-oh-klok', audioRef: null },
    { id: 'am_pm', target: 'A.M. / P.M.', native: '午前／午後 (Gozen / Gogo)', literal: 'AM / PM', emoji: '🌅', phonetic: 'ay-em / pee-em', audioRef: null },
  ],

  pattern: {
    name: 'Telling time (hours)',
    explanation: "「It's [number] o'clock」が時刻の基本形。AM（午前）/ PM（午後）を付けて区別。「o'clock」は省略可：「It's seven」でもOK。",
    examples: [
      { target: 'What time is it?', native: '何時ですか？' },
      { target: "It's seven A.M.", native: '午前7時。' },
      { target: "It's three P.M.", native: '午後3時。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'What time is it?', right: '何時ですか？' },
      { left: "Seven o'clock", right: '7時' },
      { left: 'A.M.', right: '午前' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '何時ですか？', correct: ['What time is it?', 'what time is it?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "It's seven ____.", options: ["o'clock", 'oclock', 'clock'], correct: "o'clock" },
    { type: 'multiple_choice', instruction: '正しい答え', question: '午後3時を英語で？', options: [
      { text: "It's three P.M.", correct: true },
      { text: 'Gogo three.', correct: false },
      { text: '15 hours.', correct: false },
    ], explanation: '英語は12時間制 + AM/PM が普通。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['time', 'is', 'What', 'it'], correct: ['What', 'time', 'is', 'it'], translation: '何時ですか？' },
    { type: 'translate', instruction: '英語で', prompt: '7時です', correct: ["It's seven o'clock", "It's seven", "It is seven o'clock"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの駅で、時間を聞きます。',
    lines: [
      { speaker: 'npc', target: "Excuse me, what time is it?", native: 'すみません、何時？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's three P.M.", native: '午後3時です。', correct: true, feedback: '完璧。' },
          { target: 'Three.', native: '三。', correct: false, feedback: '完全な文で：「It\'s three」。' },
          { target: 'Gogo san.', native: '午後三。', correct: false, feedback: '英語：「It\'s three P.M.」。' },
        ],
      },
      { speaker: 'npc', target: "Thanks!", native: 'ありがとう！' },
      { speaker: 'rwen', rwenLine: '時刻の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '何時ですか？ (英語で)', correct: ['What time is it?', 'what time is it?'] },
      { prompt: '7時です (英語で)', correct: ["It's seven o'clock", "It's seven"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '一日の時間を3つ英語で：「I wake up at 7 A.M.」「I have lunch at 12 P.M.」「I sleep at 11 P.M.」',
    rwenSignoff: "It's time to go. See you!",
  },

  phase8: {
    scenario: 'ロンドンの駅で時刻を聞く・伝える。',
    rwenRole: 'Stranger — 30歳のロンドン人、急いでいる。',
    successCriteria: "User says 'It's [number] o'clock' or 'It's [number] A.M./P.M.' clearly, uses 12-hour format with AM/PM.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
