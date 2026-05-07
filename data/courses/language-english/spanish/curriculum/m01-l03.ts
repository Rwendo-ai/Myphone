import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — Buenos días',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Buenos días! En inglés también cambia el saludo según la hora — pero los cortes son distintos. 'Good morning' va desde que te levantas hasta el mediodía.",
    culturalNote: "En español decimos 'buenos días' incluso a las 11:30am sin pensarlo. En inglés, la frontera es las 12:00 — exactas. Si entras a una oficina a las 12:15pm con 'Good morning', un anglo te corregirá con humor: 'Afternoon!'. Y otra cosa: en inglés casi nadie pregunta '¿Dormiste bien?' a un compañero — se siente demasiado íntimo. Reserva 'Did you sleep well?' para familia.",
  },

  chunks: [
    {
      id: 'good_morning',
      target: 'Good morning',
      native: 'Buenos días',
      literal: undefined,
      emoji: '🌅',
      phonetic: 'gud-MOR-ning',
      audioRef: null,
    },
    {
      id: 'did_you_sleep_well',
      target: 'Did you sleep well?',
      native: '¿Dormiste bien?',
      literal: 'Dormiste-tú bien?',
      emoji: '😴',
      phonetic: 'did-iú-SLIP-uel',
      audioRef: null,
    },
    {
      id: 'i_slept_well',
      target: 'I slept well',
      native: 'Dormí bien',
      literal: 'Yo-dormí bien',
      emoji: '✨',
      phonetic: 'ái-SLEPT-uel',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greeting',
    explanation: "El saludo cambia con la hora. 'Good morning' desde el amanecer hasta las 12:00pm — ni un minuto más. Después es 'Good afternoon'. Para hispanohablantes esto es más estricto que en español: en Latinoamérica decimos 'buenos días' hasta el almuerzo sin problema. En una oficina anglo, mejor mira el reloj.",
    examples: [
      { target: 'Good morning',           native: 'Buenos días' },
      { target: 'Did you sleep well?',    native: '¿Dormiste bien?' },
      { target: 'I slept well, thanks',   native: 'Dormí bien, gracias' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Good morning',         right: 'Buenos días' },
        { left: 'Did you sleep well?',  right: '¿Dormiste bien?' },
        { left: 'I slept well',         right: 'Dormí bien' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Buenos días',
      correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — responde a tu mamá',
      prompt: 'Dormí bien',
      correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el saludo de la mañana',
      sentence: 'Good ____, how did you sleep?',
      options: ['morning', 'evening', 'night'],
      correct: 'morning',
      context: 'Son las 8am, acabas de llegar a la oficina.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras',
      words: ['Did', 'you', 'sleep', 'well'],
      correct: ['Did', 'you', 'sleep', 'well'],
      translation: '¿Dormiste bien?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Dormiste bien?',
      correct: ['Did you sleep well?', 'did you sleep well?', 'Did you sleep well', 'did you sleep well'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegas a tu oficina en Bogotá a las 8am. Tu jefa expat de Inglaterra te saluda en la cocina mientras te preparas el café.',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: '¡Buenos días! ¿Dormiste bien?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Good morning. I slept well, thanks.', native: 'Buenos días. Dormí bien, gracias.', correct: true,  feedback: 'Perfecto — saludo + respuesta cortés. Empezaste el día como un nativo.' },
          { target: 'Hi.',                                  native: 'Hola.',                              correct: false, feedback: 'Muy corto para una jefa — usa "Good morning" en el ámbito profesional anglo.' },
          { target: 'Bye!',                                 native: '¡Chao!',                             correct: false, feedback: 'Esa es la despedida — todavía estás llegando.' },
        ],
      },
      { speaker: 'npc', target: 'Glad to hear it.', native: 'Me alegra escucharlo.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste el registro de oficina — esto te abre puertas en cualquier país anglo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Good morning (en inglés)', correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'] },
      { prompt: 'I slept well (en inglés)', correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Mañana en la mañana, salúdale a alguien con 'Good morning' — aunque la conversación siga en español. Que entre el inglés.",
    rwenSignoff: 'Que tengas un buen día — nos vemos mañana.',
  },

  phase8: {
    scenario: "It's 8am at the bilingual office where you work in Bogotá. Your British expat manager greets you at the coffee machine. Greet her appropriately and respond if she asks how you slept.",
    rwenRole: "Sarah, 35, your British manager who's been in Colombia for two years. Polite, morning-person, asks genuine questions in clear English.",
    successCriteria: "User opens with 'Good morning', responds appropriately if asked 'Did you sleep well?' (uses 'I slept well' or similar), and keeps the register polite-but-professional.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
