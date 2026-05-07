import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Work & school — Mi día',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: lo que haces durante el día — trabajo, estudio, reuniones. La columna vertebral de cualquier conversación de small talk.",
    culturalNote: "En EE.UU. el small talk casi siempre empieza con 'What do you do?' (¿en qué trabajas?). En muchos países latinos preguntar el trabajo a los cinco minutos puede sonar invasivo; en EE.UU. es normal y esperado. Otra: 'I have a meeting' es muy común — las oficinas estadounidenses tienen muchas reuniones, y mencionarlas es señal de estar ocupado/importante. 'I study English' es perfectamente normal — los anglos respetan a quien aprende su idioma.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Voy al trabajo.',
      literal: 'I go to work',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'i_study_english',
      target: 'I study English.',
      native: 'Estudio inglés.',
      literal: 'I study English',
      emoji: '📖',
      phonetic: 'ay-STUH-dee-ING-glish',
      audioRef: null,
    },
    {
      id: 'i_have_a_meeting',
      target: 'I have a meeting.',
      native: 'Tengo una reunión.',
      literal: 'I have a meeting',
      emoji: '👥',
      phonetic: 'ay-HAV-uh-MEE-ting',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Activities + place / time',
    explanation: "Las actividades del día se construyen así: sujeto + verbo + lugar/objeto + tiempo. 'I go to work at 8' (acción + lugar + hora). 'I have a meeting on Monday' (acción + objeto + día). Las preposiciones 'to' (a/al), 'at' (en hora), 'on' (en día) son la clave.",
    examples: [
      { target: 'I go to work at 8 AM',         native: 'Voy al trabajo a las 8 AM' },
      { target: 'She studies medicine',          native: 'Ella estudia medicina' },
      { target: 'We have a meeting on Tuesday',  native: 'Tenemos reunión el martes' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I go to work',     right: 'Voy al trabajo' },
        { left: 'I study English',  right: 'Estudio inglés' },
        { left: 'I have a meeting', right: 'Tengo reunión' },
        { left: 'I work from home', right: 'Trabajo desde casa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estudio inglés',
      correct: ['I study English', 'i study English', 'I study english'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la preposición',
      sentence: 'I go ____ work at 8 AM.',
      options: ['at', 'to', 'in'],
      correct: 'to',
      context: 'Con direcciones se usa "to": "go to work", "go to school".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu colega pregunta "What do you do?" en una primera reunión',
      question: 'Best response:',
      options: [
        { text: "I'm a software engineer at Google.", correct: true },
        { text: 'I do work.',                          correct: false },
        { text: "I'm fine, thanks.",                   correct: false },
      ],
      explanation: '"What do you do?" pregunta tu trabajo, no cómo estás. Responde con tu profesión y/o empresa.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — tienes reunión el lunes',
      words: ['meeting', 'a', 'have', 'I', 'on', 'Monday'],
      correct: ['I', 'have', 'a', 'meeting', 'on', 'Monday'],
      translation: 'Tengo una reunión el lunes',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Voy al trabajo a las 9',
      correct: ['I go to work at 9', 'I go to work at nine', 'i go to work at 9'],
    },
  ],

  rwenDialogue: {
    intro: 'En la fila de un Starbucks en LA, otra persona te empieza a hablar mientras esperas tu café.',
    lines: [
      { speaker: 'npc', target: "Hey, do you work around here?", native: 'Oye, ¿trabajas por aquí?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I work at the bank on the corner. I have a meeting at 9.", native: 'Sí, trabajo en el banco de la esquina. Tengo reunión a las 9.', correct: true,  feedback: '¡Perfecto! Trabajo + lugar + horario. Small talk profesional al estilo gringo.' },
          { target: 'I work in.',                                                       native: 'Yo trabajar en.',                                                  correct: false, feedback: 'Falta la frase completa. "I work AT [place]" es la fórmula.' },
          { target: 'No English.',                                                       native: 'No inglés.',                                                       correct: false, feedback: 'Te entiende, pero estás en una clase de inglés — ¡practica!' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. En EE.UU. el small talk laboral es la norma — entrarle es una habilidad social.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Tengo una reunión (en inglés)', correct: ['I have a meeting', 'i have a meeting', 'I have a meeting.'] },
      { prompt: 'Estudio inglés (en inglés)',     correct: ['I study English', 'i study English', 'I study english'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Prepara tu respuesta a "What do you do?" en inglés. Tres versiones: corta (5 palabras), media (15 palabras), larga (30 palabras). Memoriza la corta y media — las usarás mucho.',
    rwenSignoff: 'Mañana: la rutina de la noche — volver a casa, cocinar, ver TV.',
  },

  phase8: {
    scenario: "You're at a US networking event. Three people in a row ask 'What do you do?'. Give a clear, varied answer each time — including your job, where you work, and what you're doing today (meeting, study, project).",
    rwenRole: "Three networkers at a Miami tech meetup. Each one asks 'what do you do?' and follows up.",
    successCriteria: "User answers 'What do you do?' clearly with profession + workplace, mentions a current activity (meeting, project, study), and uses correct prepositions (to/at/on).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
