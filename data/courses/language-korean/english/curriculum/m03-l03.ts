import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-myeotsal',
  module: 3,
  lesson: 3,
  title: 'Myeot Sal-iseyo? — How Old Are You?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Korea, age is not small talk — it's hierarchy software. Knowing each other's age sets which form of 'you' to use, who pours drinks, who pays. 몇 살이세요? = how old are you? Always asked early.",
    culturalNote: "Korean age is calculated +1 from international age (you're 1 at birth, gain a year on Lunar New Year). As of 2023 the law unified to international age, but many people still default to Korean age socially. When in doubt, give both.",
  },

  chunks: [
    { id: 'myeot_sal', target: '몇 살이세요?', native: 'How old are you? (polite)', literal: 'how-many years-old?', emoji: '🎂', phonetic: 'myeot sal-i-se-yo', audioRef: null },
    { id: 'sal', target: '___살이에요', native: 'I am ___ years old', literal: '___-years-old', emoji: '🎈', phonetic: '___-sal-i-e-yo', audioRef: null },
    { id: 'dongkap', target: '동갑이에요', native: "We're the same age", literal: 'same-armor-yo', emoji: '🤝', phonetic: 'dong-gap-i-e-yo', audioRef: null },
  ],

  pattern: {
    name: 'Age decides the relationship',
    explanation: "Once age is known, the older person can shift to banmal (with permission) and gets a hierarchy nod. Same age = 동갑 = potential close friends.",
    examples: [
      { target: '몇 살이세요?', native: 'How old are you? (polite)' },
      { target: '저는 30살이에요', native: 'I am 30' },
      { target: '저희 동갑이에요!', native: "We're the same age!" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '몇 살이세요?', right: 'How old are you?' },
      { left: '___살이에요', right: 'I am ___ years old' },
      { left: '동갑이에요', right: "We're the same age" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'How old are you? (polite)', correct: ['몇 살이세요?', 'myeot sariseyo'] },
    { type: 'fill_blank', instruction: 'You and a new friend turn out to be the same age', sentence: '아, 우리 _____!', options: ['동갑이에요', '비싸요', '안녕히 가세요'], correct: '동갑이에요', context: 'Same age = bond unlocked.' },
    { type: 'build_sentence', instruction: 'Build "I am 25 years old"', words: ['25살이에요', '저는'], correct: ['저는', '25살이에요'], translation: 'I am 25 years old.' },
    { type: 'multiple_choice', instruction: 'You discover your new Korean friend is two years older. What changes?', question: 'Pick the cultural shift', options: [
      { text: 'You start using respectful language; they may shift to banmal with you', correct: true },
      { text: 'Nothing — age is small talk only', correct: false },
      { text: 'You both must use formal forever', correct: false },
    ], explanation: 'Age sets hierarchy. Older person can shift down; younger stays polite.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "We're the same age", correct: ['동갑이에요', 'donggapieyo'] },
  ],

  rwenDialogue: {
    intro: "You meet a Korean of your generation at a Seoul cafe meetup.",
    lines: [
      { speaker: 'npc', target: '몇 살이세요?', native: 'How old are you?' },
      { speaker: 'user', userChoices: [
        { target: '저는 30살이에요. 몇 살이세요?', native: "I'm 30. How old are you?", correct: true, feedback: 'Answer + bounce — that\'s the natural rhythm.' },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: "Wrong question — they asked age, not price." },
        { target: '잘 부탁드립니다', native: 'Please take care of me', correct: false, feedback: "That's an intro closer, not an age answer." },
      ]},
      { speaker: 'npc', target: '저도 30살이에요! 동갑이에요!', native: "I'm 30 too! We're the same age!" },
      { speaker: 'rwen', rwenLine: "Age = the social pin in Korea. Once you know each other's, the relationship template clicks into place.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How old are you? (polite)', correct: ['몇 살이세요?', 'myeot sariseyo'] },
      { prompt: 'I am ___ years old', correct: ['저는 ___살이에요', 'jeoneun ___ sarieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice your age sentence: 저는 [age]살이에요. Then ask back: 몇 살이세요? Picture the scene.",
    rwenSignoff: "Age in Korean = relationship blueprint. Now you have the pin.",
  },

  phase8: {
    scenario: "Korean language exchange. Two new acquaintances are figuring out the age hierarchy.",
    rwenRole: "Korean peer — same generation, polite.",
    successCriteria: "User answers age with 저는 ___살이에요. Asks back with 몇 살이세요? Recognizes 동갑 if same age.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
