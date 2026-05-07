import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'A day-in-life conversation — Mi día en inglés',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Cierre del Módulo 8. Combinamos pasado, presente y futuro en una sola conversación. Esto es lo que un anglo te pide en un café: ¿cómo estuvo tu día? ¿qué haces mañana?",
    culturalNote: "Tres tiempos en una sola charla es lo normal en EE.UU.: 'Yesterday I worked late, today I'm taking it easy, tomorrow I'm going to the gym.' Si dominas pasado-presente-futuro en oraciones encadenadas, suenas funcional. Una herramienta cultural: empezar con el pasado ('yesterday was wild') invita al otro a contar también — es el ritmo del small talk gringo.",
  },

  chunks: [
    {
      id: 'review_morning_routine',
      target: 'I wake up at 6, take a shower, and have breakfast.',
      native: 'Me despierto a las 6, me ducho y desayuno.',
      literal: 'I wake up at 6, take a shower, and have breakfast',
      emoji: '🌅',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'review_workday',
      target: 'I go to work, have meetings, and make plans.',
      native: 'Voy al trabajo, tengo reuniones y hago planes.',
      literal: 'I go to work, have meetings, and make plans',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'review_past_future',
      target: 'Yesterday I went home early; tomorrow I will work late.',
      native: 'Ayer me fui a casa temprano; mañana trabajaré hasta tarde.',
      literal: 'Yesterday I went home early; tomorrow I will work late',
      emoji: '🔄',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Combining past, present, future in one flow',
    explanation: "La conversación natural mezcla los tres tiempos. Estructura común: 'Yesterday I [past], today I [present], tomorrow I [future].' Practica encadenar — los marcadores de tiempo (yesterday, today, tomorrow, last week, next week) te dicen qué tiempo verbal usar.",
    examples: [
      { target: "Yesterday I cooked, today I'm tired, tomorrow I'll rest.", native: 'Ayer cociné, hoy estoy cansado, mañana descanso.' },
      { target: "Last week was busy. This week is calmer.",                  native: 'La semana pasada fue ocupada. Esta semana es más calma.' },
      { target: "I worked late yesterday. I'm going to bed early tonight.",   native: 'Trabajé tarde ayer. Voy a acostarme temprano hoy.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja marcador y tiempo verbal',
      pairs: [
        { left: 'Yesterday',     right: 'past simple' },
        { left: 'Today',          right: 'present simple' },
        { left: 'Tomorrow',       right: 'future (will / going to)' },
        { left: 'Right now',      right: 'present continuous' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el tiempo correcto',
      sentence: 'Yesterday I ____ home early.',
      options: ['go', 'went', 'will go'],
      correct: 'went',
      context: '"Yesterday" pide pasado simple. "Go" → "went".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me despierto a las 6, me ducho y desayuno',
      correct: ['I wake up at 6, take a shower, and have breakfast', 'I wake up at 6, take a shower and have breakfast'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Elige la combinación temporal correcta',
      question: 'Best fit:',
      options: [
        { text: "Yesterday I worked late; tomorrow I will rest.", correct: true },
        { text: "Yesterday I work late; tomorrow I rest.",         correct: false },
        { text: "Tomorrow I worked; yesterday I will rest.",        correct: false },
      ],
      explanation: 'Yesterday + pasado (worked). Tomorrow + futuro (will rest). El orden temporal de los verbos debe coincidir con los marcadores.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — ayer fui a casa temprano',
      words: ['early', 'home', 'I', 'went', 'Yesterday'],
      correct: ['Yesterday', 'I', 'went', 'home', 'early'],
      translation: 'Ayer me fui a casa temprano',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mañana trabajaré hasta tarde',
      correct: ['Tomorrow I will work late', "Tomorrow I'll work late", 'Tomorrow I am going to work late'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un break room en una oficina de Chicago. Tu colega Megan te pregunta cómo va tu semana.',
    lines: [
      { speaker: 'npc', target: "Hey, how's your week going?", native: 'Oye, ¿cómo va tu semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yesterday was crazy — I had three meetings. Today is calmer. Tomorrow I'm going to take a half day.", native: 'Ayer estuvo loco — tuve tres reuniones. Hoy más calma. Mañana voy a tomar medio día.', correct: true,  feedback: '¡Perfecto! Pasado + presente + futuro en una sola respuesta — fluido y natural.' },
          { target: 'I have meetings.',                                                                                       native: 'Tengo reuniones.',                                                                       correct: false, feedback: 'Demasiado plano. Pregunta tu semana — describe el ayer, hoy y mañana.' },
          { target: 'Yesterday I work late.',                                                                                   native: 'Ayer yo trabajar tarde.',                                                                correct: false, feedback: 'Yesterday pide pasado: "I worked late", no "work".' },
        ],
      },
      { speaker: 'npc', target: "Same here, honestly. What are you up to this weekend?", native: 'Igual, en serio. ¿Qué vas a hacer este finde?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to see family on Saturday. On Sunday I'll just rest.",  native: 'Voy a ver a la familia el sábado. El domingo solo descansaré.', correct: true,  feedback: '¡Excelente! Plan firme con "going to" + decisión simple con "will".' },
          { target: 'I see family.',                                                     native: 'Yo ver familia.',                                                correct: false, feedback: 'Necesitas el futuro: "I\'m going to see family" o "I\'ll see family".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Felicidades! Combinaste tres tiempos verbales con marcadores claros. Eso es nivel A2 funcional. ¡Cerraste el Módulo 8!',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba — tres tiempos en orden.',
    prompts: [
      { prompt: 'Ayer me fui a casa temprano; mañana trabajaré hasta tarde (en inglés)', correct: ['Yesterday I went home early; tomorrow I will work late', "Yesterday I went home early; tomorrow I'll work late", 'Yesterday I went home early. Tomorrow I will work late.'] },
      { prompt: 'Voy al trabajo, tengo reuniones, y hago planes (en inglés)',              correct: ['I go to work, have meetings, and make plans', 'I go to work, have meetings and make plans'] },
    ],
  },

  mission: {
    title: 'Misión del Módulo 8',
    task: 'Escribe (o di en voz alta) tu vida en tres oraciones: una en pasado (yesterday), una en presente (today), una en futuro (tomorrow). Comparte con un amigo angloparlante o publícalo.',
    rwenSignoff: '¡Excelente! Cerraste el Módulo 8. Mañana entramos al Módulo 9: direcciones y viajes.',
  },

  phase8: {
    scenario: "You're at a break-room chat with a US coworker. Cover what you did yesterday, what you're up to today, and what you're going to do this weekend. Mix all three tenses naturally.",
    rwenRole: "Megan, 33, coworker. Friendly chat — not formal. Asks follow-ups.",
    successCriteria: "User uses past simple for yesterday, present for today, and 'going to' or 'will' for tomorrow/weekend in at least three connected sentences. Avoids tense-marker mismatches.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
