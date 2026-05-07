import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — 어디서 오셨어요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Where are you from?'은 영어 첫 대화에서 거의 100% 나오는 질문이에요. 한국어 '어디서 오셨어요?'와 같지만, 영어권에서는 답을 'I'm from Korea'(국적·고향)로 합니다 — 도시까지 답하지 않아도 돼요.",
    culturalNote: "한국에서는 처음 만난 사람에게 '몇 살이세요?', '결혼하셨어요?'를 자연스럽게 묻지만, 영어권에서는 'Where are you from?'까지가 안전선이에요. 나이·결혼 여부는 친해진 후에.",
  },

  chunks: [
    { id: 'where_are_you_from', target: 'Where are you from?',     native: '어디서 오셨어요? (eodiseo osyeosseoyo?)',   literal: 'where are-you from?',    emoji: '🌍', phonetic: 'wair-ar-yoo-FRUM', audioRef: null },
    { id: 'im_from',            target: "I'm from Korea",          native: '한국에서 왔어요 (hangugeseo wasseoyo)',     literal: "I-am from Korea",        emoji: '🇰🇷', phonetic: 'aym-FRUM-koh-REE-uh', audioRef: null },
    { id: 'i_live_in',          target: 'I live in Seoul',         native: '서울에 살아요 (seoure sarayo)',              literal: 'I live in Seoul',        emoji: '🏙️', phonetic: 'aye-LIV-in-SOLE', audioRef: null },
  ],

  pattern: {
    name: 'From vs In',
    explanation: "'I'm from ___' = 출신 (한국어 '~에서 왔어요'). 'I live in ___' = 현재 거주지 (한국어 '~에 살아요'). 한국어는 둘 다 '에' 조사로 처리되지만, 영어는 from / in 두 전치사로 나뉩니다.",
    examples: [
      { target: "I'm from Korea",  native: '한국에서 왔어요' },
      { target: 'I live in Seoul', native: '서울에 살아요' },
      { target: "I'm from a small town", native: '작은 도시에서 왔어요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm from Korea",  right: '한국에서 왔어요' },
      { left: 'I live in Seoul', right: '서울에 살아요' },
      { left: "Where are you from?", right: '어디서 오셨어요?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '한국에서 왔어요', correct: ["I'm from Korea", "im from Korea", "I am from Korea"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'm ____ Korea. I live ____ Seoul.", options: ['from / in', 'in / from', 'at / on'], correct: 'from / in', context: '미국 친구가 출신을 물어봤을 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "외국인이 'Where are you from?'이라고 묻습니다.", options: [
      { text: "I'm from Korea. I live in Seoul.", correct: true },
      { text: "I'm in Korea.",                       correct: false },
      { text: 'My name is Jiwon.',                    correct: false },
    ], explanation: "'from'은 출신, 'in'은 현재 거주지." },
    { type: 'build_sentence', instruction: '문장', words: ['Seoul', 'live', 'I', 'in'], correct: ['I', 'live', 'in', 'Seoul'], translation: '서울에 살아요' },
    { type: 'translate', instruction: '영어로', prompt: '한국에서 왔고 서울에 살아요', correct: ["I'm from Korea and I live in Seoul", "I'm from Korea, I live in Seoul"] },
  ],

  rwenDialogue: {
    intro: 'LA 한인 행사 — 한국계 미국인 동료와 첫 자기소개.',
    lines: [
      { speaker: 'npc', target: 'Hi! Where are you from?', native: '안녕! 어디서 오셨어요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm from Korea. I live in Seoul.", native: '한국에서 왔어요. 서울에 살아요.', correct: true, feedback: '완벽 — from(출신)과 in(거주지) 둘 다 자연스럽게 썼어요.' },
        { target: "I'm in Korea.",                       native: '한국에 있어요.',               correct: false, feedback: "from을 써야 해요 — 'I'm in Korea'는 지금 한국에 있다는 뜻이에요." },
        { target: 'My name is Jiwon.',                   native: '제 이름은 지원이에요.',         correct: false, feedback: '이름이 아니라 출신을 물었어요.' },
      ]},
      { speaker: 'npc', target: "Nice. I'm from LA myself.", native: '좋네요. 저는 LA 출신이에요.' },
      { speaker: 'rwen', rwenLine: 'from / in 잘 구분했어요. 이게 영어 첫 대화의 기본 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm from Korea (영어로)", correct: ["I'm from Korea", "im from Korea", "I am from Korea"] },
      { prompt: 'I live in Seoul (영어로)', correct: ['I live in Seoul', 'i live in Seoul'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "거울 보고 'I'm from Korea. I live in Seoul.'을 세 번 말해 보세요.",
    rwenSignoff: '내일은 더 긴 자기소개를 해 봐요.',
  },

  phase8: {
    scenario: 'LA 한인타운 컨퍼런스 — 한국계 미국인 엔지니어와 첫 만남.',
    rwenRole: 'Daniel Park, 28세 한국계 미국인, LA 출생, 한국어 거의 못함.',
    successCriteria: "User uses 'I'm from ___' for origin AND 'I live in ___' for residence, distinguishes the two.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
