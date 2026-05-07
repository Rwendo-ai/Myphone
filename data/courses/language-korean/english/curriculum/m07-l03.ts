import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-bbq',
  module: 7,
  lesson: 3,
  title: 'Korean BBQ — Order, Cook, Share',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "한국식 바베큐 (Korean BBQ) — 삼겹살 (pork belly), 갈비 (short ribs), 불고기 (marinated beef). You grill at the table. The phrasebook: order portions, ask for sides, request more lettuce.",
    culturalNote: "BBQ is communal — Koreans share from one grill. The youngest at the table usually grills (정 — care via service). Wrap meat in lettuce + ssamjang + garlic = ssam. Eat the whole bundle in one bite.",
  },

  chunks: [
    { id: 'samgyeopsal', target: '삼겹살', native: 'Pork belly', literal: 'three-layer-meat', emoji: '🥓', phonetic: 'sam-gyeop-sal', audioRef: null },
    { id: 'inbun', target: '인분', native: 'Portion (counter for meals)', literal: 'person-portion', emoji: '🍽️', phonetic: 'in-bun', audioRef: null },
    { id: 'sangchu', target: '상추 더 주세요', native: 'More lettuce please', literal: 'lettuce more give-please', emoji: '🥬', phonetic: 'sang-chu deo ju-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'X 더 주세요 — more X please',
    explanation: "더 = more. Pair with any noun + 주세요 to ask for more. Universal restaurant move: 김치 더 주세요, 물 더 주세요, 반찬 더 주세요.",
    examples: [
      { target: '상추 더 주세요', native: 'More lettuce' },
      { target: '물 더 주세요', native: 'More water' },
      { target: '반찬 더 주세요', native: 'More side dishes' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match item to Korean', pairs: [
      { left: '삼겹살', right: 'Pork belly' },
      { left: '갈비', right: 'Short ribs' },
      { left: '인분', right: 'Portion (counter)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'More lettuce please', correct: ['상추 더 주세요', 'sangchu deo juseyo'] },
    { type: 'fill_blank', instruction: 'Order two portions of pork belly', sentence: '삼겹살 _____ 인분 주세요.', options: ['이', '두', '둘'], correct: '이', context: '인분 takes Sino — exception to the Native counter rule.' },
    { type: 'build_sentence', instruction: 'Build "More water please"', words: ['주세요', '더', '물'], correct: ['물', '더', '주세요'], translation: 'More water please.' },
    { type: 'multiple_choice', instruction: 'Best Korean BBQ opener?', question: 'Pick the natural order line', options: [
      { text: '삼겹살 이 인분 주세요', correct: true },
      { text: '삼겹살 어디예요?', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: 'Specify portions with Sino + 인분. Standard BBQ ordering.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Pork belly', correct: ['삼겹살', 'samgyeopsal'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ in Hongdae with two friends. The server arrives.",
    lines: [
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Would you like to order?' },
      { speaker: 'user', userChoices: [
        { target: '삼겹살 삼 인분 주세요', native: 'Three portions of pork belly please', correct: true, feedback: 'Sino + 인분. Standard.' },
        { target: '삼겹살 세 인분 주세요', native: 'Native + 인분 (wrong)', correct: false, feedback: '인분 takes Sino. The exception rule.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Order first.' },
      ]},
      { speaker: 'npc', target: '네! 잠시만요.', native: 'Yes! Just a moment.' },
      { speaker: 'user', userChoices: [
        { target: '저기요, 상추 더 주세요', native: 'Excuse me, more lettuce please', correct: true, feedback: 'Universal "more X please". Lock it in.' },
        { target: '상추 비싸요', native: 'Lettuce is expensive', correct: false, feedback: 'Wrong sentence shape.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'rwen', rwenLine: "BBQ Korean: 인분 portions, 더 주세요 for refills. You can lead a table now.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Pork belly', correct: ['삼겹살', 'samgyeopsal'] },
      { prompt: 'More water please', correct: ['물 더 주세요', 'mul deo juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three Korean BBQ orders in your head. Picture the table, the grill, the refills.",
    rwenSignoff: "BBQ Korean — communal, hot, shared. Now you can lead.",
  },

  phase8: {
    scenario: "Korean BBQ in Hongdae with two Korean friends. You order portions, request refills, react to the food.",
    rwenRole: "Server + Korean friends — polite, peer-friendly.",
    successCriteria: "User orders with 인분 (Sino), uses 더 주세요 for refills, reacts with 맛있어요/매워요. Stays polite.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
