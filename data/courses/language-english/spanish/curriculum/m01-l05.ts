import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — Buenas noches (al atardecer)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Buenas tardes! Cuando se mete el sol, el saludo cambia a 'Good evening' — y la pregunta cambia de '¿Cómo va tu día?' a '¿Cómo te fue hoy?'. Tiempo pasado: el día ya pasó.",
    culturalNote: "En español 'buenas noches' sirve para saludar al llegar Y para despedirse al irse a dormir. En inglés son dos: 'Good evening' = saludo al atardecer (5pm en adelante). 'Good night' = solo para irse a dormir o despedirse a última hora. No las confundas — un 'Good night' al llegar a una cena suena raro.",
  },

  chunks: [
    {
      id: 'good_evening',
      target: 'Good evening',
      native: 'Buenas tardes/noches (al atardecer)',
      literal: undefined,
      emoji: '🌆',
      phonetic: 'gud-IV-ning',
      audioRef: null,
    },
    {
      id: 'how_was_your_day',
      target: 'How was your day?',
      native: '¿Cómo te fue hoy?',
      literal: 'Cómo fue tu día?',
      emoji: '🤔',
      phonetic: 'jáo-uos-iór-DÉI',
      audioRef: null,
    },
    {
      id: 'it_was_good',
      target: 'It was good',
      native: 'Estuvo bien',
      literal: 'Eso fue bueno',
      emoji: '✨',
      phonetic: 'it-uos-GUD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense in greetings',
    explanation: "Al atardecer, el día ya pasó — entonces el inglés cambia al pasado. 'How WAS your day?' (no 'How IS'). La respuesta también: 'It WAS good'. Para hispanohablantes el truco es notar que 'was' = 'fue/estuvo'. Y recuerda — el inglés no separa ser/estar, solo hay un 'was'.",
    examples: [
      { target: 'Good evening',     native: 'Buenas tardes/noches' },
      { target: 'How was your day?', native: '¿Cómo te fue?' },
      { target: 'It was good',      native: 'Estuvo bien' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Good evening',     right: 'Buenas tardes/noches' },
        { left: 'How was your day?', right: '¿Cómo te fue?' },
        { left: 'It was good',      right: 'Estuvo bien' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Buenas tardes (al atardecer)',
      correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — responde a alguien que pregunta cómo te fue',
      prompt: 'Estuvo bien',
      correct: ['It was good', 'it was good', 'It was good.', 'it was good.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el verbo en pasado',
      sentence: 'How ____ your day?',
      options: ['was', 'is', 'are'],
      correct: 'was',
      context: 'Son las 7pm. Hablan de cómo estuvo el día (que ya pasó).',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena la respuesta',
      words: ['It', 'was', 'a', 'good', 'day'],
      correct: ['It', 'was', 'a', 'good', 'day'],
      translation: 'Fue un buen día',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cómo te fue hoy?',
      correct: ['How was your day?', 'how was your day?', 'How was your day', 'how was your day'],
    },
  ],

  rwenDialogue: {
    intro: 'Son las 7pm. Llegas a casa de tu prima — ella se casó con un canadiense y la familia ahora habla inglés en la cena.',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: '¡Buenas tardes! ¿Cómo te fue hoy?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good evening. It was good, thanks.", native: 'Buenas tardes. Estuvo bien, gracias.', correct: true,  feedback: 'Perfecto — usaste el pasado correctamente.' },
          { target: 'Good morning.',                       native: 'Buenos días.',                          correct: false, feedback: 'Es de noche — usa "Good evening".' },
          { target: "How's your day?",                     native: '¿Cómo va tu día? (presente)',            correct: false, feedback: 'Tu primo te preguntó en pasado — responde en pasado: "It was good".' },
        ],
      },
      { speaker: 'npc', target: "I'm glad. Let's eat.", native: 'Qué bueno. Vamos a comer.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Mostraste respeto — saludaste y respondiste en el tiempo correcto.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Good evening (en inglés)', correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'] },
      { prompt: 'It was good (en inglés)',  correct: ['It was good', 'it was good', 'It was good.', 'it was good.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Esta noche, salúdale a alguien con 'Good evening' — y si te preguntan cómo te fue, intenta responder en inglés: 'It was good'.",
    rwenSignoff: 'Buenas noches. Nos vemos mañana.',
  },

  phase8: {
    scenario: "It's 7pm and you've sat down for dinner with your cousin who married a Canadian. The family now speaks English at the table. Greet your aunt and chat briefly about your day.",
    rwenRole: "Auntie Lucia, 55, your aunt who lived in Toronto for 20 years. Warm, curious, asks gentle questions in clear North American English.",
    successCriteria: "User opens with 'Good evening' (not 'Good morning' or 'Good afternoon'), uses past tense 'It was good' / 'How was your day?' (not present tense), and stays warm-but-respectful.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
