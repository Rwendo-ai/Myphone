import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'At the Doctor — En la consulta',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: la consulta médica. Decir dónde te duele, hace cuánto, y entender la receta.",
    culturalNote: "En EE.UU. los médicos hacen preguntas muy específicas: 'on a scale of 1 to 10, how is the pain?' (en escala 1-10). Aprende esa fórmula. Otra: 'medicine' es general; 'medication' o 'prescription' es lo recetado. Y la palabra clave: 'allergic' (alérgico). 'I'm allergic to penicillin' puede salvarte la vida — siempre dilo aunque no te pregunten. Las farmacias en EE.UU. están en supermercados (CVS, Walgreens) y tu seguro a veces cubre la receta.",
  },

  chunks: [
    {
      id: 'hurts_here',
      target: 'It hurts here',
      native: 'Me duele aquí',
      literal: 'it-hurts here',
      emoji: '👉',
      phonetic: 'it-HERTS-HEER',
      audioRef: null,
    },
    {
      id: 'for_three_days',
      target: 'For three days',
      native: 'Desde hace tres días',
      literal: 'for days three',
      emoji: '📅',
      phonetic: 'fer-THREE-DAYZ',
      audioRef: null,
    },
    {
      id: 'take_medicine',
      target: 'Take this medicine',
      native: 'Tome esta medicina',
      literal: 'take this medicine',
      emoji: '💊',
      phonetic: 'TAYK-this-MED-uh-sen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Duration with "for" + time',
    explanation: "Para decir cuánto tiempo llevas con un síntoma usamos 'for + time': 'for three days' (desde hace tres días), 'for a week' (desde hace una semana), 'for two hours' (desde hace dos horas). En español decimos 'desde hace'; en inglés es solo 'for'.",
    examples: [
      { target: "I've had a headache for two days",   native: 'Tengo dolor de cabeza desde hace dos días' },
      { target: "It's been hurting for a week",         native: 'Me ha dolido desde hace una semana' },
      { target: "Take this medicine for five days",     native: 'Tome esta medicina por cinco días' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'It hurts here',      right: 'Me duele aquí' },
        { left: 'For three days',      right: 'Desde hace tres días' },
        { left: 'Take this medicine',  right: 'Tome esta medicina' },
        { left: "I'm allergic to",     right: 'Soy alérgico a' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la duración',
      sentence: "I've had this pain ____ three days.",
      options: ['since', 'for', 'during'],
      correct: 'for',
      context: '"For + duración" = desde hace [tiempo]. "Since" sería con punto fijo: "since Monday".',
    },
    {
      type: 'multiple_choice',
      instruction: 'El médico pregunta "On a scale of 1 to 10, how is the pain?". ¿Qué dices?',
      question: 'Best response if pain is moderate:',
      options: [
        { text: "It's about a six.", correct: true },
        { text: 'Very pain.',          correct: false },
        { text: 'Yes pain.',            correct: false },
      ],
      explanation: 'La escala 1-10 es estándar en EE.UU. Responde con un número: "It\'s a six" o "About a seven".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me duele aquí',
      correct: ['It hurts here', 'it hurts here', 'It hurts here.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — soy alérgico a la penicilina',
      words: ['penicillin', 'allergic', "I'm", 'to'],
      correct: ["I'm", 'allergic', 'to', 'penicillin'],
      translation: 'Soy alérgico a la penicilina',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Desde hace tres días',
      correct: ['For three days', 'for three days'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una clínica en Phoenix. La doctora te examina por dolor de estómago.',
    lines: [
      { speaker: 'npc', target: "Where does it hurt, and how long has it been?", native: '¿Dónde te duele y desde hace cuánto?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It hurts here, in my stomach. For three days. And I'm allergic to penicillin.", native: 'Me duele aquí, en el estómago. Desde hace tres días. Y soy alérgico a la penicilina.', correct: true,  feedback: '¡Perfecto! Lugar + duración + alergia. Información completa para la doctora.' },
          { target: 'Stomach.',                                                                          native: 'Estómago.',                                                                                correct: false, feedback: 'Necesita más datos: cuánto tiempo, qué tan fuerte, alergias.' },
          { target: 'Three days pain.',                                                                  native: 'Tres días dolor.',                                                                          correct: false, feedback: '"For three days" es la fórmula. Y falta dónde te duele.' },
        ],
      },
      { speaker: 'npc', target: "OK, on a scale of 1 to 10, how bad is it?", native: 'OK, en una escala de 1 a 10, ¿qué tan fuerte?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's about a seven.", native: 'Como un siete.', correct: true,  feedback: '¡Bien! Número claro — la doctora puede decidir tratamiento.' },
          { target: 'Yes a lot.',           native: 'Sí, mucho.',     correct: false, feedback: 'Sin número, la escala no funciona. Da un número del 1 al 10.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Excelente! Y mencionar alergias sin que pregunten es buena práctica — puede salvarte de medicación incorrecta.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Me duele aquí (en inglés)',   correct: ['It hurts here', 'it hurts here', 'It hurts here.'] },
      { prompt: 'Desde hace tres días (en inglés)', correct: ['For three days', 'for three days'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Memoriza tres frases médicas: "It hurts here", "For [time]", "I\'m allergic to [medicine]". Si tienes alergias reales, sabe sus nombres en inglés.',
    rwenSignoff: 'Mañana: contar historias del pasado.',
  },

  phase8: {
    scenario: "You're at a doctor's appointment in Phoenix for a recurring stomach pain. Describe location, duration, intensity (1-10), and any allergies.",
    rwenRole: "Dr. Patel, 45, primary care physician. Asks structured questions.",
    successCriteria: "User describes pain location with 'It hurts here' or 'My X hurts', uses 'for + time' for duration, gives a 1-10 number, and mentions allergies if any.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
