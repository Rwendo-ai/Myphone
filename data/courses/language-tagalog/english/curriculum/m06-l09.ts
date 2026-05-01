import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Mamili — Shopping numbers & haggling',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now we shop. `Dalawa para sa singkwenta` — two for fifty. `Tawad` — discount. `Lahat-lahat` — total. These three give you palengke superpowers — bundle deals, polite haggling, and the all-important final tally.",
    culturalNote: "`Tawad` is a national pastime. Asking `pwede pong tawad?` (can we get a discount?) is expected at palengke and tiangge (street markets). At malls and convenience stores it would feel weird — prices are fixed there. Knowing the difference is real Filipino fluency.",
  },

  chunks: [
    {
      id: 'dalawa_para_sa_singkwenta',
      target: 'Dalawa para sa singkwenta',
      native: 'Two for 50 (pesos)',
      literal: 'two for the fifty',
      emoji: '🤝',
      phonetic: 'da-LA-wa PA-ra sa sing-KWEN-ta',
      audioRef: null,
    },
    {
      id: 'tawad',
      target: 'Tawad',
      native: 'Discount / haggle',
      literal: 'discount',
      emoji: '🪙',
      phonetic: 'TA-wad',
      audioRef: null,
    },
    {
      id: 'lahat_lahat',
      target: 'Lahat-lahat',
      native: 'In total / all together',
      literal: 'all-all',
      emoji: '🧮',
      phonetic: 'la-HAT la-HAT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bundle, haggle, total',
    explanation: 'Bundle deals: `[number] para sa [price]` — `tatlo para sa sandaan` (3 for 100). Haggle: `Pwede pong tawad?` (can I get a discount, politely?). Final total: `Magkano lahat-lahat?` (how much in total?). Mix this with the price chunks from L08.',
    examples: [
      { target: 'Tatlo para sa sandaan', native: '3 for 100 pesos' },
      { target: 'Pwede pong tawad?', native: 'Can I have a discount? (polite)' },
      { target: 'Lahat-lahat, tatlong daan', native: 'In total, three hundred (pesos)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Dalawa para sa singkwenta', right: 'Two for 50 (pesos)' },
        { left: 'Tawad', right: 'Discount / haggle' },
        { left: 'Lahat-lahat', right: 'In total' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're politely asking for a discount.",
      sentence: 'Pwede pong _____, ate?',
      options: ['tawad', 'magkano', 'lahat-lahat'],
      correct: 'tawad',
      context: '`Pwede pong tawad?` is the textbook palengke haggling line.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'In total / all together',
      correct: ['Lahat-lahat', 'lahat-lahat', 'lahat lahat', 'Lahat lahat'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'How much in total?'",
      words: ['lahat-lahat', 'Magkano'],
      correct: ['Magkano', 'lahat-lahat?'],
      translation: 'How much in total?',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at SM Mall buying groceries.",
      question: "Should you ask `pwede pong tawad?` at the cashier?",
      options: [
        { text: 'No — mall prices are fixed; haggling is for palengke and tiangge', correct: true },
        { text: 'Yes — always haggle, everywhere', correct: false },
        { text: 'Only on Sundays', correct: false },
      ],
      explanation: 'Haggling is normal at palengke and tiangge, but malls have fixed prices. Asking at the SM cashier would just confuse them.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Discount / haggle',
      correct: ['Tawad', 'tawad'],
    },
  ],

  rwenDialogue: {
    intro: "You picked out two mangoes at the Cubao palengke. The tindera quotes a price.",
    lines: [
      {
        speaker: 'npc',
        target: 'Singkwenta pesos isa, ate.',
        native: '50 pesos each, ma\'am.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pwede pong tawad? Dalawa para sa otsenta?', native: 'Can I have a discount? Two for 80?', correct: true, feedback: 'Bundle + haggle in one move. The Filipino way.' },
          { target: 'Sobrang mura!', native: 'Too cheap!', correct: false, feedback: "Backwards — you're saying it's cheap, which won't help you negotiate down." },
          { target: 'Salamat po', native: 'Thank you (closing)', correct: false, feedback: "That accepts the full price." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige na nga, ate. Otsenta lahat-lahat.',
        native: 'Okay, fine, ma\'am. 80 in total.',
      },
      {
        speaker: 'rwen',
        rwenLine: 'You bundled, you haggled, you got the lahat-lahat. Real palengke fluency.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Discount / haggle (in Tagalog)', correct: ['Tawad', 'tawad'] },
      { prompt: 'In total / all together (in Tagalog)', correct: ['Lahat-lahat', 'lahat-lahat', 'lahat lahat', 'Lahat lahat'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Read a price tag or receipt today. Out loud, ask `magkano lahat-lahat?` and state the total in Spanish-loan pesos.',
    rwenSignoff: 'Galing ka talaga — see you tomorrow for the big conversation.',
  },

  phase8: {
    scenario: "You're at the Quiapo palengke buying mangoes and kamatis. The tindera quotes per-piece prices. You want a bundle deal AND a small tawad. Then you ask the lahat-lahat at the end. Practise haggling politely.",
    rwenRole: 'Manang Linda — sharp palengke vendor, ~60yo, will resist haggling at first but yields to a polite `pwede pong tawad?` if you bundle items.',
    successCriteria: 'User uses `pwede pong tawad?` once, proposes a bundle (e.g., `dalawa para sa ___`), and asks for `lahat-lahat` at the end with a final price stated.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
