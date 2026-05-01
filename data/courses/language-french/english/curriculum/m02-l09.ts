import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Au feu! Police! Médecin!',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three phrases you hope you never use. Three phrases you should know like your own birthday. In any real emergency, your French will collapse to its rawest pieces — these are them. Today we drill them so they come out before fear closes your throat.",
    culturalNote: "In English-speaking countries you call '911' or '999'. In France, three numbers cover most emergencies: 17 (police), 18 (fire/pompiers), 15 (medical/SAMU). You can also dial 112 — the EU number — and they'll route you. Knowing the words for these emergencies in French isn't paranoid; it's basic adult travel kit. The pompiers (firefighters) in France respond to fires, accidents, and medical emergencies — they're heroes here, and 'Au feu!' will summon them or any nearby helper.",
  },

  chunks: [
    {
      id: 'au_feu',
      target: 'Au feu!',
      native: 'Fire!',
      literal: 'To-the fire!',
      emoji: '🔥',
      phonetic: 'oh FUH',
      audioRef: null,
    },
    {
      id: 'appelez_la_police',
      target: 'Appelez la police!',
      native: 'Call the police!',
      literal: 'Call the police!',
      emoji: '🚓',
      phonetic: 'ap-lay lah po-LEES',
      audioRef: null,
    },
    {
      id: 'jai_besoin_dun_medecin',
      target: "J'ai besoin d'un médecin",
      native: 'I need a doctor',
      literal: 'I-have need of-a doctor',
      emoji: '🩺',
      phonetic: 'zhay buh-zwahn duhn med-SAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency imperatives',
    explanation: "In emergencies, French uses imperative form (commands) without softening — 'Appelez!' (call!) is direct and right. No need for 'pouvez-vous' politeness when seconds matter. 'Au feu' and 'Au voleur' (thief) follow the same shape: 'au + danger'. 'J'ai besoin de…' lets you state any urgent need.",
    examples: [
      { target: 'Appelez les pompiers!', native: 'Call the firefighters!' },
      { target: 'Au voleur!', native: 'Thief!' },
      { target: "J'ai besoin d'une ambulance", native: 'I need an ambulance' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each emergency phrase to its meaning',
      pairs: [
        { left: 'Au feu!', right: 'Fire!' },
        { left: 'Appelez la police!', right: 'Call the police!' },
        { left: "J'ai besoin d'un médecin", right: 'I need a doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Smoke is pouring from a building. What do you shout?',
      sentence: 'Au _____!',
      options: ['feu', 'voleur', 'secours'],
      correct: 'feu',
      context: "'Feu' = fire. 'Voleur' = thief, 'Secours' = rescue.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — you witness a theft and shout to a passerby',
      prompt: 'Call the police!',
      correct: ['Appelez la police!', 'appelez la police!', 'Appelez la police', 'appelez la police'],
    },
    {
      type: 'build_sentence',
      instruction: 'You feel suddenly very ill in a hotel lobby. Tell the receptionist what you need.',
      words: ['besoin', "d'un", "J'ai", 'médecin'],
      correct: ["J'ai", 'besoin', "d'un", 'médecin'],
      translation: 'I need a doctor',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right phrase',
      question: "You see flames coming from a kitchen at a Lyon brasserie. The waiter hasn't noticed.",
      options: [
        { text: 'Au feu!', correct: true },
        { text: 'Trop cher!', correct: false },
        { text: 'Combien?', correct: false },
      ],
      explanation: "'Au feu!' is the universal alarm word. The other two are about prices.",
    },
    {
      type: 'translate',
      instruction: "Type in French — you're feeling chest pains and need urgent medical help",
      prompt: 'I need a doctor',
      correct: ["J'ai besoin d'un médecin", "j'ai besoin d'un médecin", "Jai besoin dun médecin", "jai besoin dun médecin", "j'ai besoin d'un medecin"],
    },
  ],

  rwenDialogue: {
    intro: "You're walking down rue de Rivoli in Paris. A man on a scooter snatches a tourist's bag and speeds off. You see a police officer half a block away. Get her attention — fast.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Madame, au voleur! Appelez la police!', native: 'Madam, thief! Call the police!', correct: true, feedback: 'Perfect — short, direct, naming both the crime and the action.' },
          { target: 'Excusez-moi… je voudrais…', native: "Excuse me… I'd like…", correct: false, feedback: "This is an emergency. Drop the politeness frame. Direct verbs only." },
          { target: 'Au feu!', native: 'Fire!', correct: false, feedback: "Wrong emergency word. 'Au voleur' is for theft." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Où? Quel scooter?',
        native: 'Where? Which scooter?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Là-bas! Un scooter rouge!', native: 'Over there! A red scooter!', correct: true, feedback: "Là-bas earns its keep — pointing word + colour. She's already on her radio." },
          { target: 'Je ne sais pas', native: "I don't know", correct: false, feedback: "She needs even one detail — direction, colour, anything." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "In emergencies, your French strips to its bones. Verbs, nouns, no manners. That's correct — politeness is a peace-time luxury.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Call the police! (in French)',
        correct: ['Appelez la police!', 'appelez la police!', 'Appelez la police', 'appelez la police'],
      },
      {
        prompt: 'I need a doctor (in French)',
        correct: ["J'ai besoin d'un médecin", "j'ai besoin d'un médecin", "Jai besoin dun médecin", "jai besoin dun médecin"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Memorise the three emergency numbers: 17 police, 18 pompiers, 15 SAMU. Save 112 in your phone if you travel. Hopefully unused.",
    rwenSignoff: "Stay safe out there. Prudence — be careful.",
  },

  phase8: {
    scenario: "You're staying at a Paris Airbnb in the 4th arrondissement. At 2am you wake up to smoke alarms and the smell of burning plastic from the floor below. You can't reach the host. You run into the hallway and find a neighbour, an elderly woman in a robe, also confused. You need to alert her, get help, and say what's wrong — your French is rough but it has to come out.",
    rwenRole: "Madame Geneviève — neighbour, ~75, calm under pressure once she understands what's happening. Slightly hard of hearing; needs clear, short, loud French.",
    successCriteria: "User uses 'Au feu!' to alert her to the fire (NOT mumbled or sentence-buried), tells her to 'Appelez la police' or pompiers using imperative form, and if the user roleplays feeling unwell from smoke, uses 'J'ai besoin d'un médecin'. No filler politeness — direct, urgent, clear.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
