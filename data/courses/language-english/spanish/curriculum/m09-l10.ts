import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Conversación de viaje',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Cierre del Módulo 9. Combinamos llegada, dirección, hotel, ayuda — un viaje completo en una sola conversación.",
    culturalNote: "Un viaje real en EE.UU. mezcla todas las habilidades: llegar al aeropuerto, transporte al hotel, registrarse, salir a explorar, pedir direcciones, pedir ayuda cuando te pierdes. Si combinas las frases del módulo en una secuencia, sobrevives en cualquier ciudad. La clave: empezar con 'Excuse me', usar 'Could you...?' para favores, y siempre repetir lo importante para confirmar.",
  },

  chunks: [
    {
      id: 'review_arrived_directions',
      target: "Excuse me, I just arrived. Where is the Underground?",
      native: 'Disculpe, acabo de llegar. ¿Dónde está el metro?',
      literal: 'Excuse me, I just arrived. Where is the Underground?',
      emoji: '🛬',
      phonetic: 'ek-SKYOOZ-mee-ay-just-uh-RYVD',
      audioRef: null,
    },
    {
      id: 'review_ticket_distance',
      target: "One ticket to King's Cross, please. How far is it?",
      native: "Un boleto a King's Cross, por favor. ¿Qué tan lejos está?",
      literal: "One ticket to King's Cross, please. How far is it?",
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-KINGZ-KROS-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_hotel_help',
      target: "I have a reservation. Could you write down the WiFi password?",
      native: 'Tengo reservación. ¿Me podría escribir el WiFi?',
      literal: 'I have a reservation. Could you write down the WiFi password?',
      emoji: '📶',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The travel arc',
    explanation: "El arco completo del viaje: llegada (Excuse me, where is...?) → transporte (One ticket to...) → distancia (How far?) → hotel (I have a reservation) → ayuda (Could you...?). Cada fase usa una fórmula que ya conoces.",
    examples: [
      { target: "Excuse me, where is the bus stop?",     native: 'Disculpe, ¿dónde está la parada de bus?' },
      { target: "How much is a ticket downtown?",         native: '¿Cuánto cuesta un boleto al centro?' },
      { target: "Could you write down the address?",       native: '¿Me podría escribir la dirección?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja fase y frase típica',
      pairs: [
        { left: 'Llegada',          right: 'Excuse me, where is...?' },
        { left: 'Boleto',            right: 'One ticket to...' },
        { left: 'Distancia',         right: 'How far is it?' },
        { left: 'Hotel',             right: 'I have a reservation' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Disculpe, acabo de llegar. ¿Dónde está el metro?',
      correct: ['Excuse me, I just arrived. Where is the subway?', 'Excuse me, I just arrived. Where is the Underground?', 'Excuse me, I just arrived. Where is the metro?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides el WiFi al recepcionista',
      sentence: 'Could you ____ down the WiFi password?',
      options: ['write', 'walk', 'work'],
      correct: 'write',
      context: '"Write it down" significa escríbelo (en papel o pantalla).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Llegas al hotel después de un vuelo de 12 horas. ¿Qué dices?',
      question: 'First sentence at the front desk:',
      options: [
        { text: "Hi, I have a reservation under [last name].", correct: true },
        { text: "I am tired.",                                    correct: false },
        { text: "Room key now.",                                   correct: false },
      ],
      explanation: 'Aunque estés cansado, la fórmula te ahorra tiempo. Da tu apellido para que te encuentren rápido.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides un boleto y preguntas distancia',
      words: ['far', 'is', 'How', 'it?'],
      correct: ['How', 'far', 'is', 'it?'],
      translation: '¿Qué tan lejos está?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Me podría escribir la contraseña del WiFi?',
      correct: ['Could you write down the WiFi password?', 'Could you write down the wifi password?', 'Could you write the WiFi password down?'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegaste a Heathrow Londres en tu primer viaje internacional. Vas a la información del aeropuerto.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, I just arrived. Where is the Underground?",  native: 'Disculpe, acabo de llegar. ¿Dónde está el metro?', correct: true,  feedback: '¡Perfecto! Apertura cortés + contexto + pregunta clara.' },
          { target: 'Train where?',                                             native: '¿Tren dónde?',                                      correct: false, feedback: 'Demasiado cortado. La pregunta completa funciona mucho mejor.' },
        ],
      },
      { speaker: 'npc', target: "Take the Piccadilly line, downstairs. Tickets are at the kiosk.", native: 'Toma la Piccadilly, abajo. Los boletos en el kiosko.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks. One ticket to King's Cross, please. How far is it?", native: "Gracias. Un boleto a King's Cross, por favor. ¿Qué tan lejos está?", correct: true,  feedback: '¡Excelente! Agradecimiento + boleto + distancia. Eficiente.' },
          { target: 'Money?',                                                       native: '¿Dinero?',                                                              correct: false, feedback: 'Confunde. Pide el boleto primero, luego pregunta el precio.' },
        ],
      },
      { speaker: 'npc', target: "About forty minutes. Six pounds, please.", native: 'Como cuarenta minutos. Seis libras, por favor.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Forty minutes? OK, thanks!",  native: '¿Cuarenta minutos? OK, ¡gracias!', correct: true,  feedback: '¡Bien! Confirmaste el tiempo.' },
          { target: 'OK.',                          native: 'OK.',                                correct: false, feedback: 'Bien, pero confirmar números evita errores.' },
        ],
      },
      { speaker: 'npc', target: '[En el hotel] Hi, checking in?', native: '[En el hotel] Hola, ¿hace check-in?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have a reservation. Could you write down the WiFi password?", native: 'Sí, tengo reservación. ¿Me podría escribir el WiFi?', correct: true,  feedback: '¡Perfecto! Cierre del arco completo: llegada → transporte → hotel → petición.' },
          { target: 'WiFi.',                                                                native: 'WiFi.',                                                  correct: false, feedback: 'Cortado. La pregunta completa con "Could you" funciona mejor.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Felicidades! Cubriste un viaje completo: aeropuerto → transporte → distancia → hotel → ayuda. Cerraste el Módulo 9 — ya puedes viajar en inglés.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba — recuerda las cinco fases.',
    prompts: [
      { prompt: 'Disculpe, acabo de llegar. ¿Dónde está el metro? (en inglés)', correct: ['Excuse me, I just arrived. Where is the subway?', 'Excuse me, I just arrived. Where is the Underground?', 'Excuse me, I just arrived. Where is the metro?'] },
      { prompt: 'Tengo reservación. ¿Me podría escribir el WiFi? (en inglés)', correct: ['I have a reservation. Could you write down the WiFi password?', 'I have a reservation. Could you write the WiFi password down?'] },
    ],
  },

  mission: {
    title: 'Misión del Módulo 9',
    task: 'Imagina tu próximo viaje. Escribe un párrafo en inglés con cinco frases que cubran: llegada, transporte, distancia, hotel, ayuda. Practícalo en voz alta.',
    rwenSignoff: '¡Excelente! Cerraste el Módulo 9. Mañana entramos al Módulo 10 — emociones e historias. El nivel A2 final.',
  },

  phase8: {
    scenario: "Full travel simulation: you arrive at Heathrow, take the Underground to your hotel, check in, ask the concierge for restaurant recommendations and walking distance.",
    rwenRole: "Multiple roles — info desk, ticket agent, hotel front desk. All bilingual but expect you to use English.",
    successCriteria: "User completes all five travel phases (arrival, transport, distance, hotel, help) using polite forms ('Could you...', 'Excuse me') throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
