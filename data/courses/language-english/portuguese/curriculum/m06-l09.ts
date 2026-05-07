import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Numbers in shopping — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Compras: 'Two for ten dollars', 'discount', 'total'. Vocabulário de loja e supermercado.",
    culturalNote: "No Brasil 'leve 3 pague 2' — em inglês 'three for the price of two' ou 'buy two get one free'. 'Total' = total. 'Subtotal' = subtotal. 'Tax' = imposto. Em loja americana, o preço de etiqueta NÃO inclui o sales tax — ele entra no caixa.",
  },

  chunks: [
    {
      id: 'two_for_ten',
      target: 'Two for ten dollars',
      native: 'Dois por dez dólares',
      literal: 'Two for ten dollars',
      emoji: '🛍️',
      phonetic: 'too-for-TEN-DOL-arz',
      audioRef: null,
    },
    {
      id: 'discount',
      target: 'Discount',
      native: 'Desconto',
      literal: 'Discount',
      emoji: '🏷️',
      phonetic: 'DIS-kownt',
      audioRef: null,
    },
    {
      id: 'total',
      target: 'Total / altogether',
      native: 'Total',
      literal: 'Total / altogether',
      emoji: '🧾',
      phonetic: 'TOH-tul / ahl-too-GEH-thur',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Shopping math phrases',
    explanation: "Preço a granel: 'X for Y dollars'. Pedir desconto: 'Is there a discount?', 'Can I get a discount?'. Pedir total: 'What's the total?', 'How much altogether?'.",
    examples: [
      { target: 'Three for fifteen dollars',     native: 'Três por quinze dólares' },
      { target: 'Is there a discount?',          native: 'Tem desconto?' },
      { target: "What's the total?",             native: 'Qual é o total?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Discount',          right: 'Desconto' },
        { left: 'Total',             right: 'Total' },
        { left: 'On sale',           right: 'Em promoção' },
        { left: 'Two for ten',       right: 'Dois por dez' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — pedindo o total',
      prompt: 'Qual o total?',
      correct: ["What's the total?", "What is the total?", "How much altogether?", "How much in total?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — preço a granel',
      sentence: 'Three ____ twenty dollars.',
      options: ['for', 'in', 'at'],
      correct: 'for',
      context: "'X for Y' = preço de X unidades.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Is there a discount today?"',
      words: ['today?', 'a', 'Is', 'there', 'discount'],
      correct: ['Is', 'there', 'a', 'discount', 'today?'],
      translation: 'Tem desconto hoje?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tá em promoção',
      correct: ["It's on sale", "It is on sale", "it's on sale"],
    },
    {
      type: 'multiple_choice',
      instruction: 'No caixa do supermercado',
      question: 'Qual frase pergunta o total?',
      options: [
        { text: "What's the total altogether?", correct: true },
        { text: "How much for total?", correct: false },
        { text: "Total is what?", correct: false },
      ],
      explanation: "'What's the total altogether?' soa natural.",
    },
  ],

  rwenDialogue: {
    intro: 'Caixa do supermercado em SP, atendente americana.',
    lines: [
      { speaker: 'npc', target: "Anything else?", native: 'Mais alguma coisa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "No, that's all. What's the total?", native: 'Não, é só isso. Qual o total?', correct: true, feedback: 'Mandou bem.' },
          { target: "Total what?", native: '...', correct: false, feedback: "Use 'What's the total?'." },
          { target: "How much money?", native: '...', correct: false, feedback: "Pergunta vaga — use 'total'." },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Discount (em inglês)', correct: ['Discount', 'discount'] },
      { prompt: "What's the total? (em inglês)", correct: ["What's the total?", "What is the total?", "what's the total?"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês: 'Two for ten dollars', 'Is there a discount?', 'What's the total?'.",
    rwenSignoff: "Amanhã — capstone.",
  },

  phase8: {
    scenario: "Supermarket checkout in São Paulo, English-speaking cashier.",
    rwenRole: "Polite cashier asking standard questions.",
    successCriteria: "User asks the total, asks about discount, understands a numeric reply.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
