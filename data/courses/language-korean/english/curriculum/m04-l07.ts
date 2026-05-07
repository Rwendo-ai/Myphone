import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-honorific-se',
  module: 4,
  lesson: 7,
  title: 'The Honorific -se- Infix',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "When the SUBJECT of your verb is a respected person (elder, customer, boss), Korean inserts 시/세 into the verb. 가요 (you go) → 가세요 (you go, honorific). It's not about politeness to the listener; it's about elevating the subject.",
    culturalNote: "This is why 안녕하세요 has 세요 — 'may YOU be in peace'. Honorific raises the SUBJECT of the verb. Use for elders, bosses, customers — never for yourself.",
  },

  chunks: [
    { id: 'seyo', target: '세요', native: '-please-honorific (polite)', literal: 'honorific-yo', emoji: '🙇', phonetic: 'se-yo', audioRef: null },
    { id: 'gaseyo', target: '가세요', native: 'go (honorific) / please go', literal: 'go-honorific', emoji: '🚶', phonetic: 'ga-se-yo', audioRef: null },
    { id: 'apuseyo', target: '아프세요?', native: 'Are you (elder/respected) hurt?', literal: 'hurt-honorific?', emoji: '🤒', phonetic: 'a-peu-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Verb stem + 시/세 + ending',
    explanation: "Insert 시/세 BEFORE the polite ending. Used when the subject of the verb is respected. NOT used when YOU are the subject.",
    examples: [
      { target: '가세요', native: 'go (honorific)' },
      { target: '하세요', native: 'do (honorific)' },
      { target: '드세요', native: 'eat (honorific) — special form' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match plain to honorific', pairs: [
      { left: '가요', right: '가세요' },
      { left: '해요', right: '하세요' },
      { left: '먹어요', right: '드세요 (special)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (honorific)', prompt: 'go (honorific to elder)', correct: ['가세요', 'gaseyo'] },
    { type: 'fill_blank', instruction: 'Honor the subject — your boss', sentence: '사장님이 _____.', options: ['가세요', '가', '갑'], correct: '가세요', context: 'Boss = honorific. 시/세 elevates the subject.' },
    { type: 'build_sentence', instruction: 'Build "Please come (honorific)"', words: ['오세요', '여기'], correct: ['여기', '오세요'], translation: 'Please come here (honorific).' },
    { type: 'multiple_choice', instruction: 'Should you say 저는 가세요?', question: 'Pick the right take', options: [
      { text: 'No — never honor yourself; say 저는 가요', correct: true },
      { text: 'Yes — always be polite', correct: false },
      { text: 'Yes if you\'re the boss', correct: false },
    ], explanation: 'Honorific 시/세 elevates the SUBJECT. Self-elevation = arrogant. Use 저는 가요 when YOU\'re the subject.' },
    { type: 'translate', instruction: 'Type in Korean (honorific)', prompt: 'eat (honorific to elder)', correct: ['드세요', 'deuseyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests honorific selection.",
    lines: [
      { speaker: 'rwen', rwenLine: '"Grandma eats." Honor her — pick.' },
      { speaker: 'user', userChoices: [
        { target: '할머니가 드세요', native: 'Grandma eats (honorific)', correct: true, feedback: '드세요 — special honorific for "eat". Used for elders.' },
        { target: '할머니가 먹어요', native: 'Grandma eats (plain)', correct: false, feedback: 'Plain form is rude when the subject is grandma. Use 드세요.' },
        { target: '저는 드세요', native: 'I eat (honorific)', correct: false, feedback: 'Self-honorific = wrong. 저는 먹어요 for self.' },
      ]},
      { speaker: 'rwen', rwenLine: '시/세 elevates the subject. Use for elders. Never for yourself.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'go (honorific to elder)', correct: ['가세요', 'gaseyo'] },
      { prompt: 'eat (honorific — special)', correct: ['드세요', 'deuseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three verbs you know. Add 세요 to honor an elder doing them. Skip self-honorific.",
    rwenSignoff: "Honorific = elevating others. The Korean grace note.",
  },

  phase8: {
    scenario: "Rwen quizzes you on when to use 세요 (subject-honorific) vs plain 요-form.",
    rwenRole: "Rwen — grammar coach.",
    successCriteria: "User uses 세요 when subject is elder/boss; uses plain 요-form when subject is self. Recognizes 드세요 / 주무세요 (sleep, honorific) as special forms.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
