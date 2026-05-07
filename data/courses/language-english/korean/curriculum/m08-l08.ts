import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: '과거형 — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "어제 = yesterday. 동사 과거형 — go → went, see → saw, eat → ate, was/were (be의 과거). 한국어 '~었어요/았어요'에 해당.",
    culturalNote: "한국어 과거형은 동사 어미만 바꿔 ('가다 → 갔다'), 영어는 동사 자체 변화. 불규칙 과거 (went·saw·ate·was)는 외워야 해요. 핵심 30개만 외우면 일상 90%.",
  },

  chunks: [
    { id: 'went_market',  target: 'Yesterday I went to the market.', native: '어제 시장 갔어요 (eoje sijang gasseoyo)',     literal: 'yesterday I went to the market', emoji: '🛒', phonetic: 'YES-ter-day-aye-WENT', audioRef: null },
    { id: 'saw_friend',    target: 'I saw a friend.',                  native: '친구를 봤어요 (chinguleul bwasseoyo)',          literal: 'I saw a friend',                  emoji: '👋', phonetic: 'aye-SAW-uh-FREND',     audioRef: null },
    { id: 'was_great',     target: 'It was great.',                     native: '좋았어요 (joasseoyo)',                         literal: 'it was great',                    emoji: '😊', phonetic: 'it-wuz-GRAYT',          audioRef: null },
  ],

  pattern: {
    name: 'Past simple',
    explanation: "규칙 과거 = 동사 + ed (worked, played, walked). 불규칙 — go→went, see→saw, eat→ate, do→did, be→was/were, have→had. 'Yesterday', 'last week' 같은 시간 표현과 함께.",
    examples: [
      { target: 'Yesterday I went to work.',  native: '어제 회사 갔어요.' },
      { target: 'I saw a friend.',              native: '친구 봤어요.' },
      { target: 'It was great.',                 native: '좋았어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Yesterday I went to the market', right: '어제 시장 갔어요' },
      { left: 'I saw a friend',                    right: '친구를 봤어요' },
      { left: 'It was great',                       right: '좋았어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '어제 시장 갔어요', correct: ['Yesterday I went to the market', 'I went to the market yesterday'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Yesterday I ____ a movie.', options: ['saw', 'see', 'seen'], correct: 'saw', context: 'see의 과거 — saw.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"어제 김치 먹었어요" 영어:', options: [
      { text: 'Yesterday I ate kimchi.',  correct: true },
      { text: 'Yesterday I eat kimchi.',    correct: false },
      { text: 'I eat yesterday kimchi.',     correct: false },
    ], explanation: 'eat의 과거 = ate.' },
    { type: 'build_sentence', instruction: '문장', words: ['great', 'It', 'was'], correct: ['It', 'was', 'great'], translation: '좋았어요' },
    { type: 'translate', instruction: '영어로', prompt: '친구 봤어요', correct: ['I saw a friend', 'i saw a friend'] },
  ],

  rwenDialogue: {
    intro: '월요일 아침 — 미국 동료가 주말 안부.',
    lines: [
      { speaker: 'npc', target: "How was your weekend?", native: '주말 어땠어요?' },
      { speaker: 'user', userChoices: [
        { target: 'I went to the market on Saturday and saw an old friend. It was great.', native: '토요일에 시장 갔다가 옛 친구 만났어요. 좋았어요.', correct: true, feedback: '과거 동사 (went/saw/was) — 모두 정확.' },
        { target: 'Market friend good.',                                                      native: '시장 친구 좋음.',                                  correct: false, feedback: '동사·시제 빠짐.' },
        { target: 'Yes.',                                                                      native: '네.',                                                correct: false, feedback: '주말 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Lovely. Mine was busy.", native: '좋네요. 저는 바빴어요.' },
      { speaker: 'rwen', rwenLine: '과거형 — 어제·주말의 영어 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Yesterday I went (영어로)', correct: ['Yesterday I went', 'yesterday I went'] },
      { prompt: 'I saw a friend (영어로)',     correct: ['I saw a friend', 'i saw a friend'] },
      { prompt: 'It was great (영어로)',         correct: ['It was great', 'it was great'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "어제 한 일 5문장 — 과거형 동사 (went/saw/ate/was/did/had).",
    rwenSignoff: '과거형 — 영어 시간 여행의 첫 카드.',
  },

  phase8: {
    scenario: '월요일 아침 — 미국 동료에게 주말 영어로 풀기.',
    rwenRole: 'Colleague, 30대 미국인.',
    successCriteria: "User uses past tense (went, saw, ate, was, etc.) for at least 3 weekend activities.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
