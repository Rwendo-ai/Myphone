import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Past tense — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: pasado simple. Ayer hice esto, ayer fui allá. La forma de contar lo que pasó.",
    culturalNote: "Trampa de hispanohablantes: en español tenemos varios pasados (pretérito, imperfecto, perfecto compuesto). En inglés el pasado simple cubre casi todo en habla cotidiana: 'I went' = fui / iba (depende del contexto). El problema real son los verbos irregulares: go → went, see → saw, eat → ate, have → had, do → did. No siguen la regla del '-ed'. Hay que memorizarlos. Los regulares sí: 'walk → walked', 'cook → cooked'.",
  },

  chunks: [
    {
      id: 'yesterday_i_went',
      target: 'Yesterday I went to the market.',
      native: 'Ayer fui al mercado.',
      literal: 'Yesterday I went to the market',
      emoji: '🚶',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
    {
      id: 'i_saw_a_friend',
      target: 'I saw a friend.',
      native: 'Vi a un amigo.',
      literal: 'I saw a friend',
      emoji: '👀',
      phonetic: 'ay-SAW-uh-FREND',
      audioRef: null,
    },
    {
      id: 'it_was_great',
      target: 'It was great.',
      native: 'Estuvo genial.',
      literal: 'It was great',
      emoji: '👍',
      phonetic: 'it-WUZ-GRAYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past simple: -ed regulars + irregulars',
    explanation: "Verbos regulares: añade -ed (cook → cooked, walk → walked, study → studied). Verbos irregulares: tienen forma propia que hay que memorizar. Los más comunes: go → went, see → saw, have → had, do → did, eat → ate, be → was/were. Estructura: sujeto + verbo en pasado + resto.",
    examples: [
      { target: 'I cooked dinner last night',    native: 'Cociné la cena anoche' },
      { target: 'She had a great day',            native: 'Tuvo un gran día' },
      { target: 'They were tired',                native: 'Estaban cansados' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja presente y pasado',
      pairs: [
        { left: 'go',   right: 'went' },
        { left: 'see',  right: 'saw' },
        { left: 'eat',  right: 'ate' },
        { left: 'have', right: 'had' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el pasado de "go"',
      sentence: 'Yesterday I ____ to the market.',
      options: ['goed', 'went', 'gone'],
      correct: 'went',
      context: '"Go" es irregular: el pasado simple es "went", no "goed".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Forma correcta del pasado',
      question: 'I _____ a movie last night.',
      options: [
        { text: 'watched', correct: true },
        { text: 'watch',    correct: false },
        { text: 'watching', correct: false },
      ],
      explanation: '"Watch" es regular: añade -ed → "watched". El presente no funciona con "last night".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Vi a un amigo',
      correct: ['I saw a friend', 'i saw a friend', 'I saw a friend.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — estuvo genial',
      words: ['great', 'It', 'was'],
      correct: ['It', 'was', 'great'],
      translation: 'Estuvo genial',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Ayer fui al mercado',
      correct: ['Yesterday I went to the market', 'I went to the market yesterday', 'yesterday I went to the market'],
    },
  ],

  rwenDialogue: {
    intro: 'Es lunes. Tu colega gringa Megan te pregunta sobre tu fin de semana en la oficina.',
    lines: [
      { speaker: 'npc', target: "How was your weekend?", native: '¿Cómo estuvo tu fin de semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was great. I went to the beach and saw some friends.", native: 'Estuvo genial. Fui a la playa y vi a unos amigos.', correct: true,  feedback: '¡Perfecto! Tres verbos en pasado correcto: was, went, saw. Conversación de lunes.' },
          { target: 'I go to beach.',                                            native: 'Yo voy a playa.',                                    correct: false, feedback: 'Es presente, no pasado. Y falta "the". Es "I went to the beach".' },
          { target: 'I goed to the park.',                                        native: 'Yo iba al parque.',                                  correct: false, feedback: '"Go" es irregular — el pasado es "went", no "goed". Memorízalo.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Y los lunes en EE.UU. siempre se pregunta "how was your weekend?" — ten lista una respuesta de tres frases.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Vi a un amigo (en inglés)',  correct: ['I saw a friend', 'i saw a friend', 'I saw a friend.'] },
      { prompt: 'Estuvo genial (en inglés)',   correct: ['It was great', 'it was great', 'It was great.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Cuenta tu día de ayer en cinco oraciones en inglés, en pasado. Usa al menos tres verbos irregulares: went, saw, had, ate, did.',
    rwenSignoff: 'Mañana: el futuro — lo que harás mañana.',
  },

  phase8: {
    scenario: "It's Monday morning at your US workplace. A coworker asks 'How was your weekend?'. Walk through what you did — at least four past-tense verbs.",
    rwenRole: "Megan, 33, your American coworker. Friendly Monday small talk.",
    successCriteria: "User uses past simple correctly with at least three irregular verbs (went/saw/had/ate/did/was), describes a sequence of weekend events, and answers a follow-up question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
