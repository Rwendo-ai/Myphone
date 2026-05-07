import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — 안녕히 가세요',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "헤어질 때 인사도 다양해요 — 'Goodbye' (격식), 'Bye' (캐주얼), 'See you tomorrow' (다음 만남 예고), 'Take care' (한국어 '잘 가요/조심히 가세요'와 같음).",
    culturalNote: "한국어는 가는 사람·남는 사람 인사가 달라요 ('안녕히 가세요' vs '안녕히 계세요'). 영어는 둘 다 'Goodbye' 또는 'Bye'. 누가 가고 남는지 신경 안 써요.",
  },

  chunks: [
    { id: 'goodbye',          target: 'Goodbye',           native: '안녕히 가세요 (annyeonghi gaseyo)',     literal: undefined,            emoji: '👋', phonetic: 'good-BYE',          audioRef: null },
    { id: 'see_you_tomorrow', target: 'See you tomorrow',  native: '내일 봐요 (naeil bwayo)',                literal: 'see you tomorrow',   emoji: '📅', phonetic: 'see-yoo-too-MOR-oh', audioRef: null },
    { id: 'take_care',        target: 'Take care',         native: '잘 지내요 / 조심히 가세요 (jal jinaeyo)', literal: 'take care',          emoji: '💚', phonetic: 'tayk-KAIR',         audioRef: null },
  ],

  pattern: {
    name: 'Goodbye combinations',
    explanation: "헤어질 때는 보통 두세 마디를 묶어요: 'Bye! See you tomorrow. Take care.' 한국어 '안녕히 가세요, 조심히 가세요, 내일 봐요'를 한꺼번에 한다고 보면 돼요.",
    examples: [
      { target: 'Goodbye',          native: '안녕히 가세요' },
      { target: 'See you tomorrow', native: '내일 봐요' },
      { target: 'Take care',        native: '조심히 가세요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Goodbye',          right: '안녕히 가세요' },
      { left: 'See you tomorrow', right: '내일 봐요' },
      { left: 'Take care',        right: '조심히 가세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '내일 봐요', correct: ['See you tomorrow', 'see you tomorrow'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Bye! ____ care!', options: ['Take', 'Get', 'Make'], correct: 'Take', context: '동료가 퇴근하며 인사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '동료가 퇴근하면서 인사해요. 뭐라고 하시겠어요?', options: [
      { text: "Goodbye! See you tomorrow. Take care.", correct: true },
      { text: 'Good morning!',                          correct: false },
      { text: "What's your name?",                       correct: false },
    ], explanation: "헤어질 때는 세 마디 묶는 게 자연스러워요." },
    { type: 'build_sentence', instruction: '문장', words: ['care', 'Take'], correct: ['Take', 'care'], translation: '조심히 가세요' },
    { type: 'translate', instruction: '영어로', prompt: '안녕히 가세요! 내일 봐요!', correct: ['Goodbye! See you tomorrow!', 'Bye! See you tomorrow!'] },
  ],

  rwenDialogue: {
    intro: '판교 사무실 저녁 6시 — 미국 동료가 퇴근 인사.',
    lines: [
      { speaker: 'npc', target: "Hey, you're heading out? Goodbye!", native: '어, 퇴근하세요? 안녕히 가세요!' },
      { speaker: 'user', userChoices: [
        { target: "Goodbye! See you tomorrow. Take care.", native: '안녕히 가세요! 내일 봐요. 조심히 가세요.', correct: true, feedback: '세 마디 — 자연스러운 영어 헤어짐 인사예요.' },
        { target: 'Good morning!',                          native: '좋은 아침!',                                correct: false, feedback: '저녁이고 헤어지는 자리예요.' },
        { target: "What's your name?",                       native: '이름이 뭐예요?',                             correct: false, feedback: '같이 일하는 동료예요. 헤어짐 인사를 하세요.' },
      ]},
      { speaker: 'npc', target: 'Take care! See you tomorrow.', native: '조심히 가세요! 내일 봐요.' },
      { speaker: 'rwen', rwenLine: '퇴근 인사 클리어 — Take care까지 자연스러웠어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Goodbye (영어로)',           correct: ['Goodbye', 'goodbye', 'Bye', 'bye'] },
      { prompt: 'See you tomorrow (영어로)',  correct: ['See you tomorrow', 'see you tomorrow'] },
      { prompt: 'Take care (영어로)',         correct: ['Take care', 'take care'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 퇴근할 때 'Goodbye, see you tomorrow, take care' 세 마디를 묶어 말해 보세요.",
    rwenSignoff: '조심히 가세요. 내일 봐요. Take care.',
  },

  phase8: {
    scenario: '판교 사무실 저녁 6시. 글로벌 팀 동료와 퇴근 인사.',
    rwenRole: 'Alex, 32세 호주 출신 동료, 친근.',
    successCriteria: "User chains at least two of: 'Goodbye', 'See you tomorrow', 'Take care'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
