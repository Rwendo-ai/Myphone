import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: '식사 대화 — Module 7 Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7 마무리 — 입장·메뉴·주문·음식 평가·계산서까지 식당 영어 한 사이클을 자연스럽게.",
    culturalNote: "한국에서는 호스트가 다 챙겨 주지만, 영어권 식당에서는 손님이 모든 단계를 직접 영어로 풀어야 해요. 이 모듈을 완주하면 영어권 어느 식당이든 자신감 있게 들어갈 수 있어요.",
  },

  chunks: [
    { id: 'table_menu_combo',  target: 'A table for two, please. Could we have the menu?',                  native: '2인석 부탁드려요. 메뉴 받을 수 있을까요?',          literal: 'a table for two please. Could we have the menu?', emoji: '🪑', phonetic: 'uh-TAY-bul',         audioRef: null },
    { id: 'order_chicken',      target: "I'd like the chicken, without onions, please.",                    native: '치킨으로 양파 빼고 주세요.',                            literal: "I'd like the chicken, without onions, please",   emoji: '🍗', phonetic: 'AYD-LYK-thuh-CHIK-en', audioRef: null },
    { id: 'delicious_bill',     target: 'It was delicious. Could we have the bill, please?',                native: '맛있었어요. 계산서 부탁드려요.',                         literal: 'it was delicious. Could we have the bill please?', emoji: '🧾', phonetic: 'it-wuz-de-LISH-us',  audioRef: null },
  ],

  pattern: {
    name: 'Full restaurant arc',
    explanation: "5단계: (1) A table for + 숫자, (2) The menu, please, (3) I'd like ___ without ___, (4) It was delicious, (5) The bill/check, please. 한 식사 전체.",
    examples: [
      { target: 'A table for two, please.',                       native: '2인석.' },
      { target: "I'd like the bibimbap, without egg.",            native: '비빔밥 계란 빼고요.' },
      { target: 'It was delicious. The bill, please.',             native: '맛있었어요. 계산서 부탁.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'A table for two',           right: '2인석' },
      { left: "I'd like the chicken",       right: '치킨으로 주세요' },
      { left: 'The bill, please',            right: '계산서 부탁' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '치킨으로 양파 빼고 주세요', correct: ["I'd like the chicken, without onions, please", "I'd like the chicken without onions, please", "Could I have the chicken without onions, please"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'It ____ delicious.', options: ['was', 'is', 'are'], correct: 'was', context: '식사 마무리 — 과거형 was.' },
    { type: 'multiple_choice', instruction: '식당 흐름', question: '한 식사 영어 5단계 흐름:', options: [
      { text: 'Table → Menu → Order → Praise → Bill', correct: true },
      { text: 'Menu → Bye',                              correct: false },
      { text: 'Order → Bye',                              correct: false },
    ], explanation: '5단계 표준 흐름.' },
    { type: 'build_sentence', instruction: '문장', words: ['please', 'bill', 'The'], correct: ['The', 'bill', 'please'], translation: '계산서 부탁' },
    { type: 'translate', instruction: '영어로', prompt: '맛있었어요', correct: ['It was delicious', 'it was delicious'] },
  ],

  rwenDialogue: {
    intro: '런던 한식당 — 영어로 식사 한 사이클을 한 번에 풀기.',
    lines: [
      { speaker: 'npc', target: "Welcome. How can I help you?", native: '환영합니다. 어떻게 도와드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "A table for two, please. Could we have the menu? I'd like the bibimbap without egg, and a glass of water. (식사 후) It was delicious. The bill, please.", native: '2인석 부탁드려요. 메뉴 받을 수 있을까요? 비빔밥 계란 빼고, 물 한 잔이요. (식사 후) 맛있었어요. 계산서 부탁드려요.', correct: true, feedback: 'Module 7 5단계 다 — table → menu → order → praise → bill. 완벽한 식당 영어.' },
        { target: 'Bibimbap.',                                                                                                                                                native: '비빔밥.',                                                                                                              correct: false, feedback: '구조 부족. 5단계 적용해 보세요.' },
        { target: 'Bye.',                                                                                                                                                      native: '잘 가.',                                                                                                                correct: false, feedback: '식사 시작이에요.' },
      ]},
      { speaker: 'npc', target: "Of course. So glad you enjoyed it.", native: '물론이죠. 맛있게 드셨다니 좋네요.' },
      { speaker: 'rwen', rwenLine: 'Module 7 완성 — 영어 식당 5단계를 자연스럽게 풀었어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '5단계 기억',
    prompts: [
      { prompt: 'A table for two, please (영어로)',     correct: ['A table for two, please', 'A table for two please'] },
      { prompt: "I'd like the chicken (영어로)",          correct: ["I'd like the chicken", "I would like the chicken"] },
      { prompt: 'The bill, please (영어로)',                correct: ['The bill, please', 'The check, please'] },
    ],
  },

  mission: {
    title: 'Module 7 미션',
    task: "오늘 머릿속으로 영어 식당 5단계를 한 흐름으로 시뮬레이션해 보세요.",
    rwenSignoff: 'Module 7 완성. 다음은 Module 8 — 일상 동사예요.',
  },

  phase8: {
    scenario: '런던 한식당에서 영어 식당 5단계 한 사이클 — 입장부터 계산까지.',
    rwenRole: 'Restaurant server, 30세 영국인.',
    successCriteria: "User chains: table request + menu + order with 'I'd like / without' + praise 'It was delicious' + bill request.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
