import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: '자녀 — Sons & Daughters',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "아이 = child(단수)/children(복수). 아들 = son, 딸 = daughter. 한국어 '자식'이 영어 child보다 더 중성적이에요.",
    culturalNote: "한국에선 자녀를 자주 묻고 자랑하지만, 영어권은 'I have two kids'로 가볍게 풀고 깊은 자랑은 절제해요. 'kids'(캐주얼) vs 'children'(중성·격식). 둘 다 자연스러워요.",
  },

  chunks: [
    { id: 'son',         target: 'Son',         native: '아들 (adeul)', literal: 'son',         emoji: '👦', phonetic: 'SUN',         audioRef: null },
    { id: 'daughter',    target: 'Daughter',     native: '딸 (ttal)',    literal: 'daughter',     emoji: '👧', phonetic: 'DAW-ter',     audioRef: null },
    { id: 'children',    target: 'Children',     native: '아이들 (aideul)', literal: 'children',     emoji: '👶', phonetic: 'CHIL-dren',  audioRef: null },
  ],

  pattern: {
    name: 'Children / Sons / Daughters',
    explanation: "child(단수) → children(불규칙 복수). son·daughter는 규칙 -s. 'kids'는 캐주얼 통칭. 'I have two kids — a son and a daughter'가 자연스러운 영어 답변.",
    examples: [
      { target: 'I have one son.',           native: '아들 하나 있어요.' },
      { target: 'My daughter is six.',         native: '저희 딸은 여섯 살이에요.' },
      { target: 'Two children — a son and a daughter.', native: '아이 둘 — 아들 하나, 딸 하나.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Son',         right: '아들' },
      { left: 'Daughter',     right: '딸' },
      { left: 'Children',     right: '아이들' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '딸이 둘이에요', correct: ['I have two daughters', 'i have two daughters'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have two ____.', options: ['children', 'childs', 'child'], correct: 'children', context: 'child의 복수.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"아이 둘 — 아들 하나, 딸 하나" 영어:', options: [
      { text: 'Two kids — a son and a daughter.',  correct: true },
      { text: 'Two child son daughter.',              correct: false },
      { text: 'Two sons two daughters.',              correct: false },
    ], explanation: '구조: 숫자 + 통칭 — 분류.' },
    { type: 'build_sentence', instruction: '문장', words: ['daughter', 'a', 'have', 'I'], correct: ['I', 'have', 'a', 'daughter'], translation: '딸 하나 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '제 아들', correct: ['My son', 'my son'] },
  ],

  rwenDialogue: {
    intro: '판교 회의 휴식 — 미국 동료가 자녀 이야기.',
    lines: [
      { speaker: 'npc', target: "Do you have kids?", native: '아이 있어요?' },
      { speaker: 'user', userChoices: [
        { target: 'Yes, two — a son and a daughter.', native: '네, 둘이에요 — 아들 하나, 딸 하나.', correct: true, feedback: '깔끔한 답 — 숫자 + 분류.' },
        { target: 'Two child me.',                       native: '두 아이 나.',                          correct: false, feedback: '동사·복수형 빠졌어요.' },
        { target: 'No.',                                  native: '없어요.',                              correct: false, feedback: '있는데 답을 닫지 마세요.' },
      ]},
      { speaker: 'npc', target: "Lovely. How old are they?", native: '좋네요. 몇 살이에요?' },
      { speaker: 'rwen', rwenLine: '자녀 영어 — 숫자 + 분류 카드 두 개.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Son (영어로)',      correct: ['Son', 'son'] },
      { prompt: 'Daughter (영어로)', correct: ['Daughter', 'daughter'] },
      { prompt: 'Children (영어로)', correct: ['Children', 'children'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자녀 (있다면) 또는 조카·동생을 영어로 — son/daughter/children — 풀어 보세요.",
    rwenSignoff: '자녀 영어 — 카드 세 장으로 가족의 다음 세대를 표현해요.',
  },

  phase8: {
    scenario: '판교 회의 휴식 시간 — 미국 동료와 자녀 이야기.',
    rwenRole: 'Colleague Sarah, 38세 미국인, 두 딸 엄마.',
    successCriteria: "User uses 'son/daughter/children' correctly, distinguishes singular/plural.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
