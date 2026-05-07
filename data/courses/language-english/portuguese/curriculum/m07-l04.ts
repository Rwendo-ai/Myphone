import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Ordering food — Pedindo comida',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pra pedir comida, use 'I'd like...' ou 'Could I have...?' — não 'I want...' (soa rude). E pra ajustar: 'without onions'.",
    culturalNote: "No Brasil 'pode tirar a cebola?' rola sem rodeios. Em inglês 'could I have it without onions, please?' — 'could' suaviza tudo. 'I want' soa imperativo; 'I'd like' é o padrão educado.",
  },

  chunks: [
    {
      id: 'id_like',
      target: "I'd like...",
      native: 'Eu queria...',
      literal: 'I would like...',
      emoji: '👉',
      phonetic: 'ayd-LAYK',
      audioRef: null,
    },
    {
      id: 'could_i_have',
      target: 'Could I have...',
      native: 'Posso pedir...',
      literal: 'Could I have...',
      emoji: '🤲',
      phonetic: 'kud-ay-HAV',
      audioRef: null,
    },
    {
      id: 'without_onions',
      target: 'Without onions',
      native: 'Sem cebola',
      literal: 'Without onions',
      emoji: '🚫',
      phonetic: 'with-OWT-UN-yuns',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — would/could',
    explanation: "Restaurante: 'I want' fica forte demais. 'I'd like...' ou 'Could I have...?' são padrão. Pra modificar: 'without ___' (sem ___).",
    examples: [
      { target: "I'd like the chicken, please.",            native: 'Queria o frango, por favor.' },
      { target: 'Could I have it without onions?',          native: 'Posso pedir sem cebola?' },
      { target: "I'd like the rice, no chilli, please.",    native: 'Queria o arroz, sem pimenta.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os pedidos',
      pairs: [
        { left: "I'd like...", right: 'Eu queria...' },
        { left: 'Could I have...', right: 'Posso pedir...' },
        { left: 'Without onions', right: 'Sem cebola' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Queria o frango, por favor',
      correct: ["I'd like the chicken, please", "I would like the chicken, please", "I'd like the chicken please"],
    },
    {
      type: 'fill_blank',
      instruction: 'Pedindo educado',
      sentence: "_____ I have the rice, please?",
      options: ['Could', 'Want', 'Are'],
      correct: 'Could',
      context: "'Could I have...' é o padrão educado.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Without onions, please"',
      words: ['please.', 'onions,', 'Without'],
      correct: ['Without', 'onions,', 'please.'],
      translation: 'Sem cebola, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Posso pedir o peixe sem pimenta?',
      correct: ['Could I have the fish without chilli?', 'Could I have the fish without chilli', 'Can I have the fish without chilli?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Mais educado',
      question: 'Qual frase é a mais educada num restaurante?',
      options: [
        { text: "I'd like the salad, please.", correct: true },
        { text: "I want salad.", correct: false },
        { text: "Give me salad.", correct: false },
      ],
      explanation: "'I'd like' é o registro padrão de restaurante.",
    },
  ],

  rwenDialogue: {
    intro: 'Restaurante vegetariano em SP, garçom americano que escuta tudo.',
    lines: [
      { speaker: 'npc', target: "Are you ready to order?", native: 'Tá pronto pra pedir?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — I'd like the pasta, without cheese, please.", native: 'Sim — queria a massa, sem queijo, por favor.', correct: true, feedback: 'Mandou bem — pedido educado e ajuste claro.' },
          { target: "I want pasta no cheese.", native: '...', correct: false, feedback: "Use 'I'd like'." },
          { target: "Pasta sem queijo.", native: '...', correct: false, feedback: 'Português — traduza.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! "Without cheese" — modificação fluida.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'd like... (em inglês)", correct: ["I'd like", "I would like", "i'd like"] },
      { prompt: 'Without onions (em inglês)', correct: ['Without onions', 'without onions'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica em voz alta um pedido completo: 'I'd like the ___, without ___, please.'",
    rwenSignoff: "Amanhã — gostos.",
  },

  phase8: {
    scenario: "Vegetarian restaurant in SP. Order food with at least one modification.",
    rwenRole: "Patient English-speaking server.",
    successCriteria: "User uses 'I'd like' or 'Could I have', adds 'without ___' for one item, says 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
