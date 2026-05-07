import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! 'This' = esto/esta (cerca). 'That' = eso/esa (lejos). En plural: 'These' (cerca) y 'Those' (lejos). Cuatro palabras, dos para singular y dos para plural — sin género.",
    culturalNote: "Para hispanohablantes esto es liberador: en español tenemos este/esta/esto/esa/ese/eso/aquel/aquella/aquello — al menos 8 formas. En inglés son solo 4: this/that (singular), these/those (plural). Sin masculino/femenino, sin tres niveles de distancia. La distinción que importa es solo cerca vs. lejos.",
  },

  chunks: [
    {
      id: 'this_book',
      target: 'This book',
      native: 'Este libro (cerca)',
      literal: 'Este libro',
      emoji: '📕',
      phonetic: 'dis-BUK',
      audioRef: null,
    },
    {
      id: 'that_house',
      target: 'That house',
      native: 'Esa casa (lejos)',
      literal: 'Esa casa',
      emoji: '🏠',
      phonetic: 'dat-JÁUS',
      audioRef: null,
    },
    {
      id: 'these_children',
      target: 'These children',
      native: 'Estos niños (cerca)',
      literal: 'Estos niños',
      emoji: '👶',
      phonetic: 'DIS-CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Demonstratives',
    explanation: "Singular: 'this' (cerca) / 'that' (lejos). Plural: 'these' (cerca) / 'those' (lejos). 'These' y 'those' DEBEN concordar con plural — 'these shoes' (no 'this shoes'). En español tenemos tres niveles de distancia (este/ese/aquel); el inglés solo dos. Más simple.",
    examples: [
      { target: 'This book / These books',   native: 'Este libro / Estos libros' },
      { target: 'That house / Those houses', native: 'Esa casa / Esas casas' },
      { target: 'This is mine. That is yours.', native: 'Esto es mío. Eso es tuyo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'This book',     right: 'Este libro' },
        { left: 'That house',     right: 'Esa casa' },
        { left: 'These children', right: 'Estos niños' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Esto es mío',
      correct: ['This is mine', 'This is mine.', 'this is mine'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Esos zapatos',
      correct: ['Those shoes', 'those shoes', 'Those shoes.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con this/that/these/those',
      sentence: '____ shoes here are mine.',
      options: ['These', 'This', 'Those'],
      correct: 'These',
      context: '"Shoes" es plural y están cerca — usa "These".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['These', 'are', 'my', 'books'],
      correct: ['These', 'are', 'my', 'books'],
      translation: 'Estos son mis libros',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Señalas dos zapatos lejos. ¿Cómo los llamas?',
      options: [
        { text: 'Those shoes',  correct: true },
        { text: 'Those shoe',   correct: false },
        { text: 'That shoes',   correct: false },
      ],
      explanation: 'Plural + lejos = "Those shoes". "Shoe" en singular sería raro al hablar de un par.',
    },
  ],

  rwenDialogue: {
    intro: 'En una zapatería en Lima atendiendo a una clienta anglo. Hay zapatos cerca y lejos.',
    lines: [
      { speaker: 'npc', target: 'Which shoes do you like?', native: '¿Cuáles zapatos te gustan?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I like these shoes here, but those shoes over there are too expensive.", native: 'Me gustan estos zapatos de aquí, pero esos de allá son muy caros.', correct: true,  feedback: 'Perfecto — "these" (cerca) y "those" (lejos), ambos en plural.' },
          { target: "I like this shoes here, but that shoes over there are expensive.",         native: 'Me gusta este zapatos, ese zapatos.',                                  correct: false, feedback: '"Shoes" es plural — usa "these" y "those", no "this" y "that".' },
          { target: "I like that shoes here, but these shoes over there are expensive.",        native: 'Confundido cerca-lejos.',                                              correct: false, feedback: 'Mezclaste cerca y lejos — "these" es cerca, "those" es lejos.' },
        ],
      },
      { speaker: 'npc', target: "I'll grab the cheaper ones for you.", native: 'Te traigo los más baratos.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste cerca-lejos en plural — eso es nivel intermedio.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'These shoes (en inglés)', correct: ['These shoes', 'these shoes', 'These shoes.'] },
      { prompt: 'That house (en inglés)',  correct: ['That house', 'that house', 'That house.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Señala 4 cosas (2 cerca, 2 lejos) y nómbralas en inglés. 'This book', 'these papers', 'that wall', 'those windows'.",
    rwenSignoff: 'Cerca y lejos. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're working at a small shoe shop in Lima. An English-speaking customer is browsing — different shelves have different shoes. Help them point out which ones they like.",
    rwenRole: "Jenny, 32, an American tourist looking for a souvenir. Friendly, indecisive. Speaks clear American English.",
    successCriteria: "User correctly distinguishes 'these' (close, plural) vs 'those' (far, plural), and 'this' (close, singular) vs 'that' (far, singular). Doesn't mix singular with plural nouns.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
