import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'Airport Korean — Incheon to Jeju',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "공항 (airport), 비행기 (airplane), 게이트 (gate), 수하물 (luggage). Phrasebook: 어디서 체크인해요? (where do I check in?), 게이트 어디예요? (where is the gate?).",
    culturalNote: "Incheon (인천) is Seoul's main international airport. Jeju (제주) is Korea's beach island, big domestic destination. Gimpo (김포) is Seoul's smaller domestic airport.",
  },

  chunks: [
    { id: 'gonghang', target: '공항', native: 'Airport', literal: 'air-port', emoji: '✈️', phonetic: 'gong-hang', audioRef: null },
    { id: 'checkin', target: '체크인', native: 'Check-in', literal: 'check-in', emoji: '🛂', phonetic: 'che-keu-in', audioRef: null },
    { id: 'suhamul', target: '수하물', native: 'Luggage', literal: 'hand-baggage', emoji: '🧳', phonetic: 'su-ha-mul', audioRef: null },
  ],

  pattern: {
    name: 'Airport navigation phrases',
    explanation: "Where + check-in/gate/luggage + 어디예요?. Most airport workers speak some English, but Korean attempts get warmth.",
    examples: [
      { target: '체크인 어디서 해요?', native: 'Where do I check in?' },
      { target: '게이트 어디예요?', native: 'Where is the gate?' },
      { target: '수하물 찾는 곳 어디예요?', native: 'Where is luggage claim?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '공항', right: 'Airport' },
      { left: '체크인', right: 'Check-in' },
      { left: '수하물', right: 'Luggage' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where is the gate?', correct: ['게이트 어디예요?', 'geiteu eodieyo'] },
    { type: 'fill_blank', instruction: 'Where do I check in?', sentence: '체크인 _____ 해요?', options: ['어디서', '얼마', '언제'], correct: '어디서', context: 'Where (place to do action).' },
    { type: 'build_sentence', instruction: 'Build "Where is luggage claim?"', words: ['어디예요?', '곳', '수하물 찾는'], correct: ['수하물 찾는', '곳', '어디예요?'], translation: 'Where is the luggage claim?' },
    { type: 'multiple_choice', instruction: 'You\'re flying Seoul → Jeju. What airport?', question: 'Pick the natural answer', options: [
      { text: '김포공항 (domestic)', correct: true },
      { text: '인천공항 (international)', correct: false },
      { text: '비싸공항', correct: false },
    ], explanation: 'Domestic flights typically use 김포 (Gimpo). 인천 is international.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Airport', correct: ['공항', 'gonghang'] },
  ],

  rwenDialogue: {
    intro: "Jeju Airport. You've just landed and need a taxi.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '죄송합니다, 택시 어디서 타요?', native: 'Excuse me, where do I get a taxi?', correct: true, feedback: 'Polite + clear.' },
        { target: '택시 비싸요?', native: 'Is taxi expensive?', correct: false, feedback: 'Wrong question.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '직진하시면 출구 5번이에요.', native: "If you go straight, exit 5." },
      { speaker: 'rwen', rwenLine: "Airport Korean = directions + locations. You can fly solo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Airport', correct: ['공항', 'gonghang'] },
      { prompt: 'Where is the gate?', correct: ['게이트 어디예요?', 'geiteu eodieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture an airport scenario. Run check-in, gate, luggage questions in Korean.",
    rwenSignoff: "공항 Korean. From Incheon to Jeju, you can navigate.",
  },

  phase8: {
    scenario: "Just landed at Jeju Airport. You need to find taxis, then your hotel.",
    rwenRole: "Airport staff — polite, formal.",
    successCriteria: "User asks 어디예요? for taxi/exit, says 감사합니다, follows directions.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
