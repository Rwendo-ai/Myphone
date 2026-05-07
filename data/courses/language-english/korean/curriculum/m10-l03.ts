import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: '두려움·걱정 — Fear & Worry',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "두려움·걱정 — 'I'm scared' (무서워요), 'I'm worried about...' (~걱정돼요), 'Don't worry' (걱정 마요).",
    culturalNote: "한국에서는 부모님 걱정시키지 않으려고 'I'm scared'를 잘 말 안 해요. 영어권은 친구·가족과 'I'm worried about...'을 쉽게 공유해요. 약함이 아니라 친밀함의 표현이에요.",
  },

  chunks: [
    { id: 'im_scared',     target: "I'm scared",          native: '무서워요 (museowoyo)',                     literal: 'I-am scared',         emoji: '😨', phonetic: 'aym-SKAIRD',           audioRef: null },
    { id: 'im_worried',    target: "I'm worried about...", native: '~ 걱정돼요 (~ geokjeongdwaeyo)',           literal: 'I-am worried about',  emoji: '😟', phonetic: 'aym-WUR-eed-uh-BOWT', audioRef: null },
    { id: 'dont_worry',    target: "Don't worry",          native: '걱정 마요 (geokjeong mayo)',                literal: "do not worry",         emoji: '🤗', phonetic: 'DOHNT-WUR-ee',         audioRef: null },
  ],

  pattern: {
    name: 'Fear / Worry',
    explanation: "공식: 'I'm scared (of + 명사)' / 'I'm worried about + 명사'. 위로: 'Don't worry — it'll be okay'. 한국어 '~걱정돼' = 'I'm worried about ___'.",
    examples: [
      { target: "I'm scared of flying.",          native: '비행기 무서워요.' },
      { target: "I'm worried about my mom.",       native: '엄마 걱정돼요.' },
      { target: "Don't worry — it'll be okay.",     native: '걱정 마 — 괜찮을 거야.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm scared",          right: '무서워요' },
      { left: "I'm worried about", right: '~ 걱정돼요' },
      { left: "Don't worry",          right: '걱정 마요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '걱정 마요', correct: ["Don't worry", "Do not worry"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'm worried ____ my mom.", options: ['about', 'on', 'at'], correct: 'about', context: 'worried about + 대상.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"비행기 무서워요" 영어:', options: [
      { text: "I'm scared of flying.",  correct: true },
      { text: 'Plane scared.',             correct: false },
      { text: 'Fly bad.',                    correct: false },
    ], explanation: 'scared of + -ing or 명사.' },
    { type: 'build_sentence', instruction: '문장', words: ['worry', "Don't"], correct: ["Don't", 'worry'], translation: '걱정 마요' },
    { type: 'translate', instruction: '영어로', prompt: '엄마 걱정돼요', correct: ["I'm worried about my mom", "I'm worried about my mother"] },
  ],

  rwenDialogue: {
    intro: '한국 부모님 건강 걱정 — 미국 친구에게 영어로 풀기.',
    lines: [
      { speaker: 'npc', target: "What's on your mind?", native: '뭐 마음에 걸려요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm worried about my mom — she's been sick.", native: '엄마 걱정돼요 — 아프셔요.', correct: true, feedback: 'worried about + 이유 — 친구에게 정확히 풀었어요.' },
        { target: 'Mom sick scared.',                                native: '엄마 아픔 무서움.',          correct: false, feedback: '구조 부족.' },
        { target: 'No.',                                              native: '아니요.',                     correct: false, feedback: '솔직히 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Sending love. Let me know if I can help.", native: '응원해요. 도움 필요하면 알려요.' },
      { speaker: 'rwen', rwenLine: '걱정 영어 — 친구에게 솔직히 공유 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm scared (영어로)",       correct: ["I'm scared", "I am scared"] },
      { prompt: "I'm worried about (영어로)", correct: ["I'm worried about", "I am worried about"] },
      { prompt: "Don't worry (영어로)",        correct: ["Don't worry", "Do not worry"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 걱정 3가지 영어로 — I'm worried about + 이유.",
    rwenSignoff: '걱정 영어 — 친밀함의 카드.',
  },

  phase8: {
    scenario: '미국 친구와 한국 부모님 건강 걱정 영어로 풀기.',
    rwenRole: 'Friend, 30대 미국인, 공감 잘함.',
    successCriteria: "User uses 'I'm worried about ___' or 'I'm scared of ___' with reason or context.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
