import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — 도와주실 수 있어요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "도움 요청 — 영어 여행 생존의 절반이에요. 'Can you help me?'(도와주세요), 'I need help'(도움이 필요해요), 'I'm lost'(길을 잃었어요).",
    culturalNote: "한국에서는 모르는 사람한테 도움 요청하기를 어색해 하지만, 영어권은 문화적으로 더 열려 있어요 — 'Excuse me, can you help me?'에 거의 다 답해 줍니다. 부담 갖지 마세요.",
  },

  chunks: [
    { id: 'can_you_help_me', target: 'Can you help me?', native: '도와주실 수 있어요? (dowajusil su isseoyo?)', literal: 'can you help me?', emoji: '🆘', phonetic: 'kan-yoo-HELP-mee', audioRef: null },
    { id: 'i_need_help',     target: 'I need help',      native: '도움이 필요해요 (doumi piryohaeyo)',          literal: 'I need help',      emoji: '🙏', phonetic: 'aye-NEED-help',    audioRef: null },
    { id: 'im_lost',         target: "I'm lost",          native: '길을 잃었어요 (gireul ireosseoyo)',           literal: 'I-am lost',        emoji: '🗺️', phonetic: 'aym-LOST',         audioRef: null },
  ],

  pattern: {
    name: 'Asking for help',
    explanation: "공식: 'Excuse me' (주의 끌기) → 'can you help me?' (요청) → 구체적 문제 ('I'm lost' / 'I need help with ___'). 한국어는 보통 한 문장 ('실례합니다, 좀 도와주세요')으로 끝나지만, 영어는 단계별로 풀어 말해요.",
    examples: [
      { target: 'Excuse me, can you help me?', native: '실례합니다, 도와주실 수 있어요?' },
      { target: "I'm lost.",                    native: '길을 잃었어요.' },
      { target: 'I need help.',                 native: '도움이 필요해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Can you help me?', right: '도와주실 수 있어요?' },
      { left: 'I need help',      right: '도움이 필요해요' },
      { left: "I'm lost",         right: '길을 잃었어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '길을 잃었어요', correct: ["I'm lost", "I am lost", "im lost"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Excuse me, can you ____ me?', options: ['help', 'tell', 'give'], correct: 'help', context: '런던 지하철에서 길을 잃었을 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "런던 지하철에서 길을 잃었을 때 가장 자연스러운 첫 마디는?", options: [
      { text: "Excuse me, can you help me? I'm lost.", correct: true },
      { text: 'Help!',                                    correct: false },
      { text: 'Sorry.',                                   correct: false },
    ], explanation: "'Excuse me'로 시작 → 도움 요청 → 문제 설명. 'Help!'는 응급 상황 외에는 너무 강해요." },
    { type: 'build_sentence', instruction: '문장', words: ['help', 'me', 'Can', 'you'], correct: ['Can', 'you', 'help', 'me'], translation: '도와주실 수 있어요?' },
    { type: 'translate', instruction: '영어로', prompt: '실례합니다, 도와주실 수 있어요? 길을 잃었어요.', correct: ["Excuse me, can you help me? I'm lost.", "Excuse me, can you help me? I am lost."] },
  ],

  rwenDialogue: {
    intro: '런던 King\'s Cross 역 — 처음 가보는 한국 관광객이 출구를 못 찾음.',
    lines: [
      { speaker: 'npc', target: "Are you alright?", native: '괜찮으세요?' },
      { speaker: 'user', userChoices: [
        { target: "Excuse me, can you help me? I'm lost.", native: '실례합니다, 도와주실 수 있어요? 길을 잃었어요.', correct: true, feedback: '완벽 — 단계별 요청, 영국인이 도와줄 마음을 만드는 톤이에요.' },
        { target: 'Help!',                                    native: '도와줘!',                                       correct: false, feedback: '응급 상황 외엔 너무 강해요.' },
        { target: 'Yes.',                                     native: '네.',                                            correct: false, feedback: '도움이 필요한데 답을 닫으면 안 돼요.' },
      ]},
      { speaker: 'npc', target: "Of course! Where are you trying to go?", native: '물론이죠! 어디 가시려고요?' },
      { speaker: 'rwen', rwenLine: '도움 요청 영어 — 단계별로 부드럽게 했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Can you help me? (영어로)', correct: ['Can you help me?', 'Can you help me', 'can you help me?'] },
      { prompt: "I'm lost (영어로)",         correct: ["I'm lost", "I am lost", "im lost"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "혼잣말이라도 좋아요. 'Excuse me, can you help me? I'm lost.'를 입에 익혀 두세요 — 진짜 도움이 필요할 때 망설이지 않게요.",
    rwenSignoff: '도움 요청은 약함이 아니에요. 영어권에선 더 그래요.',
  },

  phase8: {
    scenario: 'London King\'s Cross 역 — 한국 관광객이 출구를 못 찾고 도움 요청.',
    rwenRole: 'A kind British commuter, 40대.',
    successCriteria: "User opens with 'Excuse me', requests help, describes problem ('I'm lost' or similar).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
