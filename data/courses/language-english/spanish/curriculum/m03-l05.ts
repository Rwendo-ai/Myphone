import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Hobbies — Pasatiempos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'I like...' / 'I enjoy...' / 'In my free time...' — tres formas de hablar de tus pasatiempos en inglés. La trampa: después de 'like' y 'enjoy' viene el verbo en '-ing', no el infinitivo.",
    culturalNote: "En español decimos 'me gusta leer' (infinitivo). En inglés es 'I like reading' (con -ing). Esta forma '-ing' es el equivalente del 'leer' como acción cotidiana. Para hispanohablantes la confusión es: en EE.UU. y UK, 'I like to read' también es válido — pero 'I like reading' suena más natural en conversación. Domina el '-ing' y vas a sonar más fluido.",
  },

  chunks: [
    {
      id: 'i_like',
      target: 'I like ...',
      native: 'Me gusta...',
      literal: 'Yo gusto...',
      emoji: '👍',
      phonetic: 'ai-LÁIK',
      audioRef: null,
    },
    {
      id: 'i_enjoy',
      target: 'I enjoy ...',
      native: 'Disfruto...',
      literal: 'Yo disfruto...',
      emoji: '😊',
      phonetic: 'ai-en-DJÓI',
      audioRef: null,
    },
    {
      id: 'in_my_free_time',
      target: 'In my free time',
      native: 'En mi tiempo libre',
      literal: 'En mi tiempo libre',
      emoji: '⏰',
      phonetic: 'in-mai-FRI-táim',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Like/Enjoy + verb-ing',
    explanation: "Después de 'like' y 'enjoy' viene el verbo en forma '-ing'. 'I like reading' (no 'I like read'). 'I enjoy cooking' (no 'I enjoy cook'). Esta forma '-ing' es como decir 'la actividad de leer'. En español sería como decir 'me gusta el leer' — aunque no lo digamos así, ayuda visualizarlo.",
    examples: [
      { target: 'I like reading',                 native: 'Me gusta leer' },
      { target: 'I enjoy cooking',                 native: 'Disfruto cocinar' },
      { target: 'In my free time, I watch films',  native: 'En mi tiempo libre, veo películas' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I like ...',         right: 'Me gusta...' },
        { left: 'I enjoy ...',         right: 'Disfruto...' },
        { left: 'In my free time',    right: 'En mi tiempo libre' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me gusta leer',
      correct: ['I like reading', 'I like to read', "i like reading", 'I like reading.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Disfruto cocinar',
      correct: ['I enjoy cooking', 'I enjoy cooking.', "i enjoy cooking", 'I enjoy to cook'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la forma correcta del verbo',
      sentence: 'I enjoy ____.',
      options: ['cooking', 'cook', 'to cook'],
      correct: 'cooking',
      context: 'Después de "enjoy", el verbo va en "-ing".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['In', 'my', 'free', 'time', 'I', 'read'],
      correct: ['In', 'my', 'free', 'time', 'I', 'read'],
      translation: 'En mi tiempo libre leo',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la respuesta natural',
      question: '¿Cómo respondes a "What do you like to do in your free time?"',
      options: [
        { text: "I like reading and cooking.", correct: true },
        { text: 'I like read.',                  correct: false },
        { text: 'Read.',                          correct: false },
      ],
      explanation: '"I like read" no es correcto — necesita "-ing": "I like reading".',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un club de lectura bilingüe en San Diego. Te toca presentarte y compartir lo que te gusta.',
    lines: [
      { speaker: 'npc', target: "Tell us — what do you like doing in your free time?", native: 'Cuéntanos — ¿qué te gusta hacer en tu tiempo libre?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I enjoy reading. In my free time, I read every evening.", native: 'Disfruto leer. En mi tiempo libre, leo todas las noches.', correct: true,  feedback: 'Perfecto — diste tu pasatiempo y agregaste detalle.' },
          { target: "I like read.",                                              native: 'Me gusta leer.',                                              correct: false, feedback: 'Olvidaste el "-ing" — es "I like reading", no "I like read".' },
          { target: "Read.",                                                     native: 'Leer.',                                                       correct: false, feedback: 'Demasiado corto — en un club de lectura quieren oír una frase completa.' },
        ],
      },
      { speaker: 'npc', target: "Oh wonderful — what's your favourite book?", native: 'Qué lindo — ¿cuál es tu libro favorito?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste el "-ing" como nativo. Ya estás listo para charlas casuales.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I like reading (en inglés)',     correct: ['I like reading', 'I like reading.', 'i like reading', 'I like to read'] },
      { prompt: 'In my free time (en inglés)',    correct: ['In my free time', 'In my free time,', 'in my free time', 'In my free time.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuéntale a alguien — aunque sea a tu perro — un pasatiempo en inglés con '-ing': 'I like (verbo)ing'.",
    rwenSignoff: 'Disfruta. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a bilingual book club meeting in San Diego. It's icebreaker time — share what you enjoy doing in your free time.",
    rwenRole: "Jenny, 40, the book club host. American, friendly, asks gentle follow-ups about hobbies and books.",
    successCriteria: "User uses 'like + verb-ing' or 'enjoy + verb-ing' (not 'like + verb' alone). Includes detail like 'in my free time' or 'every evening'. Sounds conversational, not stilted.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
