import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Lost & Travel emergencies — Estoy perdido',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: emergencias de viaje. Estoy perdido, perdí mi bolsa, perdí el bus. Las frases que esperas no usar — pero si pasa, las necesitas listas.",
    culturalNote: "El verbo 'lost' en inglés es engañoso: 'I'm lost' (estoy perdido) usa 'to be'. 'I lost my bag' (perdí mi bolsa) usa 'to lose' en pasado. Mismo origen, dos estructuras. Y 'I missed the bus' (perdí el bus) usa 'miss' (perderse algo) — no 'lose'. Si dices 'I lost the bus', un anglo te imagina buscando el bus en tu bolsillo. La palabra correcta para vehículos perdidos por tiempo: 'miss'. En EE.UU. los Lost & Found son comunes en estaciones, aeropuertos, museos.",
  },

  chunks: [
    {
      id: 'im_lost',
      target: "I'm lost.",
      native: 'Estoy perdido / perdida.',
      literal: 'I-am lost.',
      emoji: '😰',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
    {
      id: 'i_missed_my_bus',
      target: 'I missed my bus.',
      native: 'Perdí mi bus.',
      literal: 'I missed my bus.',
      emoji: '🚌',
      phonetic: 'ay-MIST-my-BUS',
      audioRef: null,
    },
    {
      id: 'i_lost_my_bag',
      target: 'I lost my bag.',
      native: 'Perdí mi bolsa.',
      literal: 'I lost my bag.',
      emoji: '👜',
      phonetic: 'ay-LOST-my-BAG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Lost (state) vs lost (action) vs missed',
    explanation: "'I'm lost' = estoy perdido (estado, con 'to be'). 'I lost X' = perdí X (acción pasada, con 'to lose'). 'I missed X' = perdí X por tiempo (un bus, vuelo, llamada). 'Miss' es para cosas que se van sin ti; 'lose' es para cosas que se te perdieron físicamente.",
    examples: [
      { target: "I'm lost — could you help me?",   native: 'Estoy perdido — ¿me ayuda?' },
      { target: 'I lost my phone yesterday',        native: 'Perdí mi teléfono ayer' },
      { target: 'I missed my flight',                native: 'Perdí mi vuelo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I'm lost",         right: 'Estoy perdido' },
        { left: 'I lost my bag',     right: 'Perdí mi bolsa' },
        { left: 'I missed my bus',   right: 'Perdí mi bus' },
        { left: 'I missed my flight', right: 'Perdí mi vuelo' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'No alcanzaste el avión por tráfico. ¿Qué dices?',
      question: 'Best phrase:',
      options: [
        { text: 'I missed my flight.',  correct: true },
        { text: 'I lost my flight.',     correct: false },
        { text: "I'm lost flight.",       correct: false },
      ],
      explanation: '"Miss" es para cosas que se van por tiempo (vuelos, buses, citas). "Lose" es para objetos físicos perdidos.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — perdiste tu maleta',
      sentence: 'I ____ my suitcase at the airport.',
      options: ['lost', 'missed', 'leave'],
      correct: 'lost',
      context: 'Una maleta es un objeto — se "lose" (perdió). "Miss" sería para tiempo.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy perdido',
      correct: ["I'm lost", 'I am lost', "i'm lost"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — perdí mi bolsa',
      words: ['bag', 'lost', 'I', 'my'],
      correct: ['I', 'lost', 'my', 'bag'],
      translation: 'Perdí mi bolsa',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Perdí mi vuelo',
      correct: ['I missed my flight', 'i missed my flight', 'I missed my flight.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en el centro de Chicago. Caminaste sin GPS y ahora no sabes dónde estás. Le hablas a una persona en la calle.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Could you help me find Michigan Avenue?", native: 'Disculpe, estoy perdido. ¿Me puede ayudar a encontrar Michigan Avenue?', correct: true,  feedback: '¡Perfecto! "I\'m lost" + petición concreta. La persona puede ayudar.' },
          { target: 'I lost.',                                                          native: 'Yo perdido.',                                                              correct: false, feedback: 'Falta el verbo. "I\'m lost" (con am).' },
          { target: 'Help.',                                                             native: 'Ayuda.',                                                                    correct: false, feedback: 'Demasiado escueto. La gente no sabe qué necesitas.' },
        ],
      },
      { speaker: 'npc', target: "Sure! Go straight three blocks, then turn right.", native: '¡Claro! Sigue tres cuadras y luego gira a la derecha.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "I\'m lost" abre la puerta a que te ayuden. La gente en EE.UU. usualmente ayuda — pregunta sin miedo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Estoy perdido (en inglés)', correct: ["I'm lost", 'I am lost', "i'm lost"] },
      { prompt: 'Perdí mi bolsa (en inglés)', correct: ['I lost my bag', 'i lost my bag', 'I lost my bag.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Memoriza tres frases para emergencias: "I\'m lost", "I lost my [item]", "I missed my [transport]". Te van a salvar el día si pasa.',
    rwenSignoff: 'Mañana: pedir ayuda más amplia mientras viajas.',
  },

  phase8: {
    scenario: "You're traveling alone in Chicago. You realize you're lost downtown, your phone is dead, and you missed your bus to the hotel. Stop a passerby and explain.",
    rwenRole: "Sandra, 40, local Chicago resident. Helpful, gives clear directions.",
    successCriteria: "User uses 'I'm lost', 'I missed my bus', and asks for help. Distinguishes 'lost' (state) from 'lost' (verb) from 'missed' correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
