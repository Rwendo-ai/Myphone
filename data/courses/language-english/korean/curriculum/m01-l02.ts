import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — 캐주얼 인사',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Hi'는 'Hello'의 친한 버전 — 친구, 또래, 카페 직원에게 씁니다. K-pop 팬덤 트위터에서 외국 팬에게 'Hi!' 하나만 보내도 충분해요.",
    culturalNote: "한국어에서 친한 사이는 '안녕'이고 직장에선 '안녕하세요'죠. 영어 'Hi'와 'Hello'의 차이도 비슷하지만 — 영어는 더 가벼워요. 사장님께 'Hi!'라고 해도 무례하지 않은 회사도 많습니다. 미국 스타트업 문화에서는 특히요.",
  },

  chunks: [
    { id: 'hi',             target: 'Hi',             native: '안녕 (annyeong)', literal: undefined, emoji: '👋', phonetic: 'HAY', audioRef: null },
    { id: 'bye',            target: 'Bye',            native: '잘 가 (jal ga)',   literal: undefined, emoji: '👋', phonetic: 'BAY', audioRef: null },
    { id: 'see_you_later',  target: 'See you later',  native: '나중에 봐 (najunge bwa)', literal: 'see you later', emoji: '⏰', phonetic: 'SEE-yoo-LAY-ter', audioRef: null },
  ],

  pattern: {
    name: 'Casual greetings',
    explanation: "'Hi'와 'Bye'는 친구 사이의 짧은 인사. 'See you later'는 한국어 '나중에 봐'와 거의 같아요 — 다시 만날 가능성이 있을 때 씁니다. 직장에서도 동료들끼리 흔하게 써요.",
    examples: [
      { target: 'Hi',            native: '안녕' },
      { target: 'Bye',           native: '잘 가' },
      { target: 'See you later', native: '나중에 봐' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Hi', right: '안녕' },
      { left: 'Bye', right: '잘 가' },
      { left: 'See you later', right: '나중에 봐' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '나중에 봐', correct: ['See you later', 'see you later', 'See you', 'see you'] },
    { type: 'fill_blank', instruction: '빈칸 채우기', sentence: 'Hi! ____ you later!', options: ['See', 'Look', 'Watch'], correct: 'See', context: '카페에서 친구와 헤어질 때.' },
    { type: 'multiple_choice', instruction: '상황에 맞는 답', question: '친구가 카페에서 일어나며 손을 흔들어요. 뭐라고 하시겠어요?', options: [
      { text: 'Bye! See you later!', correct: true },
      { text: 'How do you do?',      correct: false },
      { text: 'Goodbye, sir.',       correct: false },
    ], explanation: "친구 사이엔 'Bye!'와 'See you later!'가 자연스러워요. 'Goodbye, sir'는 너무 격식 있어요." },
    { type: 'build_sentence', instruction: '단어 순서', words: ['later', 'you', 'See'], correct: ['See', 'you', 'later'], translation: '나중에 봐' },
    { type: 'translate', instruction: '영어로', prompt: '안녕! 잘 가!', correct: ['Hi! Bye!', 'hi! bye!', 'Hi, bye!'] },
  ],

  rwenDialogue: {
    intro: '홍대 카페 — K-pop 팬 미팅 후 외국 팬과 자연스럽게 헤어지는 순간.',
    lines: [
      { speaker: 'npc', target: 'Hi! How are you?', native: '안녕! 어떻게 지내?' },
      { speaker: 'user', userChoices: [
        { target: "Hi, I'm fine. See you later!", native: '안녕, 잘 지내. 나중에 봐!', correct: true, feedback: '완벽 — 캐주얼하고 자연스럽고, 다시 만날 여지를 남겼어요.' },
        { target: 'Good morning, sir.',           native: '좋은 아침입니다, 선생님.',  correct: false, feedback: '너무 격식 — 친구 사이에는 이렇게 안 해요.' },
        { target: 'Yes.',                         native: '네.',                       correct: false, feedback: '대화가 끊어져요 — 인사를 받았으면 인사로 답하세요.' },
      ]},
      { speaker: 'npc', target: 'Bye!', native: '잘 가!' },
      { speaker: 'rwen', rwenLine: '이게 진짜 영어 캐주얼 인사예요. K-드라마에서 듣던 그 톤.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로 답하세요',
    prompts: [
      { prompt: 'Hi (영어로)',            correct: ['Hi', 'hi'] },
      { prompt: 'See you later (영어로)', correct: ['See you later', 'see you later', 'See you', 'see you'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 친구와 헤어질 때 'Bye! See you later!'라고 말해 보세요. 한국어 친구라도 괜찮아요.",
    rwenSignoff: '나중에 봐요!',
  },

  phase8: {
    scenario: 'BTS 팝업 카페에서 외국 팬과 짧은 대화. 인사하고, 캐주얼하게 헤어지기.',
    rwenRole: 'Emma, 26세, 영국에서 BTS 보러 온 팬. 활기차고 친근.',
    successCriteria: "User uses 'Hi' (NOT 'Hello, sir'), responds casually, closes with 'Bye' or 'See you later'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
