import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Argent — C\'est Combien?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "France runs on euros, and asking the price is the single most useful sentence you'll learn this week. 'C'est combien?' — three syllables, opens every market stall, every bakery, every souvenir shop. Today we add the reaction phrases too: 'c'est cher!' (it's expensive!) and 'trop cher' (too expensive).",
    culturalNote: "Most French shops use FIXED prices — supermarkets, boulangeries, restaurants, pharmacies. Haggling there gets you stared at. But in OUTDOOR MARKETS (marché aux puces, brocantes, vintage stalls), gentle bargaining is welcome and even expected. The vendor expects you to ask 'C'est votre meilleur prix?' (your best price?). Tomorrow we go deeper into market haggling.",
  },

  chunks: [
    {
      id: 'cest_combien',
      target: 'C\'est combien?',
      native: 'How much is it?',
      literal: 'It\'s how-much?',
      emoji: '💶',
      phonetic: 'say kohm-BYAN',
      audioRef: null,
    },
    {
      id: 'vingt_euros',
      target: 'Ça coûte vingt euros',
      native: 'It costs twenty euros',
      literal: 'It costs twenty euros',
      emoji: '💰',
      phonetic: 'sah COOT van uh-ROH',
      audioRef: null,
    },
    {
      id: 'cest_cher_trop_cher',
      target: 'C\'est cher / Trop cher',
      native: 'It\'s expensive / Too expensive',
      literal: 'It-is expensive / Too expensive',
      emoji: '😬',
      phonetic: 'say SHAIR / troh SHAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Asking and reacting to prices',
    explanation: "Three core moves. (1) ASK: 'C'est combien?' (general) or 'Combien ça coûte?' (more specific). (2) HEAR: 'Ça coûte X euros' or 'C'est X euros'. (3) REACT: 'C'est cher!' (it's pricey), 'C'est trop cher' (too expensive — opens haggling), 'C'est raisonnable' (it's fair), 'Je le prends' (I'll take it). Note: in French you say 'euros' aloud — never the symbol €.",
    examples: [
      { target: 'C\'est combien, le pain?', native: 'How much is the bread?' },
      { target: 'Ça coûte deux euros cinquante', native: 'It costs 2 euros 50 (= €2.50)' },
      { target: 'C\'est trop cher pour moi', native: 'It\'s too expensive for me' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French phrase to its English meaning',
      pairs: [
        { left: 'C\'est combien?', right: 'How much is it?' },
        { left: 'Ça coûte dix euros', right: 'It costs ten euros' },
        { left: 'C\'est cher', right: 'It\'s expensive' },
        { left: 'Trop cher', right: 'Too expensive' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re at a boulangerie. Ask the price of the croissant.',
      sentence: 'C\'est _____, le croissant?',
      options: ['combien', 'comment', 'pourquoi'],
      correct: 'combien',
      context: '"Combien" = how much. "Comment" = how. Easy to mix up — combien = quantity, comment = manner.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'It\'s too expensive',
      correct: ['C\'est trop cher', 'c\'est trop cher'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It costs fifteen euros"',
      words: ['Ça', 'coûte', 'quinze', 'euros'],
      correct: ['Ça', 'coûte', 'quinze', 'euros'],
      translation: 'It costs fifteen euros.',
    },
    {
      type: 'multiple_choice',
      instruction: "You see something you like at a brocante. The seller says '40 euros'. You think it's a bit much. What do you say to politely open negotiation?",
      question: 'Choose the most natural response',
      options: [
        { text: 'C\'est un peu cher...', correct: true },
        { text: 'Non!', correct: false },
        { text: 'Pas de problème', correct: false },
      ],
      explanation: "'C\'est un peu cher' (it\'s a bit expensive) is a soft opening — the seller will often offer a small discount. 'Non' is too blunt; 'Pas de problème' means you accept.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'How much is it?',
      correct: ['C\'est combien?', 'c\'est combien?', 'C\'est combien'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Paris café. The serveur brings the bill. You glance — it's 28 euros 50. You want to confirm.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pardon, c\'est combien en tout?', native: 'Sorry, how much is it altogether?', correct: true, feedback: 'Polite, clear — "en tout" (in total) is a useful add-on.' },
          { target: 'Combien?', native: 'How much?', correct: false, feedback: "Too brusque without 'pardon' — French expects a soft frame for strangers." },
          { target: 'Le combien?', native: '(invented)', correct: false, feedback: "Just 'C'est combien?' — no 'le'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Vingt-huit euros cinquante, monsieur.',
        native: 'Twenty-eight euros fifty, sir.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'D\'accord, voilà', native: 'OK, here you go', correct: true, feedback: 'Smooth — you accepted and paid like a regular.' },
          { target: 'C\'est trop cher!', native: '(too expensive)', correct: false, feedback: "You don't haggle a café bill in France — fixed price. 'Trop cher' here would seem rude." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You handled a French bill in French. Tomorrow we go to a brocante where 'trop cher' is the right move.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much is it? (in French)', correct: ['C\'est combien?', 'C\'est combien', 'c\'est combien?'] },
      { prompt: 'It\'s too expensive', correct: ['C\'est trop cher', 'c\'est trop cher'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick anything in your room — a mug, a book, a shoe. Look at it and say out loud, in French: 'C\'est combien?' Then answer yourself with a price: 'Ça coûte ___ euros.' Practise the muscle.",
    rwenSignoff: "À demain — we go to the marché and learn how to actually negotiate.",
  },

  phase8: {
    scenario: "You're at a small Paris boulangerie picking up a few items: a baguette, two croissants, a tarte aux pommes. You ask the price of each one separately, then ask for the total. Some prices are reasonable, one feels expensive — you react.",
    rwenRole: "Madame Bouchet — the boulangère, late 40s, friendly but busy. She quotes prices in euros aloud (e.g., 'un euro vingt', 'cinq euros cinquante', 'douze euros').",
    successCriteria: "User asks 'C\'est combien?' at least twice for different items, asks for the total ('au total' or 'en tout'), and produces ONE reaction phrase ('c\'est cher', 'c\'est raisonnable', or 'je le prends'). User repeats back at least one price correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
