import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-food-vocabulary',
  module: 7,
  lesson: 2,
  title: 'Zvokudya — Food Vocabulary',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beyond sadza lies a whole world of Zimbabwean food. Dovi (peanut butter sauce), chingwa (bread), mazai (eggs), muriwo (vegetables). These are the words that fill tables and conversations across Zimbabwe.",
    culturalNote: "Zimbabwean food is deeply communal. Meals are shared from central dishes — everyone eats together. The act of sharing food (kudya pamwe) is one of the most important social bonds. Even strangers are fed.",
  },

  chunks: [
    {
      id: 'zvokudya',
      target: 'Zvokudya',
      native: 'Food (general)',
      literal: 'Zvo-kudya (things-to-eat)',
      emoji: '🍽️',
      phonetic: 'zvo-KU-dya',
      audioRef: null,
    },
    {
      id: 'dovi',
      target: 'Dovi',
      native: 'Peanut butter / Groundnut sauce',
      literal: 'Dovi (peanut relish)',
      emoji: '🥜',
      phonetic: 'DO-vi',
      audioRef: null,
    },
    {
      id: 'chingwa',
      target: 'Chingwa',
      native: 'Bread',
      literal: 'Chi-ngwa (bread, Class 7)',
      emoji: '🍞',
      phonetic: 'CHING-wa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zvokudya — things-to-eat (Zvo- class)',
    explanation: "'Zvokudya' uses the Zvi/Zvo- prefix (Class 8 plural things). Zvo-kudya = things of eating. This pattern creates many food-related words: zvokunamatira (things to drink with), zvokutengesa (things to sell).",
    examples: [
      { target: 'Zvokudya zvakanaka', native: 'The food is good (Zvi class agreement)' },
      { target: 'Ndinoda zvokudya', native: 'I want food' },
      { target: 'Zvokudya zvakawanda', native: 'There is a lot of food' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the food to its meaning',
      pairs: [
        { left: 'Zvokudya', right: 'Food' },
        { left: 'Dovi', right: 'Peanut butter sauce' },
        { left: 'Chingwa', right: 'Bread' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "the food is delicious"',
      sentence: 'Zvokudya _____ zvakanakisisa.',
      options: ['izvi', 'ava', 'uyu'],
      correct: 'izvi',
      context: 'This food is excellent.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Food',
      correct: ['Zvokudya', 'zvokudya'],
    },
    {
      type: 'multiple_choice',
      instruction: "Dovi is which type of food?",
      question: 'What is dovi?',
      options: [
        { text: 'Peanut butter / Groundnut sauce', correct: true },
        { text: 'Bread', correct: false },
        { text: 'Meat', correct: false },
      ],
      explanation: "Dovi is a peanut butter or groundnut-based sauce eaten with sadza — a Zimbabwean classic.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I love bread'",
      words: ['Ndinoda', 'chingwa.'],
      correct: ['Ndinoda', 'chingwa.'],
      translation: 'I love bread',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Bread',
      correct: ['Chingwa', 'chingwa'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's grandmother asks what food you enjoy. Be honest and curious.",
    lines: [
      {
        speaker: 'npc',
        target: 'Unoda zvokudya zvipi?',
        native: 'What food do you like?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoda sadza ne dovi. Uye ndinoda chingwa zvakare.', native: 'I like sadza with dovi. And I also like bread.', correct: true, feedback: "Specific food preferences — and 'zvakare' (also) shows you're comfortable building sentences." },
          { target: 'Ndinoda sadza', native: 'I like sadza', correct: false, feedback: "Add more! 'Ndinoda sadza ne dovi. Uye ndinoda chingwa zvakare.' Show your full food vocabulary." },
          { target: 'Zvokudya zvakanaka', native: 'Food is good', correct: false, feedback: "Be specific — what foods do you like? 'Ndinoda sadza ne dovi. Ndinoda chingwa.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ambuya vanofarira. Vanotofuta dovi rezvitsva rekubudisa. She'll make you fresh dovi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Food', correct: ['Zvokudya', 'zvokudya'] },
      { prompt: 'Bread', correct: ['Chingwa', 'chingwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name every food in your kitchen in Shona today — or look up the ones you don't know. Start with: Chingwa (bread), Mazai (eggs), Nyama (meat), Muriwo (vegetables).",
    rwenSignoff: "Food is culture. Name it in Shona. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Sunday lunch is being laid out on a long table at a Murehwa rural homestead. Bowls of dovi, plates of chingwa, mazai boiled in their shells, and a steaming pot of sadza all crowd the cloth — and the host's daughter is asking, in Shona, what you actually want on your plate.",
    rwenRole: "Tendai — the host's daughter, early 20s, energetic and curious; she serves the guests and quizzes the user on the names of each dish before scooping anything onto their plate.",
    successCriteria: "User names at least three foods correctly using the right vocabulary (e.g., 'dovi' for the peanut sauce, 'chingwa' for bread, 'zvokudya' as the umbrella term — NOT mixing up 'sadza' for 'chingwa'), and uses 'Ndinoda... ne...' to compose a request rather than just pointing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
