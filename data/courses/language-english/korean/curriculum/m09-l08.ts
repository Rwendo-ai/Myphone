import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: '여행 응급 — Lost & Travel emergencies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "여행 응급 — 'I'm lost' (길 잃었어요), 'I missed my bus' (버스 놓쳤어요), 'I lost my bag' (가방 잃었어요). 평생 안 쓰길 바라지만 알면 든든해요.",
    culturalNote: "한국 영사관·대사관 (Korean Embassy)이 여행 중 응급 도움 줘요. 'I lost my passport' (여권 잃음) → 영사관 전화. 미국·영국 응급 번호: 911 / 999.",
  },

  chunks: [
    { id: 'im_lost',          target: "I'm lost.",         native: '길 잃었어요 (gil ireosseoyo)',          literal: 'I-am lost',       emoji: '🗺️', phonetic: 'aym-LOST',           audioRef: null },
    { id: 'missed_bus',       target: 'I missed my bus.',   native: '버스 놓쳤어요 (beoseu nochyeosseoyo)', literal: 'I missed my bus', emoji: '🚌', phonetic: 'aye-MIST-my-BUS',   audioRef: null },
    { id: 'lost_bag',         target: 'I lost my bag.',     native: '가방 잃었어요 (gabang ireosseoyo)',     literal: 'I lost my bag',    emoji: '🎒', phonetic: 'aye-LOST-my-BAG',  audioRef: null },
  ],

  pattern: {
    name: 'Travel emergencies',
    explanation: "구조: 'I + 과거동사 + 목적어'. lost (lose의 과거), missed (miss의 과거), found (find의 과거 — 찾음). 'My passport is missing' = 여권 행방불명.",
    examples: [
      { target: "I'm lost.",                  native: '길 잃었어요.' },
      { target: 'I lost my passport.',         native: '여권 잃었어요.' },
      { target: 'I missed my flight.',          native: '비행기 놓쳤어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm lost",         right: '길 잃었어요' },
      { left: 'I missed my bus', right: '버스 놓쳤어요' },
      { left: 'I lost my bag',    right: '가방 잃었어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '여권 잃었어요', correct: ['I lost my passport', 'i lost my passport'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ my flight.', options: ['missed', 'lost', 'flew'], correct: 'missed', context: '비행기 놓침.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"호텔로 가는 길을 잃었어요" 영어:', options: [
      { text: "I'm lost — I'm trying to find my hotel.", correct: true },
      { text: 'Hotel lost.',                                correct: false },
      { text: 'No hotel.',                                   correct: false },
    ], explanation: "I'm lost + 보충 정보." },
    { type: 'build_sentence', instruction: '문장', words: ['bag', 'lost', 'I', 'my'], correct: ['I', 'lost', 'my', 'bag'], translation: '가방 잃었어요' },
    { type: 'translate', instruction: '영어로', prompt: '버스 놓쳤어요', correct: ['I missed my bus', 'i missed my bus'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 거리 — 한국 관광객이 가방을 잃고 도움 요청.',
    lines: [
      { speaker: 'npc', target: "Are you alright?", native: '괜찮으세요?' },
      { speaker: 'user', userChoices: [
        { target: "I lost my bag at the subway station. Could you help me?", native: '지하철역에서 가방 잃었어요. 도와주실 수 있어요?', correct: true, feedback: '응급 + 도움 요청 — 정확.' },
        { target: 'Lost!',                                                       native: '잃음!',                                              correct: false, feedback: '구조 + 도움 요청 추가.' },
        { target: 'Yes.',                                                          native: '네.',                                                correct: false, feedback: '응급 풀어요.' },
      ]},
      { speaker: 'npc', target: "Of course. Let's call the lost & found.", native: '물론이죠. 분실물 센터에 전화해요.' },
      { speaker: 'rwen', rwenLine: '여행 응급 — 잃었을 때의 영어 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm lost (영어로)",       correct: ["I'm lost", "I am lost"] },
      { prompt: 'I lost my bag (영어로)',  correct: ['I lost my bag', 'i lost my bag'] },
      { prompt: 'I missed my bus (영어로)', correct: ['I missed my bus', 'i missed my bus'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "여행 응급 5문장 만들어 두세요 — 잃다·놓치다·길잃다.",
    rwenSignoff: '여행 응급 — 평생 안 쓰길 바라지만 준비.',
  },

  phase8: {
    scenario: '뉴욕에서 가방 또는 여권 분실 — 행인에게 도움 요청.',
    rwenRole: 'Helpful local, 35세 미국인.',
    successCriteria: "User says 'I'm lost' or 'I lost my ___' or 'I missed my ___', asks for help.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
