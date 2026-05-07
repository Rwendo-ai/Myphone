import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-yo-form',
  module: 4,
  lesson: 5,
  title: 'The -yo Polite Ending',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "요 is the politeness ending you'll use 95% of the time. It transforms verbs from raw stem to socially-acceptable speech. Drop it = banmal. Keep it = you're safe.",
    culturalNote: "K-dramas show characters dropping 요 the moment they get close (말 놓을까요? — 'shall we drop the 요?'). It's a relationship milestone. For learners: keep 요 ON until expressly told to drop it.",
  },

  chunks: [
    { id: 'yo', target: '요', native: 'Politeness ending', literal: '-yo', emoji: '🛡️', phonetic: 'yo', audioRef: null },
    { id: 'haeyo', target: '해요', native: 'do (polite)', literal: 'do-yo', emoji: '✅', phonetic: 'hae-yo', audioRef: null },
    { id: 'gayo', target: '가요', native: 'go (polite)', literal: 'go-yo', emoji: '🚶', phonetic: 'ga-yo', audioRef: null },
  ],

  pattern: {
    name: 'Three formality tiers',
    explanation: "1) 합니다 (formal/입니다 family) for work, news, very formal. 2) 해요 (요-form) for daily polite. 3) 해 (banmal) for close friends/younger. Stay in 요 until invited.",
    examples: [
      { target: '갑니다', native: 'go (formal)' },
      { target: '가요', native: 'go (polite)' },
      { target: '가', native: 'go (banmal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match register to form', pairs: [
      { left: 'Formal (입니다 family)', right: '갑니다' },
      { left: 'Polite (요-form)', right: '가요' },
      { left: 'Banmal (close)', right: '가' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (polite)', prompt: 'go (polite)', correct: ['가요', 'gayo'] },
    { type: 'fill_blank', instruction: "Stay polite — add the right ending", sentence: '저는 학교에 _____.', options: ['가요', '가', '갑'], correct: '가요', context: 'Daily polite = 요-form.' },
    { type: 'build_sentence', instruction: 'Build "I do (polite)"', words: ['해요', '저는'], correct: ['저는', '해요'], translation: 'I do (polite).' },
    { type: 'multiple_choice', instruction: 'Talking to a stranger your age. Which form?', question: 'Pick the safe register', options: [
      { text: '요-form (가요)', correct: true },
      { text: 'Banmal (가)', correct: false },
      { text: 'Formal (갑니다)', correct: false },
    ], explanation: 'Stranger = polite, not banmal. 요-form is safest. 갑니다 only in very formal/work contexts.' },
    { type: 'translate', instruction: 'Type in Korean (polite)', prompt: 'do (polite)', correct: ['해요', 'haeyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests register-shifting.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Same verb, three registers. Pick polite.' },
      { speaker: 'user', userChoices: [
        { target: '먹어요', native: 'eat (polite)', correct: true, feedback: '요-form locks in. Safe in 95% of situations.' },
        { target: '먹어', native: 'eat (banmal)', correct: false, feedback: 'Banmal — wrong with strangers/elders.' },
        { target: '먹습니다', native: 'eat (formal)', correct: false, feedback: 'Formal — too stiff for daily use.' },
      ]},
      { speaker: 'rwen', rwenLine: '요-form is your default. Drop it ONLY when invited.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'go (polite)', correct: ['가요', 'gayo'] },
      { prompt: 'do (polite)', correct: ['해요', 'haeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice three Korean verbs in K-drama dialogue. Are they 요-form, 입니다, or banmal? The ending tells you the relationship.",
    rwenSignoff: "요 is your seatbelt. Keep it on until told to take it off.",
  },

  phase8: {
    scenario: "Rwen quizzes you on switching between formal, polite, and banmal — when each is appropriate.",
    rwenRole: "Rwen — register coach.",
    successCriteria: "User picks 요-form for strangers, formal for work-formal, banmal for close friends. Justifies the choice.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
