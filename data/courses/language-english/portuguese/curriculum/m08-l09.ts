import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Future tense — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Futuro: 'I will go' ou 'I'm going to go'. 'Will' pra decisão na hora; 'going to' pra plano já decidido.",
    culturalNote: "Em português 'vou viajar' (ir + infinitivo) é o futuro mais comum — equivalente do 'I'm going to'. Pra decisão de momento ('I'll get it'), 'will' encaixa melhor. Em conversa, 'I'll' (contração) é super comum.",
  },

  chunks: [
    {
      id: 'tomorrow_i_will',
      target: 'Tomorrow I will call you.',
      native: 'Amanhã eu te ligo.',
      literal: 'Tomorrow I will call you',
      emoji: '📞',
      phonetic: 'tu-MOR-oh-ay-WIL-KAWL-yoo',
      audioRef: null,
    },
    {
      id: 'im_going_to',
      target: "I'm going to study tonight.",
      native: 'Vou estudar hoje à noite.',
      literal: 'I am going to study tonight',
      emoji: '📚',
      phonetic: 'aym-GOH-ing-too-STUH-dee',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow!',
      native: 'Até amanhã!',
      literal: 'See you tomorrow',
      emoji: '👋',
      phonetic: 'SEE-yoo-tu-MOR-oh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple future — Will & going to',
    explanation: "WILL + verbo = decisão na hora ou futuro geral ('I'll get it'). GOING TO + verbo = plano já decidido ('I'm going to study tonight'). Contração: 'I will' → 'I'll'.",
    examples: [
      { target: 'Tomorrow I will call you.',         native: 'Amanhã te ligo.' },
      { target: "I'm going to study tonight.",        native: 'Vou estudar hoje à noite.' },
      { target: "I'll see you next week.",            native: 'Te vejo semana que vem.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine futuros',
      pairs: [
        { left: 'I will call', right: 'Eu vou ligar' },
        { left: "I'm going to study", right: 'Vou estudar' },
        { left: 'See you tomorrow', right: 'Até amanhã' },
        { left: "I'll be there", right: 'Estarei lá' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — plano',
      prompt: 'Vou estudar hoje à noite.',
      correct: ["I'm going to study tonight.", "I will study tonight.", "I'll study tonight."],
    },
    {
      type: 'fill_blank',
      instruction: 'Decisão na hora',
      sentence: "The phone is ringing — I _____ get it.",
      options: ["'ll", "'m going to", 'do'],
      correct: "'ll",
      context: 'Decisão imediata = will (I\'ll).',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Tomorrow I will call you"',
      words: ['you.', 'will', 'I', 'Tomorrow', 'call'],
      correct: ['Tomorrow', 'I', 'will', 'call', 'you.'],
      translation: 'Amanhã te ligo',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — plano firme',
      prompt: 'Vou viajar mês que vem.',
      correct: ["I'm going to travel next month.", "I will travel next month."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Decisão imediata',
      question: 'Telefone toca:',
      options: [
        { text: "I'll get it.", correct: true },
        { text: "I'm going to get it.", correct: false },
        { text: "I get it.", correct: false },
      ],
      explanation: 'Decisão na hora = will.',
    },
  ],

  rwenDialogue: {
    intro: 'Marcando próxima semana com colega americana.',
    lines: [
      { speaker: 'npc', target: "When are we meeting next week?", native: 'Quando a gente se vê semana que vem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll call you on Monday — I'm going to be free in the afternoon.", native: 'Te ligo segunda — vou estar livre à tarde.', correct: true, feedback: 'Mandou bem — will + going to.' },
          { target: "Monday I going call.", native: '...', correct: false, feedback: 'Estrutura quebrada.' },
          { target: "Te ligo segunda.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I will call you (em inglês)', correct: ['I will call you', "I'll call you"] },
      { prompt: "I'm going to study (em inglês)", correct: ["I'm going to study", "I am going to study"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês 3 planos pra próxima semana — uma com 'will', duas com 'going to'.",
    rwenSignoff: "Amanhã — capstone.",
  },

  phase8: {
    scenario: "Planning next week with English-speaking colleague.",
    rwenRole: "Coworker confirming schedule.",
    successCriteria: "User uses 'will/I'll' for one immediate decision and 'going to' for one planned activity.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
