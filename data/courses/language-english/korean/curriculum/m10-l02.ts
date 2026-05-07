import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: '분노·답답함 — Anger & Frustration',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "분노·답답함 — 'I'm angry' (화나요), 'I'm frustrated' (답답해요), 'Calm down' (진정해요). 영어권에서는 분노 표현이 한국보다 직접적이에요.",
    culturalNote: "한국에서는 '화났어요'를 직접 말하기보다 행동·표정으로 표현. 영어권은 'I'm angry, and here's why' — 이유와 함께 직접. 다만 직장에서는 'I'm frustrated' (좀 답답해요)가 더 부드러워요.",
  },

  chunks: [
    { id: 'im_angry',       target: "I'm angry",         native: '화나요 (hwanayo)',         literal: 'I-am angry',     emoji: '😡', phonetic: 'aym-AN-gree',     audioRef: null },
    { id: 'im_frustrated',  target: "I'm frustrated",     native: '답답해요 (dapdaphaeyo)',  literal: 'I-am frustrated', emoji: '😤', phonetic: 'aym-FRUS-tray-ted', audioRef: null },
    { id: 'calm_down',      target: 'Calm down',          native: '진정해요 (jinjeonghaeyo)', literal: 'calm down',       emoji: '🧘', phonetic: 'KAHM-DOWN',         audioRef: null },
  ],

  pattern: {
    name: 'Anger ladder',
    explanation: "강도: 'a bit annoyed' < 'frustrated' < 'angry' < 'furious'. 직장: 'I'm frustrated about ___' (정중). 친구: 'I'm angry' (직접). 'Calm down'은 진정 부탁이지만 상대 화날 때 조심해서 사용.",
    examples: [
      { target: "I'm a bit annoyed.",          native: '좀 짜증 나요.' },
      { target: "I'm frustrated with this.",    native: '이거 답답해요.' },
      { target: 'Please calm down.',             native: '진정해 주세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm angry",       right: '화나요' },
      { left: "I'm frustrated",   right: '답답해요' },
      { left: 'Calm down',         right: '진정해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '답답해요', correct: ["I'm frustrated", "I am frustrated"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'm ____ with this delay.", options: ['frustrated', 'happy', 'sad'], correct: 'frustrated', context: '지연으로 답답.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '직장 회의에서 정중히 분노 표현:', options: [
      { text: "I'm a bit frustrated about the timeline.", correct: true },
      { text: "I'm furious!",                                correct: false },
      { text: 'Bye!',                                          correct: false },
    ], explanation: '직장은 frustrated + a bit으로 부드럽게.' },
    { type: 'build_sentence', instruction: '문장', words: ['down', 'Calm'], correct: ['Calm', 'down'], translation: '진정해요' },
    { type: 'translate', instruction: '영어로', prompt: '화나요', correct: ["I'm angry", "I am angry"] },
  ],

  rwenDialogue: {
    intro: '판교 회의실 — 프로젝트 지연으로 답답함 정중히 표현.',
    lines: [
      { speaker: 'npc', target: "How do you feel about the delay?", native: '지연에 대해 어떠세요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm a bit frustrated, honestly. Could we discuss next steps?", native: '솔직히 좀 답답해요. 다음 단계 논의할 수 있을까요?', correct: true, feedback: 'frustrated + a bit + 해결 제안 — 직장 톤 마스터.' },
        { target: 'Angry!',                                                            native: '화남!',                                                  correct: false, feedback: '직장에선 너무 강함.' },
        { target: 'No.',                                                                native: '아니요.',                                                correct: false, feedback: '솔직히 표현 + 제안.' },
      ]},
      { speaker: 'npc', target: "Fair point. Let's address it now.", native: '맞는 말씀이에요. 지금 논의해요.' },
      { speaker: 'rwen', rwenLine: '분노 영어 — 강도 사다리로 톤 조절.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm angry (영어로)",       correct: ["I'm angry", "I am angry"] },
      { prompt: "I'm frustrated (영어로)",   correct: ["I'm frustrated", "I am frustrated"] },
      { prompt: 'Calm down (영어로)',         correct: ['Calm down', 'calm down'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "분노 사다리 5단계 영어로 — annoyed/frustrated/angry/furious + 정도 부사.",
    rwenSignoff: '분노 영어 — 직장과 친구 사이 톤 다르게.',
  },

  phase8: {
    scenario: '판교 회의에서 프로젝트 지연 답답함 — 정중하게 표현.',
    rwenRole: 'Manager, 40대 미국인.',
    successCriteria: "User uses 'I'm frustrated' or 'a bit annoyed' (workplace appropriate), avoids extreme expressions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
