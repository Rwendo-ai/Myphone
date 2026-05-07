import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Half past, quarter to — Minutos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "En español decimos 'son las dos y media' o 'cuarto para las nueve'. En inglés es parecido — 'half past two', 'quarter to nine' — pero hay que aprender la estructura.",
    culturalNote: "Trampa principal: 'quarter to nine' (cuarto para las nueve) significa 8:45, no 9:15. La preposición 'to' (para) se refiere a lo que falta. 'Quarter past nine' es 9:15. En español el 'para' funciona igual ('cuarto para las nueve' = 8:45), pero al traducir mentalmente muchos hispanohablantes se confunden con 'past' vs 'to'. En US ese error te hace llegar 30 minutos tarde.",
  },

  chunks: [
    {
      id: 'half_past',
      target: 'Half past two',
      native: 'Las dos y media',
      literal: 'Half after two',
      emoji: '🕝',
      phonetic: 'haf-PAST-too',
      audioRef: null,
    },
    {
      id: 'quarter_to',
      target: 'Quarter to nine',
      native: 'Cuarto para las nueve (8:45)',
      literal: 'Quarter before nine',
      emoji: '🕘',
      phonetic: 'KWOR-ter-too-nyn',
      audioRef: null,
    },
    {
      id: 'five_past',
      target: 'Five past six',
      native: 'Las seis y cinco',
      literal: 'Five after six',
      emoji: '🕕',
      phonetic: 'fyv-past-siks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past vs To',
    explanation: "'Past' significa 'pasada(s)' la hora — usado para 1-30 minutos después. 'To' significa 'para' — usado para los minutos que faltan, normalmente 35-59. 'Half past' = y media. 'Quarter past' = y cuarto. 'Quarter to' = menos cuarto / cuarto para.",
    examples: [
      { target: 'Ten past three',     native: 'Las tres y diez' },
      { target: 'Twenty to seven',    native: 'Veinte para las siete (6:40)' },
      { target: 'Quarter past eight', native: 'Las ocho y cuarto' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja la hora',
      pairs: [
        { left: 'Half past two',      right: '2:30' },
        { left: 'Quarter to nine',    right: '8:45' },
        { left: 'Quarter past eight', right: '8:15' },
        { left: 'Five past six',      right: '6:05' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: '¿Qué hora es "quarter to ten"?',
      question: 'Tu cita es a "quarter to ten" — ¿a qué hora llegas?',
      options: [
        { text: '9:45',  correct: true },
        { text: '10:15', correct: false },
        { text: '10:45', correct: false },
      ],
      explanation: '"Quarter to ten" es 15 minutos antes de las 10 = 9:45. La palabra "to" significa "para".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Las tres y media',
      correct: ['Half past three', 'half past three', 'It\'s half past three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — son las 7:45',
      sentence: "It's quarter ____ eight.",
      options: ['past', 'to', 'after'],
      correct: 'to',
      context: '7:45 son 15 minutos antes de las 8 — usamos "to" (para).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — son las 6:30',
      words: ['past', 'six', 'half', "It's"],
      correct: ["It's", 'half', 'past', 'six'],
      translation: 'Son las seis y media',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — la reunión es a las 8:15',
      prompt: 'Las ocho y cuarto',
      correct: ['Quarter past eight', 'quarter past eight', "It's quarter past eight"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás coordinando una llamada con un colega en Nueva York. Necesitas confirmar la hora.',
    lines: [
      { speaker: 'npc', target: "Let's meet at quarter to three.", native: 'Reunámonos a cuarto para las tres.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two forty-five? OK.",     native: '¿Dos cuarenta y cinco? OK.', correct: true,  feedback: 'Excelente — confirmaste el horario en otro formato. Perfecto para evitar malentendidos.' },
          { target: 'Three fifteen? OK.',       native: '¿Tres quince? OK.',          correct: false, feedback: '"Quarter to three" es ANTES de las tres — 2:45, no 3:15. La palabra "to" cuenta hacia atrás.' },
          { target: 'Three forty-five? OK.',    native: '¿Tres cuarenta y cinco? OK.', correct: false, feedback: 'Eso sería "quarter to four" (cuarto para las cuatro). "Quarter to three" = 2:45.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. Repetir el horario en formato numérico es una técnica de profesionales — evita confusiones de minutos.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Las dos y media (en inglés)', correct: ['Half past two', 'half past two', "It's half past two"] },
      { prompt: '8:45 — di la hora con "to"',   correct: ['Quarter to nine', 'quarter to nine', "It's quarter to nine"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Cada vez que mires el reloj hoy, di la hora en inglés con "past" o "to". Si es 5:20, di "twenty past five". Si es 5:40, di "twenty to six".',
    rwenSignoff: 'Mañana: los días de la semana.',
  },

  phase8: {
    scenario: "You're texting back-and-forth with a US friend planning to meet for coffee. They suggest times like 'half past three' and 'quarter to seven'. You need to confirm or counter-propose using these expressions.",
    rwenRole: "Sarah, 28, a US friend you met at a Spanish language exchange. Casual, friendly.",
    successCriteria: "User correctly understands at least two 'past'/'to' time expressions, proposes a time using one of these structures, and confirms a final meeting time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
