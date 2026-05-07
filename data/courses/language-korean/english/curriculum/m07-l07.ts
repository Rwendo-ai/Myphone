import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-cafe',
  module: 7,
  lesson: 7,
  title: 'Korean Café Culture — Beyond the Order',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korea has more cafés per capita than almost anywhere. 아메리카노 (americano), 라떼 (latte), 차 (tea), 케이크 (cake). Standard café Korean is mostly loanwords + 주세요.",
    culturalNote: "Café-hopping (카페 투어) is a Seoul pastime. Some cafés are studios, some are pet cafés, some have themes (Studio Ghibli, K-pop). Asking 와이파이 비밀번호 뭐예요? (what's the wifi password?) is universal.",
  },

  chunks: [
    { id: 'amerikano', target: '아메리카노', native: 'Americano', literal: 'americano', emoji: '☕', phonetic: 'a-me-ri-ka-no', audioRef: null },
    { id: 'latte', target: '라떼', native: 'Latte', literal: 'latte', emoji: '☕', phonetic: 'rat-tte', audioRef: null },
    { id: 'wifi', target: '와이파이 비밀번호 뭐예요?', native: "What's the wifi password?", literal: 'wifi password what-is?', emoji: '📶', phonetic: 'wa-i-pa-i bi-mil-beon-ho mwo-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'Loanword Korean',
    explanation: "Coffee terms are mostly loanwords. Hot/iced specified up front: 따뜻한 아메리카노 (hot americano), 아이스 아메리카노 (iced).",
    examples: [
      { target: '아이스 아메리카노 주세요', native: 'Iced americano please' },
      { target: '따뜻한 라떼 주세요', native: 'Hot latte please' },
      { target: '와이파이 비밀번호 뭐예요?', native: "What's the wifi password?" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match drink to Korean', pairs: [
      { left: '아메리카노', right: 'Americano' },
      { left: '라떼', right: 'Latte' },
      { left: '차', right: 'Tea' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "What's the wifi password?", correct: ['와이파이 비밀번호 뭐예요?', 'waipai bimilbeonho mwoeyo'] },
    { type: 'fill_blank', instruction: 'Order iced americano', sentence: '_____ 아메리카노 주세요.', options: ['아이스', '따뜻한', '비싸'], correct: '아이스', context: 'Iced.' },
    { type: 'build_sentence', instruction: 'Build "Hot latte please"', words: ['주세요', '라떼', '따뜻한'], correct: ['따뜻한', '라떼', '주세요'], translation: 'Hot latte please.' },
    { type: 'multiple_choice', instruction: 'Best café opener?', question: 'Pick the natural order', options: [
      { text: '아이스 아메리카노 한 잔 주세요', correct: true },
      { text: '아메리카노 비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Iced + size + 한 잔 + 주세요 = full café template.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Iced americano', correct: ['아이스 아메리카노', 'aiseu amerikano'] },
  ],

  rwenDialogue: {
    intro: "Hongdae café. You order and check wifi.",
    lines: [
      { speaker: 'npc', target: '주문하시겠어요?', native: 'Would you like to order?' },
      { speaker: 'user', userChoices: [
        { target: '아이스 아메리카노 한 잔 주세요', native: 'One iced americano please', correct: true, feedback: 'Full café template.' },
        { target: '아메리카노', native: 'Americano (just word)', correct: false, feedback: 'Specify temp + counter + 주세요.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Order first.' },
      ]},
      { speaker: 'npc', target: '네, 4,500원입니다.', native: 'Yes, 4,500 won.' },
      { speaker: 'user', userChoices: [
        { target: '와이파이 비밀번호 뭐예요?', native: "What's the wifi password?", correct: true, feedback: 'Universal café follow-up.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: '4,500원 is fine.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wait until you leave.' },
      ]},
      { speaker: 'rwen', rwenLine: "Café Korean = loanwords + temp + 주세요. Wifi = universal follow-up.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Iced americano please', correct: ['아이스 아메리카노 주세요', 'aiseu amerikano juseyo'] },
      { prompt: "What's the wifi password?", correct: ['와이파이 비밀번호 뭐예요?', 'waipai bimilbeonho mwoeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three café orders in your head: hot/iced, drink type, size. Plus the wifi ask.",
    rwenSignoff: "Korean café Korean — easy entry, daily use.",
  },

  phase8: {
    scenario: "Hongdae café. Order a drink, ask for wifi, settle in.",
    rwenRole: "Barista — peer, polite, fast.",
    successCriteria: "User specifies 아이스/따뜻한 + drink + 한 잔 + 주세요. Asks for wifi politely. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
