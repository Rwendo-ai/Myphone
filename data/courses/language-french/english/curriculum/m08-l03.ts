import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-aller',
  module: 8,
  lesson: 3,
  title: 'Aller — To go (and the prepositions that follow)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Aller is the most-used verb after être and avoir — and English speakers usually trip on the same thing: which little word follows it. À, en, au, aux. The destination changes the preposition. Today we sort it once.",
    culturalNote: "French is fussy about the gender and number of places. Cities take à (à Paris, à Tokyo). Feminine countries take en (en France, en Italie — most countries ending in -e). Masculine countries take au (au Japon, au Canada). Plural countries take aux (aux États-Unis, aux Pays-Bas). It feels arbitrary at first, but the patterns settle in fast.",
  },

  chunks: [
    {
      id: 'je_vais',
      target: 'Je vais',
      native: 'I go / I am going',
      literal: 'I go',
      emoji: '🚶',
      phonetic: 'zhuh VEH',
      audioRef: null,
    },
    {
      id: 'aller_a_paris',
      target: 'Je vais à Paris',
      native: 'I am going to Paris',
      literal: 'I go to Paris',
      emoji: '🗼',
      phonetic: 'zhuh veh ah pah-REE',
      audioRef: null,
    },
    {
      id: 'on_y_va',
      target: 'On y va',
      native: "Let's go",
      literal: 'One there goes',
      emoji: '🏃‍♂️',
      phonetic: 'ohn nee VAH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Aller + place: à / en / au / aux',
    explanation: "Aller conjugates: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont. The preposition depends on the destination: à + city (à Paris), en + feminine country or continent (en France, en Europe), au + masculine country (au Japon), aux + plural country (aux États-Unis). And 'on y va' (literally 'one there goes') is the everyday way friends say 'let's go'.",
    examples: [
      { target: 'Je vais à Lyon ce week-end.', native: "I'm going to Lyon this weekend." },
      { target: "L'année prochaine, je vais en Italie et au Maroc.", native: "Next year I'm going to Italy and to Morocco." },
      { target: 'Allez, on y va! Le métro arrive.', native: "Come on, let's go! The metro's coming." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form of aller to its subject',
      pairs: [
        { left: 'Je vais', right: 'I go' },
        { left: 'Tu vas', right: 'You go (informal)' },
        { left: 'Nous allons', right: 'We go' },
        { left: 'Ils vont', right: 'They go' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right preposition for the country',
      sentence: 'Cet été, je vais _____ Japon.',
      options: ['au', 'en', 'à'],
      correct: 'au',
      context: 'Le Japon is masculine — masculine countries take "au".',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "I'm going to France in July",
      correct: ['Je vais en France en juillet', 'je vais en France en juillet'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "We are going to the United States next year"',
      words: ['aux', 'allons', 'États-Unis', 'l\'année', 'Nous', 'prochaine'],
      correct: ['Nous', 'allons', 'aux', 'États-Unis', 'l\'année', 'prochaine'],
      translation: "We're going to the United States next year.",
    },
    {
      type: 'multiple_choice',
      instruction: "Friends are dawdling outside a café and the bus is two minutes away. You want to hurry them up casually.",
      question: 'Pick the natural French',
      options: [
        { text: 'Allez, on y va!', correct: true },
        { text: 'Nous allons maintenant.', correct: false },
        { text: 'Je vais.', correct: false },
      ],
      explanation: "'On y va' is the universal 'let's go' among friends — far more natural than the textbook 'nous y allons'. The 'allez' before it is just a friendly nudge.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "She's going to Paris tomorrow",
      correct: ['Elle va à Paris demain', 'elle va à Paris demain'],
    },
  ],

  rwenDialogue: {
    intro: "Coffee with your French friend Camille. She asks about your travel plans for the year — answer with the right preposition for each place.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu pars en vacances cette année?',
        native: "Are you going on holiday this year?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui! Je vais en Italie en juin, et après aux États-Unis.", native: "Yes! I'm going to Italy in June, then to the United States.", correct: true, feedback: "En for feminine Italie, aux for plural États-Unis. Both prepositions exactly right." },
          { target: "Oui! Je vais à Italie et à États-Unis.", native: "Yes! I'm going to Italy and to the United States.", correct: false, feedback: "À only works for cities — for countries you need en (Italie) and aux (États-Unis)." },
          { target: "Oui! Je vais au Italie et en États-Unis.", native: "Yes! I'm going to Italy and to the United States.", correct: false, feedback: "Swapped! Italie is feminine (en Italie), États-Unis is plural (aux États-Unis)." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah trop cool! On y va ensemble en Italie?",
        native: "Oh how cool! Shall we go to Italy together?",
      },
      {
        speaker: 'rwen',
        rwenLine: "She slipped 'on y va' in there casually — that's the everyday rhythm of aller.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm going to Paris",
        correct: ['Je vais à Paris', 'je vais à Paris'],
      },
      {
        prompt: "Let's go (casual, with friends)",
        correct: ['On y va', 'on y va', "On y va!"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three sentences with aller today. One with à + a city, one with en or au + a country, one 'on y va' — even if it's just to yourself getting up off the sofa.",
    rwenSignoff: "À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "You're at a leaving drinks for a friend who's about to spend a year travelling. Camille is making the rounds asking everyone where they're headed next. You'll need to mention at least one city, one country, and use 'on y va' when she eventually rallies the group to the next bar.",
    rwenRole: "Camille — French friend in her 30s, the kind who organises everyone; she asks 'Tu vas où cette année?' and when others drift off she says 'Allez, on y va, ils nous attendent.'",
    successCriteria: "User uses je vais / on va with at least one city (à + city) and at least one country, choosing the correct preposition (en for feminine, au for masculine, aux for plural). User responds appropriately when Rwen says 'on y va' (acknowledges, picks up coat, etc.). No 'à France' or 'à Japon' slips.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
