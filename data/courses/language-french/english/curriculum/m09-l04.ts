import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Métro, Bus, Train — Prendre le transport',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In English you 'take' the bus. In French you 'prendre' the métro — the same verb you use for taking food, taking a photo, taking a shower. It's not a translation, it's a habit. Today we wire that habit. Once 'je prends le métro' rolls off your tongue, you stop translating from English.",
    culturalNote: "The Paris métro is the Parisian heartbeat — 14 lines, 300+ stations, the cheapest way across town. Real Parisians don't say 'I take the subway' word-for-word; they say 'je prends le 6' (line 6) or 'je prends le RER' (the suburban train). The verb 'prendre' is everywhere — prendre un café, prendre une photo, prendre le bus. Memorise it once and unlock half the language.",
  },

  chunks: [
    {
      id: 'je_prends_le_metro',
      target: 'Je prends le métro',
      native: 'I take the métro',
      literal: 'I take(1sg) the métro',
      emoji: '🚇',
      phonetic: 'zhuh prahn luh may-TROH',
      audioRef: null,
    },
    {
      id: 'on_prend_un_taxi',
      target: 'On prend un taxi',
      native: "Let's take a taxi / We're taking a taxi",
      literal: 'One takes a taxi',
      emoji: '🚖',
      phonetic: 'ohn prahn ahn tak-SEE',
      audioRef: null,
    },
    {
      id: 'le_train_pour_lyon',
      target: 'Le train pour Lyon',
      native: 'The train to Lyon',
      literal: 'The train for Lyon',
      emoji: '🚄',
      phonetic: 'luh trahn poor lee-OHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Prendre — the universal "take" verb',
    explanation: "'Prendre' = to take. Use it for transport (prendre le métro/bus/train/avion/taxi/Uber), food (prendre un café), and dozens of fixed phrases. Conjugation: je prends, tu prends, il/elle/on prend, nous prenons, vous prenez, ils prennent. Note: 'on prend' is what real French people say in casual speech, not 'nous prenons'. The destination uses 'pour' (for): 'le train pour Lyon' = the train to Lyon.",
    examples: [
      { target: 'Je prends le métro tous les jours.', native: 'I take the métro every day.' },
      { target: 'On prend un Uber?', native: 'Shall we take an Uber?' },
      { target: 'Le train pour Marseille part à neuf heures.', native: 'The train to Marseille leaves at nine.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je prends le métro', right: 'I take the métro' },
        { left: 'On prend un taxi', right: "Let's take a taxi" },
        { left: 'Le train pour Lyon', right: 'The train to Lyon' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Suggest to your friend: 'Shall we take an Uber?'",
      sentence: '_____ prend un Uber?',
      options: ['On', 'Je', 'Tu'],
      correct: 'On',
      context: "Casual French uses 'on' for 'we'. 'On prend' = we take / let's take. Much more natural than 'nous prenons'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I take the métro',
      correct: ['Je prends le métro', 'je prends le métro', 'Je prends le metro', 'je prends le metro'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "I take the train to Lyon."',
      words: ['Je', 'pour', 'le', 'Lyon.', 'prends', 'train'],
      correct: ['Je', 'prends', 'le', 'train', 'pour', 'Lyon.'],
      translation: 'I take the train to Lyon.',
    },
    {
      type: 'multiple_choice',
      instruction: "How does French normally talk about taking a métro? Watch the verb.",
      question: 'Pick the natural French',
      options: [
        { text: 'Je prends le métro', correct: true },
        { text: 'Je take le métro', correct: false },
        { text: 'Je vais le métro', correct: false },
      ],
      explanation: "'Prendre' is the verb for taking transport. 'Aller' (to go) doesn't work here — you don't 'go the métro', you 'take' it. The literal English 'take' translation is 'prendre'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — casual "we"',
      prompt: "Let's take a taxi",
      correct: ['On prend un taxi', 'on prend un taxi'],
    },
  ],

  rwenDialogue: {
    intro: "You and a friend are deciding how to get to Charles-de-Gaulle airport.",
    lines: [
      {
        speaker: 'npc',
        target: "On prend le RER ou un taxi pour l'aéroport?",
        native: 'Shall we take the RER or a taxi to the airport?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "On prend le RER, c'est moins cher.", native: "Let's take the RER, it's cheaper.", correct: true, feedback: "Perfect — 'on prend' is exactly how French friends decide things. Casual and clean." },
          { target: "Je take le RER.", native: "(English verb)", correct: false, feedback: "It's 'prendre' for take — 'je prends', not 'je take'. Wire the new verb in." },
          { target: "Nous prenons le RER.", native: "We take the RER (formal)", correct: false, feedback: "Grammatically fine, but in casual speech French people use 'on' — 'on prend'. 'Nous prenons' sounds like a textbook." },
        ],
      },
      {
        speaker: 'npc',
        target: "D'accord, on prend le RER B alors.",
        native: 'OK, we take the RER B then.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how 'on prend' echoed back? You just sound like you live here. That's the prendre habit — keep it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I take the métro (in French)',
        correct: ['Je prends le métro', 'je prends le métro', 'Je prends le metro', 'je prends le metro'],
      },
      {
        prompt: "Let's take a taxi (casual French — using 'on')",
        correct: ['On prend un taxi', 'on prend un taxi'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, every time you use any kind of transport — even walking out the door — say it in French. 'Je prends le bus.' 'Je prends la voiture.' 'Je prends le train.' Wire prendre into your motor memory. Five 'je prends' before bedtime.",
    rwenSignoff: "Tomorrow we BUY the ticket. À demain — on prend le train.",
  },

  phase8: {
    scenario: "You and Rwen are planning a weekend trip from Paris. There are four ways to get to your destination: TGV, regional train, BlaBlaCar, or flight. Discuss the options in French, deciding which transport to take and why. You must use 'prendre' at least three times (je prends / on prend / tu prends), and use 'pour + city' for at least one destination. Rwen plays the indecisive friend.",
    rwenRole: "Camille — your French friend, mid-20s, indecisive, weighs every option. Will say 'On prend le TGV?', 'Ah non, c'est cher, on prend la voiture?', etc. Pushes user to commit to one transport choice in proper French.",
    successCriteria: "User uses 'prendre' (in any form: je prends / on prend / tu prends) at least three times for transport. Uses 'pour + destination' once (e.g. 'le train pour Lyon'). Uses 'on prend' at least once (the casual 'we'). Bonus: names at least three transport options (métro/bus/train/TGV/avion/taxi/Uber).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
