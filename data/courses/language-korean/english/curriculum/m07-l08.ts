import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-allergy',
  module: 7,
  lesson: 8,
  title: 'Allergies & Dietary Restrictions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Saying you can't eat something matters in Korea — many dishes hide ingredients (anchovy stock, sesame, peanut). 알레르기 있어요 (I have an allergy). 못 먹어요 (I can't eat).",
    culturalNote: "Vegetarianism is harder in Korea than the West — many soups have anchovy stock invisibly. Vegan = 비건. 채식주의자 (vegetarian) is increasingly understood at trendy spots, but verify per-dish.",
  },

  chunks: [
    { id: 'allergy', target: '알레르기 있어요', native: 'I have an allergy', literal: 'allergy exist-yo', emoji: '🤧', phonetic: 'al-le-reu-gi i-sseo-yo', audioRef: null },
    { id: 'motmeogeoyo', target: '못 먹어요', native: "I can't eat (it)", literal: 'cannot eat-yo', emoji: '🚫', phonetic: 'mot meo-geo-yo', audioRef: null },
    { id: 'chaesik', target: '채식주의자예요', native: 'I am a vegetarian', literal: 'vegetable-eater-am', emoji: '🥗', phonetic: 'chae-sik-ju-ui-ja-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'X 못 먹어요 / X 알레르기 있어요',
    explanation: "Item + 못 먹어요 (can't eat) or + 알레르기 있어요 (have allergy). Used widely in Korean restaurants once you flag it.",
    examples: [
      { target: '땅콩 알레르기 있어요', native: 'I have a peanut allergy' },
      { target: '돼지고기 못 먹어요', native: "I can't eat pork" },
      { target: '저는 채식주의자예요', native: 'I am a vegetarian' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '알레르기', right: 'Allergy' },
      { left: '못 먹어요', right: "Can't eat" },
      { left: '채식주의자', right: 'Vegetarian' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I can't eat pork", correct: ['돼지고기 못 먹어요', 'dwaejigogi mot meogeoyo'] },
    { type: 'fill_blank', instruction: 'Flag a peanut allergy', sentence: '땅콩 _____.', options: ['알레르기 있어요', '맛있어요', '얼마예요'], correct: '알레르기 있어요', context: 'Allergy declaration.' },
    { type: 'build_sentence', instruction: 'Build "I am a vegetarian"', words: ['저는', '채식주의자예요'], correct: ['저는', '채식주의자예요'], translation: 'I am a vegetarian.' },
    { type: 'multiple_choice', instruction: "You can't eat seafood. Best to flag at a restaurant?", question: 'Pick the clear declaration', options: [
      { text: '해산물 못 먹어요. 알레르기 있어요', correct: true },
      { text: '비싸요', correct: false },
      { text: '안녕', correct: false },
    ], explanation: 'Item + 못 먹어요 + reason — clear and safe.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I have an allergy', correct: ['알레르기 있어요', 'allereugi isseoyo'] },
  ],

  rwenDialogue: {
    intro: "Korean restaurant menu. Server stands ready.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '저는 채식주의자예요. 고기 못 먹어요', native: 'I am a vegetarian. Can\'t eat meat', correct: true, feedback: 'Clear flag — server adjusts.' },
        { target: '맛있어요', native: 'Delicious', correct: false, feedback: 'You haven\'t eaten yet — flag the restriction first.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 알겠어요. 비빔밥은 어떠세요?', native: 'Ah, understood. How about bibimbap?' },
      { speaker: 'rwen', rwenLine: "Allergies + restrictions: flag early, flag clearly. Korean restaurants accommodate.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I can't eat (something)", correct: ['못 먹어요', 'mot meogeoyo'] },
      { prompt: 'I have an allergy', correct: ['알레르기 있어요', 'allereugi isseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick something you can't eat. Build the Korean: [item] 못 먹어요 / 알레르기 있어요.",
    rwenSignoff: "Flag early. Korean kitchens adjust.",
  },

  phase8: {
    scenario: "Korean restaurant. You flag a dietary restriction or allergy before ordering.",
    rwenRole: "Server — polite, accommodating.",
    successCriteria: "User uses 못 먹어요 / 알레르기 있어요 / 채식주의자예요 clearly. Stays polite. Server suggests an alternative.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
