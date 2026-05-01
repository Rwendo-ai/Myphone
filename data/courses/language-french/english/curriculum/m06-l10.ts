import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & Time — La Conversation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Tenth lesson of Module 6 — and now we braid everything together. Numbers, time, money, days, prices: all running through one realistic French moment. A hotel checkout. The receptionist asks for your room number, the night count, the time you're leaving, the day you're returning. Numbers everywhere. Let's go.",
    culturalNote: "Hotel checkouts in France move fast: a few questions, the bill, the card. The receptionist will fire numbers at you in 24-hour time, in euros, in days. If you can answer back fluently, you've crossed a real threshold — practical A2 numeracy. That's where this module ends.",
  },

  chunks: [
    {
      id: 'lhotel_room',
      target: 'Je suis dans la chambre numéro vingt-trois',
      native: 'I\'m in room number 23',
      literal: 'I am in the room number twenty-three',
      emoji: '🏨',
      phonetic: 'zhuh swee dahn la SHAHM-bruh noo-may-ROH van-TRWAH',
      audioRef: null,
    },
    {
      id: 'cest_combien_la_nuit',
      target: 'C\'est combien la nuit?',
      native: 'How much per night?',
      literal: 'It-is how-much the night?',
      emoji: '🌙',
      phonetic: 'say kohm-BYAN la NWEE',
      audioRef: null,
    },
    {
      id: 'je_pars_a',
      target: 'Je pars à dix heures',
      native: 'I leave at 10 o\'clock',
      literal: 'I leave at ten hours',
      emoji: '🧳',
      phonetic: 'zhuh par ah deess URR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stitching numbers, time and money into one sentence',
    explanation: "By Lesson 10 you can mix it all: a number for room/night count, a 24-hour time for departure, a day for return, a euro price for the bill. The pattern is just SUBJECT + VERB + NUMBER/TIME/PRICE. 'Je pars à dix heures' (I leave at 10). 'Ça fait deux cent vingt euros pour trois nuits' (220€ for 3 nights). 'Je reviens vendredi' (I come back Friday). One thread.",
    examples: [
      { target: 'Trois nuits, deux cent vingt euros', native: 'Three nights, 220 euros' },
      { target: 'Je pars à onze heures trente', native: 'I leave at 11:30' },
      { target: 'Je reviens samedi en juin', native: 'I come back Saturday in June' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French sentence to its English meaning',
      pairs: [
        { left: 'C\'est combien la nuit?', right: 'How much per night?' },
        { left: 'Je pars à dix heures', right: 'I leave at 10 o\'clock' },
        { left: 'Je reviens vendredi', right: 'I come back Friday' },
        { left: 'Pour trois nuits', right: 'For three nights' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re checking out at 11:00. Complete the sentence (use 24-hour clock):',
      sentence: 'Je pars à _____ heures.',
      options: ['onze', 'douze', 'un'],
      correct: 'onze',
      context: 'Onze = 11. Douze = 12. Un = 1. The 24-hour clock keeps things unambiguous.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'How much per night?',
      correct: ['C\'est combien la nuit?', 'c\'est combien la nuit?', 'C\'est combien la nuit'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am in room 73 (soixante-treize) for two nights"',
      words: ['Je', 'suis', 'dans', 'la', 'chambre', 'soixante-treize', 'pour', 'deux', 'nuits'],
      correct: ['Je', 'suis', 'dans', 'la', 'chambre', 'soixante-treize', 'pour', 'deux', 'nuits'],
      translation: 'I am in room 73 for two nights.',
    },
    {
      type: 'translate',
      instruction: 'Type in French (use 24-hour: "à quinze heures")',
      prompt: 'I leave at 15h00 (3pm)',
      correct: ['Je pars à quinze heures', 'je pars à quinze heures'],
    },
    {
      type: 'multiple_choice',
      instruction: "The receptionist says: 'Ça fait quatre cent quatre-vingts euros au total.' How much does it come to?",
      question: 'Choose the correct total',
      options: [
        { text: '480 euros', correct: true },
        { text: '420 euros', correct: false },
        { text: '380 euros', correct: false },
      ],
      explanation: "Quatre cent (400) + quatre-vingts (80) = 480. Notice 'quatre-vingts' here keeps the -s because it stands at the end with no number after it.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It comes to 220 euros (deux cent vingt euros)"',
      words: ['Ça', 'fait', 'deux', 'cent', 'vingt', 'euros'],
      correct: ['Ça', 'fait', 'deux', 'cent', 'vingt', 'euros'],
      translation: 'That comes to 220 euros.',
    },
  ],

  rwenDialogue: {
    intro: "It's Friday morning. You're checking out of a small Lyon hotel. Room 73, three nights stayed, leaving at 11. The receptionist greets you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour, vous êtes dans quelle chambre?',
        native: 'Hello, which room are you in?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Chambre soixante-treize', native: 'Room 73', correct: true, feedback: 'Soixante-treize = 60+13 = 73. Module 6 paying off.' },
          { target: 'Chambre septante-trois', native: '(Belgian/Swiss French)', correct: false, feedback: "That's how Belgium and Switzerland say it — but in France, it's 'soixante-treize'." },
          { target: 'Chambre sept trois', native: '(spelling out digits)', correct: false, feedback: "French doesn't spell out digits like English; you say the whole number — soixante-treize." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Trois nuits — ça fait deux cent vingt euros. Vous partez à quelle heure?',
        native: 'Three nights — that\'s 220 euros. What time are you leaving?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je pars à onze heures', native: 'I leave at 11', correct: true, feedback: 'Clean 24-hour answer — exactly what the receptionist expects.' },
          { target: 'Onze AM', native: '(English creep)', correct: false, feedback: "AM/PM don't exist in French. Use 'onze heures du matin' for casual or just 'onze heures' in formal." },
          { target: 'Je pars onze', native: '(missing à and heures)', correct: false, feedback: "Need the structure: 'à + number + heures'. 'Je pars à onze heures'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien. Bon voyage!',
        native: 'Very good. Have a good trip!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen back to that exchange in your head. You said a 70s number, a 24-hour time, a euro total. Three weeks ago none of those would have come out. That's Module 6 — completed, in your mouth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much per night? (in French)', correct: ['C\'est combien la nuit?', 'c\'est combien la nuit?', 'C\'est combien la nuit'] },
      { prompt: 'I leave at 10 o\'clock (formal, 24-hour)', correct: ['Je pars à dix heures', 'je pars à dix heures'] },
    ],
  },

  mission: {
    title: "Today's Journey — Module 6 Complete",
    task: "Out loud, give yourself a 30-second French monologue using: ONE big number, ONE time (with 'heures'), ONE day of the week, ONE euro price. Stitch them in any way that makes sense — even silly. ('Lundi je vais à Paris à neuf heures, le billet coûte cent vingt euros.')",
    rwenSignoff: "Module 6 — done. You can talk numbers in France now. Au revoir, à bientôt — onto food.",
  },

  phase8: {
    scenario: "You're checking out of a small hotel in Lyon. You give your room number (in the 70s or 80s — 'quatre-vingt-trois' / 'soixante-quinze'), confirm three nights, hear the total in euros, give your departure time in 24-hour format, and confirm the day you'll return next month.",
    rwenRole: "Madame Riveau — hotel receptionist, 40s, professional, slight smile. Speaks at full speed and uses 24-hour time, euro totals in the hundreds, and references the day of the week and month.",
    successCriteria: "User correctly produces: (1) a room number in the 70s/80s using 'soixante-' or 'quatre-vingt-', (2) a departure time in 24-hour format with 'heures', (3) a day of the week (lowercase, no capital), AND (4) repeats back the euro total at least once. All four threads from Module 6 in one conversation.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
