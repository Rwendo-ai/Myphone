import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — ¿A qué te dedicas?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! En inglés la pregunta del oficio es muy directa: 'What do you do?'. Literalmente '¿Qué haces?' — pero entendido como '¿En qué trabajas?'.",
    culturalNote: "En networking en EE.UU., 'What do you do?' es la segunda pregunta después del nombre. La gente conecta a través del trabajo. En Latinoamérica primero conocemos a la persona, después indagamos su trabajo. Acostumbrarte a este 'shortcut' anglo te ayuda mucho en redes profesionales y entrevistas.",
  },

  chunks: [
    {
      id: 'what_do_you_do',
      target: 'What do you do?',
      native: '¿A qué te dedicas?',
      literal: '¿Qué haces?',
      emoji: '💼',
      phonetic: 'uat-du-iú-DU',
      audioRef: null,
    },
    {
      id: 'im_a_teacher',
      target: "I'm a teacher",
      native: 'Soy maestro/a',
      literal: 'Yo-soy un maestro',
      emoji: '👩‍🏫',
      phonetic: 'aim-a-TÍ-cher',
      audioRef: null,
    },
    {
      id: 'i_work_in_it',
      target: 'I work in IT',
      native: 'Trabajo en sistemas',
      literal: 'Yo-trabajo en IT',
      emoji: '💻',
      phonetic: 'ai-UORK-in-AI-TI',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Job: I\'m a (noun) / I work in (sector)',
    explanation: "Dos formas: 'I'm a + (oficio)' = 'soy maestro' / 'soy enfermera'. 'I work in + (sector)' = 'trabajo en sistemas' / 'trabajo en banca'. La 'a' antes del oficio es OBLIGATORIA — 'I'm teacher' suena gramaticalmente roto.",
    examples: [
      { target: "I'm a teacher",        native: 'Soy maestro' },
      { target: "I'm a nurse",          native: 'Soy enfermera' },
      { target: 'I work in banking',     native: 'Trabajo en banca' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'What do you do?', right: '¿A qué te dedicas?' },
        { left: "I'm a teacher",   right: 'Soy maestro' },
        { left: 'I work in IT',     right: 'Trabajo en sistemas' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿A qué te dedicas?',
      correct: ['What do you do?', 'what do you do?', 'What do you do', 'what do you do'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy enfermera',
      correct: ["I'm a nurse", 'I am a nurse', "i'm a nurse", "I'm a nurse."],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el artículo correcto',
      sentence: "I'm ____ teacher.",
      options: ['a', 'the', '—'],
      correct: 'a',
      context: 'En inglés los oficios necesitan "a" (un/una).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'work', 'in', 'banking'],
      correct: ['I', 'work', 'in', 'banking'],
      translation: 'Trabajo en banca',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Soy maestro pero trabajo en sistemas ahora',
      correct: [
        "I'm a teacher, but I work in IT now.",
        "I'm a teacher but I work in IT now.",
        "I am a teacher, but I work in IT now.",
        "i'm a teacher, but i work in IT now.",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'Es tu primer día en una agencia digital en Bogotá. Tu nuevo compañero te saluda y quiere conocerte.',
    lines: [
      { speaker: 'npc', target: "Welcome to the team! What do you do?", native: '¡Bienvenido al equipo! ¿A qué te dedicas?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a teacher, but I work in IT now.", native: 'Soy maestro, pero trabajo en sistemas ahora.', correct: true,  feedback: 'Perfecto — frase completa con tu historia profesional.' },
          { target: "Teacher.",                                native: 'Maestro.',                                       correct: false, feedback: 'Demasiado corto — agrega "I\'m a" para sonar completo.' },
          { target: "I am teacher.",                           native: 'Soy maestro.',                                   correct: false, feedback: 'Olvidaste la "a"! En inglés es obligatorio: "I\'m a teacher".' },
        ],
      },
      { speaker: 'npc', target: "Oh interesting — what subject did you teach?", native: 'Interesante — ¿qué materia enseñabas?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! "I\'m a..." con la "a" obligatoria — eso es networking nivel pro.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'What do you do? (en inglés)',  correct: ['What do you do?', 'what do you do?', 'What do you do', 'what do you do'] },
      { prompt: "I'm a teacher (en inglés)",    correct: ["I'm a teacher", 'I am a teacher', "i'm a teacher", "I'm a teacher."] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica tu oficio en inglés con 'a': 'I'm a (oficio)' o 'I work in (sector)'. La 'a' es obligatoria.",
    rwenSignoff: 'Sigue trabajando. Nos vemos mañana.',
  },

  phase8: {
    scenario: "First day at a bilingual digital agency in Bogotá. A new co-worker introduces themselves and asks what you do. Run a quick career chat in English.",
    rwenRole: "Mark, 33, your new American co-worker, in Colombia for two years. Friendly, curious, asks follow-ups about background and career.",
    successCriteria: "User uses 'I'm a (job)' with the article 'a', or 'I work in (sector)'. Avoids 'I am teacher' (no article). Answers follow-up questions naturally.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
