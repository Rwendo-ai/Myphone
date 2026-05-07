import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-day-month',
  module: 6,
  lesson: 7,
  title: 'Days & Months — Korean Calendar',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Months = Sino number + 월. January = 일월. December = 십이월. Days of week have unique words: 월요일 (Monday) through 일요일 (Sunday). Quick to learn, daily use.",
    culturalNote: "Korean dates are written year-month-day in Sino: 2026년 5월 6일 (i-cheon-i-sip-yuk-nyeon o-wol yug-il). Western order — but always Sino numbers + 년/월/일.",
  },

  chunks: [
    { id: 'wol', target: '___월', native: '___ month (Sino + 월)', literal: 'month-CL', emoji: '📅', phonetic: '___-wol', audioRef: null },
    { id: 'il', target: '___일', native: '___ day-of-month (Sino + 일)', literal: 'day-CL', emoji: '📆', phonetic: '___-il', audioRef: null },
    { id: 'yoil', target: '월화수목금토일', native: 'Mon Tue Wed Thu Fri Sat Sun', literal: 'days-of-week', emoji: '📅', phonetic: 'wol-hwa-su-mok-geum-to-il', audioRef: null },
  ],

  pattern: {
    name: 'Months + days = Sino + suffix',
    explanation: "월 (month) + 일 (day) take Sino numbers. Day-of-week names use the elemental cycle: 월(moon) 화(fire) 수(water) 목(wood) 금(metal/gold) 토(earth) 일(sun).",
    examples: [
      { target: '오월', native: 'May (5 + 월)' },
      { target: '오월 육일', native: 'May 6th' },
      { target: '월요일', native: 'Monday' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to day', pairs: [
      { left: '월요일', right: 'Monday' },
      { left: '금요일', right: 'Friday' },
      { left: '일요일', right: 'Sunday' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'May (month)', correct: ['오월', 'owol'] },
    { type: 'fill_blank', instruction: 'Birthday in Korean', sentence: '제 생일은 _____ 입니다.', options: ['오월 육일', '오 월 여섯 일', '다섯월 여섯일'], correct: '오월 육일', context: 'Sino + 월/일 — 5월 6일.' },
    { type: 'build_sentence', instruction: 'Build "Today is Friday"', words: ['금요일이에요', '오늘은'], correct: ['오늘은', '금요일이에요'], translation: 'Today is Friday.' },
    { type: 'multiple_choice', instruction: 'Best Korean for "December 25th"?', question: 'Pick correct date', options: [
      { text: '십이월 이십오일', correct: true },
      { text: '십이월 스물다섯일', correct: false },
      { text: '열둘월 이십오일', correct: false },
    ], explanation: '월/일 take Sino throughout. 스물다섯 (Native) does not pair with 일.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Sunday', correct: ['일요일', 'iryoil'] },
  ],

  rwenDialogue: {
    intro: "Korean friend asks when you arrived.",
    lines: [
      { speaker: 'npc', target: '언제 한국에 왔어요?', native: 'When did you come to Korea?' },
      { speaker: 'user', userChoices: [
        { target: '오월 육일에 왔어요', native: 'I came on May 6th', correct: true, feedback: 'Sino + 월/일 + 에 (time marker). Locked.' },
        { target: '다섯월 여섯일에 왔어요', native: 'Native (wrong)', correct: false, feedback: '월/일 take Sino, not Native.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 어제 왔어요? 환영합니다!', native: 'Ah, you came yesterday? Welcome!' },
      { speaker: 'rwen', rwenLine: 'Months and days = Sino. Days of week = unique elemental names.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'May 6th', correct: ['오월 육일', 'owol yugil'] },
      { prompt: 'Monday', correct: ['월요일', 'woryoil'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today's date in Korean. Day-of-week. Birthday. Three Korean dates.",
    rwenSignoff: "Korean calendar = Sino + suffix. Days = elements. Now you can schedule.",
  },

  phase8: {
    scenario: "Coordinating a meetup over KakaoTalk — you reference dates and days of the week.",
    rwenRole: "Friend — peer, polite.",
    successCriteria: "User reads dates correctly (Sino + 월/일). Names days of week. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
