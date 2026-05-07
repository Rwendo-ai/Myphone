import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: '교통 — Bus, Taxi, Train',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "교통수단 — The bus (버스), A taxi (택시), The train (기차). 영어 article 주의: 일반 'the bus' (버스 시스템), 특정 'a taxi' (한 대).",
    culturalNote: "한국 우버 = Uber, 영국 = Underground (지하철), 미국 = subway. 미국 일부 도시는 'subway'가 지하 식당, 영국은 지하철. 헷갈리면 'Underground' / 'Tube' / 'Metro'.",
  },

  chunks: [
    { id: 'the_bus',  target: 'The bus',  native: '버스 (beoseu)',  literal: 'the bus',  emoji: '🚌', phonetic: 'thuh-BUS',  audioRef: null },
    { id: 'a_taxi',   target: 'A taxi',    native: '택시 (taeksi)',  literal: 'a taxi',   emoji: '🚕', phonetic: 'uh-TAK-see', audioRef: null },
    { id: 'the_train', target: 'The train', native: '기차 (gicha)',    literal: 'the train', emoji: '🚆', phonetic: 'thuh-TRAYN', audioRef: null },
  ],

  pattern: {
    name: 'Take + transport',
    explanation: "공식: 'I take the bus / train / subway' (대중교통 — the). 'I take a taxi' (한 대 택시 — a). 'I drive my car' (자가용은 drive). 'I walk' (걷기 — 동사 자체).",
    examples: [
      { target: 'I take the bus to work.',   native: '회사에 버스 타고 가요.' },
      { target: "Let's take a taxi.",          native: '택시 타요.' },
      { target: 'I take the train to Busan.',   native: '부산까지 기차 타요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'The bus',  right: '버스' },
      { left: 'A taxi',    right: '택시' },
      { left: 'The train', right: '기차' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '택시 타요', correct: ["Let's take a taxi", "I take a taxi", "Take a taxi"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I take ____ subway.', options: ['the', 'a', 'an'], correct: 'the', context: '대중교통 시스템 — the.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"부산까지 KTX 타요" 영어:', options: [
      { text: 'I take the train to Busan.',  correct: true },
      { text: 'Train Busan.',                  correct: false },
      { text: 'I train Busan.',                  correct: false },
    ], explanation: 'I take the train to + 도시.' },
    { type: 'build_sentence', instruction: '문장', words: ['bus', 'I', 'the', 'take'], correct: ['I', 'take', 'the', 'bus'], translation: '버스 타요' },
    { type: 'translate', instruction: '영어로', prompt: '기차', correct: ['The train', 'the train'] },
  ],

  rwenDialogue: {
    intro: 'London 호텔에서 공항 가는 법 묻기.',
    lines: [
      { speaker: 'npc', target: "How are you getting to Heathrow?", native: '히드로 어떻게 가세요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm going to take the Underground — it's cheaper than a taxi.", native: '지하철 타려고요 — 택시보다 싸요.', correct: true, feedback: '교통수단 + 비교 — 자연스러워요.' },
        { target: 'Train taxi.',                                                       native: '기차 택시.',                       correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                                                                native: '네.',                                correct: false, feedback: '구체적 답 필요.' },
      ]},
      { speaker: 'npc', target: "Smart choice.", native: '좋은 선택이에요.' },
      { speaker: 'rwen', rwenLine: '교통 영어 — take + the/a + 수단 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'The bus (영어로)',  correct: ['The bus', 'the bus'] },
      { prompt: 'A taxi (영어로)',    correct: ['A taxi', 'a taxi'] },
      { prompt: 'The train (영어로)', correct: ['The train', 'the train'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 일주일 교통수단 5문장 — take + the/a.",
    rwenSignoff: '교통 영어 — 매일 이동 카드.',
  },

  phase8: {
    scenario: 'London 호텔에서 공항 가는 교통수단 영어로 결정.',
    rwenRole: 'Hotel concierge, 40대 영국인.',
    successCriteria: "User uses 'I take the bus/train' OR 'I take a taxi' with correct article.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
