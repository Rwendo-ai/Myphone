import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: '시간 — What time is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 시간은 고유어 (한 시·두 시), 영어는 아라비아 숫자 + o'clock. 'It's seven o'clock' = 7시. A.M./P.M.은 한국어 오전/오후와 같아요.",
    culturalNote: "한국어 시간은 1-12 고유어, 분은 한자어. 영어는 다 일관되게 같은 숫자. 다만 12시간제 (A.M./P.M.)는 한국과 같은 구조 — 24시간제는 군대·기차에서나.",
  },

  chunks: [
    { id: 'what_time',   target: 'What time is it?',   native: '몇 시예요? (myeot sieyo?)',     literal: 'what time is it?',  emoji: '🕐', phonetic: 'wut-TYM-iz-it', audioRef: null },
    { id: 'seven_oclock', target: "It's seven o'clock", native: '7시예요 (chil-sieyo)',           literal: "it's seven o'clock", emoji: '🕖', phonetic: 'its-SEV-en-uh-KLOK', audioRef: null },
    { id: 'am_pm',        target: 'A.M. / P.M.',         native: '오전 / 오후 (ojeon / ohu)',     literal: 'A.M. / P.M.',        emoji: '🌅', phonetic: 'AY-EM-PEE-EM',    audioRef: null },
  ],

  pattern: {
    name: 'Telling time — hour',
    explanation: "공식: 'It's + 숫자 + o'clock'. A.M. (자정~정오), P.M. (정오~자정). 'Seven A.M.' = 오전 7시. 'Seven P.M.' = 오후 7시 (=19시).",
    examples: [
      { target: "It's seven o'clock.",  native: '7시예요.' },
      { target: 'Seven A.M.',             native: '오전 7시.' },
      { target: 'Seven P.M.',             native: '오후 7시.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'What time is it?',   right: '몇 시예요?' },
      { left: "It's seven o'clock", right: '7시예요' },
      { left: 'A.M. / P.M.',         right: '오전 / 오후' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '몇 시예요?', correct: ['What time is it?', 'what time is it?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "It's seven ____.", options: ["o'clock", 'time', 'minute'], correct: "o'clock", context: '정각 — o\'clock.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '오후 3시 영어:', options: [
      { text: 'Three P.M.',  correct: true },
      { text: 'Three A.M.',   correct: false },
      { text: 'Three.',        correct: false },
    ], explanation: '오후 = P.M.' },
    { type: 'build_sentence', instruction: '문장', words: ['seven', "It's", "o'clock"], correct: ["It's", 'seven', "o'clock"], translation: '7시예요' },
    { type: 'translate', instruction: '영어로', prompt: '오전 9시', correct: ['Nine A.M.', 'nine A.M.', '9 A.M.', "9 a.m."] },
  ],

  rwenDialogue: {
    intro: '뉴욕 호텔 프런트 — 다음날 모닝콜 부탁.',
    lines: [
      { speaker: 'npc', target: "What time would you like the wake-up call?", native: '모닝콜 몇 시에 해드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: 'Seven A.M., please.', native: '오전 7시 부탁드려요.', correct: true, feedback: '시간 + A.M./P.M. + please — 정확.' },
        { target: 'Seven.',                native: '7.',                    correct: false, feedback: '오전인지 오후인지 구분 필요.' },
        { target: 'Yes.',                  native: '네.',                    correct: false, feedback: '구체적 시간이 필요해요.' },
      ]},
      { speaker: 'npc', target: "Got it. Seven A.M.", native: '알겠습니다. 오전 7시.' },
      { speaker: 'rwen', rwenLine: '시간 + A.M./P.M. — 호텔·기차에서 핵심 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'What time is it? (영어로)', correct: ['What time is it?', 'what time is it?'] },
      { prompt: "It's seven o'clock (영어로)", correct: ["It's seven o'clock", "Its seven o'clock"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 본 시계 시간을 영어로 5번 말해 보세요. A.M./P.M. 붙여서.",
    rwenSignoff: '시간 영어 — 약속·호텔·기차의 핵심 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 호텔 — 모닝콜 시간 영어로 부탁.',
    rwenRole: 'Hotel front desk, 28세.',
    successCriteria: "User uses 'It's ___ o'clock' or '___ A.M./P.M.' correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
