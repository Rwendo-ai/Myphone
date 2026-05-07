import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-eomma-appa',
  module: 5,
  lesson: 2,
  title: 'Eomma / Appa — Mom & Dad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "엄마 (mom) and 아빠 (dad) are the warm everyday words. The formal versions are 어머니/아버지. The honorific (used about someone else's parents) are 어머님/아버님.",
    culturalNote: "Even 30-year-old Korean adults still call their parents 엄마/아빠 in private — not babyish, just affectionate. Switch to 어머니/아버지 when introducing them or in formal contexts.",
  },

  chunks: [
    { id: 'eomma', target: '엄마', native: 'Mom (warm)', literal: 'mom', emoji: '👩', phonetic: 'eom-ma', audioRef: null },
    { id: 'appa', target: '아빠', native: 'Dad (warm)', literal: 'dad', emoji: '👨', phonetic: 'ap-pa', audioRef: null },
    { id: 'eomeoni', target: '어머니 / 아버지', native: 'Mother / Father (formal)', literal: 'mother / father', emoji: '👨‍👩', phonetic: 'eo-meo-ni / a-beo-ji', audioRef: null },
  ],

  pattern: {
    name: 'Three registers for parents',
    explanation: "엄마/아빠 (warm, daily) → 어머니/아버지 (formal, introducing) → 어머님/아버님 (honorific — for someone ELSE\'s parents).",
    examples: [
      { target: '우리 엄마', native: 'My mom (warm)' },
      { target: '저희 어머니', native: 'My mother (formal)' },
      { target: 'Sam의 어머님', native: "Sam's mother (honorific to others')" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match register to term', pairs: [
      { left: 'Mom (warm)', right: '엄마' },
      { left: 'Mother (formal)', right: '어머니' },
      { left: "Their mother (honorific)", right: '어머님' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Dad (warm)', correct: ['아빠', 'appa'] },
    { type: 'fill_blank', instruction: "Talking to a friend's mother politely", sentence: 'Sam의 _____, 안녕하세요.', options: ['어머님', '엄마', '엄마님'], correct: '어머님', context: 'Honorific for someone else\'s mother.' },
    { type: 'build_sentence', instruction: 'Build "My mom (warm)"', words: ['엄마', '우리'], correct: ['우리', '엄마'], translation: 'My mom (warm).' },
    { type: 'multiple_choice', instruction: 'Best phrase to introduce your own mom formally?', question: 'Pick the right register', options: [
      { text: '저희 어머니예요', correct: true },
      { text: '우리 엄마야', correct: false },
      { text: '그 분 어머님이에요', correct: false },
    ], explanation: '저희 + 어머니 = humble formal for own mom. 그 분 어머님 is for SOMEONE ELSE\'s mother.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Mother (formal)', correct: ['어머니', 'eomeoni'] },
  ],

  rwenDialogue: {
    intro: "Introducing your mom to your Korean coworker.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '저희 어머니예요', native: 'This is my mother (formal)', correct: true, feedback: '저희 + 어머니 — humble formal. Mom looks proud.' },
        { target: '우리 엄마야', native: 'This is my mom (banmal)', correct: false, feedback: 'Banmal in introductions — too casual.' },
        { target: '저는 어머니예요', native: 'I am the mother', correct: false, feedback: "That says YOU are the mother — wrong subject." },
      ]},
      { speaker: 'npc', target: '안녕하세요, 어머님! 만나서 반갑습니다.', native: "Hello, mother! Pleased to meet you (honorific)." },
      { speaker: 'rwen', rwenLine: "Three registers for one parent. Pick by who's speaking and who's listening.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Mom (warm daily)', correct: ['엄마', 'eomma'] },
      { prompt: 'Father (formal)', correct: ['아버지', 'abeoji'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run all three for both parents: 엄마/어머니/어머님 + 아빠/아버지/아버님. Six terms.",
    rwenSignoff: "Parents in Korean: warm, formal, honorific. Pick by room.",
  },

  phase8: {
    scenario: "You introduce your mother to a Korean coworker — and later refer to your friend Sam's mother.",
    rwenRole: "Korean coworker — polite, expects formal/honorific terms used correctly.",
    successCriteria: "User uses 저희 어머니 for own mother (formal/humble), 어머님 for friend Sam's mother (honorific). Does NOT mix.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
