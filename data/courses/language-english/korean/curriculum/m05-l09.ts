import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: '가족 이야기 — Family stories',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "가족 이야기를 영어로 — 'A long time ago...', 'My grandmother used to...', 'He always says...'. 한국어 '옛날 옛적에...', '할머니가 늘 말씀하시길...'에 해당.",
    culturalNote: "한국 가족 이야기는 보통 할머니/할아버지 입에서 나와요. 영어로 옮길 때 'used to'(과거 습관)와 'always says'(현재 습관) 둘이 핵심. 한국어 '~하셨다', '~하신다'와 거의 같은 자리.",
  },

  chunks: [
    { id: 'long_time_ago',     target: 'A long time ago',         native: '오래 전 (orae jeon)',                          literal: 'a long time ago',  emoji: '⏳', phonetic: 'uh-LONG-tym-uh-GOH', audioRef: null },
    { id: 'grandma_used_to',   target: 'My grandmother used to...', native: '저희 할머니는 ~하셨어요 (jeohui halmeonineun ~hasyeosseoyo)', literal: 'my grandmother used to', emoji: '👵', phonetic: 'my-GRAND-muh-ther-yoozd-too', audioRef: null },
    { id: 'he_always_says',    target: 'He always says...',          native: '그는 늘 ~말해요 (geuneun neul ~malhaeyo)',     literal: 'he always says',    emoji: '💬', phonetic: 'hee-AL-ways-SEZ',      audioRef: null },
  ],

  pattern: {
    name: 'Used to vs Always',
    explanation: "'Used to + 동사' = 과거 습관 (지금은 안 함). 'Always + 동사' = 현재 습관. 한국어 '~하시곤 했다' (used to) vs '~늘 하신다' (always). 시제 분리가 영어의 핵심.",
    examples: [
      { target: 'My grandma used to make kimchi.',     native: '할머니는 김치를 (자주) 만드셨어요.' },
      { target: 'My dad always says, "Be honest."',     native: '아빠는 늘 "솔직해라"고 말씀하세요.' },
      { target: "Long time ago, life was simpler.",      native: '오래 전엔 삶이 더 단순했어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'A long time ago',          right: '오래 전' },
      { left: 'My grandmother used to...', right: '저희 할머니는 ~하셨어요' },
      { left: 'He always says...',          right: '그는 늘 ~말해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '오래 전', correct: ['A long time ago', 'a long time ago'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My grandma ____ to live in a small village.', options: ['used', 'use', 'using'], correct: 'used', context: '과거 습관 — used to.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"아빠는 늘 솔직해라고 하세요" 영어:', options: [
      { text: 'My dad always says, "Be honest."',  correct: true },
      { text: 'Dad honest say.',                       correct: false },
      { text: 'Dad used to honest.',                    correct: false },
    ], explanation: '현재 습관은 always, 과거 습관은 used to.' },
    { type: 'build_sentence', instruction: '문장', words: ['ago', 'time', 'A', 'long'], correct: ['A', 'long', 'time', 'ago'], translation: '오래 전' },
    { type: 'translate', instruction: '영어로', prompt: '할머니는 김치를 만드셨어요', correct: ['My grandmother made kimchi', 'My grandmother used to make kimchi'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 한국 할머니 추억 풀기.',
    lines: [
      { speaker: 'npc', target: "Tell me a story about your grandmother.", native: '할머니 이야기 해 주세요.' },
      { speaker: 'user', userChoices: [
        { target: 'A long time ago, my grandma used to make kimchi every fall. She always said, "Family eats together."', native: '오래 전, 할머니는 매년 가을 김치를 담그셨어요. 늘 "가족은 함께 먹는다"고 하셨어요.', correct: true, feedback: 'used to + always says — 과거 습관과 인생 격언 둘 다 자연스럽게.' },
        { target: 'Grandma kimchi.',                                                                                          native: '할머니 김치.',                                                                                  correct: false, feedback: '동사·시제 빠졌어요.' },
        { target: 'No.',                                                                                                       native: '아니요.',                                                                                       correct: false, feedback: '이야기를 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Beautiful. That stays with you.", native: '아름다워요. 그게 마음에 남죠.' },
      { speaker: 'rwen', rwenLine: 'used to / always — 시제로 가족 이야기를 풀어내는 두 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A long time ago (영어로)', correct: ['A long time ago', 'a long time ago'] },
      { prompt: 'Used to (영어로)',          correct: ['Used to', 'used to'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "할머니/할아버지 이야기를 영어 한 단락으로. used to + always says 구조로.",
    rwenSignoff: '가족 이야기 영어 — 두 시제로 인생 풀어내요.',
  },

  phase8: {
    scenario: '미국 친구에게 한국 할머니 추억을 영어 한 단락으로.',
    rwenRole: 'Friend, 30대 미국인, 가족 이야기 좋아함.',
    successCriteria: "User uses 'A long time ago', 'used to' (past habit), and/or 'always says' (present habit) to tell a family story.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
