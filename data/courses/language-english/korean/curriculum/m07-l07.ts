import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: '음료 — Tea, Coffee, Drinks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "음료 영어 — Tea with milk (밀크티), Black coffee (블랙커피), A glass of water (물 한 잔). 'A cup of ___ / A glass of ___' 패턴.",
    culturalNote: "한국 카페는 종류 풍부 — 아메리카노·라떼·바닐라라떼·플랫화이트. 영어 카페에서도 다 통해요. 다만 'iced'(아이스) 자리 — 'iced americano' = 아이스아메리카노. 영어권 일반 카페는 따뜻한 게 기본이에요.",
  },

  chunks: [
    { id: 'tea_with_milk',  target: 'Tea with milk',     native: '밀크티 (milkeuti)',                literal: 'tea with milk',     emoji: '🍵', phonetic: 'TEE-with-MILK',     audioRef: null },
    { id: 'black_coffee',    target: 'Black coffee',       native: '블랙커피 (beullaek-keopi)',         literal: 'black coffee',       emoji: '☕', phonetic: 'BLAK-KOF-ee',       audioRef: null },
    { id: 'glass_of_water',  target: 'A glass of water',   native: '물 한 잔 (mul han jan)',             literal: 'a glass of water',   emoji: '💧', phonetic: 'uh-GLAS-uv-WAH-ter', audioRef: null },
  ],

  pattern: {
    name: 'A cup of / A glass of',
    explanation: "공식: 'A cup of + 뜨거운 음료 (tea, coffee)', 'A glass of + 차가운 음료 (water, juice, beer)'. 한국어 '~한 잔'을 영어 cup/glass로 구분.",
    examples: [
      { target: 'A cup of tea',     native: '차 한 잔' },
      { target: 'A glass of water', native: '물 한 잔' },
      { target: 'Black coffee',      native: '블랙커피' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Tea with milk',     right: '밀크티' },
      { left: 'Black coffee',       right: '블랙커피' },
      { left: 'A glass of water',   right: '물 한 잔' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '물 한 잔', correct: ['A glass of water', 'a glass of water'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'A ____ of tea, please.', options: ['cup', 'glass', 'piece'], correct: 'cup', context: '뜨거운 음료 — cup.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"아이스아메리카노 한 잔" 영어:', options: [
      { text: 'An iced americano',           correct: true },
      { text: 'Ice americano',                  correct: false },
      { text: 'A cold americano',                correct: false },
    ], explanation: 'iced (-ed 형용사) + americano. 모음 시작 → an.' },
    { type: 'build_sentence', instruction: '문장', words: ['water', 'A', 'of', 'glass'], correct: ['A', 'glass', 'of', 'water'], translation: '물 한 잔' },
    { type: 'translate', instruction: '영어로', prompt: '블랙커피', correct: ['Black coffee', 'black coffee'] },
  ],

  rwenDialogue: {
    intro: '런던 카페 — 음료 주문.',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: '뭐 드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "A cup of black coffee and a glass of water, please.", native: '블랙커피 한 잔, 물 한 잔 주세요.', correct: true, feedback: 'cup of (커피) + glass of (물) — 정확히 구분.' },
        { target: 'Coffee water.',                                          native: '커피 물.',                          correct: false, feedback: '구조 부족. A cup of, a glass of.' },
        { target: 'Yes.',                                                    native: '네.',                                correct: false, feedback: '구체적 주문 필요.' },
      ]},
      { speaker: 'npc', target: "Anything else?", native: '더 필요한 거 있으세요?' },
      { speaker: 'rwen', rwenLine: 'cup of / glass of — 영어 음료의 기본 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A cup of tea (영어로)',     correct: ['A cup of tea', 'a cup of tea'] },
      { prompt: 'A glass of water (영어로)', correct: ['A glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 마실 음료 3개를 영어로 — A cup of ___ / A glass of ___.",
    rwenSignoff: '음료 영어 — 카페 매일의 카드.',
  },

  phase8: {
    scenario: '런던 카페에서 음료 주문 — cup/glass 구분 정확히.',
    rwenRole: 'Barista, 26세 영국인.',
    successCriteria: "User orders with 'A cup of ___' for hot drinks AND 'A glass of ___' for cold.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
