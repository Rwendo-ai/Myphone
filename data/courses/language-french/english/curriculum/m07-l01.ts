import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-faim-soif',
  module: 7,
  lesson: 1,
  title: "J'ai faim, j'ai soif — Hungry & Thirsty",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "It's noon. The smell of butter and warm bread drifts from the boulangerie next door — your stomach growls. In English you say 'I am hungry'. In French, hunger is something you HAVE: 'J'ai faim'. Today, we feel the body in French.",
    culturalNote: "French uses 'avoir' (to have) for physical states where English uses 'to be'. J'ai faim = literally 'I have hunger'. J'ai soif = 'I have thirst'. Saying 'Je suis faim' (I am hungry) sounds bizarre to a French ear — like saying 'I am hunger itself'. The body holds the sensation, you carry it.",
  },

  chunks: [
    {
      id: 'jai_faim',
      target: "J'ai faim",
      native: "I'm hungry",
      literal: 'I-have hunger',
      emoji: '🍽️',
      phonetic: 'zhay FAHN',
      audioRef: null,
    },
    {
      id: 'jai_soif',
      target: "J'ai soif",
      native: "I'm thirsty",
      literal: 'I-have thirst',
      emoji: '💧',
      phonetic: 'zhay SWAHF',
      audioRef: null,
    },
    {
      id: 'je_voudrais_de_leau',
      target: "Je voudrais de l'eau",
      native: "I'd like some water",
      literal: "I would-like some-of the-water",
      emoji: '🥛',
      phonetic: 'zhuh voo-DRAY duh LOH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Avoir for body states',
    explanation: "French uses 'avoir' (to have) — not 'être' (to be) — for hunger, thirst, age, fear, sleep, and heat. You don't BE hungry, you HAVE hunger. This is one of the deepest reflex switches you'll make in French.",
    examples: [
      { target: "J'ai faim", native: "I'm hungry (I have hunger)" },
      { target: "J'ai soif", native: "I'm thirsty (I have thirst)" },
      { target: "J'ai chaud", native: "I'm hot (I have heat)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: "J'ai faim", right: "I'm hungry" },
        { left: "J'ai soif", right: "I'm thirsty" },
        { left: "Je voudrais de l'eau", right: "I'd like some water" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a friend's apartment, parched from the heat. Which is right?",
      question: "How do you say 'I'm thirsty' in French?",
      options: [
        { text: "J'ai soif", correct: true },
        { text: "Je suis soif", correct: false },
        { text: "Je suis soif-eux", correct: false },
      ],
      explanation: "French uses avoir, not être, for body states. 'Je suis soif' literally means 'I am thirst itself' — strange to French ears.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the sentence at lunch",
      sentence: "J'_____ faim, on mange?",
      options: ['ai', 'suis', 'es'],
      correct: 'ai',
      context: "Hunger is something you HAVE in French — use avoir.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I'm hungry",
      correct: ["J'ai faim", "j'ai faim"],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words — politely ask for water',
      words: ["de", "Je", "l'eau", "voudrais"],
      correct: ["Je", "voudrais", "de", "l'eau"],
      translation: "I'd like some water",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I'm thirsty",
      correct: ["J'ai soif", "j'ai soif"],
    },
  ],

  rwenDialogue: {
    intro: "It's 1pm. You're walking in the Marais with a French friend, Camille. She turns to you — what do you say?",
    lines: [
      {
        speaker: 'npc',
        target: "Tu veux qu'on s'arrête manger un truc?",
        native: "Want to stop and grab something to eat?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, j'ai faim!", native: "Yes, I'm hungry!", correct: true, feedback: "Perfect — natural and warm. She'll lead you straight to a bistro." },
          { target: "Oui, je suis faim", native: "Yes, I am hunger", correct: false, feedback: "Almost — but French uses 'avoir' for hunger. Try 'J'ai faim'." },
          { target: "Non merci", native: "No thanks", correct: false, feedback: "She offered food and you're hungry — say yes!" },
        ],
      },
      {
        speaker: 'npc',
        target: "Et soif aussi? Il fait chaud.",
        native: "And thirsty too? It's hot out.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Two reflex flips done — hunger and thirst are things you HAVE in French. Your body now speaks a little French.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm hungry (in French)",
        correct: ["J'ai faim", "j'ai faim"],
      },
      {
        prompt: "I'd like some water (in French)",
        correct: ["Je voudrais de l'eau", "je voudrais de l'eau"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you feel hungry or thirsty, catch yourself and say it in French — out loud or in your head: 'J'ai faim' or 'J'ai soif'. The body learns by reflex.",
    rwenSignoff: "Bon appétit — eat well. À demain!",
  },

  phase8: {
    scenario: "It's 12:45pm in a small bistro on rue Saint-Antoine, Paris. You sit down at a table near the window. The serveur approaches with the carte tucked under his arm. You haven't eaten since breakfast and it's stiflingly warm — you need water first, food second, and you want to sound like a person who knows the avoir reflex.",
    rwenRole: "Antoine — bistro serveur, ~40, brisk but friendly; he reads the room fast and switches to English instantly if a customer fumbles, so the user has to land 'J'ai faim' / 'J'ai soif' / 'Je voudrais de l'eau' confidently to stay in French.",
    successCriteria: "User uses 'avoir' (J'ai faim, J'ai soif) — NOT 'être' — for hunger and thirst, AND politely asks for water with 'Je voudrais de l'eau'. If they slip into 'Je suis faim', Rwen gently corrects in-scene before continuing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
