import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Daily routine — Mañana',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: tu rutina de la mañana en inglés. Despertarse, ducharse, desayunar. Las primeras tres horas de tu día.",
    culturalNote: "Una particularidad: en inglés se dice 'I take a shower' (tomo una ducha), no 'I shower' a secas (aunque también existe). Como en español 'me ducho'. Y 'breakfast' (desayuno) viene de 'break + fast' = romper el ayuno. Cultural: en EE.UU. el desayuno es más sustancioso que en muchos países latinos — huevos, tocino, panqueques son normales. Si dices 'I just have coffee for breakfast', un anglo podría preocuparse — para ellos eso no es desayuno, es un snack de cafeína.",
  },

  chunks: [
    {
      id: 'i_wake_up_at_6',
      target: 'I wake up at 6.',
      native: 'Me despierto a las 6.',
      literal: 'I wake up at 6',
      emoji: '⏰',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_take_a_shower',
      target: 'I take a shower.',
      native: 'Me ducho.',
      literal: 'I take a shower',
      emoji: '🚿',
      phonetic: 'ay-TAYK-uh-SHOW-er',
      audioRef: null,
    },
    {
      id: 'i_eat_breakfast',
      target: 'I eat breakfast.',
      native: 'Desayuno.',
      literal: 'I eat breakfast',
      emoji: '🍳',
      phonetic: 'ay-EET-BREK-fust',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Present simple for routines',
    explanation: "Para describir rutinas se usa el presente simple: I wake up, I take, I eat. La estructura es sujeto + verbo (sin '-ing'). En 3a persona singular se agrega -s: 'She wakes up', 'He takes a shower'. La preposición 'at' va con horas exactas: 'at 6', 'at 7:30'.",
    examples: [
      { target: 'I wake up at 6 AM',          native: 'Me despierto a las 6 AM' },
      { target: 'She takes a shower',          native: 'Ella se ducha' },
      { target: 'We eat breakfast at 7',       native: 'Desayunamos a las 7' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja la rutina',
      pairs: [
        { left: 'I wake up',         right: 'Me despierto' },
        { left: 'I take a shower',   right: 'Me ducho' },
        { left: 'I eat breakfast',   right: 'Desayuno' },
        { left: 'I brush my teeth',  right: 'Me cepillo los dientes' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me ducho',
      correct: ['I take a shower', 'i take a shower', 'I take a shower.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la preposición',
      sentence: 'I wake up ____ 6.',
      options: ['in', 'at', 'on'],
      correct: 'at',
      context: 'Con horas se usa "at" en inglés.',
    },
    {
      type: 'multiple_choice',
      instruction: '¿Cuál es la 3a persona singular de "wake up"?',
      question: 'She _____ at 7.',
      options: [
        { text: 'wakes up',   correct: true },
        { text: 'wake up',     correct: false },
        { text: 'waking up',   correct: false },
      ],
      explanation: '3a persona singular añade -s al verbo: she/he/it wakes up.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — desayunas a las siete',
      words: ['breakfast', 'I', 'at', 'eat', '7'],
      correct: ['I', 'eat', 'breakfast', 'at', '7'],
      translation: 'Desayuno a las 7',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me despierto a las 6',
      correct: ['I wake up at 6', 'I wake up at six', 'i wake up at 6'],
    },
  ],

  rwenDialogue: {
    intro: 'Tu nuevo compañero de cuarto Tom te pregunta a qué hora te levantas para coordinar el baño.',
    lines: [
      { speaker: 'npc', target: "When do you usually wake up?", native: '¿A qué hora te despiertas normalmente?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, take a shower, and eat breakfast around 7.", native: 'Me despierto a las 6, me ducho y desayuno como a las 7.', correct: true,  feedback: '¡Perfecto! Tres acciones encadenadas — Tom puede planear su mañana.' },
          { target: 'I waking up 6.',                                                native: 'Yo despertando 6.',                                          correct: false, feedback: 'Para rutinas se usa presente simple, no -ing. Y falta la preposición "at".' },
          { target: '6 morning.',                                                     native: '6 mañana.',                                                  correct: false, feedback: 'Demasiado cortado. La oración completa "I wake up at 6" comunica claro.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Excelente. Las rutinas en presente simple — sin -ing, sin verb auxiliares.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Me ducho (en inglés)',           correct: ['I take a shower', 'i take a shower'] },
      { prompt: 'Me despierto a las 6 (en inglés)', correct: ['I wake up at 6', 'I wake up at six', 'i wake up at 6'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Describe tu rutina de la mañana en inglés en cinco oraciones. Usa "at" + hora. Por ejemplo: "I wake up at 6. I take a shower. I eat breakfast at 7..."',
    rwenSignoff: 'Mañana: trabajo y escuela — tu día en el medio.',
  },

  phase8: {
    scenario: "You're chatting with a new American roommate about morning schedules. They want to know your routine to share the bathroom and kitchen.",
    rwenRole: "Tom, 26, your new roommate. Friendly, organized, asks logistical questions.",
    successCriteria: "User describes at least four morning actions (wake up, shower, breakfast, leave) using present simple with 'at' + time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
