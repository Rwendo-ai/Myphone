import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make"',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "do (하다) vs make (만들다) — 한국어 '하다'에 둘 다 들어가요. 'I do my homework' (수행), 'She makes tea' (생산·만듦).",
    culturalNote: "한국 화자가 자주 헷갈림: 'I make my homework' (X) / 'I do my homework' (O). 일반 활동·작업·동작 = do. 만들기·생산 = make. make a cake (케이크 만들기), do exercise (운동하기).",
  },

  chunks: [
    { id: 'do_homework',  target: 'I do my homework.', native: '숙제 해요 (sukje haeyo)',           literal: 'I do my homework',  emoji: '📚', phonetic: 'aye-DOO-my-HOM-werk', audioRef: null },
    { id: 'makes_tea',     target: 'She makes tea.',     native: '그녀는 차 만들어요 (geunyeoneun cha mandeureoyo)', literal: 'she makes tea', emoji: '🍵', phonetic: 'shee-MAYKS-TEE',     audioRef: null },
    { id: 'dont_worry',    target: "Don't worry.",        native: '걱정 마요 (geokjeong mayo)',          literal: 'do not worry',     emoji: '😌', phonetic: 'DOHNT-WUR-ee',        audioRef: null },
  ],

  pattern: {
    name: 'Do vs Make',
    explanation: "do = 일반 활동, 의무, 추상 (do homework, do exercise, do the dishes). make = 결과물 생산 (make a cake, make tea, make a decision). 'Don\\'t worry' = 부정 명령형.",
    examples: [
      { target: 'I do the dishes.',           native: '설거지 해요.' },
      { target: 'She makes coffee.',           native: '커피 만들어요.' },
      { target: "Don't worry about it.",       native: '걱정 마요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I do my homework', right: '숙제 해요' },
      { left: 'She makes tea',     right: '차 만들어요' },
      { left: "Don't worry",        right: '걱정 마요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '걱정 마요', correct: ["Don't worry", "Do not worry"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ my homework every night.', options: ['do', 'make', 'have'], correct: 'do', context: 'homework는 do와 함께.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"커피 한 잔 만들어 드릴게요" 영어:', options: [
      { text: "I'll make you a coffee.",     correct: true },
      { text: "I'll do you a coffee.",        correct: false },
      { text: "I'll have a coffee.",           correct: false },
    ], explanation: '커피 만들기 = make.' },
    { type: 'build_sentence', instruction: '문장', words: ['tea', 'makes', 'She'], correct: ['She', 'makes', 'tea'], translation: '그녀는 차 만들어요' },
    { type: 'translate', instruction: '영어로', prompt: '운동해요', correct: ['I do exercise', 'I exercise', 'I do exercises'] },
  ],

  rwenDialogue: {
    intro: '판교 사무실 — 동료가 점심 후 도움.',
    lines: [
      { speaker: 'npc', target: "Want me to grab you a coffee?", native: '커피 사다 드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "Don't worry, I'll make it myself.", native: '걱정 마세요, 제가 만들어 마실게요.', correct: true, feedback: "Don't worry + make 두 동사 정확히." },
        { target: 'I do coffee.',                         native: '저 커피 함.',                         correct: false, feedback: '커피 = make (만들기).' },
        { target: 'Yes do.',                                native: '네 do.',                              correct: false, feedback: '구조 부족.' },
      ]},
      { speaker: 'npc', target: "Sure, no worries.", native: '네, 신경 쓰지 마세요.' },
      { speaker: 'rwen', rwenLine: 'do / make — 영어 일상 동사의 핵심 분기예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I do my homework (영어로)', correct: ['I do my homework', 'i do my homework'] },
      { prompt: 'She makes tea (영어로)',      correct: ['She makes tea', 'she makes tea'] },
      { prompt: "Don't worry (영어로)",         correct: ["Don't worry", "Do not worry"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "do / make 동사 5문장씩 — 일상 활동 vs 만들기.",
    rwenSignoff: 'do / make — 한국어 "하다"의 영어 두 갈래.',
  },

  phase8: {
    scenario: '판교 사무실 — 동료 호의에 부드럽게 거절하면서 do/make 사용.',
    rwenRole: 'Colleague, 30대 미국인.',
    successCriteria: "User uses 'do' for activities/duties AND 'make' for created things.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
