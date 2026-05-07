import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-sino-vs-native',
  module: 6,
  lesson: 1,
  title: 'Two Number Systems — Sino-Korean vs Native',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Module 6: numbers. Plot twist — Korean has TWO number systems. Sino-Korean (일, 이, 삼) for money, time minutes, dates, phone numbers. Native Korean (하나, 둘, 셋) for ages, hours, counting things. You'll need both.",
    culturalNote: "The split sounds insane until you internalize it. Money = Sino. Hours = Native. 3 o'clock 3 minutes = native 3 시 + Sino 3 분. K-drama characters say 세 시 (3 o'clock) all the time — 시 takes Native.",
  },

  chunks: [
    { id: 'sino_set', target: '일 / 이 / 삼', native: '1 / 2 / 3 (Sino — money, dates, minutes)', literal: 'Sino 1-2-3', emoji: '🔢', phonetic: 'il / i / sam', audioRef: null },
    { id: 'native_set', target: '하나 / 둘 / 셋', native: '1 / 2 / 3 (Native — counting, hours, ages)', literal: 'Native 1-2-3', emoji: '✋', phonetic: 'ha-na / dul / set', audioRef: null },
    { id: 'sigan', target: '시 / 분', native: 'hour / minute (시 takes Native, 분 takes Sino)', literal: 'hour / minute', emoji: '🕒', phonetic: 'si / bun', audioRef: null },
  ],

  pattern: {
    name: 'Which system for which job',
    explanation: "Sino-Korean: money, dates, minutes, phone, addresses. Native: hours, ages, counting items.",
    examples: [
      { target: '5,000원 (오천 원)', native: 'Sino — money' },
      { target: '3시 (세 시)', native: 'Native — hours' },
      { target: '서른 살 (30살)', native: 'Native — age' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match number to system used', pairs: [
      { left: 'Money', right: 'Sino-Korean' },
      { left: 'Hours', right: 'Native Korean' },
      { left: 'Age', right: 'Native Korean' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (Sino)', prompt: '1 (Sino)', correct: ['일', 'il'] },
    { type: 'fill_blank', instruction: 'Pick system for "3 o\'clock"', sentence: '_____ 시예요.', options: ['세', '삼', '셋'], correct: '세', context: '시 (hour) takes Native — and Native 3 changes form before 시 (셋 → 세).' },
    { type: 'build_sentence', instruction: 'Build "I am 30 years old" (Native age)', words: ['살이에요', '서른', '저는'], correct: ['저는', '서른', '살이에요'], translation: 'I am 30 years old.' },
    { type: 'multiple_choice', instruction: 'Which system for the price 5,000원?', question: 'Pick the system', options: [
      { text: 'Sino-Korean: 오천 원', correct: true },
      { text: 'Native Korean: 다섯천 원', correct: false },
      { text: 'Either works', correct: false },
    ], explanation: 'Money is always Sino. 다섯천 is wrong — 천 (thousand) is Sino-only territory.' },
    { type: 'translate', instruction: 'Type in Korean (Native)', prompt: '1 (Native)', correct: ['하나', 'hana'] },
  ],

  rwenDialogue: {
    intro: "Rwen drills which system to use.",
    lines: [
      { speaker: 'rwen', rwenLine: '"It costs 3,000 won." Which Korean number?' },
      { speaker: 'user', userChoices: [
        { target: '삼천 원 (Sino)', native: 'Sino-Korean for money', correct: true, feedback: 'Money = Sino. Lock it.' },
        { target: '셋천 원 (Native)', native: 'Native for money (wrong)', correct: false, feedback: 'Native does not pair with 천/만. Money is Sino territory.' },
        { target: '하나천 원 (Native)', native: 'Native for money (wrong)', correct: false, feedback: 'Same issue — money is always Sino.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Sino for money/dates/minutes. Native for hours/ages/counting. Two tools, two jobs.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '1 (Sino-Korean)', correct: ['일', 'il'] },
      { prompt: '1 (Native Korean)', correct: ['하나', 'hana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at a price (Sino), a clock (Native hours), and your age (Native). Three numbers, two systems. Practice the split.",
    rwenSignoff: "Two systems is annoying for a week, then automatic.",
  },

  phase8: {
    scenario: "Rwen drills you on picking Sino vs Native across money, hours, ages, dates, and counting.",
    rwenRole: "Rwen — number-system coach.",
    successCriteria: "User picks Sino for money/dates/minutes and Native for hours/ages/counting in 4+ scenarios.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
