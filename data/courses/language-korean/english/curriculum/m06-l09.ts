import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-age-counted',
  module: 6,
  lesson: 9,
  title: 'Saying Your Age — Native Numbers + 살',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ages use Native numbers + 살. 1 살 = 한 살. 30 살 = 서른 살. Tens-Native: 스물 (20), 서른 (30), 마흔 (40), 쉰 (50), 예순 (60). Sounds wild but it's a small set.",
    culturalNote: "Most under-30 Koreans now use international age (만 나이). Older generations and casual conversation often still use Korean age (+1). When unsure, give both.",
  },

  chunks: [
    { id: 'sal', target: '___살', native: '___ years old (Native + 살)', literal: 'years-CL', emoji: '🎂', phonetic: '___-sal', audioRef: null },
    { id: 'tens_native', target: '스물 / 서른 / 마흔', native: '20 / 30 / 40 (Native tens)', literal: 'Native-tens', emoji: '🔟', phonetic: 'seu-mul / seo-reun / ma-heun', audioRef: null },
    { id: 'manage', target: '만 나이', native: 'International age', literal: 'full-age', emoji: '🌍', phonetic: 'man na-i', audioRef: null },
  ],

  pattern: {
    name: 'Native tens + Native units',
    explanation: "Native tens (스물 30: 서른, 40: 마흔, 50: 쉰, 60: 예순, 70: 일흔, 80: 여든, 90: 아흔). Combine: 스물 다섯 = 25, 서른 셋 = 33.",
    examples: [
      { target: '스물 다섯 살', native: '25 years old' },
      { target: '서른 살', native: '30 years old' },
      { target: '마흔 두 살', native: '42 years old' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Native tens to value', pairs: [
      { left: '스물', right: '20' },
      { left: '서른', right: '30' },
      { left: '마흔', right: '40' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am 30 years old', correct: ['저는 서른 살이에요', 'jeoneun seoreun sarieyo'] },
    { type: 'fill_blank', instruction: 'Read 25 years old', sentence: '_____ 살이에요.', options: ['스물 다섯', '이십오', '스물 오'], correct: '스물 다섯', context: 'Age = Native tens + Native unit.' },
    { type: 'build_sentence', instruction: 'Build "I am 42 years old"', words: ['살이에요', '저는', '마흔 두'], correct: ['저는', '마흔 두', '살이에요'], translation: 'I am 42 years old.' },
    { type: 'multiple_choice', instruction: 'Best for "I am 50 years old"?', question: 'Pick the natural form', options: [
      { text: '저는 쉰 살이에요', correct: true },
      { text: '저는 오십 살이에요', correct: false },
      { text: '저는 다섯십 살이에요', correct: false },
    ], explanation: 'Age = Native. 쉰 = Native 50. 오십 is Sino 50 (used for years/dates, not 살).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am 25 years old', correct: ['저는 스물 다섯 살이에요', 'jeoneun seumul daseot sarieyo'] },
  ],

  rwenDialogue: {
    intro: "Korean coworker asks your age.",
    lines: [
      { speaker: 'npc', target: '몇 살이세요?', native: 'How old are you?' },
      { speaker: 'user', userChoices: [
        { target: '저는 서른 살이에요', native: 'I am 30', correct: true, feedback: 'Native + 살 — clean.' },
        { target: '저는 삼십 살이에요', native: 'Sino + 살 (wrong)', correct: false, feedback: 'Age uses Native — 서른, not 삼십.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '저도 서른 살이에요!', native: "I'm 30 too!" },
      { speaker: 'rwen', rwenLine: 'Native tens + Native units + 살. Korean age locked.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '30 (Native age)', correct: ['서른', 'seoreun'] },
      { prompt: 'I am 25 years old', correct: ['저는 스물 다섯 살이에요', 'jeoneun seumul daseot sarieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Your age + parents' ages + best friend's age. All in Native + 살.",
    rwenSignoff: "Native ages locked. Hierarchy software runs.",
  },

  phase8: {
    scenario: "Korean age small-talk with a coworker, exchanging ages and figuring out who's older.",
    rwenRole: "Coworker — 30s, polite.",
    successCriteria: "User answers age in Native + 살. Recognizes 동갑 if same age. Does NOT use Sino for age.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
