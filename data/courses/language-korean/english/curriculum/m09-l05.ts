import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-eolma-georeoyo',
  module: 9,
  lesson: 5,
  title: 'Eolma Georyeoyo? — How Long Does It Take?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Travel time question: 얼마나 걸려요? — how long does it take? Answer in 시간 (hours) and 분 (minutes). Sino numbers all.",
    culturalNote: "Koreans estimate travel time precisely (Naver Map and KakaoMap dominate). Asking 얼마나 걸려요? gets a real answer, not a vague one.",
  },

  chunks: [
    { id: 'eolmana', target: '얼마나 걸려요?', native: 'How long does it take?', literal: 'how-much take-yo?', emoji: '⏳', phonetic: 'eol-ma-na geol-ryeo-yo', audioRef: null },
    { id: 'siganbun', target: '___시간 ___분', native: '___ hours ___ minutes', literal: 'hour minute', emoji: '⏰', phonetic: '___-si-gan ___-bun', audioRef: null },
    { id: 'jjeumeu', target: '___쯤', native: 'about ___', literal: 'approximately', emoji: '~', phonetic: '___-jjeum', audioRef: null },
  ],

  pattern: {
    name: 'Time duration in Sino + 시간/분',
    explanation: "시간 (hour-duration) is different from 시 (clock-hour). 시간 takes Sino: 한 시간 (one hour) — wait, actually duration also uses Native for hours. Sino for minutes.",
    examples: [
      { target: '한 시간 걸려요', native: 'It takes 1 hour' },
      { target: '삼십 분 걸려요', native: 'It takes 30 minutes' },
      { target: '두 시간쯤 걸려요', native: 'About 2 hours' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '얼마나 걸려요?', right: 'How long does it take?' },
      { left: '시간', right: 'Hour (duration)' },
      { left: '쯤', right: 'About / approximately' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'How long does it take?', correct: ['얼마나 걸려요?', 'eolmana georyeoyo'] },
    { type: 'fill_blank', instruction: 'About 30 minutes', sentence: '삼십 분_____ 걸려요.', options: ['쯤', '에', '를'], correct: '쯤', context: 'Approximation marker.' },
    { type: 'build_sentence', instruction: 'Build "It takes about 2 hours"', words: ['두 시간쯤', '걸려요'], correct: ['두 시간쯤', '걸려요'], translation: 'It takes about 2 hours.' },
    { type: 'multiple_choice', instruction: 'Best response if it takes 1 hour 30 minutes?', question: 'Pick the right Korean', options: [
      { text: '한 시간 삼십 분 걸려요', correct: true },
      { text: '하나 시간 삼십 분 걸려요', correct: false },
      { text: '일 시간 30분 걸려요', correct: false },
    ], explanation: 'Hours = Native shrunk (한). Minutes = Sino (삼십).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: '30 minutes', correct: ['삼십 분', 'samsip bun'] },
  ],

  rwenDialogue: {
    intro: "Subway helper estimates your trip.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '홍대까지 얼마나 걸려요?', native: 'How long to Hongdae?', correct: true, feedback: 'Standard travel-time ask.' },
        { target: '홍대 비싸요?', native: 'Is it expensive?', correct: false, feedback: 'Wrong question.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '사십 분쯤 걸려요.', native: 'About 40 minutes.' },
      { speaker: 'rwen', rwenLine: "얼마나 걸려요? + 시간/분 — travel time unlocked.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How long does it take?', correct: ['얼마나 걸려요?', 'eolmana georyeoyo'] },
      { prompt: 'About 30 minutes', correct: ['삼십 분쯤', 'samsip bunjjeum'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three travel times in your head. Build each: 얼마나 걸려요? → time + 걸려요.",
    rwenSignoff: "Time of travel = your trip's spine. Now you can ask.",
  },

  phase8: {
    scenario: "At a Seoul subway station, asking how long it takes to get to Hongdae.",
    rwenRole: "Helper — 40s, kind.",
    successCriteria: "User asks 얼마나 걸려요?, understands answer in 시간/분, thanks them.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
