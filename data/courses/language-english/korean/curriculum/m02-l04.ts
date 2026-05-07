import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — 영어 하세요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "여행 중 가장 자주 쓰는 질문. 'Do you speak English?'에 'A little' (조금)로 답하면 상대가 천천히, 쉬운 영어로 바꿔 줘요.",
    culturalNote: "한국어는 능력을 너무 자랑하면 겸손하지 않다고 봐요. 영어권에서는 'A little'이 겸손과 사실 모두를 표현하는 안전 카드예요. 'I don't speak English' 대신 'I speak a little English'를 쓰면 대화가 끊기지 않아요.",
  },

  chunks: [
    { id: 'do_you_speak',  target: 'Do you speak English?', native: '영어 하세요? (yeongeo haseyo?)',  literal: 'do you speak English?', emoji: '🗣️', phonetic: 'doo-yoo-SPEEK', audioRef: null },
    { id: 'a_little',      target: 'A little',               native: '조금이요 (jogeumiyo)',              literal: 'a little',              emoji: '🤏', phonetic: 'uh-LIT-ul',     audioRef: null },
    { id: 'slowly_please', target: 'Slowly, please',         native: '천천히 말해 주세요 (cheoncheonhi malhae juseyo)', literal: 'slowly please', emoji: '🐢', phonetic: 'SLOW-lee-pleez', audioRef: null },
  ],

  pattern: {
    name: 'Language survival combo',
    explanation: "영어 능력에 자신 없을 때 3-카드 콤보: 'A little' (능력 표시) + 'Slowly, please' (속도 부탁) + 'I don't understand' (모를 때). 이 셋만 있어도 대화가 끊기지 않아요.",
    examples: [
      { target: 'Do you speak English?', native: '영어 하세요?' },
      { target: 'A little.',              native: '조금이요.' },
      { target: 'Slowly, please.',         native: '천천히 말해 주세요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Do you speak English?', right: '영어 하세요?' },
      { left: 'A little',              right: '조금이요' },
      { left: 'Slowly, please',        right: '천천히 말해 주세요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '천천히 말해 주세요', correct: ['Slowly, please', 'slowly please', 'Slowly please'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I speak ____ little English.', options: ['a', 'the', 'an'], correct: 'a', context: '영어 능력을 묻는 사람에게.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "외국인이 빠르게 말하고 있어요. 알아듣기 힘들 때:", options: [
      { text: 'Slowly, please.',     correct: true },
      { text: 'Bye.',                  correct: false },
      { text: 'I am from Korea.',      correct: false },
    ], explanation: "'Slowly, please'면 대부분 속도를 줄여 줘요." },
    { type: 'build_sentence', instruction: '문장', words: ['little', 'A'], correct: ['A', 'little'], translation: '조금이요' },
    { type: 'translate', instruction: '영어로', prompt: '영어 조금 해요. 천천히 말해 주세요.', correct: ["I speak a little English. Slowly, please.", "A little English. Slowly, please."] },
  ],

  rwenDialogue: {
    intro: '파리 공항에서 환승 — 영국 직원이 영어로 빠르게 안내.',
    lines: [
      { speaker: 'npc', target: "Yourflightleavesfromgateforty-twointwentyminutes.", native: '비행기 42번 게이트에서 20분 후 출발입니다.' },
      { speaker: 'user', userChoices: [
        { target: "Sorry, slowly please. I speak a little English.", native: '죄송해요, 천천히 말해 주세요. 영어 조금 해요.', correct: true, feedback: '두 카드를 같이 — 직원이 톤을 바꿔 줄 거예요.' },
        { target: 'No.',                                                native: '아니요.',                                       correct: false, feedback: "대화가 끊겨요. 'A little' + 'Slowly, please'를 쓰세요." },
        { target: 'Bye.',                                               native: '잘 가.',                                         correct: false, feedback: '도움이 필요한데 헤어지면 안 돼요.' },
      ]},
      { speaker: 'npc', target: "No problem. Your flight — gate forty-two — twenty minutes.", native: '괜찮아요. 비행기 — 42번 게이트 — 20분.' },
      { speaker: 'rwen', rwenLine: '능력은 솔직하게, 속도는 부탁으로 — 여행 생존의 기본 콤보예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A little (영어로)',       correct: ['A little', 'a little'] },
      { prompt: 'Slowly, please (영어로)', correct: ['Slowly, please', 'slowly please', 'Slowly please'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "여행 시뮬레이션 — 거울 앞에서 'I speak a little English. Slowly, please.'를 말해 보세요.",
    rwenSignoff: '조금 한다는 게 큰 자산이에요. 영어권은 인정해 줍니다.',
  },

  phase8: {
    scenario: '파리 샤를 드 골 공항 환승 — 영어로 빠르게 말하는 직원에게 속도 조절 부탁.',
    rwenRole: 'Airport staff, 30대 영국 액센트, 직업적이지만 친절.',
    successCriteria: "User says 'A little' or 'I speak a little English', requests 'Slowly, please'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
