import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Acheter un billet — Buying a ticket',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Gare de Lyon, 8am. The TGV to Lyon leaves in 22 minutes. The agent looks up. You have one shot to ask cleanly: one way or round trip, first class or second, how much. Today, three chunks that buy you any French train ticket.",
    culturalNote: "TGV booking culture is national sport. Book three months ahead and Paris-Lyon is 19€. Walk up to the counter day-of and it's 110€. Real French travellers say 'aller-retour' (round trip) almost reflexively — a return is cheaper per leg, and assumes you'll come back. 'Aller simple' is what you ask for if you're moving cities, breaking up, or being dramatic.",
  },

  chunks: [
    {
      id: 'aller_simple_pour_lyon',
      target: 'Un aller simple pour Lyon',
      native: 'A one-way to Lyon',
      literal: 'A go simple for Lyon',
      emoji: '🎫',
      phonetic: 'ahn ah-lay SAHM-pluh poor lee-OHN',
      audioRef: null,
    },
    {
      id: 'aller_retour',
      target: 'Un aller-retour',
      native: 'A round trip',
      literal: 'A go-return',
      emoji: '🔁',
      phonetic: 'ahn ah-lay ruh-TOOR',
      audioRef: null,
    },
    {
      id: 'combien',
      target: "C'est combien?",
      native: 'How much is it?',
      literal: 'It-is how-much?',
      emoji: '💶',
      phonetic: 'say kohm-bee-AHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Aller simple / aller-retour + classe',
    explanation: "Train tickets in France are built like this: '[type] pour [city], en [class]'. Type = aller simple (one-way) OR aller-retour (round trip). Class = première classe (first) OR seconde classe (second — more common, much cheaper). 'C'est combien?' asks the price. Full sentence: 'Un aller-retour pour Lyon, en seconde, s'il vous plaît.'",
    examples: [
      { target: 'Un aller simple pour Marseille, en seconde.', native: 'A one-way to Marseille, second class.' },
      { target: 'Un aller-retour pour Bordeaux, en première.', native: 'A round trip to Bordeaux, first class.' },
      { target: "C'est combien, l'aller-retour?", native: 'How much is the round trip?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Un aller simple pour Lyon', right: 'A one-way to Lyon' },
        { left: 'Un aller-retour', right: 'A round trip' },
        { left: "C'est combien?", right: 'How much is it?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're going to Lyon and coming back tomorrow. Pick the ticket type.",
      sentence: 'Un _____ pour Lyon, s\'il vous plaît.',
      options: ['aller-retour', 'aller simple', 'aller plus'],
      correct: 'aller-retour',
      context: "You're returning, so it's a round trip — aller-retour. 'Aller simple' is one-way. 'Aller plus' isn't a thing.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'How much is it?',
      correct: ["C'est combien?", "C'est combien", "c'est combien?", "c'est combien", "Cest combien?"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask for a round trip to Marseille, second class.',
      words: ['Marseille,', 'aller-retour', 'seconde,', 'plaît.', 'Un', 'pour', 's\'il', 'vous', 'en'],
      correct: ['Un', 'aller-retour', 'pour', 'Marseille,', 'en', 'seconde,', 's\'il', 'vous', 'plaît.'],
      translation: 'A round trip to Marseille, second class, please.',
    },
    {
      type: 'multiple_choice',
      instruction: "An SNCF agent says: 'Aller simple ou aller-retour?'. You're going to Lyon for a wedding and back the next day.",
      question: 'What do you say?',
      options: [
        { text: 'Aller-retour, s\'il vous plaît.', correct: true },
        { text: 'Aller simple, s\'il vous plaît.', correct: false },
        { text: 'Première classe.', correct: false },
      ],
      explanation: "Going AND returning = aller-retour. 'Aller simple' would be just the outward trip — you'd need to buy a second ticket back. Always cheaper to book the return at the same time.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'A one-way to Lyon',
      correct: ['Un aller simple pour Lyon', 'un aller simple pour Lyon'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the SNCF counter in Gare de Lyon. The agent looks up. You're going to Lyon and back tomorrow.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour, je vous écoute.',
        native: 'Hello, how can I help?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bonjour, un aller-retour pour Lyon, en seconde, s\'il vous plaît.', native: 'Hello, a round trip to Lyon, second class, please.', correct: true, feedback: "Perfect SNCF script — type, destination, class, please. Agent will love you." },
          { target: 'Un ticket Lyon.', native: 'A ticket Lyon.', correct: false, feedback: "Too vague — agent needs aller-simple OR aller-retour, plus the class. They'll ask, but you can save them the breath." },
          { target: 'Lyon please.', native: 'Lyon please.', correct: false, feedback: 'Stay in French — even a polite Bonjour first goes a long way at the counter.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Très bien — ça fait 87 euros. Vous voulez un horaire précis?",
        native: 'Very good — that\'ll be 87 euros. A specific time?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'C\'est combien en première?', native: 'How much in first class?', correct: true, feedback: "Smart follow-up — 'c'est combien' deployed cleanly. The agent will quote you and you can decide." },
          { target: 'Très cher!', native: 'Very expensive!', correct: false, feedback: "She heard you — but the polite move is to ask 'c'est combien en première?' or just confirm." },
          { target: 'D\'accord.', native: 'OK.', correct: false, feedback: "Fine, but you missed a chance to use today's chunk 'c'est combien'. Try the bolder reply." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Aller-retour, en seconde, c'est combien — three chunks, one ticket. You can buy ANY French train ride now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'A round trip (in French)',
        correct: ['Un aller-retour', 'un aller-retour', 'Un aller retour', 'un aller retour'],
      },
      {
        prompt: 'How much is it? (in French)',
        correct: ["C'est combien?", "C'est combien", "c'est combien?", "c'est combien"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pretend you're at a TGV counter. Out loud, ask for: aller-retour, destination of your choice, en seconde, then 'c'est combien?'. One sentence start to finish. Then say it with 'aller simple' instead. Two scripts you'll use the moment you land in Paris.",
    rwenSignoff: "Tomorrow we head to the airport. À demain — bon voyage.",
  },

  phase8: {
    scenario: "You're at the SNCF counter at Gare de Lyon, buying a real TGV ticket to Lyon for tomorrow morning. The agent will ask: aller simple ou aller-retour? Quelle classe? Quelle heure? You must answer cleanly in French, then ask 'c'est combien?' to confirm the price. End by paying ('je paie par carte').",
    rwenRole: "Madame Dupont — SNCF ticket agent at Gare de Lyon, 50s, mildly impatient with a queue behind you. Asks rapid follow-ups in French: 'Aller simple ou aller-retour? Première ou seconde? Quelle heure? Carte ou espèces?'. Will charge a fair price and confirm.",
    successCriteria: "User answers (1) aller-retour OR aller simple correctly to the first question, (2) seconde OR première correctly to the class question, (3) asks 'c'est combien?' once. Bonus: opens with Bonjour, closes with merci/au revoir.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
