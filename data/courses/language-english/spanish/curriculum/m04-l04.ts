import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: 'Plurals — adding -s',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! Plurales en inglés: regla básica = agregar '-s' al final. 'Cat' → 'cats'. 'Day' → 'days'. Mucho más sencillo que el español, donde a veces es '-s' o '-es' según la última letra.",
    culturalNote: "El plural inglés es uno de los regalos del idioma. En español tienes que pensar: 'pez' → 'peces' (cambia la z por c y agrega -es), 'rey' → 'reyes' (-es), 'casa' → 'casas' (-s). En inglés casi siempre es solo '-s'. Hay excepciones como 'baby' → 'babies' (cambias la y por i y agregas -es), pero la regla general te lleva al 90% de los casos.",
  },

  chunks: [
    {
      id: 'cats',
      target: 'Cat → Cats',
      native: 'Gato → Gatos',
      literal: undefined,
      emoji: '🐱',
      phonetic: 'KATS',
      audioRef: null,
    },
    {
      id: 'days',
      target: 'Day → Days',
      native: 'Día → Días',
      literal: undefined,
      emoji: '📅',
      phonetic: 'DÉIS',
      audioRef: null,
    },
    {
      id: 'friends',
      target: 'Friend → Friends',
      native: 'Amigo → Amigos',
      literal: undefined,
      emoji: '👥',
      phonetic: 'FRENDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Plural rules',
    explanation: "Reglas básicas: (1) +s para la mayoría: 'book → books'. (2) +es si termina en s/x/sh/ch: 'bus → buses', 'box → boxes'. (3) consonante+y → ies: 'baby → babies', 'city → cities'. Y aquí va lo bueno: el plural NO tiene género — 'two cats' sirve para gatos y gatas igual. En español tienes 'gatos' (mixto/masculino) y 'gatas' (femenino). El inglés ahorra esa distinción.",
    examples: [
      { target: 'One book, two books',     native: 'Un libro, dos libros' },
      { target: 'One bus, three buses',    native: 'Un autobús, tres autobuses' },
      { target: 'One baby, two babies',    native: 'Un bebé, dos bebés' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Cat → Cats',         right: 'Gato → Gatos' },
        { left: 'Day → Days',          right: 'Día → Días' },
        { left: 'Friend → Friends',    right: 'Amigo → Amigos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (en plural)',
      prompt: 'Tres libros',
      correct: ['Three books', 'three books', '3 books'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (en plural)',
      prompt: 'Dos bebés',
      correct: ['Two babies', 'two babies', '2 babies'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el plural correcto',
      sentence: 'I have two ____ at home.',
      options: ['cats', 'cat', 'cates'],
      correct: 'cats',
      context: '"Cat" → "cats" (regla simple: agregar -s).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'have', 'three', 'friends'],
      correct: ['I', 'have', 'three', 'friends'],
      translation: 'Tengo tres amigos',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cuál es el plural de "city"?',
      options: [
        { text: 'cities',  correct: true },
        { text: 'citys',   correct: false },
        { text: 'cityes',  correct: false },
      ],
      explanation: 'Consonante + y → cambia y por i y agrega -es: "city" → "cities".',
    },
  ],

  rwenDialogue: {
    intro: 'En una frutería en Cancún atendiendo a un turista anglo. Te pidió varias frutas — practica los plurales.',
    lines: [
      { speaker: 'npc', target: 'Welcome! What would you like today?', native: '¡Bienvenido! ¿Qué le sirvo hoy?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two apples, three bananas, and four oranges, please.", native: 'Dos manzanas, tres bananas y cuatro naranjas, por favor.', correct: true,  feedback: 'Perfecto — apples, bananas, oranges — todos en plural con -s.' },
          { target: "Two apple, three banana, and four orange, please.",     native: 'Dos manzana, tres banana, cuatro naranja.',                  correct: false, feedback: 'En inglés, después de "two/three/four" agrega -s: apples, bananas, oranges.' },
          { target: "Two apples, three banana, and four oranges, please.",   native: 'Dos manzanas, tres banana, cuatro naranjas.',                 correct: false, feedback: 'Falta -s en "banana" — debe ser "bananas".' },
        ],
      },
      { speaker: 'npc', target: "Coming up.", native: 'Ya viene.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! El plural inglés es más sencillo que el español — domina la regla del -s y vas listo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Two books (en inglés, plural)', correct: ['Two books', 'two books', '2 books'] },
      { prompt: 'Three friends (en inglés)',      correct: ['Three friends', 'three friends', '3 friends'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Mira cinco cosas a tu alrededor y dilas en plural en inglés. 'Two phones', 'three chairs', 'four windows'. Solo agrega -s.",
    rwenSignoff: 'Más fácil que el español. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're working at a fruit stall in Cancún. An English-speaking tourist is buying several items. Take their order in English using correct plurals.",
    rwenRole: "Sarah, 35, an American tourist on holiday. Friendly, in good spirits. Speaks clear American English.",
    successCriteria: "User uses correct plurals after numbers ('two apples' not 'two apple', 'three bananas'), handles -ies plurals correctly when relevant.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
