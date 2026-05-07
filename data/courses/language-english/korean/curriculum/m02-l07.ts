import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — ...어디예요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "여행할 때 가장 자주 쓰는 질문. 'Where is the bathroom?' — 한국어 '화장실 어디예요?'와 같지만, 영어는 article(the)이 꼭 필요해요.",
    culturalNote: "한국어는 'bathroom'에 해당하는 조사만 붙이면 끝이지만, 영어는 'the bathroom' — '그 화장실' 식으로 article을 붙입니다. 처음에는 'the'를 자주 잊어버려요. 이 레슨에서 익숙해지면 평생 유리해요.",
  },

  chunks: [
    { id: 'where_bathroom', target: 'Where is the bathroom?', native: '화장실이 어디예요? (hwajangsiri eodieyo?)', literal: 'where is the bathroom?', emoji: '🚻', phonetic: 'wair-iz-thuh-BATH-room', audioRef: null },
    { id: 'where_exit',     target: 'Where is the exit?',     native: '출구가 어디예요? (chulguga eodieyo?)',       literal: 'where is the exit?',    emoji: '🚪', phonetic: 'wair-iz-thuh-EK-sit', audioRef: null },
    { id: 'over_there',     target: 'Over there',              native: '저기요 (jeogiyo)',                              literal: 'over there',             emoji: '👉', phonetic: 'OH-ver-thair',         audioRef: null },
  ],

  pattern: {
    name: 'Where is + the + noun',
    explanation: "공식: 'Where is the ___?' — 'the' 절대 빼지 마세요. 답: 'Over there' (저기), 'On your right' (오른쪽), 'Down the hall' (복도 끝). 한국어 조사를 영어 article로 바꿔 본다고 생각하세요.",
    examples: [
      { target: 'Where is the bathroom?', native: '화장실이 어디예요?' },
      { target: 'Where is the exit?',     native: '출구가 어디예요?' },
      { target: "It's over there.",        native: '저기 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Where is the bathroom?', right: '화장실이 어디예요?' },
      { left: 'Where is the exit?',     right: '출구가 어디예요?' },
      { left: 'Over there',              right: '저기요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '화장실 어디예요?', correct: ['Where is the bathroom?', 'where is the bathroom?'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Where is ____ exit?', options: ['the', 'a', 'an'], correct: 'the', context: '쇼핑몰에서 출구 찾기.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "런던 박물관에서 화장실을 묻는 가장 자연스러운 표현:", options: [
      { text: 'Excuse me, where is the bathroom?', correct: true },
      { text: 'Bathroom!',                          correct: false },
      { text: 'Bye.',                                correct: false },
    ], explanation: "Excuse me + Where is the ___ = 표준 여행 영어." },
    { type: 'build_sentence', instruction: '문장', words: ['the', 'is', 'Where', 'bathroom?'], correct: ['Where', 'is', 'the', 'bathroom?'], translation: '화장실이 어디예요?' },
    { type: 'translate', instruction: '영어로', prompt: '저기요', correct: ['Over there', 'over there'] },
  ],

  rwenDialogue: {
    intro: 'London 박물관 — 화장실 위치를 묻는 한국 관광객.',
    lines: [
      { speaker: 'npc', target: "Can I help you?", native: '도와드릴까요?' },
      { speaker: 'user', userChoices: [
        { target: "Excuse me, where is the bathroom?", native: '실례합니다, 화장실이 어디예요?', correct: true, feedback: '완벽 — Excuse me + the article까지 다 챙겼어요.' },
        { target: 'Bathroom!',                            native: '화장실!',                          correct: false, feedback: '단어만 던지면 무례해요. Excuse me, where is the ___?' },
        { target: 'Where bathroom?',                       native: '어디 화장실?',                      correct: false, feedback: 'is와 the가 빠졌어요 — 영어 문법 핵심이에요.' },
      ]},
      { speaker: 'npc', target: "It's down the hall, on your right.", native: '복도 끝에서 오른쪽이에요.' },
      { speaker: 'rwen', rwenLine: 'Where is the ___? — 영어 여행 만능 문장이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Where is the bathroom? (영어로)', correct: ['Where is the bathroom?', 'where is the bathroom?'] },
      { prompt: 'Over there (영어로)',              correct: ['Over there', 'over there'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 'Where is the ___?' 패턴을 5개의 다른 명사로 머릿속에서 만들어 보세요 — bathroom, exit, station, ticket counter, taxi.",
    rwenSignoff: "여행 영어의 만능 카드 — 'Where is the ___?' 입니다.",
  },

  phase8: {
    scenario: 'London 박물관 안내 데스크 — 한국 관광객이 화장실과 출구 위치를 묻는 상황.',
    rwenRole: 'Museum staff, 50대 영국인, 친절.',
    successCriteria: "User uses 'Where is the ___?' with article 'the', uses 'Excuse me' to open.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
