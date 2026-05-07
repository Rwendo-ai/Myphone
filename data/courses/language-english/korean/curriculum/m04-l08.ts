import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'much' = 셀 수 없는 것 (물·시간·돈), 'many' = 셀 수 있는 것 (사람·책·고양이). 한국어 '많은'은 둘 다 같지만, 영어는 엄격히 구분해요.",
    culturalNote: "한국 화자가 자주 'much friends' (X) / 'many friends' (O)로 헷갈려요. 셀 수 있느냐 없느냐 — friends는 한 명, 두 명 셀 수 있으니 many. money는 못 세니 much.",
  },

  chunks: [
    { id: 'much_water',     target: 'Much water',                native: '많은 물 (maneun mul)',                   literal: 'much water',          emoji: '💧', phonetic: 'much-WAH-ter',     audioRef: null },
    { id: 'many_friends',   target: 'Many friends',               native: '많은 친구 (maneun chingu)',                literal: 'many friends',         emoji: '👥', phonetic: 'MEN-ee-FRENDS',  audioRef: null },
    { id: 'how_much_many',  target: 'How much? / How many?',     native: '얼마나? / 몇 개? (eolmana? / myeot gae?)', literal: 'how much / how many', emoji: '❓', phonetic: 'how-MUCH-how-MEN-ee', audioRef: null },
  ],

  pattern: {
    name: 'Countable vs Uncountable',
    explanation: "셀 수 있는 명사 (-s 가능): many, few, several. 셀 수 없는 명사 (단수): much, little, a lot of. 'a lot of'는 둘 다 됨 — 안전 카드. 헷갈리면 a lot of.",
    examples: [
      { target: 'How much water?',         native: '물 얼마나?' },
      { target: 'How many friends?',        native: '친구 몇 명?' },
      { target: 'A lot of time / friends.',  native: '많은 시간 / 친구.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Much water',         right: '많은 물' },
      { left: 'Many friends',        right: '많은 친구' },
      { left: 'How much? / How many?', right: '얼마나? / 몇 개?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '많은 친구', correct: ['Many friends', 'many friends'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'How ____ time do we have?', options: ['much', 'many', 'a lot'], correct: 'much', context: 'time = 셀 수 없음.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"몇 명이세요?"의 영어:', options: [
      { text: 'How many people?',  correct: true },
      { text: 'How much people?',   correct: false },
      { text: 'How a people?',       correct: false },
    ], explanation: 'people은 셀 수 있으니 many.' },
    { type: 'build_sentence', instruction: '문장', words: ['friends', 'have', 'many', 'I'], correct: ['I', 'have', 'many', 'friends'], translation: '친구 많아요' },
    { type: 'translate', instruction: '영어로', prompt: '돈 얼마나?', correct: ['How much money?', 'how much money?'] },
  ],

  rwenDialogue: {
    intro: '서울 회의실 — 미국 PM이 프로젝트 자원 묻기.',
    lines: [
      { speaker: 'npc', target: "How much time and how many engineers do we have?", native: '시간이 얼마나 있고 엔지니어가 몇 명?' },
      { speaker: 'user', userChoices: [
        { target: 'Two months and five engineers.', native: '두 달, 엔지니어 다섯 명.', correct: true, feedback: '시간(unc) + 엔지니어(c) — 분리해서 답변.' },
        { target: 'Many time, much engineers.',       native: '많은 시간, 많은 엔지니어.', correct: false, feedback: '단어 자리 바뀌었어요. time=much, engineers=many.' },
        { target: 'Bye.',                                native: '잘 가.',                     correct: false, feedback: '회의 중이에요.' },
      ]},
      { speaker: 'npc', target: "Tight but doable.", native: '빡빡하지만 가능하네요.' },
      { speaker: 'rwen', rwenLine: 'much/many — 셀 수 있느냐 없느냐. 한 번 익히면 평생.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How much? (영어로)',  correct: ['How much?', 'how much?'] },
      { prompt: 'How many? (영어로)',  correct: ['How many?', 'how many?'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "주변 사물 10개를 셀 수 있는지 없는지 분류해 보세요. friends/water/books/time/money/cats/coffee/rice/people/days.",
    rwenSignoff: 'much/many — 영어 양적 표현의 핵심 카드예요.',
  },

  phase8: {
    scenario: '서울 회의실 — 미국 PM이 프로젝트 자원 시간·인력 묻기.',
    rwenRole: 'PM Mike, 38세 미국인.',
    successCriteria: "User distinguishes much (uncountable: time, money) from many (countable: people, projects).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
