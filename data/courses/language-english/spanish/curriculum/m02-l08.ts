import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — ¿Cuánto cuesta?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'How much?' es la pregunta del precio — corta y útil. 'It's expensive' / 'It's cheap' son las reacciones que vas a usar.",
    culturalNote: "En mercados de Latinoamérica el regateo es parte del ritual. En tiendas anglosajonas (EE.UU., UK, Australia) el precio es fijo — el regateo solo aplica en mercadillos pulgueros, mercados de antigüedades, o autos usados. 'It's too expensive' no es ofensa: es información. Pero no esperes que el vendedor baje el precio en una tienda formal.",
  },

  chunks: [
    {
      id: 'how_much',
      target: 'How much?',
      native: '¿Cuánto cuesta?',
      literal: '¿Cuánto mucho?',
      emoji: '💰',
      phonetic: 'jáo-MACH',
      audioRef: null,
    },
    {
      id: 'its_expensive',
      target: "It's expensive",
      native: 'Es caro',
      literal: 'Eso es caro',
      emoji: '💸',
      phonetic: 'its-eks-PEN-siv',
      audioRef: null,
    },
    {
      id: 'its_cheap',
      target: "It's cheap",
      native: 'Es barato',
      literal: 'Eso es barato',
      emoji: '🪙',
      phonetic: 'its-CHIP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'It is + adjective',
    explanation: "Para describir una cosa: 'It is + (adjetivo)'. 'It's expensive' / 'It's cheap' / 'It's good'. La contracción 'It's' es 'It is'. Para hispanohablantes ojo: 'it' es neutro — no necesitas saber si la cosa es masculina o femenina. Más fácil que en español.",
    examples: [
      { target: 'How much is this?',          native: '¿Cuánto cuesta esto?' },
      { target: 'How much does it cost?',     native: '¿Cuánto cuesta?' },
      { target: "It's too expensive for me.", native: 'Es muy caro para mí.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'How much?',     right: '¿Cuánto cuesta?' },
        { left: "It's expensive", right: 'Es caro' },
        { left: "It's cheap",     right: 'Es barato' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuánto cuesta esto?',
      correct: ['How much is this?', 'how much is this?', 'How much is this', 'how much is this'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Es muy caro',
      correct: ["It's too expensive", "It's too expensive.", "it's too expensive", "It is too expensive"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el adjetivo',
      sentence: "It's too ____ for me.",
      options: ['expensive', 'expense', 'cost'],
      correct: 'expensive',
      context: '"Expensive" es el adjetivo. "Expense" es el sustantivo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['How', 'much', 'is', 'this'],
      correct: ['How', 'much', 'is', 'this'],
      translation: '¿Cuánto cuesta esto?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'En un mercadillo en Brooklyn, una pieza te llama la atención. ¿Qué le preguntas al vendedor?',
      options: [
        { text: "How much is it?",           correct: true },
        { text: 'Cheap?',                     correct: false },
        { text: "I don't understand.",       correct: false },
      ],
      explanation: '"How much is it?" es la pregunta directa de precio. "Cheap?" suena raro y agresivo.',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un mercado de antigüedades en Brooklyn — una jarra de cerámica te llamó la atención. El vendedor habla solo inglés.',
    lines: [
      { speaker: 'npc', target: "Lovely piece, isn't it? Are you interested?", native: 'Linda pieza, ¿cierto? ¿Te interesa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, how much is it?',  native: 'Sí, ¿cuánto cuesta?', correct: true,  feedback: 'Perfecto — confirmaste interés y preguntaste precio claramente.' },
          { target: 'Cheap?',                 native: '¿Barato?',             correct: false, feedback: 'Suena agresivo — pregunta primero el precio.' },
          { target: "I don't understand.",   native: 'No entiendo.',         correct: false, feedback: 'Sí entendiste — pregunta el precio.' },
        ],
      },
      { speaker: 'npc', target: "Forty US dollars.", native: 'Cuarenta dólares.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Ya puedes navegar mercados anglo. Recuerda: en tiendas formales el precio es fijo, en mercadillos puedes intentar regatear.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'How much is it? (en inglés)', correct: ['How much is it?', 'how much is it?', 'How much is it', 'how much is it'] },
      { prompt: "It's expensive (en inglés)",  correct: ["It's expensive", "It's expensive.", "it's expensive", "It is expensive"] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica 'How much is it?' en voz alta. Es la pregunta que vas a usar miles de veces como turista o residente en países anglo.",
    rwenSignoff: '¡Cuánto cuesta! Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're browsing a flea market in Brooklyn, New York. A ceramic piece catches your eye. The vendor speaks only English. Ask about the price.",
    rwenRole: "Joe, 55, the vendor. Friendly, hopeful, willing to chat about pieces. Speaks clear American English with a Brooklyn accent.",
    successCriteria: "User asks 'How much is it?' or 'How much does it cost?', responds appropriately to the price (asks 'It's too expensive' if needed, or 'I'll take it'). Polite throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
