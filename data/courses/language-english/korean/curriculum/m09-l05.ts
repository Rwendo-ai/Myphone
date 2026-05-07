import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: '티켓 사기 — Buying a ticket',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "티켓 영어 — 'One ticket to ___, please' (편도), 'A return, please' (왕복). 'How much is it?' (얼마예요?). 기차역·공항 만능 카드.",
    culturalNote: "영국 'return' = 왕복, 미국 'round-trip' = 왕복. 'one-way' = 편도 (양국 공용). 'Single' = 영국식 편도. 발권 직원이 'Single or return?' 물으면 답할 수 있어야 해요.",
  },

  chunks: [
    { id: 'one_ticket', target: 'One ticket to Johannesburg, please.', native: '요하네스버그 한 장 부탁드려요 (yohaneseubeogeu han jang butakdeuryeoyo)', literal: 'one ticket to Johannesburg, please', emoji: '🎫', phonetic: 'wun-TIK-it-too', audioRef: null },
    { id: 'a_return',   target: 'A return, please.',                    native: '왕복으로 부탁드려요 (wangbogeuro butakdeuryeoyo)',                              literal: 'a return, please',                  emoji: '🔄', phonetic: 'uh-ri-TURN',     audioRef: null },
    { id: 'how_much',   target: 'How much is it?',                       native: '얼마예요? (eolmayeyo?)',                                                       literal: 'how much is it?',                    emoji: '💰', phonetic: 'how-MUCH-iz-it', audioRef: null },
  ],

  pattern: {
    name: 'Ticket purchase combo',
    explanation: "(1) 'One ticket to + 목적지, please' (편도) 또는 'A return to + 목적지, please' (왕복). (2) 'How much is it?' 가격 확인. (3) 'Here you go' 결제 — 핵심 흐름.",
    examples: [
      { target: 'One ticket to London, please.',  native: '런던 한 장 부탁드려요.' },
      { target: 'A return, please.',                native: '왕복이요.' },
      { target: 'How much is it?',                  native: '얼마예요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'One ticket to Johannesburg', right: '요하네스버그 한 장' },
      { left: 'A return, please',             right: '왕복으로 부탁드려요' },
      { left: 'How much is it?',               right: '얼마예요?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '얼마예요?', correct: ['How much is it?', 'how much is it?', 'How much?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'One ticket ____ Paris, please.', options: ['to', 'for', 'at'], correct: 'to', context: '목적지 — to.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '왕복 — 영국식:', options: [
      { text: 'A return, please.',  correct: true },
      { text: 'A round, please.',     correct: false },
      { text: 'Two ticket.',          correct: false },
    ], explanation: '영국 = return, 미국 = round-trip.' },
    { type: 'build_sentence', instruction: '문장', words: ['Paris', 'to', 'ticket', 'One'], correct: ['One', 'ticket', 'to', 'Paris'], translation: '파리 한 장' },
    { type: 'translate', instruction: '영어로', prompt: '왕복으로 부탁드려요', correct: ['A return, please', 'A return please', 'Round-trip, please'] },
  ],

  rwenDialogue: {
    intro: 'London King\'s Cross 역 — KTX 같은 고속 열차 표 사기.',
    lines: [
      { speaker: 'npc', target: "Where to?", native: '어디까지 가세요?' },
      { speaker: 'user', userChoices: [
        { target: 'A return to Edinburgh, please. How much is it?', native: '에든버러 왕복이요. 얼마예요?', correct: true, feedback: '왕복 + 가격 — 두 카드 한 번에.' },
        { target: 'Edinburgh!',                                       native: '에든버러!',                       correct: false, feedback: '구조 부족.' },
        { target: 'Yes.',                                              native: '네.',                              correct: false, feedback: '발권에는 구체적 정보 필요.' },
      ]},
      { speaker: 'npc', target: "That'll be £80.", native: '80파운드입니다.' },
      { speaker: 'rwen', rwenLine: '티켓 영어 — One/A return + How much. 발권 마스터.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'One ticket to ___, please (영어로)', correct: ['One ticket to', 'one ticket to'] },
      { prompt: 'A return, please (영어로)',           correct: ['A return, please', 'a return, please'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "여행 시뮬레이션 — 5개 목적지 영어 발권 문장 만들어 보세요.",
    rwenSignoff: '티켓 영어 — 여행 떠나는 카드.',
  },

  phase8: {
    scenario: "London King's Cross 역에서 에든버러 왕복 영어로 발권.",
    rwenRole: 'Ticket clerk, 40대 영국인.',
    successCriteria: "User says 'A return to ___' or 'One ticket to ___', asks 'How much?'",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
