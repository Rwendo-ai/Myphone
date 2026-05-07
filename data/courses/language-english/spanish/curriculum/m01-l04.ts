import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — Buenas tardes',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Buenas tardes! Cuando pasa el mediodía, el saludo cambia a 'Good afternoon'. Y en lugar de '¿Cómo estás?' suele venir 'How's your day?' — más casual, más anglo.",
    culturalNote: "En español ponemos mucho de nuestro estado de ánimo en la respuesta — 'aquí, en la lucha', 'todo bien gracias a Dios'. En inglés la fórmula es plana: 'Going well' o 'Pretty good'. No es frialdad — es eficiencia social. Te van a contar lo importante después, no en el saludo.",
  },

  chunks: [
    {
      id: 'good_afternoon',
      target: 'Good afternoon',
      native: 'Buenas tardes',
      literal: undefined,
      emoji: '☀️',
      phonetic: 'gud-af-ter-NUN',
      audioRef: null,
    },
    {
      id: 'hows_your_day',
      target: "How's your day?",
      native: '¿Cómo va tu día?',
      literal: 'Cómo-está tu día?',
      emoji: '🙂',
      phonetic: 'jáos-iór-DÉI',
      audioRef: null,
    },
    {
      id: 'going_well',
      target: 'Going well',
      native: 'Bien (yendo bien)',
      literal: 'Yendo bien',
      emoji: '👍',
      phonetic: 'GÓ-ing-UEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day shifts',
    explanation: "'Good morning' termina al mediodía. Entre las 12pm y las 5–6pm es 'Good afternoon'. La respuesta 'Going well' es la versión cómoda y neutral de 'Bien' — sin entrar en detalle. Si quieres ser más detallado: 'Pretty good' o 'Not bad'.",
    examples: [
      { target: 'Good afternoon',  native: 'Buenas tardes' },
      { target: "How's your day?", native: '¿Cómo va tu día?' },
      { target: "It's going well", native: 'Va bien' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Good afternoon',  right: 'Buenas tardes' },
        { left: "How's your day?", right: '¿Cómo va tu día?' },
        { left: 'Going well',      right: 'Bien (yendo bien)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Buenas tardes',
      correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cómo va tu día?',
      correct: ["How's your day?", "how's your day?", "How is your day?", "how is your day?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Selecciona el saludo correcto — son las 2pm',
      sentence: 'Good ____, how are you?',
      options: ['morning', 'afternoon', 'evening'],
      correct: 'afternoon',
      context: 'Te encontraste con un cliente al volver del almuerzo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta',
      words: ['My', 'day', 'is', 'going', 'well'],
      correct: ['My', 'day', 'is', 'going', 'well'],
      translation: 'Mi día va bien',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Es la 1pm. Te encontraste con un compañero. ¿Qué le dices?',
      options: [
        { text: 'Good afternoon!', correct: true },
        { text: 'Good morning!',   correct: false },
        { text: 'Good night!',     correct: false },
      ],
      explanation: "Después de las 12pm es 'Good afternoon'. 'Good night' es solo para irse a dormir.",
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una videollamada con un cliente anglo de tu agencia en Buenos Aires. Son las 2pm.',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: '¡Buenas tardes! ¿Cómo va tu día?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good afternoon. It's going well, thanks.", native: 'Buenas tardes. Va bien, gracias.', correct: true,  feedback: 'Perfecto — saludo apropiado a la hora + respuesta cordial estándar.' },
          { target: 'Good morning.',                              native: 'Buenos días.',                      correct: false, feedback: 'Ya pasó el mediodía — usa "Good afternoon".' },
          { target: 'Bye!',                                       native: '¡Chao!',                            correct: false, feedback: 'Es el inicio de la llamada — no la cierres todavía.' },
        ],
      },
      { speaker: 'npc', target: "Glad to hear that.", native: 'Me alegra.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Cambiaste de "morning" a "afternoon" — atento al reloj.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Good afternoon (en inglés)', correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'] },
      { prompt: 'Going well (en inglés)',     correct: ['Going well', 'going well', "It's going well", "it's going well"] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Después del mediodía, usa 'Good afternoon' con alguien — aunque sea con un mesero o por chat con un compañero.",
    rwenSignoff: 'Nos vemos — buena tarde.',
  },

  phase8: {
    scenario: "It's 1pm and you've joined a video call with an English-speaking client of your agency in Buenos Aires. Greet them and chat briefly about your day.",
    rwenRole: "James, 40, an Australian client of your design agency. Polite-professional, has worked with LATAM teams for years, patient with English learners.",
    successCriteria: "User opens with 'Good afternoon' (not 'Good morning'), uses 'How's your day?' or similar, and answers with 'Going well' or 'It's going well' if asked.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
