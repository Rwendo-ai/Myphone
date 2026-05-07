import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-han',
  module: 10,
  lesson: 2,
  title: 'Han — The Untranslatable Sorrow',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "한 (han) — Korean's most untranslatable word. A deep, slow sorrow rooted in injustice, longing, history. It's the emotional fuel of much classical Korean art and even today's K-dramas. Not depression — closer to ancestral, dignified ache.",
    culturalNote: "Han is debated by Koreans themselves — some scholars argue it was constructed/amplified during colonial era. But the word lives in songs, stories, the way Koreans frame collective grief. Hearing it = an opening into Korean inner life.",
  },

  chunks: [
    { id: 'han', target: '한', native: 'Han (deep historical sorrow)', literal: 'sorrow/resentment-old', emoji: '🌑', phonetic: 'han', audioRef: null },
    { id: 'seulpeoyo', target: '슬퍼요', native: "I'm sad", literal: 'sad-yo', emoji: '😢', phonetic: 'seul-peo-yo', audioRef: null },
    { id: 'geuriwoyo', target: '그리워요', native: "I miss (someone/something)", literal: 'long-for-yo', emoji: '🌙', phonetic: 'geu-ri-wo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Sorrow vocabulary — three depths',
    explanation: "슬퍼요 = everyday sad. 그리워요 = longing/missing. 한 = ancestral weight. Most Koreans use 슬퍼요/그리워요 in daily life; 한 carries cultural framing.",
    examples: [
      { target: '슬퍼요', native: "I'm sad" },
      { target: '엄마가 그리워요', native: 'I miss my mom' },
      { target: '한이 많아요', native: 'There is much han (heavy)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match sorrow word to depth', pairs: [
      { left: '슬퍼요', right: 'Everyday sad' },
      { left: '그리워요', right: 'Longing/missing' },
      { left: '한', right: 'Deep historical sorrow' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I miss my mom', correct: ['엄마가 그리워요', 'eommaga geuriwoyo'] },
    { type: 'fill_blank', instruction: 'Daily sad', sentence: '오늘은 _____.', options: ['슬퍼요', '비싸요', '맛있어요'], correct: '슬퍼요', context: 'Daily sad expression.' },
    { type: 'build_sentence', instruction: 'Build "I miss home"', words: ['그리워요', '집이'], correct: ['집이', '그리워요'], translation: 'I miss home.' },
    { type: 'multiple_choice', instruction: 'What\'s 한 closest to in English?', question: 'Pick the closest gloss', options: [
      { text: 'Deep, dignified ache rooted in history/longing', correct: true },
      { text: 'Anger', correct: false },
      { text: 'Joy', correct: false },
    ], explanation: 'Han is its own register — historical, layered, untranslatable cleanly.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'm sad", correct: ['슬퍼요', 'seulpeoyo'] },
  ],

  rwenDialogue: {
    intro: "K-drama scene playing. The character speaks of missing home.",
    lines: [
      { speaker: 'rwen', rwenLine: '"I miss my hometown." Translate.' },
      { speaker: 'user', userChoices: [
        { target: '고향이 그리워요', native: 'I miss my hometown', correct: true, feedback: 'Longing — 그리워요. Home is far.' },
        { target: '고향이 비싸요', native: 'Hometown is expensive', correct: false, feedback: 'Wrong shape.' },
        { target: '고향이 맛있어요', native: 'Hometown is delicious', correct: false, feedback: 'Wrong adjective.' },
      ]},
      { speaker: 'rwen', rwenLine: "그리워요 — Korean's longing word. 한 — its weight. Both honor what is missed.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I miss (it/them)", correct: ['그리워요', 'geuriwoyo'] },
      { prompt: "I'm sad", correct: ['슬퍼요', 'seulpeoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick someone or something you miss. Build it: ___이/가 그리워요. Honor it.",
    rwenSignoff: "한 — Korean's deep ache. The word that opens the soul.",
  },

  phase8: {
    scenario: "K-drama discussion with a Korean friend. They mention 한 — you ask what it means and share your own longings.",
    rwenRole: "Korean friend — thoughtful, willing to teach.",
    successCriteria: "User asks about 한, uses 그리워요/슬퍼요. Reflects on something missed. Stays warm.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
