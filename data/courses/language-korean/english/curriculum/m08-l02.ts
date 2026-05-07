import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-gada-oda',
  module: 8,
  lesson: 2,
  title: 'Gada / Oda — Go & Come',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "가다 (to go) and 오다 (to come) — direction verbs. Pair with 에 (to/at) marker. 학교에 가요 = I go to school. 집에 와요 = I come home.",
    culturalNote: "가다/오다 are the verb skeleton of half of daily Korean. Mastering 에 + place + 가요/와요 = enormous mileage with three syllables.",
  },

  chunks: [
    { id: 'gayo', target: '가요', native: 'go (polite)', literal: 'go-yo', emoji: '🚶', phonetic: 'ga-yo', audioRef: null },
    { id: 'wayo', target: '와요', native: 'come (polite)', literal: 'come-yo', emoji: '🚶‍♀️', phonetic: 'wa-yo', audioRef: null },
    { id: 'e', target: '에', native: 'to / at (location)', literal: 'LOC', emoji: '📍', phonetic: 'e', audioRef: null },
  ],

  pattern: {
    name: 'Place + 에 + 가요/와요',
    explanation: 'Place + 에 + verb. School + 에 + 가요 = go to school. 에 marks destination/location. (Different from 에서 — 에서 is from or at-where-you-act.)',
    examples: [
      { target: '학교에 가요', native: 'I go to school' },
      { target: '집에 와요', native: 'I come home' },
      { target: '카페에 가요', native: 'I go to the café' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to meaning', pairs: [
      { left: '가요', right: 'go (polite)' },
      { left: '와요', right: 'come (polite)' },
      { left: '에', right: 'to / at' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I go to school', correct: ['학교에 가요', '저는 학교에 가요', 'hakgyoe gayo'] },
    { type: 'fill_blank', instruction: 'Marker for destination', sentence: '카페_____ 가요.', options: ['에', '에서', '를'], correct: '에', context: '에 = to a destination.' },
    { type: 'build_sentence', instruction: 'Build "I come home"', words: ['와요', '집에'], correct: ['집에', '와요'], translation: 'I come home.' },
    { type: 'multiple_choice', instruction: '"I am going to Hongdae" — best phrasing?', question: 'Pick the natural Korean', options: [
      { text: '저는 홍대에 가요', correct: true },
      { text: '저는 홍대를 가요', correct: false },
      { text: '저는 홍대에서 가요', correct: false },
    ], explanation: '에 marks destination. 에서 marks origin or where you DO things.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I go to the café', correct: ['카페에 가요', 'kapee gayo'] },
  ],

  rwenDialogue: {
    intro: "Korean friend asks about your weekend plans.",
    lines: [
      { speaker: 'npc', target: '주말에 어디에 가요?', native: 'Where are you going on the weekend?' },
      { speaker: 'user', userChoices: [
        { target: '홍대에 가요', native: 'I go to Hongdae', correct: true, feedback: 'Place + 에 + 가요. Locked.' },
        { target: '홍대 가요', native: 'No marker', correct: false, feedback: '에 is needed for destination clarity.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 저도 홍대에 가요. 같이 가요!', native: "I'm going to Hongdae too. Let's go together!" },
      { speaker: 'rwen', rwenLine: "가요/와요 + 에 + place — your travel verb stack.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I go to school', correct: ['학교에 가요', '저는 학교에 가요', 'hakgyoe gayo'] },
      { prompt: 'I come home', correct: ['집에 와요', 'jibe wayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three places you go: work, café, gym. Build each with 에 + 가요.",
    rwenSignoff: "Direction verbs unlocked. Korean now travels with you.",
  },

  phase8: {
    scenario: "Korean friend asks about your weekend plans — multiple destinations.",
    rwenRole: "Korean friend — peer, polite.",
    successCriteria: "User uses [place]에 가요 / 와요 for at least 2 destinations. 에 marker is correct.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
