import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Days of the week — Días de la semana',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: los días de la semana en inglés. Lunes a domingo. Esenciales para citas, calendarios, y planes con amigos.",
    culturalNote: "Una diferencia importante: en inglés los días siempre se escriben con mayúscula (Monday, Tuesday). En español va con minúscula (lunes, martes). Otra trampa: en EE.UU. la semana empieza el domingo en la mayoría de calendarios — los lunes están al medio. Un hispanohablante puede mirar un calendario gringo y leer mal la fecha.",
  },

  chunks: [
    {
      id: 'weekdays',
      target: 'Monday, Tuesday, Wednesday, Thursday, Friday',
      native: 'Lunes, martes, miércoles, jueves, viernes',
      literal: 'Mon-Fri',
      emoji: '📅',
      phonetic: 'MUN-day, TYOOZ-day, WENZ-day, THURZ-day, FRY-day',
      audioRef: null,
    },
    {
      id: 'weekend',
      target: 'Saturday, Sunday',
      native: 'Sábado, domingo',
      literal: 'Sat, Sun',
      emoji: '🛌',
      phonetic: 'SAT-er-day, SUN-day',
      audioRef: null,
    },
    {
      id: 'today_tomorrow',
      target: 'Today, tomorrow, yesterday',
      native: 'Hoy, mañana, ayer',
      literal: 'Today, tomorrow, yesterday',
      emoji: '⏳',
      phonetic: 'too-DAY, too-MOR-oh, YES-ter-day',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'On + day',
    explanation: "En inglés se usa la preposición 'on' antes de los días: 'on Monday', 'on Friday'. En español decimos 'el lunes'. No digas 'in Monday' o 'at Monday' — siempre 'on'.",
    examples: [
      { target: 'See you on Friday',       native: 'Nos vemos el viernes' },
      { target: 'I work on Saturdays',     native: 'Trabajo los sábados' },
      { target: 'On Sunday I rest',        native: 'El domingo descanso' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los días',
      pairs: [
        { left: 'Monday',    right: 'Lunes' },
        { left: 'Wednesday', right: 'Miércoles' },
        { left: 'Friday',    right: 'Viernes' },
        { left: 'Sunday',    right: 'Domingo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mañana',
      correct: ['Tomorrow', 'tomorrow'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la preposición correcta',
      sentence: 'See you ____ Friday.',
      options: ['in', 'on', 'at'],
      correct: 'on',
      context: "Con días de la semana se usa 'on'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Elige la traducción correcta',
      question: '¿Cómo se dice "miércoles" en inglés?',
      options: [
        { text: 'Wednesday', correct: true },
        { text: 'Thursday',  correct: false },
        { text: 'Tuesday',   correct: false },
      ],
      explanation: 'Wednesday tiene una ortografía rara — pero se pronuncia "WENZ-day", olvidando la primera "d".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — nos vemos el sábado',
      words: ['Saturday', 'See', 'you', 'on'],
      correct: ['See', 'you', 'on', 'Saturday'],
      translation: 'Nos vemos el sábado',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — usa "on"',
      prompt: 'Trabajo los lunes',
      correct: ['I work on Mondays', 'I work on Monday', 'i work on Mondays'],
    },
  ],

  rwenDialogue: {
    intro: 'Una nueva amiga estadounidense te invita a una barbacoa. Necesitas confirmar el día.',
    lines: [
      { speaker: 'npc', target: "Want to come to a barbecue on Saturday?", native: '¿Quieres venir a una parrillada el sábado?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, on Saturday — what time?", native: 'Sí, el sábado — ¿a qué hora?', correct: true,  feedback: '¡Perfecto! Confirmaste el día y preguntaste la hora — natural y útil.' },
          { target: "Yes, in Saturday.",              native: 'Sí, en sábado.',                correct: false, feedback: 'En inglés se usa "on" con días, no "in". Es siempre "on Saturday".' },
          { target: "Maybe on Wednesday?",            native: '¿Tal vez el miércoles?',         correct: false, feedback: 'Te invitó el sábado — propusiste otro día. Cuidado con confundir días.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "On Saturday" es la fórmula. En español dirías "el sábado" — la preposición cambia.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Miércoles (en inglés)', correct: ['Wednesday', 'wednesday'] },
      { prompt: 'Mañana (en inglés)',     correct: ['Tomorrow', 'tomorrow'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Di los siete días de la semana en inglés en orden, en voz alta. Repítelo tres veces. Después di hoy, mañana y ayer.',
    rwenSignoff: 'Mañana: los meses y las estaciones.',
  },

  phase8: {
    scenario: "You're chatting with an English-speaking coworker about the week's schedule. You need to discuss which days you work, which days you have appointments, and propose a day to grab coffee.",
    rwenRole: "Jenna, 35, a US coworker. Casual, makes small talk easily.",
    successCriteria: "User uses at least three days of the week with 'on', mentions today/tomorrow/yesterday correctly, and proposes a meet-up day.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
