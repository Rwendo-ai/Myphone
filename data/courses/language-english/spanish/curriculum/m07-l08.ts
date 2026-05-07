import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-shona-food',
  module: 7,
  lesson: 8,
  title: 'Sharing Latin food in English — Tu comida en inglés',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo presentar comida latinoamericana a anglos. Las arepas, el mole, los tamales — palabras que el inglés no tiene. Hay que explicar.",
    culturalNote: "El inglés no tiene equivalentes para muchísimas comidas latinoamericanas. La técnica es: di el nombre original, luego una breve descripción en inglés. 'Arepas — corn cakes from Venezuela' o 'Mole — a Mexican sauce with chocolate and chiles'. NO traduzcas el nombre, mantén la palabra y agrega la explicación. Y un detalle: en EE.UU. 'tamale' (singular, sin la 's') es la forma anglicada — los anglos dicen 'one tamale' aunque en español sea 'un tamal'. Así adoptaron la palabra.",
  },

  chunks: [
    {
      id: 'sadza',
      target: "Arepas — corn cakes from Venezuela and Colombia",
      native: 'Arepas — tortas de maíz de Venezuela y Colombia',
      literal: 'Arepa — flat corn cake',
      emoji: '🫓',
      phonetic: 'a-RAY-pahs',
      audioRef: null,
    },
    {
      id: 'mufushwa',
      target: 'Mole — a complex sauce with chiles, chocolate, and spices',
      native: 'Mole — salsa compleja con chiles, chocolate y especias',
      literal: 'Mole — Mexican sauce',
      emoji: '🍫',
      phonetic: 'MOH-lay',
      audioRef: null,
    },
    {
      id: 'mukaranga',
      target: 'Tamales — corn dough steamed in husks with filling',
      native: 'Tamales — masa de maíz cocida al vapor en hojas con relleno',
      literal: 'Tamal — corn-dough steamed package',
      emoji: '🌽',
      phonetic: 'tah-MAH-lays',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming + describing untranslatable food',
    explanation: "Estructura: '[original name] — [short description]'. La pausa larga (raya o coma) separa el nombre de la descripción. La descripción usa palabras simples: ingredient, country, technique. Ej: 'tamales — corn dough steamed in husks'. No traduzcas el nombre.",
    examples: [
      { target: 'Pupusas — thick corn tortillas with cheese filling', native: 'Pupusas — tortillas de maíz gruesas rellenas de queso' },
      { target: 'Ceviche — raw fish marinated in lime juice',          native: 'Ceviche — pescado crudo en jugo de limón' },
      { target: 'Empanadas — pastries filled with meat or cheese',     native: 'Empanadas — masas rellenas de carne o queso' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja la comida con su descripción corta',
      pairs: [
        { left: 'Arepas',     right: 'Corn cakes' },
        { left: 'Tamales',    right: 'Corn dough in husks' },
        { left: 'Mole',       right: 'Sauce with chiles' },
        { left: 'Ceviche',    right: 'Fish in lime juice' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Describe en inglés sin traducir el nombre',
      prompt: 'Empanadas',
      correct: ['Empanadas — pastries filled with meat or cheese', 'Empanadas - pastries filled with meat or cheese', 'Empanadas, pastries filled with meat or cheese'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Le explicas a un amigo gringo qué es el mole',
      question: 'What is mole?',
      options: [
        { text: "It's a Mexican sauce with chiles, chocolate, and spices.", correct: true },
        { text: "It's a type of bread.",                                      correct: false },
        { text: "It's just chocolate.",                                        correct: false },
      ],
      explanation: 'El mole es la salsa, no el chocolate solo (aunque lo lleva). La descripción de tres ingredientes principales es lo más útil para alguien que nunca lo probó.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — describes las arepas',
      sentence: 'Arepas are ____ cakes from Venezuela and Colombia.',
      options: ['corn', 'wheat', 'rice'],
      correct: 'corn',
      context: 'Las arepas se hacen de maíz ("corn"), no de trigo ni arroz.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — explicas qué son los tamales',
      words: ['dough', 'corn', 'are', 'Tamales', 'in', 'husks'],
      correct: ['Tamales', 'are', 'corn', 'dough', 'in', 'husks'],
      translation: 'Los tamales son masa de maíz en hojas',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — descripción corta del ceviche',
      prompt: 'Ceviche es pescado crudo en jugo de limón',
      correct: ['Ceviche is raw fish in lime juice', 'Ceviche is raw fish marinated in lime juice', 'ceviche is raw fish in lime juice'],
    },
  ],

  rwenDialogue: {
    intro: 'Llevaste arepas a un potluck en Miami. Tu colega gringa Karen nunca las probó y te pregunta qué son.',
    lines: [
      { speaker: 'npc', target: "What are these? They look amazing!", native: '¿Qué son estas? ¡Se ven increíbles!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "They're arepas — corn cakes from Venezuela and Colombia. You can fill them with cheese or meat.", native: 'Son arepas — tortas de maíz de Venezuela y Colombia. Las puedes rellenar con queso o carne.', correct: true,  feedback: '¡Perfecto! Nombre + país + breve descripción + cómo se comen. Manual perfecto para presentar comida.' },
          { target: 'They are corn breads.',                                                                              native: 'Son panes de maíz.',                                                                       correct: false, feedback: 'Demasiado vago — y "corn bread" es otra cosa en EE.UU. (un postre dulce). Mejor "arepas — corn cakes".' },
          { target: 'Eat them.',                                                                                            native: 'Cómelas.',                                                                                  correct: false, feedback: 'Ja, demasiado directo. La gente quiere saber qué es antes de probar.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Excelente! Y nota que mantuviste la palabra "arepas" — eso ya enseña a Karen una palabra nueva.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Describe los tamales en inglés (8-12 palabras)', correct: ['Tamales are corn dough steamed in husks with filling', 'Tamales — corn dough steamed in husks with filling', 'Tamales are corn dough cooked in husks'] },
      { prompt: 'Describe el mole en inglés (5-10 palabras)',     correct: ['Mole is a Mexican sauce with chiles and chocolate', 'Mole — a sauce with chiles and chocolate', 'Mole is a sauce with chocolate and chiles'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Elige un plato típico de tu país que te encante. Escribe una descripción de 15 palabras en inglés siguiendo la fórmula: nombre — país — ingredientes principales — cómo se come.',
    rwenSignoff: 'Mañana: cómo recibir invitados en inglés — bienvenido, siéntate, sírvete.',
  },

  phase8: {
    scenario: "You're at a US workplace potluck. Three coworkers gather around the dish you brought (your favorite from your home country). Explain what it is, where it's from, and how to eat it.",
    rwenRole: "Three curious US coworkers — Steve, Megan, Ravi. They ask follow-up questions about ingredients and origin.",
    successCriteria: "User keeps the original food name (no awkward translation), gives a short description with country and main ingredients, and answers at least one follow-up question naturally.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
