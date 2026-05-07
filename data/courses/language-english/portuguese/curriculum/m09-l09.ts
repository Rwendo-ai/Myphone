import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Asking for help while travelling — Pedindo ajuda em viagem',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pedindo ajuda em país estrangeiro: 'Could you help me?', 'I don't know this area', 'Could you write it down?'.",
    culturalNote: "'Could you' soa mais educado que 'Can you' em pedidos. E 'Could you write it down?' funciona muito bem com nomes de rua complicados — você nem sempre escuta direito o nome de bairro estrangeiro.",
  },

  chunks: [
    {
      id: 'could_you_help_me',
      target: 'Could you help me?',
      native: 'Você poderia me ajudar?',
      literal: 'Could you help me?',
      emoji: '🙏',
      phonetic: 'KOOD-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_dont_know_area',
      target: "I don't know this area.",
      native: 'Não conheço essa região.',
      literal: 'I do-not know this area.',
      emoji: '🗺️',
      phonetic: 'ay-DOHNT-NOH-this-AIR-ee-uh',
      audioRef: null,
    },
    {
      id: 'could_you_write_it_down',
      target: 'Could you write it down?',
      native: 'Você poderia escrever pra mim?',
      literal: 'Could you write it down?',
      emoji: '📝',
      phonetic: 'KOOD-yoo-RYT-it-DOWN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite help requests',
    explanation: "'Could you ___?' é o padrão educado: 'Could you help me?', 'Could you repeat that?', 'Could you write it down?', 'Could you speak slower?'.",
    examples: [
      { target: 'Could you help me, please?',           native: 'Você poderia me ajudar?' },
      { target: 'Could you repeat that?',                native: 'Pode repetir?' },
      { target: "Could you write it down?",               native: 'Pode escrever?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine pedidos educados',
      pairs: [
        { left: 'Could you help me?', right: 'Pode me ajudar?' },
        { left: 'Could you repeat?', right: 'Pode repetir?' },
        { left: 'Could you write it down?', right: 'Pode escrever?' },
        { left: 'Could you speak slower?', right: 'Pode falar mais devagar?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Você poderia escrever pra mim?',
      correct: ['Could you write it down?', 'Could you write it down', 'could you write it down?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Educado',
      sentence: '_____ you help me, please?',
      options: ['Could', 'Want', 'Will'],
      correct: 'Could',
      context: '"Could you" é o padrão educado.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I don't know this area\"",
      words: ['area.', 'know', 'this', "I don't"],
      correct: ["I don't", 'know', 'this', 'area.'],
      translation: 'Não conheço essa região',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Pode falar mais devagar?',
      correct: ['Could you speak slower?', 'Could you speak more slowly?', 'Could you speak slower'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Educado',
      question: 'Pra pedir ajuda na rua:',
      options: [
        { text: 'Excuse me, could you help me? I don\'t know this area.', correct: true },
        { text: 'Help. No know area.', correct: false },
        { text: 'Where is here.', correct: false },
      ],
      explanation: '"Excuse me + could you" é a fórmula clássica.',
    },
  ],

  rwenDialogue: {
    intro: 'Você procura um restaurante específico em Nova York.',
    lines: [
      { speaker: 'npc', target: "Need help?", native: 'Precisa de ajuda?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — I'm looking for Sullivan Street Bakery. Could you write down the directions?", native: 'Sim — procuro a Sullivan Street Bakery. Pode escrever as direções?', correct: true, feedback: 'Mandou bem — pedido completo e claro.' },
          { target: "Bakery write me.", native: '...', correct: false, feedback: 'Estrutura quebrada.' },
          { target: "Pode escrever?", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Could you help me? (em inglês)', correct: ['Could you help me?', 'could you help me?'] },
      { prompt: 'Could you write it down? (em inglês)', correct: ['Could you write it down?', 'could you write it down?'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica em voz alta três pedidos com 'Could you ___?' — help, repeat, write down.",
    rwenSignoff: "Amanhã — capstone de viagem.",
  },

  phase8: {
    scenario: "Asking a New Yorker for directions to a specific bakery — politely.",
    rwenRole: "Helpful local who'll write directions if asked.",
    successCriteria: "User uses 'Could you' twice (one for help, one for writing down or repeating).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
