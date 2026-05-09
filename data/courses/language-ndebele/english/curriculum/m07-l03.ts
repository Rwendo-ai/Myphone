import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03',
  module: 7,
  lesson: 3,
  title: 'Transport — bus, taxi, car',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "In Matabeleland, transport has its own language. The big ZUPCO bus is ibhasi. The shared kombi taxi is itekisi. Your private car is imota. Knowing which is which keeps you on the right vehicle — and the right fare.",
    culturalNote: "In Bulawayo, 'itekisi' usually means the shared minibus kombi, not a metered cab. A metered cab is sometimes called 'icab' or 'imota yokuqasha' (a hired car). Always confirm the fare ('imali') before getting in — kombi fares are fixed by route, but private hires are negotiable.",
  },

  chunks: [
    {
      id: 'ibhasi',
      target: 'ibhasi',
      native: 'bus',
      emoji: '🚌',
      phonetic: 'ee-bah-see',
      audioRef: null,
    },
    {
      id: 'itekisi',
      target: 'itekisi',
      native: 'taxi / shared kombi',
      emoji: '🚐',
      phonetic: 'ee-teh-kee-see',
      audioRef: null,
    },
    {
      id: 'imota',
      target: 'imota',
      native: 'car',
      emoji: '🚗',
      phonetic: 'ee-moh-tah',
      audioRef: null,
    },
    {
      id: 'isitimela',
      target: 'isitimela',
      native: 'train',
      emoji: '🚆',
      phonetic: 'ee-see-tee-meh-lah',
      audioRef: null,
    },
    {
      id: 'ngihamba_nge',
      target: 'Ngihamba nge-...',
      native: 'I travel by ... / I go on ...',
      literal: 'I-walk by',
      emoji: '🛣️',
      phonetic: 'ngee-hahm-bah ngeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'nge- = "by means of"',
    explanation: "To say 'by bus', 'by taxi', 'by car', isiNdebele attaches nge- to the front of the transport word. Ibhasi → ngebhasi. Itekisi → ngetekisi. Imota → ngemota. The 'i-' prefix gets absorbed into nge-. So 'I travel by bus' is 'Ngihamba ngebhasi.'",
    examples: [
      { target: 'ngebhasi', native: 'by bus' },
      { target: 'ngetekisi', native: 'by taxi/kombi' },
      { target: 'ngemota', native: 'by car' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each transport word to its meaning',
      pairs: [
        { left: 'ibhasi', right: 'bus' },
        { left: 'itekisi', right: 'kombi / shared taxi' },
        { left: 'imota', right: 'car' },
        { left: 'isitimela', right: 'train' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence',
      sentence: 'Ngihamba ___ (by bus).',
      options: ['ngebhasi', 'ngemota', 'ngetekisi'],
      correct: 'ngebhasi',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'I travel by car.',
      correct: ['Ngihamba ngemota', 'ngihamba ngemota', 'Ngihamba ngemota.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence',
      words: ['Ngiya', 'eBulawayo', 'ngebhasi'],
      correct: ['Ngiya', 'eBulawayo', 'ngebhasi'],
      translation: 'I am going to Bulawayo by bus.',
    },
  ],

  rwenDialogue: {
    intro: "You're at the Bulawayo Renkini terminus, deciding which vehicle to take to Gwanda.",
    lines: [
      { speaker: 'npc',  target: 'Uhamba ngani namhla?', native: 'How are you travelling today?' },
      { speaker: 'rwen', rwenLine: "She's asking which vehicle. You're going by kombi — say so." },
      { speaker: 'user', userChoices: [
        { target: 'Ngihamba ngetekisi.', native: 'I travel by kombi.', correct: true, feedback: "Spot on. She'll point you to the queue." },
        { target: 'Ngiya eGwanda.', native: 'I am going to Gwanda.', correct: false, feedback: "Right destination, wrong question — she asked HOW you're travelling." },
        { target: 'Imota.', native: 'Car.', correct: false, feedback: "Just the noun — but you need 'ngemota' to mean 'by car'." },
      ]},
      { speaker: 'npc',  target: 'Itekisi yakhona izasuka emva kwamahola amabili.', native: 'That kombi will leave in two hours.' },
      { speaker: 'rwen', rwenLine: "Kombis usually leave when full, not on a schedule. Pack patience." },
    ],
  },

  activeRecall: {
    instruction: 'Recall the transport words.',
    prompts: [
      { prompt: 'How do you say "bus"?', correct: ['ibhasi'] },
      { prompt: 'How do you say "taxi/kombi"?', correct: ['itekisi'] },
      { prompt: 'How do you say "by car"?', correct: ['ngemota'] },
    ],
  },

  mission: {
    title: 'Map your last journey',
    task: "Think of the last trip you took. Say in isiNdebele: 'Ngihamba [transport] ngiya [place].' Out loud. If you walked, the verb is the same — just drop the 'nge-' phrase: 'Ngiya ekhaya.'",
    rwenSignoff: "The transport word changes the price; the destination word changes the day.",
  },

  phase8: {
    scenario: "You're trying to decide between the ZUPCO bus and a kombi for the trip from Bulawayo to Gwanda. Discuss the trade-offs with a fellow traveller at the rank.",
    rwenRole: "Fellow traveller in their 30s, takes this route weekly, opinionated about transport",
    successCriteria: "User used at least one transport word with nge- and one place name with e-.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
