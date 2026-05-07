import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'How far? — ¿Qué tan lejos?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: distancia. '¿Qué tan lejos?', 'cinco minutos a pie', 'a la vuelta de la esquina'. Te dice si vale la pena caminar o pedir Uber.",
    culturalNote: "En EE.UU. la distancia se mide en MILLAS, no kilómetros. 1 milla = 1.6 km aproximado. Si te dicen 'it's three miles away' eso son casi 5 km — no caminable. Y los estadounidenses son raros para caminar — fuera de Manhattan o downtown LA, casi todo se hace en carro. Si un anglo dice 'it's just five minutes', probablemente se refiere a manejando, no a pie. Pregunta: 'Five minutes walking or driving?'.",
  },

  chunks: [
    {
      id: 'how_far',
      target: 'How far?',
      native: '¿Qué tan lejos?',
      literal: 'How far?',
      emoji: '📏',
      phonetic: 'HOW-FAR',
      audioRef: null,
    },
    {
      id: 'five_minutes_walk',
      target: "Five minutes' walk",
      native: 'Cinco minutos a pie',
      literal: 'Five minutes walk',
      emoji: '🚶',
      phonetic: 'fyv-MIN-its-WAWK',
      audioRef: null,
    },
    {
      id: 'around_the_corner',
      target: 'Just around the corner',
      native: 'A la vuelta de la esquina',
      literal: 'Just around the corner',
      emoji: '↩️',
      phonetic: 'JUST-uh-ROWND-thuh-COR-ner',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Distance expressions',
    explanation: "'How far is it?' = pregunta. Respuestas comunes: '[X] minutes by foot/walking/driving', 'It's [X] miles away', 'Just around the corner' (cerquita), 'Two blocks down' (dos cuadras). Especifica el modo: walking vs driving puede cambiar la respuesta.",
    examples: [
      { target: "It's a ten-minute walk",        native: 'Son diez minutos a pie' },
      { target: "It's two miles by car",          native: 'Son dos millas en carro' },
      { target: "It's just around the corner",    native: 'Está a la vuelta de la esquina' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las distancias',
      pairs: [
        { left: 'How far?',           right: '¿Qué tan lejos?' },
        { left: "Five minutes' walk", right: 'Cinco minutos a pie' },
        { left: 'Just around the corner', right: 'A la vuelta de la esquina' },
        { left: 'Two miles away',      right: 'A dos millas' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Qué tan lejos?',
      correct: ['How far?', 'how far?', 'How far is it?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — preguntas si es a pie o en carro',
      sentence: 'Five minutes ____ or driving?',
      options: ['walking', 'walk', 'foot'],
      correct: 'walking',
      context: '"Walking" o "by foot" especifica modo. La pregunta más natural es "walking or driving?".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Te dicen "It\'s three miles away". ¿Caminas o pides Uber?',
      question: 'Three miles is roughly:',
      options: [
        { text: 'About 5 km — too far to walk easily.', correct: true },
        { text: 'About 500 meters — easy to walk.',      correct: false },
        { text: 'About 30 km — far away.',                correct: false },
      ],
      explanation: '1 milla = 1.6 km. Tres millas son cerca de 5 km — caminable pero pesado. Mejor Uber o bus.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — está a la vuelta de la esquina',
      words: ['corner', 'just', 'the', 'around', "It's"],
      correct: ["It's", 'just', 'around', 'the', 'corner'],
      translation: 'Está a la vuelta de la esquina',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cinco minutos a pie',
      correct: ["Five minutes' walk", 'Five minutes walking', 'A five-minute walk', 'five minutes walk'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un hotel en San Francisco. Le preguntas al recepcionista por un café cerca.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, how far is the nearest coffee shop?",  native: 'Disculpe, ¿qué tan lejos está el café más cercano?', correct: true,  feedback: '¡Perfecto! "How far" + "the nearest" + lugar. Pregunta clara y educada.' },
          { target: 'Coffee where?',                                      native: '¿Café dónde?',                                       correct: false, feedback: 'Demasiado cortado. La pregunta completa hace que el recepcionista te oriente bien.' },
          { target: 'I am tired walking.',                                  native: 'Yo cansado caminar.',                                correct: false, feedback: 'No respondió a tu pregunta — la cansancio no le dice qué buscas.' },
        ],
      },
      { speaker: 'npc', target: "Just around the corner — about a two-minute walk.", native: 'A la vuelta de la esquina — como dos minutos a pie.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two minutes walking? Great, thanks!",  native: '¿Dos minutos a pie? ¡Genial, gracias!', correct: true,  feedback: '¡Bien! Confirmaste el modo (walking) y agradeciste.' },
          { target: 'Two minutes by car?',                    native: '¿Dos minutos en carro?',                correct: false, feedback: 'Para dos minutos por la esquina, claramente es a pie. No tiene sentido el carro.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En SF el centro es caminable; en otras ciudades de EE.UU. siempre confirma "walking or driving".',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: '¿Qué tan lejos? (en inglés)',           correct: ['How far?', 'how far?', 'How far is it?'] },
      { prompt: 'A la vuelta de la esquina (en inglés)',   correct: ['Just around the corner', 'just around the corner', "It's just around the corner"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Pregunta a tres personas (en inglés mental) "How far is X?". Practica con: el supermercado, el aeropuerto más cercano, tu trabajo. Convierte millas a km mentalmente.',
    rwenSignoff: 'Mañana: transporte — bus, taxi, tren.',
  },

  phase8: {
    scenario: "You're at a hotel in San Francisco. You ask the concierge about distances to: the nearest pharmacy, a good restaurant, and the BART station. Confirm if walking or driving is best.",
    rwenRole: "Patricia, 38, hotel concierge. Helpful, gives quick answers.",
    successCriteria: "User asks 'How far is X?' for at least three places, confirms walking vs driving, and understands distance answers (in minutes or miles).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
