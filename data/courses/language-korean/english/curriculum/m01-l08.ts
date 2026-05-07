import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-jal-buthakhamnida',
  module: 1,
  lesson: 8,
  title: 'Jal Butakhamnida — Please Take Care of Me',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "잘 부탁드립니다 has no clean English translation. It means roughly 'please take care of me / please treat me well in our future relationship'. Said at the end of any first introduction. Skipping it = you didn't really introduce yourself.",
    culturalNote: "The phrase signals you're entering a relationship — work, study, marriage — and asking the other person to be patient with you. K-drama characters say it when they walk into a new office, school, or family.",
  },

  chunks: [
    { id: 'jal_butak', target: '잘 부탁드립니다', native: 'Please take care of me (formal)', literal: 'well request-give-formal', emoji: '🙇', phonetic: 'jal bu-tak-deu-rim-ni-da', audioRef: null },
    { id: 'jal_butakhae', target: '잘 부탁해요', native: 'Please take care of me (polite)', literal: 'well request-yo', emoji: '🤝', phonetic: 'jal bu-ta-kae-yo', audioRef: null },
    { id: 'apeurokeo', target: '앞으로', native: 'From now on', literal: 'in-the-future', emoji: '➡️', phonetic: 'a-peu-ro', audioRef: null },
  ],

  pattern: {
    name: 'The closer of every formal intro',
    explanation: "After your name, origin, and role, you close with 잘 부탁드립니다 (formal) or 잘 부탁해요 (polite daily). Often pair with 앞으로 — 'from now on'.",
    examples: [
      { target: '저는 Sam입니다. 잘 부탁드립니다', native: "I'm Sam. Please take care of me." },
      { target: '앞으로 잘 부탁해요', native: 'From now on, please take care of me' },
      { target: '잘 부탁드립니다', native: 'Please treat me well (formal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to register', pairs: [
      { left: '잘 부탁드립니다', right: 'Formal — work, in-laws' },
      { left: '잘 부탁해요', right: 'Polite — daily life' },
      { left: '앞으로', right: 'From now on' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please take care of me (formal)', correct: ['잘 부탁드립니다', 'jal butakdeurimnida'] },
    { type: 'fill_blank', instruction: 'Complete the work intro', sentence: '저는 Sam입니다. _____.', options: ['잘 부탁드립니다', '안녕히 가세요', '잘 가'], correct: '잘 부탁드립니다', context: 'Closing a formal self-intro at work.' },
    { type: 'build_sentence', instruction: 'Build "From now on, please take care of me"', words: ['잘', '부탁해요', '앞으로'], correct: ['앞으로', '잘', '부탁해요'], translation: 'From now on, please take care of me.' },
    { type: 'multiple_choice', instruction: 'New job, first day, meeting your team. What closes your intro?', question: 'Pick the natural close', options: [
      { text: '잘 부탁드립니다', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '오랜만이에요', correct: false },
    ], explanation: '잘 부탁드립니다 is THE first-day closer. Skipping it reads as half-introduced.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please take care of me (polite daily)', correct: ['잘 부탁해요', 'jal butakhaeyo'] },
  ],

  rwenDialogue: {
    intro: "First day at a Seoul office. You stand to introduce yourself to the team.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 저는 Sam입니다. 잘 부탁드립니다.', native: 'Hello. I am Sam. Please take care of me.', correct: true, feedback: "The full formal intro template. Bow + words = clean entry." },
        { target: '안녕하세요. 저는 Sam이에요.', native: 'Hello. I am Sam.', correct: false, feedback: "Missing 잘 부탁드립니다 — the close. Sounds incomplete." },
        { target: '안녕! 나는 Sam이야', native: 'Hey! I am Sam (banmal)', correct: false, feedback: "Banmal at a first-day team intro = career-limiting." },
      ]},
      { speaker: 'npc', target: '환영합니다! 저희도 잘 부탁드립니다.', native: 'Welcome! We also ask the same of you.' },
      { speaker: 'rwen', rwenLine: "잘 부탁드립니다 — both sides say it. Mutual care from day one.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please take care of me (formal)', correct: ['잘 부탁드립니다', 'jal butakdeurimnida'] },
      { prompt: 'From now on', correct: ['앞으로', 'apeuro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the full first-day intro: 안녕하세요. 저는 [name]입니다. 잘 부탁드립니다. Bow at the start AND the end.",
    rwenSignoff: "Now you can walk into any room in Korea and be properly introduced.",
  },

  phase8: {
    scenario: "First day at a Seoul tech startup. You stand to introduce yourself at the morning meeting.",
    rwenRole: "Team lead — 40s, polite-formal, leads team intro.",
    successCriteria: "User runs full template: 안녕하세요 + 저는 ___입니다 + 잘 부탁드립니다. Stays in formal/polite. NO banmal.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
