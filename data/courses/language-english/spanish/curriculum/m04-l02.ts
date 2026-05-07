import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — When to use it',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! 'The' es el artículo definido en inglés — equivale a 'el/la/los/las'. Y aquí va otra buena noticia para hispanohablantes: 'the' es UNA sola palabra para todos los géneros y números.",
    culturalNote: "En español tienes el/la/los/las (cuatro formas según género y número). En inglés solo 'the' — una palabra que cubre todo. 'The book' (el libro), 'the table' (la mesa), 'the books' (los libros), 'the tables' (las mesas). Cuatro variantes a una. Eso te ahorra años de duda. La complicación que queda: cuándo usar 'the' vs cuándo no usarlo. Eso lo vemos en esta lección.",
  },

  chunks: [
    {
      id: 'the_book',
      target: 'The book',
      native: 'El libro (que conocemos)',
      literal: undefined,
      emoji: '📕',
      phonetic: 'de-BUK',
      audioRef: null,
    },
    {
      id: 'the_meeting',
      target: 'The meeting',
      native: 'La reunión',
      literal: undefined,
      emoji: '🤝',
      phonetic: 'de-MI-ting',
      audioRef: null,
    },
    {
      id: 'the_morning',
      target: 'The morning',
      native: 'La mañana (única)',
      literal: undefined,
      emoji: '🌅',
      phonetic: 'de-MOR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'When to use "the"',
    explanation: "'The' se usa cuando: (1) Ya mencionaste la cosa antes — 'I have a car. The car is red.'. (2) Hay solo una — 'The sun', 'the moon'. (3) Los dos saben de qué hablan — 'Pass me the keys'. La trampa para hispanohablantes: a veces no se necesita 'the'. 'I love music' (en general, sin 'the'). 'I love THE music at this club' (específica, con 'the').",
    examples: [
      { target: 'I have a car. The car is red.', native: 'Tengo un carro. El carro es rojo.' },
      { target: 'The sun is hot.',                 native: 'El sol está caliente.' },
      { target: 'Pass me the keys, please.',       native: 'Pásame las llaves, por favor.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'The book',     right: 'El libro' },
        { left: 'The meeting',  right: 'La reunión' },
        { left: 'The morning',  right: 'La mañana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'El sol está caliente',
      correct: ['The sun is hot', 'The sun is hot.', 'the sun is hot'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con a / an / the',
      sentence: 'I have a car. ____ car is red.',
      options: ['A', 'An', 'The'],
      correct: 'The',
      context: 'Ya mencionaste el carro — segunda mención = "the".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con los artículos)',
      prompt: 'Pásame las llaves, por favor',
      correct: ['Pass me the keys, please', 'Pass me the keys please', 'pass me the keys, please'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['The', 'meeting', 'is', 'at', '3pm'],
      correct: ['The', 'meeting', 'is', 'at', '3pm'],
      translation: 'La reunión es a las 3pm',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Tu compañero te pidió "the report" que discutieron ayer. ¿Cómo respondes?',
      options: [
        { text: "Yes, I'll bring the report now.", correct: true },
        { text: "Yes, I'll bring a report now.",    correct: false },
        { text: "Yes, I'll bring report now.",      correct: false },
      ],
      explanation: 'Hablan de un reporte específico que ya mencionaron — usa "the report".',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una agencia bilingüe en Buenos Aires. Tu jefe te pidió ayer el reporte trimestral.',
    lines: [
      { speaker: 'npc', target: "Can you bring me the report we discussed yesterday?", native: '¿Me puedes traer el reporte del que hablamos ayer?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'll bring the report now.",   native: 'Sí, ya te traigo el reporte.', correct: true,  feedback: 'Perfecto — "the report" porque ya lo mencionaron juntos.' },
          { target: "Yes, I'll bring a report now.",      native: 'Sí, ya te traigo un reporte.', correct: false, feedback: '"A report" implica cualquiera — pero te pidió uno específico. Usa "the report".' },
          { target: "Yes, I'll bring report now.",        native: 'Sí, ya te traigo reporte.',     correct: false, feedback: 'En inglés no se puede saltar el artículo — usa "the report".' },
        ],
      },
      { speaker: 'npc', target: "Great, thanks.", native: 'Bien, gracias.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "The" cuando los dos saben qué cosa — eso es inglés natural.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'The book (en inglés)',     correct: ['The book', 'the book', 'The book.'] },
      { prompt: 'The meeting (en inglés)',  correct: ['The meeting', 'the meeting', 'The meeting.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica frases con 'the' — segunda mención: 'I have a phone. The phone is new.'. Único en el mundo: 'The sun', 'the moon'.",
    rwenSignoff: 'Una palabra para todo. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a bilingual agency in Buenos Aires. Your boss is asking about specific files and reports. Use 'the' correctly when you both know what you're talking about.",
    rwenRole: "Marcelo, 45, your Argentinian boss with international clients. Switches between English and Spanish. Notes when articles are off.",
    successCriteria: "User uses 'the' for specific things you both know about ('the report', 'the meeting'), uses 'a' for first mentions ('a new client'). Doesn't drop articles entirely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
