import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-comprar-billete',
  module: 9,
  lesson: 8,
  title: 'Comprar el Billete — Buying a Ticket',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "A train from Madrid to Barcelona. A bus from Buenos Aires to Mendoza. The Mexico City Metro card. Three different tickets, one purchase pattern: greet, request, choose one-way or round-trip, pay. Today we own that whole transaction.",
    culturalNote: "In Spain a ticket is 'el billete'. In most of Latin America it's 'el boleto' — Mexico, Colombia, Peru, Argentina all use boleto. Same card, different word. If you say 'billete' in Mexico, you'll be understood — but locals will mark you as someone who learned Spanish in Spain. Adjust to the country you're in.",
  },

  chunks: [
    {
      id: 'billete',
      target: 'El billete / El boleto',
      native: 'The ticket (Spain / Latin America)',
      literal: 'The ticket',
      emoji: '🎫',
      phonetic: 'el bee-YEH-teh / el boh-LEH-toh',
      audioRef: null,
    },
    {
      id: 'ida_y_vuelta',
      target: 'Ida y vuelta',
      native: 'Round-trip / Return',
      literal: 'Going and return',
      emoji: '🔄',
      phonetic: 'EE-dah ee BWEHL-tah',
      audioRef: null,
    },
    {
      id: 'solo_ida',
      target: 'Sólo ida',
      native: 'One-way only',
      literal: 'Only going',
      emoji: '➡️',
      phonetic: 'SOH-loh EE-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Quiero / Quisiera + un billete + para... — the ticket purchase frame',
    explanation: "The ticket-buying frame: '[Quiero/Quisiera] un billete para [destination], [ida y vuelta / sólo ida]'. Quiero is direct ('I want'), Quisiera is polite ('I'd like'). For ticket counters, quisiera is best. Add the destination with 'para', then specify trip type. Slot in the city and you're done.",
    examples: [
      { target: 'Quisiera un billete para Barcelona, ida y vuelta', native: "I'd like a ticket to Barcelona, round-trip" },
      { target: 'Un boleto para Cusco, sólo ida', native: 'A ticket to Cusco, one-way' },
      { target: '¿A qué hora sale?', native: 'What time does it leave?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the ticket phrase to its meaning',
      pairs: [
        { left: 'El billete / boleto', right: 'The ticket' },
        { left: 'Ida y vuelta', right: 'Round-trip' },
        { left: 'Sólo ida', right: 'One-way' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask politely for a one-way ticket to Cusco',
      sentence: '_____ un boleto para Cusco, sólo ida.',
      options: ['Quisiera', 'Tengo', 'Voy'],
      correct: 'Quisiera',
      context: "I'd like a one-way ticket to Cusco.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Round-trip',
      correct: ['Ida y vuelta', 'ida y vuelta'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're buying a ticket in Mexico City. Which word for 'ticket' is more natural?",
      question: 'In Mexico, ticket =',
      options: [
        { text: 'Boleto', correct: true },
        { text: 'Billete', correct: false },
        { text: 'Pasaje', correct: false },
      ],
      explanation: "Billete in Spain; boleto in Mexico, Colombia, Peru, Argentina. Both are understood — but matching the local word signals you're paying attention.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'd like a round-trip ticket to Madrid'",
      words: ['Quisiera', 'un', 'billete', 'para', 'Madrid,', 'ida', 'y', 'vuelta.'],
      correct: ['Quisiera', 'un', 'billete', 'para', 'Madrid,', 'ida', 'y', 'vuelta.'],
      translation: "I'd like a round-trip ticket to Madrid",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What time does it leave?',
      correct: ['¿A qué hora sale?', 'A qué hora sale?', 'a qué hora sale', 'A que hora sale?'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Atocha train station ticket counter in Madrid, buying a ticket to Barcelona.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenos días, ¿en qué le puedo ayudar?',
        native: 'Good morning, how can I help you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Quisiera un billete para Barcelona, ida y vuelta. ¿A qué hora sale el próximo?', native: "I'd like a round-trip ticket to Barcelona. What time does the next one leave?", correct: true, feedback: "Polite verb + destination + trip type + time question. The whole transaction in one breath. Counter-clerk happy." },
          { target: 'Barcelona', native: 'Barcelona', correct: false, feedback: "Build the full request: 'Quisiera un billete para Barcelona, ida y vuelta.'" },
          { target: 'Quiero billete', native: 'I want ticket', correct: false, feedback: "Use the polite frame and specify: 'Quisiera un billete para Barcelona, ida y vuelta.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'El próximo sale a las once y media. Son ciento veinte euros.',
        native: 'The next one leaves at eleven thirty. That\'ll be one hundred twenty euros.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Once y media — eleven thirty. Ciento veinte — one hundred twenty. Numbers and time are the back half of buying a ticket. Module 7 covered these — they pay back here.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Round-trip', correct: ['Ida y vuelta', 'ida y vuelta'] },
      { prompt: 'One-way', correct: ['Sólo ida', 'sólo ida', 'solo ida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a real journey you'd love to take — Madrid to Barcelona, Mexico City to Oaxaca, Lima to Cusco. Say out loud: 'Quisiera un billete/boleto para [destination], ida y vuelta.' Make the trip in Spanish first.",
    rwenSignoff: "Billete in hand. Vuelo or tren waiting. Hasta mañana.",
  },

  phase8: {
    scenario: "You're at the Atocha station ticket counter in Madrid on a busy weekday morning. The clerk has thirty people queued behind you. You need to ask, in Spanish, for a round-trip ticket to Barcelona, find out the next departure time, and pay — without slowing the line down or switching to English.",
    rwenRole: "Marisol — RENFE ticket clerk at Atocha, late 40s, fast and efficient because the queue is long; she's polite but won't repeat anything; rewards passengers who arrive with the request fully formed in Spanish.",
    successCriteria: "User opens with 'Buenos días' or 'Hola, buenos días', uses 'Quisiera un billete para Barcelona, ida y vuelta' (polite quisiera, NOT quiero), follows up with '¿a qué hora sale?', uses 'billete' (Spain word, not boleto), and pays without switching to English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
