import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: '집에서 손님 맞이 — Hosting in English',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국 손님 맞이 — '드셔 보세요', '편하게 앉으세요', '많이 드세요'. 영어로 'Welcome', 'Please sit down', 'Help yourself'.",
    culturalNote: "한국 손님 맞이는 푸짐함 (많이 차리기). 영어권은 'Help yourself' (직접 가져다 드세요)가 핵심 — 손님이 직접 음식을 덜어요. 호스트가 일일이 챙겨 주는 한국 문화와 다른 자유로움이에요.",
  },

  chunks: [
    { id: 'welcome',         target: 'Welcome',         native: '환영합니다 (hwanyeonghamnida)', literal: 'welcome',          emoji: '👋', phonetic: 'WEL-kum',     audioRef: null },
    { id: 'please_sit',      target: 'Please, sit down', native: '편하게 앉으세요 (pyeonhage anjeuseyo)', literal: 'please sit down', emoji: '🪑', phonetic: 'pleez-SIT-down', audioRef: null },
    { id: 'help_yourself',   target: 'Help yourself',     native: '직접 드세요 (jikjeop deuseyo)',  literal: 'help yourself',     emoji: '🍽️', phonetic: 'help-yor-SELF', audioRef: null },
  ],

  pattern: {
    name: 'Hosting phrases',
    explanation: "흐름: (1) Welcome — 입장. (2) Please, sit down — 자리. (3) Help yourself — 음식. (4) Make yourself at home — 편하게. 영어권 호스트의 4단계.",
    examples: [
      { target: 'Welcome to our home!',     native: '저희 집에 오신 걸 환영합니다!' },
      { target: 'Please, sit down.',         native: '편히 앉으세요.' },
      { target: 'Help yourself to the food.', native: '음식 직접 드세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Welcome',         right: '환영합니다' },
      { left: 'Please, sit down', right: '편하게 앉으세요' },
      { left: 'Help yourself',     right: '직접 드세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '직접 드세요', correct: ['Help yourself', 'help yourself'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Please, ____ down.', options: ['sit', 'sat', 'sitting'], correct: 'sit', context: '명령형 — 동사 원형.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '집에 손님이 처음 왔을 때 첫 마디:', options: [
      { text: 'Welcome! Please come in.',  correct: true },
      { text: 'Sit eat!',                    correct: false },
      { text: 'Bye.',                         correct: false },
    ], explanation: 'Welcome으로 시작.' },
    { type: 'build_sentence', instruction: '문장', words: ['yourself', 'Help'], correct: ['Help', 'yourself'], translation: '직접 드세요' },
    { type: 'translate', instruction: '영어로', prompt: '편하게 앉으세요', correct: ['Please, sit down', 'Please sit down'] },
  ],

  rwenDialogue: {
    intro: '서울 자기 집 — 미국 친구가 처음 방문.',
    lines: [
      { speaker: 'npc', target: "Hi, thanks for inviting me!", native: '안녕, 초대해 줘서 고마워!' },
      { speaker: 'user', userChoices: [
        { target: "Welcome! Please, sit down. Help yourself to the food — make yourself at home.", native: '환영해요! 편히 앉으세요. 음식 직접 드세요 — 편하게 계세요.', correct: true, feedback: '4단계 호스팅 — Welcome + Sit + Help yourself + at home. 완벽한 영어 호스트.' },
        { target: 'Eat!',                                                                              native: '먹어!',                                                       correct: false, feedback: '한국식 너무 — 영어 호스트는 부드럽게 권유.' },
        { target: 'Bye.',                                                                               native: '잘 가.',                                                      correct: false, feedback: '이제 시작이에요.' },
      ]},
      { speaker: 'npc', target: "Thanks — feels like home.", native: '고마워요 — 진짜 집 같아요.' },
      { speaker: 'rwen', rwenLine: '호스팅 영어 — 4단계로 영어권 손님을 편하게 맞이해요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Welcome (영어로)',         correct: ['Welcome', 'welcome'] },
      { prompt: 'Please, sit down (영어로)', correct: ['Please, sit down', 'Please sit down'] },
      { prompt: 'Help yourself (영어로)',     correct: ['Help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "다음에 손님 올 때 영어 4단계 호스팅 — Welcome + Sit + Help yourself + Make yourself at home — 시뮬레이션.",
    rwenSignoff: '호스팅 영어 — 환대의 4장 카드예요.',
  },

  phase8: {
    scenario: '서울 자기 집에 미국 친구가 처음 방문 — 영어 4단계 호스팅.',
    rwenRole: 'Friend visiting Korea, 30세 미국인.',
    successCriteria: "User uses at least 3 of: 'Welcome', 'Please sit down', 'Help yourself', 'Make yourself at home'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
