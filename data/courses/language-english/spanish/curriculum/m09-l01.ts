import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — ¿Dónde está...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "El Módulo 9 entra a viajes y direcciones. La frase más útil del mundo: 'Where is...?'. Si la dominas, no te pierdes en ningún país angloparlante.",
    culturalNote: "En español tenemos 'dónde está' (estar — ubicación) vs 'dónde es' (ser — evento: ¿dónde es la fiesta?). En inglés un solo verbo cubre las dos: 'Where is the bank?' (ubicación) y 'Where is the party?' (evento). La trampa de hispanohablantes: traducir literal 'Where is the toilets?' (en singular). En inglés es 'Where ARE the toilets?' porque 'toilets' es plural. Y en EE.UU. se dice 'restroom' o 'bathroom' — no 'toilet' a secas (suena directo).",
  },

  chunks: [
    {
      id: 'where_is_the_bank',
      target: 'Where is the bank?',
      native: '¿Dónde está el banco?',
      literal: 'Where is the bank?',
      emoji: '🏦',
      phonetic: 'WHAIR-iz-thuh-BANK',
      audioRef: null,
    },
    {
      id: 'excuse_me_toilets',
      target: 'Excuse me, the toilets?',
      native: 'Disculpe, ¿los baños?',
      literal: 'Excuse-me, the toilets?',
      emoji: '🙏',
      phonetic: 'ek-SKYOOZ-mee-thuh-TOY-lets',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'Allá / Por allá',
      literal: 'Over there',
      emoji: '👉',
      phonetic: 'OH-ver-THAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Where is / Where are',
    explanation: "'Where is' (singular) + 'Where are' (plural). 'Where is the bank?' / 'Where are the toilets?'. La forma corta y educada empieza con 'Excuse me, where is...?'. En EE.UU., 'restroom' o 'bathroom' es más natural que 'toilet'.",
    examples: [
      { target: 'Where is the metro station?',  native: '¿Dónde está la estación de metro?' },
      { target: 'Where are the restrooms?',      native: '¿Dónde están los baños?' },
      { target: 'Excuse me, where is Target?',   native: 'Disculpe, ¿dónde está Target?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Where is the bank?',  right: '¿Dónde está el banco?' },
        { left: 'Where are the restrooms?', right: '¿Dónde están los baños?' },
        { left: 'Over there',           right: 'Allá' },
        { left: 'Excuse me',            right: 'Disculpe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — "toilets" es plural',
      sentence: 'Where ____ the restrooms?',
      options: ['is', 'are', 'be'],
      correct: 'are',
      context: '"Restrooms" es plural — usa "are", no "is".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Necesitas el baño en un Walmart en EE.UU. ¿Qué es lo más natural?',
      question: 'Best phrasing in the US:',
      options: [
        { text: 'Excuse me, where is the restroom?', correct: true },
        { text: 'Where toilet?',                       correct: false },
        { text: 'I need bathroom now.',                 correct: false },
      ],
      explanation: '"Restroom" es más natural en EE.UU. que "toilet". Y empezar con "Excuse me" es esencial.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Dónde está el banco?',
      correct: ['Where is the bank?', 'where is the bank?', 'Where is the bank'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — disculpa, ¿dónde está la estación?',
      words: ['the', 'is', 'station?', 'me,', 'where', 'Excuse'],
      correct: ['Excuse', 'me,', 'where', 'is', 'the', 'station?'],
      translation: 'Disculpe, ¿dónde está la estación?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Allá',
      correct: ['Over there', 'over there', 'Over there.'],
    },
  ],

  rwenDialogue: {
    intro: 'Acabas de aterrizar en JFK Nueva York. Necesitas el baño antes de buscar tu equipaje.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, where are the restrooms?",  native: 'Disculpe, ¿dónde están los baños?', correct: true,  feedback: '¡Perfecto! "Excuse me" + "where ARE" (plural) + "restrooms" (US-friendly).' },
          { target: 'Where is toilets?',                      native: '¿Dónde está baños?',                correct: false, feedback: '"Toilets" es plural — usa "are". Y "restrooms" suena más natural en EE.UU.' },
          { target: 'Bathroom!',                                native: '¡Baño!',                            correct: false, feedback: 'Demasiado directo. "Excuse me" suaviza la pregunta.' },
        ],
      },
      { speaker: 'npc', target: "Right over there, on your left.", native: 'Ahí, a tu izquierda.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "Excuse me" abre cualquier puerta en EE.UU. — más que "please" para estas preguntas rápidas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: '¿Dónde está el banco? (en inglés)', correct: ['Where is the bank?', 'where is the bank?', 'Where is the bank'] },
      { prompt: 'Allá (en inglés)',                    correct: ['Over there', 'over there', 'Over there.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Practica tres preguntas en inglés con "Where is/are...?" — busca el baño, la cocina, el supermercado más cercano. Usa "Excuse me" siempre como abertura.',
    rwenSignoff: 'Mañana: izquierda, derecha, derecho — direcciones simples.',
  },

  phase8: {
    scenario: "You just arrived at JFK in NYC and need to find: restrooms, the AirTrain to the city, and a place to buy a SIM card. Ask three different airport staff members.",
    rwenRole: "Three different airport staff (info desk, security, store clerk) all answering location questions briefly.",
    successCriteria: "User opens with 'Excuse me', uses 'Where is/are' correctly with singular/plural, and uses 'restroom' instead of 'toilet'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
