import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: "What time? — ¿Qué hora es?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: la hora. Una habilidad básica para citas, vuelos, llamadas. En inglés decimos 'It's seven o'clock' o 'It's seven AM'.",
    culturalNote: "En América Latina usamos las 24 horas en lo formal: 'la reunión es a las 18:00'. En EE.UU. casi nunca — todo es de 12 horas con AM/PM. Tienes que recalcular automáticamente: 18:00 en tu cabeza = '6 PM' en boca. Y otra trampa: 'noon' = 12 PM (mediodía), 'midnight' = 12 AM (medianoche). Un error en el AM/PM puede hacerte perder un vuelo.",
  },

  chunks: [
    {
      id: 'what_time',
      target: 'What time is it?',
      native: '¿Qué hora es?',
      literal: 'What time is it?',
      emoji: '⏰',
      phonetic: 'wat-tym-iz-it',
      audioRef: null,
    },
    {
      id: 'seven_oclock',
      target: "It's seven o'clock",
      native: 'Son las siete en punto',
      literal: "It is seven o'clock",
      emoji: '🕖',
      phonetic: 'its-SEH-vn-oh-klok',
      audioRef: null,
    },
    {
      id: 'am_pm',
      target: 'A.M. / P.M.',
      native: 'A.M. (mañana) / P.M. (tarde-noche)',
      literal: 'Ante meridiem / Post meridiem',
      emoji: '🌅',
      phonetic: 'ay-em / pee-em',
      audioRef: null,
    },
  ],

  pattern: {
    name: '12-hour clock with AM/PM',
    explanation: "El inglés estadounidense usa siempre el reloj de 12 horas con AM o PM. Estructura: 'It's [hour] AM/PM' o 'It's [hour] o'clock'. Para el mediodía: 'noon' o '12 PM'. Para medianoche: 'midnight' o '12 AM'.",
    examples: [
      { target: "It's nine A.M.",        native: 'Son las nueve de la mañana' },
      { target: "It's three P.M.",       native: 'Son las tres de la tarde' },
      { target: "It's noon",             native: 'Es mediodía' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Qué hora es?',
      correct: ['What time is it?', 'what time is it?', 'What time is it'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — son las 8 de la mañana',
      sentence: "It's eight ____.",
      options: ['A.M.', 'P.M.', 'noon'],
      correct: 'A.M.',
      context: 'Las 8 de la mañana es A.M. (de medianoche al mediodía).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu vuelo es a las 18:00 en tu boleto. ¿Cómo lo dices en EE.UU.?',
      question: 'Mi vuelo es a las...',
      options: [
        { text: 'six P.M.',     correct: true },
        { text: 'eighteen P.M.', correct: false },
        { text: 'six A.M.',     correct: false },
      ],
      explanation: '18:00 = 6 PM. EE.UU. no usa hora militar en vida diaria. 6 AM sería las 6 de la mañana — un vuelo distinto.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — preguntas la hora',
      words: ['time', 'is', 'What', 'it?'],
      correct: ['What', 'time', 'is', 'it?'],
      translation: '¿Qué hora es?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — son las cinco de la tarde',
      prompt: 'Son las cinco P.M.',
      correct: ["It's five P.M.", "It's 5 P.M.", "Its five P.M.", "It's five PM", "it's five p.m."],
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Noon',          right: 'Mediodía' },
        { left: 'Midnight',      right: 'Medianoche' },
        { left: "Seven o'clock", right: 'Siete en punto' },
        { left: 'A.M.',          right: 'De la mañana' },
      ],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una sala de abordaje en LAX. Le preguntas a otro pasajero a qué hora sale el vuelo.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "What time is it?",         native: '¿Qué hora es?',           correct: true,  feedback: 'Correcto. Pregunta directa, perfectamente clara.' },
          { target: 'Time?',                     native: '¿Hora?',                 correct: false, feedback: 'Suena cortante. Mejor la pregunta completa: "What time is it?"' },
          { target: 'How much time?',            native: '¿Cuánto tiempo?',        correct: false, feedback: 'Eso pregunta duración, no la hora.' },
        ],
      },
      { speaker: 'npc', target: "It's three thirty P.M.", native: 'Son las tres y media de la tarde.' },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. Tres y media P.M. es 15:30 en tu cabeza — pero en boca, en EE.UU., es siempre "three thirty PM".',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: '¿Qué hora es? (en inglés)', correct: ['What time is it?', 'what time is it?', 'What time is it'] },
      { prompt: 'Son las siete en punto (en inglés)', correct: ["It's seven o'clock", "It's seven o'clock.", "Its seven o'clock", "it's seven o'clock"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Mira tu reloj cuatro veces hoy y di la hora en inglés en voz alta — incluye AM o PM cada vez.',
    rwenSignoff: 'Mañana: medias y cuartos — "half past" y "quarter to".',
  },

  phase8: {
    scenario: "You're at LAX waiting for a flight. You strike up a small chat with another passenger and need to ask the time, mention your boarding time, and confirm AM/PM.",
    rwenRole: "Greg, 50, a US business traveler waiting for the same gate. Friendly, talks fast.",
    successCriteria: "User asks 'What time is it?', understands the answer in 12-hour format, and correctly states their boarding time using AM or PM.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
