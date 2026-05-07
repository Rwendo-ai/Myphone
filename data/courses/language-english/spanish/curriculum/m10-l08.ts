import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Hope & Future — Esperanza y futuro',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: hablar de esperanza y sueños. Lo que quieres lograr, lo que sueñas, lo que crees que algún día harás.",
    culturalNote: "En EE.UU. hablar de sueños y metas es totalmente normal — el 'American Dream' es parte del ADN cultural. 'I hope to' (espero / ojalá), 'I dream of' (sueño con), 'One day I'll' (algún día yo). En algunos países latinos puede sentirse presuntuoso hablar tanto de planes futuros — 'no vaya a ser que se me sale la sal'. En EE.UU. lo opuesto: callarse las metas se ve como falta de ambición. En networking, contar tus sueños abre puertas.",
  },

  chunks: [
    {
      id: 'hope_to',
      target: 'I hope to...',
      native: 'Espero (con suerte)... / Ojalá pueda...',
      literal: 'I hope to',
      emoji: '🤞',
      phonetic: 'ay-HOHP-too',
      audioRef: null,
    },
    {
      id: 'one_day_ill',
      target: "One day I'll...",
      native: 'Algún día yo (haré)...',
      literal: 'one day I-will',
      emoji: '🌅',
      phonetic: 'WUN-DAY-ayl',
      audioRef: null,
    },
    {
      id: 'dream_of',
      target: 'I dream of...',
      native: 'Sueño con...',
      literal: 'I-dream of',
      emoji: '✨',
      phonetic: 'ay-DREEM-uv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hope / dream / will + verb',
    explanation: "Estructuras de futuro aspiracional: 'I hope to + verb' (espero), 'I dream of + verb-ing' (sueño con), 'One day I will + verb' (algún día yo). Atención: 'hope to' lleva infinitivo (to + verb), 'dream of' lleva gerundio (verb-ing). 'I hope to travel' / 'I dream of traveling'.",
    examples: [
      { target: 'I hope to study in the US',        native: 'Espero poder estudiar en EE.UU.' },
      { target: 'I dream of opening a restaurant',   native: 'Sueño con abrir un restaurante' },
      { target: "One day I'll buy a house",           native: 'Algún día compraré una casa' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I hope to',     right: 'Espero' },
        { left: "One day I'll",  right: 'Algún día yo' },
        { left: 'I dream of',     right: 'Sueño con' },
        { left: 'My goal is',     right: 'Mi meta es' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la estructura',
      sentence: 'I dream ____ traveling the world.',
      options: ['to', 'of', 'about'],
      correct: 'of',
      context: '"Dream of + verb-ing" es la fórmula. "Of" es la preposición correcta.',
    },
    {
      type: 'multiple_choice',
      instruction: 'En un networking en SF te preguntan tus metas',
      question: 'Best response:',
      options: [
        { text: "I hope to start my own business in five years.", correct: true },
        { text: "Maybe... I don't know.",                          correct: false },
        { text: "I no plans.",                                       correct: false },
      ],
      explanation: 'En EE.UU. tener metas claras es valorado. "I hope to..." es la fórmula adecuada para hablar de planes a futuro.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Sueño con viajar',
      correct: ['I dream of traveling', 'I dream of travelling', 'i dream of traveling'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — algún día compraré una casa',
      words: ['house', 'a', 'buy', 'day', "I'll", 'One'],
      correct: ['One', 'day', "I'll", 'buy', 'a', 'house'],
      translation: 'Algún día compraré una casa',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Espero aprender bien el inglés',
      correct: ['I hope to learn English well', 'I hope to learn English'],
    },
  ],

  rwenDialogue: {
    intro: 'En un networking en San Francisco, una emprendedora te pregunta cuáles son tus metas a futuro.',
    lines: [
      { speaker: 'npc', target: "So, what's your big dream?", native: '¿Cuál es tu gran sueño?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I dream of opening a Latin restaurant in LA. One day I'll bring my mom's recipes here.", native: 'Sueño con abrir un restaurante latino en LA. Algún día traeré las recetas de mi mamá.', correct: true,  feedback: '¡Perfecto! Sueño concreto + plan + emoción. La emprendedora se interesa.' },
          { target: 'No dream.',                                                                                native: 'No sueño.',                                                                          correct: false, feedback: 'En EE.UU. no tener sueños lee como falta de ambición. Aunque sea pequeño, comparte algo.' },
          { target: "I'm dream business.",                                                                       native: 'Yo soy sueño negocio.',                                                                correct: false, feedback: 'Gramática mezclada. "I dream of opening a business" es la estructura.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Compartir sueños en networking en EE.UU. abre conversaciones — y a veces puertas reales.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Sueño con (en inglés)', correct: ['I dream of', 'i dream of'] },
      { prompt: 'Algún día yo (en inglés)', correct: ["One day I'll", 'One day I will', "one day I'll"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Escribe en inglés tres metas tuyas: una para este año, una para los próximos cinco años, una para la vida. Usa "I hope to / I dream of / One day I\'ll".',
    rwenSignoff: 'Mañana: refranes — sabiduría latina en inglés.',
  },

  phase8: {
    scenario: "You're at a tech networking event in San Francisco. Someone asks about your dreams and goals. Share a clear vision — short term, mid term, and long term — using hope, dream, and one day.",
    rwenRole: "Vanessa, 35, founder. Curious, asks good follow-ups.",
    successCriteria: "User uses at least one of each: 'I hope to + verb', 'I dream of + verb-ing', 'One day I'll + verb'. Shares a coherent vision across timeframes.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
