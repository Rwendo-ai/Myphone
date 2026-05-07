import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-taxi',
  module: 9,
  lesson: 2,
  title: 'Taxi Korean',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Taxis (택시) in Seoul are abundant and affordable. The phrasebook: destination + 까지 가주세요 (please go to ___), 여기서 세워주세요 (stop here please).",
    culturalNote: "Taxi drivers (often older men) appreciate polite Korean — even broken Korean — over English. 아저씨 + clear destination = smooth ride. Apps like Kakao Taxi work too.",
  },

  chunks: [
    { id: 'taeksi', target: '택시', native: 'Taxi', literal: 'taxi', emoji: '🚕', phonetic: 'taek-si', audioRef: null },
    { id: 'kkaji_gajuseyo', target: '___까지 가주세요', native: 'Please go to ___', literal: '___-until go-give-please', emoji: '➡️', phonetic: '___-kka-ji ga-ju-se-yo', audioRef: null },
    { id: 'sewojuseyo', target: '여기서 세워주세요', native: 'Stop here please', literal: 'here stop-give-please', emoji: '🛑', phonetic: 'yeo-gi-seo se-wo-ju-se-yo', audioRef: null },
  ],

  pattern: {
    name: '까지 (until/to) + 가주세요',
    explanation: '까지 = to/until (destination endpoint). Place + 까지 + 가주세요 = please go to [place].',
    examples: [
      { target: '강남까지 가주세요', native: 'Please go to Gangnam' },
      { target: '인천공항까지 가주세요', native: 'Please go to Incheon Airport' },
      { target: '여기서 세워주세요', native: 'Stop here please' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '택시', right: 'Taxi' },
      { left: '까지', right: 'To / until' },
      { left: '세워주세요', right: 'Please stop' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please go to Hongdae', correct: ['홍대까지 가주세요', 'hongdae kkaji gajuseyo'] },
    { type: 'fill_blank', instruction: 'Stop where you are', sentence: '_____ 세워주세요.', options: ['여기서', '저기서', '거기서'], correct: '여기서', context: 'Right here.' },
    { type: 'build_sentence', instruction: 'Build "Please go to Incheon Airport"', words: ['가주세요', '인천공항까지'], correct: ['인천공항까지', '가주세요'], translation: 'Please go to Incheon Airport.' },
    { type: 'multiple_choice', instruction: 'Polite address for an older male taxi driver?', question: 'Pick the right form', options: [
      { text: '아저씨', correct: true },
      { text: '동생', correct: false },
      { text: '오빠', correct: false },
    ], explanation: '아저씨 = older male stranger. Standard taxi-driver address.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Stop here please', correct: ['여기서 세워주세요', 'yeogiseo sewojuseyo'] },
  ],

  rwenDialogue: {
    intro: "You hail a taxi at Incheon Airport.",
    lines: [
      { speaker: 'npc', target: '어디로 가세요?', native: 'Where to?' },
      { speaker: 'user', userChoices: [
        { target: '홍대까지 가주세요', native: 'Please go to Hongdae', correct: true, feedback: '까지 + 가주세요. Standard taxi opener.' },
        { target: '홍대', native: 'Just the place name', correct: false, feedback: 'Add 까지 + 가주세요 for clarity.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Tell destination first; ask price later.' },
      ]},
      { speaker: 'npc', target: '네, 알겠습니다. 한 시간 정도 걸려요.', native: 'Yes, understood. About an hour.' },
      { speaker: 'rwen', rwenLine: "Taxi Korean = destination + 까지 + 가주세요. Compact and clear.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please go to Gangnam', correct: ['강남까지 가주세요', 'gangnam kkaji gajuseyo'] },
      { prompt: 'Stop here please', correct: ['여기서 세워주세요', 'yeogiseo sewojuseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three taxi rides in your head. Three destinations. Build each: [place]까지 가주세요.",
    rwenSignoff: "까지 + 가주세요 — taxi Korean unlocked.",
  },

  phase8: {
    scenario: "Taxi from Incheon Airport to Hongdae. You give destination, react to estimate, request stop.",
    rwenRole: "Taxi driver — 50s, polite, fast.",
    successCriteria: "User uses [place]까지 가주세요. Says 여기서 세워주세요 to stop. Pays + thanks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
