import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-ajumma-ajussi',
  module: 5,
  lesson: 6,
  title: 'Ajumma / Ajussi — Older Strangers',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "아줌마 (married/older woman) and 아저씨 (older man) — the universal Korean address terms for older strangers. Use to flag down a market vendor, a taxi driver, a restaurant ahjumma.",
    culturalNote: "Calling someone 아줌마 to her face can be tricky if she's young-looking — some find it aging. Safer: 사장님 (boss/proprietor) for vendors. 아저씨 is safer because it's gender-neutral on age sensitivity.",
  },

  chunks: [
    { id: 'ajumma', target: '아줌마', native: 'Older/married woman (stranger)', literal: 'aunt-equivalent', emoji: '👩', phonetic: 'a-jum-ma', audioRef: null },
    { id: 'ajussi', target: '아저씨', native: 'Older man (stranger)', literal: 'uncle-equivalent', emoji: '👨', phonetic: 'a-jus-si', audioRef: null },
    { id: 'sajangnim', target: '사장님', native: 'Boss/proprietor (safer for vendors)', literal: 'boss-honorific', emoji: '🧑‍💼', phonetic: 'sa-jang-nim', audioRef: null },
  ],

  pattern: {
    name: 'Address by approximate age + role',
    explanation: "Younger strangers: 저기요. Older market/restaurant: 사장님 (safer) or 아줌마/아저씨. Service workers: just 저기요 + your request.",
    examples: [
      { target: '아저씨!', native: 'Sir / older man!' },
      { target: '사장님!', native: 'Boss/proprietor!' },
      { target: '저기요', native: 'Excuse me (any age)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match address to context', pairs: [
      { left: '아줌마', right: 'Older woman / married' },
      { left: '아저씨', right: 'Older man' },
      { left: '사장님', right: 'Boss / vendor (safer)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Boss / proprietor', correct: ['사장님', 'sajangnim'] },
    { type: 'fill_blank', instruction: 'Flag down a taxi driver politely', sentence: '_____, 강남까지 가주세요.', options: ['아저씨', '동생', '아들'], correct: '아저씨', context: 'Older male stranger.' },
    { type: 'build_sentence', instruction: 'Build "Boss, how much is this?"', words: ['이거', '얼마예요?', '사장님,'], correct: ['사장님,', '이거', '얼마예요?'], translation: 'Boss, how much is this?' },
    { type: 'multiple_choice', instruction: 'You\'re bargaining with a 35-year-old female market vendor. Best address?', question: 'Pick the safe move', options: [
      { text: '사장님', correct: true },
      { text: '아줌마', correct: false },
      { text: '저기요', correct: false },
    ], explanation: '사장님 (boss) is age-neutral and respectful. 아줌마 can be aging if she\'s under 40. 저기요 works but is less warm.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Older man (stranger address)', correct: ['아저씨', 'ajussi'] },
  ],

  rwenDialogue: {
    intro: "Namdaemun market. You want to bargain on a scarf.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '사장님, 이거 얼마예요?', native: 'Boss, how much is this?', correct: true, feedback: '사장님 — safe and respectful for any vendor.' },
        { target: '아줌마, 이거 얼마예요?', native: 'Auntie, how much?', correct: false, feedback: 'Risky — if she reads young, this stings. 사장님 is safer.' },
        { target: '저기요', native: 'Excuse me (just attention)', correct: false, feedback: 'Less warm than 사장님 in a market.' },
      ]},
      { speaker: 'npc', target: '아, 이거요? 30,000원이에요.', native: 'Ah, this? 30,000 won.' },
      { speaker: 'rwen', rwenLine: "사장님 — your safe-bet vendor address. Use freely.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Boss / proprietor (safe vendor address)', correct: ['사장님', 'sajangnim'] },
      { prompt: 'Older man (stranger)', correct: ['아저씨', 'ajussi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three vendor scenarios: market, taxi, food stall. Pick 사장님/아저씨/저기요 for each.",
    rwenSignoff: "Address terms = social radar. Pick the safe one.",
  },

  phase8: {
    scenario: "Three quick interactions: bargaining at a market stall, hailing a taxi, calling a restaurant server. Pick the right address each time.",
    rwenRole: "Multiple — vendor (사장님), taxi driver (아저씨), server (저기요).",
    successCriteria: "User picks 사장님 for vendor, 아저씨 for taxi, 저기요 for server. Avoids 아줌마 unless context clearly safe.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
