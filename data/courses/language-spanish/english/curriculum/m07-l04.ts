import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-vegetariano',
  module: 7,
  lesson: 4,
  title: 'Soy Vegetariano — Stating Preferences',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Latin American cooking is meat-rich — especially Argentina, Mexico, Colombia. 'Soy vegetariano' is understood everywhere, but you'll still get rice cooked in chicken broth or beans with bits of bacon unless you specify. The phrase that actually works: 'Sin carne y sin pollo, por favor'.",
    culturalNote: "Vegetarianism is increasingly common in Spanish-speaking cities (Mexico City, Madrid, Buenos Aires) but rare in rural areas. In small-town Argentina, 'soy vegetariano' might still get you a chicken sandwich — chicken often isn't counted as 'carne' (meat = red meat). Spelling out 'no como pollo, no como carne' avoids confusion.",
  },

  chunks: [
    {
      id: 'soy_vegetariano',
      target: 'Soy vegetariano / vegetariana',
      native: "I'm vegetarian (m. / f.)",
      literal: 'I-am vegetarian (gendered)',
      emoji: '🥗',
      phonetic: 'soy beh-heh-tah-RYAH-noh',
      audioRef: null,
    },
    {
      id: 'sin_carne',
      target: 'sin carne',
      native: 'without meat',
      literal: 'without meat',
      emoji: '🚫🥩',
      phonetic: 'seen KAR-neh',
      audioRef: null,
    },
    {
      id: 'no_como',
      target: 'No como...',
      native: "I don't eat...",
      literal: 'Not I-eat',
      emoji: '🙅',
      phonetic: 'noh KOH-moh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Soy vs Estoy — permanent identity vs temporary state',
    explanation: "'Soy vegetariano' (I am [permanently] vegetarian) uses ser — it's identity. 'Estoy lleno' (I'm full right now) uses estar — temporary. Pick the wrong one and you say 'I am temporarily vegetarian for the next ten minutes' — funny in theory, confusing in a kitchen.",
    examples: [
      { target: 'Soy vegetariano', native: "I'm vegetarian (identity)" },
      { target: 'Estoy lleno', native: "I'm full (right now)" },
      { target: 'No como pescado', native: "I don't eat fish" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the preference phrase to its meaning',
      pairs: [
        { left: 'Soy vegetariano', right: "I'm vegetarian (m.)" },
        { left: 'sin carne', right: 'without meat' },
        { left: 'No como...', right: "I don't eat..." },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "State you're vegetarian (permanent identity)",
      sentence: '_____ vegetariana, sin carne, por favor.',
      options: ['Soy', 'Estoy', 'Tengo'],
      correct: 'Soy',
      context: "I'm vegetarian, without meat, please. (identity = ser)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't eat meat",
      correct: ['No como carne', 'no como carne'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're vegetarian, in rural Argentina, ordering. What's the safest phrasing?",
      question: 'Safest vegetarian order in Argentina:',
      options: [
        { text: 'Soy vegetariano. No como carne, ni pollo, ni pescado.', correct: true },
        { text: 'Soy vegetariano. Sin carne.', correct: false },
        { text: 'Quiero algo sin nada.', correct: false },
      ],
      explanation: "In rural Argentina, 'carne' often means 'red meat' specifically — chicken/fish may not be excluded. Spelling out 'ni pollo, ni pescado' (neither chicken nor fish) eliminates the surprise on your plate.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm vegetarian, without meat, please'",
      words: ['Soy', 'vegetariano,', 'sin', 'carne,', 'por', 'favor.'],
      correct: ['Soy', 'vegetariano,', 'sin', 'carne,', 'por', 'favor.'],
      translation: "I'm vegetarian, without meat, please",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'without meat',
      correct: ['sin carne', 'Sin carne'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a parrilla in Buenos Aires. The mozo brings the menu — every dish features meat.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué le sirvo? Tenemos bife, chorizo, vacío, milanesa de pollo...',
        native: "What can I serve you? We have steak, sausage, flank, breaded chicken cutlet...",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy vegetariano. No como carne, ni pollo, ni pescado. ¿Qué tienen sin carne?', native: "I'm vegetarian. I don't eat meat, chicken, or fish. What do you have without meat?", correct: true, feedback: "Spelled it all out — exactly what works in a parrilla. The mozo nods and goes to ask the kitchen about the provoleta and grilled vegetables." },
          { target: 'Estoy vegetariano', native: "I'm temporarily vegetarian (estar)", correct: false, feedback: "Vegetarianism is identity, not a passing mood — use 'soy': 'Soy vegetariano.'" },
          { target: 'Sin carne', native: 'Without meat (only)', correct: false, feedback: "Just 'sin carne' won't exclude chicken — be explicit: 'No como carne, ni pollo, ni pescado.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tenemos provoleta a la parrilla y verduras grilladas. ¿Le va?',
        native: "We have grilled provolone cheese and grilled vegetables. Sound good?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Soy vegetariano. Three words and a parrilla becomes navigable. Identity stated. Safety ensured.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm vegetarian (m.)", correct: ['Soy vegetariano', 'soy vegetariano'] },
      { prompt: 'without meat', correct: ['sin carne', 'Sin carne'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Whether or not you're vegetarian, name one food you genuinely don't eat — and say 'No como ___' out loud today. The 'no como' frame is the cleanest way to state any dietary preference in Spanish.",
    rwenSignoff: "Hasta mañana — la próxima parada: el mercado.",
  },

  phase8: {
    scenario: "You're seated at a Buenos Aires parrilla on a Friday night. The smoke from the grill curls past your table, the menu is a wall of meats — bife de chorizo, ojo de bife, vacío, mollejas, chinchulines, milanesa. You're vegetarian. The mozo is patient, but he's not going to figure this out for you.",
    rwenRole: "Mozo Rodrigo — career parrilla waiter, 40s, professional and unflappable; he's served vegetarians before but needs you to be explicit because in his world chicken often isn't counted as 'carne'.",
    successCriteria: "User states identity with 'Soy vegetariano' (NOT 'Estoy vegetariano'), specifies what they don't eat by spelling out 'no como carne, ni pollo, ni pescado' rather than just 'sin carne', and asks 'qué tienen sin carne?' to invite suggestions instead of expecting the mozo to volunteer them.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
