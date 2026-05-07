import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-juseyo',
  module: 2,
  lesson: 1,
  title: 'Juseyo — Please (Give Me)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "주세요 is the Korean survival word. It means 'please give me' and attaches to almost any noun. Want water? 물 주세요. Want the bill? 계산서 주세요. This single ending unlocks 80% of café/restaurant survival.",
    culturalNote: "Korean is a SOV language: object then verb. 주세요 (give-please) goes at the END. It already encodes both 'please' and 'give'. You don't say 'please' separately — 주세요 IS the please.",
  },

  chunks: [
    { id: 'juseyo', target: '주세요', native: 'Please give me / Please do', literal: 'give-please', emoji: '🙏', phonetic: 'ju-se-yo', audioRef: null },
    { id: 'mul_juseyo', target: '물 주세요', native: 'Water please', literal: 'water give-please', emoji: '💧', phonetic: 'mul ju-se-yo', audioRef: null },
    { id: 'igeo_juseyo', target: '이거 주세요', native: 'Please give me this', literal: 'this give-please', emoji: '👉', phonetic: 'i-geo ju-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Noun + 주세요',
    explanation: "The universal Korean ordering pattern: point at thing → say its name → 주세요. SOV order: object first, verb (주세요) last.",
    examples: [
      { target: '커피 주세요', native: 'Coffee please' },
      { target: '메뉴 주세요', native: 'Menu please' },
      { target: '이거 주세요', native: 'This one please' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to meaning', pairs: [
      { left: '물 주세요', right: 'Water please' },
      { left: '커피 주세요', right: 'Coffee please' },
      { left: '이거 주세요', right: 'This one please' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Water please', correct: ['물 주세요', 'mul juseyo'] },
    { type: 'fill_blank', instruction: 'Order coffee', sentence: '커피 _____.', options: ['주세요', '가세요', '계세요'], correct: '주세요', context: 'Asking the barista for coffee.' },
    { type: 'build_sentence', instruction: 'Build "Please give me this"', words: ['주세요', '이거'], correct: ['이거', '주세요'], translation: 'Please give me this.' },
    { type: 'multiple_choice', instruction: "You're at a restaurant pointing at a dish on the menu. What do you say?", question: 'Pick the natural order', options: [
      { text: '이거 주세요', correct: true },
      { text: '주세요 이거', correct: false },
      { text: '이거 가세요', correct: false },
    ], explanation: "Korean is SOV — noun first, verb (주세요) last. 가세요 means 'go please' (wrong verb)." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Coffee please', correct: ['커피 주세요', 'keopi juseyo'] },
  ],

  rwenDialogue: {
    intro: "You're at a Seoul café counter. You point at a pastry in the case.",
    lines: [
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Would you like to order?' },
      { speaker: 'user', userChoices: [
        { target: '이거 주세요', native: 'This one please', correct: true, feedback: "Clean and clear. The barista smiles." },
        { target: '이거', native: 'This (just word)', correct: false, feedback: 'Missing 주세요 — sounds like a demand.' },
        { target: '주세요 이거', native: 'Please this (wrong order)', correct: false, feedback: 'Korean is SOV — object first, verb last.' },
      ]},
      { speaker: 'npc', target: '네, 그리고 음료는요?', native: 'Yes, and a drink?' },
      { speaker: 'user', userChoices: [
        { target: '커피 주세요', native: 'Coffee please', correct: true, feedback: 'Same template, different noun. You can order anything now.' },
        { target: '커피', native: 'Coffee (just word)', correct: false, feedback: 'Add 주세요 — politeness is non-optional.' },
        { target: '안녕하세요', native: 'Hello', correct: false, feedback: 'Wrong moment — already past greetings.' },
      ]},
      { speaker: 'rwen', rwenLine: "Noun + 주세요 — that's your survival key. It opens cafés, restaurants, taxis, shops.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Water please', correct: ['물 주세요', 'mul juseyo'] },
      { prompt: 'Please give me this', correct: ['이거 주세요', 'igeo juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Mentally order three things in Korean today using 주세요. Coffee, water, the bill. Out loud if you can.",
    rwenSignoff: "주세요 — the survival word. Use it everywhere.",
  },

  phase8: {
    scenario: "You're at a Hongdae café ordering a drink and a pastry. The barista is busy and you have to be clear.",
    rwenRole: "Café barista — late 20s, polite, fast-paced.",
    successCriteria: "User uses [noun] 주세요 pattern for at least two items. Word order is correct (noun before 주세요). Stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
