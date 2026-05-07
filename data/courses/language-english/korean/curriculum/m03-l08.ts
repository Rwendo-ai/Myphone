import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: '나를 묘사하기 — Describing yourself',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "성격을 영어로 — 'I'm friendly', 'I'm shy sometimes', 'I love learning'. 한국어 '저는 친절해요'와 같지만, 영어는 자기 성격을 직접 말하는 게 자연스러워요.",
    culturalNote: "한국에서는 자기 자랑 같다고 성격 표현을 꺼리지만, 영어권 면접·소개팅에서는 'I'm ___'로 자기 성격을 분명히 말하는 게 표준이에요. 자기 광고가 아니라 자기 인식 표현이에요.",
  },

  chunks: [
    { id: 'im_friendly',     target: "I'm friendly",       native: '저는 친절해요 (jeoneun chinjeolhaeyo)',     literal: 'I-am friendly', emoji: '😊', phonetic: 'aym-FREND-lee',     audioRef: null },
    { id: 'im_shy',          target: "I'm shy sometimes",   native: '저는 가끔 부끄러워해요 (jeoneun gakkeum bukkeureowohaeyo)', literal: 'I-am shy sometimes', emoji: '🙈', phonetic: 'aym-SHY-sum-tymz', audioRef: null },
    { id: 'i_love_learning', target: 'I love learning',     native: '저는 배우는 걸 좋아해요 (jeoneun baeuneun geol joahaeyo)', literal: 'I love learning', emoji: '📚', phonetic: 'aye-LUV-LER-ning', audioRef: null },
  ],

  pattern: {
    name: 'Personality phrases',
    explanation: "'I'm + 형용사' (성격) — friendly, shy, curious, calm, organized. 'I love + -ing' (즐기는 것) — I love learning, I love cooking. 한국어 '~을 좋아해요'와 거의 같은 자리.",
    examples: [
      { target: "I'm friendly.",       native: '저는 친절해요.' },
      { target: "I'm a bit shy.",       native: '저는 좀 부끄러워해요.' },
      { target: 'I love learning.',     native: '저는 배우는 걸 좋아해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm friendly",       right: '저는 친절해요' },
      { left: "I'm shy sometimes",  right: '저는 가끔 부끄러워해요' },
      { left: 'I love learning',    right: '저는 배우는 걸 좋아해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 친절해요', correct: ["I'm friendly", "I am friendly"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I love ____.', options: ['learning', 'learn', 'learns'], correct: 'learning', context: 'love 다음에는 -ing.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '면접에서 자기 성격 — 친절하지만 가끔 수줍을 때:', options: [
      { text: "I'm friendly, but I can be shy sometimes.", correct: true },
      { text: 'Friendly shy me.',                            correct: false },
      { text: 'No personality.',                              correct: false },
    ], explanation: 'be 동사 + 형용사. but으로 두 면을 자연스럽게 연결.' },
    { type: 'build_sentence', instruction: '문장', words: ['learning', 'love', 'I'], correct: ['I', 'love', 'learning'], translation: '저는 배우는 걸 좋아해요' },
    { type: 'translate', instruction: '영어로', prompt: '저는 호기심이 많아요', correct: ["I'm curious", "I am curious"] },
  ],

  rwenDialogue: {
    intro: '미국계 회사 면접 — 자기 성격을 말해야 하는 자리.',
    lines: [
      { speaker: 'npc', target: "Tell me about yourself in three words.", native: '세 단어로 자기 소개 해 보세요.' },
      { speaker: 'user', userChoices: [
        { target: "I'm curious, friendly, and I love learning.", native: '저는 호기심 많고, 친절하고, 배우는 걸 좋아해요.', correct: true, feedback: '면접 답변 — 자기 성격 + 학습 동기까지 좋은 톤이에요.' },
        { target: 'No idea.',                                       native: '모르겠어요.',                                    correct: false, feedback: '면접에서는 준비된 답이 필요해요.' },
        { target: 'Three words me.',                                 native: '세 단어 나.',                                    correct: false, feedback: 'be 동사 + 형용사 패턴이 빠졌어요.' },
      ]},
      { speaker: 'npc', target: "Great combination. Tell me more.", native: '좋은 조합이네요. 더 말해 보세요.' },
      { speaker: 'rwen', rwenLine: '성격 영어 — 자기 인식이 분명해요. 면접 큰 자산이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm friendly (영어로)",   correct: ["I'm friendly", "I am friendly"] },
      { prompt: 'I love learning (영어로)', correct: ['I love learning', 'i love learning'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 성격을 영어 형용사 5개로 표현해 보세요. 친구에게 보낼 수 있을 정도로.",
    rwenSignoff: '성격 영어 — 자기를 정확히 표현하는 것이 시작이에요.',
  },

  phase8: {
    scenario: '미국계 회사 면접 — 자기 성격을 영어 형용사 3개로 분명히 표현.',
    rwenRole: 'Interviewer, 40대 미국인, 친근하지만 답변 길이 평가 중.',
    successCriteria: "User uses 'I'm + adjective' for at least 2 personality traits, may use 'I love ___ -ing' for interests.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
