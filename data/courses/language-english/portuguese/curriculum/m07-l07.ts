import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Tea, coffee, drinks — Chá, café, bebidas',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Chá com leite, café puro, copo de água. Pedidos do dia a dia em inglês.",
    culturalNote: "No Reino Unido, chá é cultura — vão te perguntar 'How do you take it?' (com leite? açúcar?). No Brasil 'café' geralmente já vem com leite ou açúcar à parte. Em país anglófono, 'black coffee' = café puro; 'white coffee' = com leite.",
  },

  chunks: [
    {
      id: 'tea_with_milk',
      target: 'Tea with milk',
      native: 'Chá com leite',
      literal: 'Tea with milk',
      emoji: '🍵',
      phonetic: 'TEE-with-MILK',
      audioRef: null,
    },
    {
      id: 'black_coffee',
      target: 'Black coffee',
      native: 'Café puro',
      literal: 'Black coffee (no milk)',
      emoji: '☕',
      phonetic: 'BLAK-KOF-ee',
      audioRef: null,
    },
    {
      id: 'glass_of_water',
      target: 'A glass of water',
      native: 'Um copo de água',
      literal: 'A glass of water',
      emoji: '🥛',
      phonetic: 'a-GLAS-of-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Drinks — "with" and "of"',
    explanation: "Duas estruturas: 'with/without' (com/sem) — 'tea with milk', 'coffee without sugar'. E 'a ___ of ___' — 'a glass of water', 'a cup of tea', 'a bottle of beer'.",
    examples: [
      { target: 'Tea with milk, no sugar, please.',  native: 'Chá com leite, sem açúcar, por favor.' },
      { target: 'A cup of coffee, please.',           native: 'Um café, por favor.' },
      { target: 'A bottle of water.',                  native: 'Uma garrafa de água.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine bebidas',
      pairs: [
        { left: 'Tea with milk', right: 'Chá com leite' },
        { left: 'Black coffee', right: 'Café puro' },
        { left: 'A glass of water', right: 'Um copo de água' },
        { left: 'A bottle of beer', right: 'Uma garrafa de cerveja' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Café com leite',
      correct: ['Coffee with milk', 'White coffee', 'coffee with milk'],
    },
    {
      type: 'fill_blank',
      instruction: 'Estrutura with/without',
      sentence: 'Tea ____ milk, please.',
      options: ['with', 'in', 'and'],
      correct: 'with',
      context: "'Tea with milk' = chá com leite.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "A glass of water, please"',
      words: ['please.', 'water,', 'A', 'of', 'glass'],
      correct: ['A', 'glass', 'of', 'water,', 'please.'],
      translation: 'Um copo de água, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Café sem açúcar, por favor',
      correct: ['Coffee without sugar, please', 'Coffee, no sugar, please', 'coffee without sugar, please'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Como pedir café puro?',
      question: 'Café sem leite, sem açúcar:',
      options: [
        { text: 'A black coffee, please.', correct: true },
        { text: 'A coffee black, please.', correct: false },
        { text: 'Pure coffee.', correct: false },
      ],
      explanation: "'Black coffee' = café puro.",
    },
  ],

  rwenDialogue: {
    intro: 'Café da manhã num bistrô em SP, atendente inglesa.',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: 'O que posso trazer?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A coffee with milk, no sugar, and a glass of water, please.", native: 'Um café com leite, sem açúcar, e um copo de água, por favor.', correct: true, feedback: 'Mandou bem — pedido detalhado.' },
          { target: "Coffee water.", native: '...', correct: false, feedback: 'Adicione "a", "with milk", etc.' },
          { target: "Black coffee with milk.", native: '...', correct: false, feedback: 'Contraditório — black coffee NÃO tem leite.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Pedido completo.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Tea with milk (em inglês)', correct: ['Tea with milk', 'tea with milk'] },
      { prompt: 'A glass of water (em inglês)', correct: ['A glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pede em voz alta seu café da manhã ideal em inglês — bebida + comida.",
    rwenSignoff: "Amanhã — comida brasileira em inglês.",
  },

  phase8: {
    scenario: "Bistro breakfast in São Paulo with English-speaking server.",
    rwenRole: "Polite English server.",
    successCriteria: "User orders one drink with 'with/without' modifier and one drink with 'a ___ of ___'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
