import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-meses-y-fechas',
  module: 6,
  lesson: 5,
  title: 'Meses y fechas — Months & Dates',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish months are recognisable — enero, febrero, marzo. But the calendar is written DD/MM/YYYY (not MM/DD like the US): 03/05/2026 means 3 May, not 5 March. Get this wrong and you'll arrive at the wrong appointment by two months. Months are masculine, lowercase, and connect with 'de': el cinco de mayo.",
    culturalNote: "El cinco de mayo is a real Mexican commemoration (Battle of Puebla, 1862) — bigger in the US than in Mexico itself. El día de los muertos is 1–2 November. Knowing how to say a date in Spanish — 'el quince de septiembre' — opens birthdays, anniversaries, holidays, and the bureaucracy that runs on DD/MM forms.",
  },

  chunks: [
    {
      id: 'enero_febrero_marzo',
      target: 'enero / febrero / marzo',
      native: 'January / February / March',
      literal: 'enero (1st), febrero (2nd), marzo (3rd) — all lowercase',
      emoji: '🗓️',
      phonetic: 'eh-NEH-roh / feh-BREH-roh / MAR-soh',
      audioRef: null,
    },
    {
      id: 'mayo_julio',
      target: 'mayo / julio',
      native: 'May / July',
      literal: 'mayo (5th), julio (7th)',
      emoji: '☀️',
      phonetic: 'MAH-yoh / HOO-lyoh',
      audioRef: null,
    },
    {
      id: 'el_de',
      target: 'el [number] de [month]',
      native: 'the [number] of [month]',
      literal: 'Date format: el quince de mayo = 15 May',
      emoji: '📆',
      phonetic: 'ehl ___ deh ___',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Dates: el + day + de + month + de + year. Written DD/MM/YYYY.',
    explanation: "Spanish dates flow as 'el 15 de mayo de 2026'. Always day first, then month, then year, joined by 'de'. Numerically: 15/05/2026 — DD/MM/YYYY. The first of the month is special: 'el primero de enero' (Latin America) or 'el uno de enero' (Spain). All other days use plain numbers.",
    examples: [
      { target: 'el cinco de mayo', native: 'May 5th' },
      { target: 'el primero de enero', native: 'January 1st (LatAm form)' },
      { target: '03/05/2026', native: '3 May 2026 (DD/MM/YYYY — NOT 5 March)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Spanish month to its English equivalent',
      pairs: [
        { left: 'enero', right: 'January' },
        { left: 'mayo', right: 'May' },
        { left: 'diciembre', right: 'December' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Connect the day to the month",
      sentence: 'el quince _____ mayo',
      options: ['de', 'en', 'por'],
      correct: 'de',
      context: "Dates use 'de' between the number and the month.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'July',
      correct: ['julio', 'Julio'],
    },
    {
      type: 'multiple_choice',
      instruction: "A form shows '07/04/2026'. What date is this in Spanish-calendar format?",
      question: 'The date is:',
      options: [
        { text: 'el siete de abril de 2026', correct: true },
        { text: 'el cuatro de julio de 2026', correct: false },
        { text: 'el siete de julio de 2026', correct: false },
      ],
      explanation: "Spanish-language countries write DD/MM/YYYY. 07/04/2026 = day 7, month 4 (April) = el siete de abril de 2026. Read it US-style and you'd be three months off.",
    },
    {
      type: 'build_sentence',
      instruction: "Build '5 May' (the date)",
      words: ['el', 'cinco', 'de', 'mayo'],
      correct: ['el', 'cinco', 'de', 'mayo'],
      translation: '5 May',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: '1 January (LatAm form, with "primero")',
      correct: ['el primero de enero', 'El primero de enero'],
    },
  ],

  rwenDialogue: {
    intro: "You're booking a hotel in Mexico City. The receptionist asks for your check-in date.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Para qué fecha es la reserva?',
        native: 'For what date is the reservation?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Para el quince de mayo de 2026.', native: 'For 15 May 2026.', correct: true, feedback: "Day-de-month-de-year — clean Spanish date format. The receptionist locks it in." },
          { target: 'Para 5/15/2026', native: 'For 5/15/2026 (US format)', correct: false, feedback: "Spanish-language dates are DD/MM — say 'el quince de mayo de 2026'." },
          { target: 'May 15', native: '(in English)', correct: false, feedback: "Spanish please — 'el quince de mayo'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "El quince de mayo — booked. DD/MM avoided a six-week mismatch. That's a real win.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'May', correct: ['mayo', 'Mayo'] },
      { prompt: '5 May (the date)', correct: ['el cinco de mayo', 'El cinco de mayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your birthday in Spanish: 'Mi cumpleaños es el [día] de [mes].' Say today's date the same way: 'Hoy es el [día] de [mes].' Notice the DD/MM order in your mouth.",
    rwenSignoff: "Las fechas en español llevan otro ritmo — Spanish dates have a different rhythm. Hasta mañana.",
  },

  phase8: {
    scenario: "Booking a hotel in Mexico City over the phone. The recepcionista needs your check-in date, your check-out date, and your fecha de nacimiento (birthday) for the registration form. You need to give all three in Spanish DD/MM format using 'el [día] de [mes] de [año]'.",
    rwenRole: "Carmen — Mexico City hotel receptionist in her late 40s, professional and patient; she needs the dates exactly right because the form is DD/MM/YYYY and she's seen too many guests give US-format dates by mistake. She'll repeat back to confirm.",
    successCriteria: "User gives at least two dates using 'el [number] de [month]' (e.g. 'el quince de mayo'), uses 'el primero' for any 1st-of-month, never says the month before the day, and confirms at least one date when Carmen reads it back to verify DD/MM order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
