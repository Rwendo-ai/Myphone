import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-gusto-ko',
  module: 2,
  lesson: 8,
  title: 'Gusto ko... — I want',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're at a Manong's lugaw stall at 3am after a night out in Poblacion. You point at the steaming pot. 'Gusto ko ng lugaw' — 'I want some rice porridge'. Two seconds later, food. This is the ordering phrase that runs every street stall in the country.",
    culturalNote: "Tagalog uses 'ng' (pronounced 'nang') as a particle that links the verb to its object — like 'some' or 'a'. 'Gusto ko ng kape' = 'I want (some) coffee'. Native speakers swallow it fast: 'gusto ko-nang kape'.",
  },

  chunks: [
    {
      id: 'gusto_ko_ng',
      target: 'Gusto ko ng...',
      native: 'I want some...',
      literal: 'Want by-me some...',
      emoji: 'WANT',
      phonetic: 'GOOS-to ko nang',
      audioRef: null,
    },
    {
      id: 'gusto_ko_po_sana',
      target: 'Gusto ko po sana...',
      native: "I'd like... (polite, hedged)",
      literal: 'Want by-me + respect + maybe...',
      emoji: 'POLITE',
      phonetic: 'GOOS-to ko POH SA-na',
      audioRef: null,
    },
    {
      id: 'pakikuha',
      target: 'Pakikuha mo ng...',
      native: 'Please get me some...',
      literal: 'Please-get you some...',
      emoji: 'GRAB',
      phonetic: 'pa-ki-KOO-ha mo nang',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Gusto' + ng",
    explanation: "'Gusto ko' = 'I want'. Add 'ng' before the thing you want: 'Gusto ko ng tubig' = 'I want (some) water'. Add 'sana' to soften it into 'I'd like': 'Gusto ko po sana ng kape' = 'I'd like coffee, please'. The 'sana' is the Tagalog 'maybe could I' — extremely polite.",
    examples: [
      { target: 'Gusto ko ng tubig', native: 'I want (some) water' },
      { target: 'Gusto ko po sana ng kape', native: "I'd like (some) coffee, please" },
      { target: 'Pakikuha mo ng kanin', native: 'Please get me (some) rice' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Gusto ko ng...', right: 'I want some...' },
        { left: 'Gusto ko po sana...', right: "I'd like... (polite)" },
        { left: 'Pakikuha mo ng...', right: 'Please get me some...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Order rice politely at a turo-turo (point-point eatery).",
      sentence: 'Gusto ko po sana _____ kanin.',
      options: ['ng', 'sa', 'po'],
      correct: 'ng',
      context: "'Ng' (said 'nang') is the linking particle between 'gusto' and the noun.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (polite)',
      prompt: "I'd like (some) coffee, please",
      correct: ['Gusto ko po sana ng kape', 'gusto ko po sana ng kape'],
    },
    {
      type: 'build_sentence',
      instruction: 'Order water politely',
      words: ['tubig', 'po', 'sana', 'ng', 'Gusto', 'ko'],
      correct: ['Gusto', 'ko', 'po', 'sana', 'ng', 'tubig'],
      translation: "I'd like (some) water, please",
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a karinderya. The aling behind the counter waits. What's the smoothest local order?",
      question: 'How do you ask for adobo, politely?',
      options: [
        { text: 'Gusto ko po ng adobo', correct: true },
        { text: 'Adobo!', correct: false },
        { text: 'Magkano adobo?', correct: false },
      ],
      explanation: "'Gusto ko po ng adobo' is the proper order. 'Magkano' is asking the price, not ordering. A bare 'Adobo!' works but sounds like a kid demanding food.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I want (some) water',
      correct: ['Gusto ko ng tubig', 'gusto ko ng tubig'],
    },
  ],

  rwenDialogue: {
    intro: "It's 3am. You're at Manong Berto's lugaw cart in Poblacion after a long night out. The smell of ginger broth pulls you in. Order.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong gusto mo, anak?',
        native: 'What do you want, kid?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gusto ko po ng lugaw, may itlog', native: "I'd like (some) lugaw, with egg please", correct: true, feedback: "Polite, specific, locked-in. He'll add extra ginger for you." },
          { target: 'Lugaw', native: '(Lugaw.)', correct: false, feedback: "Works, but reads like you're too tired to be polite. Manong Berto deserves the 'po'." },
          { target: 'Magkano lugaw?', native: 'How much for lugaw?', correct: false, feedback: "Asking the price, not ordering. He'll answer the price and wait for the actual order." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, sandali lang',
        native: 'Sure, just a moment',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Gusto ko po ng ___' is the magic key for every street stall, jollibee counter, and karinderya in Manila. Memorise the rhythm.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I want (some) water',
        correct: ['Gusto ko ng tubig', 'gusto ko ng tubig'],
      },
      {
        prompt: "I'd like (some) coffee (polite)",
        correct: ['Gusto ko po sana ng kape', 'gusto ko po sana ng kape'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order one thing today — coffee, water, anything — and silently say it as 'Gusto ko po ng ___' first. The pattern is the most common verb structure in spoken Tagalog. Drill it.",
    rwenSignoff: "Kainan na — let's eat. Bukas ulit.",
  },

  phase8: {
    scenario: "It's 3am and you're at Manong Berto's lugaw (rice porridge) cart on Poblacion's main strip in Makati after a long night out. The cart is loud, the broth is steaming, and Manong Berto is looking at you waiting for an order.",
    rwenRole: "Manong Berto — lugaw vendor, late 60s, runs the cart 9pm to dawn every night; loves polite kids and quietly resents anyone who barks orders.",
    successCriteria: "User orders using 'Gusto ko po ng (lugaw / kanin / itlog / etc.)' — must include 'po' (Manong is much older), must use 'ng' to link the food. Bonus if they ask 'magkano po' before paying.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
