import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-hyeongje',
  module: 5,
  lesson: 3,
  title: 'Hyeong / Oppa / Nuna / Eonni — Older Siblings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korean's age-and-gender sibling matrix again — but for blood family this time. 형 (older bro to a guy), 누나 (older sis to a guy), 오빠 (older bro to a girl), 언니 (older sis to a girl). Same matrix as in m04-l09.",
    culturalNote: "Real siblings get this term forever. Adopted into a friend group: also forever. Younger siblings just get their name. There is no 'younger brother address term' — you call your younger sibling by name.",
  },

  chunks: [
    { id: 'hyeong_oppa', target: '형 / 오빠', native: 'Older brother (male/female speaker)', literal: 'older-bro', emoji: '👦', phonetic: 'hyeong / op-pa', audioRef: null },
    { id: 'nuna_eonni', target: '누나 / 언니', native: 'Older sister (male/female speaker)', literal: 'older-sis', emoji: '👧', phonetic: 'nu-na / eon-ni', audioRef: null },
    { id: 'dongsaeng', target: '동생', native: 'Younger sibling (any gender)', literal: 'same-life', emoji: '🧒', phonetic: 'dong-saeng', audioRef: null },
  ],

  pattern: {
    name: 'Older has a term, younger does not',
    explanation: "Older siblings get age-marked terms; younger siblings get 동생 (sibling-younger) or just their name. 남동생 = younger brother. 여동생 = younger sister.",
    examples: [
      { target: '오빠', native: 'Older brother (female speaker)' },
      { target: '누나', native: 'Older sister (male speaker)' },
      { target: '남동생', native: 'Younger brother' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match speaker + sibling', pairs: [
      { left: 'Female → older bro', right: '오빠' },
      { left: 'Male → older sis', right: '누나' },
      { left: 'Anyone → younger sibling', right: '동생' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'younger sibling (any gender)', correct: ['동생', 'dongsaeng'] },
    { type: 'fill_blank', instruction: "Female speaker addressing her older brother", sentence: '_____, 어디 가요?', options: ['오빠', '형', '동생'], correct: '오빠', context: 'Female speaker → older brother.' },
    { type: 'build_sentence', instruction: 'Build "I have a younger brother"', words: ['있어요', '남동생이', '저는'], correct: ['저는', '남동생이', '있어요'], translation: 'I have a younger brother.' },
    { type: 'multiple_choice', instruction: 'How do you address your younger sister?', question: 'Pick the right term', options: [
      { text: 'By her name', correct: true },
      { text: '동생아', correct: false },
      { text: '언니', correct: false },
    ], explanation: 'Younger siblings get name-called. 언니 is for OLDER sister (female speaker).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'older brother (said by male)', correct: ['형', 'hyeong'] },
  ],

  rwenDialogue: {
    intro: "Telling a Korean friend about your siblings.",
    lines: [
      { speaker: 'npc', target: '형제 있어요?', native: 'Do you have siblings?' },
      { speaker: 'user', userChoices: [
        { target: '네, 누나 한 명, 남동생 한 명 있어요', native: 'Yes, one older sister and one younger brother (male speaker)', correct: true, feedback: 'Term + count + 있어요. Clean.' },
        { target: '네, 동생 두 명', native: 'Yes, two younger siblings', correct: false, feedback: "Older sister can't be 동생 — she's 누나." },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 형제가 많네요!', native: 'Oh, lots of siblings!' },
      { speaker: 'rwen', rwenLine: "Sibling matrix locked. Older = age-marked term. Younger = 동생 or name.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'older sister (said by female)', correct: ['언니', 'eonni'] },
      { prompt: 'younger sibling (any gender)', correct: ['동생', 'dongsaeng'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Map your siblings to Korean terms. Account for your gender + their age. 언니/오빠/누나/형/동생.",
    rwenSignoff: "The matrix runs: speaker × age × gender. You can name any sibling.",
  },

  phase8: {
    scenario: "Korean friend asks about your siblings. You describe each one with the correct age-and-gender term.",
    rwenRole: "Korean friend — peer, polite, curious.",
    successCriteria: "User picks correct sibling term based on user's gender and sibling's relative age. Uses 동생 for younger.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
