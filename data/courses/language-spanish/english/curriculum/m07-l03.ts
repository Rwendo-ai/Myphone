import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-staples',
  module: 7,
  lesson: 3,
  title: 'Arroz, Frijoles, Tortillas — The Staples',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Across most of Latin America, three foods anchor the plate: arroz (rice), frijoles (beans), and tortillas (in Mexico) or pan (in the Southern Cone). Master these three and you can read 80% of any menu from Tijuana to Santiago.",
    culturalNote: "Bean vocabulary changes country to country. 'Frijoles' in Mexico and Central America. 'Porotos' in Chile and Argentina. 'Habichuelas' or 'judías' in parts of the Caribbean and Spain. 'Caraotas' in Venezuela. Same legume, four words — pick the regional one or risk a confused waiter.",
  },

  chunks: [
    {
      id: 'arroz',
      target: 'el arroz',
      native: 'rice',
      literal: 'el arroz — rice',
      emoji: '🍚',
      phonetic: 'el ah-ROHS',
      audioRef: null,
    },
    {
      id: 'frijoles',
      target: 'los frijoles',
      native: 'beans (MX/Central Am.) — porotos in AR/CL',
      literal: 'los frijoles — beans (regional)',
      emoji: '🫘',
      phonetic: 'lohs free-HOH-les',
      audioRef: null,
    },
    {
      id: 'pollo',
      target: 'el pollo',
      native: 'chicken',
      literal: 'el pollo — chicken',
      emoji: '🍗',
      phonetic: 'el POH-yoh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Con — pairing foods together',
    explanation: "'Con' (with) connects a base food to its accompaniment, just like the Shona 'ne' or English 'with'. Arroz con pollo (rice with chicken), frijoles con tortillas (beans with tortillas), pollo con arroz. It's the most useful preposition on any menu.",
    examples: [
      { target: 'arroz con pollo', native: 'rice with chicken' },
      { target: 'frijoles con tortillas', native: 'beans with tortillas' },
      { target: 'pollo con frijoles', native: 'chicken with beans' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the staple to its meaning',
      pairs: [
        { left: 'el arroz', right: 'rice' },
        { left: 'los frijoles', right: 'beans (Mexico)' },
        { left: 'el pollo', right: 'chicken' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order rice with chicken',
      sentence: 'Quiero arroz _____ pollo, por favor.',
      options: ['con', 'y', 'de'],
      correct: 'con',
      context: 'I want rice with chicken — "con" is the food-pairing word.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'rice with chicken',
      correct: ['arroz con pollo', 'el arroz con pollo'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Buenos Aires ordering beans. Which word do you use?",
      question: 'Beans in Argentina:',
      options: [
        { text: 'porotos', correct: true },
        { text: 'frijoles', correct: false },
        { text: 'habichuelas', correct: false },
      ],
      explanation: "Argentina/Chile = porotos. Mexico/Central America = frijoles. Spain = judías. Venezuela = caraotas. Same bean, regional words — saying 'frijoles' in Buenos Aires marks you as a non-local instantly (which is fine, but worth knowing).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I want chicken with rice'",
      words: ['Quiero', 'pollo', 'con', 'arroz.'],
      correct: ['Quiero', 'pollo', 'con', 'arroz.'],
      translation: "I want chicken with rice",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'chicken',
      correct: ['el pollo', 'pollo'],
    },
  ],

  rwenDialogue: {
    intro: "You're in a small comedor in Oaxaca. The cook calls out the day's menu from behind the counter.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hoy hay arroz, frijoles, pollo en mole y tortillas hechas a mano. ¿Qué se le antoja?',
        native: "Today we have rice, beans, chicken in mole, and handmade tortillas. What do you fancy?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Quiero pollo con arroz y frijoles, por favor. Y unas tortillas.', native: "I'd like chicken with rice and beans, please. And some tortillas.", correct: true, feedback: "Clean order using 'con' to pair the staples. The cook nods and you've eaten well already in your head." },
          { target: 'Quiero pollo y arroz frijoles', native: 'I want chicken and rice beans (no preposition)', correct: false, feedback: "You need 'con' to pair the staples: 'pollo con arroz y frijoles.' Without it, the words just collide." },
          { target: 'Quiero porotos', native: 'I want porotos (Argentine word in Mexico)', correct: false, feedback: "In Mexico, beans = frijoles. 'Porotos' is Argentine/Chilean. Try 'Quiero pollo con arroz y frijoles.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Va saliendo. ¿Picante o suave?',
        native: 'Coming right up. Spicy or mild?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three staples, one preposition, one full plate. Arroz con pollo — the most ordered phrase in the Spanish-speaking world.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'rice with chicken', correct: ['arroz con pollo', 'el arroz con pollo'] },
      { prompt: 'beans (Mexico)', correct: ['los frijoles', 'frijoles'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at any pantry today and name three things in Spanish: el arroz, los frijoles, el pollo (or el pan, los huevos, la leche). Pair two of them: 'arroz con frijoles'. The pairing pattern unlocks half a menu.",
    rwenSignoff: "Hasta mañana — los frijoles esperan.",
  },

  phase8: {
    scenario: "It's lunchtime at a comedor familiar in Oaxaca. The handwritten menu on the wall lists arroz, frijoles, pollo en mole, and tortillas a mano. The cook, behind the counter, calls out the day's options and is waiting for you to choose your combinación. The plate that lands on your table will depend entirely on your Spanish in the next 60 seconds.",
    rwenRole: "Doña Lupe — cook and owner, 60s, knows every regular by name; will gently correct an Argentinian-bean slip and reward a clean Mexican order with extra salsa.",
    successCriteria: "User uses 'frijoles' (NOT porotos / habichuelas) since the scenario is Mexico, pairs staples with 'con' ('arroz con pollo', 'pollo con frijoles'), opens with 'Quiero...' or 'Me trae...' (NOT bare nouns), and treats tortillas as the corn flatbread accompaniment, not the Spanish omelette.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
