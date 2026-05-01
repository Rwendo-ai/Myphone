import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'Sa Karinderya — At an Eatery',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A karinderya is a small neighbourhood eatery — open kitchen, trays of ulam under glass, stools at a counter. It's where Manila eats lunch for under 100 pesos. Today we walk in like we belong.",
    culturalNote: "At a karinderya you point at trays — bistek, menudo, kaldereta — and they ladle it over kanin. Menus only appear at fancier places. Saying 'po' (the respect particle) makes everyone treat you better, instantly.",
  },

  chunks: [
    {
      id: 'mesa_para_sa_dalawa',
      target: 'Mesa para sa dalawa, po',
      native: 'A table for two, please',
      literal: 'Table for the two, sir/maam',
      emoji: '🪑',
      phonetic: 'ME-sa PA-ra sa da-la-WA po',
      audioRef: null,
    },
    {
      id: 'menu_po_sana',
      target: 'Menu po sana',
      native: 'The menu, please',
      literal: 'Menu sir/maam hopefully',
      emoji: '📋',
      phonetic: 'me-NU po SA-na',
      audioRef: null,
    },
    {
      id: 'bill_po',
      target: 'Bill po',
      native: 'The bill, please',
      literal: 'Bill sir/maam',
      emoji: '🧾',
      phonetic: 'bil po',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Po — the politeness particle',
    explanation: "Slip 'po' anywhere into a sentence and it becomes respectful. Used with elders, strangers, and service staff. Skipping it isn't wrong, but adding it makes you instantly likeable.",
    examples: [
      { target: 'Salamat po', native: 'Thank you (respectful)' },
      { target: 'Opo', native: 'Yes (respectful)' },
      { target: 'Bill po', native: 'The bill, please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Mesa para sa dalawa, po', right: 'A table for two, please' },
        { left: 'Menu po sana', right: 'The menu, please' },
        { left: 'Bill po', right: 'The bill, please' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You've finished eating and want to pay. What do you call to the server?",
      sentence: '_____ po.',
      options: ['Bill', 'Menu', 'Mesa'],
      correct: 'Bill',
      context: "Bill = the check. Filipinos borrowed the English word.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (with politeness)',
      prompt: 'A table for two, please',
      correct: ['Mesa para sa dalawa, po', 'Mesa para sa dalawa po', 'mesa para sa dalawa po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask for the menu',
      words: ['sana', 'po', 'Menu'],
      correct: ['Menu', 'po', 'sana'],
      translation: 'The menu, please',
    },
    {
      type: 'multiple_choice',
      instruction: "You walk into a karinderya in Makati with a friend. What's the first thing you say?",
      question: 'Choose the right phrase',
      options: [
        { text: 'Mesa para sa dalawa, po', correct: true },
        { text: 'Bill po', correct: false },
        { text: 'Salamat po', correct: false },
      ],
      explanation: "Ask for a table first — bill comes at the end, salamat is thanks.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'The bill, please',
      correct: ['Bill po', 'bill po'],
    },
  ],

  rwenDialogue: {
    intro: "Lunchtime in BGC. You walk into a busy karinderya with your friend. The server spots you and waves you over.",
    lines: [
      {
        speaker: 'npc',
        target: 'Welcome po! Ilan kayo?',
        native: 'Welcome! How many of you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mesa para sa dalawa, po', native: 'A table for two, please', correct: true, feedback: 'Polished — the po lands beautifully.' },
          { target: 'Bill po', native: 'Bill please', correct: false, feedback: "You just walked in! Save the bill for later." },
          { target: 'Dalawa', native: 'Two', correct: false, feedback: "Not wrong, but the full polite phrase is warmer." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, dito sa may bintana.',
        native: 'Sure — over here by the window.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You're in. Now the menu — and the hard choice between adobo and sinigang.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A table for two, please (Tagalog, with po)', correct: ['Mesa para sa dalawa, po', 'Mesa para sa dalawa po'] },
      { prompt: 'The bill, please (Tagalog)', correct: ['Bill po', 'bill po'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine walking into a Manila karinderya alone. Whisper the three phrases — table, menu, bill — in order. That's the whole arc of a meal.",
    rwenSignoff: "Tomorrow we order. Kain muna — eat first.",
  },

  phase8: {
    scenario: "12:30pm at a packed karinderya in Makati. The server greets you at the door. You're with a friend, hungry, and you want a table near the window where you can see the trays of ulam.",
    rwenRole: "Aling Susan — the karinderya owner, ~50yo, fast-moving but warm; she beams at customers who say 'po' and is more likely to recommend the day's best ulam to them.",
    successCriteria: "User asks for a table for two with 'po', then asks for the menu, then politely requests the bill at the end. Three-act mini-flow: arrival, ordering moment, exit.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
