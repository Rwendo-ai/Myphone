import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-halmeoni',
  module: 5,
  lesson: 4,
  title: 'Halmeoni / Harabeoji — Grandparents',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "할머니 (grandma), 할아버지 (grandpa). One word for each, no maternal/paternal split in daily speech (formal versions distinguish: 외할머니 = maternal grandma).",
    culturalNote: "Korean grandparents are deeply involved — often raising kids while parents work. The grandparent-grandchild bond is huge in Korean culture, and it's reflected in everyday phrases.",
  },

  chunks: [
    { id: 'halmeoni', target: '할머니', native: 'Grandmother', literal: 'grandma', emoji: '👵', phonetic: 'hal-meo-ni', audioRef: null },
    { id: 'harabeoji', target: '할아버지', native: 'Grandfather', literal: 'grandpa', emoji: '👴', phonetic: 'ha-ra-beo-ji', audioRef: null },
    { id: 'oehalmeoni', target: '외할머니', native: 'Maternal grandmother', literal: 'outside-grandma (mother\'s side)', emoji: '👵', phonetic: 'oe-hal-meo-ni', audioRef: null },
  ],

  pattern: {
    name: 'Daily vs distinguished',
    explanation: "할머니/할아버지 = daily-life. 외 (outside) prefix = maternal side. 친 (close) prefix = paternal (often dropped because it\'s default).",
    examples: [
      { target: '할머니', native: 'Grandma' },
      { target: '외할머니', native: 'Maternal grandma' },
      { target: '친할아버지', native: 'Paternal grandpa' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '할머니', right: 'Grandma' },
      { left: '할아버지', right: 'Grandpa' },
      { left: '외할머니', right: 'Maternal grandma' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Grandma', correct: ['할머니', 'halmeoni'] },
    { type: 'fill_blank', instruction: 'Address grandpa with honorific verb', sentence: '할아버지가 _____.', options: ['오세요', '와', '옴'], correct: '오세요', context: 'Grandpa = honorific subject.' },
    { type: 'build_sentence', instruction: 'Build "Maternal grandma is here"', words: ['있어요', '외할머니가'], correct: ['외할머니가', '있어요'], translation: 'Maternal grandma is here.' },
    { type: 'multiple_choice', instruction: 'Honorific verb for grandpa "to eat"?', question: 'Pick the elevated form', options: [
      { text: '드세요', correct: true },
      { text: '먹어요', correct: false },
      { text: '먹어', correct: false },
    ], explanation: 'Grandpa = honorific subject → 드세요 (special form for "eat").' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Grandfather', correct: ['할아버지', 'harabeoji'] },
  ],

  rwenDialogue: {
    intro: "Introducing your Korean partner's grandmother to a friend.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '이 분은 할머니예요', native: 'This (honorable person) is grandma', correct: true, feedback: '이 분 (honorable this person) + 할머니 — respectful intro.' },
        { target: '이건 할머니야', native: 'This is grandma (banmal)', correct: false, feedback: 'Banmal + 이건 (this thing) is way too casual for grandma.' },
        { target: '저는 할머니예요', native: 'I am grandma', correct: false, feedback: 'Wrong subject.' },
      ]},
      { speaker: 'npc', target: '안녕하세요, 할머니! 만나서 반갑습니다', native: 'Hello, grandma! Pleased to meet you.' },
      { speaker: 'rwen', rwenLine: "Grandparents = honorific tier. Always 세요 verbs around them.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Grandma', correct: ['할머니', 'halmeoni'] },
      { prompt: 'Grandpa', correct: ['할아버지', 'harabeoji'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture your grandparents. Run their Korean names: 할머니/할아버지. Add 외 if maternal.",
    rwenSignoff: "Grandparents in Korean = honorific tier always.",
  },

  phase8: {
    scenario: "Visiting your Korean partner's grandparents at their home — first time meeting.",
    rwenRole: "Grandmother — 80s, traditional, expects deep bow + honorific verbs.",
    successCriteria: "User uses 할머니/할아버지 + honorific verbs (드세요, 가세요). Does NOT use plain 요-form for grandparent-subject sentences.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
