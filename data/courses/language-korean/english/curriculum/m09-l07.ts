import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel Korean — Check-in & Room',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "호텔 (hotel) check-in: 예약 (reservation), 방 (room), 키 (key). 예약했어요. 제 이름은 ___이에요. 방 키 주세요.",
    culturalNote: "Korean hotels (호텔) and Korean inns (한옥 / 펜션) have different vibes. 한옥 = traditional hanok stay, often Bukchon. 펜션 = pension/B&B. K-drama protagonists always have one of these.",
  },

  chunks: [
    { id: 'yeyak', target: '예약', native: 'Reservation', literal: 'pre-promise', emoji: '📋', phonetic: 'ye-yak', audioRef: null },
    { id: 'bang', target: '방', native: 'Room', literal: 'room', emoji: '🛏️', phonetic: 'bang', audioRef: null },
    { id: 'ki', target: '키', native: 'Key', literal: 'key', emoji: '🔑', phonetic: 'ki', audioRef: null },
  ],

  pattern: {
    name: 'Hotel check-in template',
    explanation: "예약했어요 (I made a reservation). 제 이름은 ___이에요. 방 키 주세요. Add 어디예요? for amenities (조식 = breakfast, 주차장 = parking).",
    examples: [
      { target: '예약했어요', native: 'I have a reservation' },
      { target: '방 키 주세요', native: 'Room key please' },
      { target: '조식 어디예요?', native: 'Where is breakfast?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '예약', right: 'Reservation' },
      { left: '방', right: 'Room' },
      { left: '키', right: 'Key' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Room key please', correct: ['방 키 주세요', 'bang ki juseyo'] },
    { type: 'fill_blank', instruction: 'Past tense — confirm reservation', sentence: '_____. 제 이름은 Sam이에요.', options: ['예약했어요', '예약해요', '예약할게요'], correct: '예약했어요', context: 'Past tense — reservation already made.' },
    { type: 'build_sentence', instruction: 'Build "Where is breakfast?"', words: ['어디예요?', '조식'], correct: ['조식', '어디예요?'], translation: 'Where is breakfast?' },
    { type: 'multiple_choice', instruction: 'Best Korean for hotel check-in?', question: 'Pick the natural opener', options: [
      { text: '안녕하세요. 예약했어요. 제 이름은 ___이에요', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '얼마예요?', correct: false },
    ], explanation: 'Greeting + reservation confirm + name. Standard.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I made a reservation', correct: ['예약했어요', 'yeyakhaesseoyo'] },
  ],

  rwenDialogue: {
    intro: "Hotel desk in Jeju. You just checked in.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 예약했어요. 제 이름은 Sam이에요', native: 'Hello, I have a reservation. My name is Sam.', correct: true, feedback: 'Full check-in template.' },
        { target: '비싸요?', native: 'Is it expensive?', correct: false, feedback: 'Wrong moment.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Banmal at hotel desk = bad register.' },
      ]},
      { speaker: 'npc', target: '네, 확인됐습니다. 305호실입니다.', native: 'Yes, confirmed. Room 305.' },
      { speaker: 'rwen', rwenLine: "Hotel Korean = clean, formal. You can travel alone.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I have a reservation', correct: ['예약했어요', 'yeyakhaesseoyo'] },
      { prompt: 'Room key please', correct: ['방 키 주세요', 'bang ki juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture a hotel check-in. Greeting → 예약했어요 → 제 이름은 ___ → 방 키 주세요.",
    rwenSignoff: "Hotel Korean. You can sleep solo in Korea now.",
  },

  phase8: {
    scenario: "Hotel check-in at a Jeju resort. You confirm reservation, get the key, ask for breakfast info.",
    rwenRole: "Hotel desk — formal, polite.",
    successCriteria: "User uses 예약했어요, gives name with 제 이름은, asks 조식 어디예요?. Stays formal/polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
