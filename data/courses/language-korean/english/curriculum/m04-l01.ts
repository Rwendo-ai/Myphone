import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-eun-neun',
  module: 4,
  lesson: 1,
  title: 'Eun/Neun — The Topic Marker',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: 'Module 4 = grammar. The first piece: 은/는. It marks the TOPIC — what the sentence is ABOUT. 저는 = as for me. This is not optional decoration — Korean grammar runs on these particles.',
    culturalNote: "Korean is famous for its particles: little syllables stuck onto nouns to mark their job. 은/는 (topic) is the most common. Once you see it, you can't unsee it.",
  },

  chunks: [
    { id: 'eun', target: '은', native: 'Topic marker (after consonant)', literal: 'TOPIC-cons', emoji: '🏷️', phonetic: 'eun', audioRef: null },
    { id: 'neun', target: '는', native: 'Topic marker (after vowel)', literal: 'TOPIC-vowel', emoji: '🏷️', phonetic: 'neun', audioRef: null },
    { id: 'jeoneun_topic', target: '저는 ___이에요', native: 'As for me, I am ___', literal: 'I-TOPIC ___-am', emoji: '🙋', phonetic: 'jeo-neun ___-i-e-yo', audioRef: null },
  ],

  pattern: {
    name: '은 (after consonant) / 는 (after vowel)',
    explanation: "Pick by the LAST sound of the noun. Sam ends in m (consonant) → Sam은. Anna ends in a (vowel) → Anna는. 저 ends in vowel → 저는.",
    examples: [
      { target: '저는', native: 'As for me (저 + 는)' },
      { target: 'Sam은', native: 'As for Sam (consonant + 은)' },
      { target: 'Anna는', native: 'As for Anna (vowel + 는)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match noun to topic marker', pairs: [
      { left: '저', right: '저는 (vowel)' },
      { left: 'Sam', right: 'Sam은 (consonant)' },
      { left: 'Anna', right: 'Anna는 (vowel)' },
    ]},
    { type: 'translate', instruction: 'Type with topic marker', prompt: 'As for me (with topic marker)', correct: ['저는', 'jeoneun'] },
    { type: 'fill_blank', instruction: 'Pick the right marker for Sam', sentence: 'Sam_____ 호주 사람이에요.', options: ['은', '는', '이'], correct: '은', context: 'Sam ends in consonant → 은.' },
    { type: 'build_sentence', instruction: 'Build "As for me, I am Korean"', words: ['한국 사람이에요', '저는'], correct: ['저는', '한국 사람이에요'], translation: 'As for me, I am Korean.' },
    { type: 'multiple_choice', instruction: 'Anna ends in a vowel. Which marker?', question: 'Pick the topic marker', options: [
      { text: 'Anna는', correct: true },
      { text: 'Anna은', correct: false },
      { text: 'Anna가', correct: false },
    ], explanation: 'Vowel ending → 는. 은 is for consonant endings. 가 is the subject marker (next lesson).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'As for Sam, Sam is Australian', correct: ['Sam은 호주 사람이에요', 'Sameun hoju saramieyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen drills you on particle picking.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Quick: 김민준 (Kim Min-jun) — does it end in vowel or consonant?' },
      { speaker: 'user', userChoices: [
        { target: '김민준은 (consonant)', native: 'Min-jun ends in consonant n', correct: true, feedback: 'Right — n is a consonant → 은.' },
        { target: '김민준는 (vowel)', native: 'Min-jun ends in vowel', correct: false, feedback: 'No — n is a consonant.' },
        { target: '김민준이 (subject)', native: 'Subject marker', correct: false, feedback: 'Different particle — 은/는 is topic.' },
      ]},
      { speaker: 'rwen', rwenLine: '은/는 — small but mandatory. Master this and Korean sentences click together.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'As for me (topic marked)', correct: ['저는', 'jeoneun'] },
      { prompt: 'Topic marker after consonant', correct: ['은', 'eun'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three Korean words you know. Decide for each: 은 or 는? Last sound is the trigger.",
    rwenSignoff: "Particles run Korean. 은/는 is the topic dial.",
  },

  phase8: {
    scenario: "Self-intro practice — Rwen quizzes you on particle endings as you build sentences about yourself, your friends, your job.",
    rwenRole: "Rwen — patient grammar coach.",
    successCriteria: "User picks 은/는 correctly by ending sound for at least 3 nouns. Uses 저는 in self-intro.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
