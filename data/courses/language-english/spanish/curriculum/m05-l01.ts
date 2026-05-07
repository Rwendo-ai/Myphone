import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — Mamá y Papá',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Empezamos el Módulo 5: la familia. Hoy aprendemos 'mother' (madre) y 'father' (padre). Para presentar familia, la fórmula es 'This is my mother...'.",
    culturalNote: "En Latinoamérica la familia se nombra con cariño y diminutivos: 'mami', 'papi', 'abue'. En inglés es más neutro — 'mom' y 'dad' son las versiones casuales (equivalentes a 'mami/papi'); 'mother' y 'father' son más formales. Para presentar a tus papás a un compañero anglo: 'This is my mom and dad' suena cálido. 'This is my mother and father' suena más rígido — guárdalo para discursos formales.",
  },

  chunks: [
    {
      id: 'mother',
      target: 'Mother',
      native: 'Madre',
      literal: undefined,
      emoji: '👩',
      phonetic: 'MA-der',
      audioRef: null,
    },
    {
      id: 'father',
      target: 'Father',
      native: 'Padre',
      literal: undefined,
      emoji: '👨',
      phonetic: 'FA-der',
      audioRef: null,
    },
    {
      id: 'my_parents',
      target: 'My parents',
      native: 'Mis padres',
      literal: undefined,
      emoji: '👨‍👩',
      phonetic: 'mai-PA-rents',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family possessives',
    explanation: "'My mother' = mi mamá. 'My father' = mi papá. 'My parents' = mis padres (mamá + papá). En inglés 'my' funciona para singular y plural — sin género. Para presentar: 'This is my mother', 'These are my parents'. Casual: 'mom' y 'dad' (sin 'mother'/'father').",
    examples: [
      { target: 'My mother',  native: 'Mi mamá' },
      { target: 'My father',  native: 'Mi papá' },
      { target: 'Our parents', native: 'Nuestros padres' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Mother',     right: 'Madre' },
        { left: 'Father',     right: 'Padre' },
        { left: 'My parents', right: 'Mis padres' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi mamá',
      correct: ['My mother', 'My mom', 'my mother', 'my mom'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mis padres',
      correct: ['My parents', 'my parents', 'My parents.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la presentación',
      sentence: 'This is ____ mother.',
      options: ['my', 'me', 'I'],
      correct: 'my',
      context: 'Para presentar familia se usa "my" (mi).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la presentación',
      words: ['This', 'is', 'my', 'father'],
      correct: ['This', 'is', 'my', 'father'],
      translation: 'Este es mi papá',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo presentas a tus papás casualmente?',
      options: [
        { text: 'This is my mom and dad.', correct: true },
        { text: 'My mother. My father.',    correct: false },
        { text: 'They my parents.',          correct: false },
      ],
      explanation: '"This is my mom and dad" es la fórmula casual y cálida. Sin "is" suena cortado.',
    },
  ],

  rwenDialogue: {
    intro: 'En una cena con tu compañera anglo de trabajo en Houston. Le presentas a tus padres que están de visita.',
    lines: [
      { speaker: 'npc', target: "Hi! It's nice to meet your family.", native: '¡Hola! Es un placer conocer a tu familia.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'This is my mother, and this is my father.', native: 'Esta es mi mamá, y este es mi papá.', correct: true,  feedback: 'Perfecto — "This is my..." es la fórmula correcta para presentar.' },
          { target: 'My mother. My father.',                      native: 'Mi mamá. Mi papá.',                    correct: false, feedback: 'Demasiado corto — agrega "This is..." para que suene como presentación.' },
          { target: 'Mother and father here.',                     native: 'Mamá y papá aquí.',                    correct: false, feedback: 'Sin "my" pierdes la conexión personal — agrega "my mother and father".' },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you both.", native: 'Mucho gusto a los dos.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Presentaste a tus padres como un anglo lo haría — fórmula clara y cálida.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My mother (en inglés)', correct: ['My mother', 'My mom', 'my mother', 'my mom'] },
      { prompt: 'My father (en inglés)', correct: ['My father', 'My dad', 'my father', 'my dad'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica presentar a tus padres en inglés: 'This is my mom' / 'This is my dad'. La fórmula con 'This is' es clave.",
    rwenSignoff: 'Familia primero. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a dinner with your American co-worker in Houston. Your parents are visiting from Mexico — introduce them to her in English.",
    rwenRole: "Sarah, 30, your American co-worker. Warm, asks polite questions about your parents — what do they do, how was the flight.",
    successCriteria: "User uses 'This is my mom/dad' or 'This is my mother/father', not bare 'My mother'. Comfortable handling follow-up questions about parents.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
