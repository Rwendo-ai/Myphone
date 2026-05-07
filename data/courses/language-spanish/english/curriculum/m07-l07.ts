import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-platos-regionales',
  module: 7,
  lesson: 7,
  title: 'Platos Regionales — From Asado to Ceviche',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "There is no 'Spanish food'. There is Argentine asado (slow grilled meat over wood), Peruvian ceviche (raw fish in lime), Venezuelan and Colombian arepas (corn cakes), Spanish paella (saffron rice), Mexican mole (chocolate-chili sauce). To order well in Spanish you don't need to know one cuisine — you need to know which country you're in.",
    culturalNote: "Argentine asado is a half-day social event, not a meal. Peruvian ceviche is eaten at lunch only — never dinner (the fish must be fresh that morning). Arepas are split, filled, and eaten by hand from Caracas to Bogotá. Each dish has its own ritual; ordering them right earns instant local respect.",
  },

  chunks: [
    {
      id: 'asado',
      target: 'el asado',
      native: 'Argentine wood-fired barbecue (a half-day event)',
      literal: 'el asado — slow-grilled meat / the social event around it',
      emoji: '🔥🥩',
      phonetic: 'el ah-SAH-doh',
      audioRef: null,
    },
    {
      id: 'ceviche',
      target: 'el ceviche',
      native: 'Peruvian/Ecuadorian raw fish cured in lime',
      literal: 'el ceviche — raw fish + lime + onion + chili',
      emoji: '🐟🍋',
      phonetic: 'el seh-BEE-cheh',
      audioRef: null,
    },
    {
      id: 'arepa',
      target: 'la arepa',
      native: 'Colombian/Venezuelan corn cake (split & filled)',
      literal: 'la arepa — corn cake (Caribbean coast)',
      emoji: '🌽',
      phonetic: 'lah ah-REH-pah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tipico de — naming a regional dish',
    explanation: "To frame a dish as regional, use 'típico de [country/region]': el asado es típico de Argentina, el ceviche es típico del Perú, la arepa es típica de Venezuela y Colombia. 'Típico' agrees in gender — el asado típico, la arepa típica, los tacos típicos.",
    examples: [
      { target: 'El asado es típico de Argentina', native: 'Asado is typical of Argentina' },
      { target: 'El ceviche es típico del Perú', native: 'Ceviche is typical of Peru' },
      { target: 'La arepa es típica de Venezuela', native: 'The arepa is typical of Venezuela' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the regional dish to its origin',
      pairs: [
        { left: 'el asado', right: 'Argentina (wood-fired bbq)' },
        { left: 'el ceviche', right: 'Peru (lime-cured fish)' },
        { left: 'la arepa', right: 'Venezuela / Colombia (corn cake)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Frame the dish regionally',
      sentence: 'El ceviche es _____ del Perú.',
      options: ['típico', 'típica', 'típicos'],
      correct: 'típico',
      context: 'Ceviche is typical of Peru. (ceviche is masculine — típico)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Argentine wood-fired barbecue',
      correct: ['el asado', 'asado', 'El asado'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Lima at 7pm and ask for ceviche. The waiter looks doubtful. Why?",
      question: 'Why no ceviche at 7pm in Lima?',
      options: [
        { text: 'Ceviche is a lunch dish — fish must be that morning\'s catch', correct: true },
        { text: 'Ceviche is only served on weekends', correct: false },
        { text: 'It\'s too cold for raw fish at night', correct: false },
      ],
      explanation: "Ceviche is a midday meal in Peru — the fish caught that morning, eaten at lunch, never reheated. Asking for it at dinner is asking for yesterday's fish. Order tiradito instead, or wait until tomorrow's lunch.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The asado is typical of Argentina'",
      words: ['El', 'asado', 'es', 'típico', 'de', 'Argentina.'],
      correct: ['El', 'asado', 'es', 'típico', 'de', 'Argentina.'],
      translation: 'The asado is typical of Argentina',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Peruvian ceviche',
      correct: ['el ceviche', 'ceviche', 'el ceviche peruano'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a cevichería in Barranco, Lima. It's 1pm — peak ceviche hour. The chef catches your eye.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Va a probar el ceviche? El pescado es de esta mañana.',
        native: "Going to try the ceviche? The fish is from this morning.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, por favor. ¿Qué me recomienda? El ceviche es típico del Perú, ¿no?', native: "Yes, please. What do you recommend? Ceviche is typical of Peru, right?", correct: true, feedback: "You honoured the dish, asked for guidance, and showed you knew the cultural context. The chef beams and starts cutting fresh corvina." },
          { target: 'Quiero asado', native: "I want asado (Argentine bbq)", correct: false, feedback: "Wrong country, wrong dish. In a Lima cevichería: 'Sí, por favor. El ceviche es típico del Perú, ¿no?'" },
          { target: '¿Tienen ceviche para la cena?', native: 'Do you have ceviche for dinner?', correct: false, feedback: "Ceviche is lunch-only — fish must be that morning's catch. Order it now (1pm) — perfect timing. 'Sí, por favor.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Le hago un ceviche clásico de corvina con leche de tigre. ¿Picante?',
        native: "I'll make you a classic corvina ceviche with leche de tigre. Spicy?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Asado, ceviche, arepa — three dishes, three countries, one Spanish. Each plate carries its own ritual.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Argentine wood-fired barbecue', correct: ['el asado', 'asado'] },
      { prompt: 'Peruvian ceviche', correct: ['el ceviche', 'ceviche'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one regional dish today (asado, ceviche, arepa, paella, mole) and read about it for 5 minutes. Then say 'El [dish] es típico de [country]' out loud. Vocabulary anchored to a real food sticks for years.",
    rwenSignoff: "Hasta mañana — la cocina casera.",
  },

  phase8: {
    scenario: "It's just past 1pm in a small cevichería in Barranco, Lima. The lunch rush is in full swing — clatter of plates, splash of leche de tigre being poured, the chef behind a glass counter with that morning's catch. You've been seated at a stool, and the chef is asking what you'll have. This is your one window — ceviche kitchens close by 4pm.",
    rwenRole: "Chef Manuel — the cevichero, mid 40s, stern but warm; takes pride in his pescado del día and quietly tests whether tourists understand that ceviche is a midday-only dish.",
    successCriteria: "User confirms they want ceviche at lunch (NOT dinner), asks for a recommendation with '¿Qué me recomienda?', uses 'típico de Perú / del Perú' or otherwise acknowledges the regional context, and orders without confusing ceviche with asado / paella / arepa.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
