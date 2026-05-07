import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Tea, coffee, drinks — Té, café, bebidas',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo pedir tu bebida — té, café, agua. La cafetería es el lugar donde más vas a usar inglés en EE.UU.",
    culturalNote: "Diferencia importante: 'coffee' en EE.UU. por defecto es café americano (filtrado, suave). Si pides 'a coffee' te dan eso. Para café fuerte tipo expresso pide 'an espresso'. Para café con leche pide 'a latte' (no 'café con leche', no te entienden) o 'coffee with milk'. Y 'tea' por defecto es té negro caliente — si quieres té helado pide 'iced tea' (en el sur de EE.UU. casi siempre viene endulzado, pide 'unsweet' si no quieres azúcar).",
  },

  chunks: [
    {
      id: 'tea_with_milk',
      target: 'Tea with milk',
      native: 'Té con leche',
      literal: 'Tea with milk',
      emoji: '🍵',
      phonetic: 'TEE-with-MILK',
      audioRef: null,
    },
    {
      id: 'black_coffee',
      target: 'Black coffee',
      native: 'Café negro (sin leche)',
      literal: 'Black coffee (no milk)',
      emoji: '☕',
      phonetic: 'BLAK-KOF-ee',
      audioRef: null,
    },
    {
      id: 'glass_of_water',
      target: 'A glass of water',
      native: 'Un vaso de agua',
      literal: 'A glass of water',
      emoji: '🥛',
      phonetic: 'a-GLAS-of-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Containers + of + drink',
    explanation: "Para pedir bebidas en cantidades específicas se usa la fórmula '[container] of [drink]': 'a glass of water', 'a cup of coffee', 'a bottle of beer'. Como las bebidas son incontables (water, coffee, beer), el contenedor te da la unidad.",
    examples: [
      { target: 'A cup of coffee',         native: 'Una taza de café' },
      { target: 'A bottle of water',        native: 'Una botella de agua' },
      { target: 'A glass of wine',          native: 'Una copa de vino' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las bebidas',
      pairs: [
        { left: 'Tea with milk', right: 'Té con leche' },
        { left: 'Black coffee',  right: 'Café negro' },
        { left: 'A glass of water', right: 'Un vaso de agua' },
        { left: 'A cup of coffee',  right: 'Una taza de café' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Un vaso de agua',
      correct: ['A glass of water', 'a glass of water'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides una taza de café',
      sentence: 'A ____ of coffee, please.',
      options: ['cup', 'glass', 'bottle'],
      correct: 'cup',
      context: 'El café se sirve en taza ("cup"), el agua en vaso ("glass").',
    },
    {
      type: 'multiple_choice',
      instruction: 'Estás en un Starbucks en Texas. Quieres té helado sin azúcar.',
      question: 'How do you order it?',
      options: [
        { text: 'An unsweet iced tea, please.', correct: true },
        { text: 'A cold tea without sugar.',     correct: false },
        { text: 'Tea with no sweet.',             correct: false },
      ],
      explanation: 'En el sur de EE.UU. el "iced tea" viene dulce por defecto. "Unsweet" es la palabra exacta para pedirlo sin azúcar.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides té con leche',
      words: ['milk', 'tea', 'with', "I'd", 'like'],
      correct: ["I'd", 'like', 'tea', 'with', 'milk'],
      translation: 'Quisiera té con leche',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Café negro, por favor',
      correct: ['Black coffee, please', 'A black coffee, please', 'black coffee please'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un Starbucks en Austin, Texas. Hace 38 grados afuera. Quieres té helado sin azúcar y agua.',
    lines: [
      { speaker: 'npc', target: "Hi, what can I get started for you?", native: 'Hola, ¿qué te puedo preparar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "An unsweet iced tea and a glass of water, please.", native: 'Un té helado sin azúcar y un vaso de agua, por favor.', correct: true,  feedback: '¡Perfecto! "Unsweet" es la palabra mágica en Texas. Y pediste agua aparte — buena idea con este calor.' },
          { target: 'Tea cold no sugar.',                                  native: 'Té frío sin azúcar.',                                     correct: false, feedback: 'Se entiende, pero no es natural. Mejor "iced tea, unsweet".' },
          { target: 'Coffee with milk.',                                    native: 'Café con leche.',                                         correct: false, feedback: 'Eso es otra bebida — no era lo que querías. Aparte, en Starbucks es "latte", no "coffee with milk".' },
        ],
      },
      { speaker: 'npc', target: "Got it. That'll be five dollars.", native: 'Entendido. Son cinco dólares.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "Unsweet iced tea" en el sur de EE.UU. es esencial. Te ahorra azúcar de más.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Café negro (en inglés)',      correct: ['Black coffee', 'black coffee'] },
      { prompt: 'Un vaso de agua (en inglés)',  correct: ['A glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Pide tu próxima bebida en inglés (en voz alta o mentalmente): "I\'d like a [container] of [drink], please." Practica con tres bebidas distintas.',
    rwenSignoff: 'Mañana: cómo explicarle a un anglo qué es el sadza, las arepas, el mole — comida tuya en inglés.',
  },

  phase8: {
    scenario: "You're at a Starbucks in Austin during summer. Order three drinks — one for you, one for your sister, one for your mom — including modifications (milk type, sweetness, hot/iced).",
    rwenRole: "Sam, 22, barista. Friendly, asks clarifying questions about milk and sweetness.",
    successCriteria: "User orders three drinks using 'I'd like a [size] [drink]', specifies hot/iced, mentions milk or sugar preferences, and confirms the order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
