import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-haengbok',
  module: 10,
  lesson: 4,
  title: 'Haengbok — Joy & Gratitude',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "행복 (happiness), 즐거워요 (joyful), 고마워요 (thankful — informal). The bright side of the emotional spectrum.",
    culturalNote: "Korean has multiple flavors of joy: 행복 (happiness, lifelong feel), 즐거움 (fun, momentary), 기쁨 (joy/delight, surge). Pick by intensity and timeframe.",
  },

  chunks: [
    { id: 'haengbok', target: '행복해요', native: "I'm happy", literal: 'happiness-do-yo', emoji: '😄', phonetic: 'haeng-bo-kae-yo', audioRef: null },
    { id: 'jeulgeoweoyo', target: '즐거워요', native: "It's fun / I'm enjoying", literal: 'fun-yo', emoji: '🎉', phonetic: 'jeul-geo-wo-yo', audioRef: null },
    { id: 'gippeoyo', target: '기뻐요', native: "I'm glad / delighted", literal: 'glad-yo', emoji: '🌟', phonetic: 'gi-ppeo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Three flavors of positive',
    explanation: "행복 = lifelong happy. 즐거움 = fun moment. 기쁨 = surge of delight (often at news).",
    examples: [
      { target: '저는 행복해요', native: "I'm happy (overall)" },
      { target: '오늘 너무 즐거워요', native: 'Today is so fun' },
      { target: '결혼 소식 듣고 너무 기뻐요', native: "Hearing your marriage news, I'm delighted" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to flavor', pairs: [
      { left: '행복해요', right: 'Happy (overall)' },
      { left: '즐거워요', right: 'Fun (moment)' },
      { left: '기뻐요', right: 'Delighted (news)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'm happy (overall)", correct: ['행복해요', '저는 행복해요', 'haengbokhaeyo'] },
    { type: 'fill_blank', instruction: 'Today is fun', sentence: '오늘 너무 _____.', options: ['즐거워요', '슬퍼요', '비싸요'], correct: '즐거워요', context: 'Fun moment.' },
    { type: 'build_sentence', instruction: 'Build "Hearing the news, I\'m delighted"', words: ['기뻐요', '소식 듣고'], correct: ['소식 듣고', '기뻐요'], translation: 'Hearing the news, I\'m delighted.' },
    { type: 'multiple_choice', instruction: 'Friend just got engaged. Best Korean reaction?', question: 'Pick the right flavor', options: [
      { text: '너무 기뻐요!', correct: true },
      { text: '슬퍼요', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: '기뻐요 = surge of delight at news. Perfect fit.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's fun", correct: ['즐거워요', 'jeulgeoweoyo'] },
  ],

  rwenDialogue: {
    intro: "Friend shares great news.",
    lines: [
      { speaker: 'npc', target: '저 결혼해요!', native: 'I\'m getting married!' },
      { speaker: 'user', userChoices: [
        { target: '와! 너무 기뻐요! 축하해요!', native: 'Wow! So delighted! Congratulations!', correct: true, feedback: '기뻐요 + 축하해요 — perfect surge of joy.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '슬퍼요', native: "I'm sad", correct: false, feedback: 'Wrong emotion.' },
      ]},
      { speaker: 'rwen', rwenLine: "기쁨 / 즐거움 / 행복 — three Korean joys, three timeframes.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I'm happy (overall)", correct: ['행복해요', '저는 행복해요', 'haengbokhaeyo'] },
      { prompt: "I'm delighted (at news)", correct: ['기뻐요', 'gippeoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three positive moments today. Match each to 행복/즐거움/기쁨. Pick the right flavor.",
    rwenSignoff: "Joy in three flavors. Korean has the precision.",
  },

  phase8: {
    scenario: "Multiple positive moments — friend's news, fun day, lifelong gratitude. You react with the right flavor each time.",
    rwenRole: "Multiple — friend, family, mentor.",
    successCriteria: "User picks 행복/즐거움/기쁨 by context. Pairs with 축하해요 for news.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
