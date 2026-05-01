import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Jeep, MRT, taxi — Transport',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Manila moves on wheels you've probably never seen. The jeepney — chrome-decked, painted, packed. The tricycle — a motorbike with a sidecar that fits five somehow. The MRT — the elevated metro that snakes down EDSA. Today we name them, tomorrow we ride them.",
    culturalNote: "Each city has its own mix. Metro Manila: jeepneys + MRT/LRT + tricycles + taxis + Grab. Cebu: more jeepneys, fewer trains. Provinces: tricycles dominate. The jeepney is the cultural emblem — born from repurposed WWII US military jeeps. Riding one is a Filipino rite of passage.",
  },

  chunks: [
    {
      id: 'jeepney',
      target: 'Jeepney',
      native: 'Jeepney',
      literal: '(chrome-painted shared minibus)',
      emoji: '🚐',
      phonetic: 'JIP-nee',
      audioRef: null,
    },
    {
      id: 'mrt',
      target: 'MRT',
      native: 'MRT (metro / elevated train)',
      literal: 'Metro Rail Transit',
      emoji: '🚆',
      phonetic: 'em-ar-TI',
      audioRef: null,
    },
    {
      id: 'tricycle',
      target: 'Tricycle',
      native: 'Tricycle (motorbike + sidecar)',
      literal: 'Three-wheeler taxi',
      emoji: '🛺',
      phonetic: 'TRAI-see-kel',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sumakay sa + transport',
    explanation: "To say 'take the X' or 'ride the X', use 'sumakay sa' + transport. 'Sumakay' = ride/board. 'Taxi' is a loanword — same in Tagalog. So is 'bus' and 'tricycle'.",
    examples: [
      { target: 'Sumakay sa jeepney', native: 'Take the jeepney' },
      { target: 'Sumakay sa MRT', native: 'Take the MRT' },
      { target: 'Sumakay sa tricycle', native: 'Take the tricycle' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the transport to its description',
      pairs: [
        { left: 'Jeepney', right: 'Chrome-painted shared minibus' },
        { left: 'MRT', right: 'Metro / elevated train' },
        { left: 'Tricycle', right: 'Motorbike + sidecar' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're in Manila and want to take the metro from Ayala to Cubao",
      sentence: 'Sumakay tayo sa _____.',
      options: ['MRT', 'tricycle', 'banyo'],
      correct: 'MRT',
      context: "Long distance down EDSA = MRT. Tricycles are short-trip only.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (loanword — keep it as-is)',
      prompt: 'Tricycle',
      correct: ['Tricycle', 'tricycle'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "Take the jeepney"',
      words: ['sa', 'Sumakay', 'jeepney'],
      correct: ['Sumakay', 'sa', 'jeepney'],
      translation: 'Take the jeepney',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at the airport in Manila with three suitcases. Which transport is wrong for the trip downtown?",
      question: 'Pick the WRONG choice',
      options: [
        { text: 'Tricycle (too small for 3 suitcases + far)', correct: true },
        { text: 'Taxi', correct: false },
        { text: 'Grab car', correct: false },
      ],
      explanation: "Tricycles are short-trip, lightweight transport — not for airports with luggage.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Jeepney',
      correct: ['Jeepney', 'jeepney'],
    },
  ],

  rwenDialogue: {
    intro: "You've just landed at NAIA. Your friend texts asking how you'll get to your hotel in Makati. Tell her in Tagalog.",
    lines: [
      {
        speaker: 'npc',
        target: 'Paano ka pupunta?',
        native: 'How are you getting there?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sumakay ako sa taxi.', native: "I'll take a taxi.", correct: true, feedback: 'Smart — airport + luggage + far = taxi/Grab.' },
          { target: 'Sumakay ako sa tricycle.', native: "I'll take a tricycle.", correct: false, feedback: 'Tricycles are for short trips and small loads — not airport runs.' },
          { target: 'Saan ang banyo?', native: "Where's the bathroom?", correct: false, feedback: 'Different question entirely!' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige! Ingat ka.',
        native: 'Okay! Take care.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You picked the right wheels for the trip. Filipinos respect a tourist who knows when to skip the jeepney.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The chrome-painted shared minibus (Tagalog name)', correct: ['Jeepney', 'jeepney'] },
      { prompt: 'The motorbike-with-sidecar transport', correct: ['Tricycle', 'tricycle'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three ways you've travelled this week — in Tagalog. 'Sumakay ako sa ___.' Even 'Sumakay ako sa kotse' (I rode in a car) counts.",
    rwenSignoff: "Ingat sa biyahe — safe travels. Bukas ulit.",
  },

  phase8: {
    scenario: "You've just arrived at NAIA Terminal 3 in Manila with one backpack. Your hotel is in Cubao, about an hour away in traffic. A friend on the phone wants to know your plan — but they're a budget-conscious local and want to talk you out of taxi if possible. You need to weigh jeepney/MRT vs taxi and explain your choice in Tagalog.",
    rwenRole: "Tita Liza — your tita on the phone, ~50, frugal, will gently push 'sumakay ka sa MRT, mas mura' (take the MRT, cheaper); accepts your final answer once you justify it.",
    successCriteria: "User names at least TWO transport options (jeepney/MRT/taxi/tricycle) and chooses one, using 'Sumakay ako sa ___' or 'sumakay sa ___'. Conversation goes back-and-forth at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
