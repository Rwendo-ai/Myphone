import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-tortilla',
  module: 7,
  lesson: 1,
  title: 'Tortilla — Two Countries, Two Meanings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Order a 'tortilla' in Mexico and you get a thin disc of corn. Order it in Madrid and you get a thick potato omelette. Same word, different worlds. Today we open Module 7 with the food vocabulary that travels — and the words that change at every border.",
    culturalNote: "Spanish food vocabulary is wildly regional. 'Tortilla' = corn flatbread in Mexico/Central America, but a potato-and-egg omelette in Spain. 'Torta' = cake in most places, but a sandwich in Mexico. Asking 'where is this dish from?' before assuming is a kindness, not ignorance.",
  },

  chunks: [
    {
      id: 'tortilla',
      target: 'la tortilla',
      native: 'tortilla (corn flatbread in MX, potato omelette in ES)',
      literal: 'la tortilla — meaning depends on country',
      emoji: '🫓',
      phonetic: 'lah tor-TEE-yah',
      audioRef: null,
    },
    {
      id: 'comida',
      target: 'la comida',
      native: 'food / meal (also "lunch" in Mexico)',
      literal: 'la comida — food/meal',
      emoji: '🍽️',
      phonetic: 'lah ko-MEE-dah',
      audioRef: null,
    },
    {
      id: 'tengo_hambre',
      target: 'Tengo hambre',
      native: "I'm hungry",
      literal: 'I-have hunger',
      emoji: '😋',
      phonetic: 'TEN-goh AHM-breh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tener for states — "I have hunger" not "I am hungry"',
    explanation: "Spanish uses tener (to have) for many physical states English expresses with 'to be': tengo hambre (I have hunger = I'm hungry), tengo sed (I have thirst), tengo frío (I have cold). Saying 'soy hambre' is a beginner tell — it sounds like 'I am hunger itself'.",
    examples: [
      { target: 'Tengo hambre', native: "I'm hungry (I have hunger)" },
      { target: 'Tengo sed', native: "I'm thirsty (I have thirst)" },
      { target: '¿Tienes hambre?', native: 'Are you hungry?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish word to its meaning',
      pairs: [
        { left: 'la tortilla', right: 'corn flatbread (MX) / potato omelette (ES)' },
        { left: 'la comida', right: 'food / meal' },
        { left: 'Tengo hambre', right: "I'm hungry" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are hungry',
      sentence: '_____ hambre, ¿hay comida?',
      options: ['Tengo', 'Soy', 'Estoy'],
      correct: 'Tengo',
      context: "I'm hungry, is there food?",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm hungry",
      correct: ['Tengo hambre', 'tengo hambre'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Madrid and order 'una tortilla'. What arrives at your table?",
      question: 'In Spain, "una tortilla" is:',
      options: [
        { text: 'A thick potato-and-egg omelette', correct: true },
        { text: 'A thin corn flatbread', correct: false },
        { text: 'A wheat tortilla wrap', correct: false },
      ],
      explanation: "In Spain, tortilla = tortilla española, a potato omelette. The Mexican corn disc is what most of the English-speaking world means — but cross the Atlantic and the same word means something else entirely.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm hungry, I want food'",
      words: ['Tengo', 'hambre,', 'quiero', 'comida.'],
      correct: ['Tengo', 'hambre,', 'quiero', 'comida.'],
      translation: "I'm hungry, I want food",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'food / meal',
      correct: ['la comida', 'comida', 'la Comida'],
    },
  ],

  rwenDialogue: {
    intro: "You've just landed in Mexico City and you're starving. You walk into a small fonda in Roma Norte. The owner greets you.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Buenas! ¿Vienes a comer?',
        native: 'Hello! Are you here to eat?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, tengo hambre. ¿Qué comida tienen hoy?', native: "Yes, I'm hungry. What food do you have today?", correct: true, feedback: "Tengo hambre — clean and natural. The owner brightens immediately and starts walking you through the day's options." },
          { target: 'Soy hambre', native: 'I am hunger', correct: false, feedback: "Tener, not ser — 'Tengo hambre.' 'Soy hambre' literally means 'I am the concept of hunger'." },
          { target: 'Estoy comida', native: 'I am food', correct: false, feedback: "You're saying you are food itself. Try 'Tengo hambre, quiero comida.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hoy hay tortillas recién hechas y guisado de pollo.',
        native: "Today we have fresh-made tortillas and chicken stew.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Tengo hambre — three syllables and the table is yours. Module 7 begins.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm hungry (in Spanish)", correct: ['Tengo hambre', 'tengo hambre'] },
      { prompt: 'food / meal', correct: ['la comida', 'comida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you feel hungry today, say 'Tengo hambre' out loud before reaching for food. Notice that the 'have' framing actually fits — hunger is something you have, not something you are.",
    rwenSignoff: "Hasta mañana — tomorrow we drink.",
  },

  phase8: {
    scenario: "It's a hot afternoon in Roma Norte, Mexico City. You've walked into a tiny fonda — six tables, a hand-written menu, the smell of comal-warmed tortillas. The owner, behind the counter, looks up and greets you. You haven't eaten since breakfast and your Spanish is being tested in real time.",
    rwenRole: "Doña Rosa — fonda owner, late 50s, warm but no-nonsense; she'll happily walk you through the day's comida corrida if you greet her like a person and ask in Spanish.",
    successCriteria: "User opens with a greeting (¡Buenas! / ¡Hola!), uses 'Tengo hambre' (NOT 'soy hambre' or 'estoy hambre'), asks about 'la comida' or what's available today, and stays in Spanish rather than switching to English at the first hesitation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
