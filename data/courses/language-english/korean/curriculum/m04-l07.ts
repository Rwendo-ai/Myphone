import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'some'은 긍정문에, 'any'는 부정문/의문문에. 'I have some friends' (긍정), 'Do you have any questions?' (의문). 한국어 '몇 개', '좀'에 가까워요.",
    culturalNote: "한국 화자가 자주 헷갈리는 것 — 의문문에서 'some'을 쓰는 경우. 권유·요청일 땐 의문문이어도 some: 'Would you like some coffee?' (권유). 단순 사실 의문엔 any.",
  },

  chunks: [
    { id: 'some_water',     target: 'Some water',     native: '물 좀 (mul jom)',           literal: 'some water',     emoji: '💧', phonetic: 'sum-WAH-ter',  audioRef: null },
    { id: 'any_questions',  target: 'Any questions?',  native: '질문 있나요? (jilmun innayo?)', literal: 'any questions?', emoji: '❓', phonetic: 'EN-ee-KWES-chuns', audioRef: null },
    { id: 'some_friends',    target: 'Some friends',   native: '친구 몇 명 (chingu myeot myeong)', literal: 'some friends', emoji: '👥', phonetic: 'sum-FRENDS',   audioRef: null },
  ],

  pattern: {
    name: 'Some / Any usage',
    explanation: "긍정문 → some. 부정·의문 → any. 예외: 권유·요청 의문문 → some ('Would you like some tea?'). 한국어 '좀'은 거의 some, '~있어요?' 일반 의문은 any.",
    examples: [
      { target: 'I have some friends here.',  native: '여기 친구 좀 있어요.' },
      { target: 'Do you have any questions?',  native: '질문 있나요?' },
      { target: 'Would you like some tea?',     native: '차 드실래요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Some water',    right: '물 좀' },
      { left: 'Any questions?', right: '질문 있나요?' },
      { left: 'Some friends',   right: '친구 몇 명' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '물 좀', correct: ['Some water', 'some water'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I don't have ____ money.", options: ['any', 'some', 'a'], correct: 'any', context: '부정문엔 any.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '권유 의문문 — "차 좀 드실래요?":', options: [
      { text: 'Would you like some tea?',     correct: true },
      { text: 'Would you like any tea?',        correct: false },
      { text: 'Would you like a tea?',          correct: false },
    ], explanation: '권유는 some — any는 좀 차갑게 들려요.' },
    { type: 'build_sentence', instruction: '문장', words: ['friends', 'have', 'I', 'some'], correct: ['I', 'have', 'some', 'friends'], translation: '친구 몇 명 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '질문 있나요?', correct: ['Any questions?', 'any questions?'] },
  ],

  rwenDialogue: {
    intro: '판교 회의 — 미국 PM이 발표 후 질문 받기.',
    lines: [
      { speaker: 'npc', target: "Any questions before we wrap up?", native: '마무리하기 전에 질문 있나요?' },
      { speaker: 'user', userChoices: [
        { target: 'Yes, I have some questions about the timeline.', native: '네, 일정에 관해 몇 가지 질문이 있어요.', correct: true, feedback: '긍정 응답엔 some — 정확해요.' },
        { target: 'Yes, I have any questions.',                        native: '네, any 질문 있어요.',                       correct: false, feedback: '긍정문엔 some.' },
        { target: 'No questions.',                                       native: '질문 없어요.',                                correct: false, feedback: '대화 더 발전시키려면 some questions.' },
      ]},
      { speaker: 'npc', target: 'Sure, go ahead.', native: '물론이죠, 말씀하세요.' },
      { speaker: 'rwen', rwenLine: 'some / any — 영어 양적 표현의 두 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Some friends (영어로)',  correct: ['Some friends', 'some friends'] },
      { prompt: 'Any questions? (영어로)', correct: ['Any questions?', 'any questions?'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 영어 문장 5개에 some/any를 의식적으로 구분해 써 보세요.",
    rwenSignoff: 'some/any — 작지만 영어 매 문장의 정확도 카드예요.',
  },

  phase8: {
    scenario: '판교 회의 마무리 — Q&A 세션에서 some/any 정확히 사용.',
    rwenRole: 'PM Tom, 35세 미국인.',
    successCriteria: "User uses 'some' in positive statements/offers, 'any' in negatives/questions correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
