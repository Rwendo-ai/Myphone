import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-restaurant',
  module: 7,
  lesson: 3,
  title: 'At a restaurant — No restaurante',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Restaurante em inglês: 'A table for two', 'The menu, please', 'The bill, please'. Frases que cobrem entrada, pedido e saída.",
    culturalNote: "Nos EUA, 'check' substitui 'bill' — 'Could we have the check?'. Na UK, 'bill' é padrão. Gorjeta: nos EUA 18-20% é regra; na UK frequentemente já vem incluído (12.5%). No Brasil os 10% são opcionais — adapte.",
  },

  chunks: [
    {
      id: 'table_for_two',
      target: 'A table for two',
      native: 'Uma mesa para dois',
      literal: 'A table for two (people)',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO',
      audioRef: null,
    },
    {
      id: 'menu_please',
      target: 'The menu, please',
      native: 'O cardápio, por favor',
      literal: 'The menu, please',
      emoji: '📋',
      phonetic: 'thuh-MEN-yoo-PLEEZ',
      audioRef: null,
    },
    {
      id: 'the_bill',
      target: 'The bill, please',
      native: 'A conta, por favor',
      literal: 'The bill, please',
      emoji: '🧾',
      phonetic: 'thuh-BILL-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Restaurant arc — arrival → eating → leaving',
    explanation: "Três fases: entrar ('A table for two'), pedir ('The menu, please'), pagar ('The bill/check, please').",
    examples: [
      { target: 'A table for two, please.',  native: 'Mesa pra dois, por favor.' },
      { target: 'Could we have the menu?',   native: 'A gente pode ter o cardápio?' },
      { target: 'Could we have the bill?',   native: 'A gente pode ter a conta?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as fases',
      pairs: [
        { left: 'A table for two', right: 'Mesa pra dois' },
        { left: 'The menu, please', right: 'O cardápio' },
        { left: 'The bill, please', right: 'A conta' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'A conta, por favor',
      correct: ['The bill, please', 'The check, please', 'the bill, please'],
    },
    {
      type: 'fill_blank',
      instruction: 'Entrando no restaurante',
      sentence: "A _____ for two, please.",
      options: ['table', 'chair', 'menu'],
      correct: 'table',
      context: "Pede mesa.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Could we have the bill?"',
      words: ['bill?', 'we', 'have', 'the', 'Could'],
      correct: ['Could', 'we', 'have', 'the', 'bill?'],
      translation: 'Pode trazer a conta?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'O cardápio, por favor',
      correct: ['The menu, please', 'the menu, please', 'The menu please'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Restaurante nos EUA',
      question: 'Como pedir conta nos EUA?',
      options: [
        { text: "Could we have the check?", correct: true },
        { text: "Bill please bring.", correct: false },
        { text: "Pay we want.", correct: false },
      ],
      explanation: 'Nos EUA usa "check"; UK usa "bill".',
    },
  ],

  rwenDialogue: {
    intro: 'Bistrô em SP que atende muitos turistas. Sextou.',
    lines: [
      { speaker: 'npc', target: "Hi! How many?", native: 'Oi! Quantas pessoas?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please.", native: 'Mesa para dois, por favor.', correct: true, feedback: 'Mandou bem.' },
          { target: "Two please.", native: 'Dois.', correct: false, feedback: 'Adicione "A table for two".' },
          { target: "Mesa pra dois.", native: '...', correct: false, feedback: 'Em português — traduza.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Restaurante aberto.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'A table for two (em inglês)', correct: ['A table for two', 'a table for two'] },
      { prompt: 'The bill, please (em inglês)', correct: ['The bill, please', 'the bill, please', 'The check, please'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diz em voz alta: 'A table for two', 'The menu, please', 'The bill, please'. Três frases que sobrevivem.",
    rwenSignoff: "Amanhã — pedir comida.",
  },

  phase8: {
    scenario: "Bistro in São Paulo, English-speaking host. Get seated, ask for menu, ask for bill.",
    rwenRole: "Polite host running the floor.",
    successCriteria: "User uses all three phrases (table for X, menu, bill) in the right sequence.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
