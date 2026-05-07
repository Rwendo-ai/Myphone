import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: '의사 진료 — At the doctor',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "진료 영어 — 'It hurts here' (여기 아파요), 'For three days' (3일 동안), 'Take this medicine' (이 약 드세요).",
    culturalNote: "미국 진료비는 비싸요. 한국 의료보험은 미국 안 통하니 여행자보험 필수. 'I have travel insurance' (여행자보험 있어요)는 진료 시작 전 카드.",
  },

  chunks: [
    { id: 'hurts_here',       target: 'It hurts here',         native: '여기 아파요 (yeogi apayo)',                    literal: 'it hurts here',      emoji: '👉', phonetic: 'it-HURTS-HEER',         audioRef: null },
    { id: 'three_days',       target: 'For three days',         native: '3일 동안 (sam-il dongan)',                       literal: 'for three days',     emoji: '📅', phonetic: 'for-THREE-DAYZ',        audioRef: null },
    { id: 'take_medicine',    target: 'Take this medicine',     native: '이 약 드세요 (i yak deuseyo)',                     literal: 'take this medicine', emoji: '💊', phonetic: 'TAYK-this-MED-uh-sun', audioRef: null },
  ],

  pattern: {
    name: 'Doctor visit phrases',
    explanation: "흐름: (1) 통증 위치 'It hurts here' (가리키기). (2) 기간 'For ___ days/weeks'. (3) 의사 처방 'Take this medicine + 빈도 (twice a day, 하루 두 번)'.",
    examples: [
      { target: 'It hurts here.',                  native: '여기 아파요.' },
      { target: "It's been hurting for three days.", native: '3일 동안 아팠어요.' },
      { target: 'Take this medicine twice a day.',     native: '하루 두 번 이 약 드세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'It hurts here',         right: '여기 아파요' },
      { left: 'For three days',         right: '3일 동안' },
      { left: 'Take this medicine',     right: '이 약 드세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '여기 아파요', correct: ['It hurts here', 'it hurts here'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "It's been hurting ____ three days.", options: ['for', 'on', 'at'], correct: 'for', context: '기간 — for.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"하루 두 번 드세요" 영어:', options: [
      { text: 'Take this twice a day.',  correct: true },
      { text: 'Two day take.',              correct: false },
      { text: 'Day twice eat.',              correct: false },
    ], explanation: '빈도 = X times a day.' },
    { type: 'build_sentence', instruction: '문장', words: ['days', 'For', 'three'], correct: ['For', 'three', 'days'], translation: '3일 동안' },
    { type: 'translate', instruction: '영어로', prompt: '이 약 드세요', correct: ['Take this medicine', 'take this medicine'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 의원 — 의사가 통증 위치·기간 묻기.',
    lines: [
      { speaker: 'npc', target: "Where does it hurt and how long?", native: '어디가 아프고 얼마나 오래 됐어요?' },
      { speaker: 'user', userChoices: [
        { target: 'It hurts here, in my stomach. For three days now.', native: '여기 아파요, 배요. 3일째예요.', correct: true, feedback: '위치 + 기간 — 진료 영어 마스터.' },
        { target: 'Stomach pain.',                                       native: '배 통증.',                          correct: false, feedback: '구체적 위치 + 기간.' },
        { target: 'Yes.',                                                  native: '네.',                                correct: false, feedback: '구체적 정보 필요.' },
      ]},
      { speaker: 'npc', target: "Take this medicine twice a day for a week.", native: '일주일 동안 하루 두 번 드세요.' },
      { speaker: 'rwen', rwenLine: '진료 영어 — 위치·기간·처방 흐름 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'It hurts here (영어로)',         correct: ['It hurts here', 'it hurts here'] },
      { prompt: 'For three days (영어로)',         correct: ['For three days', 'for three days'] },
      { prompt: 'Take this medicine (영어로)',     correct: ['Take this medicine', 'take this medicine'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "의사 진료 시뮬레이션 — 위치·기간·약 복용 영어로 5단계.",
    rwenSignoff: '진료 영어 — 평생 안 쓰길 바라지만 준비.',
  },

  phase8: {
    scenario: '뉴욕 의원에서 의사에게 통증 위치·기간 영어로 정확히 + 처방 듣기.',
    rwenRole: 'Doctor, 40대 미국인.',
    successCriteria: "User uses 'It hurts here', 'For ___ days', understands frequency like 'twice a day'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
