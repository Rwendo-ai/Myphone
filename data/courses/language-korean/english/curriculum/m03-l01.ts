import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-jeoneun',
  module: 3,
  lesson: 1,
  title: 'Jeoneun ___-imnida — Self-Introduction Template',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 3 = identity. Who you are, what you do, how old you are. The base template: 저는 ___입니다 / 저는 ___예요. Today we lock the building blocks.",
    culturalNote: "Korean self-introductions follow a stable order: name → role/job → age (often) → 잘 부탁드립니다. K-drama and reality TV intros all hit these beats.",
  },

  chunks: [
    { id: 'jeoneun', target: '저는', native: 'I (topic-marked, polite)', literal: 'I-TOPIC', emoji: '🙋', phonetic: 'jeo-neun', audioRef: null },
    { id: 'imnida', target: '___입니다', native: 'I am ___ (formal)', literal: '___-am-formal', emoji: '👔', phonetic: '___-im-ni-da', audioRef: null },
    { id: 'ieyo', target: '___이에요/예요', native: 'I am ___ (polite)', literal: '___-am-yo', emoji: '😊', phonetic: '___-i-e-yo / ye-yo', audioRef: null },
  ],

  pattern: {
    name: '저는 + noun + 입니다/예요',
    explanation: "입니다 = formal copula. 이에요 (after consonant) / 예요 (after vowel) = polite copula. Pick by ending: Sam ends in m (consonant) → Sam이에요. Anna ends in a (vowel) → Anna예요.",
    examples: [
      { target: '저는 학생입니다', native: 'I am a student (formal)' },
      { target: '저는 호주 사람이에요', native: 'I am Australian' },
      { target: '저는 Anna예요', native: 'I am Anna' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '저는', right: 'I (topic)' },
      { left: '입니다', right: 'am (formal)' },
      { left: '예요', right: 'am (polite, after vowel)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am Sam (polite)', correct: ['저는 Sam이에요', 'jeoneun Sam ieyo'] },
    { type: 'fill_blank', instruction: 'Pick the right copula for Anna (vowel ending)', sentence: '저는 Anna_____.', options: ['예요', '이에요', '입니다'], correct: '예요', context: 'Anna ends in a vowel → 예요.' },
    { type: 'build_sentence', instruction: 'Build "I am a student (formal)"', words: ['학생입니다', '저는'], correct: ['저는', '학생입니다'], translation: 'I am a student (formal).' },
    { type: 'multiple_choice', instruction: "First-day formal intro at work. Best phrasing of 'I am Min-jun'?", question: 'Pick the most formal', options: [
      { text: '저는 민준입니다', correct: true },
      { text: '저는 민준이에요', correct: false },
      { text: '나 민준', correct: false },
    ], explanation: '입니다 is the formal copula — fits work intro. 이에요 is daily polite. 나 is banmal.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am Australian (polite)', correct: ['저는 호주 사람이에요', 'jeoneun hoju saramieyo'] },
  ],

  rwenDialogue: {
    intro: "Korean cultural exchange event. The host asks each guest to introduce themselves briefly.",
    lines: [
      { speaker: 'npc', target: '간단히 자기소개 해주세요', native: 'Please introduce yourself briefly.' },
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 저는 Sam이에요. 호주 사람이에요.', native: 'Hello. I am Sam. I am Australian.', correct: true, feedback: 'Greeting + name + nationality. Clean three-beat intro.' },
        { target: '나 Sam', native: 'Me Sam (banmal)', correct: false, feedback: 'Banmal at a public intro = bad read.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'rwen', rwenLine: "저는 ___이에요/예요/입니다 — pick the copula by ending. Now you can intro yourself anywhere.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I am Sam (polite)', correct: ['저는 Sam이에요', 'jeoneun Sam ieyo'] },
      { prompt: 'I am a student (formal)', correct: ['저는 학생입니다', 'jeoneun haksaengimnida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build your three-line intro: 안녕하세요. 저는 [name]이에요. [country] 사람이에요. Say it out loud.",
    rwenSignoff: "Identity in Korean. Three lines is enough.",
  },

  phase8: {
    scenario: "Korean language exchange in Itaewon. The host invites a round of self-introductions.",
    rwenRole: "Host — 30s, polite, leads the round.",
    successCriteria: "User introduces with 저는 ___이에요/예요. Adds nationality with 호주/미국 사람이에요. Stays in 요-form or 입니다.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
