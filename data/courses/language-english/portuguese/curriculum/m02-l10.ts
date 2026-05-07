import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival in conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Olá! Você terminou o Módulo 2 — kit de sobrevivência em inglês. Hoje juntamos tudo: 'Excuse me', 'Please', 'I don't understand', 'Where is...?', 'Thank you'. Uma sequência só, um objetivo: resolver um problema em inglês.",
    culturalNote: "No Brasil a gente abre conversa com calor — 'Oi, tudo bem?', 'Eita, deixa eu te perguntar...'. Em inglês, especialmente em situação de aperto, vai mais direto: 'Excuse me, can you help?'. O calor cabe no sorriso e no tom — não nas palavras a mais. Eficiência também é gentileza.",
  },

  chunks: [
    {
      id: 'review_excuse_help',
      target: 'Excuse me, can you help me?',
      native: 'Com licença, você pode me ajudar?',
      literal: 'Excuse me, can you help me?',
      emoji: '🙋',
      phonetic: 'eks-KYOOZ-mee-KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'review_dont_understand',
      target: "I don't understand. Slowly, please.",
      native: 'Não entendi. Devagar, por favor.',
      literal: "I don't understand. Slowly, please.",
      emoji: '🤷',
      phonetic: 'ay-DOHNT-un-der-STAND-SLOH-lee-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_thank_you_lots',
      target: 'Thank you so much for your help.',
      native: 'Muito obrigado pela sua ajuda.',
      literal: 'Thank you so much for your help.',
      emoji: '🙏',
      phonetic: 'THANK-yoo-soh-MUCH-for-yor-HELP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full survival flow',
    explanation: "Conversa de sobrevivência tem 3 partes: (1) ABRIR — 'Excuse me' + pedido (Can you help me? / Where is...? / How much?). (2) CONSERTAR — quando travar, 'I don't understand. Slowly, please.'. (3) FECHAR — 'Thank you so much.'. Esse fluxo te tira de qualquer apuro.",
    examples: [
      { target: "Excuse me, where is the bathroom?",                    native: 'Com licença, onde fica o banheiro?' },
      { target: "Sorry, I don't understand. Can you repeat slowly?",   native: 'Desculpa, não entendi. Pode repetir devagar?' },
      { target: 'Thank you so much for your help.',                      native: 'Muito obrigado pela sua ajuda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os blocos da conversa de sobrevivência',
      pairs: [
        { left: 'Excuse me...',          right: 'Como você abre' },
        { left: "I don't understand",   right: 'Quando trava' },
        { left: 'Thank you so much',     right: 'Como você fecha' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — abrindo a conversa',
      prompt: 'Com licença, você pode me ajudar?',
      correct: [
        'Excuse me, can you help me?',
        'Excuse me can you help me?',
        'Excuse me, can you help me',
        'excuse me, can you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você não entendeu',
      prompt: 'Não entendi. Repete devagar, por favor.',
      correct: [
        "I don't understand. Repeat slowly, please.",
        "I don't understand. Please repeat slowly.",
        "I don't understand. Repeat slowly please.",
        "i don't understand. repeat slowly, please.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte o agradecimento',
      words: ['so', 'Thank', 'much', 'you'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Muito obrigado',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — perguntando o preço',
      sentence: '____ much is this, please?',
      options: ['How', 'Where', 'What'],
      correct: 'How',
      context: "Pergunta de preço começa com 'How much'.",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Muito obrigado pela ajuda',
      correct: [
        'Thank you so much for your help',
        'Thank you so much for your help.',
        'Thanks a lot for your help',
        'Thank you for all your help',
        'thank you so much for your help.',
      ],
    },
  ],

  rwenDialogue: {
    intro: "Primeiro dia em Londres pra uma reunião. Celular descarregou, perdeu o endereço do hotel. Encontre alguém na rua e resolve o problema em inglês.",
    lines: [
      { speaker: 'npc', target: "Hi, you alright?", native: 'Oi, tá tudo bem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me, please?", native: "Com licença, estou perdido. Você pode me ajudar, por favor?", correct: true,  feedback: 'Mandou bem — abertura completa, pedido claro.' },
          { target: 'Lost.',                                            native: 'Perdido.',                                                       correct: false, feedback: "Curto demais — frase completa." },
          { target: "Yes, hello.",                                       native: 'Sim, olá.',                                                      correct: false, feedback: "Não respondeu o que ele perguntou e não pediu ajuda." },
        ],
      },
      { speaker: 'npc', target: "Sure — where are you trying to get to? The tube's that way.", native: 'Claro — pra onde você quer ir? O metrô é por ali.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, I don't understand. Slowly, please?", native: "Desculpa, não entendi. Devagar, por favor?", correct: true,  feedback: 'Mandou bem — pediu pra repetir devagar.' },
          { target: 'Yes.',                                          native: 'Sim.',                                          correct: false, feedback: "Não disse 'Yes' sem entender — fala que não entendeu." },
          { target: 'Thank you, goodbye.',                            native: 'Obrigado, tchau.',                              correct: false, feedback: 'Você ainda tá perdido — não vá embora.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você fechou o Módulo 2 — abre, conserta, agradece. Survival kit completo em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Excuse me, can you help me? (em inglês)',     correct: ['Excuse me, can you help me?', 'Excuse me can you help me?', 'Excuse me, can you help me', 'excuse me, can you help me?'] },
      { prompt: "I don't understand. Slowly, please. (em inglês)", correct: ["I don't understand. Slowly, please.", "I don't understand. Slowly please.", "I don't understand. Please, slowly.", "I do not understand. Slowly, please."] },
    ],
  },

  mission: {
    title: 'Missão de hoje — Conversa de sobrevivência',
    task: "Hoje, imagine um problema (perdido, banheiro, comprar algo) em inglês. Faça a conversa toda em voz alta — abre, conserta, agradece. Sem olhar.",
    rwenSignoff: "Você fechou o Módulo 2 — agora sobrevive em inglês. Te vejo no Módulo 3.",
  },

  phase8: {
    scenario: "You're in central London on day one of a work trip. Your phone is dead, you've lost your hotel address, and you have a meeting in 30 minutes. Approach a stranger, explain the problem, get directions, deal with not understanding the first reply, and thank them properly.",
    rwenRole: "Olu, 35, a Londoner walking to work. Friendly but in a slight hurry. Speaks fast British English with a London accent. Will help if you're clear, will get impatient if you're not.",
    successCriteria: "Full survival flow: opens with 'Excuse me' + 'Can you help me?' / 'I'm lost', uses 'I don't understand' / 'Slowly, please' when needed, asks 'Where is...?' for the destination, closes with 'Thank you so much'. Combines chunks from Module 2 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
