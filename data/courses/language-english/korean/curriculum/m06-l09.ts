import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: '쇼핑 숫자 — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "쇼핑 숫자 표현 — '2 for 10 dollars' (2개에 10달러), 'discount' (할인), 'total' (합계). 영어권 매장에서 매일 듣는 카드예요.",
    culturalNote: "한국 매장은 '2개 사면 1개 더!' 식 행사가 많지만, 영어권은 'Buy one, get one free (BOGO)' 또는 '2 for $10'. 'Discount'는 할인된 가격, 'sale'은 행사 기간.",
  },

  chunks: [
    { id: 'two_for_ten',     target: 'Two for ten dollars', native: '2개에 10달러 (du-gae-e sip-dalleo)',  literal: 'two for ten dollars', emoji: '🛒', phonetic: 'too-for-TEN-DOL-ers', audioRef: null },
    { id: 'discount',         target: 'Discount',             native: '할인 (harin)',                          literal: 'discount',             emoji: '🏷️', phonetic: 'DIS-kownt',           audioRef: null },
    { id: 'total_altogether', target: 'Total / altogether',  native: '합계 / 전체 (hapgye / jeonche)',         literal: 'total / altogether',  emoji: '💯', phonetic: 'TOH-tul-AWL-too-geth-er', audioRef: null },
  ],

  pattern: {
    name: 'Shopping math vocabulary',
    explanation: "'Two for ten' = 2개 묶음 가격. '10% discount' = 10% 할인. 'Total' = 합계. 'Altogether' = 다 합쳐서. 매장 계산대에서 거의 매번 등장.",
    examples: [
      { target: 'Two shirts for thirty dollars.',  native: '셔츠 두 개에 30달러.' },
      { target: 'A 10% discount.',                  native: '10% 할인.' },
      { target: 'The total is fifty dollars.',       native: '합계 50달러예요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Two for ten dollars', right: '2개에 10달러' },
      { left: 'Discount',             right: '할인' },
      { left: 'Total / altogether',   right: '합계 / 전체' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '10% 할인', correct: ['10% discount', 'A 10% discount', 'Ten percent discount'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'The ____ is fifty dollars.', options: ['total', 'totals', 'totally'], correct: 'total', context: '합계 명사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"3개에 10달러"의 영어:', options: [
      { text: 'Three for ten dollars',       correct: true },
      { text: 'Ten for three dollars',         correct: false },
      { text: 'Three dollars ten',              correct: false },
    ], explanation: '갯수 + for + 가격.' },
    { type: 'build_sentence', instruction: '문장', words: ['dollars', 'fifty', 'is', 'total', 'The'], correct: ['The', 'total', 'is', 'fifty', 'dollars'], translation: '합계 50달러예요' },
    { type: 'translate', instruction: '영어로', prompt: '할인 있나요?', correct: ['Is there any discount?', 'Is there a discount?', 'Any discount?'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 매장 — 계산대에서 합계·할인 영어로.',
    lines: [
      { speaker: 'npc', target: "Your total is fifty-five dollars.", native: '합계 55달러예요.' },
      { speaker: 'user', userChoices: [
        { target: 'Is there any student discount?', native: '학생 할인 있나요?', correct: true, feedback: '할인 묻기 — 매장에서 자주 활용.' },
        { target: 'Discount me.',                     native: '할인 나.',           correct: false, feedback: '동사 + 구조 빠짐.' },
        { target: 'Yes.',                              native: '네.',                  correct: false, feedback: '확인이 필요해요.' },
      ]},
      { speaker: 'npc', target: "Sure — 10% off makes it forty-nine fifty.", native: '네 — 10% 할인하면 49.50달러예요.' },
      { speaker: 'rwen', rwenLine: '쇼핑 숫자 — total/discount/percent — 매장 계산대 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Discount (영어로)', correct: ['Discount', 'discount'] },
      { prompt: 'Total (영어로)',     correct: ['Total', 'total'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 본 매장 가격을 영어로 합계·할인·갯수당 가격으로 풀어 보세요.",
    rwenSignoff: '쇼핑 영어 — 매일 매장 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 매장 계산대 — 합계 듣고 할인 묻기.',
    rwenRole: 'Cashier, 26세 미국인.',
    successCriteria: "User uses 'discount', 'total', or 'altogether'; may ask for percentage off.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
