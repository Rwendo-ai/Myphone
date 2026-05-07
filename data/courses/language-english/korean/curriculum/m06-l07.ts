import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: '월·계절 — Months & Seasons',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 1월·2월 한자어 vs 영어 January·February (이름). 계절 — 봄·여름·가을·겨울 = spring/summer/fall(autumn)/winter. 한국 사계절은 영어권에 자랑할 만한 문화 자산이에요.",
    culturalNote: "한국 장마 (rainy season)·황사·단풍 (fall foliage)·삼한사온은 영어권에 없는 한국 특수 기후. '한국은 사계절이 분명해요'(Korea has four distinct seasons)는 자기소개 단골 카드.",
  },

  chunks: [
    { id: 'jan_to_apr',  target: 'January, February, March, April', native: '1월·2월·3월·4월',                       literal: 'Jan, Feb, Mar, Apr',  emoji: '📅', phonetic: 'JAN-yoo-AIR-ee', audioRef: null },
    { id: 'rainy_season', target: 'Rainy season',                     native: '장마 (jangma)',                          literal: 'rainy season',         emoji: '🌧️', phonetic: 'RAY-nee-SEE-zun', audioRef: null },
    { id: 'summer_winter', target: 'Summer / Winter',                   native: '여름 / 겨울 (yeoreum / gyeoul)',          literal: 'summer / winter',     emoji: '☀️', phonetic: 'SUM-er-WIN-ter',  audioRef: null },
  ],

  pattern: {
    name: 'In + month / season',
    explanation: "공식: 'in January' (월), 'in summer' (계절), 'in 2026' (년). 시간 단위 큰 자리에는 in. 작은 자리 (요일·시간)에는 on/at.",
    examples: [
      { target: 'In January',          native: '1월에' },
      { target: 'In summer',           native: '여름에' },
      { target: 'In the rainy season', native: '장마철에' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'January',     right: '1월' },
      { left: 'Rainy season', right: '장마' },
      { left: 'Summer',       right: '여름' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '여름에', correct: ['In summer', 'in summer', 'In the summer'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My birthday is ____ March.', options: ['in', 'on', 'at'], correct: 'in', context: '월 — in.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"한국은 사계절이 있어요" 영어:', options: [
      { text: 'Korea has four distinct seasons.', correct: true },
      { text: 'Korea four seasons.',                correct: false },
      { text: 'Korean has season.',                  correct: false },
    ], explanation: 'have 동사 + four + seasons.' },
    { type: 'build_sentence', instruction: '문장', words: ['summer', 'In'], correct: ['In', 'summer'], translation: '여름에' },
    { type: 'translate', instruction: '영어로', prompt: '장마철', correct: ['Rainy season', 'rainy season', 'The rainy season'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 한국 여행 시기 묻기.',
    lines: [
      { speaker: 'npc', target: "When should I visit Korea?", native: '한국 언제 가는 게 좋아요?' },
      { speaker: 'user', userChoices: [
        { target: 'Spring or fall — April or October. Avoid the rainy season in July.', native: '봄이나 가을 — 4월이나 10월. 7월 장마는 피하세요.', correct: true, feedback: '월·계절·장마까지 — 한국 기후 영어로 자연스럽게 풀었어요.' },
        { target: 'Summer good.',                                                          native: '여름 좋음.',                                       correct: false, feedback: '구체적 월·계절 추가.' },
        { target: 'No.',                                                                    native: '아니요.',                                          correct: false, feedback: '추천을 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Got it. Booking for October.", native: '알겠어요. 10월에 예약할게요.' },
      { speaker: 'rwen', rwenLine: '월·계절 — 한국 기후의 영어 표현이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'In January (영어로)',  correct: ['In January', 'in January'] },
      { prompt: 'Summer (영어로)',       correct: ['Summer', 'summer'] },
      { prompt: 'Rainy season (영어로)', correct: ['Rainy season', 'rainy season'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "12개월·4계절을 영어로 세 번 말해 보세요. 자기 생일·기념일을 in + 월로.",
    rwenSignoff: '월·계절 영어 — 한국 사계절 자랑 카드예요.',
  },

  phase8: {
    scenario: '미국 친구에게 한국 여행 시기 추천 — 월·계절·장마 영어로.',
    rwenRole: 'Friend planning Korea trip, 28세.',
    successCriteria: "User mentions specific months with 'in', uses 'spring/summer/fall/winter', references 'rainy season' or specific Korean climate.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
