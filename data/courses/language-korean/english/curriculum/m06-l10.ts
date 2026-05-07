import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-numbers-conversation',
  module: 6,
  lesson: 10,
  title: 'Numbers Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 cap. Café order with Native counters, payment in Sino won, time-and-date talk for a date set, age small talk in Native. All two systems running side-by-side.",
    culturalNote: "Korean numbers are the daily-life linchpin. Every transaction, every time set, every age question runs on the Sino/Native split. Today: a full Hongdae afternoon, all numbers live.",
  },

  chunks: [
    { id: 'review_sino', target: '오천 원', native: '5,000 won (Sino — money)', literal: '5-thousand won', emoji: '💰', phonetic: 'o-cheon won', audioRef: null },
    { id: 'review_native_count', target: '두 잔', native: 'Two cups (Native — counter)', literal: '2-cup-CL', emoji: '☕', phonetic: 'du jan', audioRef: null },
    { id: 'review_time', target: '오후 세 시', native: '3pm (Native hour)', literal: 'PM 3-hour', emoji: '🕒', phonetic: 'o-hu se si', audioRef: null },
  ],

  pattern: {
    name: 'Two systems, six categories',
    explanation: "Sino: money, dates, minutes, phone, addresses. Native: hours, ages, counters.",
    examples: [
      { target: '오천 원 (Sino)', native: 'Money' },
      { target: '세 시 (Native)', native: 'Hour' },
      { target: '서른 살 (Native)', native: 'Age' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match category to system', pairs: [
      { left: 'Money', right: 'Sino' },
      { left: 'Age', right: 'Native' },
      { left: 'Hours', right: 'Native' },
    ]},
    { type: 'multiple_choice', instruction: 'Best for "two coffees, 9,000 won"?', question: 'Pick the correct mixed reading', options: [
      { text: '커피 두 잔, 구천 원', correct: true },
      { text: '커피 이 잔, 아홉천 원', correct: false },
      { text: '커피 둘 잔, 구천 원', correct: false },
    ], explanation: 'Counter = Native (두). Money = Sino (구천). Native 2 shrinks before counter.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am 30 years old', correct: ['저는 서른 살이에요', 'jeoneun seoreun sarieyo'] },
    { type: 'fill_blank', instruction: 'Read 2:15pm', sentence: '오후 두 시 _____.', options: ['십오 분', '열다섯 분', '이오 분'], correct: '십오 분', context: 'Minutes = Sino.' },
    { type: 'build_sentence', instruction: 'Build "Three bottles of soju please"', words: ['주세요', '소주', '세 병'], correct: ['소주', '세 병', '주세요'], translation: 'Three bottles of soju please.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'May 6th', correct: ['오월 육일', 'owol yugil'] },
  ],

  rwenDialogue: {
    intro: "Hongdae afternoon. Café → bar → catching the train. Numbers everywhere.",
    lines: [
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Would you like to order?' },
      { speaker: 'user', userChoices: [
        { target: '커피 두 잔 주세요', native: 'Two coffees please', correct: true, feedback: 'Native + counter for the order.' },
        { target: '커피 이 잔 주세요', native: 'Sino counter (wrong)', correct: false, feedback: 'Counters take Native, not Sino.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Order first.' },
      ]},
      { speaker: 'npc', target: '구천 원입니다.', native: "9,000 won." },
      { speaker: 'user', userChoices: [
        { target: '카드로 할게요. 영수증 주세요', native: 'By card. Receipt please', correct: true, feedback: 'Card payment + receipt. Module 6 transaction full.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: '9,000 won is fine — just pay.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wait until you leave.' },
      ]},
      { speaker: 'npc', target: '몇 살이세요?', native: 'How old are you?' },
      { speaker: 'user', userChoices: [
        { target: '저는 서른 살이에요. 몇 살이세요?', native: "I'm 30. How old are you?", correct: true, feedback: 'Native age + bounce-back. Module 6 closed.' },
        { target: '저는 삼십 살이에요', native: 'Sino age (wrong)', correct: false, feedback: 'Age uses Native — 서른.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "Sino + Native + counters + payment + time + age — all two systems flowing together. Module 6 closed. Numbers fluent.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Two cups (counter)', correct: ['두 잔', 'du jan'] },
      { prompt: '5,000 won', correct: ['오천 원', 'ocheon won'] },
    ],
  },

  mission: {
    title: "Your Module 6 Mission",
    task: "Run a full Korean transaction in your head: order, price, payment, age question. Sino + Native, switching cleanly.",
    rwenSignoff: "Module 6 closed. Numbers run. Module 7 = food.",
  },

  phase8: {
    scenario: "Full Hongdae afternoon — order coffee, pay, set a meetup time, swap ages with a Korean acquaintance.",
    rwenRole: "Multiple — café barista, Korean acquaintance.",
    successCriteria: "User uses Sino for money/time-minutes/dates and Native for counters/hours/ages. Stays polite.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
