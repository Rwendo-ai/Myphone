import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-po-opo',
  module: 1,
  lesson: 8,
  title: 'Po & Opo — Respect markers',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today we put a magnifying glass on the cultural heart of Tagalog: 'po' and 'opo'. One word turns a sentence respectful. Another turns a 'yes' into something an elder hears with warmth. Master these and Filipinos will adopt you.",
    culturalNote: "Po and opo are taught to Filipino children before they can write. A child who says 'oo' (yes) instead of 'opo' to a grandparent gets gently corrected on the spot. To skip them with elders is the cultural equivalent of calling your grandmother by her first name and shrugging at the table. They are non-negotiable.",
  },

  chunks: [
    {
      id: 'po',
      target: 'Po',
      native: 'Respect marker (sentence-final particle)',
      literal: 'Respect-particle',
      emoji: '🙏',
      phonetic: 'PO',
      audioRef: null,
    },
    {
      id: 'opo',
      target: 'Opo',
      native: 'Yes (respectful)',
      literal: 'Yes-respect',
      emoji: '✅',
      phonetic: 'O-po',
      audioRef: null,
    },
    {
      id: 'hindi_po',
      target: 'Hindi po',
      native: 'No (respectful)',
      literal: 'Not respect-marker',
      emoji: '🚫',
      phonetic: 'hin-DI PO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The respect-marker system',
    explanation: "'Po' is the universal respect particle — slot it into any sentence to elders, strangers, customers, bosses. 'Opo' is the respectful 'yes' (replaces casual 'oo'). For 'no', you keep 'hindi' and just add 'po' — no special form. Rule of thumb: if you'd say 'sir' or 'ma'am' in English, use 'po' in Tagalog.",
    examples: [
      { target: 'Salamat po', native: 'Thanks (respectful)' },
      { target: 'Opo, gusto ko po', native: 'Yes, I want some (respectful)' },
      { target: 'Hindi po, salamat', native: 'No (respectful), thanks' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Po', right: 'Respect marker' },
        { left: 'Opo', right: 'Yes (respectful)' },
        { left: 'Hindi po', right: 'No (respectful)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your tita asks if you want lugaw (rice porridge). You say yes — respectfully.',
      sentence: '_____, gusto ko po.',
      options: ['Opo', 'Oo', 'Hindi'],
      correct: 'Opo',
      context: "Casual 'oo' to your tita is rude. Always 'opo'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Yes (respectful)',
      correct: ['Opo', 'opo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: No (respectful), thanks',
      words: ['salamat', 'po', 'po', 'Hindi'],
      correct: ['Hindi', 'po,', 'salamat', 'po'],
      translation: 'No (respectful), thanks (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: 'A lola at Sunday Mass asks if the seat next to you is taken. You say no — the seat is free. How do you reply?',
      question: 'Pick the right answer',
      options: [
        { text: 'Hindi po', correct: true },
        { text: 'Hindi', correct: false },
        { text: 'Opo', correct: false },
      ],
      explanation: "She's a lola — 'po' is mandatory. Bare 'Hindi' would feel curt. 'Opo' would be 'yes', the opposite of what you mean.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'No (respectful)',
      correct: ['Hindi po', 'hindi po'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Sunday Mass at a simbahan in Tagaytay. Service has just ended. A lola in the pew next to you turns to you with a kind, curious expression.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, kabago lang ba kayo dito sa parokya?',
        native: 'Child, are you new here at the parish?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Opo, lola. Bago lang po ako.', native: "Yes (respectful), grandma. I'm new (respectful).", correct: true, feedback: "Two po's, one opo, and 'lola' for warmth — perfect. She just decided you're a good egg." },
          { target: 'Oo, bago ako', native: "Yes, I'm new", correct: false, feedback: "To a lola? 'Oo' lands like a slap. Always 'opo' — and add 'po' on the second clause too." },
          { target: 'Hindi po', native: 'No (respectful)', correct: false, feedback: 'You ARE new — that should be opo, not hindi po.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, mabuti! Welcome ka, anak.',
        native: "Oh, good! Welcome, child.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how easy it was once you locked in 'opo' and 'po'? That's the whole respect system in three syllables.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Yes (respectful, in Tagalog)',
        correct: ['Opo', 'opo'],
      },
      {
        prompt: 'No (respectful, in Tagalog)',
        correct: ['Hindi po', 'hindi po'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'po' THREE times today — to anyone older or unknown. Slip it into a thanks, a hello, a yes. Track them in your head.",
    rwenSignoff: "I'll ask tomorrow how many you got. Sige po, ingat — okay (respectful), take care.",
  },

  phase8: {
    scenario: "It's Sunday morning in a Tagaytay simbahan. Mass has just ended. A lola in the pew next to you, holding a worn rosary, turns and asks if you're new to the parish. She'll ask you several yes/no questions about who brought you and where you live. Every reply must be properly respectful.",
    rwenRole: "Lola Conching — 78, parishioner of 50 years, calls everyone younger 'anak'; she'll quietly clock whether you say 'opo' or 'oo', 'po' or nothing, and her warmth scales accordingly.",
    successCriteria: "User answers her yes/no questions with 'Opo' (NOT 'Oo') for yes, and 'Hindi po' (NOT bare 'Hindi') for no. The 'po' particle appears in at least 3 of the user's responses across the conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
