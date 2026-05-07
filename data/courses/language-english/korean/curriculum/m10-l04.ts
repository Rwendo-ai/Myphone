import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: '아플 때 — Being Sick',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "아플 때 영어 — 'I don't feel well' (몸이 안 좋아요), 'I have a headache' (두통이 있어요), 'I need a doctor' (의사가 필요해요).",
    culturalNote: "한국 'feel sick'은 '메스껍다·구토'에 가깝고, 영어 'I feel sick'도 비슷. 'I don't feel well'(몸이 안 좋아요)이 일반적인 컴파지션. 의사 만나면 'have a headache/cough/fever' 식.",
  },

  chunks: [
    { id: 'dont_feel_well', target: "I don't feel well",  native: '몸이 안 좋아요 (momi an joayo)',         literal: "I don't feel well",  emoji: '🤒', phonetic: 'aye-DONT-feel-WEL', audioRef: null },
    { id: 'headache',        target: 'I have a headache',  native: '두통이 있어요 (dutongi isseoyo)',          literal: 'I have a headache',  emoji: '🤕', phonetic: 'aye-hav-uh-HED-ayk', audioRef: null },
    { id: 'need_doctor',     target: 'I need a doctor',   native: '의사가 필요해요 (uisaga piryohaeyo)',       literal: 'I need a doctor',     emoji: '🏥', phonetic: 'aye-NEED-uh-DOK-ter', audioRef: null },
  ],

  pattern: {
    name: 'Symptoms — have + a + symptom',
    explanation: "공식: 'I have a + 증상'. 'a headache' (두통), 'a cough' (기침), 'a fever' (열), 'a stomachache' (복통). be 동사가 아닌 have 동사. 'I'm headache' (X) / 'I have a headache' (O).",
    examples: [
      { target: "I don't feel well.",        native: '몸이 안 좋아요.' },
      { target: 'I have a headache.',          native: '두통이 있어요.' },
      { target: 'I have a cough and a fever.',  native: '기침과 열이 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I don't feel well",  right: '몸이 안 좋아요' },
      { left: 'I have a headache',   right: '두통이 있어요' },
      { left: 'I need a doctor',     right: '의사가 필요해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '두통이 있어요', correct: ['I have a headache', 'i have a headache'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ a fever.', options: ['have', 'am', 'is'], correct: 'have', context: '증상은 have.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"기침이 있어요" 영어:', options: [
      { text: 'I have a cough.',  correct: true },
      { text: "I'm cough.",        correct: false },
      { text: 'Cough me.',          correct: false },
    ], explanation: '증상 = have + a + 명사.' },
    { type: 'build_sentence', instruction: '문장', words: ['doctor', 'a', 'I', 'need'], correct: ['I', 'need', 'a', 'doctor'], translation: '의사가 필요해요' },
    { type: 'translate', instruction: '영어로', prompt: '몸이 안 좋아요', correct: ["I don't feel well", "I do not feel well"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 호텔 — 갑자기 몸이 안 좋아져서 프런트에 도움 부탁.',
    lines: [
      { speaker: 'npc', target: "Are you alright?", native: '괜찮으세요?' },
      { speaker: 'user', userChoices: [
        { target: "I don't feel well. I have a fever and a headache. I need a doctor.", native: '몸이 안 좋아요. 열과 두통이 있어요. 의사가 필요해요.', correct: true, feedback: '증상 (have a) + 도움 요청 — 정확.' },
        { target: 'Sick.',                                                                  native: '아픔.',                                                  correct: false, feedback: '구체적 증상 + 도움 요청.' },
        { target: 'No.',                                                                     native: '아니요.',                                                correct: false, feedback: '도움 필요 분명히.' },
      ]},
      { speaker: 'npc', target: "I'll call a doctor right now.", native: '바로 의사 부를게요.' },
      { speaker: 'rwen', rwenLine: '아플 때 영어 — have + a + 증상 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I don't feel well (영어로)",  correct: ["I don't feel well", "I do not feel well"] },
      { prompt: 'I have a headache (영어로)',  correct: ['I have a headache', 'i have a headache'] },
      { prompt: 'I need a doctor (영어로)',     correct: ['I need a doctor', 'i need a doctor'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "증상 5개 영어로 — headache/cough/fever/stomachache/sore throat — have + a + 증상.",
    rwenSignoff: '아플 때 영어 — 평생 안 쓰길.',
  },

  phase8: {
    scenario: '뉴욕 호텔 — 몸이 안 좋아져서 프런트에 의사 도움 요청.',
    rwenRole: 'Hotel staff, 30대 미국인.',
    successCriteria: "User uses 'I don't feel well', 'I have a ___' for symptoms, requests 'I need a doctor'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
