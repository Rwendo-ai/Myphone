import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'Au restaurant — At the Restaurant',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "You push open the door of a small bistro. The serveuse glances up from polishing glasses. She's about to seat you — but only if you can ask. Today, the three phrases that get you in, fed, and out: a table, the menu, and the bill.",
    culturalNote: "Watch the false friend: in French 'le menu' is the FIXED-PRICE meal of the day, not the list of dishes. The list of dishes is 'la carte'. Ask for 'le menu' and you'll get the prix-fixe; ask for 'la carte' and you'll get the full options. Mix this up and the serveur will quietly correct you.",
  },

  chunks: [
    {
      id: 'une_table_pour_deux',
      target: 'Une table pour deux',
      native: 'A table for two',
      literal: 'A table for two',
      emoji: '🍽️',
      phonetic: 'oon TAH-bluh poor DUH',
      audioRef: null,
    },
    {
      id: 'la_carte_svp',
      target: "La carte, s'il vous plaît",
      native: 'The menu, please',
      literal: 'The menu, if-it you-pleases',
      emoji: '📜',
      phonetic: 'lah KART, seel voo PLAY',
      audioRef: null,
    },
    {
      id: 'laddition',
      target: "L'addition, s'il vous plaît",
      native: 'The bill, please',
      literal: 'The-bill, if-it you-pleases',
      emoji: '🧾',
      phonetic: 'lah-dee-SYOHN, seel voo PLAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'La carte vs le menu',
    explanation: "**La carte** = the full list of dishes (what English speakers call 'the menu'). **Le menu** = the fixed-price meal of the day (entrée + plat + dessert for one price). Always ask for 'la carte' if you want to choose freely — and 'le menu' only if you want the prix-fixe deal.",
    examples: [
      { target: 'La carte, s\'il vous plaît', native: 'The (full) menu, please' },
      { target: 'Le menu à 18 euros, s\'il vous plaît', native: "I'll take the 18-euro fixed menu, please" },
      { target: "Vous avez un menu du jour?", native: "Do you have a daily fixed menu?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Une table pour deux', right: 'A table for two' },
        { left: "La carte, s'il vous plaît", right: 'The menu, please' },
        { left: "L'addition, s'il vous plaît", right: 'The bill, please' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to see the FULL list of dishes (not the prix-fixe). What do you ask for?",
      question: "Choose the right phrase",
      options: [
        { text: "La carte, s'il vous plaît", correct: true },
        { text: "Le menu, s'il vous plaît", correct: false },
        { text: "Le livre, s'il vous plaît", correct: false },
      ],
      explanation: "'Le menu' is the fixed-price meal. 'La carte' is the full list of dishes — what English calls 'the menu'.",
    },
    {
      type: 'fill_blank',
      instruction: "You walk in with a friend. What's the first thing you say to the serveur?",
      sentence: 'Une _____ pour deux, s\'il vous plaît.',
      options: ['table', 'carte', 'addition'],
      correct: 'table',
      context: "You haven't sat down yet — you need a table first.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'The bill, please',
      correct: ["L'addition, s'il vous plaît", "l'addition, s'il vous plaît"],
    },
    {
      type: 'build_sentence',
      instruction: 'You\'ve finished eating — ask for the bill',
      words: ["plaît", "vous", "L'addition,", "s'il"],
      correct: ["L'addition,", "s'il", "vous", "plaît"],
      translation: 'The bill, please',
    },
    {
      type: 'translate',
      instruction: 'Type in French — at the door',
      prompt: 'A table for two',
      correct: ['Une table pour deux', 'une table pour deux'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8pm. You and a friend walk into a bistro in the 6th. The serveuse looks up. You set the scene.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonsoir, une table pour deux, s'il vous plaît", native: "Good evening, a table for two, please", correct: true, feedback: "Perfect — greeting first, then the request. Très français." },
          { target: "Deux personnes", native: "Two people", correct: false, feedback: "Understandable but blunt — open with Bonsoir and 'une table pour deux'." },
          { target: "Salut, on est deux", native: "Hi, we're two", correct: false, feedback: "Way too casual for a serveuse you've never met. Use Bonsoir and the polite form." },
        ],
      },
      {
        speaker: 'npc',
        target: "Bien sûr, suivez-moi. Voilà la carte.",
        native: "Of course, follow me. Here's the menu.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen — she said 'la carte', not 'le menu'. You're already hearing the difference. Sit down, you've earned it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'A table for two (in French)',
        correct: ['Une table pour deux', 'une table pour deux'],
      },
      {
        prompt: 'The bill, please (in French)',
        correct: ["L'addition, s'il vous plaît", "l'addition, s'il vous plaît"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look up a French restaurant near you (or imagine one). Rehearse out loud: walk in, greet, ask for a table for two, then ask for la carte. Three phrases, in order.",
    rwenSignoff: "You just walked into a Parisian bistro in your kitchen. À demain.",
  },

  phase8: {
    scenario: "It's 7:45pm at Le Petit Marché, a bistro near Bastille. You arrive with one friend. The serveuse, Léa, looks up from the bar — she sees you waiting at the entrance and waits for you to speak. You need to greet, ask for a table for two, settle in, ask for the carte (NOT the menu, unless you want the prix-fixe), and at the end ask for l'addition.",
    rwenRole: "Léa — bistro serveuse, ~30, sharp and quick, doesn't suffer fumbling but warms up to anyone who orders crisply; she'll subtly test by offering 'le menu à 22 euros' and seeing if the user knows the difference between menu and carte.",
    successCriteria: "User opens with Bonsoir + 'une table pour deux', distinguishes la carte (full list) from le menu (prix-fixe) when prompted, and at the end requests 'l'addition, s'il vous plaît' politely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
