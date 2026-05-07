import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-sino-1-10',
  module: 6,
  lesson: 2,
  title: 'Sino-Korean 1-10',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십. Sino-Korean 1 through 10. Used for money, phone numbers, dates, minutes. Lock these — half your daily Korean numbers ride on them.",
    culturalNote: "Sino-Korean numbers are borrowed from Chinese (hence 'Sino'), so they sound similar to Mandarin/Japanese. If you've studied either, these come fast.",
  },

  chunks: [
    { id: 'sino_1_5', target: '일 / 이 / 삼 / 사 / 오', native: '1 / 2 / 3 / 4 / 5 (Sino)', literal: 'Sino 1-5', emoji: '🖐️', phonetic: 'il / i / sam / sa / o', audioRef: null },
    { id: 'sino_6_10', target: '육 / 칠 / 팔 / 구 / 십', native: '6 / 7 / 8 / 9 / 10 (Sino)', literal: 'Sino 6-10', emoji: '🔟', phonetic: 'yuk / chil / pal / gu / sip', audioRef: null },
    { id: 'sino_zero', target: '영 / 공', native: '0 (zero — pronounced 영 in math, 공 in phone numbers)', literal: '0', emoji: '0️⃣', phonetic: 'yeong / gong', audioRef: null },
  ],

  pattern: {
    name: 'Sino 1-10',
    explanation: "Memorize the 10 syllables. Most teen and tens combinations are 십 (10) + the others.",
    examples: [
      { target: '일이삼사오', native: '1-2-3-4-5' },
      { target: '육칠팔구십', native: '6-7-8-9-10' },
      { target: '공일공 (010)', native: 'Phone prefix 010 (서울 mobile)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Sino number to digit', pairs: [
      { left: '일', right: '1' },
      { left: '오', right: '5' },
      { left: '십', right: '10' },
    ]},
    { type: 'translate', instruction: 'Type in Sino-Korean', prompt: '5', correct: ['오', 'o'] },
    { type: 'fill_blank', instruction: 'Phone prefix 010', sentence: '_____ 일공 ...', options: ['공', '영', '하나'], correct: '공', context: 'Phone numbers use 공 for 0.' },
    { type: 'build_sentence', instruction: 'Build "1-2-3-4"', words: ['이', '일', '사', '삼'], correct: ['일', '이', '삼', '사'], translation: '1-2-3-4 (Sino).' },
    { type: 'multiple_choice', instruction: 'How do you read "7" in Sino?', question: 'Pick the right syllable', options: [
      { text: '칠', correct: true },
      { text: '일곱', correct: false },
      { text: '구', correct: false },
    ], explanation: '칠 = Sino 7. 일곱 = Native 7. 구 = Sino 9.' },
    { type: 'translate', instruction: 'Type in Sino-Korean', prompt: '10', correct: ['십', 'sip'] },
  ],

  rwenDialogue: {
    intro: "Phone-number swap with a Korean friend.",
    lines: [
      { speaker: 'npc', target: '제 번호는 010-1234-5678이에요', native: "My number is 010-1234-5678" },
      { speaker: 'user', userChoices: [
        { target: '공일공 일이삼사 오육칠팔', native: '010 1234 5678 (Sino)', correct: true, feedback: 'Phone numbers are Sino, with 공 for 0. Locked.' },
        { target: '하나둘셋 ...', native: 'Native', correct: false, feedback: 'Native numbers do NOT do phone numbers.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: '일이삼사오 + 육칠팔구십 — Sino 1-10 locked.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Sino 5', correct: ['오', 'o'] },
      { prompt: 'Sino 10', correct: ['십', 'sip'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Recite 일이삼사오육칠팔구십 three times. Out loud. Speed up each round.",
    rwenSignoff: "Sino 1-10 locked. Money and phones are now reachable.",
  },

  phase8: {
    scenario: "Korean friend gives you their phone number; you read it back to confirm.",
    rwenRole: "Friend — peer, polite.",
    successCriteria: "User reads digits in Sino-Korean. Uses 공 for zero in phone context. Stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
