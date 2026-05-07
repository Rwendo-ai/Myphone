import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: '이모/삼촌 — Aunts & Uncles',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 이모/고모/숙모/외숙모 — 영어 aunt 한 단어. 삼촌/외삼촌/큰아버지/작은아버지 — 영어 uncle 한 단어. 사촌은 cousin (성별·나이 무관).",
    culturalNote: "한국 친척 호칭은 친가/외가, 부모 형제의 위치, 결혼 여부까지 다 표시. 영어는 모두 aunt/uncle/cousin 셋으로 압축. 정보 손실 같지만, 영어 가족 대화에서는 이게 표준이에요.",
  },

  chunks: [
    { id: 'aunt',     target: 'Aunt',     native: '이모/고모/숙모 (imo/gomo/sukmo)',   literal: 'aunt',     emoji: '👩', phonetic: 'ANT',     audioRef: null },
    { id: 'uncle',    target: 'Uncle',    native: '삼촌/외삼촌/이모부 (samchon/oesamchon/imobu)', literal: 'uncle', emoji: '👨', phonetic: 'UN-kul', audioRef: null },
    { id: 'cousin',   target: 'Cousin',   native: '사촌 (sachon)',                        literal: 'cousin',   emoji: '👥', phonetic: 'KUZ-un', audioRef: null },
  ],

  pattern: {
    name: 'Extended family — flattened',
    explanation: "한국어 호칭 8개 → 영어 3단어 (aunt/uncle/cousin). 굳이 풀려면 'my mom's sister' (이모), 'my dad's older brother' (큰아버지). 일상엔 그냥 aunt/uncle.",
    examples: [
      { target: "My aunt — my mom's sister.", native: '이모 — 엄마의 여동생.' },
      { target: 'My uncle lives in Busan.',     native: '삼촌은 부산에 사세요.' },
      { target: 'I have many cousins.',          native: '사촌이 많아요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Aunt',     right: '이모/고모/숙모' },
      { left: 'Uncle',    right: '삼촌/외삼촌' },
      { left: 'Cousin',   right: '사촌' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '이모', correct: ['Aunt', 'aunt', 'My aunt', 'my aunt'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have many ____.', options: ['cousins', 'cousin', 'cousines'], correct: 'cousins', context: '복수 — 사촌 많을 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"엄마 여동생"을 정확히 영어로:', options: [
      { text: "My aunt — my mom's sister.",  correct: true },
      { text: 'My imo.',                        correct: false },
      { text: 'Aunt mom sister.',                correct: false },
    ], explanation: '구체화 필요하면 "my mom\'s sister"로 풀어요.' },
    { type: 'build_sentence', instruction: '문장', words: ['cousins', 'have', 'many', 'I'], correct: ['I', 'have', 'many', 'cousins'], translation: '사촌이 많아요' },
    { type: 'translate', instruction: '영어로', prompt: '저희 삼촌은 부산에 사세요', correct: ['My uncle lives in Busan', 'my uncle lives in Busan'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 추석 가족 모임 궁금해함.',
    lines: [
      { speaker: 'npc', target: "How big is your family at Korean Thanksgiving?", native: '추석에 가족이 몇 명 모여요?' },
      { speaker: 'user', userChoices: [
        { target: 'About 20 — my parents, aunts, uncles, and many cousins.', native: '20명쯤 — 부모님, 이모·삼촌·고모·외삼촌, 사촌들 많아요.', correct: true, feedback: '한국 호칭 다양함을 영어 3단어로 깔끔하게 압축.' },
        { target: 'Imo gomo samchon many.',                                     native: '이모 고모 삼촌 많아.',                                       correct: false, feedback: '한국어 그대로 — 영어로 압축해 보세요.' },
        { target: 'Big.',                                                         native: '커요.',                                                       correct: false, feedback: '구체화 필요해요.' },
      ]},
      { speaker: 'npc', target: "Wow, that's a real gathering!", native: '와, 진짜 모임이네요!' },
      { speaker: 'rwen', rwenLine: '친척 영어 — 한국어 8호칭이 영어 3단어로. 익숙해져요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Aunt (영어로)',    correct: ['Aunt', 'aunt'] },
      { prompt: 'Uncle (영어로)',   correct: ['Uncle', 'uncle'] },
      { prompt: 'Cousin (영어로)',  correct: ['Cousin', 'cousin'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 친척 — 이모·삼촌·사촌 — 5명을 영어 aunt/uncle/cousin으로 풀어 보세요.",
    rwenSignoff: '친척 영어 — 한국어 8호칭의 영어 압축본이에요.',
  },

  phase8: {
    scenario: '미국 친구가 추석 가족 모임의 가족 구성을 묻는 자리.',
    rwenRole: 'Friend, 30세 미국인, 작은 가족.',
    successCriteria: "User uses aunt/uncle/cousin appropriately, may use 'my mom's sister' to specify if needed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
