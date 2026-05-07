import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: '결혼·아이 — Married? Children?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국에선 '결혼하셨어요?', '아이 있어요?'가 첫 만남에 자연스럽지만, 영어권은 친해진 후에 묻습니다. 묻는다면 'Are you married?', 'Do you have kids?'를 써요.",
    culturalNote: "영어권에서는 가족 상태가 사적 영역. 직장에서도 잘 안 묻고, 친구 사이에서도 한 번 친해진 후. 한국 아저씨/아주머니식 첫 만남 질문은 무례하게 들릴 수 있어요.",
  },

  chunks: [
    { id: 'are_you_married',    target: 'Are you married?',   native: '결혼하셨어요? (gyeolhonhasyeosseoyo?)', literal: 'are you married?',  emoji: '💍', phonetic: 'ar-yoo-MAR-eed',     audioRef: null },
    { id: 'two_children',       target: 'I have two children', native: '아이가 둘 있어요 (aiga dul isseoyo)',     literal: 'I have two children', emoji: '👨‍👩‍👧‍👦', phonetic: 'aye-hav-too-CHIL-dren', audioRef: null },
    { id: 'im_single',          target: "I'm single",           native: '저는 미혼이에요 (jeoneun mihonieyo)',     literal: 'I-am single',         emoji: '🦋', phonetic: 'aym-SIN-gul',          audioRef: null },
  ],

  pattern: {
    name: 'Family status questions',
    explanation: "be 동사로 결혼 상태 ('Are you married?' / 'I'm single' / 'I'm married'). have 동사로 아이 상태 ('Do you have kids?' / 'I have two kids' / 'No, I don't have kids'). 두 동사가 헷갈리지 않게.",
    examples: [
      { target: 'Are you married?',     native: '결혼하셨어요?' },
      { target: 'I have two children.',  native: '아이가 둘 있어요.' },
      { target: "I'm single.",           native: '저는 미혼이에요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Are you married?',    right: '결혼하셨어요?' },
      { left: 'I have two children', right: '아이가 둘 있어요' },
      { left: "I'm single",           right: '저는 미혼이에요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 미혼이에요', correct: ["I'm single", "I am single"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ two children.', options: ['have', 'am', 'is'], correct: 'have', context: '아이가 둘일 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '친해진 친구가 결혼 여부를 물었어요. 미혼일 때:', options: [
      { text: "I'm single.",       correct: true },
      { text: 'I have single.',     correct: false },
      { text: 'Single me.',         correct: false },
    ], explanation: "결혼 상태는 be 동사 (am/is/are) + 형용사." },
    { type: 'build_sentence', instruction: '문장', words: ['children', 'two', 'have', 'I'], correct: ['I', 'have', 'two', 'children'], translation: '아이가 둘 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '결혼했어요', correct: ["I'm married", "I am married"] },
  ],

  rwenDialogue: {
    intro: '미국 동료 집들이 — 친해진 후 가족 이야기.',
    lines: [
      { speaker: 'npc', target: "So, are you married? Any kids?", native: '그래서 결혼했어요? 아이는?' },
      { speaker: 'user', userChoices: [
        { target: "I'm married. I have two kids.", native: '결혼했어요. 아이가 둘이에요.', correct: true, feedback: 'be (married) + have (kids) — 두 동사 모두 정확해요.' },
        { target: 'I am two kids.',                  native: '나는 두 아이.',                  correct: false, feedback: 'have가 빠졌어요. 아이는 have로.' },
        { target: "Don't ask.",                      native: '묻지 마.',                       correct: false, feedback: '친한 친구 사이엔 답해 주는 게 자연스러워요.' },
      ]},
      { speaker: 'npc', target: "Lovely. How old are they?", native: '좋네요. 몇 살이에요?' },
      { speaker: 'rwen', rwenLine: '가족 상태 — be vs have 잘 구분했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm married (영어로)",         correct: ["I'm married", "I am married"] },
      { prompt: 'I have two children (영어로)', correct: ['I have two children', 'I have two kids'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 가족 상태를 영어로 두 문장 — be 동사 + have 동사 — 만들어 보세요.",
    rwenSignoff: '가족 영어 — 두 동사 구분이 핵심이에요.',
  },

  phase8: {
    scenario: '미국 동료 집들이 — 친해진 후 가족 상태 자연스럽게 교환.',
    rwenRole: 'Friend Sarah, 33세 미국인, 친근한 분위기.',
    successCriteria: "User uses be-verb for marital status ('I'm married/single') AND have-verb for children ('I have ___ kids' or 'I don't have kids').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
