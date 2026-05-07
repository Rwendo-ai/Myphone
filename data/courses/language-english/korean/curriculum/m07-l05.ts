import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: '음식 호불호 — Likes & Dislikes',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "맛있다·맛없다 영어 — 'I love it', 'I don't like it', 'It's delicious'. 한국어 '맛있어요/맛없어요'에 해당.",
    culturalNote: "한국에서는 호스트가 차린 음식에 '맛없어요'라고 말하면 무례. 영어권도 비슷 — 'I don't like it'은 강한 표현. 'It's not for me'(저한테는 안 맞아요)가 부드러운 거절.",
  },

  chunks: [
    { id: 'i_love_it',     target: 'I love it',         native: '정말 맛있어요 (jeongmal masisseoyo)', literal: 'I love it',         emoji: '😍', phonetic: 'aye-LUV-it',         audioRef: null },
    { id: 'dont_like_it',  target: "I don't like it",   native: '안 좋아해요 (an joahaeyo)',           literal: "I don't like it",   emoji: '😐', phonetic: 'aye-DONT-LYK-it',  audioRef: null },
    { id: 'its_delicious', target: "It's delicious",    native: '맛있어요 (masisseoyo)',                literal: "it's delicious",     emoji: '😋', phonetic: 'its-de-LISH-us',  audioRef: null },
  ],

  pattern: {
    name: 'Food taste vocabulary',
    explanation: "사다리: 'I hate it' (X — 너무 강함) < 'I don't like it' (직접) < 'It's not for me' (부드러움) < 'It's okay' < 'It's good' < 'It's delicious' < 'I love it'.",
    examples: [
      { target: "It's delicious!",    native: '정말 맛있어요!' },
      { target: "It's not for me.",     native: '저한테는 안 맞아요.' },
      { target: "I love kimchi.",      native: '김치 정말 좋아해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I love it',         right: '정말 좋아해요' },
      { left: "I don't like it",   right: '안 좋아해요' },
      { left: "It's delicious",    right: '맛있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '맛있어요', correct: ["It's delicious", "Its delicious", "It is delicious"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ kimchi.', options: ['love', 'loves', 'loving'], correct: 'love', context: '주어 I + 동사 love.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"별로예요" — 부드럽게 영어로:', options: [
      { text: "It's not really for me.", correct: true },
      { text: 'I hate it!',                correct: false },
      { text: 'Bad food.',                  correct: false },
    ], explanation: '직접 비판 피하면서 거절.' },
    { type: 'build_sentence', instruction: '문장', words: ['delicious', "It's"], correct: ["It's", 'delicious'], translation: '맛있어요' },
    { type: 'translate', instruction: '영어로', prompt: '안 좋아해요', correct: ["I don't like it", "I do not like it"] },
  ],

  rwenDialogue: {
    intro: '미국 친구 집들이 — 친구가 만든 음식 평가 부드럽게.',
    lines: [
      { speaker: 'npc', target: "How do you like it?", native: '어때요?' },
      { speaker: 'user', userChoices: [
        { target: "It's delicious! Thank you for cooking.", native: '맛있어요! 요리해 주셔서 감사해요.', correct: true, feedback: '평가 + 감사 — 따뜻한 영어 톤.' },
        { target: 'Not good.',                                native: '안 좋음.',                            correct: false, feedback: '직접 비판은 무례. delicious나 not for me 정도로.' },
        { target: 'Yes.',                                      native: '네.',                                  correct: false, feedback: '구체적 평가 필요.' },
      ]},
      { speaker: 'npc', target: "Glad you like it!", native: '맛있어 하니 좋네요!' },
      { speaker: 'rwen', rwenLine: '음식 평가 영어 — 호불호 사다리 마스터.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I love it (영어로)',         correct: ['I love it', 'i love it'] },
      { prompt: "It's delicious (영어로)",     correct: ["It's delicious", "Its delicious", "It is delicious"] },
      { prompt: "I don't like it (영어로)",    correct: ["I don't like it", "I do not like it"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 먹은 음식 5개를 영어 호불호 사다리에 매겨 보세요.",
    rwenSignoff: '음식 평가 — 따뜻한 영어 톤이 핵심이에요.',
  },

  phase8: {
    scenario: '미국 친구 집들이 — 친구가 만든 음식 평가, 거절도 부드럽게.',
    rwenRole: 'Friend host, 32세 미국인, 요리 자랑.',
    successCriteria: "User uses 'It's delicious / I love it' for praise, or 'It's not for me' for soft decline.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
