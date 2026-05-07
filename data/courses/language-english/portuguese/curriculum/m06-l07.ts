import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Months & Seasons — Meses e estações',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Meses: January a December. Estações: spring, summer, autumn (ou fall nos EUA), winter. Lembrete brasileiro: nosso verão é em dezembro!",
    culturalNote: "Em português 'janeiro' é minúsculo. Em inglês 'January' tem letra maiúscula. Atenção: em país tropical/sul, nosso verão é dezembro-março — quando americano fala 'I love summer' ele tá pensando em junho-agosto. Sempre tsanangure: 'In Brazil, our summer is in December.'",
  },

  chunks: [
    {
      id: 'first_months',
      target: 'January, February, March, April',
      native: 'Janeiro, fevereiro, março, abril',
      literal: 'Jan-Apr',
      emoji: '🗓️',
      phonetic: 'JAN-yoo-eh-ree, FEB-roo-eh-ree, march, AY-pril',
      audioRef: null,
    },
    {
      id: 'rainy_season',
      target: 'Rainy season',
      native: 'Estação chuvosa',
      literal: 'Rainy season',
      emoji: '🌧️',
      phonetic: 'RAY-nee-SEE-zn',
      audioRef: null,
    },
    {
      id: 'summer_winter',
      target: 'Summer / Winter',
      native: 'Verão / Inverno',
      literal: 'Summer / Winter',
      emoji: '☀️❄️',
      phonetic: 'SUM-er / WIN-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Calendar — months and seasons',
    explanation: "Meses usam 'in': 'in January'. Estações usam 'in': 'in summer'. Pra dia específico, 'on': 'on January 5th'. Meses com letra maiúscula; estações em minúscula (a menos que comecem frase).",
    examples: [
      { target: 'My birthday is in May',          native: 'Meu aniversário é em maio' },
      { target: 'It rains in summer in Brazil',   native: 'Chove no verão no Brasil' },
      { target: 'In December, it is hot',         native: 'Em dezembro, faz calor' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine meses e estações',
      pairs: [
        { left: 'January',     right: 'Janeiro' },
        { left: 'July',        right: 'Julho' },
        { left: 'Summer',      right: 'Verão' },
        { left: 'Rainy season', right: 'Estação chuvosa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu aniversário é em março',
      correct: ['My birthday is in March', 'My birthday is in March.', 'My birthday is March'],
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha a preposição',
      sentence: 'My birthday is ____ October.',
      options: ['on', 'in', 'at'],
      correct: 'in',
      context: "Mês: 'in October'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It is hot in summer"',
      words: ['summer.', 'hot', 'is', 'in', 'It'],
      correct: ['It', 'is', 'hot', 'in', 'summer.'],
      translation: 'Faz calor no verão',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Verão',
      correct: ['Summer', 'summer'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Falando do BR',
      question: 'Como explica nossa estação chuvosa pra um americano?',
      options: [
        { text: "In Brazil, the rainy season is in summer (December to March).", correct: true },
        { text: "The rains come on December.", correct: false },
        { text: "Brazil rainy December rains.", correct: false },
      ],
      explanation: "Estrutura clara: estação + meses entre parênteses pra contexto.",
    },
  ],

  rwenDialogue: {
    intro: 'Conversa com colega americano sobre férias.',
    lines: [
      { speaker: 'npc', target: "When do you usually go on vacation?", native: 'Quando você costuma sair de férias?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I usually travel in January — it's our summer in Brazil.", native: 'Geralmente viajo em janeiro — é verão no Brasil.', correct: true, feedback: 'Mandou bem — esclarece o calendário sul!' },
          { target: "I travel on January.",  native: '...',         correct: false, feedback: "Mês usa 'in', não 'on'." },
          { target: "I travel January summer.", native: '...',      correct: false, feedback: "Faltou estrutura — use 'in January'." },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Você explicou nosso calendário invertido.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'In March (em inglês)', correct: ['In March', 'in March'] },
      { prompt: 'Summer (em inglês)', correct: ['Summer', 'summer'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês: o mês do seu aniversário, o mês atual, e qual estação é agora no Brasil.",
    rwenSignoff: "Amanhã — dinheiro.",
  },

  phase8: {
    scenario: "Talking with an American coworker about Brazilian seasons — explaining your weather, summer holidays.",
    rwenRole: "Curious American colleague who's never been to Brazil.",
    successCriteria: "User uses 'in [Month]' and 'in summer/winter', and clarifies seasonal flip ('our summer is December').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
