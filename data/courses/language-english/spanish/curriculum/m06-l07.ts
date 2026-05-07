import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Months & Seasons — Meses y estaciones',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: meses y estaciones. Para fechas, cumpleaños, planes de vacaciones.",
    culturalNote: "Una trampa cultural enorme: en EE.UU. las fechas se escriben mes/día/año (05/06/2026 = 6 de mayo). En América Latina escribimos día/mes/año (05/06/2026 = 5 de junio). Si pones tu cumpleaños en un formulario en EE.UU. y lo confundes, te llega tu carnet con fecha equivocada. Otra: en el hemisferio sur (Argentina, Chile) el invierno es junio-agosto; en EE.UU. es diciembre-febrero. Los meses son los mismos, las estaciones cambian.",
  },

  chunks: [
    {
      id: 'first_months',
      target: 'January, February, March, April',
      native: 'Enero, febrero, marzo, abril',
      literal: 'Jan-Apr',
      emoji: '🗓️',
      phonetic: 'JAN-yoo-eh-ree, FEB-roo-eh-ree, march, AY-pril',
      audioRef: null,
    },
    {
      id: 'rainy_season',
      target: 'Rainy season',
      native: 'Temporada de lluvias',
      literal: 'Rainy season',
      emoji: '🌧️',
      phonetic: 'RAY-nee-SEE-zn',
      audioRef: null,
    },
    {
      id: 'summer_winter',
      target: 'Summer / Winter',
      native: 'Verano / Invierno',
      literal: 'Summer / Winter',
      emoji: '☀️❄️',
      phonetic: 'SUM-er / WIN-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'In + month',
    explanation: "En inglés, los meses se usan con 'in': 'in January', 'in July'. Igual con las estaciones: 'in summer', 'in winter'. Los meses se escriben con mayúscula. La preposición es distinta a los días (que usan 'on').",
    examples: [
      { target: 'My birthday is in March',  native: 'Mi cumpleaños es en marzo' },
      { target: 'In summer it is hot',       native: 'En verano hace calor' },
      { target: 'I travel in December',      native: 'Viajo en diciembre' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja meses y estaciones',
      pairs: [
        { left: 'January',  right: 'Enero' },
        { left: 'July',     right: 'Julio' },
        { left: 'Summer',   right: 'Verano' },
        { left: 'Winter',   right: 'Invierno' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Marzo',
      correct: ['March', 'march'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la preposición',
      sentence: 'My birthday is ____ April.',
      options: ['on', 'in', 'at'],
      correct: 'in',
      context: "Con meses se usa 'in', no 'on'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'En EE.UU., ¿qué estación es diciembre?',
      question: 'In the US, December is in...',
      options: [
        { text: 'Winter', correct: true },
        { text: 'Summer', correct: false },
        { text: 'Spring', correct: false },
      ],
      explanation: 'En el hemisferio norte (donde está EE.UU.), diciembre es invierno. En el hemisferio sur sería verano.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — viajo en agosto',
      words: ['August', 'I', 'travel', 'in'],
      correct: ['I', 'travel', 'in', 'August'],
      translation: 'Viajo en agosto',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi cumpleaños es en julio',
      correct: ['My birthday is in July', 'my birthday is in July', 'My birthday is in July.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás llenando un formulario de visa con un oficial estadounidense. Te pregunta tu fecha de nacimiento.',
    lines: [
      { speaker: 'npc', target: "What's your date of birth?", native: '¿Cuál es tu fecha de nacimiento?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "March 15th, 1990.",         native: '15 de marzo de 1990.',     correct: true,  feedback: '¡Perfecto! En EE.UU. el mes va primero. "March 15" es el formato natural.' },
          { target: "15 of March, 1990.",         native: '15 de marzo de 1990.',     correct: false, feedback: 'Suena a traducción literal del español. En inglés es "March 15" (mes primero).' },
          { target: "1990, March 15.",             native: '1990, marzo 15.',          correct: false, feedback: 'El año al final, no al principio: "March 15, 1990".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. En EE.UU. siempre mes-día-año al hablar y escribir. 03/15/1990, no 15/03/1990.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Enero (en inglés)',  correct: ['January', 'january'] },
      { prompt: 'Verano (en inglés)', correct: ['Summer', 'summer'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Di los doce meses en inglés en orden. Después di tu cumpleaños usando el formato "Month-Day-Year" en inglés.',
    rwenSignoff: 'Mañana entramos al dinero — la habilidad más práctica de todas.',
  },

  phase8: {
    scenario: "You're at a US doctor's office filling out a new patient form with the receptionist. They ask your date of birth, the month you started a medication, and your last visit month.",
    rwenRole: "Linda, 45, friendly receptionist at a clinic in Houston. Patient with non-native speakers.",
    successCriteria: "User correctly states their birth month-day-year in US order, names two other months with 'in', and avoids the day/month confusion.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
