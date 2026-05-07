import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: '과거 이야기 — Telling past stories',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "과거 추억 영어 — 'When I was a child' (어렸을 때), 'I'll never forget...' (~잊지 못해요), 'It was amazing' (정말 멋졌어요).",
    culturalNote: "한국 회식·가족 모임에서 '옛날 얘기' 좋아하죠. 영어로 'When I was a child', 'I'll never forget when ___'를 풀면 영어권 친구도 깊이 들어요. 추억은 만국 공통 언어예요.",
  },

  chunks: [
    { id: 'when_child',       target: 'When I was a child', native: '어렸을 때 (eoryeosseul ttae)',         literal: 'when I was a child',      emoji: '👶', phonetic: 'wen-aye-wuz-uh-CHYLD',  audioRef: null },
    { id: 'never_forget',     target: "I'll never forget...", native: '~잊지 못해요 (~ ikji mothaeyo)',         literal: "I'll never forget",        emoji: '💭', phonetic: 'AYL-NEV-er-fer-GET',     audioRef: null },
    { id: 'was_amazing',       target: 'It was amazing',     native: '정말 멋졌어요 (jeongmal meotjyeosseoyo)', literal: 'it was amazing',          emoji: '🌟', phonetic: 'it-wuz-uh-MAY-zing',     audioRef: null },
  ],

  pattern: {
    name: 'Story openers + ratings',
    explanation: "구조: (1) 시간 표시 'When I was ___' / 'A long time ago'. (2) 강조 'I'll never forget'. (3) 평가 'It was amazing / unforgettable'. 추억 한 단락 만드는 카드.",
    examples: [
      { target: 'When I was a child, my grandma made kimchi.',  native: '어렸을 때 할머니가 김치 만들어 주셨어요.' },
      { target: "I'll never forget that day.",                    native: '그날 잊지 못해요.' },
      { target: 'It was amazing.',                                 native: '정말 멋졌어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'When I was a child', right: '어렸을 때' },
      { left: "I'll never forget",   right: '~잊지 못해요' },
      { left: 'It was amazing',     right: '정말 멋졌어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '어렸을 때', correct: ['When I was a child', 'when I was a child'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'll ____ forget that day.", options: ['never', 'no', 'not'], correct: 'never', context: '강조.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"한국 첫 여행 잊지 못해요" 영어:', options: [
      { text: "I'll never forget my first trip to Korea.",  correct: true },
      { text: 'Korea trip first never.',                       correct: false },
      { text: 'Forget Korea.',                                   correct: false },
    ], explanation: "I'll never forget + 명사/사건." },
    { type: 'build_sentence', instruction: '문장', words: ['amazing', 'It', 'was'], correct: ['It', 'was', 'amazing'], translation: '정말 멋졌어요' },
    { type: 'translate', instruction: '영어로', prompt: '어렸을 때 할머니가 김치 만드셨어요', correct: ['When I was a child, my grandma made kimchi', 'When I was a child my grandma made kimchi'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 한국 어린 시절 추억.',
    lines: [
      { speaker: 'npc', target: "Tell me a childhood memory.", native: '어린 시절 추억 하나 말해 봐요.' },
      { speaker: 'user', userChoices: [
        { target: "When I was a child, my grandma made kimchi every fall. I'll never forget her hands. It was amazing.", native: '어렸을 때 할머니가 매년 가을 김치 담그셨어요. 그 손 잊지 못해요. 정말 멋졌어요.', correct: true, feedback: '시간 + 사건 + 강조 + 평가 — 추억 4단계 카드 다.' },
        { target: 'Grandma kimchi child.',                                                                                  native: '할머니 김치 아이.',                                                                  correct: false, feedback: '구조 부족.' },
        { target: 'No.',                                                                                                     native: '아니요.',                                                                              correct: false, feedback: '추억 풀어요.' },
      ]},
      { speaker: 'npc', target: "Beautiful. Thank you for sharing.", native: '아름다워요. 나눠 줘서 고마워요.' },
      { speaker: 'rwen', rwenLine: '추억 영어 — 4단계 흐름으로 마음을 풀어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'When I was a child (영어로)', correct: ['When I was a child', 'when I was a child'] },
      { prompt: "I'll never forget (영어로)",   correct: ["I'll never forget", "I will never forget"] },
      { prompt: 'It was amazing (영어로)',      correct: ['It was amazing', 'it was amazing'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "어린 시절 추억 한 단락 영어로 — 4단계 카드 모두.",
    rwenSignoff: '추억 영어 — 마음을 풀어내는 카드.',
  },

  phase8: {
    scenario: '미국 친구에게 한국 어린 시절 추억 영어로 풀기.',
    rwenRole: 'Friend, 30대 미국인.',
    successCriteria: "User uses 'When I was a child', 'I'll never forget', and 'It was amazing/unforgettable' to tell a memory.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
