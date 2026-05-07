import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-kimchi',
  module: 7,
  lesson: 2,
  title: 'Kimchi — Spicy, Sour, Always',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "김치 (kimchi) is on every Korean table — meal of the day, no exceptions. Made from fermented napa cabbage, gochugaru (chili powder), garlic, ginger, fish sauce. 매워요 (it's spicy) is the survival reaction.",
    culturalNote: "Kimchi varieties: 배추김치 (cabbage), 깍두기 (radish cubes), 오이김치 (cucumber), 백김치 (white, non-spicy). Asking 김치 종류가 뭐예요? at a restaurant earns respect.",
  },

  chunks: [
    { id: 'kimchi', target: '김치', native: 'Kimchi (fermented vegetable)', literal: 'kimchi', emoji: '🥬', phonetic: 'kim-chi', audioRef: null },
    { id: 'maewoyo', target: '매워요', native: "It's spicy", literal: 'spicy-yo', emoji: '🌶️', phonetic: 'mae-wo-yo', audioRef: null },
    { id: 'masisseoyo', target: '맛있어요', native: "It's delicious", literal: 'taste-exists-yo', emoji: '😋', phonetic: 'ma-shi-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Taste reactions',
    explanation: "맛있어요 (delicious), 맛없어요 (not tasty), 매워요 (spicy), 짜요 (salty), 달아요 (sweet). Pair with the food: 김치가 맛있어요.",
    examples: [
      { target: '김치가 맛있어요', native: 'The kimchi is delicious' },
      { target: '너무 매워요!', native: "It's too spicy!" },
      { target: '안 매워요', native: "It's not spicy" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match taste to Korean', pairs: [
      { left: '맛있어요', right: 'Delicious' },
      { left: '매워요', right: 'Spicy' },
      { left: '짜요', right: 'Salty' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's spicy", correct: ['매워요', 'maewoyo'] },
    { type: 'fill_blank', instruction: 'Praise the kimchi', sentence: '김치가 정말 _____.', options: ['맛있어요', '비싸요', '없어요'], correct: '맛있어요', context: 'Compliment the food.' },
    { type: 'build_sentence', instruction: 'Build "It\'s too spicy!"', words: ['매워요!', '너무'], correct: ['너무', '매워요!'], translation: "It's too spicy!" },
    { type: 'multiple_choice', instruction: "Server asks how the kimchi is. You love it. Best reply?", question: 'Pick the warm compliment', options: [
      { text: '정말 맛있어요!', correct: true },
      { text: '비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: '정말 (really) + 맛있어요 = warm food praise. Restaurant ahjummas love it.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's delicious", correct: ['맛있어요', 'masisseoyo'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ. The owner brings out the kimchi.",
    lines: [
      { speaker: 'npc', target: '김치 어때요?', native: 'How is the kimchi?' },
      { speaker: 'user', userChoices: [
        { target: '정말 맛있어요!', native: 'Really delicious!', correct: true, feedback: 'Owner beams.' },
        { target: '맛없어요', native: 'Not tasty', correct: false, feedback: 'Direct rejection of homemade kimchi = harsh.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong question.' },
      ]},
      { speaker: 'npc', target: '집에서 직접 만들었어요!', native: 'I made it at home myself!' },
      { speaker: 'rwen', rwenLine: "Praising kimchi is its own social ritual. 맛있어요 always wins.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "It's spicy", correct: ['매워요', 'maewoyo'] },
      { prompt: "It's delicious", correct: ['맛있어요', 'masisseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three taste words: 맛있어요, 매워요, 짜요. Pair each with a food in your head. Out loud.",
    rwenSignoff: "Tastes are the universal Korean small talk. Use them.",
  },

  phase8: {
    scenario: "First Korean BBQ — owner brings homemade kimchi. You react to taste authentically.",
    rwenRole: "Restaurant owner — 60s, proud of homemade kimchi.",
    successCriteria: "User uses 맛있어요 + 매워요/너무 매워요 as appropriate. Compliments politely. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
