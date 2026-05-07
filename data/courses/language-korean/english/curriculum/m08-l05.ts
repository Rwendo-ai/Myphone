import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-jada',
  module: 8,
  lesson: 5,
  title: 'Jada — Sleep (and the Honorific)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "자다 (to sleep) becomes 자요 (polite). Honorific has its own form: 주무세요 (sleep, honorific). Used at bedtime to elders: 안녕히 주무세요 — go in peace and sleep well.",
    culturalNote: "안녕히 주무세요 said to elders at night = 'good night' with respect. K-drama families always say it before bed. Among peers/banmal: 잘 자.",
  },

  chunks: [
    { id: 'jayo', target: '자요', native: 'I sleep (polite)', literal: 'sleep-yo', emoji: '😴', phonetic: 'ja-yo', audioRef: null },
    { id: 'jumuseyo', target: '주무세요', native: 'sleep (honorific to elder)', literal: 'sleep-honorific', emoji: '🌙', phonetic: 'ju-mu-se-yo', audioRef: null },
    { id: 'jal_ja', target: '잘 자', native: 'Good night (banmal)', literal: 'well sleep-banmal', emoji: '✨', phonetic: 'jal ja', audioRef: null },
  ],

  pattern: {
    name: 'Three sleep registers',
    explanation: "자요 (polite) / 주무세요 (honorific elder) / 잘 자 (banmal). Adding 안녕히 makes it 'good night'.",
    examples: [
      { target: '안녕히 주무세요', native: 'Good night (to elder)' },
      { target: '잘 자요', native: 'Sleep well (polite)' },
      { target: '잘 자', native: 'Good night (banmal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match register to phrase', pairs: [
      { left: '안녕히 주무세요', right: 'Good night (elder)' },
      { left: '잘 자요', right: 'Sleep well (polite)' },
      { left: '잘 자', right: 'Good night (banmal)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (honorific)', prompt: 'Good night (to elder)', correct: ['안녕히 주무세요', 'annyeonghi jumuseyo'] },
    { type: 'fill_blank', instruction: 'Bedtime to grandma', sentence: '할머니, 안녕히 _____.', options: ['주무세요', '자요', '자'], correct: '주무세요', context: 'Honorific for grandma sleeping.' },
    { type: 'build_sentence', instruction: 'Build "Sleep well (polite)"', words: ['자요', '잘'], correct: ['잘', '자요'], translation: 'Sleep well.' },
    { type: 'multiple_choice', instruction: 'How do you say "good night" to your boss?', question: 'Pick the formal/honorific', options: [
      { text: '안녕히 주무세요', correct: true },
      { text: '잘 자', correct: false },
      { text: '잘 가', correct: false },
    ], explanation: 'Boss = honorific. 잘 자 = banmal. 잘 가 = goodbye while leaving (different verb).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I sleep (polite)', correct: ['자요', 'jayo'] },
  ],

  rwenDialogue: {
    intro: "Late night. Your Korean homestay grandmother turns off the TV.",
    lines: [
      { speaker: 'npc', target: '늦었어요. 잘 자요.', native: "It's late. Sleep well." },
      { speaker: 'user', userChoices: [
        { target: '안녕히 주무세요', native: 'Good night (honorific)', correct: true, feedback: 'Honorific to grandmother. Perfect.' },
        { target: '잘 자', native: 'Good night (banmal)', correct: false, feedback: 'Banmal to grandmother = wrong tier.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'She is staying — different farewell.' },
      ]},
      { speaker: 'rwen', rwenLine: "주무세요 — sleep elevated. Korean has a verb for that.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Good night (to elder, honorific)', correct: ['안녕히 주무세요', 'annyeonghi jumuseyo'] },
      { prompt: 'I sleep (polite)', correct: ['자요', 'jayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three goodnights: to elder, to peer, to close friend. 안녕히 주무세요 / 잘 자요 / 잘 자.",
    rwenSignoff: "Sleep verb upgraded for elders. Korean honors even rest.",
  },

  phase8: {
    scenario: "Late evening at a Korean homestay. You say good night to grandmother, parents, and roommate (peer).",
    rwenRole: "Multiple — grandmother (honorific), parents (formal/polite), roommate (banmal).",
    successCriteria: "User uses 주무세요 for grandmother, 잘 자요 / 안녕히 주무세요 for parents, 잘 자 for peer roommate.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
