import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Commander — Ordering',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "The serveur is at your table, pen ready. You point at the carte — that's not enough. In French, HOW you order matters as much as WHAT. Today: the polite formula that French ears expect, and the magic phrase for skipping ingredients.",
    culturalNote: "'Je veux' (I want) sounds blunt — almost rude — to French ears, like a child pulling on a parent's sleeve. Adults order with 'Je voudrais' (I would like) or 'Je prends' (I'll take). It costs you one extra syllable and buys you instant respect from any serveur.",
  },

  chunks: [
    {
      id: 'je_voudrais',
      target: 'Je voudrais...',
      native: "I'd like...",
      literal: 'I would-want',
      emoji: '🙏',
      phonetic: 'zhuh voo-DRAY',
      audioRef: null,
    },
    {
      id: 'je_prends',
      target: 'Je prends...',
      native: "I'll take... / I'll have...",
      literal: 'I take',
      emoji: '✋',
      phonetic: 'zhuh PRAHN',
      audioRef: null,
    },
    {
      id: 'sans_oignons',
      target: "Sans oignons, s'il vous plaît",
      native: 'Without onions, please',
      literal: 'Without onions, if-it you-pleases',
      emoji: '🚫',
      phonetic: 'sahn zoh-NYOHN, seel voo PLAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite ordering: voudrais > veux',
    explanation: "**Je voudrais** = 'I would like' — the conditional, polite, used everywhere from cafés to bakeries. **Je prends** = 'I'll take/have' — slightly more decisive, also polite. **Je veux** ('I want') is reserved for kids or close friends — never with a serveur. To exclude an ingredient, use **sans** + the noun.",
    examples: [
      { target: 'Je voudrais le plat du jour', native: "I'd like the dish of the day" },
      { target: 'Je prends une salade', native: "I'll have a salad" },
      { target: 'Sans fromage, s\'il vous plaît', native: 'Without cheese, please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each ordering phrase to its meaning',
      pairs: [
        { left: 'Je voudrais...', right: "I'd like..." },
        { left: 'Je prends...', right: "I'll take/have..." },
        { left: "Sans oignons, s'il vous plaît", right: 'Without onions, please' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The serveur is waiting. You want the steak. Which sounds best to a French ear?",
      question: "Choose the most polite, natural phrasing",
      options: [
        { text: "Je voudrais le steak, s'il vous plaît", correct: true },
        { text: "Je veux le steak", correct: false },
        { text: "Donnez-moi le steak", correct: false },
      ],
      explanation: "'Je veux' is too direct — it lands as childish or rude. 'Je voudrais' is the adult, polite default everywhere in France.",
    },
    {
      type: 'fill_blank',
      instruction: "You don't like onions in your salad. Add the request.",
      sentence: 'Une salade niçoise, _____ oignons, s\'il vous plaît.',
      options: ['sans', 'avec', 'pour'],
      correct: 'sans',
      context: "Sans = without.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — politely',
      prompt: "I'd like a coffee",
      correct: ['Je voudrais un café', 'je voudrais un café'],
    },
    {
      type: 'build_sentence',
      instruction: "Order a burger without onions",
      words: ["un", "Je", "oignons", "voudrais", "burger", "sans"],
      correct: ["Je", "voudrais", "un", "burger", "sans", "oignons"],
      translation: "I'd like a burger without onions",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Without onions, please',
      correct: ["Sans oignons, s'il vous plaît", "sans oignons, s'il vous plaît"],
    },
  ],

  rwenDialogue: {
    intro: "The serveur is at your table. He clicks his pen. You scan the carte — the steak frites looks good, but you hate raw onions in the salad that comes with it.",
    lines: [
      {
        speaker: 'npc',
        target: "Vous avez choisi?",
        native: "Have you chosen?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Je voudrais le steak frites, sans oignons, s'il vous plaît", native: "I'd like the steak frites, without onions, please", correct: true, feedback: "Flawless — polite verb, clear request, ingredient excluded. The serveur is impressed." },
          { target: "Je veux le steak frites sans oignons", native: "I want the steak frites without onions", correct: false, feedback: "The order is fine but 'Je veux' is too blunt. Use 'Je voudrais'." },
          { target: "Steak frites, pas d'oignons", native: "Steak frites, no onions", correct: false, feedback: "He'll get it but it's terse. Wrap it with 'Je voudrais' and 'sans oignons'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Très bien, je note ça. Et à boire?",
        native: "Very good, noted. And to drink?",
      },
      {
        speaker: 'rwen',
        rwenLine: "He warmed up the moment you said 'Je voudrais'. One conditional verb — that's all it takes.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'd like... (in French — polite ordering)",
        correct: ['Je voudrais', 'Je voudrais...', 'je voudrais'],
      },
      {
        prompt: 'Without onions, please (in French)',
        correct: ["Sans oignons, s'il vous plaît", "sans oignons, s'il vous plaît"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you order anything — coffee, sandwich, takeaway — rehearse it in French first: 'Je voudrais ___, sans ___, s'il vous plaît'. Pretend the cashier speaks French.",
    rwenSignoff: "Politeness is a passport in France. You just stamped yours. À demain.",
  },

  phase8: {
    scenario: "You're seated in a brasserie at 1pm. The serveur arrives — pen ready. The carte has steak frites, salade niçoise, croque-monsieur, and a plat du jour. You hate raw onions and you want a glass of water on the side. You need to order politely, exclude the onions, and add the water request.",
    rwenRole: "Marc — brasserie serveur, ~35, professional and a touch impatient at the lunch rush; he visibly relaxes when a customer orders with 'Je voudrais' and a clean 'sans X', and quietly judges 'Je veux'.",
    successCriteria: "User uses 'Je voudrais' OR 'Je prends' (NOT 'Je veux'), names a specific dish from the carte, adds 'sans [ingredient]' for the exclusion, and ends with 's'il vous plaît'. Bonus if they also request water in the same breath.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
