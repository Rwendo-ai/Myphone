import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-sino-bigger',
  module: 6,
  lesson: 3,
  title: 'Sino-Korean Beyond 10 — 백, 천, 만',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Korean numbers think in TEN-THOUSANDS, not thousands. 만 (10,000) is the base unit. 일만 = 10,000. 십만 = 100,000. 백만 = 1,000,000. This is the source of every learner's headache. Master it = win.",
    culturalNote: "Korean prices skip easily into manda. A typical dinner = 만 원. A nice meal = 삼만 원. A new phone = 백만 원. Once you flip your brain to 만 base, prices snap into focus.",
  },

  chunks: [
    { id: 'baek', target: '백', native: '100', literal: 'hundred', emoji: '💯', phonetic: 'baek', audioRef: null },
    { id: 'cheon', target: '천', native: '1,000', literal: 'thousand', emoji: '1️⃣0️⃣0️⃣0️⃣', phonetic: 'cheon', audioRef: null },
    { id: 'man', target: '만', native: '10,000', literal: 'ten-thousand (BASE UNIT)', emoji: '💰', phonetic: 'man', audioRef: null },
  ],

  pattern: {
    name: 'Build by 만 (10,000)',
    explanation: "Korean groups by 4 digits, not 3. 10,000 = 만. 100,000 = 십만 (10 ten-thousands). 1,000,000 = 백만 (100 ten-thousands). 10,000,000 = 천만.",
    examples: [
      { target: '오천 원', native: '5,000 won' },
      { target: '만 원', native: '10,000 won' },
      { target: '삼만 원', native: '30,000 won' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to value', pairs: [
      { left: '백', right: '100' },
      { left: '천', right: '1,000' },
      { left: '만', right: '10,000' },
    ]},
    { type: 'translate', instruction: 'Type in Sino-Korean', prompt: '10,000', correct: ['만', 'man'] },
    { type: 'fill_blank', instruction: 'Read "30,000 won"', sentence: '_____ 원이에요.', options: ['삼만', '삼천', '삼백'], correct: '삼만', context: '3 × 만 = 30,000.' },
    { type: 'build_sentence', instruction: 'Build "5,000 won"', words: ['원', '오천'], correct: ['오천', '원'], translation: '5,000 won.' },
    { type: 'multiple_choice', instruction: 'A coffee costs 4,500 won. How do you say it?', question: 'Pick the natural reading', options: [
      { text: '사천오백 원', correct: true },
      { text: '사오백 원', correct: false },
      { text: '네천 원', correct: false },
    ], explanation: '사천오백 = 4,500. 네 (Native 4) does not pair with 천.' },
    { type: 'translate', instruction: 'Type in Sino-Korean', prompt: '100', correct: ['백', 'baek'] },
  ],

  rwenDialogue: {
    intro: "Café in Hongdae. The barista calls out the price.",
    lines: [
      { speaker: 'npc', target: '사천오백 원이에요', native: "It's 4,500 won." },
      { speaker: 'user', userChoices: [
        { target: '여기 있어요', native: 'Here you go', correct: true, feedback: 'Polite hand-off. You decoded the price correctly.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: '4,500 won is reasonable — saying 비싸요 reads as petulant.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'They just told you. Pay.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Korean prices live in 천 and 만. Hear the unit, decode the digit.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '10,000 (Sino)', correct: ['만', 'man'] },
      { prompt: '1,000 (Sino)', correct: ['천', 'cheon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three prices in your head. 5,000 / 30,000 / 100,000. Read each in Sino-Korean.",
    rwenSignoff: "만 is your base unit. Korean money is now within reach.",
  },

  phase8: {
    scenario: "Café and convenience store — you hear and confirm three prices in different ranges.",
    rwenRole: "Cashier — polite, fast.",
    successCriteria: "User decodes prices using 천/만 correctly. Confirms or pays appropriately.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
