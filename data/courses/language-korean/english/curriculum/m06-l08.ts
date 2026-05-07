import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money',
  module: 6,
  lesson: 8,
  title: 'Money — Won, Cards, Cash',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "원 (won) — the Korean currency. Card or cash? 카드 or 현금. 영수증 (receipt) on request. The full transaction phrasebook.",
    culturalNote: "Korea is largely cashless — even 5,000 won café orders go on cards. Always polite to ask 카드 돼요? (do you take cards?) at small stalls; many ahjummas at markets prefer cash.",
  },

  chunks: [
    { id: 'won', target: '원', native: 'Won (currency)', literal: 'won', emoji: '₩', phonetic: 'won', audioRef: null },
    { id: 'kadeu', target: '카드', native: 'Card', literal: 'card', emoji: '💳', phonetic: 'ka-deu', audioRef: null },
    { id: 'hyeongeum', target: '현금', native: 'Cash', literal: 'cash', emoji: '💵', phonetic: 'hyeon-geum', audioRef: null },
  ],

  pattern: {
    name: 'Payment + 으로 (with/by)',
    explanation: "으로 = with/by (instrumental). 카드로 = by card. 현금으로 = by cash. 으로 after consonant; 로 after vowel.",
    examples: [
      { target: '카드로 할게요', native: "I'll pay by card" },
      { target: '현금으로 할게요', native: "I'll pay by cash" },
      { target: '영수증 주세요', native: 'Receipt please' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '카드', right: 'Card' },
      { left: '현금', right: 'Cash' },
      { left: '영수증', right: 'Receipt' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Receipt please', correct: ['영수증 주세요', 'yeongsujeung juseyo'] },
    { type: 'fill_blank', instruction: 'Pay by card', sentence: '_____ 할게요.', options: ['카드로', '카드를', '카드는'], correct: '카드로', context: '으로/로 = with/by (instrumental).' },
    { type: 'build_sentence', instruction: 'Build "I\'ll pay by cash"', words: ['할게요', '현금으로'], correct: ['현금으로', '할게요'], translation: "I'll pay by cash." },
    { type: 'multiple_choice', instruction: 'Asking if a small stall takes cards?', question: 'Pick the polite ask', options: [
      { text: '카드 돼요?', correct: true },
      { text: '카드 비싸요?', correct: false },
      { text: '카드 어디예요?', correct: false },
    ], explanation: '돼요? = "is it ok / does it work?". The natural Korean ask.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'll pay by card", correct: ['카드로 할게요', 'kadeuro halgeyo'] },
  ],

  rwenDialogue: {
    intro: "Convenience store cashier rings up your purchase.",
    lines: [
      { speaker: 'npc', target: '오천 원입니다. 결제 방법은요?', native: "5,000 won. Payment method?" },
      { speaker: 'user', userChoices: [
        { target: '카드로 할게요', native: 'By card', correct: true, feedback: '으로/로 instrumental locked.' },
        { target: '카드를 할게요', native: 'Card-OBJ (wrong)', correct: false, feedback: 'Object marker on a method = wrong. Use 으로/로.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: '5,000 won is fine — pay.' },
      ]},
      { speaker: 'npc', target: '네, 영수증 드릴까요?', native: 'Yes, would you like a receipt?' },
      { speaker: 'user', userChoices: [
        { target: '네, 주세요', native: 'Yes, please', correct: true, feedback: 'Polite acceptance.' },
        { target: '아니요', native: 'No', correct: true, feedback: 'Also fine.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Already told.' },
      ]},
      { speaker: 'rwen', rwenLine: '으로/로 + payment method. 영수증 + 주세요. Korean transactions are this clean.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I'll pay by card", correct: ['카드로 할게요', 'kadeuro halgeyo'] },
      { prompt: 'Receipt please', correct: ['영수증 주세요', 'yeongsujeung juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture three transactions. Run: 얼마예요? → (price) → 카드로/현금으로 할게요 → 영수증 주세요.",
    rwenSignoff: "The full Korean transaction. You're ready for any cashier.",
  },

  phase8: {
    scenario: "Convenience store + a small market stall — pay each one with the right method, ask for receipt.",
    rwenRole: "Cashier and stall vendor — polite, fast.",
    successCriteria: "User uses 카드로/현금으로 + 할게요. Asks for receipt politely. Confirms price.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
