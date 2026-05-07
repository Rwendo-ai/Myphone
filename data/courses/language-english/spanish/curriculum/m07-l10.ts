import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'A meal conversation — Conversación completa',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Cierre del Módulo 7. Combinamos todo: pedir mesa, ordenar con modificaciones, comentar la comida, pedir la cuenta. Una cena entera en inglés.",
    culturalNote: "En EE.UU. la cena en restaurante tiene un ritmo: entras, te asignan mesa, llega el server, te trae menú y agua, ordenas (con modificaciones libres), comes, comentas la comida, pides 'the check', dejas propina (15-20%). Si dominas las cuatro frases — 'A table for X', 'I'd like... without...', 'It's delicious', 'Could we have the check?' — sobrevives en cualquier restaurante de NYC, LA o Miami.",
  },

  chunks: [
    {
      id: 'review_table_menu',
      target: "A table for two, please. Could we have the menu?",
      native: 'Una mesa para dos, por favor. ¿Nos puede dar el menú?',
      literal: 'A table for two, please. Could we have the menu?',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_id_like_modify',
      target: "I'd like the chicken, without onions, please.",
      native: 'Quisiera el pollo, sin cebolla, por favor.',
      literal: "I'd like the chicken, without onions, please.",
      emoji: '🍗',
      phonetic: "ayd-LAYK-thuh-CHIK-en",
      audioRef: null,
    },
    {
      id: 'review_delicious_bill',
      target: "It was delicious. Could we have the bill, please?",
      native: 'Estuvo delicioso. ¿Nos puede traer la cuenta, por favor?',
      literal: 'It was delicious. Could we have the bill, please?',
      emoji: '🧾',
      phonetic: 'it-WUZ-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full meal arc',
    explanation: "La conversación completa de un restaurante en EE.UU. tiene cuatro momentos: entrada (mesa + menú), pedido (con modificaciones), comentario (durante o después), salida (cuenta + propina). Cada momento tiene una fórmula. Memorizar la secuencia te da fluidez en cualquier restaurante.",
    examples: [
      { target: "A table for two, please.",                  native: 'Una mesa para dos, por favor.' },
      { target: "I'd like the salmon, with extra lemon.",    native: 'Quisiera el salmón, con extra limón.' },
      { target: "Everything was great. The check, please.",  native: 'Todo estuvo genial. La cuenta, por favor.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las fases de la cena',
      pairs: [
        { left: 'A table for two',          right: 'Llegada' },
        { left: "I'd like the chicken",     right: 'Pedido' },
        { left: "It was delicious",          right: 'Comentario' },
        { left: 'The check, please',         right: 'Salida' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pide el pollo sin cebolla',
      prompt: 'Quisiera el pollo, sin cebolla, por favor',
      correct: ["I'd like the chicken, without onions, please", "I'd like the chicken without onions, please"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Terminaste de comer en NYC. ¿Cómo pides la cuenta?',
      question: 'Most natural way?',
      options: [
        { text: 'Could we have the check, please?', correct: true },
        { text: 'Money now please.',                  correct: false },
        { text: "I'm finished.",                      correct: false },
      ],
      explanation: '"Could we have the check, please?" es la fórmula educada estándar. "I\'m finished" no comunica que quieres pagar.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — comentas que la comida estuvo deliciosa',
      sentence: 'Everything ____ delicious. Thank you!',
      options: ['was', 'is', 'are'],
      correct: 'was',
      context: 'En pasado simple, con "everything" (singular), se usa "was".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides menú educadamente',
      words: ['the', 'we', 'menu?', 'Could', 'have'],
      correct: ['Could', 'we', 'have', 'the', 'menu?'],
      translation: '¿Nos puede dar el menú?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — frase de salida',
      prompt: 'Estuvo delicioso. ¿Nos puede traer la cuenta, por favor?',
      correct: ['It was delicious. Could we have the bill, please?', 'It was delicious. Could we have the check, please?', 'It was delicious. The check, please.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un restaurante en Miami con tu pareja. El server llega.',
    lines: [
      { speaker: 'npc', target: "Hi guys, welcome. How many?", native: 'Hola, bienvenidos. ¿Cuántos son?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please. And could we have the menu?", native: 'Una mesa para dos, por favor. ¿Y nos puede dar el menú?', correct: true,  feedback: '¡Perfecto! Combinaste mesa y menú en una sola interacción.' },
          { target: 'Two. Menu.',                                              native: 'Dos. Menú.',                                              correct: false, feedback: 'Demasiado cortado. La fórmula completa toma dos segundos más y suena natural.' },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here are your menus. What can I get you to drink?", native: 'Por aquí. Aquí tienen sus menús. ¿Qué les sirvo de tomar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two glasses of water, please. And I'd like the chicken, without onions.", native: 'Dos vasos de agua, por favor. Y quisiera el pollo, sin cebolla.', correct: true,  feedback: '¡Excelente! Bebida + pedido con modificación. Eficiencia total.' },
          { target: 'Water and chicken no onion.',                                                native: 'Agua y pollo sin cebolla.',                                       correct: false, feedback: 'Se entiende, pero la versión con "I\'d like" y "without" suena más fluida.' },
          { target: 'Bring food.',                                                                  native: 'Trae comida.',                                                    correct: false, feedback: 'Demasiado vago — el server necesita saber qué comida.' },
        ],
      },
      { speaker: 'npc', target: "Coming right up. Anything else?", native: 'Ya viene. ¿Algo más?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "No, thank you — that's all.", native: 'No, gracias — eso es todo.', correct: true,  feedback: 'Cierra el pedido educadamente.' },
          { target: 'No.',                          native: 'No.',                         correct: false, feedback: 'Educado, pero "No, thank you" es la versión cordial.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '[Después de comer] ¿Y al final?',
        rwenAnimation: 'idle',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Everything was delicious. Could we have the check, please?", native: 'Todo estuvo delicioso. ¿Nos puede traer la cuenta?', correct: true,  feedback: '¡Pa-fec-to! Comentario + petición = adulto en inglés.' },
          { target: "We're done.",                                                  native: 'Terminamos.',                                          correct: false, feedback: 'No le dice al server qué quieres — se podría quedar esperando.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Felicidades! Cubriste el ciclo completo de un restaurante en EE.UU. — y recuerda: 18-20% de propina sobre el subtotal. ¡Cerraste el Módulo 7!',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba — recuerda las cuatro fases.',
    prompts: [
      { prompt: 'Una mesa para dos, ¿nos puede dar el menú? (en inglés)', correct: ['A table for two, please. Could we have the menu?', 'A table for two. Could we have the menu?'] },
      { prompt: 'Estuvo delicioso. La cuenta, por favor (en inglés)',      correct: ['It was delicious. Could we have the check, please?', 'It was delicious. The check, please.', 'It was delicious. Could we have the bill, please?'] },
    ],
  },

  mission: {
    title: 'Misión del Módulo 7',
    task: 'Hoy o mañana, ve a un restaurante (de comida rápida o sit-down) y haz el ciclo completo en inglés en tu cabeza si no en voz alta: pedir mesa, pedir menú, ordenar, comentar, pedir cuenta. Sin abrir el traductor.',
    rwenSignoff: '¡Excelente! Cerraste el Módulo 7. Mañana entramos al Módulo 8: verbos diarios — la rutina de tu vida en inglés.',
  },

  phase8: {
    scenario: "Full restaurant simulation in NYC. You're with a friend at an Italian place. Walk through the entire arc: get a table, look at the menu, order with at least one modification, comment on the food, ask for the check.",
    rwenRole: "Lisa, 32, server. Friendly, professional. Will move the conversation along.",
    successCriteria: "User completes all four phases: arrival, ordering with modification, commenting, asking for the check. Uses polite forms ('Could we have', 'I'd like') throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
