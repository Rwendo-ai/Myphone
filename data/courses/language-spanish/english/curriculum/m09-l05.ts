import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-taxi-uber',
  module: 9,
  lesson: 5,
  title: 'Taxi, Uber & Colectivo — Hailing a Ride',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Lima taxis don't use meters — you negotiate before you get in. In Buenos Aires the colectivo is a route-bus that costs cents. Uber is everywhere. Today we cover all three: how to give an address, how to ask the price, and how to say 'stop here'.",
    culturalNote: "In most of Latin America 'manejar' means to drive (you'll hear 'el chofer maneja' — the driver drives). In Spain the verb is 'conducir'. Same action, two verbs. Also: addresses always go street-then-number — 'Avenida Corrientes 1500', not '1500 Corrientes Avenue'. Get the order wrong and the driver overshoots.",
  },

  chunks: [
    {
      id: 'lleveme',
      target: 'Lléveme a...',
      native: 'Take me to... (formal)',
      literal: 'Take-me to... (usted command)',
      emoji: '🚕',
      phonetic: 'YEH-veh-meh ah',
      audioRef: null,
    },
    {
      id: 'cuanto_cuesta',
      target: '¿Cuánto cuesta?',
      native: 'How much does it cost?',
      literal: 'How-much costs?',
      emoji: '💰',
      phonetic: 'KWAN-toh KWESS-tah',
      audioRef: null,
    },
    {
      id: 'pare_aqui',
      target: 'Pare aquí',
      native: 'Stop here (formal)',
      literal: 'Stop here (usted command)',
      emoji: '🛑',
      phonetic: 'PAH-reh ah-KEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Usted commands — talking to drivers and strangers',
    explanation: "Drivers, strangers, older people — use 'usted' commands: lléveme (take me), pare (stop), siga (keep going), gire (turn). They end in -e (for -ar verbs) or -a (for -er/-ir verbs). One-letter difference from the informal tú forms (lleva, para) — the -e is what makes you sound respectful with a Lima taxista.",
    examples: [
      { target: 'Lléveme al aeropuerto, por favor', native: 'Take me to the airport, please' },
      { target: 'Pare aquí, por favor', native: 'Stop here, please' },
      { target: '¿Cuánto cuesta hasta el centro?', native: 'How much does it cost to the centre?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the taxi phrase to its meaning',
      pairs: [
        { left: 'Lléveme a...', right: 'Take me to...' },
        { left: '¿Cuánto cuesta?', right: 'How much does it cost?' },
        { left: 'Pare aquí', right: 'Stop here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the driver to stop here',
      sentence: '_____ aquí, por favor.',
      options: ['Pare', 'Para', 'Pase'],
      correct: 'Pare',
      context: "Stop here, please. (Use the formal/usted command.)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How much does it cost?',
      correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', 'cuánto cuesta', 'Cuanto cuesta?'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in a Lima taxi and the meter doesn't work. What's the FIRST thing to ask?",
      question: 'Lima taxi — meter not running:',
      options: [
        { text: '¿Cuánto cuesta hasta [destination]?', correct: true },
        { text: '¿Cómo llego?', correct: false },
        { text: '¡Pare aquí!', correct: false },
      ],
      explanation: "Lima taxis usually don't use meters — agree the price BEFORE you ride. '¿Cuánto cuesta hasta el centro?' (How much to the centre?) sets the fare upfront and avoids the post-ride surprise.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Take me to Calle Reforma 250, please'",
      words: ['Lléveme', 'a', 'Calle', 'Reforma', '250,', 'por', 'favor.'],
      correct: ['Lléveme', 'a', 'Calle', 'Reforma', '250,', 'por', 'favor.'],
      translation: 'Take me to Calle Reforma 250, please',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Take me to... (formal)',
      correct: ['Lléveme a', 'lléveme a', 'lleveme a'],
    },
  ],

  rwenDialogue: {
    intro: "You're outside Jorge Chávez airport in Lima at 11pm. A taxi pulls up.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas noches. ¿Cuánto cuesta hasta Miraflores?', native: 'Good evening. How much to Miraflores?', correct: true, feedback: "Greeting + price BEFORE getting in. Lima rule one. He answers a price; you negotiate or accept." },
          { target: 'Lléveme a Miraflores', native: 'Take me to Miraflores', correct: false, feedback: "In Lima — agree the price first: '¿Cuánto cuesta hasta Miraflores?' THEN say lléveme." },
          { target: 'Miraflores cuánto', native: 'Miraflores how much', correct: false, feedback: "Frame the question: '¿Cuánto cuesta hasta Miraflores?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sesenta soles, caballero.',
        native: 'Sixty soles, sir.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Está bien. Lléveme, por favor.', native: 'OK. Take me, please.', correct: true, feedback: "Price agreed, ride accepted. Now you can get in." },
          { target: 'Pare aquí', native: 'Stop here', correct: false, feedback: "You haven't started yet — accept the ride: 'Está bien. Lléveme, por favor.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sesenta soles, agreed before you got in. That's how Lima taxis work. In Mexico or Buenos Aires you'd just take an Uber or use the meter — but Lima rewards the negotiator.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How much does it cost?', correct: ['¿Cuánto cuesta?', 'Cuánto cuesta?', 'cuánto cuesta', 'Cuanto cuesta?'] },
      { prompt: 'Stop here (formal)', correct: ['Pare aquí', 'pare aquí', 'pare aqui'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you're in any taxi or rideshare, even at home, mentally rehearse: '¿Cuánto cuesta hasta [destination]? Lléveme, por favor. Pare aquí.' Three phrases, every taxi in twenty countries.",
    rwenSignoff: "Negotiate the price. Give the address. Say where to stop. Hasta mañana.",
  },

  phase8: {
    scenario: "It's late at Lima's Jorge Chávez airport. You've cleared customs and a non-official taxi pulls up offering you a ride to Miraflores. The meter is off, so you must negotiate the fare in Spanish BEFORE getting in — and once on the road, direct him to a specific address (street name + number, in the right order).",
    rwenRole: "Don Carlos — Lima taxista, late 50s, drives an old Toyota with no working meter, expects negotiation; he respects passengers who know the local rules and ask '¿cuánto cuesta?' upfront.",
    successCriteria: "User asks '¿cuánto cuesta hasta Miraflores?' BEFORE getting in (Lima rule), uses 'lléveme a' with street name BEFORE number ('Calle Berlín 250', not '250 Calle Berlín'), and says 'pare aquí' — not 'para aquí' — when arriving (formal command, respectful to the driver).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
