import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — 부탁합니다',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "영어 'please'는 한국어 '부탁드립니다'와 '좀'을 합친 것 같아요. 'Excuse me, please'는 식당에서 직원을 부를 때, 'Sorry'는 가벼운 사과나 양해.",
    culturalNote: "한국어는 존댓말 어미('-요', '-습니다')가 정중함을 만들지만, 영어에서는 'please'와 'thank you' 빈도가 정중함의 척도예요. 영국에서는 거의 모든 부탁에 'please'를 붙입니다 — 안 붙이면 무례하게 들려요.",
  },

  chunks: [
    { id: 'please',     target: 'Please',     native: '부탁합니다 / 제발 (butakhamnida)',    literal: undefined,        emoji: '🙏', phonetic: 'PLEEZ',     audioRef: null },
    { id: 'excuse_me',  target: 'Excuse me',  native: '실례합니다 (sillyehamnida)',           literal: 'excuse me',     emoji: '🙋', phonetic: 'eks-KYOOZ-mee', audioRef: null },
    { id: 'sorry',      target: 'Sorry',      native: '죄송합니다 (joesonghamnida)',           literal: undefined,        emoji: '😅', phonetic: 'SOR-ee',    audioRef: null },
  ],

  pattern: {
    name: 'Please / Excuse me / Sorry',
    explanation: "'Please' = 부탁할 때 끝에 붙임. 'Excuse me' = 누군가의 주의를 끌 때 (한국어 '저기요'). 'Sorry' = 가벼운 사과 ('미안합니다'). 한국어처럼 상황에 따라 골라 써요.",
    examples: [
      { target: 'Water, please.',         native: '물 좀 주세요.' },
      { target: 'Excuse me, where is...?', native: '실례합니다, ...어디예요?' },
      { target: "Sorry, I'm late.",       native: '늦어서 죄송합니다.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Please',    right: '부탁합니다' },
      { left: 'Excuse me', right: '실례합니다' },
      { left: 'Sorry',     right: '죄송합니다' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '실례합니다', correct: ['Excuse me', 'excuse me'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: '____ me, where is the bathroom?', options: ['Excuse', 'Sorry', 'Please'], correct: 'Excuse', context: '식당에서 화장실을 물어볼 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '카페에서 직원에게 물 한 잔을 부탁하려면?', options: [
      { text: 'Water, please.',     correct: true },
      { text: 'Water!',              correct: false },
      { text: 'Sorry, water.',       correct: false },
    ], explanation: "주문에는 'please'를 끝에 붙이는 게 표준이에요." },
    { type: 'build_sentence', instruction: '문장', words: ['please', 'Water'], correct: ['Water', 'please'], translation: '물 좀 주세요' },
    { type: 'translate', instruction: '영어로', prompt: '늦어서 죄송합니다', correct: ["Sorry, I'm late", "I'm sorry, I'm late", "Sorry I'm late"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 미드타운 카페 — 처음 영어로 주문하는 한국 유학생.',
    lines: [
      { speaker: 'npc', target: "Hi, what can I get you?", native: '안녕하세요, 뭐 드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "An americano, please.",  native: '아메리카노 한 잔 주세요.', correct: true, feedback: '완벽 — please 한 마디로 톤이 정중해졌어요.' },
        { target: "Americano!",              native: '아메리카노!',              correct: false, feedback: 'please를 빼면 명령처럼 들려요.' },
        { target: "Sorry, americano.",       native: '죄송합니다, 아메리카노.',  correct: false, feedback: 'sorry는 사과예요. 주문에는 please.' },
      ]},
      { speaker: 'npc', target: "Coming right up.", native: '바로 준비해 드릴게요.' },
      { speaker: 'rwen', rwenLine: 'please를 붙이는 습관 — 영어 매너의 절반은 여기서 시작해요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Please (영어로)',     correct: ['Please', 'please'] },
      { prompt: 'Excuse me (영어로)',  correct: ['Excuse me', 'excuse me'] },
      { prompt: 'Sorry (영어로)',      correct: ['Sorry', 'sorry'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 한 번이라도 영어 'please'를 부탁 끝에 붙여 말해 보세요 — 카페에서, 가게에서.",
    rwenSignoff: 'Please는 영어 매너의 시작이에요.',
  },

  phase8: {
    scenario: '뉴욕 카페에서 처음 영어로 주문 — please를 자연스럽게 붙이기.',
    rwenRole: 'Barista, 24세, 친근한 미국인.',
    successCriteria: "User uses 'please' on at least one request, distinguishes 'Excuse me' (attention) from 'Sorry' (apology).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
