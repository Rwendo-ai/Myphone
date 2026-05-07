import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: '돈·시간 캡스톤 — Module 6',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 마무리 — 숫자·시간·요일·월·돈·할인 모든 카드를 한 흐름에. 약속 → 가격 → 합계까지 영어로 자연스럽게.",
    culturalNote: "한국 일상에서 시간·돈은 매분 등장. 영어로 'next Friday at half past seven, fifty dollars, ten percent discount'를 한 문장에 풀 수 있으면 일상 영어 절반은 된 거예요.",
  },

  chunks: [
    { id: 'twenty_dollars_six_pm', target: 'It costs twenty dollars and the shop closes at six P.M.', native: '20달러이고 매장은 오후 6시에 닫아요.',        literal: 'it costs $20 and shop closes at 6 P.M.', emoji: '💵', phonetic: 'it-KOSTS-TWEN-tee', audioRef: null },
    { id: 'meet_friday',           target: "Let's meet on Friday at half past seven.",                  native: '금요일 오후 7시 반에 만나요.',                  literal: "let's meet on Friday at half past seven", emoji: '📆', phonetic: 'lets-MEET-on-FRY-day', audioRef: null },
    { id: 'total_with_discount',   target: 'The total is fifty dollars with a ten percent discount.',  native: '합계 50달러, 10% 할인 적용된 가격이에요.',         literal: 'the total is $50 with a 10% discount',    emoji: '💯', phonetic: 'thuh-TOH-tul-iz', audioRef: null },
  ],

  pattern: {
    name: 'Time + Money flow',
    explanation: "한 흐름: (1) 약속 = 'Let's meet on + 요일 + at + 시간'. (2) 가격 = 'It costs ___ dollars'. (3) 매장 시간 = 'closes at ___'. (4) 합계 + 할인 = 'total ___ with ___% discount'. 모든 카드 자연스럽게.",
    examples: [
      { target: "Let's meet on Friday at 7 P.M.",            native: '금요일 7시에 만나요.' },
      { target: 'It costs twenty dollars.',                    native: '20달러예요.' },
      { target: 'The total is fifty with a 10% discount.',     native: '50달러, 10% 할인 후.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'It costs twenty dollars',     right: '20달러예요' },
      { left: 'Half past seven',              right: '7시 반' },
      { left: 'Ten percent discount',          right: '10% 할인' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '금요일 7시 반에 만나요', correct: ["Let's meet on Friday at half past seven", "Let's meet on Friday at half past seven.", "Let's meet on Friday at 7:30"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'The total is fifty dollars ____ a 10% discount.', options: ['with', 'on', 'at'], correct: 'with', context: '할인 포함 — with.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '약속 + 가격 + 매장 시간 한 문장:', options: [
      { text: "Let's meet on Friday at 7 — the shop closes at 9, and dinner costs $30 each.", correct: true },
      { text: 'Friday seven shop nine dinner thirty.',                                            correct: false },
      { text: 'Yes time money.',                                                                    correct: false },
    ], explanation: '시간·돈·매장 시간을 한 흐름에.' },
    { type: 'build_sentence', instruction: '문장', words: ['fifty', 'is', 'total', 'The', 'dollars'], correct: ['The', 'total', 'is', 'fifty', 'dollars'], translation: '합계 50달러예요' },
    { type: 'translate', instruction: '영어로', prompt: '20달러이고 매장은 오후 6시에 닫아요', correct: ['It costs twenty dollars and the shop closes at six P.M.', 'It costs $20 and the shop closes at 6 P.M.'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 친구와 저녁 약속 — 시간·매장·가격 모두 영어로.',
    lines: [
      { speaker: 'npc', target: "When and where are we meeting?", native: '언제 어디서 만나죠?' },
      { speaker: 'user', userChoices: [
        { target: "Let's meet on Friday at half past seven. The restaurant closes at ten, and the total per person is about thirty dollars — they have a 10% student discount.", native: '금요일 7시 반에 만나요. 그 식당 10시에 닫고, 1인당 30달러쯤이고 학생 10% 할인 있어요.', correct: true, feedback: 'Module 6 카드 다 — 요일·시간·매장 시간·가격·할인까지 한 흐름.' },
        { target: 'Friday seven food cheap.',                                                                                                                                       native: '금요일 7 음식 싸.',                                                                                          correct: false, feedback: '구체화 필요해요. 모든 카드 적용.' },
        { target: 'Yes.',                                                                                                                                                            native: '네.',                                                                                                       correct: false, feedback: '구체적 정보 필요.' },
      ]},
      { speaker: 'npc', target: "Perfect. Locked in for Friday.", native: '완벽. 금요일로 정해요.' },
      { speaker: 'rwen', rwenLine: 'Module 6 완성 — 시간·돈 영어가 한 흐름으로 자연스럽게.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '한 흐름 기억',
    prompts: [
      { prompt: "Let's meet on Friday at half past seven (영어로)", correct: ["Let's meet on Friday at half past seven", "Lets meet on Friday at half past seven"] },
      { prompt: 'The total is fifty dollars (영어로)',               correct: ['The total is fifty dollars', 'the total is fifty dollars'] },
    ],
  },

  mission: {
    title: 'Module 6 미션',
    task: "이번 주 약속·가격을 영어 한 단락으로 — 요일·시간·돈·할인 모두 포함.",
    rwenSignoff: 'Module 6 완성. 다음은 Module 7 — 음식이에요.',
  },

  phase8: {
    scenario: '뉴욕 친구와 저녁 약속 정하기 — 시간·매장 영업·가격·할인 모두 영어로 풀기.',
    rwenRole: 'Friend, 28세 미국인, 약속 함께 정함.',
    successCriteria: "User combines: day + time (with on/at), price ('It costs ___'), and discount or shop hours in one or two flowing sentences.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
