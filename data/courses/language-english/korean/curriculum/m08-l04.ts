import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need"',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "want (원하다) vs need (필요하다) — 한국어 '~하고 싶다'/'필요하다'와 같지만, 영어 'I want'는 약간 직접적. 정중하게는 'I'd like'.",
    culturalNote: "한국 식당 '커피 주세요'는 자연스럽지만, 영어에서 'I want coffee'는 어린아이 같아 보여요. 'I'd like coffee'(저는 커피 원해요)가 어른 표현. 'I need help'(도움 필요해요)는 진지한 부탁.",
  },

  chunks: [
    { id: 'want_coffee',  target: 'I want coffee.',     native: '커피 마시고 싶어요 (keopi masigo sipeoyo)', literal: 'I want coffee',     emoji: '☕', phonetic: 'aye-WAHNT-KOF-ee', audioRef: null },
    { id: 'need_break',    target: 'I need a break.',     native: '쉬어야 해요 (swieoya haeyo)',                  literal: 'I need a break',     emoji: '😌', phonetic: 'aye-NEED-uh-BRAYK', audioRef: null },
    { id: 'id_like_tea',  target: "I'd like tea, please.", native: '차로 주세요 (cha-ro juseyo)',                  literal: "I'd like tea please", emoji: '🍵', phonetic: 'AYD-LYK-TEE',         audioRef: null },
  ],

  pattern: {
    name: 'Want / Need / Would like',
    explanation: "사다리: 'I want ___' (직접·아이) < 'I need ___' (필요·진지) < 'I'd like ___' (정중). 식당·주문엔 거의 항상 'I'd like'. 'need'는 진짜 절실할 때.",
    examples: [
      { target: 'I want coffee.',         native: '커피 원해요.' },
      { target: 'I need help.',            native: '도움 필요해요.' },
      { target: "I'd like tea, please.",   native: '차로 주세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I want coffee',     right: '커피 마시고 싶어요' },
      { left: 'I need a break',     right: '쉬어야 해요' },
      { left: "I'd like tea",        right: '차로 주세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '도움 필요해요', correct: ['I need help', 'i need help'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'd ____ tea, please.", options: ['like', 'want', 'need'], correct: 'like', context: '식당 정중한 주문.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '식당에서 정중한 주문:', options: [
      { text: "I'd like the chicken, please.",  correct: true },
      { text: 'I want chicken!',                   correct: false },
      { text: "I'm chicken.",                       correct: false },
    ], explanation: "I'd like — 식당 표준." },
    { type: 'build_sentence', instruction: '문장', words: ['break', 'a', 'I', 'need'], correct: ['I', 'need', 'a', 'break'], translation: '쉬어야 해요' },
    { type: 'translate', instruction: '영어로', prompt: '커피 마시고 싶어요', correct: ['I want coffee', "I'd like coffee", 'I would like coffee'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 회사 동료에게 도움 부탁.',
    lines: [
      { speaker: 'npc', target: "How can I help?", native: '어떻게 도와드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "I need help with this report. Could you have a look?", native: '이 보고서 도움 필요해요. 봐 주실 수 있어요?', correct: true, feedback: "need (절실) + Could you (정중) — 적절한 톤." },
        { target: 'I want help report.',                                     native: '나 원함 도움 보고서.',                       correct: false, feedback: '구조 부족. need + Could you 권장.' },
        { target: 'No.',                                                      native: '아니요.',                                       correct: false, feedback: '부탁이 필요해요.' },
      ]},
      { speaker: 'npc', target: "Sure, send it over.", native: '네, 보내 주세요.' },
      { speaker: 'rwen', rwenLine: 'want / need / would like — 정중함 사다리의 세 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I want coffee (영어로)', correct: ['I want coffee', 'i want coffee'] },
      { prompt: 'I need help (영어로)',   correct: ['I need help', 'i need help'] },
      { prompt: "I'd like tea (영어로)",   correct: ["I'd like tea", "I would like tea"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "want/need/would like 각 2문장씩 만들어 보세요. 사다리 톤 인식하면서.",
    rwenSignoff: '정중함 사다리 — 영어 매 부탁의 톤 카드.',
  },

  phase8: {
    scenario: '뉴욕 회사 동료에게 보고서 도움 부탁 — need + Could you.',
    rwenRole: 'Senior colleague, 40대 미국인.',
    successCriteria: "User distinguishes 'I want' (direct), 'I need' (necessity), 'I'd like' (polite request).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
