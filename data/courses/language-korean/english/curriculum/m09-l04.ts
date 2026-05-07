import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-jiljin',
  module: 9,
  lesson: 4,
  title: 'Directions — Straight, Left, Right',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Direction words: 직진 (straight), 왼쪽 (left), 오른쪽 (right), 뒤 (back). Pair with 가다/오다 for directions or 돌다 (turn).",
    culturalNote: "Asking for directions earns help in Korea — even from busy people. Combine with map/Naver Map screenshots and you'll always find your way.",
  },

  chunks: [
    { id: 'jikjin', target: '직진하세요', native: 'Go straight', literal: 'straight-do-honorific', emoji: '⬆️', phonetic: 'jik-jin-ha-se-yo', audioRef: null },
    { id: 'oenjjok', target: '왼쪽 / 오른쪽', native: 'Left / right', literal: 'left-side / right-side', emoji: '↔️', phonetic: 'oen-jjok / o-reun-jjok', audioRef: null },
    { id: 'doraseyo', target: '도세요', native: 'Turn (honorific imperative)', literal: 'turn-honorific', emoji: '↪️', phonetic: 'do-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Direction + verb',
    explanation: "직진 + 하세요 (go straight). 왼쪽/오른쪽으로 + 도세요 (turn left/right).",
    examples: [
      { target: '직진하세요', native: 'Go straight' },
      { target: '오른쪽으로 도세요', native: 'Turn right' },
      { target: '왼쪽으로 도세요', native: 'Turn left' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match direction', pairs: [
      { left: '직진', right: 'Straight' },
      { left: '왼쪽', right: 'Left' },
      { left: '오른쪽', right: 'Right' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Go straight', correct: ['직진하세요', 'jikjinhaseyo'] },
    { type: 'fill_blank', instruction: 'Turn right at the corner', sentence: '_____ 도세요.', options: ['오른쪽으로', '왼쪽으로', '직진'], correct: '오른쪽으로', context: 'Turn right.' },
    { type: 'build_sentence', instruction: 'Build "Turn left"', words: ['도세요', '왼쪽으로'], correct: ['왼쪽으로', '도세요'], translation: 'Turn left.' },
    { type: 'multiple_choice', instruction: 'Asking "where is exit 3?"', question: 'Pick the natural Korean', options: [
      { text: '3번 출구 어디예요?', correct: true },
      { text: '3번 출구 비싸요?', correct: false },
      { text: '3번 출구 얼마예요?', correct: false },
    ], explanation: '어디 = where. 비싸 / 얼마 are price questions.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Turn right', correct: ['오른쪽으로 도세요', 'oreunjjogeuro doseyo'] },
  ],

  rwenDialogue: {
    intro: "Lost in Myeongdong. You ask a shopkeeper.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '죄송합니다, 명동역 어디예요?', native: 'Excuse me, where is Myeongdong Station?', correct: true, feedback: 'Polite ask.' },
        { target: '명동역 비싸요?', native: 'Is it expensive?', correct: false, feedback: 'Wrong question shape.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '직진하시고, 두 번째 골목에서 오른쪽으로 도세요.', native: 'Go straight, turn right at the second alley.' },
      { speaker: 'rwen', rwenLine: '직진 / 왼쪽 / 오른쪽 / 도세요 — Korean street directions.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Go straight', correct: ['직진하세요', 'jikjinhaseyo'] },
      { prompt: 'Turn left', correct: ['왼쪽으로 도세요', 'oenjjogeuro doseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture giving directions in Korean from your home to a café. Direct + turn + arrive.",
    rwenSignoff: "Directions in Korean. You can guide and be guided.",
  },

  phase8: {
    scenario: "Lost in Myeongdong, asking a shopkeeper for directions to a station.",
    rwenRole: "Shopkeeper — 50s, helpful.",
    successCriteria: "User asks 어디예요?, understands 직진/왼쪽/오른쪽 directions, says thanks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
