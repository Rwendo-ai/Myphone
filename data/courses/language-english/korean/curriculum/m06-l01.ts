import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: '숫자 1-10 — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어는 한자어 (일·이·삼)와 고유어 (하나·둘·셋) 두 체계가 있어요. 영어는 하나 — one, two, three. 단순해서 처음에 빠르게 익혀요.",
    culturalNote: "한국어는 시간엔 고유어 (한 시·두 시), 분엔 한자어 (일 분·이 분). 영어는 모든 자리에 같은 숫자. 'one o'clock', 'one minute'. 단순함이 영어 숫자의 매력이에요.",
  },

  chunks: [
    { id: 'one_to_five',   target: 'One, two, three, four, five',     native: '하나, 둘, 셋, 넷, 다섯 (hana, dul, set, net, daseot)',    literal: '1, 2, 3, 4, 5',  emoji: '5️⃣', phonetic: 'WUN-TOO-THREE-FOR-FYV', audioRef: null },
    { id: 'six_to_ten',    target: 'Six, seven, eight, nine, ten',    native: '여섯, 일곱, 여덟, 아홉, 열 (yeoseot, ilgop, yeodeol, ahop, yeol)', literal: '6, 7, 8, 9, 10', emoji: '🔟', phonetic: 'SIX-SEV-en-AYT-NYN-TEN', audioRef: null },
    { id: 'how_many',      target: 'How many?',                         native: '몇 개? (myeot gae?)',                                       literal: 'how many?',       emoji: '❓', phonetic: 'how-MEN-ee',         audioRef: null },
  ],

  pattern: {
    name: 'Cardinal numbers',
    explanation: "1-10: one, two, three, four, five, six, seven, eight, nine, ten. 'How many?' = 몇 개?. 셀 수 있는 명사 + 숫자 + (복수 -s). 'I have three cats' (cats with -s).",
    examples: [
      { target: 'I have three cats.',  native: '고양이 세 마리 있어요.' },
      { target: 'Five minutes.',         native: '5분.' },
      { target: 'How many people?',     native: '몇 명?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'One',   right: '하나' },
      { left: 'Five',  right: '다섯' },
      { left: 'Ten',   right: '열' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '여덟', correct: ['Eight', 'eight'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have ____ cats.', options: ['three', 'three cats', 'cat three'], correct: 'three', context: '숫자 + 복수 명사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"고양이 다섯 마리"의 영어:', options: [
      { text: 'Five cats',  correct: true },
      { text: 'Cats five',   correct: false },
      { text: 'Five cat',     correct: false },
    ], explanation: '숫자 먼저 + 복수 명사.' },
    { type: 'build_sentence', instruction: '문장', words: ['cats', 'have', 'three', 'I'], correct: ['I', 'have', 'three', 'cats'], translation: '고양이 세 마리 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '몇 개?', correct: ['How many?', 'how many?'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 카페 — 친구들 자리 잡기.',
    lines: [
      { speaker: 'npc', target: "How many people?", native: '몇 명이세요?' },
      { speaker: 'user', userChoices: [
        { target: 'Four, please.',      native: '네 명이요.', correct: true, feedback: '간단·정확.' },
        { target: 'Four people me.',     native: '네 사람 나.',  correct: false, feedback: 'please 한 마디면 충분.' },
        { target: 'Yes.',                 native: '네.',           correct: false, feedback: '숫자가 필요해요.' },
      ]},
      { speaker: 'npc', target: "Right this way.", native: '이쪽으로요.' },
      { speaker: 'rwen', rwenLine: '숫자 1-10 — 영어 일상의 절반은 여기서 시작해요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: '5 (영어로)',  correct: ['Five', 'five'] },
      { prompt: '10 (영어로)', correct: ['Ten', 'ten'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "1-10을 영어로 큰 소리로 5번. 일상 사물 갯수를 영어로 셀 수 있게.",
    rwenSignoff: '숫자 영어 — 입에 익혀야 자동으로 나와요.',
  },

  phase8: {
    scenario: '뉴욕 카페에서 인원수·주문 수 영어로.',
    rwenRole: 'Cafe host, 24세.',
    successCriteria: "User correctly uses numbers 1-10 with appropriate plural forms.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
