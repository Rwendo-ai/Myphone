import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: '호텔 — Hotel & Accommodation',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "호텔 영어 — 'I have a reservation' (예약했어요), 'My room key' (방 열쇠), 'I'd like to check out' (체크아웃하려고요).",
    culturalNote: "한국 호텔 체크인은 영어로도 흔해요. 'reservation' (예약 명사), 'reserve' (예약 동사 — 'I reserved...'). 영국·미국 호텔 다 같은 표현.",
  },

  chunks: [
    { id: 'reservation', target: 'I have a reservation.', native: '예약했어요 (yeyak-haesseoyo)',           literal: 'I have a reservation', emoji: '📋', phonetic: 'aye-hav-uh-rez-er-VAY-shun', audioRef: null },
    { id: 'room_key',     target: 'My room key',           native: '방 열쇠 (bang yeolsoe)',                  literal: 'my room key',           emoji: '🔑', phonetic: 'my-ROOM-KEE',                audioRef: null },
    { id: 'check_out',    target: "I'd like to check out.", native: '체크아웃 할게요 (chekeu-aut hal-keyo)', literal: "I'd like to check out", emoji: '🏨', phonetic: 'AYD-LYK-too-CHEK-owt',     audioRef: null },
  ],

  pattern: {
    name: 'Hotel arc',
    explanation: "(1) 체크인: 'I have a reservation under [이름]'. (2) 머무는 동안: 'My room key, please'. (3) 체크아웃: 'I'd like to check out'. 한 사이클.",
    examples: [
      { target: 'I have a reservation under Kim.',  native: '김 이름으로 예약했어요.' },
      { target: 'My room key, please.',              native: '방 열쇠 부탁드려요.' },
      { target: "I'd like to check out, please.",     native: '체크아웃 부탁드려요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I have a reservation', right: '예약했어요' },
      { left: 'My room key',           right: '방 열쇠' },
      { left: "I'd like to check out", right: '체크아웃 할게요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '예약했어요', correct: ['I have a reservation', 'i have a reservation'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'd like to check ____.", options: ['out', 'in', 'over'], correct: 'out', context: '체크아웃.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '체크인 첫 마디:', options: [
      { text: 'I have a reservation under Kim.', correct: true },
      { text: 'Kim hotel.',                         correct: false },
      { text: 'Yes hotel.',                          correct: false },
    ], explanation: 'reservation + under + 이름.' },
    { type: 'build_sentence', instruction: '문장', words: ['key', 'My', 'room'], correct: ['My', 'room', 'key'], translation: '방 열쇠' },
    { type: 'translate', instruction: '영어로', prompt: '체크아웃 할게요', correct: ["I'd like to check out", "I would like to check out"] },
  ],

  rwenDialogue: {
    intro: 'London 호텔 — 한국 관광객이 체크인.',
    lines: [
      { speaker: 'npc', target: "Welcome. Reservation?", native: '환영합니다. 예약하셨나요?' },
      { speaker: 'user', userChoices: [
        { target: 'Yes, I have a reservation under Kim. Two nights.', native: '네, 김 이름으로 예약했어요. 2박이요.', correct: true, feedback: 'reservation + under + 이름 + 박수 — 완벽 체크인.' },
        { target: 'Kim.',                                                native: '김.',                                   correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                                                 native: '네.',                                    correct: false, feedback: '구체적 정보 필요.' },
      ]},
      { speaker: 'npc', target: "Found it. Here's your key.", native: '찾았습니다. 여기 열쇠요.' },
      { speaker: 'rwen', rwenLine: '호텔 영어 — 체크인부터 체크아웃까지 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I have a reservation (영어로)', correct: ['I have a reservation', 'i have a reservation'] },
      { prompt: 'My room key (영어로)',            correct: ['My room key', 'my room key'] },
      { prompt: "I'd like to check out (영어로)",   correct: ["I'd like to check out", "I would like to check out"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "호텔 체크인부터 체크아웃까지 5단계 영어 시뮬레이션.",
    rwenSignoff: '호텔 영어 — 여행 숙박의 카드.',
  },

  phase8: {
    scenario: 'London 호텔 체크인 — 예약 확인 + 키 받기.',
    rwenRole: 'Hotel receptionist, 30대 영국인.',
    successCriteria: "User says 'I have a reservation under ___', requests key, may ask about checkout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
