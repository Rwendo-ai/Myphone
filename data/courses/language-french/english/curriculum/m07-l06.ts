import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cuisiner — Cooking Verbs',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Camille's kitchen, Sunday afternoon. She's got onions on the board, garlic frying, a saucepan steaming. 'Tu peux couper ça?' she asks, handing you a knife. Today: the three verbs that get you working alongside any French cook.",
    culturalNote: "French home cooking is conversational — the cook narrates as they go. 'Je coupe les oignons, je mélange le tout, je laisse cuire dix minutes.' Knowing these verbs lets you follow along, ask 'tu veux que je coupe?' (want me to chop?), and feel useful instead of awkward.",
  },

  chunks: [
    {
      id: 'cuire',
      target: 'cuire',
      native: 'to cook',
      literal: 'to-cook',
      emoji: '🍳',
      phonetic: 'KWEER',
      audioRef: null,
    },
    {
      id: 'couper',
      target: 'couper',
      native: 'to chop / cut',
      literal: 'to-cut',
      emoji: '🔪',
      phonetic: 'koo-PAY',
      audioRef: null,
    },
    {
      id: 'melanger',
      target: 'mélanger',
      native: 'to mix / stir',
      literal: 'to-mix',
      emoji: '🥣',
      phonetic: 'may-lahn-ZHAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cooking verbs — infinitive to "I-form"',
    explanation: "Three regular -er verbs (couper, mélanger) and one irregular (cuire). The 'I' form drops the -er and adds -e: **je coupe** (I chop), **je mélange** (I mix). Cuire is irregular: **je cuis** (I'm cooking it). To say 'let it cook', use **laisser cuire**: 'Laisse cuire dix minutes.'",
    examples: [
      { target: 'Je coupe les oignons', native: "I'm chopping the onions" },
      { target: 'Je mélange la sauce', native: "I'm mixing the sauce" },
      { target: 'Laisse cuire dix minutes', native: "Let it cook for ten minutes" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each verb to its meaning',
      pairs: [
        { left: 'cuire', right: 'to cook' },
        { left: 'couper', right: 'to chop / cut' },
        { left: 'mélanger', right: 'to mix / stir' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're chopping the onions. Pick the right verb form.",
      sentence: 'Je _____ les oignons.',
      options: ['coupe', 'couper', 'cuis'],
      correct: 'coupe',
      context: "Conjugate couper for 'I' — drop -er, add -e.",
    },
    {
      type: 'multiple_choice',
      instruction: "Camille hands you a wooden spoon and a bowl of batter. What's she asking?",
      question: "She says 'Tu peux mélanger?' — what does she want?",
      options: [
        { text: "Can you mix it?", correct: true },
        { text: "Can you chop it?", correct: false },
        { text: "Can you cook it?", correct: false },
      ],
      explanation: "Mélanger = to mix/stir. Couper = chop. Cuire = cook.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I'm mixing the sauce",
      correct: ['Je mélange la sauce', 'je mélange la sauce'],
    },
    {
      type: 'build_sentence',
      instruction: "Build — 'Let it cook for ten minutes'",
      words: ["dix", "Laisse", "minutes", "cuire"],
      correct: ["Laisse", "cuire", "dix", "minutes"],
      translation: "Let it cook for ten minutes",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I'm chopping the onions",
      correct: ['Je coupe les oignons', 'je coupe les oignons'],
    },
  ],

  rwenDialogue: {
    intro: "Camille is at the stove. She's got a sauce simmering and a pile of onions to chop. She turns to you, knife in hand.",
    lines: [
      {
        speaker: 'npc',
        target: "Tu veux m'aider? Tu peux couper les oignons?",
        native: "Want to help? Can you chop the onions?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, je coupe les oignons", native: "Yes, I'll chop the onions", correct: true, feedback: "Perfect — clean conjugation, ready to work. She smiles and hands you the board." },
          { target: "Oui, je cuis les oignons", native: "Yes, I'll cook the onions", correct: false, feedback: "Cuire is to cook, not chop. She wants you to chop — use couper: 'Je coupe'." },
          { target: "Oui, mélanger", native: "Yes, mix", correct: false, feedback: "Mélanger is to stir. She asked you to chop — use 'Je coupe'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Super. Et après tu mélanges la sauce, d'accord?",
        native: "Great. And then you'll mix the sauce, okay?",
      },
      {
        speaker: 'rwen',
        rwenLine: "You're cooking in French now. The kitchen is the best classroom — verbs become muscle memory.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm chopping the onions (in French)",
        correct: ['Je coupe les oignons', 'je coupe les oignons'],
      },
      {
        prompt: "I'm mixing the sauce (in French)",
        correct: ['Je mélange la sauce', 'je mélange la sauce'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, narrate one cooking moment in French — even if it's just toast. 'Je coupe le pain. Je mélange le beurre. Je laisse cuire deux minutes.' Out loud, in your kitchen.",
    rwenSignoff: "Cooking is conjugation in motion. À demain.",
  },

  phase8: {
    scenario: "It's Sunday afternoon at Camille's. She's making a gratin dauphinois and asks you to help. There's a pile of potatoes to slice, cream and garlic to mix, and a 40-minute cook in the oven. She narrates as she goes and expects you to follow along, ask questions in French, and announce what you're doing.",
    rwenRole: "Camille — friend cooking at home, ~32, patient and chatty in the kitchen; she talks through every step and expects the user to keep up by saying things like 'Je coupe les pommes de terre' or 'Je mélange?' rather than nodding silently.",
    successCriteria: "User uses all three verbs (couper, mélanger, cuire) at least once each in 'I-form' or as imperative, narrating their own actions or asking what to do next. No silent helping — the conversation has to flow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
