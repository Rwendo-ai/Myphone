import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Saklolo! — Help / Emergency',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "I hope you never need this lesson. But if you do — if you're hurt, lost in the dark, or your friend collapses in a Tagaytay restaurant — these three phrases are non-negotiable. Drill them once today and they're yours forever.",
    culturalNote: "'Saklolo!' is the all-purpose Filipino emergency shout — louder and more urgent than 'tulong'. 'Tawagan' (call) and 'Kailangan' (need) are the verbs you'll hear police, doctors, and paramedics use. No 'po' here — emergencies don't wait for politeness.",
  },

  chunks: [
    {
      id: 'saklolo',
      target: 'Saklolo!',
      native: 'Help! (emergency)',
      literal: 'Rescue!',
      emoji: 'SOS',
      phonetic: 'sak-lo-LO',
      audioRef: null,
    },
    {
      id: 'tawagan_pulis',
      target: 'Tawagan ang pulis',
      native: 'Call the police',
      literal: 'Call-(imperative) the police',
      emoji: 'POLICE',
      phonetic: 'ta-WA-gan ang POO-lis',
      audioRef: null,
    },
    {
      id: 'kailangan_doktor',
      target: 'Kailangan ko ng doktor',
      native: 'I need a doctor',
      literal: 'Need by-me a doctor',
      emoji: 'CROSS',
      phonetic: 'kai-LA-ngan ko nang DOK-tor',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency imperatives',
    explanation: "Drop the politeness in real emergencies. 'Tawagan ang ___' = 'Call the ___' — direct command. 'Kailangan ko ng ___' = 'I need a ___' — straight statement of need. 'Saklolo' on its own is the universal SOS shout. Volume and clarity matter more than register.",
    examples: [
      { target: 'Saklolo! Tawagan ang pulis!', native: 'Help! Call the police!' },
      { target: 'Kailangan ko ng doktor', native: 'I need a doctor' },
      { target: 'Tawagan ang ambulansya', native: 'Call the ambulance' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Saklolo!', right: 'Help! (emergency)' },
        { left: 'Tawagan ang pulis', right: 'Call the police' },
        { left: 'Kailangan ko ng doktor', right: 'I need a doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your friend collapsed at a Tagaytay restaurant. Get help fast.',
      sentence: 'Tawagan ang _____!',
      options: ['ambulansya', 'banyo', 'kape'],
      correct: 'ambulansya',
      context: "'Ambulansya' is the Tagalog spelling of 'ambulance'. 'Tawagan' = 'call (it)'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I need a doctor',
      correct: ['Kailangan ko ng doktor', 'kailangan ko ng doktor'],
    },
    {
      type: 'build_sentence',
      instruction: 'Shout for help and call the police',
      words: ['ang', 'pulis!', 'Saklolo!', 'Tawagan'],
      correct: ['Saklolo!', 'Tawagan', 'ang', 'pulis!'],
      translation: 'Help! Call the police!',
    },
    {
      type: 'multiple_choice',
      instruction: "You witness a snatcher grab a tourist's bag in Makati Avenue. What do you yell?",
      question: 'Which is the right shout?',
      options: [
        { text: 'Saklolo! Tawagan ang pulis!', correct: true },
        { text: 'Pakitulong po', correct: false },
        { text: 'Paumanhin', correct: false },
      ],
      explanation: "'Saklolo' is the loud emergency shout — it cuts through traffic. 'Pakitulong po' is for asking directions politely; 'paumanhin' is excuse-me. Neither stops a snatcher.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Call the police',
      correct: ['Tawagan ang pulis', 'tawagan ang pulis'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Tagaytay restaurant overlooking Taal. Mid-meal, your friend grabs his chest, struggles to breathe, slumps. The waiter is right there. No time to be polite.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Saklolo! Tawagan ang ambulansya! Kailangan ng doktor!', native: 'Help! Call the ambulance! He needs a doctor!', correct: true, feedback: "All three pieces — alarm, action, need. The waiter is already on the phone." },
          { target: 'Paumanhin po, pakitulong', native: "Excuse me, please help", correct: false, feedback: "Far too soft for an emergency. Politeness wastes seconds you don't have." },
          { target: 'Hindi ko maintindihan', native: "I don't understand", correct: false, feedback: 'Wrong tool entirely — this is a phrasebook moment, not a comprehension one.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sandali, tinatawagan ko na!',
        native: "Wait, I'm calling now!",
      },
      {
        speaker: 'rwen',
        rwenLine: "I hope you never use this lesson. But you have it now. Calm voice, clear words, three phrases — that's the whole emergency kit.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Help! (emergency shout)',
        correct: ['Saklolo!', 'saklolo!', 'Saklolo', 'saklolo'],
      },
      {
        prompt: 'I need a doctor',
        correct: ['Kailangan ko ng doktor', 'kailangan ko ng doktor'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise these three. Say them out loud right now — 'Saklolo. Tawagan ang pulis. Kailangan ko ng doktor.' Three breaths. The day you need them, you won't have time to remember.",
    rwenSignoff: "Ingat ka palagi — always take care. Bukas ulit.",
  },

  phase8: {
    scenario: "You're at a restaurant overlooking Taal Volcano in Tagaytay. Mid-meal, your friend grabs his chest, can't breathe, and slumps in his seat. The waiter is two metres away. There is no time to be polite — only clear, loud Tagalog will move things fast enough.",
    rwenRole: "Kuya Mark — restaurant waiter, mid-20s, trained in basic first aid, will move IMMEDIATELY if he hears the right Tagalog emergency words but freezes if you mumble in English.",
    successCriteria: "User shouts (loud, clear, no 'po') a combination of 'Saklolo!', 'Tawagan ang ambulansya!' and 'Kailangan ng doktor!'. All three concepts: alarm + call action + medical need. Politeness here is a failure — it wastes seconds.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
