import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-drinks',
  module: 7,
  lesson: 7,
  title: 'Kape, Tsaa, Juice — Drinks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipino mornings start with kape — usually instant, usually with condensed milk, always strong. Today we order the most personal cup of coffee in your life.",
    culturalNote: "Kape sa probinsya (provincial coffee) is often barako — strong, dark, slightly bitter — paired with pandesal. In cities, 3-in-1 sachet coffee dominates. 'Itim' (black) coffee surprises Filipinos a little; sweet and milky is the default.",
  },

  chunks: [
    {
      id: 'kape_na_may_gatas',
      target: 'Kape na may gatas',
      native: 'Coffee with milk',
      literal: 'Coffee that has milk',
      emoji: '☕',
      phonetic: 'KA-pe na may GA-tas',
      audioRef: null,
    },
    {
      id: 'itim_na_kape',
      target: 'Itim na kape',
      native: 'Black coffee',
      literal: 'Black coffee',
      emoji: '🖤',
      phonetic: 'i-TIM na KA-pe',
      audioRef: null,
    },
    {
      id: 'isang_baso_ng_tubig',
      target: 'Isang baso ng tubig',
      native: 'A glass of water',
      literal: 'One glass of water',
      emoji: '🥛',
      phonetic: 'i-SANG BA-so nang TU-big',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Na — the linker',
    explanation: "**Na** links a description to a noun. 'Itim na kape' = black coffee. 'Malamig na tubig' = cold water. 'Mainit na kape' = hot coffee. The order is description + na + noun.",
    examples: [
      { target: 'Mainit na kape', native: 'Hot coffee' },
      { target: 'Malamig na tubig', native: 'Cold water' },
      { target: 'Matamis na juice', native: 'Sweet juice' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the drink to its meaning',
      pairs: [
        { left: 'Kape na may gatas', right: 'Coffee with milk' },
        { left: 'Itim na kape', right: 'Black coffee' },
        { left: 'Isang baso ng tubig', right: 'A glass of water' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Hot afternoon in Cebu. You want cold water.",
      sentence: 'Isang baso ng _____ na tubig, po.',
      options: ['malamig', 'mainit', 'matamis'],
      correct: 'malamig',
      context: 'Malamig = cold. Mainit = hot. Matamis = sweet.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Coffee with milk',
      correct: ['Kape na may gatas', 'kape na may gatas'],
    },
    {
      type: 'build_sentence',
      instruction: 'Order black coffee',
      words: ['kape', 'Itim', 'na'],
      correct: ['Itim', 'na', 'kape'],
      translation: 'Black coffee',
    },
    {
      type: 'multiple_choice',
      instruction: "It's 7am in a Manila café. You want strong, no-milk coffee. What's the right phrase?",
      question: 'Choose the correct order',
      options: [
        { text: 'Itim na kape, po', correct: true },
        { text: 'Kape na may gatas, po', correct: false },
        { text: 'Isang baso ng tubig, po', correct: false },
      ],
      explanation: "Itim na kape — black coffee. The barista will probably ask twice to make sure you're sure.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'A glass of water',
      correct: ['Isang baso ng tubig', 'isang baso ng tubig'],
    },
  ],

  rwenDialogue: {
    intro: "Quezon City, 7am. You walk into a small café. The barista smiles and waits.",
    lines: [
      {
        speaker: 'npc',
        target: 'Magandang umaga po. Anong inumin?',
        native: 'Good morning. What drink?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kape na may gatas, po', native: 'Coffee with milk, please', correct: true, feedback: "Perfect Filipino default — sweet enough, hot enough." },
          { target: 'Mesa para sa dalawa, po', native: 'A table for two, please', correct: false, feedback: "Different scene — she's asking what you'll drink." },
          { target: 'Bill po', native: 'The bill, please', correct: false, feedback: "You haven't ordered yet!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, isang minuto.',
        native: 'Sure — one minute.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Coffee handled. The day can begin.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Coffee with milk (in Tagalog)', correct: ['Kape na may gatas', 'kape na may gatas'] },
      { prompt: 'Black coffee (in Tagalog)', correct: ['Itim na kape', 'itim na kape'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you order a coffee or water — anywhere — order it once, silently, in Tagalog first. Build the muscle memory.",
    rwenSignoff: "Bukas, ulam pinoy. Tomorrow, the real food.",
  },

  phase8: {
    scenario: "Hot Manila morning. You're at a small café in Makati before a meeting. You want one specific drink — milky-sweet kape, black kape, or just a glass of cold water — and you need to order it cleanly with 'po'.",
    rwenRole: "Ate Joy — barista, ~28yo, friendly and chatty; will repeat your order back and ask about size or sweetness, giving you a second turn to refine in Tagalog.",
    successCriteria: "User orders one drink using a 'description + na + noun' phrase (itim na kape / kape na may gatas / malamig na tubig) plus 'po', and confirms or adjusts when the barista repeats the order back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
