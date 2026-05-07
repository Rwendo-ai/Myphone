import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: '거리 — How far?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "거리 — How far? (얼마나 멀어요?). 답: 'Five minutes' walk' (걸어서 5분), 'Just around the corner' (바로 코너 너머).",
    culturalNote: "한국에서는 '걸어서 5분' 그대로 영어로 'A 5-minute walk' 또는 'Five minutes' walk' (s' apostrophe). 'Around the corner'는 매우 가까움 의미. 미국식 'block' 단위와 영국식 거리 표현 살짝 달라요.",
  },

  chunks: [
    { id: 'how_far',         target: 'How far?',                  native: '얼마나 멀어요? (eolmana meoreoyo?)',           literal: 'how far?',                emoji: '📏', phonetic: 'how-FAR',           audioRef: null },
    { id: 'five_minutes',    target: "Five minutes' walk",         native: '걸어서 5분 (georeoseo o-bun)',                  literal: "five minutes' walk",      emoji: '🚶', phonetic: 'fyv-MIN-its-WAWK', audioRef: null },
    { id: 'around_corner',   target: 'Just around the corner',    native: '바로 저기 코너 너머 (baro jeogi koneo neomeo)', literal: 'just around the corner', emoji: '↩️', phonetic: 'just-uh-ROWND',     audioRef: null },
  ],

  pattern: {
    name: 'Distance + time',
    explanation: "거리 표현: 'Five minutes' walk' (걸어서 5분), 'Ten minutes by car' (차로 10분), 'Two miles away' (2마일 거리), 'Just around the corner' (정말 가까움).",
    examples: [
      { target: 'How far is it?',           native: '얼마나 멀어요?' },
      { target: 'About ten minutes by bus.',  native: '버스로 10분쯤.' },
      { target: 'Just around the corner.',     native: '바로 코너 너머.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'How far?',                  right: '얼마나 멀어요?' },
      { left: "Five minutes' walk",         right: '걸어서 5분' },
      { left: 'Just around the corner',     right: '바로 코너 너머' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '걸어서 5분', correct: ["Five minutes' walk", "Five minutes walk", "A five-minute walk"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "It's about ten minutes ____ bus.", options: ['by', 'on', 'at'], correct: 'by', context: '교통수단 — by.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"바로 가까워요"의 영어:', options: [
      { text: "It's just around the corner.", correct: true },
      { text: 'Far!',                            correct: false },
      { text: 'Long way.',                        correct: false },
    ], explanation: 'around the corner = 정말 가까움.' },
    { type: 'build_sentence', instruction: '문장', words: ['far?', 'How', 'is', 'it'], correct: ['How', 'far', 'is', 'it?'], translation: '얼마나 멀어요?' },
    { type: 'translate', instruction: '영어로', prompt: '버스로 10분', correct: ['Ten minutes by bus', 'About ten minutes by bus'] },
  ],

  rwenDialogue: {
    intro: 'Tokyo 환승 — 다음 역까지 거리 묻기.',
    lines: [
      { speaker: 'npc', target: "Need anything?", native: '필요한 거 있으세요?' },
      { speaker: 'user', userChoices: [
        { target: 'How far is the next station?', native: '다음 역까지 얼마나 멀어요?', correct: true, feedback: 'How far + 거리 — 자연스러워요.' },
        { target: 'Far?',                            native: '멈?',                          correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                             native: '네.',                          correct: false, feedback: '구체적 질문 필요.' },
      ]},
      { speaker: 'npc', target: "About 10 minutes by foot. Just around the corner.", native: '걸어서 10분쯤. 바로 가까워요.' },
      { speaker: 'rwen', rwenLine: '거리 영어 — How far + 시간 단위.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How far? (영어로)',                  correct: ['How far?', 'how far?'] },
      { prompt: 'Just around the corner (영어로)',     correct: ['Just around the corner', 'just around the corner'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 집에서 자주 가는 곳 5개의 거리를 영어로 — 도보·차·지하철 단위.",
    rwenSignoff: '거리 영어 — 시간 + 교통수단 카드.',
  },

  phase8: {
    scenario: 'Tokyo 환승 — 다음 역까지 영어로 거리 묻기.',
    rwenRole: 'Station staff, 30대.',
    successCriteria: "User asks 'How far?' or 'How long does it take?', uses time + transport mode.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
