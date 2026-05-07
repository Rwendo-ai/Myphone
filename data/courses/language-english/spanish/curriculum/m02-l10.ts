import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "¡Hola! Terminaste el Módulo 2 — sabes las palabras de supervivencia. Hoy juntamos todo: 'Excuse me' / 'Please' / 'I don't understand' / 'Where is...?' / 'Thank you'. Una sola línea: resolver un problema en inglés.",
    culturalNote: "En Latinoamérica una conversación con un desconocido suele tener prólogo — comentar el clima, sonreír, preámbulo. En el inglés de calle (sobre todo en EE.UU. y UK) la cortesía es corta: entras, pides, agradeces, sales. No es frialdad — es eficiencia. Y los anglos respetan al que no titubea.",
  },

  chunks: [
    {
      id: 'review_excuse_help',
      target: 'Excuse me, can you help me?',
      native: 'Disculpe, ¿me puede ayudar?',
      literal: 'Disculpe, ¿puede-usted ayudarme?',
      emoji: '🙋',
      phonetic: 'eks-KIÚS-mi-KAN-iú-JELP-mi',
      audioRef: null,
    },
    {
      id: 'review_dont_understand',
      target: "I don't understand. Slowly, please.",
      native: 'No entiendo. Despacio, por favor.',
      literal: 'No entiendo. Despacio, por-favor.',
      emoji: '🤷',
      phonetic: 'ai-DÓNT-an-der-STAND-SLÓU-li-PLIS',
      audioRef: null,
    },
    {
      id: 'review_thank_you_lots',
      target: 'Thank you so much for your help.',
      native: 'Muchísimas gracias por su ayuda.',
      literal: 'Gracias mucho por tu ayuda.',
      emoji: '🙏',
      phonetic: 'ZENK-iú-sou-MACH-for-iór-JELP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full survival flow',
    explanation: "Una conversación de supervivencia tiene tres partes: (1) ENTRAR — 'Excuse me' + petición ('Can you help me?' / 'Where is...?' / 'How much?'). (2) DESATASCAR — si no entiendes, di 'I don't understand. Slowly, please.'. (3) CERRAR — agradece: 'Thank you so much.'. Esta secuencia te saca de cualquier lío.",
    examples: [
      { target: "Excuse me, where is the bathroom?",                    native: 'Disculpe, ¿dónde está el baño?' },
      { target: "Sorry, I don't understand. Can you repeat slowly?",   native: 'Perdón, no entiendo. ¿Puede repetir despacio?' },
      { target: 'Thank you so much for your help.',                      native: 'Muchísimas gracias por su ayuda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las partes de la conversación',
      pairs: [
        { left: 'Excuse me...',          right: 'Cómo empiezas' },
        { left: "I don't understand",   right: 'Cuando te trabas' },
        { left: 'Thank you so much',     right: 'Cómo cierras' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — pidiendo ayuda',
      prompt: 'Disculpe, ¿me puede ayudar?',
      correct: [
        'Excuse me, can you help me?',
        'Excuse me can you help me?',
        'Excuse me, can you help me',
        'excuse me, can you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — diciendo que no entiendes',
      prompt: 'No entiendo. Repita despacio, por favor.',
      correct: [
        "I don't understand. Repeat slowly, please.",
        "I don't understand. Please repeat slowly.",
        "I don't understand. Repeat slowly please.",
        "i don't understand. repeat slowly, please.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena el agradecimiento',
      words: ['so', 'Thank', 'much', 'you'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Muchísimas gracias',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — preguntando precio',
      sentence: '____ much is this, please?',
      options: ['How', 'Where', 'What'],
      correct: 'How',
      context: 'Las preguntas de precio empiezan con "How much".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Muchísimas gracias por su ayuda',
      correct: [
        'Thank you so much for your help',
        'Thank you so much for your help.',
        'Thanks a lot for your help',
        'Thank you for all your help',
        'thank you so much for your help.',
      ],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Londres, tu primer día de un viaje de negocios. El móvil murió, perdiste la dirección del hotel y tienes una reunión en 30 minutos. Necesitas pedirle ayuda a alguien en la calle.',
    lines: [
      { speaker: 'npc', target: "Hi, you alright?", native: 'Hola, ¿estás bien?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me, please?", native: 'Disculpe, estoy perdido. ¿Me puede ayudar, por favor?', correct: true,  feedback: 'Perfecto — entrada con cortesía y petición clara. Así abres la conversación en inglés.' },
          { target: 'Lost.',                                            native: 'Perdido.',                                                correct: false, feedback: 'Demasiado corto — usa una frase completa.' },
          { target: "Yes, hello.",                                       native: 'Sí, hola.',                                              correct: false, feedback: 'No respondiste su pregunta ni pediste ayuda.' },
        ],
      },
      { speaker: 'npc', target: "Sure — where are you trying to get to? The tube's that way.", native: 'Claro — ¿adónde tratas de llegar? El metro va por allá.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: 'Perdón, no entiendo. ¿Despacio, por favor?', correct: true,  feedback: '¡Bien! Aunque te hablaron rápido, pediste claridad sin pena.' },
          { target: 'Yes.',                                          native: 'Sí.',                                          correct: false, feedback: 'No entendiste — no digas "Yes" si no captaste.' },
          { target: 'Thank you, goodbye.',                            native: 'Gracias, adiós.',                              correct: false, feedback: 'Te estás yendo sin resolver — primero entiende.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Terminaste el Módulo 2 — entrar → desatascar → agradecer. Ya tienes lo necesario para sobrevivir en cualquier ciudad anglo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe la conversación completa.',
    prompts: [
      { prompt: 'Excuse me, can you help me? (en inglés)',     correct: ['Excuse me, can you help me?', 'Excuse me can you help me?', 'Excuse me, can you help me', 'excuse me, can you help me?'] },
      { prompt: "I don't understand. Slowly, please. (en inglés)", correct: ["I don't understand. Slowly, please.", "I don't understand. Slowly please.", "I don't understand. Please, slowly.", "I do not understand. Slowly, please."] },
    ],
  },

  mission: {
    title: 'Tarea de hoy — Conversación de Supervivencia',
    task: "Imagínate una situación donde necesites ayuda en inglés (perdido, baño, comprar algo). Practica la conversación completa en voz alta — entra, desatasca, agradece. Sin mirar tus apuntes.",
    rwenSignoff: 'Terminaste el Módulo 2 — ya puedes sobrevivir en inglés. Nos vemos en el Módulo 3.',
  },

  phase8: {
    scenario: "You're in central London on day one of a work trip. Your phone is dead, you've lost your hotel address, and you have a meeting in 30 minutes. Approach a stranger, explain the problem, get directions, deal with not understanding the first reply, and thank them properly.",
    rwenRole: "Olu, 35, a Londoner walking to work. Friendly but in a slight hurry. Speaks fast British English with a London accent. Will help if you're clear, will get impatient if you're not.",
    successCriteria: "Full survival flow: opens with 'Excuse me' + 'Can you help me?' / 'I'm lost', uses 'I don't understand' / 'Slowly, please' when needed, asks 'Where is...?' for the destination, closes with 'Thank you so much'. Combines chunks from Module 2 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
