import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: '희망과 미래 — Hope & Future',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "꿈·희망 영어 — 'I hope to...' (~ 하길 바라요), 'One day I'll...' (언젠가 ~할 거예요), 'I dream of...' (~ 꿈꿔요).",
    culturalNote: "한국 화자가 자기 꿈을 영어로 풀면 인생 폭이 넓어 보여요. 'One day I'll travel the world' / 'I dream of opening my own café'. 면접·소개팅·네트워킹에서 자주 쓰는 카드.",
  },

  chunks: [
    { id: 'hope_to',         target: 'I hope to...',     native: '~ 하길 바라요 (~ hagil barayo)',     literal: 'I hope to',      emoji: '🌟', phonetic: 'aye-HOHP-too',  audioRef: null },
    { id: 'one_day',         target: "One day I'll...",  native: '언젠가 ~ 할 거예요 (eonjenga ~ hal geoyeyo)', literal: "one day I'll",  emoji: '🌅', phonetic: 'WUN-day-ayl',  audioRef: null },
    { id: 'dream_of',        target: 'I dream of...',    native: '~ 꿈꿔요 (~ kkumkkwoyo)',              literal: 'I dream of',     emoji: '💭', phonetic: 'aye-DREEM-uv', audioRef: null },
  ],

  pattern: {
    name: 'Future hopes',
    explanation: "(1) 'I hope to + 동사' (구체적 희망). (2) 'One day I'll + 동사' (먼 미래 다짐). (3) 'I dream of + -ing' (큰 꿈). 한국어 '~하고 싶다'의 영어 세 갈래.",
    examples: [
      { target: 'I hope to travel more.',           native: '여행 더 하길 바라요.' },
      { target: "One day I'll start my own company.", native: '언젠가 회사 차릴 거예요.' },
      { target: 'I dream of living abroad.',          native: '외국에서 살기를 꿈꿔요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I hope to...',     right: '~ 하길 바라요' },
      { left: "One day I'll...",  right: '언젠가 ~ 할 거예요' },
      { left: 'I dream of...',    right: '~ 꿈꿔요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '여행 더 하길 바라요', correct: ['I hope to travel more', 'i hope to travel more'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I dream ____ living abroad.', options: ['of', 'to', 'on'], correct: 'of', context: 'dream of + -ing.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"언젠가 카페 차릴 거예요" 영어:', options: [
      { text: "One day I'll start my own café.",  correct: true },
      { text: 'Café one day me.',                    correct: false },
      { text: 'I café future.',                       correct: false },
    ], explanation: "One day I'll + 동사." },
    { type: 'build_sentence', instruction: '문장', words: ['travel', 'to', 'I', 'hope'], correct: ['I', 'hope', 'to', 'travel'], translation: '여행하길 바라요' },
    { type: 'translate', instruction: '영어로', prompt: '외국에서 살기를 꿈꿔요', correct: ['I dream of living abroad', 'i dream of living abroad'] },
  ],

  rwenDialogue: {
    intro: 'LA 한인 모임 — 자기 꿈 풀기.',
    lines: [
      { speaker: 'npc', target: "What's your dream?", native: '꿈이 뭐예요?' },
      { speaker: 'user', userChoices: [
        { target: "I hope to travel more, and one day I'll open my own café in Seoul. I dream of bringing Korean coffee culture worldwide.", native: '여행 더 하길 바라고, 언젠가 서울에 카페 차릴 거예요. 한국 커피 문화를 세계에 알리길 꿈꿔요.', correct: true, feedback: '세 미래 카드 다 — hope to + One day + dream of.' },
        { target: 'Travel café Korea.',                                                                                                       native: '여행 카페 한국.',                                                                                                  correct: false, feedback: '동사·구조 빠짐.' },
        { target: 'No.',                                                                                                                      native: '아니요.',                                                                                                          correct: false, feedback: '꿈 풀어요.' },
      ]},
      { speaker: 'npc', target: "I love that. Sending energy.", native: '좋아요. 응원할게요.' },
      { speaker: 'rwen', rwenLine: '꿈 영어 — 자기 미래를 영어로 그리는 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I hope to (영어로)',     correct: ['I hope to', 'i hope to'] },
      { prompt: "One day I'll (영어로)",   correct: ["One day I'll", "One day I will"] },
      { prompt: 'I dream of (영어로)',      correct: ['I dream of', 'i dream of'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 꿈 3개 영어로 — hope/one day/dream of 카드.",
    rwenSignoff: '꿈 영어 — 미래의 자기를 그리는 카드.',
  },

  phase8: {
    scenario: 'LA 한인 모임에서 자기 꿈·미래 영어로 풀기.',
    rwenRole: 'Korean-American mentor, 45세.',
    successCriteria: "User uses at least 2 of: 'I hope to', 'One day I'll', 'I dream of' to express future hopes.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
