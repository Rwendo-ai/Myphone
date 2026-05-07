import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the airport — En el aeropuerto',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: el aeropuerto. Boarding pass, gate, customs. Las palabras que escucharás por los altavoces y verás en los tableros.",
    culturalNote: "Los aeropuertos en EE.UU. tienen TSA (Transportation Security Administration) — su seguridad tiene fama de ser estricta. Te van a decir 'remove your shoes', 'laptop out of bag', 'arms up'. Si no entiendes, pide 'Could you repeat that, slower please?'. Y atención: 'gate' es la puerta de embarque, 'boarding gate'. 'Customs' es aduana — para vuelos internacionales. 'Departure' = salida, 'arrival' = llegada. Los anuncios pasan rápido — escucha la palabra clave (tu número de gate) y pregunta si dudas.",
  },

  chunks: [
    {
      id: 'boarding_pass',
      target: 'Boarding pass',
      native: 'Pase de abordar',
      literal: 'Boarding pass',
      emoji: '🛂',
      phonetic: 'BOR-ding-PAS',
      audioRef: null,
    },
    {
      id: 'departure_gate',
      target: 'Departure gate',
      native: 'Puerta de salida',
      literal: 'Departure gate',
      emoji: '🚪',
      phonetic: 'di-PAR-cher-GAYT',
      audioRef: null,
    },
    {
      id: 'customs',
      target: 'Customs',
      native: 'Aduana',
      literal: 'Customs',
      emoji: '🛃',
      phonetic: 'KUS-tums',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Airport vocabulary in context',
    explanation: "Las palabras del aeropuerto se combinan con verbos comunes: 'show your boarding pass', 'go to gate B12', 'go through customs', 'check in your bag'. Estructura típica: verbo + objeto + lugar.",
    examples: [
      { target: 'Show your boarding pass',     native: 'Muestra tu pase de abordar' },
      { target: 'Go to gate B12',                native: 'Ve a la puerta B12' },
      { target: 'Go through customs',            native: 'Pasa por aduana' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja palabras del aeropuerto',
      pairs: [
        { left: 'Boarding pass',  right: 'Pase de abordar' },
        { left: 'Departure gate',  right: 'Puerta de salida' },
        { left: 'Customs',         right: 'Aduana' },
        { left: 'Check-in',        right: 'Registro / Facturación' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Pase de abordar',
      correct: ['Boarding pass', 'boarding pass', 'A boarding pass'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — el oficial te pide tu pase',
      sentence: 'Could I see your ____ pass, please?',
      options: ['boarding', 'departure', 'customs'],
      correct: 'boarding',
      context: '"Boarding pass" es el documento que te permite abordar.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Te dicen "Your gate is B12, boarding starts at 6 PM". ¿Qué buscas?',
      question: 'You need to find:',
      options: [
        { text: 'Gate B12 in the terminal',     correct: true },
        { text: 'Customs counter',                correct: false },
        { text: 'The check-in desk again',         correct: false },
      ],
      explanation: '"Gate B12" es la puerta donde abordas. Sigues los letreros con "B" y luego buscas el "12".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pasa por aduana',
      words: ['through', 'customs', 'Go'],
      correct: ['Go', 'through', 'customs'],
      translation: 'Pasa por aduana',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Aduana',
      correct: ['Customs', 'customs', 'The customs'],
    },
  ],

  rwenDialogue: {
    intro: 'Acabas de aterrizar en Miami International. Tu vuelo es internacional. Pasas por inmigración.',
    lines: [
      { speaker: 'npc', target: "Boarding pass and passport, please.", native: 'Pase de abordar y pasaporte, por favor.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Here you go.",       native: 'Aquí tiene.',                correct: true,  feedback: 'Perfecto. Frase corta y respetuosa.' },
          { target: 'Take it.',            native: 'Tómalo.',                     correct: false, feedback: 'Suena cortante. "Here you go" o "Here you are" es lo natural.' },
          { target: 'I lost passport.',    native: 'Perdí pasaporte.',           correct: false, feedback: '¡No digas eso si no es verdad! Causarías problemas mayores.' },
        ],
      },
      { speaker: 'npc', target: "What's the purpose of your visit?", native: '¿Cuál es el motivo de su visita?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tourism. I'm visiting family for two weeks.", native: 'Turismo. Visito a familia por dos semanas.', correct: true,  feedback: '¡Bien! Motivo + duración. Respuesta clara y completa.' },
          { target: 'Yes.',                                          native: 'Sí.',                                          correct: false, feedback: 'No respondió la pregunta. Hay que decir el motivo: tourism, business, study.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En inmigración: respuestas cortas, claras, honestas. Nunca hagas chistes — los oficiales no tienen humor en TSA.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Pase de abordar (en inglés)', correct: ['Boarding pass', 'boarding pass', 'A boarding pass'] },
      { prompt: 'Puerta de salida (en inglés)', correct: ['Departure gate', 'departure gate', 'The departure gate'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Imagina tu próximo viaje en avión. Practica en inglés tres preguntas que harías en el aeropuerto: dónde está el gate, cuánto tarda el security, dónde está el baño.',
    rwenSignoff: 'Mañana: el hotel — check-in, llave, check-out.',
  },

  phase8: {
    scenario: "You're going through US customs at Miami International after a flight from your home country. The officer asks the standard set of questions about your visit, length of stay, and what you brought.",
    rwenRole: "CBP officer, 40, professional but expects clear answers. No small talk.",
    successCriteria: "User answers about purpose of visit, length of stay, and items declared. Uses short clear sentences with airport vocabulary.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
