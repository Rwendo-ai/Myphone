import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-5',
  module: 6,
  lesson: 1,
  title: 'Nhamba 1–5 — Numbers One to Five',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Numbers unlock the market, the clock, and counting your family. In Shona, numbers are words — and they have their own music. Listen for the patterns as we build from one to five.",
    culturalNote: "Shona numbers are deeply embedded in daily market life. Zimbabwe's informal market economy runs on negotiation — knowing numbers gives you the power to participate, not just observe.",
  },

  chunks: [
    {
      id: 'chimwe_piri_tatu',
      shona: 'Chimwe / Piri / Tatu',
      english: 'One / Two / Three',
      literal: 'Chimwe (one/same), Piri (two), Tatu (three)',
      emoji: '1️⃣2️⃣3️⃣',
      phonetic: 'CHI-mwe / PI-ri / TA-tu',
      audioRef: null,
    },
    {
      id: 'china_shanu',
      shona: 'China / Shanu',
      english: 'Four / Five',
      literal: 'China (four), Shanu (five)',
      emoji: '4️⃣5️⃣',
      phonetic: 'CHI-na / SHA-nu',
      audioRef: null,
    },
    {
      id: 'mangani',
      shona: 'Mangani?',
      english: 'How many?',
      literal: 'How-many?',
      emoji: '❓',
      phonetic: 'man-GA-ni',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Shona numbers 1–5',
    explanation: "Chimwe (1), Piri (2), Tatu (3), China (4), Shanu (5). Notice 'chimwe' — it also means 'one same/together'. Piri sounds like 'pair'. Tatu sounds like 'tattoo'. Build memory hooks for each.",
    examples: [
      { shona: 'Vana vatatu', english: 'Three children' },
      { shona: 'Mazai mashanu', english: 'Five eggs' },
      { shona: 'Vana vangani?', english: 'How many children?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the number to its meaning',
      pairs: [
        { left: 'Chimwe', right: 'One' },
        { left: 'Tatu', right: 'Three' },
        { left: 'Shanu', right: 'Five' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the count',
      sentence: 'Chimwe, piri, tatu, china, _____.',
      options: ['shanu', 'tanhatu', 'gumi'],
      correct: 'shanu',
      context: 'Count from one to five.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Three',
      correct: ['Tatu', 'tatu'],
    },
    {
      type: 'multiple_choice',
      instruction: "You have 4 books. How do you say that?",
      question: 'Four books:',
      options: [
        { text: 'Mabhuku mana', correct: true },
        { text: 'Mabhuku matatu', correct: false },
        { text: 'Mabhuku mashanu', correct: false },
      ],
      explanation: "'China' is sometimes 'mana' with noun class agreement. Four books = mabhuku mana.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have five children'",
      words: ['Ndine', 'vana', 'vashanu.'],
      correct: ['Ndine', 'vana', 'vashanu.'],
      translation: 'I have five children',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How many?',
      correct: ['Mangani?', 'mangani?', 'Mangani', 'mangani'],
    },
  ],

  rwenDialogue: {
    intro: "At the market. A vendor holds up fingers asking how many you want.",
    lines: [
      {
        speaker: 'npc',
        shona: 'Unoda mazai mangani?',
        english: 'How many eggs do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinoda mazai mashanu, ndapota.', english: 'I want five eggs, please.', correct: true, feedback: "Perfect — number + noun + please. Clean market Shona." },
          { shona: 'Shanu', english: 'Five (just the number)', correct: false, feedback: "Good — wrap it in a sentence: 'Ndinoda mazai mashanu, ndapota.' — I want five eggs please." },
          { shona: 'Ndinoda mazai', english: 'I want eggs (no number)', correct: false, feedback: "Add how many — 'Ndinoda mazai mashanu' — I want five eggs." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mashanu. You negotiated your first purchase in Shona. The vendor is impressed.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Five', correct: ['Shanu', 'shanu'] },
      { prompt: 'How many?', correct: ['Mangani?', 'mangani?', 'Mangani', 'mangani'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count five things around you in Shona: chimwe, piri, tatu, china, shanu. Point at each one as you count.",
    rwenSignoff: "Numbers are the currency of conversation. Famba zvakanaka.",
  },
};

export default lesson;
