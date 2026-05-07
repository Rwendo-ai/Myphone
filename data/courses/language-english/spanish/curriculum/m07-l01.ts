import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: 'Hungry & Thirsty — Hambre y sed',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Bienvenido al Módulo 7! Vamos al tema más universal: la comida. Hoy: cómo decir que tienes hambre, sed, o que quieres algo de tomar.",
    culturalNote: "Trampa enorme: en español decimos 'tengo hambre' (TENGO = I have). En inglés es 'I AM hungry' (yo SOY hambriento). El verbo 'to be' (ser/estar) reemplaza a 'tener' aquí. Si traduces literal y dices 'I have hunger', un anglo te entiende pero suena raro — como si 'el hambre' fuera un objeto en tu bolsillo. Lo mismo con sed, frío, calor, miedo, sueño: todos con 'I am', no 'I have'.",
  },

  chunks: [
    {
      id: 'im_hungry',
      target: "I'm hungry",
      native: 'Tengo hambre',
      literal: 'I-am hungry',
      emoji: '🍴',
      phonetic: 'aym-HUN-gree',
      audioRef: null,
    },
    {
      id: 'im_thirsty',
      target: "I'm thirsty",
      native: 'Tengo sed',
      literal: 'I-am thirsty',
      emoji: '💧',
      phonetic: 'aym-THUR-stee',
      audioRef: null,
    },
    {
      id: 'i_want_water',
      target: 'I want water',
      native: 'Quiero agua',
      literal: 'I want water',
      emoji: '🥤',
      phonetic: 'ay-WONT-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"To be" for physical states',
    explanation: "En inglés se usa 'to be' (am/are/is) para describir estados físicos: hambre, sed, frío, calor, miedo, cansancio. No se usa 'have' como en español. La estructura es 'I am [adjective]'. Esto incluye edad: 'I am 30 years old' (tengo 30 años).",
    examples: [
      { target: "I'm cold",       native: 'Tengo frío' },
      { target: "I'm tired",      native: 'Estoy cansado / Tengo sueño' },
      { target: "I'm afraid",     native: 'Tengo miedo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las expresiones',
      pairs: [
        { left: "I'm hungry",   right: 'Tengo hambre' },
        { left: "I'm thirsty",  right: 'Tengo sed' },
        { left: "I'm tired",    right: 'Estoy cansado' },
        { left: 'I want water', right: 'Quiero agua' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Elige la traducción correcta de "Tengo hambre"',
      question: '¿Cómo se dice "Tengo hambre" en inglés?',
      options: [
        { text: "I'm hungry",   correct: true },
        { text: 'I have hunger', correct: false },
        { text: "I'm hunger",   correct: false },
      ],
      explanation: '"To have hunger" no se usa en inglés. Es siempre "I AM hungry" — el adjetivo "hungry" con el verbo "to be".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo sed',
      correct: ["I'm thirsty", "I am thirsty", "Im thirsty", "i'm thirsty"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — usas el verbo correcto',
      sentence: '____ hungry. Can we eat?',
      options: ["I'm", 'I have', 'I do'],
      correct: "I'm",
      context: 'En inglés se usa "to be" para estados físicos, no "to have".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides agua',
      words: ['water', 'I', 'please', 'want'],
      correct: ['I', 'want', 'water', 'please'],
      translation: 'Quiero agua, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Quiero agua, por favor',
      correct: ['I want water, please', 'I want water please', 'Id like water please', "I'd like water, please"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás de visita en casa de un amigo gringo en LA. Hace varias horas que llegaste. Tienes hambre y sed.',
    lines: [
      { speaker: 'npc', target: "You good? Can I get you anything?", native: '¿Todo bien? ¿Te traigo algo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm hungry and thirsty. Could I have some water?",  native: 'Tengo hambre y sed. ¿Me das agua?',  correct: true,  feedback: '¡Perfecto! Usaste "to be" para los estados y "could I have" para pedir.' },
          { target: 'I have hunger.',                                       native: 'Tengo hambre (literal).',           correct: false, feedback: '"I have hunger" no es natural — siempre "I am hungry" en inglés.' },
          { target: 'Water!',                                                native: '¡Agua!',                             correct: false, feedback: 'Suena exigente. Mejor "Could I have some water?" o "I want water, please".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Tu amigo entiende perfecto. La regla de oro: estados físicos = "I am", no "I have".',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Tengo hambre (en inglés)', correct: ["I'm hungry", 'Im hungry', 'I am hungry', "i'm hungry"] },
      { prompt: 'Quiero agua (en inglés)',   correct: ['I want water', 'i want water'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Cuando tengas hambre, sed o cansancio hoy, dilo en inglés en voz alta. "I\'m hungry. I\'m thirsty. I\'m tired." Ayuda a fijar la regla.',
    rwenSignoff: 'Mañana: comidas comunes. Bread, rice, meat — los básicos.',
  },

  phase8: {
    scenario: "You're hanging out at an American friend's home in Miami after a long afternoon. You're hungry, thirsty, and a little tired. The friend offers food and drinks; you respond and politely ask for what you want.",
    rwenRole: "Brittany, 27, your American friend. Casual, says 'help yourself' a lot.",
    successCriteria: "User uses 'I'm hungry/thirsty/tired' (with 'to be', not 'have'), asks for water or food politely, and accepts the friend's offer naturally.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
