import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cooking verbs — Verbos de cocinar',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: los verbos de cocinar — cook, chop, boil. Útiles si compartes recetas, ves videos en inglés, o cocinas con amigos.",
    culturalNote: "Los hispanos tenemos verbos muy específicos: 'sofreír', 'rehogar', 'pochar', 'guisar', 'estofar' — cada técnica con su nombre. En inglés todo se simplifica: 'sauté', 'fry', 'cook'. 'Sofreír' no tiene traducción exacta. La buena noticia: el inglés básico de cocina es corto y claro. Para una receta sencilla, con cinco verbos (cook, chop, boil, fry, mix) funcionas. Si miras a tu abuela cocinando y quieres explicarlo en inglés, esos cinco te alcanzan.",
  },

  chunks: [
    {
      id: 'cook',
      target: 'Cook',
      native: 'Cocinar',
      literal: undefined,
      emoji: '👨‍🍳',
      phonetic: 'KOOK',
      audioRef: null,
    },
    {
      id: 'chop',
      target: 'Chop',
      native: 'Picar / cortar',
      literal: undefined,
      emoji: '🔪',
      phonetic: 'CHOP',
      audioRef: null,
    },
    {
      id: 'boil',
      target: 'Boil',
      native: 'Hervir',
      literal: 'Boil (water)',
      emoji: '♨️',
      phonetic: 'BOYL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative for recipes',
    explanation: "En recetas en inglés se usa el imperativo simple — el verbo en su forma base sin 'you': 'Chop the onions', 'Boil the water', 'Cook for 10 minutes'. No se dice 'You should chop' — solo 'Chop'. Esto sirve para escribir o leer recetas.",
    examples: [
      { target: 'Chop the onions',         native: 'Pica las cebollas' },
      { target: 'Boil the water',           native: 'Hierve el agua' },
      { target: 'Cook for ten minutes',     native: 'Cocina por diez minutos' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los verbos de cocina',
      pairs: [
        { left: 'Cook', right: 'Cocinar' },
        { left: 'Chop', right: 'Picar' },
        { left: 'Boil', right: 'Hervir' },
        { left: 'Fry',  right: 'Freír' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Picar',
      correct: ['Chop', 'chop', 'To chop'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la receta',
      sentence: '____ the rice for twenty minutes.',
      options: ['Chop', 'Boil', 'Fry'],
      correct: 'Boil',
      context: 'El arroz se cocina hirviéndolo en agua — "boil".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Quieres explicarle a un amigo cómo se hace tu salsa',
      question: 'First, ____ the tomatoes into small pieces.',
      options: [
        { text: 'chop',  correct: true },
        { text: 'boil', correct: false },
        { text: 'eat',  correct: false },
      ],
      explanation: '"Chop" es cortar en trozos. "Boil" es hervir. Para tomates en salsa, primero se pican.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — instrucciones de receta',
      words: ['minutes', 'ten', 'for', 'Cook'],
      correct: ['Cook', 'for', 'ten', 'minutes'],
      translation: 'Cocina por diez minutos',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hierve el agua',
      correct: ['Boil the water', 'boil the water', 'Boil water'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás cocinando con tu amiga gringa. Quieres explicarle cómo se hace mole sencillo. Ella no tiene idea.',
    lines: [
      { speaker: 'npc', target: "OK, where do we start?", native: 'OK, ¿por dónde empezamos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "First, chop the onions and boil the water.", native: 'Primero, pica las cebollas y hierve el agua.', correct: true,  feedback: '¡Perfecto! Imperativo claro, dos pasos seguidos — como una receta de YouTube.' },
          { target: 'You will to chop onions.',                     native: 'Tú vas a picar cebollas.',                     correct: false, feedback: 'Gramática mezclada. En recetas, el imperativo simple basta: "Chop the onions".' },
          { target: 'Onions chopping.',                              native: 'Cebollas picando.',                            correct: false, feedback: 'Suena a título de cuadro impresionista. Usa el imperativo: "Chop the onions".' },
        ],
      },
      { speaker: 'npc', target: "Got it. Then?", native: 'Entendido. ¿Y luego?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Las recetas en inglés son cortas y directas — imperativo, sustantivo. "Chop X. Boil Y. Cook Z."',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Cocinar (en inglés)', correct: ['Cook', 'cook', 'To cook'] },
      { prompt: 'Hervir (en inglés)',   correct: ['Boil', 'boil', 'To boil'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe (o di en voz alta) tres pasos en inglés para hacer un plato sencillo que conozcas. Usa "Chop", "Boil", "Cook" o "Fry". Es una mini-receta de tres líneas.',
    rwenSignoff: 'Mañana: bebidas — té, café, agua.',
  },

  phase8: {
    scenario: "You're cooking arroz con pollo with an American friend who's never made it. Walk them through three or four cooking steps using imperatives — chop, boil, cook, fry, mix.",
    rwenRole: "Connor, 26, your American friend. Knows how to cook basics, but no Latin food. Curious learner.",
    successCriteria: "User gives at least three recipe steps using imperative cooking verbs (chop/boil/cook/fry), names ingredients clearly, and indicates time or order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
