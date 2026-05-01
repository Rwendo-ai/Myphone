import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Sa hotel — At a hotel',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've reached Tagaytay. The mist is rolling in over Taal Volcano. Your bed-and-breakfast is up the hill. You walk into reception with your bag and a name on a confirmation email. Three phrases get you to your bed.",
    culturalNote: "Filipino hospitality is famously warm — staff will call you 'sir/ma'am' all day and bring you halo-halo unprompted. Reception is usually English-friendly, but slipping into Tagalog earns instant smiles. 'Reservation po' + your last name will get you a key. Always say 'po' — it's the magic word in service settings.",
  },

  chunks: [
    {
      id: 'reservation_po',
      target: 'Reservation po',
      native: 'I have a reservation (respectful)',
      literal: 'Reservation (respectful)',
      emoji: '📋',
      phonetic: 're-zer-VEY-shon poh',
      audioRef: null,
    },
    {
      id: 'susi_ng_kuwarto',
      target: 'Susi ng kuwarto',
      native: 'Room key',
      literal: 'Key of room',
      emoji: '🔑',
      phonetic: 'SOO-see nahng koo-WAR-toh',
      audioRef: null,
    },
    {
      id: 'magcheck_out_na_po',
      target: 'Magcheck-out na po',
      native: 'Check out now (respectful)',
      literal: 'Will-check-out now (respectful)',
      emoji: '🧳',
      phonetic: 'mahg-CHEK-aut nah poh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mag- + verb (intent / action you\'re doing)',
    explanation: "Adding 'mag-' to a verb signals intent or action — 'magcheck-out' = (I'll) check out, 'magbayad' = (I'll) pay. Add 'na po' (now, respectful) and you've got polite hotel-speak.",
    examples: [
      { target: 'Magcheck-in na po', native: "I'll check in now (respectful)" },
      { target: 'Magbayad na po', native: "I'll pay now (respectful)" },
      { target: 'Magcheck-out na po', native: "I'll check out now (respectful)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Reservation po', right: 'I have a reservation (respectful)' },
        { left: 'Susi ng kuwarto', right: 'Room key' },
        { left: 'Magcheck-out na po', right: 'Check out now (respectful)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You walk up to reception and need to mention your booking',
      sentence: '_____ po, sa pangalan ni Cooney.',
      options: ['Reservation', 'Susi', 'Magcheck-out'],
      correct: 'Reservation',
      context: "'Reservation po, sa pangalan ni ___' = 'Reservation under the name of ___' is the natural opener.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Room key',
      correct: ['Susi ng kuwarto', 'susi ng kuwarto'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I\'ll check out now (respectful)"',
      words: ['na', 'Magcheck-out', 'po'],
      correct: ['Magcheck-out', 'na', 'po'],
      translation: "I'll check out now (respectful)",
    },
    {
      type: 'multiple_choice',
      instruction: "It's morning. You hand back the key at reception and want to settle the bill. What's the right line?",
      question: 'Pick the natural phrase',
      options: [
        { text: 'Magcheck-out na po.', correct: true },
        { text: 'Reservation po.', correct: false },
        { text: 'Para po!', correct: false },
      ],
      explanation: "'Reservation po' is for arrival. 'Magcheck-out na po' is for departure. 'Para po' is jeepney territory.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I have a reservation (respectful)',
      correct: ['Reservation po', 'reservation po'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small Tagaytay B&B. The receptionist — Ate Liza — looks up from a clipboard.",
    lines: [
      {
        speaker: 'npc',
        target: 'Magandang hapon po, sir/ma\'am.',
        native: 'Good afternoon, sir/ma\'am.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magandang hapon po. Reservation po, sa pangalan ni Cooney.', native: 'Good afternoon. I have a reservation under Cooney.', correct: true, feedback: 'Perfect — greeted back, then announced your booking. Filipino-style.' },
          { target: 'Susi ng kuwarto.', native: 'Room key.', correct: false, feedback: "Too direct — and you can't have the key without checking in first!" },
          { target: 'Saan ang banyo?', native: "Where's the bathroom?", correct: false, feedback: 'Different lesson — wrong moment.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, heto ang susi ng kuwarto.',
        native: 'Okay, here is the room key.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You checked in entirely in Tagalog. Ate Liza will tell the kitchen to send you halo-halo, watch.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a reservation (respectful)', correct: ['Reservation po', 'reservation po'] },
      { prompt: 'Room key (in Tagalog)', correct: ['Susi ng kuwarto', 'susi ng kuwarto'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine arriving at a hotel and run through the script in your head — 'Magandang hapon po. Reservation po, sa pangalan ni ___.' Speak it out once.",
    rwenSignoff: "Matulog ka na — sleep well. Bukas ulit.",
  },

  phase8: {
    scenario: "You arrive at a small bed-and-breakfast in Tagaytay City around 3pm. Mist is rolling in from Taal Volcano. The receptionist is behind a small wooden desk with a guest book and a fan. You have a reservation under your last name; you need to check in, get the room key, and confirm checkout time — all in Tagalog.",
    rwenRole: "Ate Liza — B&B receptionist, ~38, warm but professional; greets in Tagalog, has the booking book in front of her, and answers in Tagalog when you do.",
    successCriteria: "User opens with a greeting + 'Reservation po', states their last name, and either asks for 'susi ng kuwarto' OR confirms checkout with 'magcheck-out'. 'Po' must appear in at least two of their lines.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
