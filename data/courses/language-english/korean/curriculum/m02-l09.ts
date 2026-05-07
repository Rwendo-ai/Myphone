import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: '응급 표현 — Help! Call the police!',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "응급 상황 영어 3종 — 'Help!' (도와줘!), 'Call the police!' (경찰 불러요!), 'I need a doctor!' (의사 필요해요!). 평생 안 쓰길 바라지만, 알면 든든해요.",
    culturalNote: "미국 응급 번호는 911, 영국은 999, 호주는 000, 한국은 112/119. 영어권에서는 'Help!'가 진짜 응급 의미여서, 일상에선 안 씁니다. 'Excuse me, can you help me?'와 톤이 완전히 달라요.",
  },

  chunks: [
    { id: 'help',         target: 'Help!',          native: '도와줘요! (dowajwoyo!)',                    literal: undefined,            emoji: '🆘', phonetic: 'HELP',                audioRef: null },
    { id: 'call_police',  target: 'Call the police', native: '경찰 불러 주세요 (gyeongchal bulleo juseyo)', literal: 'call the police',    emoji: '🚓', phonetic: 'KAWL-thuh-poh-LEES', audioRef: null },
    { id: 'need_doctor',  target: 'I need a doctor', native: '의사가 필요해요 (uisaga piryohaeyo)',         literal: 'I need a doctor',    emoji: '🏥', phonetic: 'aye-need-uh-DOK-ter', audioRef: null },
  ],

  pattern: {
    name: 'Emergency vocabulary',
    explanation: "단순 명령형 + 명확한 명사: 'Call the police' / 'Call an ambulance' / 'Get a doctor'. 응급에서는 격식 빼고 직접적으로. please도 빼는 게 정상이에요.",
    examples: [
      { target: 'Help!',           native: '도와줘요!' },
      { target: 'Call the police', native: '경찰 불러 주세요' },
      { target: 'I need a doctor', native: '의사가 필요해요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Help!',           right: '도와줘요!' },
      { left: 'Call the police', right: '경찰 불러 주세요' },
      { left: 'I need a doctor', right: '의사가 필요해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '경찰 불러 주세요', correct: ['Call the police', 'call the police'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I need a ____!', options: ['doctor', 'taxi', 'menu'], correct: 'doctor', context: '응급 상황 — 다친 친구가 옆에 있을 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '거리에서 누군가 쓰러진 상황 — 첫 마디:', options: [
      { text: 'Help! Call an ambulance!', correct: true },
      { text: 'Excuse me, please.',         correct: false },
      { text: "What's your name?",           correct: false },
    ], explanation: '응급에서는 직접적·강한 톤이 필요해요.' },
    { type: 'build_sentence', instruction: '문장', words: ['doctor', 'a', 'I', 'need'], correct: ['I', 'need', 'a', 'doctor'], translation: '의사가 필요해요' },
    { type: 'translate', instruction: '영어로', prompt: '도와줘요! 경찰 불러 주세요!', correct: ['Help! Call the police!', 'Help! Call the police'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 길거리 — 한국 관광객이 갑자기 어지럽고 쓰러질 듯한 상황.',
    lines: [
      { speaker: 'npc', target: "Are you alright?", native: '괜찮으세요?' },
      { speaker: 'user', userChoices: [
        { target: "Help! I need a doctor.", native: '도와줘요! 의사가 필요해요.', correct: true, feedback: '응급 상황 — 직접적이고 명확해요.' },
        { target: "Hi, how are you?",         native: '안녕, 어떻게 지내?',         correct: false, feedback: '응급에선 격식 인사 필요 없어요.' },
        { target: 'Excuse me, please.',        native: '실례합니다, 부탁해요.',     correct: false, feedback: '너무 약해요. Help!를 쓰세요.' },
      ]},
      { speaker: 'npc', target: "Hold on — I'm calling 911 right now.", native: '잠깐만요 — 911 부를게요.' },
      { speaker: 'rwen', rwenLine: '응급 표현 — 평생 안 쓰길 바라지만, 알면 생명 구할 수도 있어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Help! (영어로)',            correct: ['Help!', 'Help', 'help'] },
      { prompt: 'I need a doctor (영어로)',  correct: ['I need a doctor', 'i need a doctor'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "응급 번호 외우기: 미국 911, 영국 999, 한국 112/119. 'Help! Call the police!'를 한 번 입에 익혀 두세요.",
    rwenSignoff: '평생 안 쓰길. 하지만 준비는 해 두세요.',
  },

  phase8: {
    scenario: '뉴욕 길거리 — 한국 관광객이 갑자기 몸이 안 좋아져서 행인에게 도움 요청.',
    rwenRole: 'Passerby, 40대 미국인, 책임감 있고 빠르게 911 부를 준비.',
    successCriteria: "User uses 'Help!', requests 'I need a doctor' or 'Call an ambulance' clearly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
