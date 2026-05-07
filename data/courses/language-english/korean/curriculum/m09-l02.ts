import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: '방향 — Left, Right, Straight',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "방향 — Left (왼쪽), Right (오른쪽), Straight (직진). 'Turn left at the corner', 'Go straight for two blocks'. 길 안내 영어 핵심.",
    culturalNote: "한국에서는 '저 건물 끼고 좌회전' 식 표현이 많지만, 영어는 'Turn left at the traffic light' 같이 명확한 랜드마크 + 방향. 'Block' 단위 (구역)도 미국에서 자주 — 두 블록 = two blocks.",
  },

  chunks: [
    { id: 'turn_left',      target: 'Turn left',         native: '왼쪽으로 (oenjjokeuro)',           literal: 'turn left',     emoji: '⬅️', phonetic: 'TURN-LEFT',     audioRef: null },
    { id: 'go_straight',    target: 'Go straight',        native: '직진 (jikjin)',                     literal: 'go straight',    emoji: '⬆️', phonetic: 'GOH-STRAYT',   audioRef: null },
    { id: 'on_the_right',   target: "It's on the right",  native: '오른쪽에 있어요 (oreunjjoge isseoyo)', literal: "it's on the right", emoji: '➡️', phonetic: 'on-thuh-RYT',  audioRef: null },
  ],

  pattern: {
    name: 'Direction phrases',
    explanation: "공식: 'Turn left/right at + 랜드마크', 'Go straight for + 거리', 'It's on your left/right'. 'On your left'는 시각적 시점 — 청자 기준 왼쪽.",
    examples: [
      { target: 'Turn left at the corner.',  native: '코너에서 왼쪽.' },
      { target: 'Go straight for two blocks.', native: '두 블록 직진.' },
      { target: "It's on your right.",        native: '당신 오른쪽에 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Turn left',          right: '왼쪽으로' },
      { left: 'Go straight',         right: '직진' },
      { left: "It's on the right",   right: '오른쪽에 있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '직진', correct: ['Go straight', 'go straight'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Turn ____ at the light.', options: ['left', 'leaf', 'lift'], correct: 'left', context: '신호등에서 왼쪽.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"두 블록 직진하고 오른쪽" 영어:', options: [
      { text: 'Go straight for two blocks, then turn right.', correct: true },
      { text: 'Two block straight right.',                       correct: false },
      { text: 'Block right.',                                       correct: false },
    ], explanation: 'go straight + for + 거리, then turn ___.' },
    { type: 'build_sentence', instruction: '문장', words: ['left', 'Turn'], correct: ['Turn', 'left'], translation: '왼쪽으로' },
    { type: 'translate', instruction: '영어로', prompt: '오른쪽에 있어요', correct: ["It's on the right", "Its on the right", "It is on the right"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 거리 — 한국 관광객이 호텔 길 묻기.',
    lines: [
      { speaker: 'npc', target: "How do I get to the hotel?", native: '호텔 어떻게 가나요?' },
      { speaker: 'user', userChoices: [
        { target: 'Go straight for two blocks, then turn left at the deli. The hotel is on your right.', native: '두 블록 직진 후 델리에서 왼쪽. 호텔은 오른쪽에 있어요.', correct: true, feedback: '랜드마크 + 거리 + 방향 — 길 안내 마스터.' },
        { target: 'Left right.',                                                                          native: '왼쪽 오른쪽.',                                       correct: false, feedback: '구체화 부족.' },
        { target: 'No.',                                                                                  native: '아니요.',                                              correct: false, feedback: '안내 풀어요.' },
      ]},
      { speaker: 'npc', target: "Got it, thanks!", native: '알겠어요, 고마워요!' },
      { speaker: 'rwen', rwenLine: '방향 영어 — 길 안내 줄 수 있는 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Turn left (영어로)',     correct: ['Turn left', 'turn left'] },
      { prompt: 'Go straight (영어로)',    correct: ['Go straight', 'go straight'] },
      { prompt: "It's on the right (영어로)", correct: ["It's on the right", "Its on the right"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 집에서 가장 가까운 카페까지 영어 길 안내 만들어 보세요.",
    rwenSignoff: '방향 영어 — 길 도와주는 카드.',
  },

  phase8: {
    scenario: '뉴욕 거리에서 다른 관광객에게 영어로 길 안내.',
    rwenRole: 'Tourist, 30대.',
    successCriteria: "User uses 'turn left/right', 'go straight', 'on your left/right' to give directions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
