import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Magkano? — How much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "`Magkano?` — the most useful word at any palengke. The answer comes back in piso (pesos), counted with Spanish-loan numbers: `singkwenta pesos` (50 pesos), `sandaan pesos` (100). And if it stings — `sobrang mahal!` (too expensive!).",
    culturalNote: "Money in Tagalog uses Spanish-loan numbers, almost without exception: bente (20), trenta (30), kwarenta (40), singkwenta (50), sesenta (60), setenta (70), otsenta (80), nobenta (90), sandaan (100). At the palengke, prices are usually round and negotiable — at malls, fixed.",
  },

  chunks: [
    {
      id: 'magkano',
      target: 'Magkano?',
      native: 'How much?',
      literal: 'how-much?',
      emoji: '💰',
      phonetic: 'mag-KA-no',
      audioRef: null,
    },
    {
      id: 'singkwenta_pesos',
      target: 'Singkwenta pesos',
      native: '50 pesos',
      literal: 'fifty pesos (Spanish-loan)',
      emoji: '💵',
      phonetic: 'sing-KWEN-ta PEH-sos',
      audioRef: null,
    },
    {
      id: 'sobrang_mahal',
      target: 'Sobrang mahal!',
      native: 'Too expensive!',
      literal: 'extreme expensive',
      emoji: '😱',
      phonetic: 'SO-brang ma-HAL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Talking about prices',
    explanation: 'Ask `Magkano?` (or `Magkano po?` politely). Answers use Spanish-loan numbers + `pesos` or `piso` — `singko pesos` (5), `dyes pesos` (10), `bente pesos` (20), `singkwenta pesos` (50), `sandaan` (100). To react: `mahal` (expensive), `mura` (cheap), `sobrang mahal!` (too expensive).',
    examples: [
      { target: 'Magkano po ito?', native: 'How much is this? (polite)' },
      { target: 'Bente pesos lang', native: 'Just 20 pesos' },
      { target: 'Mura naman', native: "That's cheap" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Magkano?', right: 'How much?' },
        { left: 'Singkwenta pesos', right: '50 pesos' },
        { left: 'Sobrang mahal!', right: 'Too expensive!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at the fish stall pointing at a bangus.",
      sentence: '_____ po ang bangus?',
      options: ['Magkano', 'Sandaan', 'Mahal'],
      correct: 'Magkano',
      context: '`Magkano po?` is the polite default for asking any price in the Philippines.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'How much? (politely)',
      correct: ['Magkano po?', 'Magkano po', 'magkano po?', 'magkano po', 'Magkano?', 'Magkano', 'magkano?', 'magkano'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'Too expensive!' (reacting to a price)",
      words: ['mahal', 'Sobrang'],
      correct: ['Sobrang', 'mahal!'],
      translation: 'Too expensive!',
    },
    {
      type: 'multiple_choice',
      instruction: "The tindera says 'singkwenta pesos' for one mango.",
      question: 'How do you react if you think it costs too much?',
      options: [
        { text: 'Sobrang mahal!', correct: true },
        { text: 'Mura naman', correct: false },
        { text: 'Salamat po', correct: false },
      ],
      explanation: '`Sobrang mahal` opens the door to haggling. `Mura naman` means `that\'s cheap`, and `salamat po` means `thank you`.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (Spanish-loan number)',
      prompt: '50 pesos',
      correct: ['Singkwenta pesos', 'singkwenta pesos', 'singkwenta piso', 'Singkwenta piso'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Quiapo palengke pointing at a small basket of kamatis (tomatoes).",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magkano po ang kamatis?', native: 'How much are the tomatoes? (polite)', correct: true, feedback: 'Polite and clear — every tindera will smile at this.' },
          { target: 'Ilang kamatis?', native: 'How many tomatoes?', correct: false, feedback: "That asks for quantity, not price." },
          { target: 'Anong oras?', native: 'What time?', correct: false, feedback: 'Different question entirely.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Singkwenta pesos po, ate.',
        native: '50 pesos, ma\'am.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sobrang mahal!', native: 'Too expensive!', correct: true, feedback: 'Now the haggling opens. Welcome to palengke culture.' },
          { target: 'Salamat po', native: 'Thank you', correct: false, feedback: "That ends the conversation — you wanted to push back." },
          { target: 'Anong oras na?', native: 'What time is it?', correct: false, feedback: 'Wrong topic.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Magkano + Spanish-loan price + reaction. Three words and you can transact across the country.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much? (in Tagalog)', correct: ['Magkano?', 'Magkano', 'magkano?', 'magkano'] },
      { prompt: '50 pesos (in Tagalog)', correct: ['Singkwenta pesos', 'singkwenta pesos', 'singkwenta piso', 'Singkwenta piso'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Imagine one thing you bought today. Ask its price in Tagalog out loud: `Magkano po ito?` Then state the price in pesos.',
    rwenSignoff: 'Hanggang bukas — keep counting in piso.',
  },

  phase8: {
    scenario: "You're at the Quiapo palengke at 8 AM. Aling Beth (the tindera) has tomatoes, eggplant, and bagoong on her stall. You want to know prices. Ask `magkano?` for at least one item, hear the price, and react.",
    rwenRole: 'Aling Beth — palengke tindera, ~55yo, sharp-tongued but warm; quotes prices in Spanish-loan pesos and expects you to react (`mahal!` or `sige`).',
    successCriteria: 'User asks `Magkano po?` for one item, understands the Spanish-loan price reply, and reacts with `mahal`, `mura`, or `sige` appropriately.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
