import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: '큰 숫자 — Hundreds, Thousands, Millions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어는 만 단위 (만·억·조), 영어는 천 단위 (thousand·million·billion). 1만은 영어로 'ten thousand', 1억은 'one hundred million'. 자릿수 변환이 핵심.",
    culturalNote: "한국어 만(10,000) 단위와 영어 thousand(1,000) 단위 차이는 한국 화자의 영어 숫자 가장 큰 산이에요. 1만 = 10 thousand (천이 10개), 1억 = 100 million (백만이 100개) 식으로 익혀요.",
  },

  chunks: [
    { id: 'one_thousand', target: 'One thousand', native: '천 (cheon)',         literal: '1,000',     emoji: '1️⃣', phonetic: 'wun-THOW-zund',  audioRef: null },
    { id: 'ten_thousand', target: 'Ten thousand', native: '만 (man)',            literal: '10,000',    emoji: '🔟', phonetic: 'TEN-THOW-zund', audioRef: null },
    { id: 'one_million',  target: 'One million',  native: '백만 (baekman)',     literal: '1,000,000', emoji: '💯', phonetic: 'wun-MIL-yun',    audioRef: null },
  ],

  pattern: {
    name: 'Korean man vs English thousand',
    explanation: "변환표: 1,000 = thousand (천). 10,000 = ten thousand (만). 100,000 = one hundred thousand (십만). 1,000,000 = million (백만). 10,000,000 = ten million (천만). 100,000,000 = one hundred million (억).",
    examples: [
      { target: 'Ten thousand won',           native: '만 원' },
      { target: 'One hundred thousand won',    native: '십만 원' },
      { target: 'One million won',              native: '백만 원' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'One thousand', right: '천 (1,000)' },
      { left: 'Ten thousand', right: '만 (10,000)' },
      { left: 'One million',  right: '백만 (1,000,000)' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '만 원', correct: ['Ten thousand won', 'ten thousand won'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My salary is one ____ dollars.', options: ['hundred thousand', 'hundred', 'million'], correct: 'hundred thousand', context: '연봉 십만 달러.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"천만 원"의 영어:', options: [
      { text: 'Ten million won',           correct: true },
      { text: 'One thousand million won',   correct: false },
      { text: 'One million won',             correct: false },
    ], explanation: '천만 = 백만 × 10 = ten million.' },
    { type: 'build_sentence', instruction: '문장', words: ['won', 'thousand', 'Ten'], correct: ['Ten', 'thousand', 'won'], translation: '만 원' },
    { type: 'translate', instruction: '영어로', prompt: '백만', correct: ['One million', 'one million'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 한국 집값 궁금해함.',
    lines: [
      { speaker: 'npc', target: "How much is an apartment in Seoul?", native: '서울 아파트 얼마예요?' },
      { speaker: 'user', userChoices: [
        { target: "About one million dollars — or one billion won.", native: '백만 달러쯤 — 10억 원이요.', correct: true, feedback: '달러·원 환산 자연스럽게.' },
        { target: 'Many won.',                                          native: '많은 원.',                  correct: false, feedback: '구체적 숫자 필요해요.' },
        { target: 'Bye.',                                                native: '잘 가.',                     correct: false, feedback: '대화 중이에요.' },
      ]},
      { speaker: 'npc', target: "Wow, that's wild.", native: '와, 어마어마하네요.' },
      { speaker: 'rwen', rwenLine: '큰 숫자 — 한국어 만 단위와 영어 천 단위 변환의 핵심이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Ten thousand (영어로)', correct: ['Ten thousand', 'ten thousand'] },
      { prompt: 'One million (영어로)',  correct: ['One million', 'one million'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "한국 화폐 5개 — 1만, 5만, 10만, 100만, 1000만 원 — 영어로 환산해 보세요.",
    rwenSignoff: '큰 숫자 — 한국어 만이 영어 십천이에요.',
  },

  phase8: {
    scenario: '미국 친구에게 서울 집값·연봉 영어로 환산해서 설명.',
    rwenRole: 'Friend Mike, 30대 미국인, 한국 부동산 호기심.',
    successCriteria: "User converts Korean man-units to English thousand-units correctly (10,000 = ten thousand, 1,000,000 = one million).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
