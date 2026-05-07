import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'At a restaurant — En un restaurante',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: las tres frases que necesitas en cualquier restaurante en EE.UU. — pedir mesa, pedir menú, pedir la cuenta.",
    culturalNote: "Diferencia cultural fuerte: en EE.UU. el mesero NO trae la cuenta automáticamente cuando terminas. Tienes que pedirla — 'Could we have the bill, please?' o más común '...the check, please?'. En México, Argentina, Colombia, el mesero la trae al ver que terminaste. En EE.UU. esperaría así toda la noche. Y la cuenta = 'check' (más común que 'bill' en restaurantes). 'Bill' se usa más para servicios y facturas.",
  },

  chunks: [
    {
      id: 'table_for_two',
      target: 'A table for two',
      native: 'Una mesa para dos',
      literal: 'A table for two (people)',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO',
      audioRef: null,
    },
    {
      id: 'menu_please',
      target: 'The menu, please',
      native: 'El menú, por favor',
      literal: 'The menu, please',
      emoji: '📋',
      phonetic: 'thuh-MEN-yoo-PLEEZ',
      audioRef: null,
    },
    {
      id: 'the_bill',
      target: 'The bill, please',
      native: 'La cuenta, por favor',
      literal: 'The bill, please',
      emoji: '🧾',
      phonetic: 'thuh-BILL-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request: "Could we have...?"',
    explanation: "En EE.UU. la fórmula más educada para pedir cualquier cosa en un restaurante es 'Could we have...?' o 'Could I have...?'. Más cortés que 'I want' (que suena exigente). Estructura: 'Could + I/we + have + [thing] + please?'.",
    examples: [
      { target: 'Could we have a table for two?',  native: '¿Nos puede dar una mesa para dos?' },
      { target: 'Could I have the menu, please?',   native: '¿Me puede traer el menú, por favor?' },
      { target: 'Could we have the check?',          native: '¿Nos puede traer la cuenta?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Una mesa para dos',
      correct: ['A table for two', 'a table for two', 'A table for two, please'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides el menú educadamente',
      sentence: 'Could I ____ the menu, please?',
      options: ['have', 'want', 'do'],
      correct: 'have',
      context: '"Could I have...?" es la fórmula educada estándar.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Terminaste de comer en un restaurante en NYC. ¿Qué dices?',
      question: 'How do you ask for the bill?',
      options: [
        { text: 'Could we have the check, please?', correct: true },
        { text: 'Bring the bill!',                   correct: false },
        { text: 'Finished. Money?',                  correct: false },
      ],
      explanation: 'En EE.UU. "the check" es más común que "the bill" en restaurantes. La forma educada con "Could we have" es la estándar.',
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja las frases del restaurante',
      pairs: [
        { left: 'A table for two',  right: 'Una mesa para dos' },
        { left: 'The menu',         right: 'El menú' },
        { left: 'The bill',          right: 'La cuenta' },
        { left: 'The check',         right: 'La cuenta (US)' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides una mesa para cuatro',
      words: ['four,', 'a', 'please', 'table', 'for'],
      correct: ['A', 'table', 'for', 'four,', 'please'],
      translation: 'Una mesa para cuatro, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pides la cuenta',
      prompt: '¿Nos puede traer la cuenta, por favor?',
      correct: ['Could we have the check, please?', 'Could we have the bill, please?', 'Can we have the check, please?', 'Can we have the bill, please?'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegas con tu pareja a un restaurante en Brooklyn. El anfitrión está en la entrada.',
    lines: [
      { speaker: 'npc', target: "Hi, welcome! How many?", native: '¡Hola, bienvenidos! ¿Cuántos son?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please.",     native: 'Una mesa para dos, por favor.', correct: true,  feedback: '¡Perfecto! Respuesta directa, educada, exacta.' },
          { target: 'Two persons.',                  native: 'Dos personas.',                  correct: false, feedback: 'Suena formal y traducido. Lo natural en EE.UU. es "A table for two" o solo "Two".' },
          { target: 'Me and her.',                   native: 'Yo y ella.',                     correct: false, feedback: 'Demasiado informal y poco claro. La fórmula "A table for two" funciona en cualquier restaurante.' },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu.", native: 'Por aquí. Aquí tienen el menú.' },
      {
        speaker: 'rwen',
        rwenLine: 'Y al final de la cena, recuerda: "Could we have the check, please?". Si no la pides, no te la traen.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Una mesa para dos (en inglés)', correct: ['A table for two', 'a table for two'] },
      { prompt: 'La cuenta, por favor (en inglés)', correct: ['The check, please', 'The bill, please', 'the check, please', 'the bill, please'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Practica las tres frases del restaurante en voz alta tres veces: "A table for two", "The menu, please", "Could we have the check, please?". Memoriza la secuencia de la cena.',
    rwenSignoff: 'Mañana: cómo ordenar comida, modificar tu pedido, decir lo que NO quieres.',
  },

  phase8: {
    scenario: "You're walking into a busy diner in NYC for brunch. You need to ask for a table for three, request the menu, ask one quick question about the menu, and at the end ask for the check.",
    rwenRole: "Mike, 30, host at a diner. Friendly but quick — there's a line behind you.",
    successCriteria: "User asks for a table with the right number, asks for the menu politely, and asks for the check at the end using 'Could we have' or similar polite phrasing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
