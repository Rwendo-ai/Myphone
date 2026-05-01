import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-magkano',
  module: 2,
  lesson: 7,
  title: 'Magkano? — How much?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're at the Greenhills tiangge eyeing a pearl necklace. The vendor sees a foreigner and the price magically doubles. Your weapon: 'Magkano po?' — said with the right face. The moment you ask in Tagalog, the foreigner tax drops 30%.",
    culturalNote: "Haggling at tiangges (bazaars) and palengkes (wet markets) is expected — it's a dance, not a fight. The first price is never the real price. Counter with a smile, walk away once if needed; they'll call you back.",
  },

  chunks: [
    {
      id: 'magkano',
      target: 'Magkano?',
      native: 'How much?',
      literal: 'How-much?',
      emoji: 'PESO',
      phonetic: 'mag-KA-no',
      audioRef: null,
    },
    {
      id: 'magkano_po_ito',
      target: 'Magkano po ito?',
      native: 'How much is this (formal)?',
      literal: 'How-much + respect this?',
      emoji: 'POINT',
      phonetic: 'mag-KA-no POH ee-TOH',
      audioRef: null,
    },
    {
      id: 'sobrang_mahal',
      target: 'Sobrang mahal',
      native: 'Too expensive',
      literal: 'Very-much expensive',
      emoji: 'WINCE',
      phonetic: 'so-BRANG ma-HAL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Price questions',
    explanation: "'Magkano' = 'how much'. The full polite form is 'Magkano po ito?' — 'How much is this (formal)?'. To haggle, react with 'sobrang mahal' (too expensive) — the magic word that signals you know the dance. Then offer your counter-price.",
    examples: [
      { target: 'Magkano po ito?', native: 'How much is this (formal)?' },
      { target: 'Magkano yan?', native: 'How much is that?' },
      { target: 'Sobrang mahal — pwede ba 200?', native: 'Too expensive — can it be 200?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Magkano?', right: 'How much?' },
        { left: 'Magkano po ito?', right: 'How much is this (formal)?' },
        { left: 'Sobrang mahal', right: 'Too expensive' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Picking up a barong at the Greenhills tiangge — ask politely.",
      sentence: '_____ po ito?',
      options: ['Magkano', 'Saan', 'Marunong'],
      correct: 'Magkano',
      context: "'Magkano' = 'how much'. 'Po' + 'ito' (this) = the full polite price question.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (formal)',
      prompt: 'How much is this?',
      correct: ['Magkano po ito?', 'Magkano ito?', 'magkano po ito?', 'magkano ito?', 'Magkano po ito', 'Magkano ito'],
    },
    {
      type: 'build_sentence',
      instruction: 'React to a high price',
      words: ['mahal', 'Sobrang'],
      correct: ['Sobrang', 'mahal'],
      translation: 'Too expensive',
    },
    {
      type: 'multiple_choice',
      instruction: "Vendor says 800. You think 400 is fair. What's the right opening move?",
      question: 'How do you start the haggle?',
      options: [
        { text: 'Sobrang mahal — pwede ba 400?', correct: true },
        { text: 'Hindi po', correct: false },
        { text: 'Salamat', correct: false },
      ],
      explanation: "'Sobrang mahal' opens the dance. 'Pwede ba' (can it be) softens your counter-offer. 'Salamat' = thank you, which ends the conversation, not negotiates it.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'How much?',
      correct: ['Magkano?', 'magkano?', 'Magkano', 'magkano'],
    },
  ],

  rwenDialogue: {
    intro: "Greenhills, Saturday afternoon. You spot a freshwater pearl necklace at a tiangge stall. The ate behind the counter watches you reach for it.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magkano po ito?', native: 'How much is this (formal)?', correct: true, feedback: "Perfect — 'po' makes you sound like a regular, not a tourist." },
          { target: 'How much?', native: '(English)', correct: false, feedback: "Watch the price double in real time." },
          { target: 'Magkano!', native: 'How much! (no po)', correct: false, feedback: "Functional but missing 'po' — sounds rushed." },
        ],
      },
      {
        speaker: 'npc',
        target: '1500 lang, ate',
        native: '1500 only, sis',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sobrang mahal — pwede ba 800?', native: 'Too expensive — can it be 800?', correct: true, feedback: "Clean haggle. Walk away once if she refuses; she\'ll call you back." },
          { target: 'Sige po', native: 'Okay (sir/ma\'am)', correct: false, feedback: "You just paid the foreigner price. The first number is never the real number." },
          { target: 'Hindi ko maintindihan', native: "I don't understand", correct: false, feedback: 'You understood — you just need to negotiate.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "That's the dance. 'Sobrang mahal' isn't an insult — it's the password. She heard it and now you're a real customer.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How much is this (formal)?',
        correct: ['Magkano po ito?', 'magkano po ito?', 'Magkano po ito', 'magkano po ito'],
      },
      {
        prompt: 'Too expensive',
        correct: ['Sobrang mahal', 'sobrang mahal'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask the price of one thing today — anywhere, in any language — but say 'Magkano po ito?' in your head first. The mouth-shape is the muscle memory you'll need at the next palengke.",
    rwenSignoff: "Mura na, lalo na sa 'yo — cheap, especially for you. Bukas ulit.",
  },

  phase8: {
    scenario: "Saturday afternoon at the Greenhills tiangge in San Juan. You spot a freshwater pearl necklace at a stall — the kind of thing your mom would love. The ate behind the counter watches you reach for it. Time to find out the real price.",
    rwenRole: "Ate Joy — tiangge vendor, late 30s, sharp negotiator who quotes double the price to anyone speaking English; respects buyers who haggle in Tagalog and drops to the local price for them.",
    successCriteria: "User asks 'Magkano po ito?' in Tagalog (NOT English). When Ate Joy quotes high, they push back with 'sobrang mahal' and offer a counter-price. Walking away once is encouraged — she'll call them back.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
