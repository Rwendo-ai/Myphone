import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "¡Hola! Hoy ponemos junto todo lo del Módulo 1. De 'Hello' a 'Goodbye' — una primera conversación completa en inglés.",
    culturalNote: "En Latinoamérica las primeras conversaciones suelen tener tiempo para preámbulos — el clima, el tráfico, '¿y la familia?'. En inglés (sobre todo en EE.UU.) el ritmo es más directo: saludo, nombre, origen, y al grano. No es frío — es que la cortesía vive en el tono y la sonrisa, no en la duración.",
  },

  chunks: [
    {
      id: 'review_hello_intro',
      target: 'Hello, my name is ...',
      native: 'Hola, me llamo...',
      literal: 'Hola, mi nombre es...',
      emoji: '👋',
      phonetic: 'jé-LOU-mái-NÉIM-is',
      audioRef: null,
    },
    {
      id: 'review_where_from',
      target: "I'm from Mexico",
      native: 'Soy de México',
      literal: 'Yo-soy de México',
      emoji: '🌍',
      phonetic: 'áim-FROM-MEK-si-cou',
      audioRef: null,
    },
    {
      id: 'review_goodbye_full',
      target: 'Goodbye, take care',
      native: 'Adiós, cuídate',
      literal: 'Adiós, toma-cuidado',
      emoji: '🤝',
      phonetic: 'gud-BÁI-téik-KÉR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full greeting flow',
    explanation: "Una conversación completa de presentación tiene tres partes: (1) Saludo — 'Hello' o 'Good morning'. (2) Presentación — 'My name is...' y 'I'm from...'. (3) Despedida — 'Goodbye' y 'Take care'. Si dominas las tres partes sin mirar tus apuntes, ya puedes mantener una primera conversación en inglés.",
    examples: [
      { target: "Hello, my name is Diego. I'm from Bogotá.", native: 'Hola, me llamo Diego. Soy de Bogotá.' },
      { target: "How are you? I'm fine, thanks.",              native: '¿Cómo estás? Bien, gracias.' },
      { target: 'Nice to meet you. Goodbye!',                  native: 'Mucho gusto. ¡Adiós!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las partes que se conectan en una conversación',
      pairs: [
        { left: 'Hello, how are you?', right: "I'm fine, thanks" },
        { left: "What's your name?",   right: 'My name is Diego' },
        { left: 'Goodbye!',            right: 'See you tomorrow' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — preséntate a alguien',
      prompt: 'Hola, me llamo Diego. Soy de Bogotá.',
      correct: [
        "Hello, my name is Diego. I'm from Bogotá.",
        "hello, my name is Diego. I'm from Bogotá.",
        "Hello, my name is Diego. I'm from Bogota.",
        "Hello my name is Diego. I'm from Bogotá.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — responde a "How are you?"',
      prompt: 'Estoy bien, gracias',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine, thank you", "i'm fine thanks"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la despedida completa',
      words: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      correct: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      translation: 'Adiós, nos vemos mañana, cuídate',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la presentación',
      sentence: "Hello, my ____ is Carla.",
      options: ['name', 'home', 'day'],
      correct: 'name',
      context: 'Estás respondiendo a "What\'s your name?".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Adiós, cuídate',
      correct: ['Goodbye, take care', 'goodbye, take care', 'Goodbye take care', 'Goodbye, take care.'],
    },
  ],

  rwenDialogue: {
    intro: 'Te encontraste con una persona que no conoces en la Plaza de Armas en Cusco. Empieza una conversación completa en inglés.',
    lines: [
      { speaker: 'npc', target: "Hello! How are you?", native: '¡Hola! ¿Cómo estás?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm fine, thanks. My name is Diego. What's your name?", native: 'Estoy bien, gracias. Me llamo Diego. ¿Cómo te llamas?', correct: true,  feedback: 'Perfecto — respondiste, te presentaste y devolviste la pregunta. Conversación viva.' },
          { target: 'Hi.',                                                       native: 'Hola.',                                                  correct: false, feedback: 'Demasiado corto — agrega tu nombre y una pregunta para que siga la conversación.' },
          { target: "Where are you from?",                                       native: '¿De dónde eres?',                                         correct: false, feedback: 'No respondiste su pregunta — primero responde, después indaga.' },
        ],
      },
      { speaker: 'npc', target: "I'm Sarah, from London. Nice to meet you, Diego. Goodbye!", native: 'Soy Sarah, de Londres. Mucho gusto, Diego. ¡Adiós!' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Terminaste el Módulo 1 — ya tienes la valentía para empezar una conversación en inglés. Buen viaje.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe la conversación completa.',
    prompts: [
      { prompt: "Hello, my name is Diego. I'm from Bogotá. (en inglés)", correct: [
        "Hello, my name is Diego. I'm from Bogotá.",
        "Hello, my name is Diego. I'm from Bogotá",
        "Hello my name is Diego. I'm from Bogotá.",
        "Hello, my name is Diego. I'm from Bogota.",
      ] },
      { prompt: "Nice to meet you. Goodbye! (en inglés)", correct: [
        'Nice to meet you. Goodbye!',
        'Nice to meet you. Goodbye',
        'Nice to meet you. Goodbye.',
        'nice to meet you. goodbye!',
      ] },
    ],
  },

  mission: {
    title: 'Tarea de hoy — Conversación Completa',
    task: "Hoy intenta hacer una conversación completa en inglés con alguien — de 'Hello' a 'Goodbye'. Saludo, nombre, origen, despedida con 'Take care'.",
    rwenSignoff: 'Terminaste el Módulo 1 — empezaste el viaje. Nos vemos en el Módulo 2.',
  },

  phase8: {
    scenario: "You're walking through downtown Cusco when a friendly tourist who's clearly lost stops you. They speak only English. Have a complete first-meeting conversation: greet, exchange names, ask where they're from, and part warmly.",
    rwenRole: "Emma, 28, an Australian tourist on her first day in Peru. Curious, polite, a bit jet-lagged. Speaks clear, friendly English.",
    successCriteria: "User runs the full flow: opens with a greeting (Hello / Good afternoon), exchanges names ('My name is...' / 'What's your name?'), asks 'Where are you from?', and closes with 'Goodbye' or 'Take care'. All chunks from Module 1 used naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
