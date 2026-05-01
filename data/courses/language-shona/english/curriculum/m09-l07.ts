import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'At the Hotel — Imba yokurara',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Zimbabwe's hotels range from grand colonial lodges to simple guesthouses in rural areas. Whether you're at the Meikles Hotel in Harare or a village B&B, knowing how to check in, ask for a room, and handle basics in Shona is invaluable.",
    culturalNote: "Even basic Shona at a hotel or guesthouse creates a completely different experience. Staff are often surprised and delighted. A learner willing to try the language gets exceptional service — not from obligation, but from genuine appreciation.",
  },

  chunks: [
    {
      id: 'imba_yokurara',
      target: 'Imba yokurara',
      native: 'Hotel / Guesthouse',
      literal: 'House of-sleeping',
      emoji: '🏨',
      phonetic: 'I-mba yo-ku-RA-ra',
      audioRef: null,
    },
    {
      id: 'ndinoda_rumuri',
      target: 'Ndinoda rumuri',
      native: 'I need a room',
      literal: 'I-need room',
      emoji: '🛏️',
      phonetic: 'ndi-no-da ru-MU-ri',
      audioRef: null,
    },
    {
      id: 'kusvika_rinhi',
      target: 'Munosvika rinhi?',
      native: 'When do you arrive? / When are you checking in?',
      literal: 'You-arrive when?',
      emoji: '📅',
      phonetic: 'mu-no-SVI-ka ri-NHI',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Imba yo- — 'house of [purpose]'",
    explanation: "'Imba yo-' + verb = house for that purpose. Imba yokurara (house for sleeping = hotel). Imba yokushandira (house for working = office). Imba yokudzidzira (house for learning = school). One pattern, many buildings.",
    examples: [
      { target: 'Imba yokurara', native: 'Hotel (house for sleeping)' },
      { target: 'Imba yokudzidzira', native: 'School (house for learning)' },
      { target: 'Imba yokushandira', native: 'Office (house for working)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hotel phrase to its meaning',
      pairs: [
        { left: 'Imba yokurara', right: 'Hotel / Guesthouse' },
        { left: 'Ndinoda rumuri', right: 'I need a room' },
        { left: 'Munosvika rinhi?', right: 'When do you arrive?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you need a room',
      sentence: 'Ndinoda _____, ndapota.',
      options: ['rumuri', 'mvura', 'sadza'],
      correct: 'rumuri',
      context: 'I need a room, please.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Hotel / Guesthouse',
      correct: ['Imba yokurara', 'imba yokurara'],
    },
    {
      type: 'multiple_choice',
      instruction: "How would you say 'school' using the imba yo- pattern?",
      question: 'School = imba yo[verb]:',
      options: [
        { text: 'Imba yokudzidzira', correct: true },
        { text: 'Imba yokushandira', correct: false },
        { text: 'Imba yokurara', correct: false },
      ],
      explanation: "Kudzidzira = to learn for/at. Imba yokudzidzira = house for learning = school.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I need a room for one night'",
      words: ['Ndinoda', 'rumuri', 'husiku', 'humwe,', 'ndapota.'],
      correct: ['Ndinoda', 'rumuri', 'husiku', 'humwe,', 'ndapota.'],
      translation: 'I need a room for one night, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I need a room',
      correct: ['Ndinoda rumuri', 'ndinoda rumuri'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at a guesthouse in Harare. The receptionist greets you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mauya. Ndinokubatsira sei?',
        native: 'Welcome. How can I help you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda. Ndinoda rumuri humwe, ndapota. Ndichasara husiku humwe.', native: 'Thank you. I need one room, please. I will stay for one night.', correct: true, feedback: "Room request + duration. Complete check-in information. Professional and clear." },
          { target: 'Ndinoda rumuri', native: 'I need a room', correct: false, feedback: "Good start — add how many nights: 'Ndinoda rumuri husiku humwe, ndapota.' One room, one night." },
          { target: 'Ndinoda imba yokurara', native: 'I need a hotel', correct: false, feedback: "You're already at the hotel — ask for a room specifically: 'Ndinoda rumuri husiku humwe, ndapota.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Room confirmed. You checked in — in Shona. That's a first for most guests here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hotel / Guesthouse', correct: ['Imba yokurara', 'imba yokurara'] },
      { prompt: 'I need a room', correct: ['Ndinoda rumuri', 'ndinoda rumuri'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you're checking into a hotel in Harare. Say the full check-in sentence: 'Ndatenda. Ndinoda rumuri humwe, ndapota. Ndichasara husiku humwe.' Say it out loud.",
    rwenSignoff: "Your room is ready. Rara zvakanaka. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You've reached a small guesthouse near the Avondale shops in Harare after a long day of navigating kombis. It's getting dark and you need to check in for one night — in Shona, because the receptionist switched into Shona mid-sentence and you want to keep up rather than retreat into English.",
    rwenRole: "Mai Tatenda — guesthouse receptionist on the Avondale shops strip (not the same passer-by; same warm Mai-Tatenda archetype, different setting), 40s, runs the front desk solo, will absolutely lean into Shona if you started it.",
    successCriteria: "User refers to the building as 'imba yokurara' if asked about the type of place, requests the room with 'Ndinoda rumuri' (NOT 'Ndinoda imba' which means a whole house), specifies duration with 'husiku humwe' (one night), and uses 'ndapota' here because reception register IS polite — unlike the kombi register in l05.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
