import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Money — How much is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pra falar de preço: 'How much?', 'It costs $20', 'It's expensive'. Frases que salvam você em qualquer balcão.",
    culturalNote: "No Brasil pechinchar é cultura — feirinha, carro, móveis. Em inglês mesma lógica funciona, mas com mais leveza: 'Can you do cheaper?', 'Any chance of a discount?'. Em supermercado e shopping, preço é fixo — nada de pechincha.",
  },

  chunks: [
    {
      id: 'how_much_cost',
      target: 'How much does it cost?',
      native: 'Quanto custa?',
      literal: 'How much does it cost?',
      emoji: '💰',
      phonetic: 'how-MUCH-duz-it-kost',
      audioRef: null,
    },
    {
      id: 'it_costs',
      target: 'It costs twenty dollars',
      native: 'Custa vinte dólares',
      literal: 'It costs twenty dollars',
      emoji: '💵',
      phonetic: 'it-KOSTS-TWEN-tee-DOL-arz',
      audioRef: null,
    },
    {
      id: 'expensive_cheap',
      target: "It's expensive / It's cheap",
      native: 'Tá caro / Tá barato',
      literal: "It is expensive / It is cheap",
      emoji: '💸',
      phonetic: "its-eks-PEN-siv / its-CHEEP",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Price questions and answers',
    explanation: "Pergunta: 'How much?' (curta) ou 'How much does it cost?'. Resposta: 'It's twenty dollars' ou 'It costs twenty dollars'. Pra negociar: 'It's too expensive', 'Can you do cheaper?', 'Any discount?'.",
    examples: [
      { target: "How much is this?",          native: 'Quanto custa isto?' },
      { target: "It's twenty dollars.",        native: 'Custa vinte dólares.' },
      { target: "It's too expensive for me.",  native: 'Tá caro pra mim.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões',
      pairs: [
        { left: 'How much?',       right: 'Quanto custa?' },
        { left: "It's expensive",   right: 'Tá caro' },
        { left: 'Twenty dollars',   right: 'Vinte dólares' },
        { left: 'Cheaper, please',  right: 'Mais barato, por favor' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — perguntando preço',
      prompt: 'Quanto custa?',
      correct: ['How much?', 'How much is it?', 'how much?', 'How much does it cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pedindo desconto',
      sentence: "Can you do ____?",
      options: ['cheaper', 'cheapest', 'cheap'],
      correct: 'cheaper',
      context: "'Cheaper' = mais barato.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It costs fifty reais"',
      words: ['reais.', 'It', 'fifty', 'costs'],
      correct: ['It', 'costs', 'fifty', 'reais.'],
      translation: 'Custa cinquenta reais',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tá barato',
      correct: ["It's cheap", "It is cheap", "it's cheap"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pechinchando',
      question: 'Você quer desconto numa peça de artesanato:',
      options: [
        { text: "It's a bit expensive — any chance of a discount?", correct: true },
        { text: "Cheap please.", correct: false },
        { text: "I no pay this much.", correct: false },
      ],
      explanation: "'A bit expensive' suaviza, 'any chance of a discount' é educado e direto.",
    },
  ],

  rwenDialogue: {
    intro: 'Feirinha de artesanato em Olinda. Você gosta duma peça e quer pechinchar.',
    lines: [
      { speaker: 'npc', target: "Lovely piece — fifty dollars.", native: 'Peça linda — cinquenta dólares.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's a bit expensive for me. Any chance of a discount?", native: 'Tá um pouco caro pra mim. Tem desconto?', correct: true, feedback: 'Mandou bem — pechincha educada.' },
          { target: "Cheap, please.",  native: 'Barato, por favor.',          correct: false, feedback: 'Frase quebrada.' },
          { target: "I want fifty.",    native: 'Quero cinquenta.',            correct: false, feedback: 'Confuso — esse é o preço dele.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Pechincha brasileira virou inglês fluente.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'How much? (em inglês)', correct: ['How much?', 'How much', 'how much?'] },
      { prompt: "It's expensive (em inglês)", correct: ["It's expensive", "It is expensive", "it's expensive"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pergunta o preço de algo em inglês — em voz alta. Aí responde com 'It's expensive' ou 'It's cheap'.",
    rwenSignoff: "Amanhã — números no shopping.",
  },

  phase8: {
    scenario: "Crafts market in Olinda — pechinchando uma peça com vendedor que fala inglês.",
    rwenRole: "Friendly seller open to negotiation.",
    successCriteria: "User asks the price, says 'it's too expensive' or 'a bit expensive', requests a discount.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
