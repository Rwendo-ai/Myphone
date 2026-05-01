import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: "À l'aéroport — At the airport",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Charles-de-Gaulle is the size of a city. Three terminals, two RER stops, and signage that assumes you already speak French. Today we wire the four words that get you from kerbside to gate: enregistrement, embarquement, bagage à main, escale. Miss your flight only because you wanted to.",
    culturalNote: "France has two big Paris airports. CDG (Charles-de-Gaulle) is the international hub — long-haul, terminal-confusion central, 25km north of the city. Orly is the smaller, southern airport — domestic, plus most flights to North Africa and Europe. Cheap flights leaving 'Paris' often leave from Beauvais (90 minutes by bus). Always check WHICH airport before booking.",
  },

  chunks: [
    {
      id: 'lenregistrement',
      target: "L'enregistrement",
      native: 'Check-in',
      literal: 'The-registration',
      emoji: '🛄',
      phonetic: 'lahn-reh-zhee-stre-MAHN',
      audioRef: null,
    },
    {
      id: 'lembarquement',
      target: "L'embarquement",
      native: 'Boarding',
      literal: 'The-embarkation',
      emoji: '🛫',
      phonetic: 'lahm-bar-kuh-MAHN',
      audioRef: null,
    },
    {
      id: 'bagage_a_main',
      target: 'Un bagage à main',
      native: 'A carry-on bag',
      literal: 'A baggage to hand',
      emoji: '🎒',
      phonetic: 'ahn ba-GAHZH ah MAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Airport sequence — enregistrement → embarquement → escale',
    explanation: "The airport flow in French: 'l'enregistrement' (check-in) is where you drop bags and get the carte d'embarquement (boarding pass). 'L'embarquement' (boarding) is at the gate (la porte). 'Un bagage à main' = carry-on; 'un bagage en soute' = checked bag. 'Une escale' = a layover/stopover. 'Un vol direct' = direct flight (no escale). Listen for these on the announcements.",
    examples: [
      { target: "L'enregistrement ouvre à six heures.", native: 'Check-in opens at six.' },
      { target: "L'embarquement est porte 24.", native: 'Boarding is at gate 24.' },
      { target: 'Un bagage à main et un bagage en soute.', native: 'One carry-on and one checked bag.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: "L'enregistrement", right: 'Check-in' },
        { left: "L'embarquement", right: 'Boarding' },
        { left: 'Un bagage à main', right: 'A carry-on bag' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "An announcement says boarding starts at gate 24. Which word means 'boarding'?",
      sentence: '_____ commence à la porte 24.',
      options: ['L\'embarquement', 'L\'enregistrement', 'L\'escale'],
      correct: 'L\'embarquement',
      context: "L'embarquement = boarding. L'enregistrement = check-in (earlier). Une escale = layover.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Check-in (the airport step where you drop bags)',
      correct: ["L'enregistrement", "l'enregistrement", "Lenregistrement", "lenregistrement"],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell the agent: "I have one carry-on, no checked bag."',
      words: ['un', 'main,', 'à', 'pas', 'soute.', 'J\'ai', 'bagage', 'de', 'en', 'bagage'],
      correct: ['J\'ai', 'un', 'bagage', 'à', 'main,', 'pas', 'de', 'bagage', 'en', 'soute.'],
      translation: 'I have one carry-on, no checked bag.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your flight has 'une escale à Amsterdam'. What does that mean for your trip?",
      question: 'Pick the right meaning',
      options: [
        { text: "It's a layover/stopover in Amsterdam — you change planes there.", correct: true },
        { text: "It's a direct flight — no stops.", correct: false },
        { text: "It's been cancelled.", correct: false },
      ],
      explanation: "'Une escale' = a layover or stopover. A 'vol direct' has none. Cheap CDG flights to long-haul destinations often have an escale at AMS, FRA, or DXB.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'A carry-on bag',
      correct: ['Un bagage à main', 'un bagage à main', 'Un bagage a main', 'un bagage a main'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at CDG Terminal 2E. The check-in agent calls you forward.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour, votre passeport et votre billet, s\'il vous plaît.',
        native: 'Hello, your passport and ticket, please.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Voilà. J\'ai un bagage à main, pas de bagage en soute.', native: 'Here you go. I have one carry-on, no checked bag.', correct: true, feedback: "Clean — you handed the documents AND told her your bag situation. She'll thank you for the heads-up." },
          { target: 'Voilà. Un bagage.', native: 'Here. One bag.', correct: false, feedback: "Vague — she needs to know carry-on or checked. 'Bagage à main' or 'bagage en soute' saves the back-and-forth." },
          { target: 'Embarquement?', native: 'Boarding?', correct: false, feedback: "You're at l'enregistrement (check-in), not l'embarquement (boarding) yet — that's later, at the gate." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Parfait. Voici votre carte d\'embarquement. Embarquement à 14h30, porte D24.',
        native: 'Perfect. Here\'s your boarding pass. Boarding at 2:30pm, gate D24.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just heard 'carte d'embarquement' and 'porte' in real time and it MADE SENSE. That's airport French unlocked.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Boarding (the airport step at the gate, in French)',
        correct: ["L'embarquement", "l'embarquement", "Lembarquement", "lembarquement"],
      },
      {
        prompt: 'A carry-on bag (in French)',
        correct: ['Un bagage à main', 'un bagage à main', 'Un bagage a main', 'un bagage a main'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine you're at CDG. Out loud, narrate: 'Je vais à l'enregistrement. J'ai un bagage à main. L'embarquement est à porte 24.' Three sentences. Walk through the airport in your kitchen.",
    rwenSignoff: "Tomorrow we land and go to the hotel. À demain — bon vol.",
  },

  phase8: {
    scenario: "You're checking in at CDG Terminal 2E for a flight to Marseille. The agent will ask for your passport, ask about your bags (carry-on or checked), and give you the carte d'embarquement with the gate. You must answer entirely in French, using 'bagage à main', 'bagage en soute', and listen for 'porte' (gate) and 'embarquement' time in her reply.",
    rwenRole: "Émilie — Air France check-in agent, 30s, professional, will ask: 'Combien de bagages?', 'En soute ou à main?', then deliver gate info. Won't repeat in English. If user fudges, Émilie politely asks again.",
    successCriteria: "User identifies their bag as 'bagage à main' or 'bagage en soute' correctly. Understands the gate ('porte') and 'embarquement' time when Émilie says it (echoes back the gate number). Bonus: opens with 'Bonjour' and closes with 'merci'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
