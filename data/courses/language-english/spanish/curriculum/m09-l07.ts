import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel & Accommodation — Hotel',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: el hotel. Reservación, llave, check-out. Las tres frases que necesitas para llegar, dormir y salir.",
    culturalNote: "En EE.UU. el hotel suele cobrar un 'resort fee' o 'destination fee' que NO está en el precio que viste online — entre $20 y $50 por noche extra. Pregunta en el check-in: 'Are there any extra fees?'. Y la propina: deja $1-$2 por noche para housekeeping (en sobre o sobre la mesa). Las palabras clave: 'reservation' (reserva), 'room key' (llave — hoy casi siempre tarjeta o app), 'check out' (salir).",
  },

  chunks: [
    {
      id: 'reservation',
      target: 'I have a reservation.',
      native: 'Tengo una reservación.',
      literal: 'I have a reservation.',
      emoji: '📋',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
    {
      id: 'room_key',
      target: 'My room key',
      native: 'La llave de mi cuarto',
      literal: 'My room key',
      emoji: '🔑',
      phonetic: 'my-ROOM-KEE',
      audioRef: null,
    },
    {
      id: 'check_out',
      target: "I'd like to check out.",
      native: 'Quisiera hacer el check-out.',
      literal: 'I-would like to check out.',
      emoji: '🧳',
      phonetic: 'ayd-LAYK-too-CHEK-owt',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel arc: arrive → stay → leave',
    explanation: "El hotel tiene tres momentos: llegada (check-in: 'I have a reservation under [name]'), estadía (problemas o servicios: 'My room key isn\'t working', 'Could I have more towels?'), salida (check-out: 'I'd like to check out').",
    examples: [
      { target: 'I have a reservation under Garcia',  native: 'Tengo reservación a nombre de García' },
      { target: 'My room key isn\'t working',          native: 'Mi llave no funciona' },
      { target: 'I\'d like to check out, please',       native: 'Quisiera hacer el check-out, por favor' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I have a reservation', right: 'Tengo una reservación' },
        { left: 'Room key',              right: 'Llave del cuarto' },
        { left: 'Check out',             right: 'Salida (hotel)' },
        { left: 'Check in',              right: 'Registro (hotel)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo una reservación',
      correct: ['I have a reservation', 'i have a reservation', 'I have a reservation.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — quieres hacer el check-out',
      sentence: "I'd like to ____ out, please.",
      options: ['take', 'check', 'go'],
      correct: 'check',
      context: '"Check out" es la frase fija para salir del hotel.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Llegas al hotel a las 10 PM. ¿Qué dices primero?',
      question: 'First sentence at the front desk:',
      options: [
        { text: 'Hi, I have a reservation under Garcia.', correct: true },
        { text: "Give me a room.",                           correct: false },
        { text: "I sleep here.",                              correct: false },
      ],
      explanation: 'La fórmula estándar: saludo + "I have a reservation under [last name]". Te buscan por apellido.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — quisiera hacer el check-out',
      words: ['out', 'check', "I'd", 'to', 'like'],
      correct: ["I'd", 'like', 'to', 'check', 'out'],
      translation: 'Quisiera hacer el check-out',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'La llave de mi cuarto',
      correct: ['My room key', 'my room key', 'My room key.'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegas a un hotel en San Diego después de un vuelo largo. Vas a la recepción.',
    lines: [
      { speaker: 'npc', target: "Hi, welcome. Are you checking in?", native: 'Hola, bienvenido. ¿Está haciendo check-in?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have a reservation under Garcia.",  native: 'Sí, tengo reservación a nombre de García.', correct: true,  feedback: '¡Perfecto! Confirmas el check-in y das tu apellido. Eficiente.' },
          { target: 'Yes.',                                       native: 'Sí.',                                          correct: false, feedback: 'Necesita tu apellido para encontrar tu reserva. Da el nombre.' },
          { target: 'I want bed.',                                 native: 'Yo querer cama.',                               correct: false, feedback: 'Suena raro. Mejor "I have a reservation" — eso explica todo.' },
        ],
      },
      { speaker: 'npc', target: "Found you. Two nights, king bed. Are there any extra charges?", native: 'Lo encontré. Dos noches, cama king. ¿Hay cargos adicionales?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Are there any resort fees? I'd like to know the total.", native: '¿Hay cargos del resort? Quisiera saber el total.', correct: true,  feedback: '¡Buena pregunta! Los resort fees pueden sumar bastante.' },
          { target: 'No money.',                                                native: 'No dinero.',                                          correct: false, feedback: 'Confunde. Pregunta por los cargos directamente.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Siempre pregunta por "resort fees" o "destination fees" — son sorpresa común en hoteles de EE.UU.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Tengo una reservación (en inglés)', correct: ['I have a reservation', 'i have a reservation', 'I have a reservation.'] },
      { prompt: 'Quisiera hacer el check-out (en inglés)', correct: ["I'd like to check out", 'I would like to check out', "i'd like to check out"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Practica el ciclo del hotel en voz alta: check-in (con apellido), pedido de servicio (toallas extra, WiFi), check-out. Tres mini-conversaciones.',
    rwenSignoff: 'Mañana: emergencias de viaje — perderse, perder algo, llegar tarde.',
  },

  phase8: {
    scenario: "You're checking into a Marriott in San Diego after a delayed flight. You need to: confirm your reservation, ask about the room and resort fees, and ask for an early check-out time tomorrow.",
    rwenRole: "Tina, 28, front desk agent. Friendly, efficient.",
    successCriteria: "User opens with 'I have a reservation under [name]', asks about extra fees, and confirms checkout time. Uses 'I'd like' for polite requests.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
