import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-gajok',
  module: 5,
  lesson: 1,
  title: 'Gajok — Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 5 = family. Korean family terms split by who's speaking, whose family it is, and age. 가족 (family) is the umbrella; the branches are precise.",
    culturalNote: "Korean family is in-group/out-group: 우리 (our/my) for your own family, 그 분 / 어머님 (their honorable mother) for someone else's. Sloppy mixing reads as bad upbringing.",
  },

  chunks: [
    { id: 'gajok', target: '가족', native: 'Family', literal: 'family', emoji: '👨‍👩‍👧‍👦', phonetic: 'ga-jok', audioRef: null },
    { id: 'uri_gajok', target: '우리 가족', native: 'My/our family', literal: 'we family', emoji: '🏠', phonetic: 'u-ri ga-jok', audioRef: null },
    { id: 'gajogi_myeotmyeong', target: '가족이 몇 명이에요?', native: 'How many people in your family?', literal: 'family-SUBJ how-many people-is?', emoji: '🔢', phonetic: 'ga-jo-gi myeot-myeong-i-e-yo', audioRef: null },
  ],

  pattern: {
    name: 'In-group 우리, out-group 그 분',
    explanation: "Korean uses 우리 (we/our) more than English. 우리 가족 = my family (lit. our family). When talking about another's family, use 그 분 + honorific terms.",
    examples: [
      { target: '우리 가족', native: 'My family' },
      { target: '우리 어머니', native: 'My mom' },
      { target: '그 분 어머님', native: "That person's mother (honorific)" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '가족', right: 'Family' },
      { left: '우리 가족', right: 'My family' },
      { left: '몇 명이에요?', right: 'How many people?' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'My family', correct: ['우리 가족', 'uri gajok'] },
    { type: 'fill_blank', instruction: 'Ask about family size', sentence: '가족이 _____?', options: ['몇 명이에요', '얼마예요', '어디예요'], correct: '몇 명이에요', context: 'How many PEOPLE in family.' },
    { type: 'build_sentence', instruction: 'Build "How many people in your family?"', words: ['몇 명이에요?', '가족이'], correct: ['가족이', '몇 명이에요?'], translation: 'How many people in your family?' },
    { type: 'multiple_choice', instruction: 'Why does Korean use 우리 (we) for "my family"?', question: 'Pick the cultural read', options: [
      { text: 'Family is treated as a group identity, not individual property', correct: true },
      { text: 'It is a grammatical mistake commonly accepted', correct: false },
      { text: 'It is formal speech only', correct: false },
    ], explanation: 'Korean culture frames family as collective. "Our mom" feels more natural than "my mom".' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Family', correct: ['가족', 'gajok'] },
  ],

  rwenDialogue: {
    intro: "Coffee with a Korean coworker. They ask about your family.",
    lines: [
      { speaker: 'npc', target: '가족이 몇 명이에요?', native: 'How many people in your family?' },
      { speaker: 'user', userChoices: [
        { target: '우리 가족은 4명이에요', native: 'My family is 4 people', correct: true, feedback: '우리 + family — natural Korean framing.' },
        { target: '제 가족은 4명이에요', native: 'My family (literal) is 4', correct: false, feedback: 'Grammatical but stilted — Korean prefers 우리.' },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 4명이에요. 부모님하고?', native: 'Oh, 4 people. With parents?' },
      { speaker: 'rwen', rwenLine: "우리 가족 — Korean's group-frame for family. Memorize the framing.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'My family', correct: ['우리 가족', 'uri gajok'] },
      { prompt: 'How many people in your family?', correct: ['가족이 몇 명이에요?', 'gajogi myeotmyeongieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count your family in Korean. 우리 가족은 ___명이에요. (We'll cover numbers in detail in m06.)",
    rwenSignoff: "Family is the 우리 root. Korean culture grows from here.",
  },

  phase8: {
    scenario: "Coffee with a new Korean coworker who asks about your family size and structure.",
    rwenRole: "Coworker — 30s, polite, curious.",
    successCriteria: "User uses 우리 가족 (not 제 가족). Answers 몇 명이에요? politely. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
