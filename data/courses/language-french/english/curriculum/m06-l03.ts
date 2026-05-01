import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Mille, Million, Milliard — The Big Numbers',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "House prices, lottery jackpots, the year of the French Revolution (1789, mille sept cent quatre-vingt-neuf — yes, really). Today we go big. Two small grammar quirks live up here: one kind of -s that never appears, and a sneaky little 'de' that loves million and milliard.",
    culturalNote: "French uses a comma where English uses a decimal point (3,14 = 3.14) and a space where English uses a comma (10 000 = 10,000). When reading prices, this trips up English speakers fast — 'mille' looks like a thousand and behaves like one, but it never takes an 's' even when plural.",
  },

  chunks: [
    {
      id: 'cent_mille',
      target: 'cent, mille',
      native: 'one hundred, one thousand',
      literal: 'hundred, thousand',
      emoji: '💯',
      phonetic: 'sahn, meel',
      audioRef: null,
    },
    {
      id: 'deux_mille',
      target: 'deux mille',
      native: 'two thousand',
      literal: 'two thousand (no -s on mille!)',
      emoji: '2️⃣',
      phonetic: 'duh MEEL',
      audioRef: null,
    },
    {
      id: 'un_million_de',
      target: 'un million de dollars',
      native: 'one million dollars',
      literal: 'a million OF dollars',
      emoji: '💰',
      phonetic: 'uhn meel-YOHN duh doh-LAHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mille never gets -s. Million and milliard need "de".',
    explanation: "Three rules to lock in: (1) 'cent' takes -s when plural and standing alone (deux cents) but drops it before another number (deux cent un). (2) 'mille' NEVER takes -s, ever — 'deux mille', 'cinq mille', always bare. (3) 'million' and 'milliard' are nouns, not numbers — so they take -s when plural AND need 'de' before the thing counted: 'un million DE dollars', 'deux millions D'euros'.",
    examples: [
      { target: 'deux cents euros', native: '200 euros (cent takes -s, alone at end)' },
      { target: 'cinq mille personnes', native: '5,000 people (mille — never any -s)' },
      { target: 'trois millions de touristes', native: '3 million tourists (millions + de)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to the number',
      pairs: [
        { left: 'cent', right: '100' },
        { left: 'mille', right: '1,000' },
        { left: 'un million', right: '1,000,000' },
        { left: 'un milliard', right: '1,000,000,000' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the correct form. "5,000 people"',
      sentence: 'cinq _____ personnes',
      options: ['mille', 'milles', 'millier'],
      correct: 'mille',
      context: "'Mille' NEVER takes -s — not at 5,000, not at 5,000,000. Stays bare always.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'one million euros',
      correct: ['un million d\'euros', 'Un million d\'euros'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "two thousand and twenty-five" (the year 2025)',
      words: ['deux', 'mille', 'vingt-cinq'],
      correct: ['deux', 'mille', 'vingt-cinq'],
      translation: '2025 — deux mille vingt-cinq',
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'two million dollars' in French?",
      question: 'Choose the correct form',
      options: [
        { text: 'deux millions de dollars', correct: true },
        { text: 'deux million dollars', correct: false },
        { text: 'deux milles dollars', correct: false },
      ],
      explanation: "'Million' is a noun: takes -s when plural (millions) AND needs 'de' before what's counted.",
    },
    {
      type: 'translate',
      instruction: 'Type the French year',
      prompt: 'the year 2000 (l\'année...)',
      correct: ['l\'année deux mille', 'l\'an deux mille', 'deux mille'],
    },
  ],

  rwenDialogue: {
    intro: "An estate agent in Lyon is showing you a small apartment. You ask the price.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'C\'est combien?', native: 'How much is it?', correct: true, feedback: 'Direct and natural.' },
          { target: 'Quel est le combien?', native: '(invented)', correct: false, feedback: "Just 'C'est combien?' — short and right." },
          { target: 'Le prix?', native: 'The price?', correct: false, feedback: 'Understandable but blunt — "C\'est combien?" is the standard.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Trois cent cinquante mille euros.',
        native: '350,000 euros.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Trois cent cinquante mille? C\'est cher!', native: '350,000? That\'s expensive!', correct: true, feedback: "You read the number cleanly — and reacted like a local." },
          { target: 'Trois cent cinquante milles?', native: '(wrong: -s on mille)', correct: false, feedback: "Mille NEVER takes -s — even at 350,000." },
          { target: 'Trois cents cinquante mille?', native: '(wrong: -s on cent)', correct: false, feedback: "Cent drops the -s when another number follows: 'trois cent cinquante'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hearing yourself say 'trois cent cinquante mille' without flinching? That's the moment numbers become language, not maths.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'two thousand (in French — note: no -s)', correct: ['deux mille', 'Deux mille'] },
      { prompt: 'one million dollars (with the right preposition)', correct: ['un million de dollars', 'Un million de dollars'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say the current year out loud in French (deux mille vingt-six). Then say the year you were born. Notice mille never gets an -s in your mouth.",
    rwenSignoff: "À demain — we look at the clock and learn to ask 'Quelle heure est-il?'",
  },

  phase8: {
    scenario: "You're house-hunting in Bordeaux with an estate agent. She quotes prices in the hundreds of thousands of euros and one apartment in the millions. You discuss prices, react, ask 'C'est combien?', and confirm at least one big number back to her.",
    rwenRole: "Sophie — an estate agent, 40s, professional and patient with foreign buyers. She speaks clearly and waits while you do the maths in your head, but expects you to say numbers correctly.",
    successCriteria: "User uses 'mille' WITHOUT an -s at least twice (e.g., 'cinq cent mille', 'trois cent mille'), AND uses 'million(s) de' correctly at least once (e.g., 'un million d'euros', 'deux millions d'euros').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
