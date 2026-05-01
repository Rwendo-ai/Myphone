import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-sil-vous-plait',
  module: 1,
  lesson: 5,
  title: "S'il vous plaît — Please",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'S'il vous plaît' — five syllables that turn a demand into a request. In French, omitting 'please' doesn't sound efficient — it sounds curt. Today we always close with it.",
    culturalNote: "English allows 'Coffee, thanks' as a friendly order. In French, 'Un café' alone sounds like an order to a robot. Add 's'il vous plaît' and you become human again. Same with 'pardon' — say it the moment you bump someone, even before checking what happened.",
  },

  chunks: [
    {
      id: 'sil_vous_plait',
      target: "S'il vous plaît",
      native: 'Please (formal)',
      literal: 'If-it you (formal) pleases',
      emoji: '🙏',
      phonetic: 'seel voo PLEH',
      audioRef: null,
    },
    {
      id: 'sil_te_plait',
      target: "S'il te plaît",
      native: 'Please (informal)',
      literal: 'If-it you (informal) pleases',
      emoji: '🙏',
      phonetic: 'seel tuh PLEH',
      audioRef: null,
    },
    {
      id: 'pardon',
      target: 'Pardon',
      native: 'Excuse me / Sorry',
      literal: 'Pardon',
      emoji: '🙇',
      phonetic: 'par-DOHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tu vs vous in requests',
    explanation: "The 'please' you use mirrors the 'you' you'd use. Strangers + work + elders = vous → s'il vous plaît. Friends + family + kids = tu → s'il te plaît. Pick the wrong one and the whole request feels off-key.",
    examples: [
      { target: "Un café, s'il vous plaît", native: 'A coffee, please (to waiter)' },
      { target: "Passe-moi le sel, s'il te plaît", native: 'Pass me the salt, please (to friend)' },
      { target: "Pardon, je ne savais pas", native: "Sorry, I didn't know" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "S'il vous plaît", right: 'Please (formal)' },
        { left: "S'il te plaît", right: 'Please (informal)' },
        { left: 'Pardon', right: 'Excuse me / Sorry' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're ordering a coffee from a waiter you don't know. Complete the request.",
      sentence: "Un café, s'il _____ plaît.",
      options: ['vous', 'te', 'nous'],
      correct: 'vous',
      context: 'Waiter you just met — formal vous.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — formal version',
      prompt: 'Please (to a stranger)',
      correct: ["S'il vous plaît", "s'il vous plaît", "S'il vous plait", "s'il vous plait"],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask the receptionist for a key — put the words in order',
      words: ['plaît,', "s'il", 'clé,', 'La', 'vous'],
      correct: ['La', 'clé,', "s'il", 'vous', 'plaît,'],
      translation: 'The key, please',
    },
    {
      type: 'translate',
      instruction: 'You bumped into someone on the métro — what do you say?',
      prompt: 'Sorry / Excuse me',
      correct: ['Pardon', 'pardon'],
    },
    {
      type: 'translate',
      instruction: "Asking your sister for the salt — type the casual please",
      prompt: 'Please (to a sibling/friend)',
      correct: ["S'il te plaît", "s'il te plaît", "S'il te plait", "s'il te plait"],
    },
  ],

  rwenDialogue: {
    intro: "You're checking into a small hotel in Nice. You need to know how to get to the old town. The receptionist looks up.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonjour, la vieille ville, s'il vous plaît?", native: 'Hello, the old town, please?', correct: true, feedback: 'Concise, polite, perfect.' },
          { target: 'La vieille ville?', native: 'The old town?', correct: false, feedback: "Without 'bonjour' AND 's'il vous plaît' it sounds like an interrogation." },
          { target: "Salut, où la vieille ville, s'il te plaît?", native: 'Hi, where the old town, please? (informal)', correct: false, feedback: "He's a stranger working — vous, not tu." },
        ],
      },
      {
        speaker: 'npc',
        target: "C'est tout droit, à dix minutes à pied.",
        native: "It's straight ahead, a ten-minute walk.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Look how that 's'il vous plaît' opened the whole answer up. Magic five syllables.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Please (formal — to a stranger)',
        correct: ["S'il vous plaît", "s'il vous plaît", "S'il vous plait", "s'il vous plait"],
      },
      {
        prompt: 'Excuse me / Sorry (when you bump into someone)',
        correct: ['Pardon', 'pardon'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 's'il vous plaît' once today, attached to any small request — even in your head, even mouthed silently when you order a coffee. Feel where the stress lands.",
    rwenSignoff: "Demain — your name. À demain, s'il te plaît!",
  },

  phase8: {
    scenario: "You've just dropped your bags at a small hotel near the Vieux Port in Marseille. The receptionist hands you the key. You want to ask for a good nearby café and walking directions to the old port — keep it polite, keep it formal.",
    rwenRole: "Monsieur Aubert — receptionist, ~40, professional and helpful but reserved; he warms up to clear politesse and shuts down a little when guests bark requests.",
    successCriteria: "User opens with 'Bonjour', uses formal 's'il vous plaît' (NOT 's'il te plaît'), uses 'pardon' if interrupting, and closes with 'merci' before leaving the desk. Vous register held throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
