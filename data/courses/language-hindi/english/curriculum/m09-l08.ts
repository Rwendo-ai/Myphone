import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-hotel',
  module: 9,
  lesson: 8,
  title: 'Hotel Check-In — Kamra & Booking',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "From a heritage haveli in Jaipur to a budget guesthouse in Rishikesh to a boutique hotel in Goa — Indian hospitality runs deep, and front-desk staff almost everywhere speak Hindi as their first language. Even basic Hindi at check-in transforms the entire stay. You'll get the better room.",
    culturalNote: "Indian hotels often hold rooms back for last-minute walk-ins, and the receptionist has discretion. A guest who greets in Hindi (with a 'Namaste') and asks for a room in Hindi gets treated as a guest, not a transaction. Tea may arrive unrequested. The room may suddenly have a balcony.",
  },

  chunks: [
    {
      id: 'kamra',
      target: 'कमरा',
      native: 'Room',
      literal: 'Kamra — room',
      emoji: '🛏️',
      phonetic: 'KUM-raa',
      audioRef: null,
    },
    {
      id: 'kamra_chahiye',
      target: 'कमरा चाहिए',
      native: 'I need a room',
      literal: 'Kamra chahiye — room I-need',
      emoji: '🏨',
      phonetic: 'KUM-raa CHAA-hi-yeh',
      audioRef: null,
    },
    {
      id: 'kitne_din',
      target: 'कितने दिन?',
      native: 'How many days?',
      literal: 'Kitne din — how-many days?',
      emoji: '📅',
      phonetic: 'KIT-neh DIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Number] din ke liye kamra chahiye — room for [n] days',
    explanation: "'Ke liye' (for) again, this time with duration. 'Do din ke liye kamra chahiye' (I need a room for two days). 'Ek raat ke liye' (for one night). The pattern: [Number] + [din/raat] + ke liye + kamra chahiye.",
    examples: [
      { target: 'Ek raat ke liye kamra chahiye', native: 'I need a room for one night' },
      { target: 'Do din ke liye kamra chahiye', native: 'I need a room for two days' },
      { target: 'Kamra kitne ka hai?', native: 'How much is the room?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hotel phrase to its meaning',
      pairs: [
        { left: 'Kamra', right: 'Room' },
        { left: 'Kamra chahiye', right: 'I need a room' },
        { left: 'Kitne din?', right: 'How many days?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask for a room for two nights',
      sentence: 'Do raat _____ liye kamra chahiye.',
      options: ['ke', 'ka', 'ki'],
      correct: 'ke',
      context: 'I need a room for two nights.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I need a room',
      correct: ['Kamra chahiye', 'kamra chahiye', 'Kamra chahiye.', 'kamra chahiye.'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at a heritage haveli in Jaipur with no booking. The receptionist asks 'Kitne din?' What does she mean?",
      question: "'Kitne din?' is asking:",
      options: [
        { text: 'How many days will you stay?', correct: true },
        { text: 'How much money?', correct: false },
        { text: 'Which room?', correct: false },
      ],
      explanation: "'Kitne' (how many) + 'din' (days). She wants to know how long you'll stay before quoting a rate. Answer: 'Do din ke liye' or 'Teen raat ke liye'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I need one room for three nights, please'",
      words: ['Teen', 'raat', 'ke', 'liye', 'ek', 'kamra', 'chahiye,', 'please.'],
      correct: ['Teen', 'raat', 'ke', 'liye', 'ek', 'kamra', 'chahiye,', 'please.'],
      translation: 'I need one room for three nights, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How much is the room?',
      correct: ['Kamra kitne ka hai?', 'kamra kitne ka hai?', 'Kamra kitne ka hai', 'kamra kitne ka hai'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small heritage haveli in Jaipur with no booking. The receptionist greets you with folded hands.",
    lines: [
      {
        speaker: 'npc',
        target: 'नमस्ते। बताइए?',
        native: 'Namaste. Tell me?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste. Do raat ke liye ek kamra chahiye, please.', native: 'Namaste. I need one room for two nights, please.', correct: true, feedback: "Greeting + duration + room request + please. Complete check-in in Hindi. She'll bring the registration book and probably tea." },
          { target: 'Kamra hai?', native: 'Is there a room?', correct: false, feedback: "Too bare — she'll ask 'kitne din?' anyway. Front-load the duration: 'Do raat ke liye ek kamra chahiye, please.'" },
          { target: 'Mujhe room chahiye', native: 'I need a room (with English word)', correct: false, feedback: "Use 'kamra' instead of 'room' — it costs nothing and signals respect for her language. 'Do raat ke liye ek kamra chahiye, please.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'जी, कमरा है। बारह सौ रुपये एक रात।',
        native: 'Yes, room is available. 1200 rupees per night.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Baarah sau rupiye — twelve hundred rupees. The Hindi got you the local rate, not the inflated walk-in tourist rate. Front-desk fluency pays.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need a room', correct: ['Kamra chahiye', 'kamra chahiye', 'Kamra chahiye.', 'kamra chahiye.'] },
      { prompt: 'How much is the room?', correct: ['Kamra kitne ka hai?', 'kamra kitne ka hai?', 'Kamra kitne ka hai', 'kamra kitne ka hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say the full check-in sentence aloud, three times, with different durations: 'Ek raat ke liye kamra chahiye.' 'Do din ke liye kamra chahiye.' 'Teen raat ke liye kamra chahiye.' The pattern is now yours.",
    rwenSignoff: "Your room is ready. Aaram se sona — sleep well. Phir milenge.",
  },

  phase8: {
    scenario: "You arrive without a booking at a small heritage haveli in Jaipur's old city at dusk. You need a room for three nights. The receptionist greets you with 'Namaste, bataiye?' and you have to negotiate the entire check-in — duration, rate, room type — in Hindi front-desk register, not the kombi register from earlier lessons.",
    rwenRole: "Heritage haveli receptionist in Jaipur's pink city — 40s, runs the front desk solo, switches into warm full-Hindi the moment you greet in Hindi; will quietly upgrade you to a balcony room if you stay in Hindi through the booking.",
    successCriteria: "User opens with 'Namaste' (NOT 'Hello' / 'Hi'), uses the full '[Teen raat] ke liye [ek kamra] chahiye, please' construction, says 'kamra' (not the English 'room'), uses 'please' or 'dhanyavaad' since front-desk register IS polite — unlike the auto-rickshaw register from l05 — and confirms the rate using 'Kamra kitne ka hai?' before agreeing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
