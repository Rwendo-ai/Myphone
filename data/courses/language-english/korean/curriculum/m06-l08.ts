import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: '돈 — How much does it cost?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'How much does it cost?' = 얼마예요? 'It costs twenty dollars' = 20달러예요. 한국어 원과 영어 달러·파운드 단위 변환 익혀 두세요.",
    culturalNote: "달러 (USD), 파운드 (GBP), 유로 (EUR) — 영어권 주요 통화. 가격 표시 $20.99 → 'twenty dollars and ninety-nine cents' 또는 'twenty ninety-nine'. 일상엔 후자.",
  },

  chunks: [
    { id: 'how_much_cost', target: 'How much does it cost?', native: '얼마예요? (eolmayeyo?)',         literal: 'how much does it cost?', emoji: '💰', phonetic: 'how-MUCH-duz-it-KOST', audioRef: null },
    { id: 'twenty_dollars', target: 'It costs twenty dollars', native: '20달러예요 (i-sip-dalleo-ieyo)', literal: 'it costs twenty dollars', emoji: '💵', phonetic: 'it-KOSTS-twen-tee-DOL-ers', audioRef: null },
    { id: 'expensive_cheap', target: "It's expensive / It's cheap", native: '비싸요 / 싸요 (bissayo / ssayo)', literal: "it's expensive / it's cheap", emoji: '💸', phonetic: 'its-eks-PEN-siv-its-CHEEP', audioRef: null },
  ],

  pattern: {
    name: 'Cost / How much',
    explanation: "공식: 'How much does it cost?' (cost가 동사). 답: 'It costs ___ dollars'. 짧게: 'It's twenty dollars'. expensive (비싼) / cheap (싼) / affordable (적당한).",
    examples: [
      { target: 'How much does it cost?',  native: '얼마예요?' },
      { target: 'It costs $20.',             native: '20달러예요.' },
      { target: "It's a bit expensive.",     native: '좀 비싸요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'How much does it cost?', right: '얼마예요?' },
      { left: 'It costs twenty dollars', right: '20달러예요' },
      { left: "It's expensive",           right: '비싸요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '얼마예요?', correct: ['How much does it cost?', 'how much does it cost?', 'How much?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'It ____ twenty dollars.', options: ['costs', 'cost', 'is cost'], correct: 'costs', context: 'It은 단수 → costs (-s).' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"100달러? 좀 비싸네요" 영어:', options: [
      { text: "A hundred dollars? It's a bit expensive.", correct: true },
      { text: 'Hundred? Expensive!',                         correct: false },
      { text: '100 expensive me.',                            correct: false },
    ], explanation: '구조 + a bit expensive 부드러운 표현.' },
    { type: 'build_sentence', instruction: '문장', words: ['twenty', 'It', 'dollars', 'costs'], correct: ['It', 'costs', 'twenty', 'dollars'], translation: '20달러예요' },
    { type: 'translate', instruction: '영어로', prompt: '싸요', correct: ["It's cheap", "Its cheap", "It is cheap"] },
  ],

  rwenDialogue: {
    intro: '런던 매장 — 가격 묻고 비교.',
    lines: [
      { speaker: 'npc', target: "These shoes are ninety pounds.", native: '이 신발 90파운드예요.' },
      { speaker: 'user', userChoices: [
        { target: "That's a bit expensive. Do you have something cheaper?", native: '좀 비싸네요. 더 싼 거 있어요?', correct: true, feedback: 'a bit expensive + cheaper 비교 — 자연스러운 영어 협상.' },
        { target: 'Cheap!',                                                   native: '싸!',                              correct: false, feedback: '말 안 됨.' },
        { target: 'Expensive!',                                               native: '비싸!',                            correct: false, feedback: '한 단어로 외치면 무례해요. a bit으로 부드럽게.' },
      ]},
      { speaker: 'npc', target: "Sure, this pair is sixty.", native: '이건 60파운드예요.' },
      { speaker: 'rwen', rwenLine: '돈 영어 — How much + a bit + cheaper로 협상의 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How much does it cost? (영어로)', correct: ['How much does it cost?', 'how much does it cost?'] },
      { prompt: 'It costs twenty dollars (영어로)', correct: ['It costs twenty dollars', 'it costs twenty dollars'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 본 가격 5개를 영어로 — How much + costs + 단위.",
    rwenSignoff: '돈 영어 — 매장·식당 매일 카드예요.',
  },

  phase8: {
    scenario: '런던 매장에서 가격 묻고 비교 — a bit expensive로 협상.',
    rwenRole: 'Shop assistant, 35세 영국인.',
    successCriteria: "User asks 'How much?', uses 'a bit expensive', requests 'cheaper' alternative.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
