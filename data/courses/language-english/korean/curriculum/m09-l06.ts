import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: '공항 — At the airport',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "공항 영어 — Boarding pass (탑승권), Departure gate (출발 게이트), Customs (세관). 항공사 직원이 매번 묻는 카드.",
    culturalNote: "한국 인천공항은 한국어 안내가 많지만, 미국·유럽 공항은 영어만. 'Where's gate 25?' (25번 게이트 어디?), 'Anything to declare?' (신고할 거?) — 이 두 카드가 입국·출국 핵심.",
  },

  chunks: [
    { id: 'boarding_pass',  target: 'Boarding pass',  native: '탑승권 (tapseunggwon)',                literal: 'boarding pass',  emoji: '🎫', phonetic: 'BOR-ding-PAS',     audioRef: null },
    { id: 'departure_gate', target: 'Departure gate', native: '출발 게이트 (chulbal geiteu)',          literal: 'departure gate',  emoji: '🚪', phonetic: 'di-PAR-cher-GAYT', audioRef: null },
    { id: 'customs',         target: 'Customs',         native: '세관 (segwan)',                          literal: 'customs',         emoji: '🛃', phonetic: 'KUS-tumz',          audioRef: null },
  ],

  pattern: {
    name: 'Airport vocabulary',
    explanation: "체크인: passport + boarding pass. 출국: departure gate + boarding time. 입국: customs + 'Anything to declare?' / 'Nothing to declare'. 비행기 영어 핵심.",
    examples: [
      { target: 'Where is gate 25?',                    native: '25번 게이트 어디예요?' },
      { target: 'My boarding pass.',                       native: '제 탑승권이에요.' },
      { target: "Nothing to declare.",                       native: '신고할 거 없어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Boarding pass',  right: '탑승권' },
      { left: 'Departure gate', right: '출발 게이트' },
      { left: 'Customs',         right: '세관' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '탑승권', correct: ['Boarding pass', 'boarding pass'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Where is ____ 25?', options: ['gate', 'door', 'room'], correct: 'gate', context: '공항 게이트.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '세관 직원: "Anything to declare?":', options: [
      { text: 'Nothing to declare.',  correct: true },
      { text: 'Yes I declare.',        correct: false },
      { text: 'No customs.',           correct: false },
    ], explanation: "Nothing to declare = 신고할 거 없음." },
    { type: 'build_sentence', instruction: '문장', words: ['pass', 'My', 'boarding'], correct: ['My', 'boarding', 'pass'], translation: '제 탑승권' },
    { type: 'translate', instruction: '영어로', prompt: '25번 게이트 어디예요?', correct: ['Where is gate 25?', 'where is gate 25?'] },
  ],

  rwenDialogue: {
    intro: 'JFK 공항 입국 심사 — 세관 통과.',
    lines: [
      { speaker: 'npc', target: "Anything to declare?", native: '신고할 게 있나요?' },
      { speaker: 'user', userChoices: [
        { target: 'Nothing to declare. Just personal items.', native: '신고할 거 없어요. 개인 물품뿐이에요.', correct: true, feedback: 'Nothing to declare + 보충 — 자연스러워요.' },
        { target: 'Yes!',                                       native: '네!',                                   correct: false, feedback: 'declare가 있는 게 아니라면 Nothing to declare.' },
        { target: 'Customs.',                                   native: '세관.',                                  correct: false, feedback: '단어 하나 부족.' },
      ]},
      { speaker: 'npc', target: "Welcome to the US.", native: '미국에 오신 걸 환영합니다.' },
      { speaker: 'rwen', rwenLine: '공항 영어 — 입국·출국 카드 마스터.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Boarding pass (영어로)',  correct: ['Boarding pass', 'boarding pass'] },
      { prompt: 'Departure gate (영어로)', correct: ['Departure gate', 'departure gate'] },
      { prompt: 'Customs (영어로)',         correct: ['Customs', 'customs'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "공항 5단계 영어 — 체크인 → 보안 → 출발 게이트 → 비행 → 입국 심사 — 시뮬레이션.",
    rwenSignoff: '공항 영어 — 비행 핵심 카드.',
  },

  phase8: {
    scenario: 'JFK 공항 입국 — 세관 통과·게이트 찾기 영어로.',
    rwenRole: 'Customs officer, 40대 미국인.',
    successCriteria: "User uses 'boarding pass', 'gate ___', and 'Nothing to declare' correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
