import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-ktx',
  module: 9,
  lesson: 3,
  title: 'KTX — High-Speed Train',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "KTX (Korean high-speed rail) connects Seoul to Busan in 2.5 hours. The phrasebook: 표 (ticket), 왕복 (round trip), 편도 (one way), 자리 (seat).",
    culturalNote: "KTX runs through Seoul Station (서울역) and Yongsan. Bookings via Korail or app. Quiet car etiquette: hushed tones, minimal phone calls. Koreans take this seriously.",
  },

  chunks: [
    { id: 'pyo', target: '표', native: 'Ticket', literal: 'ticket', emoji: '🎟️', phonetic: 'pyo', audioRef: null },
    { id: 'wangbok', target: '왕복', native: 'Round trip', literal: 'going-returning', emoji: '🔁', phonetic: 'wang-bok', audioRef: null },
    { id: 'pyeondo', target: '편도', native: 'One way', literal: 'one-way', emoji: '➡️', phonetic: 'pyeon-do', audioRef: null },
  ],

  pattern: {
    name: 'Train ticket vocabulary',
    explanation: "Ask for [destination] [편도/왕복] 표 + 주세요. Specify seat: 창가 자리 (window) / 통로 자리 (aisle).",
    examples: [
      { target: '부산 편도 한 장 주세요', native: 'One one-way ticket to Busan' },
      { target: '왕복 두 장 주세요', native: 'Two round-trip tickets' },
      { target: '창가 자리로 주세요', native: 'Window seat please' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '표', right: 'Ticket' },
      { left: '왕복', right: 'Round trip' },
      { left: '편도', right: 'One way' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'One way', correct: ['편도', 'pyeondo'] },
    { type: 'fill_blank', instruction: 'Buy one round-trip ticket', sentence: '_____ 한 장 주세요.', options: ['왕복', '편도', '환승'], correct: '왕복', context: 'Round trip.' },
    { type: 'build_sentence', instruction: 'Build "Window seat please"', words: ['주세요', '창가', '자리로'], correct: ['창가', '자리로', '주세요'], translation: 'Window seat please.' },
    { type: 'multiple_choice', instruction: 'Best for "Two round-trip tickets to Busan"?', question: 'Pick the natural sentence', options: [
      { text: '부산 왕복 두 장 주세요', correct: true },
      { text: '부산 편도 두 장 주세요', correct: false },
      { text: '부산 비싸요', correct: false },
    ], explanation: '왕복 = round trip. 편도 = one way.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Ticket', correct: ['표', 'pyo'] },
  ],

  rwenDialogue: {
    intro: "Seoul Station ticket counter. You're heading to Busan.",
    lines: [
      { speaker: 'npc', target: '어디로 가세요?', native: 'Where to?' },
      { speaker: 'user', userChoices: [
        { target: '부산 편도 한 장 주세요. 창가 자리로요', native: 'One one-way to Busan, window seat please', correct: true, feedback: 'Destination + ticket type + count + seat. Full template.' },
        { target: '부산', native: 'Just place', correct: false, feedback: 'Need ticket type, count.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '53,500원입니다.', native: '53,500 won.' },
      { speaker: 'rwen', rwenLine: "KTX template: place + 편도/왕복 + 한 장 + 자리. You can book trains.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Round trip', correct: ['왕복', 'wangbok'] },
      { prompt: 'One way', correct: ['편도', 'pyeondo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture buying a KTX ticket to Busan. Run the template: place + 편도/왕복 + 한 장 + 주세요.",
    rwenSignoff: "KTX Korean = clean transactional. Now you can travel intercity.",
  },

  phase8: {
    scenario: "Seoul Station ticket counter. You buy a KTX ticket to Busan with seat preference.",
    rwenRole: "Ticket agent — polite, formal.",
    successCriteria: "User specifies destination + 편도/왕복 + count + seat. Pays.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
