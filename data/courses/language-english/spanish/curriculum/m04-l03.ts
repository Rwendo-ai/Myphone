import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: 'No article — Plural & abstract',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! Hoy aprendemos cuándo NO usar artículo en inglés. Sí, suena raro — pero hay casos donde 'the' o 'a' sobra. Esta es la otra cara del Módulo 4.",
    culturalNote: "En español decimos 'me gusta el café', 'la familia es importante'. En inglés es 'I like coffee' (sin the), 'family is important' (sin the). Cuando hablas de algo en general — todo el café del mundo, todas las familias — NO usas artículo. Para hispanohablantes esto es contraintuitivo: nuestro español pide artículos casi por defecto. Domina esta distinción y te dejas de oír como 'traductor literal'.",
  },

  chunks: [
    {
      id: 'books',
      target: 'Books',
      native: 'Libros (en general)',
      literal: 'Libros',
      emoji: '📚',
      phonetic: 'BUKS',
      audioRef: null,
    },
    {
      id: 'love',
      target: 'Love',
      native: 'Amor',
      literal: 'Amor',
      emoji: '❤️',
      phonetic: 'LAV',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Niños (en general)',
      literal: 'Niños',
      emoji: '👶',
      phonetic: 'CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'No article: general / abstract / plural',
    explanation: "NO uses artículo cuando hablas de algo en general (todo o todos). 'I love music' = me gusta la música (toda). 'Children laugh' = los niños se ríen (todos los niños del mundo). 'Love is patient' = el amor es paciente (en general). Lo abstracto (love, peace, freedom, family) suele ir SIN 'the' cuando hablas en general. La trampa: 'I love THE music at this club' (específica) vs 'I love music' (general).",
    examples: [
      { target: 'Children laugh.',  native: 'Los niños ríen. (todos los niños)' },
      { target: 'Love is patient.', native: 'El amor es paciente. (abstracto)' },
      { target: 'I go to work.',    native: 'Voy al trabajo. (no "the work")' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Books',    right: 'Libros (en general)' },
        { left: 'Love',     right: 'Amor' },
        { left: 'Children', right: 'Niños (en general)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (sin artículo)',
      prompt: 'Me gusta la música',
      correct: ['I like music', 'I like music.', 'i like music'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'La familia es importante',
      correct: ['Family is important', 'Family is important.', 'family is important'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — habla en general',
      sentence: '____ love their parents.',
      options: ['Children', 'The children', 'A children'],
      correct: 'Children',
      context: 'Hablamos de niños en general — sin artículo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena (sin artículos)',
      words: ['Love', 'is', 'patient'],
      correct: ['Love', 'is', 'patient'],
      translation: 'El amor es paciente',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Voy al trabajo" en inglés?',
      options: [
        { text: 'I go to work.',     correct: true },
        { text: 'I go to the work.', correct: false },
        { text: 'I go to a work.',   correct: false },
      ],
      explanation: '"Work" como concepto general no lleva artículo. "The work" sería un trabajo específico de una mesa.',
    },
  ],

  rwenDialogue: {
    intro: 'En una clase de ESL en Miami. La maestra te pregunta qué es importante para ti — quiere ver si manejas frases generales sin artículo.',
    lines: [
      { speaker: 'npc', target: "Tell me — what matters most to you?", native: 'Dime — ¿qué es lo más importante para ti?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Family and love matter most. Children are the future.', native: 'La familia y el amor importan más. Los niños son el futuro.', correct: true,  feedback: 'Perfecto — "family", "love", "children" sin artículo (general). "The future" sí lleva "the" (único).' },
          { target: 'The family and the love matter most.',                    native: 'La familia y el amor importan más.',                                correct: false, feedback: 'Cuando hablas en general, no uses "the" — "family" y "love" van solos.' },
          { target: 'A family and a love matter most.',                        native: 'Una familia y un amor importan más.',                                correct: false, feedback: '"A" da idea de "uno cualquiera" — para hablar en general no uses artículo.' },
        ],
      },
      { speaker: 'npc', target: "Beautiful answer.", native: 'Hermosa respuesta.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste el "no artículo" — eso es nivel intermedio en inglés.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I like music (en inglés, sin artículo)', correct: ['I like music', 'I like music.', 'i like music'] },
      { prompt: 'Children are important (en inglés)',     correct: ['Children are important', 'Children are important.', 'children are important'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica frases generales sin artículo: 'I love coffee', 'Family is important', 'Music helps me'. Sin 'the', sin 'a'.",
    rwenSignoff: 'Sin artículo. Sin problema. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in an ESL class in Miami. The teacher leads a discussion about values — what matters most to you. Use general statements without articles when needed.",
    rwenRole: "Ms Johnson, 45, your ESL teacher. Encouraging, asks follow-up 'why' questions. Speaks slow clear American English.",
    successCriteria: "User makes general statements without articles ('Family is important', 'I love music'), but uses 'the' for specific things ('the future'). Avoids 'the family is important' style errors.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
