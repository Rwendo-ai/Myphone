import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — ¿De dónde eres?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En inglés, para preguntar de dónde eres usas 'from'. Para decir dónde vives ahora usas 'in'. Las dos preposiciones marcan la diferencia entre origen y residencia.",
    culturalNote: "Para muchos hispanohablantes en EE.UU., UK o Australia esta pregunta tiene capas. 'I'm from Mexico' marca origen; 'I live in LA' marca presente. No tienes que elegir — puedes ser de Medellín y vivir en Sídney al mismo tiempo. En inglés, 'from' nunca caduca: aunque lleves 30 años en Londres, sigues siendo 'from Bogotá'.",
  },

  chunks: [
    {
      id: 'where_are_you_from',
      target: 'Where are you from?',
      native: '¿De dónde eres?',
      literal: '¿Dónde estás-tú de?',
      emoji: '🌍',
      phonetic: 'uér-ar-iú-FROM',
      audioRef: null,
    },
    {
      id: 'im_from',
      target: "I'm from ...",
      native: 'Soy de...',
      literal: 'Yo-soy de...',
      emoji: '🏠',
      phonetic: 'áim-FROM',
      audioRef: null,
    },
    {
      id: 'i_live_in',
      target: 'I live in ...',
      native: 'Vivo en...',
      literal: 'Yo-vivo en...',
      emoji: '🏘️',
      phonetic: 'ái-LIV-in',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Prepositions from/in',
    explanation: "Dos preposiciones clave: 'from' (de — origen) e 'in' (en — ubicación actual). En español decimos 'soy de Lima' y 'vivo en Madrid' — same lógica. La fórmula completa: 'I'm from Lima, but I live in Madrid'.",
    examples: [
      { target: "I'm from Mexico",       native: 'Soy de México' },
      { target: 'I live in Los Angeles', native: 'Vivo en Los Ángeles' },
      { target: "I'm from a small town", native: 'Soy de un pueblo pequeño' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Where are you from?', right: '¿De dónde eres?' },
        { left: "I'm from ...",         right: 'Soy de...' },
        { left: 'I live in ...',        right: 'Vivo en...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿De dónde eres?',
      correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy de Colombia',
      correct: ["I'm from Colombia", "i'm from Colombia", 'I am from Colombia', 'i am from Colombia'],
    },
    {
      type: 'fill_blank',
      instruction: 'Selecciona las preposiciones correctas',
      sentence: "I'm ____ Bogotá and I live ____ Miami.",
      options: ['from / in', 'in / from', 'from / from'],
      correct: 'from / in',
      context: "'from' = origen. 'in' = donde vives ahora.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la frase para decir dónde vives',
      words: ['I', 'live', 'in', 'Madrid'],
      correct: ['I', 'live', 'in', 'Madrid'],
      translation: 'Vivo en Madrid',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la pregunta',
      words: ['Where', 'are', 'you', 'from'],
      correct: ['Where', 'are', 'you', 'from'],
      translation: '¿De dónde eres?',
    },
  ],

  rwenDialogue: {
    intro: 'Vas en un vuelo de Bogotá a Madrid. La pasajera del lado empieza una conversación a la hora de vuelo.',
    lines: [
      { speaker: 'npc', target: "Hi! Where are you from?", native: '¡Hola! ¿De dónde eres?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from Colombia. I live in Bogotá.", native: 'Soy de Colombia. Vivo en Bogotá.', correct: true,  feedback: 'Perfecto — "from" para origen, "in" para residencia.' },
          { target: "I'm in Colombia.",                       native: 'Estoy en Colombia.',                correct: false, feedback: 'Confundiste las preposiciones — para origen es "from", no "in".' },
          { target: 'My name is Diego.',                     native: 'Me llamo Diego.',                    correct: false, feedback: 'Te preguntaron de dónde, no tu nombre.' },
        ],
      },
      { speaker: 'npc', target: "Nice. I'm from London myself.", native: 'Qué bien. Yo soy de Londres.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Empezaste una conversación de avión — el clásico hispanohablante en el extranjero.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Where are you from? (en inglés)', correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'] },
      { prompt: "I'm from Colombia (en inglés)",    correct: ["I'm from Colombia", "i'm from Colombia", 'I am from Colombia', 'i am from Colombia'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuéntale a alguien de dónde eres y dónde vives en inglés: 'I'm from ... and I live in ...'.",
    rwenSignoff: 'Que tengas buen viaje. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're on a flight from Bogotá to Madrid. The English-speaking passenger next to you starts small talk an hour into the flight.",
    rwenRole: "Mrs Patel, 60, a London-based grandmother flying back from visiting friends in Cartagena. Friendly, curious, asks gentle questions in clear English.",
    successCriteria: "User answers 'Where are you from?' with 'I'm from ...', uses 'I live in ...' to specify current city if it differs, and asks the seatmate the same questions back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
