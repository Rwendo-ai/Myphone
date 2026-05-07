import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Hosting in English — Recibiendo invitados',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo recibir invitados angloparlantes — darles la bienvenida, ofrecer asiento, servir.",
    culturalNote: "Diferencia cultural: en Latinoamérica el anfitrión SIRVE el plato — te lleva la comida ya servida. En EE.UU., 'Help yourself' (sírvete tú mismo) es muy común — la gente pasa por la cocina o el buffet y se sirve. No es de mala educación; es lo normal. Si estás recibiendo a anglos en tu casa, di 'help yourself' tranquilo — no tienes que servirles uno por uno. Y un detalle: 'sit down' es directo; lo educado es 'please, have a seat' o 'please, sit down'.",
  },

  chunks: [
    {
      id: 'welcome',
      target: 'Welcome',
      native: 'Bienvenido / Bienvenida',
      literal: 'Welcome',
      emoji: '🤗',
      phonetic: 'WEL-kum',
      audioRef: null,
    },
    {
      id: 'sit_down',
      target: 'Please, sit down',
      native: 'Por favor, siéntate',
      literal: 'Please sit down',
      emoji: '🪑',
      phonetic: 'PLEEZ-SIT-down',
      audioRef: null,
    },
    {
      id: 'help_yourself',
      target: 'Help yourself',
      native: 'Sírvete',
      literal: 'Take what you want yourself',
      emoji: '🍽️',
      phonetic: 'HELP-yor-SELF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reflexive "yourself" for hosting',
    explanation: "El inglés usa el reflexivo 'yourself' en frases de cortesía: 'help yourself', 'make yourself at home', 'feel yourself comfortable'. En español usamos el reflexivo 'te' o 'se': 'sírvete', 'siéntete como en tu casa'. La estructura inglesa es verb + yourself.",
    examples: [
      { target: 'Help yourself',              native: 'Sírvete' },
      { target: 'Make yourself at home',       native: 'Siéntete como en tu casa' },
      { target: 'Help yourself to drinks',     native: 'Sírvete las bebidas' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las frases de hospitalidad',
      pairs: [
        { left: 'Welcome',           right: 'Bienvenido' },
        { left: 'Please, sit down',  right: 'Siéntate, por favor' },
        { left: 'Help yourself',     right: 'Sírvete' },
        { left: 'Make yourself at home', right: 'Siéntete como en tu casa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Bienvenido',
      correct: ['Welcome', 'welcome'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — invitas a un amigo a servirse',
      sentence: 'Help ____ — there\'s plenty of food.',
      options: ['yourself', 'me', 'you'],
      correct: 'yourself',
      context: 'La fórmula es "help yourself" (sírvete). El reflexivo es esencial.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Llega tu invitado a la puerta. ¿Qué dices?',
      question: 'How do you greet them at the door?',
      options: [
        { text: "Welcome! Please, come in.",    correct: true },
        { text: "Yes, you can enter.",           correct: false },
        { text: "Hello, what do you want?",      correct: false },
      ],
      explanation: '"Welcome! Please, come in" es la fórmula cálida y natural. Las otras suenan frías o transaccionales.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — los invitas a sentarse',
      words: ['Please,', 'down', 'sit'],
      correct: ['Please,', 'sit', 'down'],
      translation: 'Por favor, siéntate',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Sírvete',
      correct: ['Help yourself', 'help yourself', 'Help yourself.'],
    },
  ],

  rwenDialogue: {
    intro: 'Tu vecina estadounidense Pam vino a tu casa por primera vez. Llega a la puerta con flores.',
    lines: [
      { speaker: 'npc', target: "Hi! These are for you.", native: '¡Hola! Esto es para ti.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Welcome! Please, come in. Thank you so much for the flowers.", native: '¡Bienvenida! Pasa, por favor. Mil gracias por las flores.', correct: true,  feedback: '¡Perfecto! Bienvenida + invitación a entrar + agradecimiento. Manual del anfitrión.' },
          { target: 'Yes, enter.',                                                     native: 'Sí, entra.',                                                  correct: false, feedback: 'Suena frío. "Welcome! Please, come in" es más cálido.' },
          { target: 'I want flowers too.',                                              native: 'Yo también quiero flores.',                                  correct: false, feedback: '¡Ja! Eso te las regaló a ti — agradécelas, no las pidas.' },
        ],
      },
      { speaker: 'npc', target: "Thanks. Where should I sit?", native: 'Gracias. ¿Dónde me siento?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Please, sit down anywhere. Help yourself to drinks.", native: 'Siéntate donde quieras. Sírvete bebidas.', correct: true,  feedback: '¡Excelente! "Help yourself" es completamente normal en EE.UU. — no tienes que servirle.' },
          { target: 'I will bring you drink.',                              native: 'Yo te traigo bebida.',                      correct: false, feedback: 'Es amable pero suena traducido. Mejor "Let me get you a drink" o "Help yourself".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "Help yourself" en EE.UU. no es flojera del anfitrión — es ofrecer libertad. Pam se sentirá cómoda.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Bienvenido (en inglés)', correct: ['Welcome', 'welcome'] },
      { prompt: 'Sírvete (en inglés)',     correct: ['Help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Imagina que llega un invitado angloparlante a tu casa. Practica en voz alta tres frases: bienvenida, invitación a sentarse, oferta de comida o bebida.',
    rwenSignoff: 'Mañana: capstone del Módulo 7 — una conversación completa de comida.',
  },

  phase8: {
    scenario: "You're hosting two American friends at your home for dinner. Greet them at the door, offer them seats, offer drinks, and invite them to help themselves to the food.",
    rwenRole: "Pam and Drew, 30s, your American friends. Casual, polite, want to feel at home.",
    successCriteria: "User welcomes guests, invites them to sit, offers a drink, uses 'Help yourself' or 'Make yourself at home' at least once, and stays warm throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
