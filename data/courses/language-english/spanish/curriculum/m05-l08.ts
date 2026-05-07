import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Family verbs — Visitar, llamar, extrañar',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Tres verbos clave para hablar de familia: 'visit' (visitar), 'call' (llamar), 'miss' (extrañar). Estos los vas a usar todos los días si tienes familia lejos.",
    culturalNote: "Para muchos hispanohablantes en EE.UU., UK o Australia, 'I miss my family' es la frase del día. La cultura latina mantiene un contacto familiar constante — videollamadas, mensajes, visitas. En la cultura anglo el contacto familiar es más espaciado, pero entienden perfectamente cuando un latino dice 'I call my mom every day'. Es parte del retrato del inmigrante latino — la familia siempre presente.",
  },

  chunks: [
    {
      id: 'visit',
      target: 'Visit',
      native: 'Visitar',
      literal: undefined,
      emoji: '🏠',
      phonetic: 'VI-sit',
      audioRef: null,
    },
    {
      id: 'call',
      target: 'Call',
      native: 'Llamar',
      literal: undefined,
      emoji: '📞',
      phonetic: 'KOL',
      audioRef: null,
    },
    {
      id: 'miss',
      target: 'Miss (someone)',
      native: 'Extrañar (a alguien)',
      literal: 'Echar de menos',
      emoji: '💔',
      phonetic: 'MIS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Future with "I\'ll" / Present habit',
    explanation: "'I visit + (persona)' = visito (regular). 'I'll visit' = voy a visitar (futuro). 'I call my mom every day' = llamo a mi mamá todos los días. 'I miss + (persona)' = extraño a... La trampa: en español decimos 'extraño a mi mamá' (con 'a'); en inglés es 'I miss my mom' (sin preposición). Para presente repetido: 'every Sunday' / 'every day'.",
    examples: [
      { target: 'I visit my grandmother every Sunday.', native: 'Visito a mi abuela cada domingo.' },
      { target: 'I call my mother every day.',          native: 'Llamo a mi mamá todos los días.' },
      { target: 'I miss my brother.',                    native: 'Extraño a mi hermano.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Visit',          right: 'Visitar' },
        { left: 'Call',            right: 'Llamar' },
        { left: 'Miss (someone)',  right: 'Extrañar' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Llamo a mi mamá todos los días',
      correct: ['I call my mom every day', 'I call my mother every day', 'I call my mom every day.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Extraño a mi hermano',
      correct: ['I miss my brother', 'I miss my brother.', 'i miss my brother'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la frase de futuro',
      sentence: "I'll ____ my grandmother on Saturday.",
      options: ['visit', 'visited', 'visiting'],
      correct: 'visit',
      context: 'Después de "I\'ll" (will) viene el verbo en infinitivo: "I\'ll visit".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'miss', 'my', 'mother'],
      correct: ['I', 'miss', 'my', 'mother'],
      translation: 'Extraño a mi mamá',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (presente repetido)',
      prompt: 'Visito a mi abuela cada domingo',
      correct: [
        'I visit my grandmother every Sunday',
        'I visit my grandmother every Sunday.',
        'I visit my grandma every Sunday',
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En una llamada por video con tu compañera anglo desde Madrid. Te pregunta cómo organizas tu fin de semana.',
    lines: [
      { speaker: 'npc', target: "What are you doing this weekend?", native: '¿Qué vas a hacer este fin de semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to visit my grandmother on Saturday, and I'll call my brother on Sunday — I miss him.", native: 'Voy a visitar a mi abuela el sábado, y le voy a llamar a mi hermano el domingo — lo extraño.', correct: true,  feedback: 'Perfecto — visit + call + miss en una sola frase. Y el "I miss him" final es el toque latino emocional.' },
          { target: "Visit. Call. Miss.",                                                                                native: 'Visitar. Llamar. Extrañar.',                                                                  correct: false, feedback: 'Solo verbos sueltos — agrega "I\'m going to" / "I\'ll" para construir el plan.' },
          { target: "I miss my brother for visit.",                                                                       native: 'Confundido.',                                                                                  correct: false, feedback: 'La estructura no funciona — separa: "I\'m visiting my grandmother. I\'ll call my brother. I miss him."' },
        ],
      },
      { speaker: 'npc', target: "Sounds like a lovely weekend with family.", native: 'Suena a un buen fin de semana con familia.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Visit + call + miss son la trinidad de la familia distante — y los manejaste todos.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I call my mom (en inglés)',  correct: ['I call my mom', 'I call my mother', 'I call my mom.'] },
      { prompt: 'I miss my family (en inglés)', correct: ['I miss my family', 'I miss my family.', 'i miss my family'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica los tres verbos en inglés. 'I visit my (familiar)', 'I call (familiar)', 'I miss (familiar)'. La trinidad de la familia distante.",
    rwenSignoff: 'Familia siempre presente. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're on a video call with your American co-worker from Madrid. She asks about your weekend plans — explain a typical family-focused weekend in English.",
    rwenRole: "Sarah, 30, your American co-worker who's been living abroad herself. Curious about how you stay connected with family from far away.",
    successCriteria: "User uses 'visit', 'call', and 'miss' verbs correctly in plan-making sentences ('I'm going to visit my mom', 'I'll call my brother', 'I miss my family'). Combines at least two of the three verbs.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
