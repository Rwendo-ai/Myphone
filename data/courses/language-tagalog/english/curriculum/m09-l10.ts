import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Pulling it all together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine lessons. From 'Saan ang banyo?' to chaining a jeepney ride from Cubao to Quiapo. Today is graduation. We chain it ALL — directions, transport, tickets, hotels, and the perfect 'paki-' rescue phrase. One mission: plan a Tagalog trip from start to finish.",
    culturalNote: "What you've learned this module — the 'po' that opens doors, the 'paki-' that softens any ask, the 'para po!' that stops the jeepney — is the difference between a tourist and a guest. Filipinos light up when foreigners try. Three phrases of effort buys you a whole afternoon of help. That's the secret of the country.",
  },

  chunks: [
    {
      id: 'pupunta_ako_sa',
      target: 'Pupunta ako sa...',
      native: "I'm going to...",
      literal: 'Will-go I to...',
      emoji: '🧳',
      phonetic: 'poo-POON-tah ah-koh sah',
      audioRef: null,
    },
    {
      id: 'pwede_po_bang_makitanong',
      target: 'Pwede po bang makitanong?',
      native: 'Can I ask something? (respectful)',
      literal: 'Possible (respectful) ask?',
      emoji: '🙋',
      phonetic: 'PWE-de poh bahng mah-kee-tah-NOHNG',
      audioRef: null,
    },
    {
      id: 'salamat_po',
      target: 'Salamat po',
      native: 'Thank you (respectful)',
      literal: 'Thanks (respectful)',
      emoji: '🙏',
      phonetic: 'sah-LAH-maht poh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The travel sandwich — open / ask / close',
    explanation: "Every Tagalog travel exchange has a shape. OPEN with politeness ('Paumanhin po' / 'Pwede po bang makitanong?'). ASK your real question ('Saan ang ___?' / 'Magkano po?' / 'Naliligaw ako'). CLOSE with thanks ('Salamat po'). Three beats. That's the whole module in one structure.",
    examples: [
      { target: 'Paumanhin po, saan ang MRT? Salamat po.', native: "Excuse me, where's the MRT? Thank you." },
      { target: 'Pwede po bang pakitulong? Naliligaw ako. Salamat po.', native: "Could you help? I'm lost. Thank you." },
      { target: 'Pupunta ako sa Cebu. Magkano po? Salamat po.', native: "I'm going to Cebu. How much? Thank you." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each travel phrase to its purpose',
      pairs: [
        { left: 'Paumanhin po', right: 'Excuse me (open)' },
        { left: 'Naliligaw ako', right: "I'm lost (ask)" },
        { left: 'Salamat po', right: 'Thank you (close)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Fill the blank to complete this travel sandwich: ___, saan ang MRT? Salamat po.",
      sentence: '_____ po, saan ang MRT? Salamat po.',
      options: ['Paumanhin', 'Bayad', 'Para'],
      correct: 'Paumanhin',
      context: "'Paumanhin po' = excuse me. The opener of every polite Tagalog travel ask.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: "I'm going to Cebu",
      correct: ['Pupunta ako sa Cebu', 'pupunta ako sa cebu', 'Pupunta ako sa cebu'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to build the full polite ask: "Excuse me, where\'s the bathroom? Thank you."',
      words: ['banyo?', 'po,', 'po.', 'ang', 'Paumanhin', 'Salamat', 'saan'],
      correct: ['Paumanhin', 'po,', 'saan', 'ang', 'banyo?', 'Salamat', 'po.'],
      translation: "Excuse me, where's the bathroom? Thank you.",
    },
    {
      type: 'multiple_choice',
      instruction: "You finish a 5-minute conversation where a stranger drew you a map to your hotel. What's the perfect closer?",
      question: 'Pick the right close',
      options: [
        { text: 'Salamat po!', correct: true },
        { text: 'Bayad po', correct: false },
        { text: 'Para po!', correct: false },
      ],
      explanation: "'Salamat po' = thank you, respectful. The unmissable Filipino sign-off.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Can I ask something?',
      correct: ['Pwede po bang makitanong?', 'pwede po bang makitanong', 'Pwede po bang makitanong'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Boracay's Cagban port at sunrise. You need to get to your beachfront resort. You see a tricycle driver, a ticket counter, and a hotel sign. Run the full sandwich — open, ask, close — three times.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, pwede po bang makitanong? Pupunta ako sa hotel. Magkano po?', native: 'Excuse me, can I ask something? I\'m going to the hotel. How much?', correct: true, feedback: 'You opened, asked, and stayed polite. Driver smiles wide.' },
          { target: 'Magkano hotel?', native: 'How much hotel?', correct: false, feedback: 'No "po", no opener — feels abrupt.' },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: "He's not driving yet — wrong moment!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Isang daang piso po.',
        native: '100 pesos, sir/ma\'am.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sige po. Salamat po!', native: 'Okay. Thank you!', correct: true, feedback: 'Closed it perfectly. He gestures to the tricycle.' },
          { target: 'Naliligaw ako', native: "I'm lost", correct: false, feedback: "You're not lost anymore — you've struck a deal!" },
          { target: 'Para po!', native: 'Stop please!', correct: false, feedback: "Still wrong moment for that shout!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module nine — done. You can now ask, ride, pay, navigate, and thank in Tagalog. The Philippines just got bigger for you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm going to... (in Tagalog)", correct: ['Pupunta ako sa...', 'pupunta ako sa', 'Pupunta ako sa'] },
      { prompt: 'Thank you (respectful, in Tagalog)', correct: ['Salamat po', 'salamat po'] },
    ],
  },

  mission: {
    title: "Today's Journey — The Big One",
    task: "Plan a Tagalog trip out loud. Pick a destination — Cebu, Bohol, Boracay, Tagaytay. Now narrate, in Tagalog: how you'll greet the ticket counter, ask the price, ride the transport, find the hotel, and check in. Use as many module 9 chunks as you can.",
    rwenSignoff: "You crossed the country in a language. Maraming salamat po — thank you, deeply. Hanggang sa susunod na biyahe.",
  },

  phase8: {
    scenario: "You arrive at Cagban Port, Boracay at 6am after an overnight ferry from Manila. You need to: (1) ask a tricycle driver for the price to your beachfront resort in D'Mall area, (2) confirm the route, (3) check in at the resort reception. You'll do all three exchanges in one conversation, end-to-end, in Tagalog.",
    rwenRole: "Kuya Boyet — Boracay tricycle driver and (after the ride) Ate Mhel the resort receptionist; both speak Tagalog throughout, both reward polite open-ask-close structure with smiles and quick service.",
    successCriteria: "User runs at least TWO complete open-ask-close sandwiches (e.g., 'Paumanhin po + Magkano po? + Salamat po' THEN 'Reservation po + ___ + Salamat po'). They use at least 4 distinct module-9 chunks across the conversation. 'Po' appears in 5+ lines.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
