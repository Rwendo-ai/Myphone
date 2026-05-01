import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-salamat',
  module: 1,
  lesson: 4,
  title: 'Salamat — Thank you',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Salamat' is the heartbeat of Filipino courtesy. Stack 'po' and you have respect. Stack 'maraming' and you have gratitude. Stack both and you have a Filipino who instantly likes you.",
    culturalNote: "In the Philippines, gratitude is loud and frequent. You thank the jeepney driver. You thank the cashier. You thank the security guard who opened the door. Every 'salamat po' is small social glue — and the country runs on it.",
  },

  chunks: [
    {
      id: 'salamat',
      target: 'Salamat',
      native: 'Thanks',
      literal: 'Thanks',
      emoji: '🙏',
      phonetic: 'sa-LA-mat',
      audioRef: null,
    },
    {
      id: 'salamat_po',
      target: 'Salamat po',
      native: 'Thanks (respectful)',
      literal: 'Thanks respect-marker',
      emoji: '🙏',
      phonetic: 'sa-LA-mat PO',
      audioRef: null,
    },
    {
      id: 'maraming_salamat',
      target: 'Maraming salamat',
      native: 'Thanks a lot / Many thanks',
      literal: 'Many thanks',
      emoji: '✨',
      phonetic: 'ma-RA-ming sa-LA-mat',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The politeness chain',
    explanation: "'Salamat' is the base. Add 'po' for respect → 'Salamat po'. Add 'maraming' for warmth → 'Maraming salamat'. Stack ALL three for max gratitude → 'Maraming salamat po'.",
    examples: [
      { target: 'Salamat', native: 'Thanks (to a friend)' },
      { target: 'Salamat po', native: 'Thanks (to a stranger / elder)' },
      { target: 'Maraming salamat po', native: 'Thank you so much (full respect)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Salamat', right: 'Thanks' },
        { left: 'Salamat po', right: 'Thanks (respectful)' },
        { left: 'Maraming salamat', right: 'Thanks a lot' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A jeepney driver waits patiently as you fish for coins. You thank him.',
      sentence: '_____ po, kuya.',
      options: ['Salamat', 'Mabuti', 'Kumusta'],
      correct: 'Salamat',
      context: "He helped you out — Salamat with 'po' is the move.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Thanks (respectful, to a stranger)',
      correct: ['Salamat po', 'salamat po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the maximum-gratitude phrase',
      words: ['salamat', 'po', 'Maraming'],
      correct: ['Maraming', 'salamat', 'po'],
      translation: 'Thank you so much (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: 'A Sunday Mass usher hands you a missalette as you sit. Older lady. What do you say?',
      question: 'Pick the right thanks',
      options: [
        { text: 'Salamat po', correct: true },
        { text: 'Salamat', correct: false },
        { text: 'Maraming salamat po', correct: false },
      ],
      explanation: "Bare 'Salamat' is too casual for an elder usher. 'Maraming salamat po' is fine but a bit much for a missalette — 'Salamat po' is the perfect everyday respectful thanks.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Thanks a lot / Many thanks',
      correct: ['Maraming salamat', 'maraming salamat'],
    },
  ],

  rwenDialogue: {
    intro: "You hop on a Manila jeepney to Cubao. You hand 13 pesos forward through the chain of passengers. The driver — kuya, ~45 — catches it and nods at you in the rearview mirror. Thank him.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salamat po, kuya', native: 'Thanks (respectful), older brother', correct: true, feedback: "Perfect — 'po' for respect, 'kuya' for warmth. The driver smiles." },
          { target: 'Salamat', native: 'Thanks', correct: false, feedback: "The kuya is older and helping you — drop in 'po'. Bare 'Salamat' feels flat." },
          { target: 'Maraming salamat', native: 'Thanks a lot', correct: false, feedback: "Warm, but you missed the 'po'. Try 'Maraming salamat po' or just 'Salamat po'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Walang anuman',
        native: "You're welcome",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'walang anuman'? Filipinos always reply — gratitude bounces back. We'll learn that one tomorrow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Thanks (respectful, in Tagalog)',
        correct: ['Salamat po', 'salamat po'],
      },
      {
        prompt: 'Thanks a lot (in Tagalog)',
        correct: ['Maraming salamat', 'maraming salamat'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Salamat po' to a stranger today — a barista, the person who held the door, the bus driver. Watch their face soften.",
    rwenSignoff: "I'll ask tomorrow if you collected a smile. Ingat ka.",
  },

  phase8: {
    scenario: "You're riding a Manila jeepney from Cubao to Quiapo. You pass your fare forward through a chain of strangers. The kuya driver catches it, the kuya beside you helped pass it. You need to thank both — and thank them properly.",
    rwenRole: "Kuya Boy — jeepney driver, mid-40s, sun-creased face, runs the same route every day; appreciates a foreigner who knows that 'salamat' alone isn't enough.",
    successCriteria: "User says 'Salamat po' (NOT bare 'Salamat') to thank the driver — and uses an honorific like 'kuya' if naturally addressing him. The 'po' is present every single time gratitude is expressed to him.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
