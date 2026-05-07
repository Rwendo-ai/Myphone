import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: '식당에서 — At a restaurant',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "식당 영어 3카드 — 'A table for two' (2인석), 'The menu, please' (메뉴 부탁), 'The bill, please' (계산서 부탁).",
    culturalNote: "한국 식당에서는 '여기요!' 외치며 직원 부르지만, 영어권은 손 살짝 들거나 눈 마주치기. 'Excuse me'면 충분. 큰 소리는 무례해요.",
  },

  chunks: [
    { id: 'table_for_two', target: 'A table for two',  native: '2인석 부탁드려요 (i-in-seok butakdeuryeoyo)', literal: 'a table for two',  emoji: '🪑', phonetic: 'uh-TAY-bul-for-TOO', audioRef: null },
    { id: 'menu_please',   target: 'The menu, please',  native: '메뉴 주세요 (menyu juseyo)',                  literal: 'the menu please',   emoji: '📋', phonetic: 'thuh-MEN-yoo-pleez', audioRef: null },
    { id: 'bill_please',   target: 'The bill, please',   native: '계산서 주세요 (gyesanseo juseyo)',              literal: 'the bill please',   emoji: '🧾', phonetic: 'thuh-BIL-pleez',     audioRef: null },
  ],

  pattern: {
    name: 'Restaurant 3-card combo',
    explanation: "(1) 입장: 'A table for ___', please. (2) 주문 시작: 'The menu, please'. (3) 마무리: 'The bill, please' (UK) / 'The check, please' (US). 영국은 bill, 미국은 check.",
    examples: [
      { target: 'A table for two, please.',  native: '2인석 부탁드려요.' },
      { target: 'The menu, please.',          native: '메뉴 주세요.' },
      { target: 'The check, please.',          native: '계산서 주세요. (미국)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'A table for two', right: '2인석' },
      { left: 'The menu, please', right: '메뉴 주세요' },
      { left: 'The bill, please',  right: '계산서 주세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '2인석 부탁드려요', correct: ['A table for two, please', 'A table for two please', 'A table for two'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "____ menu, please.", options: ['The', 'A', 'An'], correct: 'The', context: '특정 메뉴 — the.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '4명 자리 부탁:', options: [
      { text: 'A table for four, please.',  correct: true },
      { text: 'Four table.',                  correct: false },
      { text: 'Table four me.',                correct: false },
    ], explanation: 'A table for + 숫자 + please.' },
    { type: 'build_sentence', instruction: '문장', words: ['please', 'menu', 'The'], correct: ['The', 'menu', 'please'], translation: '메뉴 주세요' },
    { type: 'translate', instruction: '영어로', prompt: '계산서 주세요', correct: ['The bill, please', 'The check, please', 'The bill please'] },
  ],

  rwenDialogue: {
    intro: '런던 한식당 — 영어로 처음 식당 이용.',
    lines: [
      { speaker: 'npc', target: "Welcome. How can I help you?", native: '환영합니다. 어떻게 도와드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: 'A table for two, please. And the menu, when you have a moment.', native: '2인석 부탁드려요. 시간 되시면 메뉴도요.', correct: true, feedback: '입장 + 메뉴 부탁 — 정중한 톤.' },
        { target: 'Two!',                                                              native: '둘!',                                  correct: false, feedback: '구조 부족. A table for two, please.' },
        { target: 'Bye.',                                                               native: '잘 가.',                                correct: false, feedback: '식사 시작이에요.' },
      ]},
      { speaker: 'npc', target: "Right this way. Menu coming up.", native: '이쪽으로요. 메뉴 가져다 드릴게요.' },
      { speaker: 'rwen', rwenLine: '식당 입장 — A table for + 숫자, 핵심 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A table for two (영어로)', correct: ['A table for two', 'a table for two'] },
      { prompt: 'The menu, please (영어로)', correct: ['The menu, please', 'The menu please'] },
      { prompt: 'The bill, please (영어로)',  correct: ['The bill, please', 'The check, please', 'The bill please'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "다음 식당에서 영어 3카드 — table/menu/bill — 머릿속으로 시뮬레이션.",
    rwenSignoff: '식당 영어 — 입장부터 계산까지의 3장 카드예요.',
  },

  phase8: {
    scenario: '런던 한식당에서 영어로 식당 이용 — 입장·메뉴·계산서 모두.',
    rwenRole: 'Restaurant host, 35세 영국인.',
    successCriteria: "User uses 'A table for ___', 'The menu, please', and 'The bill/check, please'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
