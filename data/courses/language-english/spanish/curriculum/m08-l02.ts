import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make" — Hago / Hago (¡pero distinto!)',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: 'do' y 'make'. Los dos se traducen a 'hacer' en español. Esto causa el error más común de los hispanohablantes en inglés.",
    culturalNote: "En español, 'hacer' cubre todo: hago la tarea, hago café, hago un pastel, hago ejercicio. En inglés se divide en dos verbos. Regla aproximada: 'do' es para actividades, tareas, acciones generales (do my homework, do exercise, do work). 'Make' es para crear o producir algo nuevo (make coffee, make a cake, make a decision). 'I make my homework' suena raro — la tarea no la creas, la haces. 'I do a cake' suena raro — el pastel sí lo creas, lo make. La regla no es perfecta pero te lleva al 80% correcto.",
  },

  chunks: [
    {
      id: 'i_do_my_homework',
      target: 'I do my homework.',
      native: 'Hago mi tarea.',
      literal: 'I do my homework',
      emoji: '📚',
      phonetic: 'ay-DOO-may-HOHM-werk',
      audioRef: null,
    },
    {
      id: 'she_makes_tea',
      target: 'She makes tea.',
      native: 'Ella hace té.',
      literal: 'She makes tea',
      emoji: '🍵',
      phonetic: 'shee-MAYKS-TEE',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry.",
      native: 'No te preocupes.',
      literal: 'Do not worry',
      emoji: '🙏',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Do vs make',
    explanation: "'Do' = realizar una actividad, tarea, trabajo (do homework, do exercise, do the dishes, do business). 'Make' = crear, producir algo nuevo (make food, make a plan, make a mistake, make money). 'Don't' es la contracción de 'do not' — usada en negaciones e imperativos.",
    examples: [
      { target: 'I do exercise',           native: 'Hago ejercicio' },
      { target: 'She makes coffee',         native: 'Ella hace café' },
      { target: "Don't make noise",         native: 'No hagas ruido' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja con do o make',
      pairs: [
        { left: 'do',   right: 'homework' },
        { left: 'make', right: 'coffee' },
        { left: 'do',   right: 'exercise' },
        { left: 'make', right: 'a plan' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con do o make',
      sentence: 'She ____ tea every morning.',
      options: ['does', 'makes', 'has'],
      correct: 'makes',
      context: 'Hacer té = crear una bebida = "make". Y en 3a persona singular es "makes".',
    },
    {
      type: 'multiple_choice',
      instruction: '¿Cuál es correcto?',
      question: 'Hago la tarea cada día',
      options: [
        { text: 'I do my homework every day.',   correct: true },
        { text: 'I make my homework every day.', correct: false },
        { text: 'I do homework every day.',       correct: false },
      ],
      explanation: '"Do homework" — la tarea no se crea, se realiza. "Make" sería como si fabricaras la tarea.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'No te preocupes',
      correct: ["Don't worry", 'Do not worry', "don't worry"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — ella hace café',
      words: ['coffee', 'makes', 'She'],
      correct: ['She', 'makes', 'coffee'],
      translation: 'Ella hace café',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Hago mi tarea',
      correct: ['I do my homework', 'i do my homework', 'I do my homework.'],
    },
  ],

  rwenDialogue: {
    intro: 'Tu compañera de cuarto Sarah se ofrece a ayudarte con la cocina mientras tú estudias.',
    lines: [
      { speaker: 'npc', target: "What are you up to? Need anything?", native: '¿Qué haces? ¿Necesitas algo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm doing my homework. Could you make some coffee, please?", native: 'Estoy haciendo mi tarea. ¿Puedes hacer café, por favor?', correct: true,  feedback: '¡Perfecto! "Doing homework" + "make coffee" — los dos verbos en su lugar correcto.' },
          { target: "I'm making my homework. Could you do coffee?",                  native: 'Estoy haciendo mi tarea. ¿Puedes hacer café?',           correct: false, feedback: 'Invertiste los verbos: "do homework" (no make) y "make coffee" (no do).' },
          { target: 'I do tea now.',                                                  native: 'Yo hago té ahora.',                                       correct: false, feedback: 'Haces té = "make tea", no "do tea". Y la pregunta era qué estás haciendo, no qué quieres.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Bien. La regla rápida: si lo creas (food, plan, mistake) → make. Si es una actividad (homework, exercise, work) → do.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Hago mi tarea (en inglés)', correct: ['I do my homework', 'i do my homework', 'I do my homework.'] },
      { prompt: 'No te preocupes (en inglés)', correct: ["Don't worry", 'Do not worry', "don't worry"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe cinco frases con "do" y cinco con "make" sobre tu día. Por ejemplo: "I do the dishes. I make breakfast." Memoriza colocaciones — los duelos clásicos: do/make.',
    rwenSignoff: 'Mañana: go y come — venir e ir, otro par confuso.',
  },

  phase8: {
    scenario: "You're texting an English-speaking colleague about plans for the weekend. Talk about what you'll do (homework, exercise) and what you'll make (food, plans).",
    rwenRole: "Pat, 30, work friend. Casual texts.",
    successCriteria: "User uses 'do' with at least three activities (homework, work, exercise, business) and 'make' with at least three creations (food, plans, decisions, mistakes). Distinguishes them correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
