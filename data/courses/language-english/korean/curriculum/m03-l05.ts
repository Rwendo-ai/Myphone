import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: '취미 — Hobbies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "취미는 영어 대화에 가장 자주 등장하는 주제 중 하나예요. 'I like ___', 'I enjoy ___', 'In my free time, I ___' — 세 가지 패턴.",
    culturalNote: "한국에선 취미를 묻는 게 어색할 수 있지만 ('취미는 그냥 일이에요'), 영어권은 'work-life balance'를 중시해서 취미 이야기가 정체성의 큰 부분이에요. K-드라마, 등산, 요가 — 다 좋은 답.",
  },

  chunks: [
    { id: 'i_like',         target: 'I like ...',          native: '저는 ~을 좋아해요 (jeoneun ~eul joahaeyo)',  literal: 'I like ___',     emoji: '❤️', phonetic: 'aye-LYK',         audioRef: null },
    { id: 'i_enjoy',        target: 'I enjoy ...',         native: '저는 ~을 즐겨요 (jeoneun ~eul jeulgyeoyo)',   literal: 'I enjoy ___',    emoji: '😊', phonetic: 'aye-en-JOY',      audioRef: null },
    { id: 'in_free_time',   target: 'In my free time',     native: '한가할 때 (hangahal ttae)',                  literal: 'in my free time', emoji: '🎯', phonetic: 'in-my-FREE-tym', audioRef: null },
  ],

  pattern: {
    name: 'Hobby phrases',
    explanation: "공식: (1) 'I like + 명사/-ing': I like K-pop / I like reading. (2) 'I enjoy + -ing': I enjoy hiking. (3) 'In my free time, I ___': In my free time, I watch K-dramas. -ing 형이 핵심이에요.",
    examples: [
      { target: 'I like K-dramas.',           native: '저는 K-드라마 좋아해요.' },
      { target: 'I enjoy hiking.',             native: '저는 등산 즐겨요.' },
      { target: 'In my free time, I read.',    native: '한가할 때 책 읽어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I like ...',         right: '저는 ~을 좋아해요' },
      { left: 'I enjoy ...',        right: '저는 ~을 즐겨요' },
      { left: 'In my free time',    right: '한가할 때' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 K-드라마 좋아해요', correct: ['I like K-dramas', 'I like K-drama', 'i like k-dramas'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I enjoy ____.', options: ['hiking', 'hike', 'hiked'], correct: 'hiking', context: 'enjoy 다음에는 -ing 형.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '취미를 물었을 때 — 등산을 좋아할 때:', options: [
      { text: 'I enjoy hiking. In my free time, I go to the mountains.', correct: true },
      { text: 'Hiking me.',                                                 correct: false },
      { text: 'I enjoy hike.',                                              correct: false },
    ], explanation: "enjoy + -ing 형, in my free time + 일반 동사." },
    { type: 'build_sentence', instruction: '문장', words: ['hiking', 'I', 'enjoy'], correct: ['I', 'enjoy', 'hiking'], translation: '저는 등산 즐겨요' },
    { type: 'translate', instruction: '영어로', prompt: '한가할 때 책 읽어요', correct: ['In my free time, I read', 'In my free time I read', 'In my free time, I read books'] },
  ],

  rwenDialogue: {
    intro: 'LA 친구 모임 — 주말에 뭐 하냐는 질문.',
    lines: [
      { speaker: 'npc', target: "What do you like to do for fun?", native: '재미로 뭐 해요?' },
      { speaker: 'user', userChoices: [
        { target: 'I enjoy hiking. In my free time, I also watch K-dramas.', native: '등산 즐겨요. 한가할 때 K-드라마도 봐요.', correct: true, feedback: '두 패턴 다 — enjoy + -ing와 in my free time, I + 동사.' },
        { target: 'Hiking me.',                                                native: '등산 나.',                                  correct: false, feedback: 'be 동사 + I + 패턴이 빠졌어요.' },
        { target: 'No.',                                                       native: '아니요.',                                  correct: false, feedback: '취미를 물었으니 답하세요.' },
      ]},
      { speaker: 'npc', target: "K-dramas! Which one is your favorite?", native: 'K-드라마! 좋아하는 거 있어요?' },
      { speaker: 'rwen', rwenLine: '취미 영어 — 정체성의 큰 카드예요. K-드라마 자랑도 자연스러웠어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I like ___ (영어로)',       correct: ['I like', 'i like'] },
      { prompt: 'In my free time (영어로)',  correct: ['In my free time', 'in my free time'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 취미 3개를 영어로 — 'I like ___', 'I enjoy ___', 'In my free time, I ___' — 만들어 보세요.",
    rwenSignoff: '취미는 영어 대화의 따뜻한 이음새예요.',
  },

  phase8: {
    scenario: 'LA 친구 모임에서 취미 교환. K-pop, K-drama 같은 한국 문화 자연스럽게 소개.',
    rwenRole: 'Friend, 27세 미국인 K-드라마 팬.',
    successCriteria: "User uses 'I like ___' AND 'I enjoy ___ (-ing)' AND 'In my free time, I ___' — at least two of three patterns.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
