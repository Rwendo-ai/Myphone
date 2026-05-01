import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-french-food',
  module: 7,
  lesson: 8,
  title: 'Cuisine française — French Food You Half-Know',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Croissant. Crème brûlée. Baguette. You already know these words — you say them every week. But you say them with English mouths. Today: the real French versions, plus the secret distinction every Parisian makes when buying bread.",
    culturalNote: "Walk into a boulangerie and ask for 'une baguette' and you'll get the standard one — fine, fast, made with industrial flour. Ask for 'une baguette tradition' (or 'une tradition' for short) and you'll get the artisanal version: longer fermentation, hand-shaped, irregular crust. Same with croissant: 'au beurre' (with butter — proper) vs ordinaire (with margarine). Knowing the distinction is a small but real social signal.",
  },

  chunks: [
    {
      id: 'baguette_tradition',
      target: 'une baguette tradition',
      native: 'a traditional (artisanal) baguette',
      literal: 'a baguette tradition',
      emoji: '🥖',
      phonetic: 'oon bah-GET trah-dee-SYOHN',
      audioRef: null,
    },
    {
      id: 'croissant_au_beurre',
      target: 'un croissant au beurre',
      native: 'a butter croissant',
      literal: 'a croissant with-the butter',
      emoji: '🥐',
      phonetic: 'uhn krwah-SAHN oh BUHR',
      audioRef: null,
    },
    {
      id: 'creme_brulee',
      target: 'la crème brûlée',
      native: 'crème brûlée (burnt cream dessert)',
      literal: 'the cream burnt',
      emoji: '🍮',
      phonetic: 'lah krem broo-LAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modifying food nouns',
    explanation: "French food names often pair a noun with a modifier — and the modifier matters. **Baguette tradition** vs ordinaire (artisanal vs standard). **Croissant au beurre** vs ordinaire (butter vs margarine). The pattern **noun + au + ingredient** = 'with [ingredient]': tarte au citron, croissant au beurre, café au lait.",
    examples: [
      { target: 'une tarte au citron', native: 'a lemon tart (with lemon)' },
      { target: 'un pain au chocolat', native: 'a chocolate pastry (with chocolate)' },
      { target: 'un café au lait', native: 'a coffee with milk' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each French food to its meaning',
      pairs: [
        { left: 'une baguette tradition', right: 'a traditional baguette' },
        { left: 'un croissant au beurre', right: 'a butter croissant' },
        { left: 'la crème brûlée', right: 'crème brûlée' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want the artisanal hand-shaped baguette, not the standard one. Which do you ask for?",
      question: "Pick the connoisseur's order",
      options: [
        { text: "Une baguette tradition, s'il vous plaît", correct: true },
        { text: "Une baguette ordinaire", correct: false },
        { text: "Un pain", correct: false },
      ],
      explanation: "'Tradition' (also called 'tradi') is the artisanal grade. Asking for 'ordinaire' will explicitly get you the basic one. 'Pain' is generic bread, not a baguette.",
    },
    {
      type: 'fill_blank',
      instruction: "Pattern — 'with butter' uses what word?",
      sentence: 'Un croissant _____ beurre, s\'il vous plaît.',
      options: ['au', 'de', 'avec'],
      correct: 'au',
      context: "noun + au + ingredient = 'with [ingredient]'. Au beurre, au chocolat, au lait.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'a butter croissant',
      correct: ['un croissant au beurre'],
    },
    {
      type: 'build_sentence',
      instruction: "Build — 'I'd like a traditional baguette, please'",
      words: ["tradition,", "voudrais", "Je", "une", "s'il vous plaît", "baguette"],
      correct: ["Je", "voudrais", "une", "baguette", "tradition,", "s'il vous plaît"],
      translation: "I'd like a traditional baguette, please",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'crème brûlée',
      correct: ['la crème brûlée', 'crème brûlée'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8am. You're at the corner boulangerie. The boulangère looks up — she's seen a thousand tourists ask for 'une baguette' and walk out with the basic one. Today, you order like a regular.",
    lines: [
      {
        speaker: 'npc',
        target: "Bonjour, qu'est-ce que ce sera?",
        native: "Hello, what will it be?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonjour, une baguette tradition et un croissant au beurre, s'il vous plaît", native: "Hello, a traditional baguette and a butter croissant, please", correct: true, feedback: "She raises an eyebrow — that's a regular's order. The bread that comes out is the good one." },
          { target: "Bonjour, une baguette et un croissant", native: "Hello, a baguette and a croissant", correct: false, feedback: "You'll get the basic versions. Specify 'tradition' and 'au beurre' to get the artisanal ones." },
          { target: "Une baguette ordinaire", native: "A standard baguette", correct: false, feedback: "Ouch — that's literally asking for the cheap one. Try 'baguette tradition' instead." },
        ],
      },
      {
        speaker: 'npc',
        target: "Très bon choix. Et avec ça?",
        native: "Excellent choice. Anything else?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'très bon choix'? She doesn't say that to tourists. You ordered like a Parisian.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'a traditional baguette (in French)',
        correct: ['une baguette tradition'],
      },
      {
        prompt: 'a butter croissant (in French)',
        correct: ['un croissant au beurre'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a favourite French food you order in English (croissant, baguette, brioche). Practise saying it three times in proper French — mouth and lips fully French. Croissant is 'krwah-SAHN', not 'kruh-sahnt'.",
    rwenSignoff: "Half-knowing is over. À demain.",
  },

  phase8: {
    scenario: "It's 8:15am Saturday at a small boulangerie in Montmartre. The line is short. You want a traditional baguette, two butter croissants, and to ask if they have crème brûlée for tonight. The boulangère, Madame Sylvie, has heard every tourist version of these words and rewards anyone who orders properly.",
    rwenRole: "Madame Sylvie — boulangère, ~50, proud of her artisanal goods; she lights up when customers specify 'tradition' and 'au beurre' instead of generic terms, and she politely steers Anglophones toward the right grade if they fumble.",
    successCriteria: "User specifies 'baguette tradition' (NOT just 'baguette'), 'croissant au beurre' (NOT just 'croissant'), and asks about crème brûlée using the correct French pronunciation/spelling. Greeting first, polite verb forms throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
