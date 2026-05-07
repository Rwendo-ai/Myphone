import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-time',
  module: 6,
  lesson: 6,
  title: 'Time — Hours & Minutes',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Telling time = Native HOURS + Sino MINUTES. 3시 45분 = 세 시 사십오 분 (3 o'clock 45 minutes). The mixed system trips learners — but lock the rule and it sticks.",
    culturalNote: "Korea uses 24-hour time in writing/transit (KTX, subway) but speaks in 12-hour with 오전 (morning) / 오후 (afternoon). 새벽 (dawn / very late night) is its own poetic register.",
  },

  chunks: [
    { id: 'si', target: '시', native: 'Hour (takes Native)', literal: 'hour-CL', emoji: '🕐', phonetic: 'si', audioRef: null },
    { id: 'bun', target: '분', native: 'Minute (takes Sino)', literal: 'minute-CL', emoji: '⏱️', phonetic: 'bun', audioRef: null },
    { id: 'myeotsi', target: '몇 시예요?', native: 'What time is it?', literal: 'how-many hour-is?', emoji: '⏰', phonetic: 'myeot si-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'Native HOUR + Sino MINUTE',
    explanation: "Hours: Native (한 시, 두 시, 세 시 ...). Minutes: Sino (일 분, 이 분, 십오 분, 삼십 분).",
    examples: [
      { target: '한 시', native: '1 o\'clock' },
      { target: '두 시 삼십 분', native: '2:30' },
      { target: '오후 세 시', native: '3pm' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match time phrase to meaning', pairs: [
      { left: '한 시', right: '1 o\'clock' },
      { left: '삼십 분', right: '30 minutes' },
      { left: '오전 / 오후', right: 'AM / PM' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: '3 o\'clock', correct: ['세 시', 'se si'] },
    { type: 'fill_blank', instruction: 'Read 2:15 in Korean', sentence: '두 시 _____.', options: ['십오 분', '열다섯 분', '이오 분'], correct: '십오 분', context: 'Minutes are Sino — 십오 = 15.' },
    { type: 'build_sentence', instruction: 'Build "It is 7:30"', words: ['삼십 분이에요', '일곱 시'], correct: ['일곱 시', '삼십 분이에요'], translation: 'It is 7:30.' },
    { type: 'multiple_choice', instruction: '"2pm" — pick the natural Korean', question: 'Pick AM/PM correctly', options: [
      { text: '오후 두 시', correct: true },
      { text: '오전 두 시', correct: false },
      { text: '저녁 두 시', correct: false },
    ], explanation: '오후 = afternoon/PM. 오전 = AM. 저녁 = evening (later).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What time is it?', correct: ['몇 시예요?', 'myeot siyeyo'] },
  ],

  rwenDialogue: {
    intro: "Setting a meeting time over KakaoTalk.",
    lines: [
      { speaker: 'npc', target: '몇 시에 만날까요?', native: 'What time shall we meet?' },
      { speaker: 'user', userChoices: [
        { target: '오후 세 시 어때요?', native: 'How about 3pm?', correct: true, feedback: '오후 (PM) + 세 시 (Native 3 o\'clock). Mixed system locked.' },
        { target: '삼 시 어때요?', native: 'Sino 3 o\'clock (wrong)', correct: false, feedback: 'Hours are Native — 세 시, not 삼 시.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '좋아요! 오후 세 시에 봐요!', native: 'Sounds good! See you at 3pm!' },
      { speaker: 'rwen', rwenLine: 'Native hours + Sino minutes. AM/PM with 오전/오후. Time is now reachable.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '3 o\'clock', correct: ['세 시', 'se si'] },
      { prompt: '15 minutes', correct: ['십오 분', 'sibo bun'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three times: now, lunch, bedtime. Read each in Korean. Native hour + Sino minute.",
    rwenSignoff: "Mixed system — Native + Sino in one phrase. Korean clock is yours.",
  },

  phase8: {
    scenario: "KakaoTalk back-and-forth: setting a meeting time, asking what time it is, confirming.",
    rwenRole: "Korean friend — peer, polite.",
    successCriteria: "User uses Native hour + Sino minute. Adds 오전/오후 for AM/PM. Reads at least two times correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
