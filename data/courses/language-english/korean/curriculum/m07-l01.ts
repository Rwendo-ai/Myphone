import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: '배고파요 — Hungry & Thirsty',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'I'm hungry' = 배고파요, 'I'm thirsty' = 목말라요. be 동사 + 형용사. 한국어 '배고파요'엔 동사가 안 보이지만, 영어는 'I am' 필수.",
    culturalNote: "한국에서는 '밥 먹었어요?'가 인사예요. 영어권에서는 'Are you hungry?'를 진짜 배고픈지 묻는 질문으로만 써요. 인사로 쓰면 어색해요.",
  },

  chunks: [
    { id: 'im_hungry',     target: "I'm hungry",     native: '배고파요 (baegopayo)',     literal: 'I-am hungry',  emoji: '🍽️', phonetic: 'aym-HUN-gree',     audioRef: null },
    { id: 'im_thirsty',    target: "I'm thirsty",     native: '목말라요 (mokmallayo)',     literal: 'I-am thirsty', emoji: '💧', phonetic: 'aym-THIR-stee',    audioRef: null },
    { id: 'i_want_water',  target: 'I want water',   native: '물 마시고 싶어요 (mul masigo sipeoyo)', literal: 'I want water',  emoji: '🚰', phonetic: 'aye-WAHNT-WAH-ter', audioRef: null },
  ],

  pattern: {
    name: 'I am + adjective (state)',
    explanation: "신체 상태: 'I'm hungry / thirsty / tired / cold / hot'. 한국어 '배고파요'에 보이지 않는 '저는 ~해요'를 영어는 'I am' + 형용사로 명시.",
    examples: [
      { target: "I'm hungry.",     native: '배고파요.' },
      { target: "I'm thirsty.",     native: '목말라요.' },
      { target: 'I want water.',    native: '물 마시고 싶어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm hungry",   right: '배고파요' },
      { left: "I'm thirsty",   right: '목말라요' },
      { left: 'I want water', right: '물 마시고 싶어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '배고파요', correct: ["I'm hungry", "I am hungry", "im hungry"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ thirsty.', options: ['am', 'is', 'are'], correct: 'am', context: 'I 다음에 am.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"피곤해요" 영어:', options: [
      { text: "I'm tired.", correct: true },
      { text: 'I tired.',    correct: false },
      { text: 'Tired me.',   correct: false },
    ], explanation: 'I am + 형용사.' },
    { type: 'build_sentence', instruction: '문장', words: ['water', 'want', 'I'], correct: ['I', 'want', 'water'], translation: '물 마시고 싶어요' },
    { type: 'translate', instruction: '영어로', prompt: '목말라요', correct: ["I'm thirsty", "I am thirsty"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 길거리 — 한국 친구와 점심 시간.',
    lines: [
      { speaker: 'npc', target: "How are you doing?", native: '어떻게 지내?' },
      { speaker: 'user', userChoices: [
        { target: "I'm hungry. Let's get lunch.",  native: '배고파요. 점심 먹으러 가요.', correct: true, feedback: '신체 상태 + 제안 — 자연스러워요.' },
        { target: 'Hungry.',                          native: '배고픔.',                       correct: false, feedback: 'I am 빠졌어요.' },
        { target: 'No.',                                native: '아니요.',                       correct: false, feedback: '진짜 어떻게 지내냐는 질문이에요.' },
      ]},
      { speaker: 'npc', target: "Same. Let's go.", native: '나도. 가자.' },
      { speaker: 'rwen', rwenLine: 'I\'m + 형용사 — 신체 상태 영어 표현 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm hungry (영어로)",  correct: ["I'm hungry", "I am hungry"] },
      { prompt: "I'm thirsty (영어로)", correct: ["I'm thirsty", "I am thirsty"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 자기 신체 상태 5번 영어로 — hungry/thirsty/tired/cold/hot.",
    rwenSignoff: '신체 상태 영어 — 매일 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 길거리 — 친구에게 배고프다고 말하고 점심 제안.',
    rwenRole: 'Friend, 26세 미국인.',
    successCriteria: "User uses 'I'm hungry/thirsty' (be-verb + adj) correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
