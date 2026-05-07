import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-jaginyeo',
  module: 5,
  lesson: 5,
  title: 'Jasik / Adeul / Ttal — Children',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "자식 = children (general). 아들 = son. 딸 = daughter. The umbrella plus the gendered terms — basic family-tree vocabulary.",
    culturalNote: "Asking 'do you have kids?' (자녀 있으세요?) is normal Korean small talk for adults — including from strangers. Same hierarchy logic: kids are 자녀 in formal/asking-others, 자식 or 우리 아들/딸 in own-family-talk.",
  },

  chunks: [
    { id: 'jasik', target: '자식', native: 'Child / children (own)', literal: 'offspring', emoji: '👶', phonetic: 'ja-sik', audioRef: null },
    { id: 'adeul', target: '아들', native: 'Son', literal: 'son', emoji: '👦', phonetic: 'a-deul', audioRef: null },
    { id: 'ttal', target: '딸', native: 'Daughter', literal: 'daughter', emoji: '👧', phonetic: 'ttal', audioRef: null },
  ],

  pattern: {
    name: 'Own kids vs others\' kids',
    explanation: '우리 아들/딸 = own. 자녀 = formal your-children. 따님/아드님 = honorific their-daughter/son (used about someone else\'s children).',
    examples: [
      { target: '우리 아들', native: 'My son' },
      { target: '자녀 있으세요?', native: 'Do you have children? (formal asking)' },
      { target: '아드님', native: 'Their son (honorific)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '아들', right: 'Son' },
      { left: '딸', right: 'Daughter' },
      { left: '자녀', right: 'Children (formal)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Daughter', correct: ['딸', 'ttal'] },
    { type: 'fill_blank', instruction: 'Ask politely about their kids', sentence: '_____ 있으세요?', options: ['자녀', '자식', '아들'], correct: '자녀', context: 'Formal "do you have kids?".' },
    { type: 'build_sentence', instruction: 'Build "I have a son and a daughter"', words: ['있어요', '딸이', '아들이랑'], correct: ['아들이랑', '딸이', '있어요'], translation: 'I have a son and a daughter.' },
    { type: 'multiple_choice', instruction: 'Honorific for "their son"?', question: 'Pick the elevated term', options: [
      { text: '아드님', correct: true },
      { text: '아들', correct: false },
      { text: '동생', correct: false },
    ], explanation: '님 suffix = honorific. Used for OTHER people\'s family members, never your own.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Son', correct: ['아들', 'adeul'] },
  ],

  rwenDialogue: {
    intro: "Ahjumma asks about your family at a Seoul park.",
    lines: [
      { speaker: 'npc', target: '자녀 있으세요?', native: 'Do you have children?' },
      { speaker: 'user', userChoices: [
        { target: '아니요, 아직 없어요', native: 'No, not yet', correct: true, feedback: 'Soft + 아직 (yet) — same softening as marriage question.' },
        { target: '아니', native: 'No (banmal)', correct: false, feedback: 'Too curt for an ahjumma.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아이고, 좋은 날 올 거예요!', native: 'Aigoo, the good day will come!' },
      { speaker: 'rwen', rwenLine: "Kids = small talk for any adult. Have your soft answer ready.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Son', correct: ['아들', 'adeul'] },
      { prompt: 'Daughter', correct: ['딸', 'ttal'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build a sentence about kids you know — yours, a friend's. Pick 아들/딸/자녀 by context.",
    rwenSignoff: "The family tree builds. Kids are the next branch.",
  },

  phase8: {
    scenario: "An ahjumma at a Seoul park asks if you have children. You answer politely.",
    rwenRole: "Ahjumma — 60s, friendly, traditional.",
    successCriteria: "User uses 아니요, 아직 없어요 if no, or 아들/딸 + count if yes. Stays polite. NO banmal.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
