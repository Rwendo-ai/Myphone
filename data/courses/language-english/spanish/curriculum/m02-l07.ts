import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — ¿Dónde está...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'Where is...?' te abre todas las puertas — el baño, la salida, la habitación. Es la pregunta de orientación universal.",
    culturalNote: "En español 'baño' es palabra neutral. En inglés tienes opciones: 'bathroom' (en EE.UU., siempre, hasta sin tina), 'restroom' (público, formal), 'toilet' (UK, más directo, en EE.UU. suena vulgar). Si estás en Cancún o Punta Cana atendiendo turistas: 'restroom' suena mejor que 'toilet' para el oído americano.",
  },

  chunks: [
    {
      id: 'where_is_the_bathroom',
      target: 'Where is the bathroom?',
      native: '¿Dónde está el baño?',
      literal: '¿Dónde está el baño?',
      emoji: '🚻',
      phonetic: 'uér-iz-de-BAZ-rum',
      audioRef: null,
    },
    {
      id: 'where_is_the_exit',
      target: 'Where is the exit?',
      native: '¿Dónde está la salida?',
      literal: '¿Dónde está la salida?',
      emoji: '🚪',
      phonetic: 'uér-iz-de-EK-sit',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'Allí / Por allá',
      literal: 'Sobre allí',
      emoji: '👉',
      phonetic: 'ÓU-ver-DER',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Where is + the + (place)',
    explanation: "La fórmula: 'Where is the (lugar)?'. El 'the' es importante en inglés — no se puede saltar como en español. 'Where is bathroom?' suena raro; 'Where is THE bathroom?' es correcto. La respuesta común: 'Over there' + un gesto.",
    examples: [
      { target: 'Where is the bathroom?', native: '¿Dónde está el baño?' },
      { target: 'Where is the exit?',      native: '¿Dónde está la salida?' },
      { target: 'Where is room 101?',      native: '¿Dónde está la habitación 101?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Where is the bathroom?', right: '¿Dónde está el baño?' },
        { left: 'Where is the exit?',      right: '¿Dónde está la salida?' },
        { left: 'Over there',              right: 'Allí' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Dónde está el baño?',
      correct: ['Where is the bathroom?', 'where is the bathroom?', 'Where is the bathroom', 'where is the bathroom'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Dónde está la salida?',
      correct: ['Where is the exit?', 'where is the exit?', 'Where is the exit', 'where is the exit'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la pregunta',
      sentence: 'Where ____ the bathroom?',
      options: ['is', 'are', 'be'],
      correct: 'is',
      context: 'Para una sola cosa, en inglés es "is".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la pregunta',
      words: ['Where', 'is', 'the', 'exit'],
      correct: ['Where', 'is', 'the', 'exit'],
      translation: '¿Dónde está la salida?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Allí',
      correct: ['Over there', 'over there', 'Over there.', 'There'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un hotel en San Francisco para una conferencia. Necesitas el baño antes de la sesión.',
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'Hola, ¿en qué te ayudo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the bathroom?', native: 'Disculpe, ¿dónde está el baño?',     correct: true,  feedback: 'Perfecto — abriste con "Excuse me" y pediste con claridad.' },
          { target: 'Bathroom?',                          native: '¿Baño?',                              correct: false, feedback: 'Demasiado corto — usa la frase completa.' },
          { target: 'I am lost.',                         native: 'Estoy perdido.',                      correct: false, feedback: 'No estás perdido — solo necesitas el baño. Pregunta directamente.' },
        ],
      },
      { speaker: 'npc', target: "Sure — over there, on the right.", native: 'Claro — por allá, a la derecha.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "Excuse me, where is the bathroom?" — la frase que te salva en cualquier hotel del mundo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Where is the bathroom? (en inglés)', correct: ['Where is the bathroom?', 'where is the bathroom?', 'Where is the bathroom', 'where is the bathroom'] },
      { prompt: 'Over there (en inglés)',              correct: ['Over there', 'over there', 'Over there.', 'There'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica 'Where is the bathroom?' y 'Where is the exit?' en voz alta. Estas dos te salvan en aeropuertos, hoteles y centros comerciales.",
    rwenSignoff: 'Por allá. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a tech conference at a hotel in San Francisco. Between sessions you need the bathroom. Ask the front desk in English.",
    rwenRole: "Marcus, 28, the hotel concierge. Polite, professional, helpful. Speaks clear American English.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the bathroom?' clearly, says 'thank you' to the answer. No abrupt one-word questions.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
