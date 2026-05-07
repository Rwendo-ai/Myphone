import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Future tense — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: el futuro. 'I will...' y 'I'm going to...'. Lo que harás mañana, la próxima semana, el próximo año.",
    culturalNote: "En español tenemos 'iré' (futuro simple) y 'voy a ir' (futuro perifrástico). En inglés también dos formas: 'I will go' y 'I'm going to go'. Diferencia sutil: 'will' = decisión que tomas en el momento, predicciones ('I'll get it!'). 'Going to' = plan ya decidido ('I'm going to study tomorrow' — ya lo planeé). En la calle, los anglos usan más 'I'm going to' (a menudo dicho 'gonna' = 'I'm gonna study') para planes, y 'I'll' para reacciones inmediatas.",
  },

  chunks: [
    {
      id: 'tomorrow_i_will',
      target: 'Tomorrow I will call you.',
      native: 'Mañana te llamo.',
      literal: 'Tomorrow I will call you',
      emoji: '📞',
      phonetic: 'tu-MOR-oh-ay-WIL-KAWL-yoo',
      audioRef: null,
    },
    {
      id: 'im_going_to',
      target: "I'm going to study tonight.",
      native: 'Voy a estudiar esta noche.',
      literal: 'I am going to study tonight',
      emoji: '📚',
      phonetic: 'aym-GOH-ing-too-STUH-dee',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow!',
      native: '¡Hasta mañana!',
      literal: 'See you tomorrow',
      emoji: '👋',
      phonetic: 'SEE-yoo-tu-MOR-oh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Will vs going to',
    explanation: "'Will' (contracción 'll): decisiones espontáneas, predicciones, promesas. 'I'll help you' (decido en el momento). 'Going to' (informal 'gonna'): planes ya decididos, intenciones. 'I'm going to study' (ya lo planeé). Ambos son correctos para el futuro — el contexto te dice cuál.",
    examples: [
      { target: "I'll call you tomorrow",       native: 'Te llamo mañana (decisión ahora)' },
      { target: "I'm going to travel in June",  native: 'Voy a viajar en junio (ya planeado)' },
      { target: "It will rain tomorrow",         native: 'Va a llover mañana (predicción)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I will call',         right: 'Llamaré' },
        { left: "I'm going to study",   right: 'Voy a estudiar' },
        { left: 'See you tomorrow',     right: 'Hasta mañana' },
        { left: "I'll be there",         right: 'Allí estaré' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — ya decidiste estudiar esta noche',
      sentence: "I'm ____ to study tonight.",
      options: ['will', 'going', 'go'],
      correct: 'going',
      context: '"Going to" + verbo = plan ya decidido. La estructura es "I am going to + base verb".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu amigo deja caer su teléfono. Reaccionas para ayudar',
      question: 'Best response in the moment:',
      options: [
        { text: "I'll get it!",          correct: true },
        { text: "I'm going to get it.",  correct: false },
        { text: 'I get it.',              correct: false },
      ],
      explanation: '"I\'ll" para decisiones espontáneas, en el momento. "I\'m going to" suena planeado — raro para una reacción rápida.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¡Hasta mañana!',
      correct: ['See you tomorrow!', 'See you tomorrow', 'see you tomorrow'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — mañana te llamaré',
      words: ['call', 'will', 'I', 'Tomorrow', 'you'],
      correct: ['Tomorrow', 'I', 'will', 'call', 'you'],
      translation: 'Mañana te llamo',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Voy a estudiar esta noche',
      correct: ["I'm going to study tonight", "I am going to study tonight", "i'm going to study tonight"],
    },
  ],

  rwenDialogue: {
    intro: 'Tu jefa gringa te pregunta sobre tus planes para el proyecto de la semana entrante.',
    lines: [
      { speaker: 'npc', target: "What's your plan for next week?", native: '¿Cuál es tu plan para la próxima semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to finish the report on Monday and I will call the client on Tuesday.", native: 'Voy a terminar el reporte el lunes y llamaré al cliente el martes.', correct: true,  feedback: '¡Perfecto! "Going to" para el plan firme + "will" para una decisión adicional. Inglés profesional.' },
          { target: 'I will to finish.',                                                                  native: 'Yo voy a terminar.',                                                    correct: false, feedback: 'Mezclaste estructuras: "will + base verb" o "going to + base verb", no "will to + verb".' },
          { target: 'I finish next week.',                                                                  native: 'Yo termino próxima semana.',                                            correct: false, feedback: 'El presente simple no funciona aquí — tu jefa quiere un plan, no una rutina.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En la oficina en EE.UU., usar "going to" para planes y "will" para compromisos puntuales suena profesional.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Voy a estudiar esta noche (en inglés)', correct: ["I'm going to study tonight", "I am going to study tonight", "i'm going to study tonight"] },
      { prompt: '¡Hasta mañana! (en inglés)',              correct: ['See you tomorrow!', 'See you tomorrow', 'see you tomorrow'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe tres planes para mañana usando "I\'m going to..." y dos compromisos espontáneos usando "I\'ll...". Siente la diferencia entre planeado y reactivo.',
    rwenSignoff: 'Mañana cerramos el módulo con una conversación completa de tu día — pasado, presente, futuro juntos.',
  },

  phase8: {
    scenario: "Your US manager asks about your plans for next week — projects, meetings, and deliverables. Use both 'going to' (planned) and 'will' (commitments).",
    rwenRole: "Brenda, 45, your direct manager. Wants concrete plans.",
    successCriteria: "User mentions at least two planned activities with 'going to' and two commitments with 'will', uses correct prepositions for days/times, and ends with a confirmation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
