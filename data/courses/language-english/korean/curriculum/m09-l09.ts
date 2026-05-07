import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: '여행 중 도움 요청 — Asking for help',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "정중한 도움 요청 — 'Could you help me?' (도와주실 수 있어요?), 'I don't know this area' (이 동네 잘 몰라요), 'Could you write it down?' (적어 주실 수 있어요?).",
    culturalNote: "여행 중 영어 받아쓰기는 정말 어려워요. 'Could you write it down?'(적어 주세요)는 마법의 카드 — 직원 90%가 적어 줍니다. 호텔 주소·전화번호·역 이름 받을 때 핵심.",
  },

  chunks: [
    { id: 'could_you_help', target: 'Could you help me?',     native: '도와주실 수 있어요? (dowajusil su isseoyo?)', literal: 'could you help me?',     emoji: '🆘', phonetic: 'kud-yoo-HELP-mee',     audioRef: null },
    { id: 'dont_know_area', target: "I don't know this area.", native: '이 동네 잘 몰라요 (i dongne jal mollayo)',  literal: "I don't know this area", emoji: '🗺️', phonetic: 'aye-DONT-NO-this-AIR-ee-uh', audioRef: null },
    { id: 'write_it_down',  target: 'Could you write it down?', native: '적어 주실 수 있어요? (jeogeo jusil su isseoyo?)', literal: 'could you write it down?', emoji: '✍️', phonetic: 'kud-yoo-RYT-it-DOWN', audioRef: null },
  ],

  pattern: {
    name: 'Could you ___ ?',
    explanation: "정중한 부탁 = 'Could you + 동사?'. 'Could you help me?', 'Could you repeat that?', 'Could you write it down?'. 'Can you'보다 정중함 +1, 'Will you'보다는 부드러움.",
    examples: [
      { target: 'Could you help me?',          native: '도와주실 수 있어요?' },
      { target: 'Could you repeat that?',       native: '다시 말해 주실 수 있어요?' },
      { target: 'Could you write it down?',      native: '적어 주실 수 있어요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Could you help me?',     right: '도와주실 수 있어요?' },
      { left: "I don't know this area",  right: '이 동네 잘 몰라요' },
      { left: 'Could you write it down?', right: '적어 주실 수 있어요?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '적어 주실 수 있어요?', correct: ['Could you write it down?', 'could you write it down?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "____ you help me?", options: ['Could', 'Would', 'Should'], correct: 'Could', context: '정중한 부탁.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '복잡한 주소 받아쓰기 어려울 때:', options: [
      { text: 'Could you write it down, please?', correct: true },
      { text: "Speak louder!",                       correct: false },
      { text: 'Bye.',                                  correct: false },
    ], explanation: '받아쓰기 — write it down. 마법의 카드.' },
    { type: 'build_sentence', instruction: '문장', words: ['it', 'write', 'down', 'you', 'Could'], correct: ['Could', 'you', 'write', 'it', 'down'], translation: '적어 주실 수 있어요?' },
    { type: 'translate', instruction: '영어로', prompt: '이 동네 잘 몰라요', correct: ["I don't know this area", "I do not know this area"] },
  ],

  rwenDialogue: {
    intro: 'Tokyo 역 — 한국인 관광객이 호텔 주소 받아쓰기 어려움.',
    lines: [
      { speaker: 'npc', target: "Sure! Take the Yamanote line to Shinjuku, then transfer to...", native: '네! 야마노테선 신주쿠까지, 그 다음 환승...' },
      { speaker: 'user', userChoices: [
        { target: "Sorry, could you write it down? I don't know this area.", native: '죄송해요, 적어 주실 수 있어요? 이 동네 잘 몰라요.', correct: true, feedback: 'write it down + 보충 — 정확한 도움 요청.' },
        { target: 'Yes!',                                                       native: '네!',                                                  correct: false, feedback: '못 알아들었으면 분명히.' },
        { target: 'Bye.',                                                        native: '잘 가.',                                                correct: false, feedback: '도움 받는 중.' },
      ]},
      { speaker: 'npc', target: "Of course — let me write the route.", native: '물론이죠 — 경로 적어 드릴게요.' },
      { speaker: 'rwen', rwenLine: 'Could you write it down — 여행 영어 마법 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Could you help me? (영어로)',     correct: ['Could you help me?', 'could you help me?'] },
      { prompt: 'Could you write it down? (영어로)', correct: ['Could you write it down?', 'could you write it down?'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "Could you ___? 5문장 — 도움·반복·받아쓰기·길안내·번역 부탁.",
    rwenSignoff: 'Could you — 영어 정중 요청의 만능 카드.',
  },

  phase8: {
    scenario: 'Tokyo 역에서 호텔 가는 경로 — 받아쓰기 부탁으로 정확히 받기.',
    rwenRole: 'Station staff, 40대 일본인 영어 화자.',
    successCriteria: "User uses 'Could you ___?' for at least 2 polite requests including 'write it down'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
