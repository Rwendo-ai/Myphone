import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Ordering food — Cómo ordenar',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo ordenar — pedir lo que quieres y modificar el pedido (sin cebolla, con extra queso, etc.).",
    culturalNote: "En EE.UU. se permite (y se espera) modificar pedidos: 'no onions', 'extra cheese', 'on the side' (aparte). El mesero te lo pondrá en el sistema sin pestañear. En México o Argentina pedir muchos cambios puede leerse como exigente; en EE.UU. es normal — incluso 'high maintenance' es un cumplido en algunas ciudades. La fórmula clave: 'I'd like...' (suaviza 'I want') y 'without...' (sin) o 'with extra...' (con más).",
  },

  chunks: [
    {
      id: 'id_like',
      target: "I'd like...",
      native: 'Quisiera...',
      literal: 'I would like...',
      emoji: '👉',
      phonetic: 'ayd-LAYK',
      audioRef: null,
    },
    {
      id: 'could_i_have',
      target: 'Could I have...',
      native: '¿Me puede dar...?',
      literal: 'Could I have...',
      emoji: '🤲',
      phonetic: 'kud-ay-HAV',
      audioRef: null,
    },
    {
      id: 'without_onions',
      target: 'Without onions',
      native: 'Sin cebolla',
      literal: 'Without onions',
      emoji: '🚫',
      phonetic: 'with-OWT-UN-yuns',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modifying orders: with / without / extra / on the side',
    explanation: "Para modificar un pedido en inglés se usan: 'with' (con), 'without' (sin), 'extra' (más, doble), 'on the side' (aparte, no encima). Ejemplo: 'a burger without onions, with extra cheese, fries on the side'. Es una fórmula que se usa muchísimo.",
    examples: [
      { target: "I'd like a salad without dressing",   native: 'Quisiera una ensalada sin aderezo' },
      { target: 'A burger with extra cheese',           native: 'Una hamburguesa con extra queso' },
      { target: 'Sauce on the side, please',             native: 'Salsa aparte, por favor' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Quisiera...',
      correct: ["I'd like", "I would like", "I'd like..."],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides hamburguesa sin cebolla',
      sentence: "I'd like a burger ____ onions.",
      options: ['with', 'without', 'extra'],
      correct: 'without',
      context: '"Without" = sin. "With" = con. "Extra" = más.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Quieres queso doble en tu pizza. ¿Qué dices?',
      question: "I'd like the pizza...",
      options: [
        { text: 'with extra cheese',     correct: true },
        { text: 'with double the cheese', correct: false },
        { text: 'much cheese',           correct: false },
      ],
      explanation: '"Extra" es la palabra estándar para pedir más de un ingrediente. "Double cheese" se entiende pero "extra cheese" es lo natural.',
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja las modificaciones',
      pairs: [
        { left: 'Without onions', right: 'Sin cebolla' },
        { left: 'Extra cheese',    right: 'Más queso' },
        { left: 'On the side',     right: 'Aparte' },
        { left: "I'd like",       right: 'Quisiera' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides ensalada sin aderezo',
      words: ['salad', 'a', 'dressing', 'without', "I'd", 'like'],
      correct: ["I'd", 'like', 'a', 'salad', 'without', 'dressing'],
      translation: 'Quisiera una ensalada sin aderezo',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Me puede dar el pollo, sin cebolla, por favor?',
      correct: ['Could I have the chicken, without onions, please?', 'Could I have the chicken without onions, please?'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un Chipotle en Los Ángeles. La empleada arma tu burrito mientras te pregunta los ingredientes.',
    lines: [
      { speaker: 'npc', target: "What kind of beans? Black or pinto?", native: '¿Qué frijoles? ¿Negros o pintos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Black beans, please. And could I have extra cheese, no onions?", native: 'Frijoles negros, por favor. ¿Y me puede poner extra queso, sin cebolla?', correct: true,  feedback: '¡Perfecto! Modificaste el pedido como un pro: "extra X, no Y".' },
          { target: 'Black. With cheese. Without onion.',                                native: 'Negros. Con queso. Sin cebolla.',                                              correct: false, feedback: 'Se entiende, pero suena cortado. La fórmula "Could I have extra X, no Y" es más natural.' },
          { target: 'Whatever you want.',                                                  native: 'Lo que quieras.',                                                              correct: false, feedback: 'En Chipotle te toca decidir tú — es comida para ti. Específica los ingredientes.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Modificar el pedido es totalmente normal en EE.UU. — "extra", "without", "on the side" son tus mejores amigas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Quisiera... (en inglés)',     correct: ["I'd like", "I would like", "I'd like..."] },
      { prompt: 'Sin cebolla (en inglés)',      correct: ['Without onions', 'without onions', 'No onions', 'no onions'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Imagina que vas a un restaurante en EE.UU. Escribe (o di en voz alta) tu pedido completo — incluye al menos una modificación: "I\'d like X, with/without Y, please".',
    rwenSignoff: 'Mañana: cómo decir lo que te gusta y lo que no de la comida.',
  },

  phase8: {
    scenario: "You're at a Subway in Miami building a sandwich. The worker walks you through the toppings and asks what you want. Modify your order with at least three customizations.",
    rwenRole: "Tyler, 19, Subway worker. Speaks fast, expects you to keep up.",
    successCriteria: "User uses 'I'd like' or 'Could I have' for the base order, applies 'extra X', 'no Y', and 'with Z' for at least three modifications, and confirms the build at the end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
