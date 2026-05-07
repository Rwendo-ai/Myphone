import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: '주문 — Ordering food',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "주문 영어 — 'I'd like ___', 'Could I have ___', 'Without ___' (~빼고). 'I want'은 너무 직접적, 'I'd like'가 정중해요.",
    culturalNote: "한국에서는 '~주세요'가 표준이지만, 영어 'Give me ___'는 무례해요. 'I'd like ___' (저는 ~을 원해요) 또는 'Could I have ___' (~가능할까요)가 정중한 표준.",
  },

  chunks: [
    { id: 'id_like',         target: "I'd like...",         native: '저는 ~을 원해요 (jeoneun ~eul wonhaeyo)', literal: 'I would like',     emoji: '🍽️', phonetic: 'AYD-LYK',          audioRef: null },
    { id: 'could_i_have',    target: 'Could I have...',     native: '~을 받을 수 있을까요? (~eul badeul su isseulkkayo?)', literal: 'could I have',  emoji: '🤲', phonetic: 'kud-aye-HAV',     audioRef: null },
    { id: 'without_onions',  target: 'Without onions',      native: '양파 빼고 (yangpa ppaego)',                        literal: 'without onions',     emoji: '🧅', phonetic: 'with-OWT-UN-yunz', audioRef: null },
  ],

  pattern: {
    name: 'Polite ordering forms',
    explanation: "정중함 사다리: 'I want ___' (직접) < 'I'd like ___' (정중) < 'Could I have ___?' (격식). 식당에서는 가운데 또는 위 카드. 'Without ___' = 식재료 빼기.",
    examples: [
      { target: "I'd like the chicken.",      native: '치킨으로 주세요.' },
      { target: 'Could I have water?',         native: '물 좀 주실 수 있을까요?' },
      { target: 'Without onions, please.',      native: '양파 빼고 주세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'd like...",         right: '저는 ~을 원해요' },
      { left: 'Could I have...',     right: '~받을 수 있을까요?' },
      { left: 'Without onions',      right: '양파 빼고' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '양파 빼고', correct: ['Without onions', 'without onions'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'd ____ the chicken.", options: ['like', 'want', 'love'], correct: 'like', context: "I'd like — 정중한 주문." },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"치킨에서 양파 빼고 주세요" 영어:', options: [
      { text: "I'd like the chicken without onions, please.", correct: true },
      { text: 'Chicken no onion!',                                correct: false },
      { text: 'Onion bye chicken.',                                 correct: false },
    ], explanation: "I'd like + 음식 + without + 빼는 것 + please." },
    { type: 'build_sentence', instruction: '문장', words: ['have', 'I', 'water', 'Could'], correct: ['Could', 'I', 'have', 'water'], translation: '물 받을 수 있을까요?' },
    { type: 'translate', instruction: '영어로', prompt: '치킨으로 주세요', correct: ["I'd like the chicken", "I'd like chicken", "Could I have the chicken"] },
  ],

  rwenDialogue: {
    intro: 'LA 햄버거집 — 양파·피클 빼서 주문.',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: '뭐 드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "I'd like a cheeseburger without onions, please. And could I have water?", native: '치즈버거 양파 빼고요. 물도 받을 수 있을까요?', correct: true, feedback: "I'd like + without + Could I have — 모든 카드 다." },
        { target: 'Cheeseburger no onion give me.',                                                  native: '치즈버거 양파 없이 줘.',                       correct: false, feedback: '명령형은 무례해요. I\'d like 사용.' },
        { target: 'Yes.',                                                                              native: '네.',                                              correct: false, feedback: '구체화 필요해요.' },
      ]},
      { speaker: 'npc', target: "Got it — coming up.", native: '알겠어요 — 준비할게요.' },
      { speaker: 'rwen', rwenLine: "I'd like + without — 정중한 주문 영어 카드.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'd like (영어로)",      correct: ["I'd like", "I would like"] },
      { prompt: 'Could I have (영어로)',   correct: ['Could I have', 'could I have'] },
      { prompt: 'Without onions (영어로)', correct: ['Without onions', 'without onions'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "음식 5개를 영어로 정중히 주문 시뮬레이션 — I'd like + 음식 + without + 알레르기/비호 식재료.",
    rwenSignoff: "I'd like — 영어 정중함의 황금 카드.",
  },

  phase8: {
    scenario: 'LA 햄버거집 — 알레르기·비호 식재료 빼서 정중히 주문.',
    rwenRole: 'Server, 28세 미국인.',
    successCriteria: "User uses 'I'd like ___' or 'Could I have ___', adds 'without ___' for excluded ingredients.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
