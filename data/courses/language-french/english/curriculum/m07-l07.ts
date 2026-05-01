import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Le café, le thé, le vin — Drinks',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Lunch at a brasserie. The serveur asks 'Et à boire?' — and to drink? Three answers will carry you through 90% of French meals: a coffee with milk, a glass of wine, and the secret weapon of every smart French diner — a free pichet d'eau.",
    culturalNote: "Tap water is free in any French restaurant — by law. But you have to ASK. The phrase is 'un pichet d'eau' (a jug of water) or 'une carafe d'eau'. Ask for 'de l'eau' alone and they may bring you €5 of bottled water. Locals always order the pichet — it's an insider move.",
  },

  chunks: [
    {
      id: 'un_cafe_au_lait',
      target: 'un café au lait',
      native: 'a coffee with milk',
      literal: 'a coffee with milk',
      emoji: '☕',
      phonetic: 'uhn kah-FAY oh LAY',
      audioRef: null,
    },
    {
      id: 'un_verre_de_vin',
      target: 'un verre de vin rouge',
      native: 'a glass of red wine',
      literal: 'a glass of wine red',
      emoji: '🍷',
      phonetic: 'uhn VAIR duh vahn ROOZH',
      audioRef: null,
    },
    {
      id: 'un_pichet_deau',
      target: "un pichet d'eau",
      native: 'a jug of (tap) water',
      literal: 'a jug of-water',
      emoji: '🚰',
      phonetic: 'uhn pee-SHAY DOH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Drinks: a [container] of [drink]',
    explanation: "Drinks order with a container word: **un verre de** (a glass of), **un pichet de** (a jug of), **une bouteille de** (a bottle of), **une tasse de** (a cup of). Wine takes a colour: **vin rouge** (red), **vin blanc** (white), **vin rosé**. Coffee with milk: **un café au lait** (notice 'au' = à+le).",
    examples: [
      { target: 'un verre de vin blanc', native: 'a glass of white wine' },
      { target: 'une bouteille de vin rouge', native: 'a bottle of red wine' },
      { target: 'une tasse de thé', native: 'a cup of tea' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each drink to its meaning',
      pairs: [
        { left: 'un café au lait', right: 'a coffee with milk' },
        { left: 'un verre de vin rouge', right: 'a glass of red wine' },
        { left: "un pichet d'eau", right: 'a jug of (tap) water' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want free tap water at a brasserie. What do you ask for?",
      question: "Pick the insider move",
      options: [
        { text: "Un pichet d'eau, s'il vous plaît", correct: true },
        { text: "Une bouteille d'eau", correct: false },
        { text: "De l'eau", correct: false },
      ],
      explanation: "'Un pichet d'eau' (or 'une carafe d'eau') is the magic phrase for free tap water. 'Une bouteille' will get you €5 bottled water; 'de l'eau' alone is ambiguous.",
    },
    {
      type: 'fill_blank',
      instruction: "Order a glass of red wine",
      sentence: 'Un verre _____ vin rouge, s\'il vous plaît.',
      options: ['de', 'du', "d'"],
      correct: 'de',
      context: "Container + de + drink: un verre DE vin.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'a coffee with milk',
      correct: ['un café au lait'],
    },
    {
      type: 'build_sentence',
      instruction: "Order — 'I'd like a glass of white wine, please'",
      words: ["voudrais", "blanc,", "Je", "verre", "vin", "un", "de", "s'il vous plaît"],
      correct: ["Je", "voudrais", "un", "verre", "de", "vin", "blanc,", "s'il vous plaît"],
      translation: "I'd like a glass of white wine, please",
    },
    {
      type: 'translate',
      instruction: 'Type in French — the insider move',
      prompt: 'a jug of (tap) water',
      correct: ["un pichet d'eau"],
    },
  ],

  rwenDialogue: {
    intro: "Lunch at a brasserie in Lyon. You've ordered the plat du jour. The serveur looks at you over his pen.",
    lines: [
      {
        speaker: 'npc',
        target: "Et à boire avec ça?",
        native: "And to drink with that?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Un verre de vin rouge et un pichet d'eau, s'il vous plaît", native: "A glass of red wine and a jug of water, please", correct: true, feedback: "Local move — wine plus the free pichet. He nods like you've lived here a year." },
          { target: "Une bouteille d'eau", native: "A bottle of water", correct: false, feedback: "He'll bring you €5 bottled water. Ask for 'un pichet d'eau' for free tap water." },
          { target: "De l'eau", native: "Water", correct: false, feedback: "Ambiguous — he might charge you. Always specify 'un pichet d'eau' or 'une carafe d'eau'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Très bien. Le vin de la maison?",
        native: "Very good. House wine?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Pichet ordered, wine ordered. You just ate like a local for €5 less. Welcome to the inside.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'a glass of red wine (in French)',
        correct: ['un verre de vin rouge'],
      },
      {
        prompt: 'a jug of (tap) water (in French)',
        correct: ["un pichet d'eau"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise the magic phrase: 'Un pichet d'eau, s'il vous plaît'. Say it three times out loud now. The next time you're in a French restaurant, it'll save you a fiver.",
    rwenSignoff: "The locals' line is now yours. À demain.",
  },

  phase8: {
    scenario: "It's 1pm at a brasserie in the Vieux Lyon. You've just ordered the plat du jour — entrecôte frites. The serveur waits, pen poised: 'Et à boire?' You want a glass of red house wine, free tap water (the pichet), and an espresso for after the meal. He's seen tourists fumble this hundreds of times.",
    rwenRole: "Bernard — old-school brasserie serveur, ~55, gruff but appreciative; he relaxes the moment a customer says 'un pichet d'eau' (locals' move) and warms further with a clean wine order.",
    successCriteria: "User orders (a) wine with colour specified — un verre de vin rouge/blanc, (b) free tap water explicitly — un pichet d'eau OR une carafe d'eau (NOT 'une bouteille' or vague 'de l'eau'), and (c) coffee at the end. All three handled in clean French.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
