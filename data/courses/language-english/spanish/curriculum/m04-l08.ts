import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! 'Much' y 'many' significan 'mucho/muchos'. La trampa: 'much' va con incontables (agua, tiempo, dinero). 'Many' va con contables (libros, amigos, días).",
    culturalNote: "En español decimos 'mucho dinero' y 'muchos libros' con el mismo 'mucho/muchos' — solo cambia singular/plural. En inglés cambia la palabra entera según si la cosa es contable o no. La regla práctica: ¿puedes contar 'uno, dos, tres'? Si sí → 'many'. Si no (agua, tiempo, leche) → 'much'. Para preguntas de cantidad: 'How much (incontable)?' / 'How many (contable)?'.",
  },

  chunks: [
    {
      id: 'much_water',
      target: 'Much water',
      native: 'Mucha agua',
      literal: 'Mucho agua',
      emoji: '💧',
      phonetic: 'mach-UÓ-ter',
      audioRef: null,
    },
    {
      id: 'many_friends',
      target: 'Many friends',
      native: 'Muchos amigos',
      literal: 'Muchos amigos',
      emoji: '👥',
      phonetic: 'ME-ni-FRENDS',
      audioRef: null,
    },
    {
      id: 'how_much_how_many',
      target: 'How much? / How many?',
      native: '¿Cuánto? / ¿Cuántos?',
      literal: '¿Cuánto? / ¿Cuántos?',
      emoji: '🔢',
      phonetic: 'jáo-MACH / jáo-ME-ni',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Much (uncountable) / Many (countable)',
    explanation: "REGLA DE ORO: ¿Es contable? (libros, amigos, días, hijos) → 'many'. ¿Incontable? (agua, tiempo, dinero, música, amor) → 'much'. Las preguntas siguen igual: 'How MUCH time?' / 'How MANY books?'. Para hispanohablantes la trampa es que el español no distingue: 'mucho tiempo' y 'muchas horas' usan el mismo 'mucho'. En inglés son palabras distintas.",
    examples: [
      { target: 'How much time do you have?',  native: '¿Cuánto tiempo tienes?' },
      { target: 'How many minutes are left?',  native: '¿Cuántos minutos quedan?' },
      { target: 'I have many friends.',        native: 'Tengo muchos amigos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Much water',     right: 'Mucha agua' },
        { left: 'Many friends',    right: 'Muchos amigos' },
        { left: 'How much?',        right: '¿Cuánto?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuánto dinero?',
      correct: ['How much money?', 'how much money?', 'How much money'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuántos amigos?',
      correct: ['How many friends?', 'how many friends?', 'How many friends'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con much / many',
      sentence: 'I have ____ work today.',
      options: ['much', 'many', 'a lot'],
      correct: 'much',
      context: '"Work" como concepto general es incontable — usa "much".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con much / many',
      sentence: 'I have ____ meetings today.',
      options: ['many', 'much', 'lots'],
      correct: 'many',
      context: '"Meetings" se cuentan (1, 2, 3) — usa "many".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo preguntas "¿Cuánto tiempo tienes?"?',
      options: [
        { text: 'How much time do you have?', correct: true },
        { text: 'How many time do you have?',  correct: false },
        { text: 'How time do you have?',       correct: false },
      ],
      explanation: '"Time" es incontable — usa "much". "How many" sería para horas, minutos, días.',
    },
  ],

  rwenDialogue: {
    intro: 'En una llamada con un cliente anglo. Te pregunta cómo te fue el día.',
    lines: [
      { speaker: 'npc', target: 'How was your day?', native: '¿Cómo te fue el día?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Long! I had many meetings and not much time to rest.", native: '¡Largo! Tuve muchas reuniones y poco tiempo para descansar.', correct: true,  feedback: 'Perfecto — "many meetings" (contable), "much time" (incontable).' },
          { target: "Long! I had much meetings and not many time to rest.", native: 'Confundido contable e incontable.',                              correct: false, feedback: 'Invertido — "meetings" se cuentan (many), "time" no (much).' },
          { target: "Long! I had a lot meetings.",                            native: 'Largo, tuve mucho reuniones.',                                    correct: false, feedback: '"A lot of meetings" funciona — pero aquí practicábamos many/much.' },
        ],
      },
      { speaker: 'npc', target: "Sounds tough — go rest.", native: 'Suena pesado — descansa.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Distinguiste contables de incontables — eso es la diferencia entre principiante y intermedio.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'How much time? (en inglés)',   correct: ['How much time?', 'how much time?', 'How much time'] },
      { prompt: 'How many friends? (en inglés)', correct: ['How many friends?', 'how many friends?', 'How many friends'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica preguntar 'How much / How many'. Examples: 'How much money?' (incontable), 'How many people?' (contable). La regla: ¿se cuenta uno-dos-tres?",
    rwenSignoff: 'Mucho que aprender. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're on a video call with an English-speaking client. They're asking about your workload — how busy you are this week, how many tasks you have.",
    rwenRole: "Mark, 40, an Australian client checking on project capacity. Direct, friendly, fluent English. Wants real numbers.",
    successCriteria: "User uses 'many' with countable plurals ('many meetings', 'many tasks') and 'much' with uncountables ('much time', 'much work'). Doesn't mix them.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
