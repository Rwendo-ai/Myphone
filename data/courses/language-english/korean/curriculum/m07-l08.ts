import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-shona-food',
  module: 7,
  lesson: 8,
  title: '한국 음식 영어로 — Sharing Korean food',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "김치·비빔밥·삼겹살을 영어로 — 이름은 그대로, 설명은 풀어서. 'Bibimbap — mixed rice with vegetables and beef'. 영어권 친구에게 한국 음식 자랑하기.",
    culturalNote: "한국 음식 글로벌화로 'kimchi', 'bibimbap', 'bulgogi', 'gochujang'은 영어 사전에 등재됐어요. 그 외엔 짧은 영어 설명 추가 — 'tteokbokki — spicy rice cakes' 정도면 영어권 친구가 이해해요.",
  },

  chunks: [
    { id: 'kimchi',          target: 'Kimchi — fermented Korean cabbage',                          native: '김치 — 발효된 한국 배추',                       literal: 'kimchi — fermented Korean cabbage', emoji: '🥬', phonetic: 'KIM-chee',           audioRef: null },
    { id: 'bibimbap',        target: 'Bibimbap — mixed rice with vegetables',                       native: '비빔밥 — 야채를 곁들인 비벼 먹는 밥',           literal: 'bibimbap — mixed rice with vegetables', emoji: '🍚', phonetic: 'BEE-beem-BAP', audioRef: null },
    { id: 'bulgogi',         target: 'Bulgogi — Korean BBQ beef',                                   native: '불고기 — 한국식 양념 소고기 구이',                literal: 'bulgogi — Korean BBQ beef',     emoji: '🥩', phonetic: 'bul-GOH-gee',  audioRef: null },
  ],

  pattern: {
    name: 'Korean food + short English description',
    explanation: "공식: '한국어 이름 — 영어 설명'. 'Kimchi — fermented Korean cabbage'. 짧은 설명 (5-10단어)이 가장 효과적. 너무 길면 어색.",
    examples: [
      { target: 'Kimchi — fermented Korean cabbage.',  native: '김치 — 발효된 배추.' },
      { target: 'Tteokbokki — spicy rice cakes.',        native: '떡볶이 — 매운 떡.' },
      { target: 'Bulgogi — sweet marinated beef.',         native: '불고기 — 단 양념 소고기.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Kimchi',        right: '발효된 배추' },
      { left: 'Bibimbap',      right: '비벼 먹는 밥' },
      { left: 'Bulgogi',       right: '한국식 BBQ 소고기' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '비빔밥은 비벼 먹는 밥이에요', correct: ['Bibimbap is mixed rice', 'Bibimbap is mixed rice with vegetables'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Kimchi is ____ Korean cabbage.', options: ['fermented', 'fresh', 'cooked'], correct: 'fermented', context: '발효 = fermented.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"불고기"를 영어로 가장 깔끔하게 설명:', options: [
      { text: 'Bulgogi — Korean BBQ beef.',  correct: true },
      { text: 'Bulgogi cow grill.',             correct: false },
      { text: 'Korean meat fire.',                correct: false },
    ], explanation: '한국어 이름 — 짧은 영어 설명.' },
    { type: 'build_sentence', instruction: '문장', words: ['fermented', 'is', 'cabbage', 'Kimchi'], correct: ['Kimchi', 'is', 'fermented', 'cabbage'], translation: '김치는 발효된 배추예요' },
    { type: 'translate', instruction: '영어로', prompt: '떡볶이는 매운 떡이에요', correct: ['Tteokbokki is spicy rice cakes', 'Tteokbokki — spicy rice cakes'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 한식당 — 미국 친구에게 메뉴 한국 음식 설명.',
    lines: [
      { speaker: 'npc', target: "What's good here? Recommend something.", native: '여기 뭐 맛있어요? 추천해 주세요.' },
      { speaker: 'user', userChoices: [
        { target: 'Try bibimbap — mixed rice with vegetables and beef. Or bulgogi — Korean BBQ beef. Both are sweet and savory.', native: '비빔밥 드세요 — 야채와 소고기 비빈 밥. 또는 불고기 — 한국식 BBQ. 둘 다 달짭짤해요.', correct: true, feedback: '한국어 이름 + 영어 설명 + 맛 추가 — 영어로 한식 자랑 마스터.' },
        { target: 'Korean food good.',                                                                                                native: '한국 음식 좋음.',                                                                                  correct: false, feedback: '구체화 — 음식 이름 + 설명.' },
        { target: 'Yes.',                                                                                                              native: '네.',                                                                                                correct: false, feedback: '추천을 풀어요.' },
      ]},
      { speaker: 'npc', target: "Bibimbap it is. Thanks!", native: '비빔밥으로 할게요. 감사해요!' },
      { speaker: 'rwen', rwenLine: '한국 음식 영어 — 한국어 이름 + 짧은 설명. 자랑할 만한 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Kimchi is fermented cabbage (영어로)', correct: ['Kimchi is fermented cabbage', 'kimchi is fermented cabbage'] },
      { prompt: 'Bibimbap is mixed rice (영어로)',         correct: ['Bibimbap is mixed rice', 'bibimbap is mixed rice'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "한국 음식 5개 — 김치·비빔밥·불고기·떡볶이·삼겹살 — 짧은 영어 설명 만들어 보세요.",
    rwenSignoff: '한식 영어 — 자랑할 만한 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 한식당에서 미국 친구에게 메뉴 한국 음식 추천 + 영어 설명.',
    rwenRole: 'Friend, 28세 미국인, 한식 처음.',
    successCriteria: "User names at least 2 Korean dishes with short English descriptions ('___ — ___').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
