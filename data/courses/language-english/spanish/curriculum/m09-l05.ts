import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Buying a ticket — Comprar un boleto',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cómo comprar un boleto. De ida, de ida y vuelta, una sola persona, ¿cuánto cuesta?",
    culturalNote: "En español decimos 'ida' y 'ida y vuelta'. En inglés se dice 'one-way' (solo ida) y 'round trip' o 'return' (ida y vuelta). En EE.UU. 'round trip' es lo más común; en UK 'return'. Otra trampa: 'a ticket TO [destino]' — la preposición es 'to', no 'for' (que sería 'para [persona]'). Y los boletos en EE.UU. se imprimen o llegan al teléfono — ya casi no hay boletos físicos en taquilla.",
  },

  chunks: [
    {
      id: 'one_ticket_to_harare',
      target: 'One ticket to Boston, please.',
      native: 'Un boleto a Boston, por favor.',
      literal: 'One ticket to Boston, please.',
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-BOS-ton-PLEEZ',
      audioRef: null,
    },
    {
      id: 'round_trip',
      target: 'A return, please.',
      native: 'De ida y vuelta, por favor.',
      literal: 'A return, please.',
      emoji: '🔁',
      phonetic: 'uh-ree-TURN-PLEEZ',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much is it?',
      native: '¿Cuánto cuesta?',
      literal: 'How much is it?',
      emoji: '💷',
      phonetic: 'how-MUTCH-iz-it',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ticket request structure',
    explanation: "La fórmula estándar: '[number] ticket(s) to [destination], [one-way / round trip], please'. Ej: 'Two tickets to Boston, round trip, please'. Si no especificas, te van a preguntar. La preposición 'to' (a) es la del destino.",
    examples: [
      { target: 'Two tickets to Chicago, one-way',     native: 'Dos boletos a Chicago, solo ida' },
      { target: 'A return ticket to DC',                native: 'Un boleto de ida y vuelta a DC' },
      { target: 'One adult, two children to NYC',       native: 'Un adulto, dos niños a NYC' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'One-way',           right: 'Solo ida' },
        { left: 'Round trip',         right: 'Ida y vuelta' },
        { left: 'A ticket to Boston', right: 'Un boleto a Boston' },
        { left: 'How much is it?',     right: '¿Cuánto cuesta?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Un boleto a Boston, por favor',
      correct: ['One ticket to Boston, please', 'A ticket to Boston, please', 'one ticket to Boston, please'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la preposición',
      sentence: 'A ticket ____ Chicago, please.',
      options: ['to', 'for', 'in'],
      correct: 'to',
      context: 'Para destinos se usa "to" (a). "For" sería para una persona ("for my son").',
    },
    {
      type: 'multiple_choice',
      instruction: 'Vas y vuelves el mismo día. ¿Qué pides?',
      question: 'Best ticket type:',
      options: [
        { text: 'Round trip',  correct: true },
        { text: 'One-way',      correct: false },
        { text: 'Two tickets',   correct: false },
      ],
      explanation: '"Round trip" = ida y vuelta. "One-way" = solo ida (perderás el regreso).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — un boleto de ida y vuelta a NYC',
      words: ['NYC,', 'A', 'to', 'please', 'round-trip', 'ticket'],
      correct: ['A', 'round-trip', 'ticket', 'to', 'NYC,', 'please'],
      translation: 'Un boleto de ida y vuelta a NYC, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuánto cuesta?',
      correct: ['How much is it?', 'how much is it?', 'How much does it cost?'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Penn Station en NYC. Quieres ir a Boston y volver el mismo día.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "One round-trip ticket to Boston, please. How much is it?", native: 'Un boleto de ida y vuelta a Boston, por favor. ¿Cuánto cuesta?', correct: true,  feedback: '¡Perfecto! Tipo de boleto + destino + pregunta del precio. Eficiente.' },
          { target: 'Boston ticket.',                                              native: 'Boleto Boston.',                                                  correct: false, feedback: 'Demasiado cortado — ¿one-way o round-trip? El agente te va a preguntar.' },
          { target: 'I want go Boston.',                                            native: 'Yo querer ir Boston.',                                            correct: false, feedback: 'Falta gramática. La fórmula "A ticket to X, please" funciona perfecto.' },
        ],
      },
      { speaker: 'npc', target: "Round trip is a hundred and twenty dollars. Cash or card?", native: 'Ida y vuelta son ciento veinte dólares. ¿Efectivo o tarjeta?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Card, please. Thank you.", native: 'Tarjeta, por favor. Gracias.', correct: true,  feedback: 'Cierre limpio.' },
          { target: '120?',                       native: '¿120?',                         correct: false, feedback: 'Bien si solo confirmas el precio, pero no respondiste a su pregunta.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En EE.UU. casi todo es con tarjeta — efectivo es cada vez menos común.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Un boleto a Boston, por favor (en inglés)', correct: ['One ticket to Boston, please', 'A ticket to Boston, please', 'one ticket to Boston, please'] },
      { prompt: '¿Cuánto cuesta? (en inglés)',                  correct: ['How much is it?', 'how much is it?', 'How much does it cost?'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Practica comprar tres boletos diferentes en inglés (en voz alta o mentalmente): uno solo de ida, uno de ida y vuelta, uno para varias personas.',
    rwenSignoff: 'Mañana: el aeropuerto — TSA, gates, customs.',
  },

  phase8: {
    scenario: "You're at Penn Station in NYC buying tickets to visit Boston. You need a round-trip for two people. Ask price, payment options, and confirm departure time.",
    rwenRole: "Diane, 45, ticket agent. Efficient, asks clarifying questions.",
    successCriteria: "User asks for round-trip tickets with destination, number of passengers, asks 'How much is it?', and confirms payment method.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
