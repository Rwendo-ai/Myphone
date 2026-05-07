import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! Empezamos el Módulo 4 con el dolor de cabeza clásico: 'a' y 'an'. Son los dos artículos indefinidos del inglés (un/una). La regla es de oído: 'an' antes de sonido vocal, 'a' antes del resto.",
    culturalNote: "Buenas noticias para hispanohablantes: el inglés NO TIENE GÉNERO en los sustantivos. 'A book' y 'a chair' usan la misma 'a' — no hay 'el/la'. Eso elimina años de duda. La trampa que queda es 'a' vs 'an', pero esta es de oído, no de sexo. Mucho más fácil.",
  },

  chunks: [
    {
      id: 'a_book',
      target: 'A book',
      native: 'Un libro',
      literal: undefined,
      emoji: '📖',
      phonetic: 'a-BUK',
      audioRef: null,
    },
    {
      id: 'an_apple',
      target: 'An apple',
      native: 'Una manzana',
      literal: undefined,
      emoji: '🍎',
      phonetic: 'an-A-pel',
      audioRef: null,
    },
    {
      id: 'a_house',
      target: 'A house',
      native: 'Una casa',
      literal: undefined,
      emoji: '🏠',
      phonetic: 'a-JÁUS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'A / An: vowel sound rule',
    explanation: "Regla simple: 'an' antes de SONIDO vocal (a, e, i, o, u). 'a' antes del resto. 'An apple' (a-pel — empieza con vocal). 'A book' (consonante). La trampa: NO depende de la letra, sino del sonido. 'An hour' usa 'an' aunque empiece con 'h' — porque la 'h' no se pronuncia. Y para hispanohablantes: el inglés NO TIENE 'el/la' indefinido — 'a/an' funcionan para masculino y femenino igual.",
    examples: [
      { target: 'A book',     native: 'Un libro' },
      { target: 'An apple',   native: 'Una manzana' },
      { target: 'An hour',    native: 'Una hora — "h" muda, por eso "an"' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'A book',   right: 'Un libro' },
        { left: 'An apple', right: 'Una manzana' },
        { left: 'A house',  right: 'Una casa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Una naranja',
      correct: ['An orange', 'an orange', 'An orange.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Un café',
      correct: ['A coffee', 'a coffee', 'A coffee.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con a o an',
      sentence: "I'd like ____ apple, please.",
      options: ['a', 'an', 'the'],
      correct: 'an',
      context: '"Apple" empieza con sonido vocal — necesita "an".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con a o an',
      sentence: "I have ____ dog.",
      options: ['a', 'an', 'the'],
      correct: 'a',
      context: '"Dog" empieza con consonante — usa "a".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Una hora"?',
      options: [
        { text: 'An hour',  correct: true },
        { text: 'A hour',   correct: false },
        { text: 'The hour', correct: false },
      ],
      explanation: 'La "h" en "hour" es muda — el sonido empieza con vocal "ou". Por eso "an hour".',
    },
  ],

  rwenDialogue: {
    intro: 'En un café en Los Ángeles. Vas a pedir tu desayuno en inglés.',
    lines: [
      { speaker: 'npc', target: 'Good morning! What can I get you?', native: '¡Buenos días! ¿Qué te sirvo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a coffee and an apple, please.", native: 'Quisiera un café y una manzana, por favor.', correct: true,  feedback: 'Perfecto — "a coffee" (consonante) + "an apple" (vocal).' },
          { target: "I'd like a coffee and a apple, please.",   native: 'Quisiera un café y un manzana, por favor.', correct: false, feedback: '"Apple" empieza con vocal — usa "an apple", no "a apple".' },
          { target: "I'd like coffee and apple, please.",        native: 'Quisiera café y manzana, por favor.',       correct: false, feedback: 'En inglés necesitas "a/an" antes de los sustantivos contables — no se pueden saltar.' },
        ],
      },
      { speaker: 'npc', target: "Coming right up.", native: 'Ya viene.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste "a" y "an" en una sola pasada — y sin tener que pensar en género masculino/femenino.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'A coffee (en inglés)',  correct: ['A coffee', 'a coffee', 'A coffee.'] },
      { prompt: 'An apple (en inglés)',  correct: ['An apple', 'an apple', 'An apple.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Mira a tu alrededor y nombra 5 cosas con 'a' o 'an' en inglés. 'A chair', 'an umbrella', 'a phone'. La regla es de oído.",
    rwenSignoff: 'Sin género — más fácil. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're ordering breakfast at a small cafe in Los Angeles. Order a couple of items, mixing 'a' and 'an' words.",
    rwenRole: "Mike, 24, the friendly barista. Speaks clear American English, patient with new customers.",
    successCriteria: "User uses 'a' before consonant-sound words ('a coffee', 'a sandwich') and 'an' before vowel-sound words ('an apple', 'an orange', 'an hour'). Doesn't drop the article entirely.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
