import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-buying-ticket',
  module: 9,
  lesson: 6,
  title: 'Pamasahe — Buying a ticket',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're at the Cebu pier. A wooden pumpboat — banca — bobs at the dock, headed for Bohol. The ticket counter is a small window with a tired clerk and a stack of receipts. Three phrases get you on the boat. Today you learn them.",
    culturalNote: "The Cebu-Bohol pumpboat ride is one of the iconic island-hops in the Philippines. 'Pamasahe' = fare, 'tiket' = ticket (loanword), and 'roundtrip' is just said in English. Always ask the price first — 'Magkano po?' — and always say the destination clearly so they don't misroute you.",
  },

  chunks: [
    {
      id: 'isang_ticket_sa_cebu',
      target: 'Isang ticket sa Cebu',
      native: 'One ticket to Cebu',
      literal: 'One ticket to Cebu',
      emoji: '🎫',
      phonetic: 'EE-sahng TI-ket sah SE-boo',
      audioRef: null,
    },
    {
      id: 'roundtrip',
      target: 'Roundtrip',
      native: 'Round trip',
      literal: '(English loanword)',
      emoji: '🔁',
      phonetic: 'RAUND-trip',
      audioRef: null,
    },
    {
      id: 'magkano_po',
      target: 'Magkano po?',
      native: 'How much? (respectful)',
      literal: 'How-much (respectful)?',
      emoji: '💸',
      phonetic: 'mahg-KAH-noh poh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Isang [thing] sa [place]',
    explanation: "'Isang' = one (used before nouns). 'Sa' = to / at. So 'Isang ticket sa Cebu' = 'one ticket to Cebu'. Swap the place and the structure stays the same.",
    examples: [
      { target: 'Isang ticket sa Bohol', native: 'One ticket to Bohol' },
      { target: 'Dalawang ticket sa Boracay', native: 'Two tickets to Boracay' },
      { target: 'Isang roundtrip sa Cebu', native: 'One round trip to Cebu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Isang ticket sa Cebu', right: 'One ticket to Cebu' },
        { left: 'Roundtrip', right: 'Round trip' },
        { left: 'Magkano po?', right: 'How much? (respectful)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the price politely',
      sentence: '_____ po?',
      options: ['Magkano', 'Isang', 'Saan'],
      correct: 'Magkano',
      context: "'Magkano' = how much. Always pair with 'po' at a counter.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'One ticket to Bohol',
      correct: ['Isang ticket sa Bohol', 'isang ticket sa bohol', 'Isang ticket sa bohol'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "One round trip to Cebu, please" (respectful)',
      words: ['sa', 'Isang', 'po', 'roundtrip', 'Cebu'],
      correct: ['Isang', 'roundtrip', 'po', 'sa', 'Cebu'],
      translation: 'One round trip to Cebu (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at the pier. You want one ticket to Bohol, one way only. What's the cleanest line?",
      question: 'Pick the right opener',
      options: [
        { text: 'Isang ticket sa Bohol po.', correct: true },
        { text: 'Para po!', correct: false },
        { text: 'Magkano po?', correct: false },
      ],
      explanation: "'Isang ticket sa Bohol po' is the request itself. 'Magkano po?' would come after they tell you the destination is right.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'How much? (respectful)',
      correct: ['Magkano po?', 'magkano po', 'Magkano po'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Cebu pier ticket counter. The pumpboat to Bohol leaves in 20 minutes. The clerk looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan po kayo pupunta?',
        native: 'Where are you going, sir/ma\'am?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Isang roundtrip po sa Bohol. Magkano po?', native: 'One round trip to Bohol, please. How much?', correct: true, feedback: 'Beautiful — destination, type, price. Three things in one breath.' },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: 'Wrong context — that\'s a jeepney shout!' },
          { target: 'Bayad po', native: "Here's my fare", correct: false, feedback: "Too soon — you don't even know the price yet." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Apat na raang piso po.',
        native: '400 pesos, sir/ma\'am.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You priced a pumpboat in Tagalog. Bohol is yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'One ticket to Cebu', correct: ['Isang ticket sa Cebu', 'isang ticket sa cebu'] },
      { prompt: 'How much? (respectful)', correct: ['Magkano po?', 'magkano po'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pretend to buy a ticket. Out loud, ask for one round trip to anywhere — 'Isang roundtrip po sa Boracay. Magkano po?' Practice the rhythm.",
    rwenSignoff: "Hanggang sa susunod na biyahe — until the next journey.",
  },

  phase8: {
    scenario: "You're at the Cebu Pier 1 ticket counter, 20 minutes before the pumpboat to Tagbilaran (Bohol) departs. You want a single round-trip ticket and need to confirm the price. The clerk is polite but tired and won't switch to English. You have to do this entirely in Tagalog.",
    rwenRole: "Ate Cora — pier ticket clerk, ~45, polite-but-rushed; she answers in Tagalog and quotes a real price (~₱400-500) for the round trip; expects clear destination + ticket type + 'po'.",
    successCriteria: "User states 'Isang [ticket/roundtrip] sa Bohol po' (or similar) AND asks 'Magkano po?'. Both pieces appear; 'po' on both. User accepts the quoted price or asks one polite follow-up.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
