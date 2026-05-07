import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: '조부모 — Grandmother & Grandfather',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 할머니/할아버지 — 영어 grandmother/grandfather. 친근하게는 grandma/grandpa. 한국어 외할머니/친할머니 구분이 영어에는 없어요.",
    culturalNote: "한국 가족은 친가/외가 호칭이 다르지만 (할머니/외할머니), 영어는 통합 grandmother. 굳이 구분하려면 'maternal grandmother' (외할머니), 'paternal grandmother' (친할머니) — 잘 안 써요.",
  },

  chunks: [
    { id: 'grandmother',  target: 'Grandmother',  native: '할머니 (halmeoni)',     literal: 'grandmother',  emoji: '👵', phonetic: 'GRAND-muh-ther', audioRef: null },
    { id: 'grandfather',  target: 'Grandfather',  native: '할아버지 (harabeoji)',  literal: 'grandfather',  emoji: '👴', phonetic: 'GRAND-fah-ther', audioRef: null },
    { id: 'grandchild',   target: 'Grandchild',    native: '손주 (sonju)',           literal: 'grandchild',    emoji: '👶', phonetic: 'GRAND-chyld',     audioRef: null },
  ],

  pattern: {
    name: 'Grand- prefix',
    explanation: "grand- 접두사로 한 세대 위/아래. grandmother/grandfather (위), grandchild/grandson/granddaughter (아래). great- 붙이면 두 세대 — great-grandmother (증조할머니).",
    examples: [
      { target: 'My grandma is 80.',         native: '저희 할머니는 80세이세요.' },
      { target: 'My grandpa lives in Busan.',  native: '저희 할아버지는 부산에 사세요.' },
      { target: 'I have three grandchildren.',  native: '손주가 셋 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Grandmother',  right: '할머니' },
      { left: 'Grandfather',   right: '할아버지' },
      { left: 'Grandchild',    right: '손주' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저희 할머니', correct: ['My grandmother', 'my grandmother', 'My grandma', 'my grandma'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'My ____ lives in Busan.', options: ['grandfather', 'grandfathers', 'grandfather\'s'], correct: 'grandfather', context: '단수 소유.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"외할머니"의 영어 (정확히 풀려면):', options: [
      { text: 'My maternal grandmother',     correct: true },
      { text: 'My out-grandmother',            correct: false },
      { text: 'My mom-grandmother',            correct: false },
    ], explanation: 'maternal = 어머니 쪽, paternal = 아버지 쪽. 다만 일상에선 그냥 grandmother 써요.' },
    { type: 'build_sentence', instruction: '문장', words: ['grandma', 'is', 'My', '80'], correct: ['My', 'grandma', 'is', '80'], translation: '저희 할머니는 80세이세요' },
    { type: 'translate', instruction: '영어로', prompt: '저희 할아버지', correct: ['My grandfather', 'my grandfather', 'My grandpa', 'my grandpa'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 한국 할머니가 만든 김치 자랑.',
    lines: [
      { speaker: 'npc', target: "Who taught you to cook?", native: '요리는 누가 가르쳐 줬어요?' },
      { speaker: 'user', userChoices: [
        { target: 'My grandmother. She taught me to make kimchi.', native: '저희 할머니. 김치 만드는 법 가르쳐 주셨어요.', correct: true, feedback: '할머니 + 가르침 — 영어로 자연스럽게 풀었어요.' },
        { target: 'Halmeoni kimchi.',                                native: '할머니 김치.',                                correct: false, feedback: '문장 구조가 빠졌어요.' },
        { target: 'No.',                                              native: '아니요.',                                      correct: false, feedback: '대화 발전시켜요.' },
      ]},
      { speaker: 'npc', target: "Wow, that's a beautiful tradition.", native: '와, 아름다운 전통이네요.' },
      { speaker: 'rwen', rwenLine: '할머니 영어 — grand-라는 한 접두사로 한 세대 표현.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Grandmother (영어로)', correct: ['Grandmother', 'grandmother', 'Grandma', 'grandma'] },
      { prompt: 'Grandfather (영어로)', correct: ['Grandfather', 'grandfather', 'Grandpa', 'grandpa'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "할머니/할아버지 이야기를 영어로 한 문장 만들어 보세요.",
    rwenSignoff: '할머니 영어 — 가족 트리의 윗 세대 카드예요.',
  },

  phase8: {
    scenario: '미국 친구에게 한국 할머니의 김치 또는 다른 가족 전통 영어로 풀기.',
    rwenRole: 'US friend, 30세, 한국 음식 호기심.',
    successCriteria: "User uses 'grandmother/grandfather' or 'grandma/grandpa', shares a memory or tradition.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
