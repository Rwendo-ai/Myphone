import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-eodi',
  module: 2,
  lesson: 7,
  title: 'Eodi-eyo? — Where Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Asking 'where is X?' in Korean is just X + 어디예요? Easy. Bathroom = 화장실. Subway = 지하철. ATM = 현금인출기. Stick the noun in front; the question forms itself.",
    culturalNote: "Koreans usually answer 'where' questions by pointing AND saying 저기 (over there) or 여기 (here). Watch the finger as much as the words.",
  },

  chunks: [
    { id: 'eodieyo', target: '어디예요?', native: 'Where is it?', literal: 'where-is?', emoji: '📍', phonetic: 'eo-di-ye-yo', audioRef: null },
    { id: 'hwajangsil', target: '화장실', native: 'Bathroom', literal: 'makeup-room', emoji: '🚽', phonetic: 'hwa-jang-sil', audioRef: null },
    { id: 'jihacheol', target: '지하철', native: 'Subway', literal: 'underground-iron', emoji: '🚇', phonetic: 'ji-ha-cheol', audioRef: null },
  ],

  pattern: {
    name: '[Noun] + 어디예요?',
    explanation: "Direct question template — noun then 어디예요?. Reply: 여기 (here), 저기 (there), 거기 (there, near you).",
    examples: [
      { target: '화장실 어디예요?', native: 'Where is the bathroom?' },
      { target: '지하철 어디예요?', native: 'Where is the subway?' },
      { target: '여기예요', native: "It's here" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match place to Korean', pairs: [
      { left: '화장실', right: 'Bathroom' },
      { left: '지하철', right: 'Subway' },
      { left: '편의점', right: 'Convenience store' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where is the bathroom?', correct: ['화장실 어디예요?', 'hwajangsil eodieyo'] },
    { type: 'fill_blank', instruction: 'Ask about the subway', sentence: '지하철 _____?', options: ['어디예요', '얼마예요', '주세요'], correct: '어디예요', context: 'Asking location, not price.' },
    { type: 'build_sentence', instruction: 'Build "Where is the convenience store?"', words: ['편의점', '어디예요?'], correct: ['편의점', '어디예요?'], translation: 'Where is the convenience store?' },
    { type: 'multiple_choice', instruction: 'You really need a bathroom in Itaewon. Best ask?', question: 'Pick the polite, complete phrase', options: [
      { text: '죄송합니다, 화장실 어디예요?', correct: true },
      { text: '화장실', correct: false },
      { text: '안녕', correct: false },
    ], explanation: '죄송합니다 softens the interruption; full sentence asks the location.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where is the subway?', correct: ['지하철 어디예요?', 'jihacheol eodieyo'] },
  ],

  rwenDialogue: {
    intro: "You're in Myeongdong, lost. You walk up to a shopkeeper.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '죄송합니다, 지하철 어디예요?', native: 'Excuse me, where is the subway?', correct: true, feedback: 'Polite + clear. He points.' },
        { target: '지하철', native: 'Subway (just word)', correct: false, feedback: 'Too abrupt — needs the question.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '저기예요. 직진하세요.', native: "It's over there. Go straight." },
      { speaker: 'rwen', rwenLine: "[noun] + 어디예요? — that's the location formula. Watch where they point.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Where is the bathroom?', correct: ['화장실 어디예요?', 'hwajangsil eodieyo'] },
      { prompt: 'Where is the subway?', correct: ['지하철 어디예요?', 'jihacheol eodieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three places: 화장실, 지하철, 편의점. Ask 'where is X?' in Korean for each. Out loud.",
    rwenSignoff: "Lost? Now you can find your way back.",
  },

  phase8: {
    scenario: "You're in Myeongdong, can't find the subway entrance. You ask a shopkeeper for directions.",
    rwenRole: "Shopkeeper — 50s, helpful but busy.",
    successCriteria: "User uses [place] 어디예요? format. Adds 죄송합니다 to soften. Does NOT just say the noun.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
