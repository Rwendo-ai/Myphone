import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Buying a ticket — Comprando ingresso',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Comprando ingresso: 'One ticket to ___, please. Return / round trip. How much?'.",
    culturalNote: "UK usa 'return' (ida e volta); EUA usa 'round trip'. 'One-way' = só ida (igual em ambos). Em estação europeia/americana você compra na máquina ou no balcão antes de subir — sem cobrador embarcado como no Brasil.",
  },

  chunks: [
    {
      id: 'one_ticket_to_harare',
      target: 'One ticket to Lisbon, please.',
      native: 'Um ingresso pra Lisboa, por favor.',
      literal: 'One ticket to Lisbon, please.',
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-LIZ-bun-PLEEZ',
      audioRef: null,
    },
    {
      id: 'round_trip',
      target: 'A return, please.',
      native: 'Ida e volta, por favor.',
      literal: 'A return, please.',
      emoji: '🔁',
      phonetic: 'uh-ree-TURN-PLEEZ',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much is it?',
      native: 'Quanto custa?',
      literal: 'How much is it?',
      emoji: '💷',
      phonetic: 'how-MUTCH-iz-it',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Travel transactions',
    explanation: "(1) NÚMERO + 'ticket(s) to' + LUGAR + 'please'. (2) TIPO: 'one-way' (só ida) ou 'return'/'round trip' (ida e volta). (3) PREÇO: 'How much is it?'.",
    examples: [
      { target: 'One ticket to Lisbon, please.',  native: 'Um ingresso pra Lisboa, por favor.' },
      { target: 'A return ticket.',                 native: 'Ida e volta.' },
      { target: 'How much is it?',                  native: 'Quanto custa?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'One-way', right: 'Só ida' },
        { left: 'Return', right: 'Ida e volta' },
        { left: 'Ticket', right: 'Ingresso' },
        { left: 'Platform', right: 'Plataforma' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Dois ingressos pra Lisboa, por favor.',
      correct: ['Two tickets to Lisbon, please.', 'Two tickets to Lisbon, please'],
    },
    {
      type: 'fill_blank',
      instruction: 'Tipo de ingresso',
      sentence: "A _____, please. (one-way ou ida e volta)",
      options: ['return', 'returned', 'one ticket'],
      correct: 'return',
      context: 'Ida e volta = return (UK).',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "One ticket to Paris, please"',
      words: ['please.', 'to', 'Paris,', 'One', 'ticket'],
      correct: ['One', 'ticket', 'to', 'Paris,', 'please.'],
      translation: 'Um ingresso pra Paris, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quanto custa?',
      correct: ['How much is it?', 'How much?', 'how much is it?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pedindo ingresso',
      question: 'Pra ida e volta nos EUA:',
      options: [
        { text: 'A round trip ticket, please.', correct: true },
        { text: 'A round ticket.', correct: false },
        { text: 'Two ways please.', correct: false },
      ],
      explanation: '"Round trip" é o termo americano.',
    },
  ],

  rwenDialogue: {
    intro: 'Estação Saint Pancras, Londres. Você compra ingresso pra Paris.',
    lines: [
      { speaker: 'npc', target: "Where to?", native: 'Pra onde?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two return tickets to Paris, please. How much?", native: 'Dois ingressos ida e volta pra Paris. Quanto?', correct: true, feedback: 'Mandou bem.' },
          { target: "Paris ticket two.", native: '...', correct: false, feedback: 'Falta estrutura.' },
          { target: "Quero ir pra Paris.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'One ticket to Lisbon (em inglês)', correct: ['One ticket to Lisbon', 'One ticket to Lisbon, please'] },
      { prompt: 'How much is it? (em inglês)', correct: ['How much is it?', 'How much is it'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica em voz alta: 'Two return tickets to ___, please. How much is it?'.",
    rwenSignoff: "Amanhã — aeroporto.",
  },

  phase8: {
    scenario: "Train station ticket counter — purchase tickets for two with round trip.",
    rwenRole: "Polite ticket agent.",
    successCriteria: "User asks for tickets with quantity, destination, type (return/one-way), and price.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
