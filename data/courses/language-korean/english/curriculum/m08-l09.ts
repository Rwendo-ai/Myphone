import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-conjugation-by-formality',
  module: 8,
  lesson: 9,
  title: 'Same Verb, Three Registers',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Same verb, three forms. 가다 → 갑니다 (formal), 가요 (polite), 가 (banmal). Today: pick the right register on the fly.",
    culturalNote: "Korean speakers slide registers fluidly within one conversation: formal to a stranger over the phone, polite to a coworker, banmal to a close friend in the same hour. Practice the slide.",
  },

  chunks: [
    { id: 'gamnida', target: '갑니다', native: 'go (formal)', literal: 'go-formal', emoji: '👔', phonetic: 'gam-ni-da', audioRef: null },
    { id: 'gayo_review', target: '가요', native: 'go (polite)', literal: 'go-yo', emoji: '😊', phonetic: 'ga-yo', audioRef: null },
    { id: 'ga_banmal', target: '가', native: 'go (banmal)', literal: 'go-banmal', emoji: '✌️', phonetic: 'ga', audioRef: null },
  ],

  pattern: {
    name: 'Three forms of every verb',
    explanation: "Formal: -(스)ㅂ니다. Polite: -아/어요. Banmal: -아/어 (drop 요). Same meaning, three rooms.",
    examples: [
      { target: '갑니다 / 가요 / 가', native: 'go: formal / polite / banmal' },
      { target: '먹습니다 / 먹어요 / 먹어', native: 'eat: formal / polite / banmal' },
      { target: '합니다 / 해요 / 해', native: 'do: formal / polite / banmal' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match register to form', pairs: [
      { left: 'Formal', right: '갑니다' },
      { left: 'Polite', right: '가요' },
      { left: 'Banmal', right: '가' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (formal)', prompt: 'go (formal)', correct: ['갑니다', 'gamnida'] },
    { type: 'fill_blank', instruction: 'Daily polite for "eat"', sentence: '저는 김치를 _____.', options: ['먹어요', '먹습니다', '먹어'], correct: '먹어요', context: 'Daily polite = 요-form.' },
    { type: 'build_sentence', instruction: 'Build "I do (formal)"', words: ['저는', '합니다'], correct: ['저는', '합니다'], translation: 'I do (formal).' },
    { type: 'multiple_choice', instruction: 'On a phone call to a customer service line. Best register?', question: 'Pick the right form', options: [
      { text: '합니다 (formal)', correct: true },
      { text: '해요 (polite)', correct: false },
      { text: '해 (banmal)', correct: false },
    ], explanation: 'Customer service / official lines = formal -ㅂ니다 form.' },
    { type: 'translate', instruction: 'Type in Korean (banmal)', prompt: 'go (banmal)', correct: ['가', 'ga'] },
  ],

  rwenDialogue: {
    intro: "Three quick scenarios. Same verb, three rooms.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Customer service phone call: "I am calling" — pick the form.' },
      { speaker: 'user', userChoices: [
        { target: '전화합니다', native: 'Formal', correct: true, feedback: 'Formal -ㅂ니다 fits customer service.' },
        { target: '전화해요', native: 'Polite', correct: false, feedback: 'Polite is fine but formal is the customer-service default.' },
        { target: '전화해', native: 'Banmal', correct: false, feedback: 'Banmal on a phone call to a stranger = bad.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Same verb, three doors. Pick by room.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'go (formal)', correct: ['갑니다', 'gamnida'] },
      { prompt: 'go (banmal)', correct: ['가', 'ga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three verbs you use daily. Run all three registers for each. Lock the slide.",
    rwenSignoff: "One verb, three registers. Korean's slider switch.",
  },

  phase8: {
    scenario: "Three quick scenarios in sequence: customer service phone call (formal), coworker chat (polite), close friend message (banmal).",
    rwenRole: "Multiple — service rep, coworker, close friend.",
    successCriteria: "User picks formal/polite/banmal correctly per scenario. Same verb adapted to register.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
