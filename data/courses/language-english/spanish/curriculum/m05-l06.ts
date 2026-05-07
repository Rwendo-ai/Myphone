import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — Familia política',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Familia política en inglés se forma con '-in-law'. 'Mother-in-law' = suegra. 'Father-in-law' = suegro. 'Brother-in-law' = cuñado. 'In-laws' (plural) = los suegros y la familia política en general.",
    culturalNote: "En español tenemos palabras únicas: suegra, suegro, cuñado, yerno, nuera. En inglés todo se construye agregando '-in-law' al miembro de la familia ('mother-in-law', 'sister-in-law'). Más sistemático, menos palabras que memorizar. La trampa: la pronunciación. 'Mother-in-law' suena 'MA-der-IN-lo' — no como tres palabras separadas, sino como un compuesto.",
  },

  chunks: [
    {
      id: 'mother_in_law',
      target: 'Mother-in-law',
      native: 'Suegra',
      literal: 'Madre-en-ley',
      emoji: '👩',
      phonetic: 'MA-der-in-LO',
      audioRef: null,
    },
    {
      id: 'father_in_law',
      target: 'Father-in-law',
      native: 'Suegro',
      literal: 'Padre-en-ley',
      emoji: '👨',
      phonetic: 'FA-der-in-LO',
      audioRef: null,
    },
    {
      id: 'spouse',
      target: 'My husband / My wife',
      native: 'Mi esposo / Mi esposa',
      literal: undefined,
      emoji: '💍',
      phonetic: 'mai-JAS-band / mai-UÁIF',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-in-law / Plural in-laws',
    explanation: "Patrón: '(miembro de familia) + -in-law' = 'política/político'. El plural se forma poniendo la 's' en la primera palabra: 'mothers-in-law' (suegras) — NO 'mother-in-laws'. Para hablar de los suegros + familia política en general: 'my in-laws' (sin 'mother' o 'father').",
    examples: [
      { target: 'My mother-in-law',           native: 'Mi suegra' },
      { target: 'My in-laws live in Cartagena.', native: 'Mis suegros viven en Cartagena.' },
      { target: "My husband's sister",         native: 'La hermana de mi esposo (cuñada)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Mother-in-law', right: 'Suegra' },
        { left: 'Father-in-law', right: 'Suegro' },
        { left: 'My husband',    right: 'Mi esposo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi suegra',
      correct: ['My mother-in-law', 'my mother-in-law', 'My mother in law'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mis suegros',
      correct: ['My in-laws', 'my in-laws', 'My in-laws.', 'My parents-in-law'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la palabra compuesta',
      sentence: 'My ____-in-law lives in Mexico.',
      options: ['mother', 'mom', 'mama'],
      correct: 'mother',
      context: 'En la palabra "mother-in-law" se usa "mother", no "mom" (informal).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['My', 'in-laws', 'live', 'in', 'Mexico'],
      correct: ['My', 'in-laws', 'live', 'in', 'Mexico'],
      translation: 'Mis suegros viven en México',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'La hermana de mi esposo',
      correct: ["My husband's sister", "my husband's sister", "My husband's sister.", 'My sister-in-law'],
    },
  ],

  rwenDialogue: {
    intro: 'Conversación con tu compañera anglo en el call center en Miami. Le cuentas que conociste a tus suegros el fin de semana.',
    lines: [
      { speaker: 'npc', target: "How was meeting the in-laws? Tell me everything!", native: '¿Cómo te fue conociendo a los suegros? ¡Cuéntame todo!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It went well — my father-in-law is kind, but my mother-in-law was a bit reserved at first.", native: 'Salió bien — mi suegro es muy amable, pero mi suegra estuvo un poco reservada al principio.', correct: true,  feedback: 'Perfecto — distinguiste suegro y suegra, y mostraste matices ("a bit reserved").' },
          { target: "Good. Talked. Done.",                                                                          native: 'Bien. Hablamos. Listo.',                                                                       correct: false, feedback: 'Demasiado corto para una amiga preguntando — agrega detalle.' },
          { target: "Suegros amables.",                                                                              native: 'Suegros amables.',                                                                              correct: false, feedback: 'Quedó en español — traduce "in-laws are kind".' },
        ],
      },
      { speaker: 'npc', target: "That's normal at first — give it time.", native: 'Es normal al principio — dales tiempo.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste familia política en inglés — y agregaste matiz ("a bit reserved") como un nativo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My mother-in-law (en inglés)', correct: ['My mother-in-law', 'my mother-in-law', 'My mother in law'] },
      { prompt: 'My in-laws (en inglés)',        correct: ['My in-laws', 'my in-laws', 'My in-laws.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica los términos políticos en inglés. Recuerda — siempre con guiones: 'mother-in-law', 'sister-in-law'.",
    rwenSignoff: 'Suegras del mundo. Nos vemos mañana.',
  },

  phase8: {
    scenario: "Casual chat with your bilingual co-worker at the call centre in Miami. You're telling her about meeting your partner's parents over the weekend.",
    rwenRole: "Carla, 30, your bilingual co-worker. Curious, asks for details, switches to Spanglish but keeps it mostly in English.",
    successCriteria: "User uses 'mother-in-law', 'father-in-law', 'in-laws' correctly. Adds a nuance ('a bit reserved' / 'really kind' / etc.) instead of one-word answers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
