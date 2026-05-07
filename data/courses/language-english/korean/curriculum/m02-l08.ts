import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — 얼마예요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "쇼핑·시장·택시 — 'How much?' 한 마디면 가격을 물을 수 있어요. 한국어 '얼마예요?'와 같은 자리입니다.",
    culturalNote: "한국 시장에서는 흥정이 자연스럽지만, 미국·영국 매장에서는 가격이 정찰제예요. 다만 야시장이나 길거리 시장에서는 흥정 가능 — 'It's expensive'를 부드럽게 표현하면 깎아 줘요.",
  },

  chunks: [
    { id: 'how_much',        target: 'How much?',           native: '얼마예요? (eolmayeyo?)',         literal: 'how much?',     emoji: '💰', phonetic: 'how-MUCH',     audioRef: null },
    { id: 'its_expensive',   target: "It's expensive",       native: '비싸요 (bissayo)',                 literal: 'it-is expensive', emoji: '💸', phonetic: 'its-eks-PEN-siv', audioRef: null },
    { id: 'its_cheap',       target: "It's cheap",           native: '싸요 (ssayo)',                      literal: 'it-is cheap',   emoji: '👌', phonetic: 'its-CHEEP',     audioRef: null },
  ],

  pattern: {
    name: 'How much / How many',
    explanation: "'How much?' = 셀 수 없는 것 (가격, 물, 시간). 'How many?' = 셀 수 있는 것 (사과, 사람). 한국어 '얼마/몇'의 차이와 같지만 영어는 더 엄격해요.",
    examples: [
      { target: 'How much is it?',     native: '얼마예요?' },
      { target: "It's expensive.",      native: '비싸요.' },
      { target: 'How many people?',    native: '몇 명이에요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'How much?',      right: '얼마예요?' },
      { left: "It's expensive", right: '비싸요' },
      { left: "It's cheap",     right: '싸요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '얼마예요?', correct: ['How much?', 'how much?', 'How much is it?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "How ____ is this?", options: ['much', 'many', 'long'], correct: 'much', context: '시장에서 가격 묻기.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '런던 시장에서 50파운드 — 비싸다고 부드럽게 말하기:', options: [
      { text: "It's a bit expensive. Is there a discount?", correct: true },
      { text: "Too much!",                                     correct: false },
      { text: "Cheap!",                                         correct: false },
    ], explanation: "'a bit'을 붙이면 부드러워져요." },
    { type: 'build_sentence', instruction: '문장', words: ['expensive', "It's"], correct: ["It's", 'expensive'], translation: '비싸요' },
    { type: 'translate', instruction: '영어로', prompt: '싸요!', correct: ["It's cheap", "Its cheap"] },
  ],

  rwenDialogue: {
    intro: 'London 시장 — 한국 관광객이 가격 흥정.',
    lines: [
      { speaker: 'npc', target: "These are fifty pounds.", native: '이거 50파운드예요.' },
      { speaker: 'user', userChoices: [
        { target: "It's a bit expensive. Is there any discount?", native: '좀 비싸네요. 할인 있나요?', correct: true, feedback: '부드럽고 정중한 흥정 — 영국에서도 시장에서는 통해요.' },
        { target: 'Cheap!',                                          native: '싸요!',                       correct: false, feedback: '말 안 되는 답이에요.' },
        { target: 'Bye.',                                             native: '잘 가.',                       correct: false, feedback: '대화를 끊지 말고 협상해 보세요.' },
      ]},
      { speaker: 'npc', target: "Tell you what — forty pounds.", native: '40파운드로 해드릴게요.' },
      { speaker: 'rwen', rwenLine: '흥정 영어 — a bit이 마법의 단어예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How much? (영어로)',     correct: ['How much?', 'how much?'] },
      { prompt: "It's expensive (영어로)", correct: ["It's expensive", "Its expensive", "It is expensive"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 가게에서 'How much is this?'를 영어로 말해 보세요. 한국어 가게여도 좋아요 — 입에 익히세요.",
    rwenSignoff: '여행 영어 — 가격 묻고 답하는 게 절반이에요.',
  },

  phase8: {
    scenario: 'London 캄던 마켓 — 한국 관광객이 부드럽게 가격 협상.',
    rwenRole: 'Market vendor, 30대 영국인, 흥정 가능.',
    successCriteria: "User asks 'How much?', uses 'a bit expensive' to soften, asks for discount.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
