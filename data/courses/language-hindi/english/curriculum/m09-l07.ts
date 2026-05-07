import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-train-ticket',
  module: 9,
  lesson: 7,
  title: 'Train Tickets — Sleeper, AC, IRCTC',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Indian Railways is the world's largest employer and India's nervous system. 23 million people ride trains every day. Booking a long-distance ticket on IRCTC is its own art form — and the class you choose ('sleeper' vs '3AC' vs '2AC') decides the entire feel of the journey. Today you learn the vocabulary that gets you on board.",
    culturalNote: "Indian train classes form a hierarchy: Sleeper (SL — fan, open windows, cheap, real India) → 3AC (AC three-tier, curtains) → 2AC (more space, more privacy) → 1AC (tiny, premium). For overnight long-distance, 3AC is the sweet spot for most foreigners. For atmosphere, sleeper class. Pick wrong and a 16-hour ride feels very different.",
  },

  chunks: [
    {
      id: 'tikat',
      target: 'टिकट',
      native: 'Ticket',
      literal: 'Tikat — ticket',
      emoji: '🎫',
      phonetic: 'TI-kat',
      audioRef: null,
    },
    {
      id: 'sleeper_ac',
      target: 'स्लीपर / थ्री-एसी',
      native: 'Sleeper / 3AC',
      literal: 'Sleeper / 3AC — train classes',
      emoji: '🛏️',
      phonetic: 'SLEE-par / three A-C',
      audioRef: null,
    },
    {
      id: 'kab_aata_hai',
      target: 'कब आता है?',
      native: 'When does it arrive?',
      literal: 'Kab aata hai — when comes is?',
      emoji: '⏰',
      phonetic: 'kub AA-taa hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Destination] ke liye [class] tikat — ticket to [destination] in [class]',
    explanation: "'Ke liye' (for, to) connects destination to ticket. 'Mumbai ke liye sleeper tikat' (a sleeper ticket to Mumbai). 'Goa ke liye 3AC tikat do' (give me a 3AC ticket to Goa). For arrival time: '[Train name] kab aata hai?' (when does the [train] arrive?).",
    examples: [
      { target: 'Mumbai ke liye sleeper tikat chahiye', native: 'I need a sleeper ticket to Mumbai' },
      { target: 'Goa ke liye 3AC kitne ka hai?', native: 'How much is a 3AC to Goa?' },
      { target: 'Train kab aati hai?', native: 'When does the train arrive?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the train phrase to its meaning',
      pairs: [
        { left: 'Tikat', right: 'Ticket' },
        { left: 'Sleeper / 3AC', right: 'Train classes' },
        { left: 'Kab aata hai?', right: 'When does it arrive?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask for a sleeper ticket to Mumbai',
      sentence: 'Mumbai _____ liye sleeper tikat chahiye.',
      options: ['ke', 'ka', 'ki'],
      correct: 'ke',
      context: 'I need a sleeper ticket to Mumbai.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'When does the train arrive?',
      correct: ['Train kab aati hai?', 'train kab aati hai?', 'Train kab aati hai', 'train kab aati hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're booking a 16-hour overnight train. Which class is the standard sweet spot for foreigners?",
      question: 'Most balanced overnight class:',
      options: [
        { text: '3AC — air-conditioned, three-tier, curtained', correct: true },
        { text: 'Sleeper — non-AC, open, cheapest', correct: false },
        { text: '1AC — luxury, tiny, premium-priced', correct: false },
      ],
      explanation: "3AC is the foreign traveller's standard: AC, locked-from-the-inside curtains, sheets provided, half the price of 2AC. Sleeper is cheaper but no AC — fine in winter, brutal in May. Pick 3AC unless you've ridden Indian trains before.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Give me one 3AC ticket to Goa, please'",
      words: ['Goa', 'ke', 'liye', 'ek', '3AC', 'tikat', 'dijiye.'],
      correct: ['Goa', 'ke', 'liye', 'ek', '3AC', 'tikat', 'dijiye.'],
      translation: 'Give me one 3AC ticket to Goa, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Ticket',
      correct: ['Tikat', 'tikat'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the booking counter at New Delhi railway station. You want to go to Varanasi tonight — overnight, 3AC.",
    lines: [
      {
        speaker: 'npc',
        target: 'हाँ, बताइए?',
        native: 'Yes, tell me?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Varanasi ke liye ek 3AC tikat chahiye, aaj raat ki.', native: "I need one 3AC ticket to Varanasi, for tonight.", correct: true, feedback: "Destination + class + quantity + day. Complete booking in one Hindi sentence. The clerk taps it in." },
          { target: 'Varanasi tikat', native: 'Varanasi ticket', correct: false, feedback: "Too clipped — he doesn't know which class or which day. Use the full frame: 'Varanasi ke liye ek 3AC tikat chahiye, aaj raat ki.'" },
          { target: 'Mujhe Varanasi jaana hai', native: 'I want to go to Varanasi', correct: false, feedback: "That's a statement, not a booking. Ask: 'Varanasi ke liye ek 3AC tikat chahiye, aaj raat ki.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'सीट है — रात साढ़े आठ बजे की ट्रेन।',
        native: "Seat is available — train at half past eight tonight.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Saadhe aath baje — half past eight. You booked an overnight train in Hindi. The Indian Railways will move you 800 kilometres while you sleep.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Ticket', correct: ['Tikat', 'tikat'] },
      { prompt: 'When does the train arrive?', correct: ['Train kab aati hai?', 'train kab aati hai?', 'Train kab aati hai', 'train kab aati hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you're booking a train from Delhi to Mumbai overnight. Say out loud: 'Mumbai ke liye ek 3AC tikat chahiye, aaj raat ki.' Say it three times. By the third, the booking-counter rhythm is yours.",
    rwenSignoff: "Indian Railways is 68,000 kilometres of track. Now you can ride it in Hindi. Phir milenge.",
  },

  phase8: {
    scenario: "You're at the foreign tourist booking window at New Delhi railway station, trying to get a 3AC ticket on the overnight Vibhuti Express to Varanasi for tonight. The clerk has a queue behind you and prefers efficient Hindi to fumbling English. You need to state destination, class, day, and confirm the timing — all without retreating into English when he asks about 'lower berth ya upper berth'.",
    rwenRole: "Foreign tourist counter clerk at New Delhi railway station — 50s, has booked tickets for forty years, gives you a real seat (not a 'tatkal' last-minute one) if you ask in clean Hindi using 'ke liye' + class; otherwise gives you the standard tourist treatment.",
    successCriteria: "User states the booking in one structured Hindi sentence: '[Varanasi] ke liye ek 3AC tikat chahiye, [aaj raat] ki', understands when he asks 'kaunsa berth?' (which berth?) — answer 'lower' or 'upper', confirms the train timing using 'kab aati hai?' framing, and uses 'dhanyavaad' to close the transaction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
