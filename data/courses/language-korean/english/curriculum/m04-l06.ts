import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-imnida',
  module: 4,
  lesson: 6,
  title: 'Imnida vs Ieyo — Two Copulas',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Korean has two 'to be' endings: 입니다 (formal) and 이에요/예요 (polite). They mean the same thing, different rooms. Pick by formality of the situation.",
    culturalNote: "News anchors, military, very formal work intros = 입니다. Daily life, café, friends = 이에요/예요. Mixing them in one sentence is fine — Koreans modulate constantly.",
  },

  chunks: [
    { id: 'imnida', target: '입니다', native: 'am/is (formal)', literal: 'am-formal', emoji: '👔', phonetic: 'im-ni-da', audioRef: null },
    { id: 'ieyo', target: '이에요', native: 'am/is (polite, after consonant)', literal: 'am-yo-cons', emoji: '😊', phonetic: 'i-e-yo', audioRef: null },
    { id: 'yeyo', target: '예요', native: 'am/is (polite, after vowel)', literal: 'am-yo-vowel', emoji: '😊', phonetic: 'ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'Pick by ending + register',
    explanation: "Sam (consonant) → Sam이에요 / Sam입니다. Anna (vowel) → Anna예요 / Anna입니다. 입니다 is invariant — works after both.",
    examples: [
      { target: '저는 Sam입니다', native: 'I am Sam (formal)' },
      { target: '저는 Sam이에요', native: 'I am Sam (polite)' },
      { target: '저는 Anna예요', native: 'I am Anna (polite, vowel)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match register to form', pairs: [
      { left: 'Formal (work intro)', right: '입니다' },
      { left: 'Polite, after consonant', right: '이에요' },
      { left: 'Polite, after vowel', right: '예요' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (formal)', prompt: 'I am Sam (formal)', correct: ['저는 Sam입니다', 'jeoneun Sam imnida'] },
    { type: 'fill_blank', instruction: 'Pick polite copula for Anna (vowel)', sentence: '저는 Anna_____.', options: ['예요', '이에요', '입니다'], correct: '예요', context: 'Vowel ending → 예요.' },
    { type: 'build_sentence', instruction: 'Build "I am a student (polite)"', words: ['학생이에요', '저는'], correct: ['저는', '학생이에요'], translation: 'I am a student (polite).' },
    { type: 'multiple_choice', instruction: 'First-day work intro. Best copula?', question: 'Pick the formal version', options: [
      { text: '입니다', correct: true },
      { text: '이에요', correct: false },
      { text: '야 (banmal)', correct: false },
    ], explanation: 'Work first-day = formal = 입니다.' },
    { type: 'translate', instruction: 'Type in Korean (polite)', prompt: 'I am Australian (polite)', correct: ['저는 호주 사람이에요', 'jeoneun hoju saramieyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests copula picking.",
    lines: [
      { speaker: 'rwen', rwenLine: '"I am a doctor" (vowel ending — 의사). Polite form?' },
      { speaker: 'user', userChoices: [
        { target: '저는 의사예요', native: 'I am a doctor (polite, vowel)', correct: true, feedback: '의사 ends in vowel → 예요. Locked.' },
        { target: '저는 의사이에요', native: 'I am a doctor (wrong)', correct: false, feedback: '이에요 is for consonant endings.' },
        { target: '저는 의사야', native: 'I am a doctor (banmal)', correct: false, feedback: 'Banmal — wrong register for the question.' },
      ]},
      { speaker: 'rwen', rwenLine: '입니다 / 이에요 / 예요 — three doors to "am". Pick by ending and register.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I am Sam (polite)', correct: ['저는 Sam이에요', 'jeoneun Sam ieyo'] },
      { prompt: 'I am a doctor (polite)', correct: ['저는 의사예요', 'jeoneun uisayeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build three identity sentences in Korean. Pick 이에요 or 예요 by the noun's ending.",
    rwenSignoff: "Copula chosen. Identity flows.",
  },

  phase8: {
    scenario: "Rwen quizzes you on picking the right copula across formal/polite contexts and consonant/vowel endings.",
    rwenRole: "Rwen — grammar coach.",
    successCriteria: "User picks correct copula in at least 4 of 5 prompts. Justifies by ending and register.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
