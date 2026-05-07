import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Describing yourself — Cómo describirte',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En entrevistas y networking, te van a pedir 'Describe yourself' — describirte en pocas palabras. La fórmula: 'I'm + (adjetivo)'.",
    culturalNote: "Cultura de hispano vs. anglo: nosotros tendemos a la modestia ('soy normal', 'no tengo nada especial'). En entrevistas en EE.UU. y UK, eso suena a falta de confianza. La cultura anglo premia describirse directo: 'I'm friendly, hardworking, and curious'. No es engreimiento — es claridad. Practica decirlo sin titubear.",
  },

  chunks: [
    {
      id: 'im_friendly',
      target: "I'm friendly",
      native: 'Soy amigable',
      literal: 'Yo-soy amigable',
      emoji: '😊',
      phonetic: 'aim-FREND-li',
      audioRef: null,
    },
    {
      id: 'im_shy_sometimes',
      target: "I'm shy sometimes",
      native: 'A veces soy tímido/a',
      literal: 'Yo-soy tímido a-veces',
      emoji: '😅',
      phonetic: 'aim-SHÁI-SAM-taims',
      audioRef: null,
    },
    {
      id: 'i_love_learning',
      target: 'I love learning',
      native: 'Me encanta aprender',
      literal: 'Yo amo aprender(ing)',
      emoji: '📚',
      phonetic: 'ai-LAV-LER-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'I\'m + adjective / I love + verb-ing',
    explanation: "Para personalidad: 'I'm + (adjetivo)' = 'soy/estoy'. Lista común: friendly (amigable), patient (paciente), hardworking (trabajador), curious (curioso), shy (tímido). Para pasiones: 'I love + (verbo)-ing' = 'me encanta...'. Recuerda: love + -ing, igual que like/enjoy del Lección 5.",
    examples: [
      { target: "I'm friendly",                native: 'Soy amigable' },
      { target: "I'm patient",                  native: 'Soy paciente' },
      { target: "I'm curious by nature",         native: 'Soy curioso por naturaleza' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I'm friendly",     right: 'Soy amigable' },
        { left: "I'm patient",       right: 'Soy paciente' },
        { left: 'I love learning',   right: 'Me encanta aprender' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy amigable',
      correct: ["I'm friendly", "I am friendly", "i'm friendly", "I'm friendly."],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me encanta aprender',
      correct: ['I love learning', 'I love learning.', 'i love learning', 'I love to learn'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la forma correcta',
      sentence: "I'm ____, hardworking, and curious.",
      options: ['friendly', 'friend', 'friends'],
      correct: 'friendly',
      context: '"Friendly" es el adjetivo (amigable). "Friend" es el sustantivo (amigo).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena tres adjetivos',
      words: ["I'm", 'friendly', 'patient', 'and', 'curious'],
      correct: ["I'm", 'friendly', 'patient', 'and', 'curious'],
      translation: 'Soy amigable, paciente y curioso',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — descríbete con tres palabras',
      prompt: 'Soy amigable, trabajador y curioso',
      correct: [
        "I'm friendly, hardworking, and curious.",
        "I'm friendly, hardworking and curious.",
        "i'm friendly, hardworking, and curious.",
        "I am friendly, hardworking, and curious.",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En una entrevista de trabajo en Houston. La gerente te pide describirte rápido.',
    lines: [
      { speaker: 'npc', target: "Describe yourself in three words.", native: 'Descríbete en tres palabras.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm friendly, hardworking, and curious.", native: 'Soy amigable, trabajador y curioso.', correct: true,  feedback: 'Perfecto — tres adjetivos directos sin titubear. Eso es lo que buscan en entrevistas.' },
          { target: "Friendly. Hardworking. Curious.",          native: 'Amigable. Trabajador. Curioso.',         correct: false, feedback: 'Buenas palabras — pero sin "I\'m" suena cortado. Forma frase completa.' },
          { target: "I am very good.",                          native: 'Soy muy bueno.',                          correct: false, feedback: 'Vago — usa adjetivos específicos (friendly, hardworking, etc.).' },
        ],
      },
      { speaker: 'npc', target: "Lovely. Tell me about a time you were curious.", native: 'Lindo. Cuéntame de una vez que fuiste curioso.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Te describiste con confianza — la cultura anglo lo recompensa.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: "I'm friendly (en inglés)",     correct: ["I'm friendly", "I am friendly", "i'm friendly", "I'm friendly."] },
      { prompt: 'I love learning (en inglés)',  correct: ['I love learning', 'I love learning.', 'i love learning', 'I love to learn'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica tres adjetivos para describirte en inglés. Sin titubear, sin modestia exagerada — sé directo: 'I'm A, B, and C.'",
    rwenSignoff: 'Confianza nivel anglo. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in a job interview in Houston. The hiring manager asks you to describe yourself in three words. Be direct — no long preamble, no false modesty.",
    rwenRole: "Mr Adebayo, 50, the hiring manager. Has interviewed many bilingual candidates. Notes confidence (or lack of it) immediately. Direct, professional American English.",
    successCriteria: "User answers with 'I'm + three adjectives' — no preamble, no apologies. Adjectives are specific (friendly, hardworking, curious) not vague (good, nice).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
