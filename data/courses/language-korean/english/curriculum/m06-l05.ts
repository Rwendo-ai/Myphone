import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-counters',
  module: 6,
  lesson: 5,
  title: 'Counter Words — 명, 개, 잔, 병',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "You can't just say 'two coffees' in Korean — you need a counter word matched to the noun. People = 명. Things = 개. Cups = 잔. Bottles = 병. Like English 'a sheet of paper' but EVERY noun.",
    culturalNote: "There are dozens of counters but you really need ~6 to survive: 명 (people), 개 (things), 잔 (cups), 병 (bottles), 마리 (animals), 권 (books). Pair with shrunk Native 한/두/세/네.",
  },

  chunks: [
    { id: 'myeong', target: '명', native: 'Counter for people', literal: 'people-CL', emoji: '👥', phonetic: 'myeong', audioRef: null },
    { id: 'gae', target: '개', native: 'Counter for general things', literal: 'thing-CL', emoji: '📦', phonetic: 'gae', audioRef: null },
    { id: 'jan', target: '잔 / 병', native: 'Cup / bottle counters', literal: 'cup / bottle CL', emoji: '🥃', phonetic: 'jan / byeong', audioRef: null },
  ],

  pattern: {
    name: 'Native + counter (1-4 shrink)',
    explanation: "Number + counter, with Native 1-4 shrinking. 한 명, 두 잔, 세 병, 네 개. 5+ no shrinking: 다섯 명, 여섯 잔.",
    examples: [
      { target: '두 명', native: 'Two people' },
      { target: '세 잔', native: 'Three cups' },
      { target: '소주 한 병', native: 'One bottle of soju' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match counter to category', pairs: [
      { left: '명', right: 'People' },
      { left: '개', right: 'Things' },
      { left: '병', right: 'Bottles' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Two people', correct: ['두 명', 'du myeong'] },
    { type: 'fill_blank', instruction: 'Order three coffees', sentence: '커피 _____ 잔 주세요', options: ['세', '셋', '삼'], correct: '세', context: '셋 shrinks to 세 before 잔.' },
    { type: 'build_sentence', instruction: 'Build "One bottle of soju please"', words: ['주세요', '한 병', '소주'], correct: ['소주', '한 병', '주세요'], translation: 'One bottle of soju please.' },
    { type: 'multiple_choice', instruction: '"Five people". Native shrinks?', question: 'Pick the right form', options: [
      { text: '다섯 명 (no shrink)', correct: true },
      { text: '다 명 (shrunk)', correct: false },
      { text: '오 명 (Sino)', correct: false },
    ], explanation: 'Only 1-4 shrink. 5 stays 다섯. 명 is people-counter (Native).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Three cups (of coffee)', correct: ['세 잔', 'se jan'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ — you arrive with friends.",
    lines: [
      { speaker: 'npc', target: '몇 분이세요?', native: 'How many people? (honorific 분)' },
      { speaker: 'user', userChoices: [
        { target: '네 명이에요', native: 'Four people', correct: true, feedback: '네 (shrunk Native 4) + 명 = four people. Server seats you.' },
        { target: '넷 명이에요', native: 'Four (no shrink)', correct: false, feedback: 'Native 4 must shrink to 네 before 명.' },
        { target: '사 명이에요', native: 'Sino 4 (wrong system)', correct: false, feedback: 'Counting people uses Native, not Sino.' },
      ]},
      { speaker: 'npc', target: '네 분이세요. 이쪽으로 오세요!', native: 'Four (honorable persons). This way!' },
      { speaker: 'rwen', rwenLine: 'Counter words = mandatory. Native + shrink for 1-4. Server-friendly Korean.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Two people', correct: ['두 명', 'du myeong'] },
      { prompt: 'One bottle (counter)', correct: ['한 병', 'han byeong'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three counters today: 명 (people), 잔 (cups), 병 (bottles). Build one sentence with each.",
    rwenSignoff: "Counters lock the count. Korean shopping unlocks.",
  },

  phase8: {
    scenario: "Korean BBQ entry — you give the headcount, then order rounds of meat and drinks using counters.",
    rwenRole: "Server — polite, expects counter words.",
    successCriteria: "User uses 명 (people), 인분 (portions), 병/잔 (drinks) with Native shrinking 1-4. Stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
