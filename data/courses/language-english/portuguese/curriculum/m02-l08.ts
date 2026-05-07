import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — Quanto custa?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Em mercados, lojas e feirinhas, a pergunta-chave é 'How much?'. Adicione 'It's expensive' ou 'It's cheap' pra entrar na pechincha.",
    culturalNote: "Pechincha é arte brasileira — feira da Glória, Mercadão, 25 de Março, todo mundo faz. Em inglês também rola, mas com mais frieza: 'It's a bit expensive' soa mais educado que 'It's expensive' direto. Sorrir, claro, ajuda — o calor brasileiro funciona em qualquer língua.",
  },

  chunks: [
    {
      id: 'how_much',
      target: 'How much?',
      native: 'Quanto custa?',
      literal: 'How much?',
      emoji: '💰',
      phonetic: 'HOW-much',
      audioRef: null,
    },
    {
      id: 'its_expensive',
      target: "It's expensive",
      native: 'Tá caro',
      literal: 'It-is expensive',
      emoji: '💸',
      phonetic: 'its-eks-PEN-siv',
      audioRef: null,
    },
    {
      id: 'its_cheap',
      target: "It's cheap",
      native: 'Tá barato',
      literal: 'It-is cheap',
      emoji: '🪙',
      phonetic: 'its-CHEEP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Currency questions',
    explanation: "'How much' pergunta o preço. A resposta vem completa: 'It's twenty dollars' ou 'It costs ten reais'. Pra negociar, use 'It's too expensive' ou 'Can you do cheaper?'.",
    examples: [
      { target: 'How much is this?',          native: 'Quanto custa isto?' },
      { target: 'How much does it cost?',     native: 'Quanto custa?' },
      { target: "It's too expensive for me.", native: 'Tá caro pra mim.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões',
      pairs: [
        { left: 'How much?',     right: 'Quanto custa?' },
        { left: "It's expensive", right: 'Tá caro' },
        { left: "It's cheap",     right: 'Tá barato' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você pegou um item numa loja',
      prompt: 'Quanto custa isto?',
      correct: ['How much is this?', 'How much is this', 'how much is this?', 'How much is it?', 'How much does this cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — você quer pechinchar',
      sentence: "It's ____ expensive.",
      options: ['too', 'very much', 'so'],
      correct: 'too',
      context: "'Too expensive' = caro demais. Forma padrão pra pedir desconto.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta de preço',
      words: ['this', 'How', 'is', 'much'],
      correct: ['How', 'much', 'is', 'this'],
      translation: 'Quanto custa isto?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tá caro pra mim',
      correct: ["It's too expensive for me", "It's too expensive for me.", "It is too expensive for me", "Too expensive for me", "it's too expensive for me"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — pedindo desconto',
      prompt: 'Você pode fazer mais barato?',
      correct: ['Can you make it cheaper?', 'Can you make it cheaper', 'can you make it cheaper?', 'Can you do cheaper?', 'Cheaper, please?'],
    },
  ],

  rwenDialogue: {
    intro: "Você tá numa feirinha de artesanato em Olinda. Vê uma escultura linda. O turista do lado é vendedor americano há anos no Brasil — fala inglês. Negocia.",
    lines: [
      { speaker: 'npc', target: "Lovely piece, isn't it? Are you interested?", native: 'Peça linda, né? Tá interessado?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, how much is it?",   native: 'Sim, quanto custa?',          correct: true,  feedback: 'Mandou bem — confirmou interesse e perguntou o preço.' },
          { target: "Cheap?",                   native: 'Barato?',                     correct: false, feedback: 'Frase quebrada — pergunta o preço primeiro.' },
          { target: "I don't understand.",     native: 'Não entendo.',                correct: false, feedback: 'Você entendeu sim — responda e pergunte o preço.' },
        ],
      },
      { speaker: 'npc', target: "Forty US dollars.", native: 'Quarenta dólares americanos.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Agora pode soltar 'It's too expensive' pra começar a pechincha. Seu jeitinho funciona em inglês também.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'How much? (em inglês)',      correct: ['How much?', 'How much', 'how much?', 'How much is it?'] },
      { prompt: "It's expensive (em inglês)", correct: ["It's expensive", "It's expensive.", "It is expensive", "it's expensive"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pergunta o preço de algo hoje em inglês — num app, num site, ou na cabeça mesmo. Pratica 'How much?' e a resposta.",
    rwenSignoff: "Quem pergunta o preço não paga caro. Até amanhã.",
  },

  phase8: {
    scenario: "You're at a craft market in Olinda or Salvador. A gringo tourist approaches your friend's stall while you're tending it. Negotiate a sale: ask the price, push back if it's expensive, and either buy or walk away politely.",
    rwenRole: "James, 38, a stone sculptor and stall owner. Friendly, will start high, will negotiate. Speaks plain English.",
    successCriteria: "User asks 'How much is it?', uses 'It's too expensive' or 'Can you make it cheaper?' to negotiate, either accepts a price or politely declines ('Maybe later' / 'No, thank you'). Doesn't agree to the first price silently.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
