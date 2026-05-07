import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — Gracias',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Hoy aprendemos a dar las gracias en inglés. 'Thank you' = 'gracias'. Pero la respuesta 'You're welcome' no tiene un equivalente directo en español.",
    culturalNote: "En Latinoamérica respondemos a 'gracias' con 'de nada' o 'con gusto'. En inglés es 'You're welcome' o 'No problem'. Y otra cosa — los anglo dan las gracias mucho más seguido que nosotros: por sostener una puerta, por pasar el azúcar, por todo. Si no respondes 'You're welcome', queda como que no escuchaste.",
  },

  chunks: [
    {
      id: 'thank_you',
      target: 'Thank you',
      native: 'Gracias',
      literal: 'Yo-te-doy-gracias',
      emoji: '🙏',
      phonetic: 'ZENK-iú',
      audioRef: null,
    },
    {
      id: 'youre_welcome',
      target: "You're welcome",
      native: 'De nada',
      literal: 'Tú-eres bienvenido',
      emoji: '🤗',
      phonetic: 'iór-UEL-com',
      audioRef: null,
    },
    {
      id: 'thanks_a_lot',
      target: 'Thanks a lot',
      native: 'Muchas gracias',
      literal: 'Gracias mucho',
      emoji: '🌟',
      phonetic: 'ZÉNKS-a-LOT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Acknowledgement chain',
    explanation: "En inglés el agradecimiento es un par: alguien dice 'Thank you', el otro responde 'You're welcome'. Si no respondes, queda incompleto. Para favores grandes, 'Thanks a lot' o 'Thank you so much'. Para casuales, 'Thanks' (sin 'you') basta.",
    examples: [
      { target: 'Thank you.',                 native: 'Gracias.' },
      { target: "You're welcome.",            native: 'De nada.' },
      { target: 'Thanks a lot for your help.', native: 'Muchas gracias por tu ayuda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Thank you',      right: 'Gracias' },
        { left: "You're welcome", right: 'De nada' },
        { left: 'Thanks a lot',   right: 'Muchas gracias' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Muchas gracias',
      correct: ['Thanks a lot', 'thanks a lot', 'Thanks a lot.', 'thanks a lot.', 'Thank you so much'],
    },
    {
      type: 'fill_blank',
      instruction: "Completa — alguien te acaba de decir 'Thank you'. Responde.",
      sentence: '____ welcome.',
      options: ["You're", 'I am', 'We are'],
      correct: "You're",
      context: "La respuesta estándar a 'Thank you' es 'You're welcome'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — agradeciendo por gran ayuda',
      words: ['Thank', 'you', 'so', 'much'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Muchísimas gracias',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'De nada',
      correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — agradeciendo a un compañero',
      prompt: 'Gracias por tu ayuda',
      correct: ['Thank you for your help', 'Thank you for your help.', 'Thanks for your help', 'Thanks for your help.', 'thank you for your help'],
    },
  ],

  rwenDialogue: {
    intro: 'Una compañera del call center en Miami te ayudó a corregir un correo en inglés antes de mandárselo a un cliente. Agradécele.',
    lines: [
      { speaker: 'npc', target: "There you go — that should fix it.", native: 'Ahí está — con eso queda.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thank you so much for your help.', native: 'Muchísimas gracias por tu ayuda.', correct: true,  feedback: 'Perfecto — agradeciste con calidez y mencionaste qué agradeces.' },
          { target: 'OK.',                                native: 'OK.',                                correct: false, feedback: 'Te ayudó — agrega "thank you" mínimo.' },
          { target: 'Sorry.',                             native: 'Perdón.',                            correct: false, feedback: 'No metiste la pata — usa "thank you", no "sorry".' },
        ],
      },
      { speaker: 'npc', target: "You're welcome — anytime.", native: 'De nada — cuando quieras.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Cerraste el ciclo — "thank you" → "you\'re welcome". Eso es inglés natural.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Thank you (en inglés)',     correct: ['Thank you', 'thank you', 'Thank you.', 'thank you.', 'Thanks', 'thanks'] },
      { prompt: "You're welcome (en inglés)", correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Agradécele a alguien hoy en inglés — aunque sea cosa chiquita ('Thank you' al cajero). Fíjate si responden 'You're welcome' o 'No problem'.",
    rwenSignoff: 'Gracias por practicar conmigo. Nos vemos mañana.',
  },

  phase8: {
    scenario: "A bilingual co-worker at your call centre in Miami has just spent 10 minutes helping you fix a typo-filled English email before you send it to a client. Thank them properly.",
    rwenRole: "Sarah, 32, your colleague who's helpful but busy. Direct, kind — she'll downplay the help.",
    successCriteria: "User uses 'thank you' (preferably 'thank you so much' or 'thanks a lot' since the help was substantial), names what they're thanking for ('for your help' / 'for fixing this'), and responds gracefully to her 'You're welcome' / 'No problem'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
