import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Emergency phrases — Frases de emergencia',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Estas frases ojalá nunca las uses — pero si las necesitas, tienen que salir rápido. 'Help!' / 'Call the police' / 'I need a doctor'.",
    culturalNote: "En EE.UU. el número de emergencia es 911; en UK es 999; en Australia 000. En todos te van a hablar en inglés rápido. Tu tarea es ser corto y claro: 'Help! I need a doctor. My friend is hurt.' Ahorra 'please' y cortesía — cada segundo cuenta. La cortesía vuelve cuando llegan los paramédicos.",
  },

  chunks: [
    {
      id: 'help',
      target: 'Help!',
      native: '¡Ayuda!',
      literal: 'Ayuda',
      emoji: '🆘',
      phonetic: 'JELP',
      audioRef: null,
    },
    {
      id: 'call_the_police',
      target: 'Call the police',
      native: 'Llame a la policía',
      literal: 'Llama la policía',
      emoji: '🚨',
      phonetic: 'KOL-de-po-LIS',
      audioRef: null,
    },
    {
      id: 'i_need_a_doctor',
      target: 'I need a doctor',
      native: 'Necesito un médico',
      literal: 'Yo-necesito un doctor',
      emoji: '🩺',
      phonetic: 'ai-NID-a-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency imperative',
    explanation: "En emergencia se usa el imperativo directo: 'Call the police' / 'Call an ambulance' / 'Help me'. No hay tiempo para 'Could you please...'. La estructura es: verbo primero, después qué. Para hispanohablantes, suena casi como en español: '¡Llame a la policía!'.",
    examples: [
      { target: 'Help! Help me!',     native: '¡Ayuda! ¡Ayúdame!' },
      { target: 'Call an ambulance.', native: 'Llame a una ambulancia.' },
      { target: 'I need a doctor — now.', native: 'Necesito un médico — ya.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Help!',           right: '¡Ayuda!' },
        { left: 'Call the police', right: 'Llame a la policía' },
        { left: 'I need a doctor', right: 'Necesito un médico' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¡Ayúdame!',
      correct: ['Help me!', 'Help me', 'help me!', 'Help!'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Llame a una ambulancia',
      correct: ['Call an ambulance', 'Call an ambulance.', 'call an ambulance', 'Call an ambulance!'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la frase de emergencia',
      sentence: 'I ____ a doctor.',
      options: ['need', 'want', 'have'],
      correct: 'need',
      context: 'En emergencia, "need" es lo correcto — no es preferencia, es necesidad.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['Call', 'the', 'police', 'now'],
      correct: ['Call', 'the', 'police', 'now'],
      translation: 'Llame a la policía ya',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: 'Tu amigo se desmayó. Llamas al 911. ¿Qué dices primero?',
      options: [
        { text: "Help! I need a doctor. My friend is hurt.", correct: true },
        { text: 'Hello, how are you?',                          correct: false },
        { text: 'Excuse me, please...',                         correct: false },
      ],
      explanation: 'En emergencia ahorra cortesía. Sé corto y claro: problema + qué necesitas.',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Miami con un amigo. Se desmayó en la calle. Llamas al 911. La operadora contesta.',
    lines: [
      { speaker: 'npc', target: "911, what's your emergency?", native: '911, ¿cuál es su emergencia?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Help! I need a doctor. My friend is hurt.", native: '¡Ayuda! Necesito un médico. Mi amigo está herido.', correct: true,  feedback: 'Perfecto — corto, claro, con la información esencial.' },
          { target: "Hello, how are you?",                          native: 'Hola, ¿cómo está?',                                correct: false, feedback: 'Es una emergencia — sin saludos. Ve directo al problema.' },
          { target: "Excuse me, please...",                          native: 'Disculpe, por favor...',                            correct: false, feedback: 'Demasiada cortesía — di "Help!" y el problema rápido.' },
        ],
      },
      { speaker: 'npc', target: "OK, where are you?", native: 'OK, ¿dónde está?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! En emergencia, claridad le gana a cortesía. Ojalá nunca lo necesites — pero ahora ya sabes.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Help! (en inglés)',                correct: ['Help!', 'Help', 'help!', 'help'] },
      { prompt: 'I need a doctor (en inglés)',      correct: ['I need a doctor', 'I need a doctor.', 'i need a doctor', 'I need a doctor!'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Memoriza estas tres frases — 'Help!', 'Call the police', 'I need a doctor'. Ojalá no las uses, pero si las necesitas, deben salir solas.",
    rwenSignoff: 'Cuídate. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in Miami with a friend. They've collapsed in the street. You're calling 911. The operator picks up — be quick, be clear.",
    rwenRole: "911 dispatcher, calm and trained. Speaks clearly, asks the essentials: what, where, how many people. Will dispatch help fast if you give clear info.",
    successCriteria: "User opens with 'Help!' or 'I need a doctor', describes the problem briefly ('My friend is hurt' / 'collapsed'), responds clearly to the dispatcher's questions about location. No long polite preambles.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },

  crisisHandoff: true,
};

export default lesson;
