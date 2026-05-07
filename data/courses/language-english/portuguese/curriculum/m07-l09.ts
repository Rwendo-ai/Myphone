import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Hosting in English — Recebendo em inglês',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Receber em casa: 'Welcome', 'Please, sit down', 'Help yourself'. Brasileiro recebe com calor — em inglês a estrutura existe pra carregar isso.",
    culturalNote: "No Brasil receber bem é virtude — 'come, come!', 'sente aí, fica à vontade'. Em inglês, 'help yourself' (se sirva) parece frio, mas é o convite educado pra pessoa pegar o que quiser sem pressão. O calor entra no tom de voz, no sorriso, no segundo prato oferecido.",
  },

  chunks: [
    {
      id: 'welcome',
      target: 'Welcome',
      native: 'Bem-vindo(a)',
      literal: 'Welcome (you have come)',
      emoji: '🤗',
      phonetic: 'WEL-kum',
      audioRef: null,
    },
    {
      id: 'sit_down',
      target: 'Please, sit down',
      native: 'Por favor, sente-se',
      literal: 'Please sit down',
      emoji: '🪑',
      phonetic: 'PLEEZ-SIT-down',
      audioRef: null,
    },
    {
      id: 'help_yourself',
      target: 'Help yourself',
      native: 'Se sirva',
      literal: 'Take what you want yourself',
      emoji: '🍽️',
      phonetic: 'HELP-yor-SELF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Host phrases — opening, seating, serving',
    explanation: "Três fases: (1) Receber — 'Welcome' / 'Come in, come in'. (2) Sentar — 'Please, sit down' / 'Take a seat'. (3) Comer — 'Help yourself' / 'Please, eat'. 'Help yourself' não é frio — é convite genuíno.",
    examples: [
      { target: 'Welcome! Please come in.',     native: 'Bem-vindo! Por favor, entre.' },
      { target: 'Please, sit down. Are you hungry?', native: 'Por favor, sente-se. Tá com fome?' },
      { target: 'Help yourself — there\'s plenty.',  native: 'Se sirva — tem bastante.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as fases de receber',
      pairs: [
        { left: 'Welcome', right: 'Bem-vindo' },
        { left: 'Please, sit down', right: 'Por favor, sente-se' },
        { left: 'Help yourself', right: 'Se sirva' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Bem-vindo! Por favor, entre.',
      correct: ['Welcome! Please come in.', 'Welcome! Please, come in.', 'welcome! please come in.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Convidando pra comer',
      sentence: 'Please ____ yourself!',
      options: ['help', 'serve', 'take'],
      correct: 'help',
      context: "'Help yourself' é a frase padrão.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Please, take a seat"',
      words: ['seat.', 'take', 'a', 'Please,'],
      correct: ['Please,', 'take', 'a', 'seat.'],
      translation: 'Por favor, sente-se',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Se sirva — tem bastante',
      correct: ["Help yourself — there's plenty", "Help yourself, there's plenty", "Help yourself — there is plenty"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Recebendo na sala',
      question: 'Frase mais natural de "entra, sente, fique à vontade":',
      options: [
        { text: 'Welcome! Come in, please — make yourself at home.', correct: true },
        { text: 'Welcome you, sit down please now.', correct: false },
        { text: 'Come, sit, eat.', correct: false },
      ],
      explanation: "'Make yourself at home' = fica à vontade.",
    },
  ],

  rwenDialogue: {
    intro: 'Você convidou colega americano pra jantar em casa.',
    lines: [
      { speaker: 'npc', target: "Hi! Thanks for having me.", native: 'Oi! Obrigada por me receber.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Welcome! Please come in. Make yourself at home — help yourself to anything.", native: 'Bem-vinda! Entra, fique à vontade — se sirva do que quiser.', correct: true, feedback: 'Mandou bem — receber caloroso em inglês.' },
          { target: "Hi sit eat.", native: '...', correct: false, feedback: 'Frase quebrada.' },
          { target: "Entra. Senta.", native: 'Entra. Senta.', correct: false, feedback: 'Em português — traduza.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Calor brasileiro com inglês fluente.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Welcome (em inglês)', correct: ['Welcome', 'welcome'] },
      { prompt: 'Help yourself (em inglês)', correct: ['Help yourself', 'help yourself'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Imagine que recebe alguém em casa hoje. Diz em voz alta: 'Welcome! Please, sit down. Help yourself.'",
    rwenSignoff: "Amanhã — capstone de comida.",
  },

  phase8: {
    scenario: "You're hosting an English-speaking colleague for dinner at home — first visit.",
    rwenRole: "Friendly first-time guest who needs warm guidance.",
    successCriteria: "User uses 'Welcome', 'Please sit down', and 'Help yourself' (or equivalents) at the right moments.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
