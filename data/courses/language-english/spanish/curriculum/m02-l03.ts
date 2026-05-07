import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — ¿Me puede ayudar?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Cuando estás perdido o no sabes qué hacer, necesitas pedir ayuda. La palabra 'can' te abre la puerta.",
    culturalNote: "En español preferimos suavizar — '¿Me podría ayudar?' o '¿Sería tan amable?'. En inglés 'Can you help me?' es la fórmula directa y se usa en todos los registros, incluso con jefes. No suena brusco — el 'can' lo hace petición, no orden. Para hispanohablantes en EE.UU., dominar este 'Can you...?' es la diferencia entre quedarse perdido y resolver.",
  },

  chunks: [
    {
      id: 'can_you_help_me',
      target: 'Can you help me?',
      native: '¿Me puedes ayudar?',
      literal: '¿Puedes-tú ayudarme?',
      emoji: '🆘',
      phonetic: 'KAN-iú-JELP-mi',
      audioRef: null,
    },
    {
      id: 'i_need_help',
      target: 'I need help',
      native: 'Necesito ayuda',
      literal: 'Yo-necesito ayuda',
      emoji: '🙋',
      phonetic: 'ÁI-nid-JELP',
      audioRef: null,
    },
    {
      id: 'im_lost',
      target: "I'm lost",
      native: 'Estoy perdido/a',
      literal: 'Yo-estoy perdido',
      emoji: '🧭',
      phonetic: 'áim-LOST',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modal verb "can"',
    explanation: "'Can' es uno de los verbos más útiles del inglés. Significa 'poder'. La fórmula: 'Can + you + (verbo)?'. Convierte cualquier frase en una petición educada. Para hispanohablantes la trampa es no traducir 'can you' como 'puedes' (informal); en inglés no cambia entre tú/usted.",
    examples: [
      { target: 'Can you help me?',           native: '¿Me puedes ayudar?' },
      { target: 'Can you speak slowly?',      native: '¿Puedes hablar despacio?' },
      { target: 'Can you show me the way?',   native: '¿Me puedes mostrar el camino?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Can you help me?', right: '¿Me puedes ayudar?' },
        { left: 'I need help',      right: 'Necesito ayuda' },
        { left: "I'm lost",         right: 'Estoy perdido' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — estás perdido en una ciudad que no conoces',
      prompt: 'Estoy perdido. ¿Me puede ayudar?',
      correct: [
        "I'm lost. Can you help me?",
        "I'm lost, can you help me?",
        "I am lost. Can you help me?",
        "i'm lost. can you help me?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pidiendo ayuda en un mostrador de información',
      sentence: '____ you help me, please?',
      options: ['Can', 'Are', 'Do'],
      correct: 'Can',
      context: "'Can you...?' es la forma estándar de pedir ayuda en inglés.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras — diciendo que necesitas ayuda',
      words: ['I', 'need', 'some', 'help'],
      correct: ['I', 'need', 'some', 'help'],
      translation: 'Necesito ayuda',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy perdido',
      correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pidiéndole ayuda al de información',
      prompt: 'Por favor, ¿me puede ayudar?',
      correct: ['Please, can you help me?', 'Please can you help me?', 'Please, can you help me', 'please, can you help me?'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegaste al aeropuerto JFK en Nueva York. Estás perdido — no encuentras tu puerta. Te acercas al mostrador de información.',
    lines: [
      { speaker: 'npc', target: "Hi, how can I help?", native: 'Hola, ¿en qué te ayudo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me?", native: 'Disculpe, estoy perdido. ¿Me puede ayudar?', correct: true,  feedback: 'Perfecto — abriste con cortesía, explicaste el problema, pediste ayuda.' },
          { target: 'Help.',                                  native: 'Ayuda.',                                       correct: false, feedback: 'Demasiado corto — usa una frase completa.' },
          { target: 'Thank you.',                             native: 'Gracias.',                                     correct: false, feedback: 'Todavía no te han ayudado — agradece después.' },
        ],
      },
      { speaker: 'npc', target: "Of course — where are you trying to go?", native: 'Claro — ¿a dónde tratas de ir?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "Excuse me" + "I\'m lost" + "Can you help me?" — la fórmula que te salva en cualquier aeropuerto del mundo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Can you help me? (en inglés)', correct: ['Can you help me?', 'Can you help me', 'can you help me?', 'can you help me'] },
      { prompt: "I'm lost (en inglés)",          correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Imagínate una situación de necesitar ayuda en inglés (aunque sea hipotética). Practica en voz alta: 'Excuse me, can you help me? I'm lost.' Dos veces.",
    rwenSignoff: 'Estas frases te esperan — no tengas miedo de usarlas.',
  },

  phase8: {
    scenario: "You've just landed at JFK Airport in New York. You can't find the exit to ground transport, your phone is dead, and signs aren't making sense. Approach the information desk and ask for help.",
    rwenRole: "Lwazi, 26, the airport information officer. Patient, helpful, polite. Speaks clear American English with a slight New York accent.",
    successCriteria: "User opens with 'Excuse me' or 'Hi', states a problem ('I'm lost' / 'I need help'), uses 'Can you help me?' or equivalent. Responds to follow-up questions about where they're trying to go.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
