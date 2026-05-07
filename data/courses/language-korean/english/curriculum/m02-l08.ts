import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-iyu',
  module: 2,
  lesson: 8,
  title: 'Igeo / Jeogeo — This and That',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korean has THREE 'this/that' words, not two. 이거 (this, near me), 그거 (that, near you), 저거 (that, far from both of us). The English 'that' splits into two depending on distance.",
    culturalNote: "Pointing is fine in Korea but combining a point with the right 이거/그거/저거 is more polite — your finger and your word agree.",
  },

  chunks: [
    { id: 'igeo', target: '이거', native: 'This (near me)', literal: 'this-thing', emoji: '👇', phonetic: 'i-geo', audioRef: null },
    { id: 'geugeo', target: '그거', native: 'That (near you)', literal: 'that-thing-near-you', emoji: '👉', phonetic: 'geu-geo', audioRef: null },
    { id: 'jeogeo', target: '저거', native: 'That (over there)', literal: 'that-thing-far', emoji: '👆', phonetic: 'jeo-geo', audioRef: null },
  ],

  pattern: {
    name: 'Three-distance pointing',
    explanation: "이 (near me), 그 (near you), 저 (far from both). Add 거 (thing) for 'this/that one'. Use as subject of 주세요 / 얼마예요? / 뭐예요?",
    examples: [
      { target: '이거 주세요', native: 'Please give me this' },
      { target: '저거 얼마예요?', native: 'How much is that (over there)?' },
      { target: '그거 뭐예요?', native: 'What is that (near you)?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match by distance', pairs: [
      { left: '이거', right: 'This (near me)' },
      { left: '그거', right: 'That (near you)' },
      { left: '저거', right: 'That (over there)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'This (near me)', correct: ['이거', 'igeo'] },
    { type: 'fill_blank', instruction: "Pointing at a sign across the street", sentence: '_____ 뭐예요?', options: ['저거', '이거', '그거'], correct: '저거', context: 'Far from you AND the listener.' },
    { type: 'build_sentence', instruction: 'Build "How much is that (over there)?"', words: ['얼마예요?', '저거'], correct: ['저거', '얼마예요?'], translation: 'How much is that (over there)?' },
    { type: 'multiple_choice', instruction: 'You\'re pointing at a phone in your hand. Which word?', question: 'Pick the right distance', options: [
      { text: '이거', correct: true },
      { text: '저거', correct: false },
      { text: '그거', correct: false },
    ], explanation: 'In your hand = near you = 이거.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'That (over there, far)', correct: ['저거', 'jeogeo'] },
  ],

  rwenDialogue: {
    intro: "Hongdae street market. You're at a stall pointing at items.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '저거 얼마예요?', native: 'How much is that (across the table)?', correct: true, feedback: 'Far point = 저거. Clean.' },
        { target: '이거 얼마예요?', native: 'How much is this (near me)?', correct: false, feedback: "It's far from you — use 저거." },
        { target: '주세요', native: 'Please give me', correct: false, feedback: "You haven't asked the price yet." },
      ]},
      { speaker: 'npc', target: '저거요? 만 원이에요.', native: 'That one? 10,000 won.' },
      { speaker: 'user', userChoices: [
        { target: '이거 주세요', native: 'Please give me this (now in my hand area)', correct: true, feedback: 'Once they bring it close, it becomes 이거.' },
        { target: '저거 주세요', native: 'Give me that (still over there)', correct: false, feedback: "It's between you now — closer to you = 이거." },
        { target: '안녕', native: 'Hi', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'rwen', rwenLine: "Distance matters in Korean pointing — three words, three rooms.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'This (near me)', correct: ['이거', 'igeo'] },
      { prompt: 'That (over there)', correct: ['저거', 'jeogeo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around the room. Pick three objects at three distances. Say 이거 / 그거 / 저거 to each.",
    rwenSignoff: "Three distances. Sharper than English.",
  },

  phase8: {
    scenario: "Hongdae street market. You're shopping and pointing at items at different distances — in hand, across the table, far across the alley.",
    rwenRole: "Vendor — 40s, patient, will play along.",
    successCriteria: "User correctly distinguishes 이거 / 그거 / 저거 by distance. At least one usage of each. Pairs with 주세요 or 얼마예요?.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
