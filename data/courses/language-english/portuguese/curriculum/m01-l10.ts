import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Hoje a gente costura tudo do Módulo 1 — do 'Hello' até o 'Goodbye'. Uma conversa de apresentação inteira, em inglês.",
    culturalNote: "No Brasil a primeira conversa pode durar uma hora — você conhece a família inteira da pessoa antes de saber o sobrenome dela. Em inglês a primeira conversa é mais econômica: nome, origem, talvez o que faz, despedida cordial. O calor brasileiro pode aparecer nos detalhes (sorriso, tom de voz) — mas a estrutura é mais enxuta.",
  },

  chunks: [
    {
      id: 'review_hello_intro',
      target: 'Hello, my name is ...',
      native: 'Olá, meu nome é...',
      literal: 'Hello, my name is...',
      emoji: '👋',
      phonetic: 'heh-LOH-may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'review_where_from',
      target: "I'm from Brazil",
      native: 'Eu sou do Brasil',
      literal: 'I-am from Brazil',
      emoji: '🌍',
      phonetic: 'aym-FROM-bra-ZEEL',
      audioRef: null,
    },
    {
      id: 'review_goodbye_full',
      target: 'Goodbye, take care',
      native: 'Tchau, se cuida',
      literal: 'Goodbye, take care',
      emoji: '🤝',
      phonetic: 'good-BAI-tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full greeting flow',
    explanation: "Uma conversa de apresentação completa tem 3 partes: (1) Saudação — 'Hello' ou 'Good morning'. (2) Apresentação — 'My name is ...' e 'I'm from ...'. (3) Despedida — 'Goodbye' e 'Take care'. Quando você consegue fazer tudo sem pensar, começou pra valer.",
    examples: [
      { target: "Hello, my name is Camila. I'm from São Paulo.", native: 'Olá, meu nome é Camila. Sou de São Paulo.' },
      { target: "How are you? I'm fine, thanks.",                  native: 'Como você está? Estou bem, obrigado.' },
      { target: 'Nice to meet you. Goodbye!',                       native: 'Prazer em conhecer. Tchau!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os pares de uma conversa',
      pairs: [
        { left: 'Hello, how are you?', right: "I'm fine, thanks" },
        { left: "What's your name?",   right: 'My name is Camila' },
        { left: 'Goodbye!',            right: 'See you tomorrow' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — apresentação completa',
      prompt: 'Olá, meu nome é Camila. Sou de São Paulo.',
      correct: [
        "Hello, my name is Camila. I'm from São Paulo.",
        "hello, my name is Camila. I'm from São Paulo.",
        "Hello, my name is Camila. I'm from São Paulo",
        "Hello my name is Camila. I'm from São Paulo.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — resposta a "How are you?"',
      prompt: 'Estou bem, obrigado',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine, thank you", "i'm fine thanks"],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte uma despedida completa',
      words: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      correct: ['Goodbye', 'see', 'you', 'tomorrow', 'take', 'care'],
      translation: 'Tchau, até amanhã, se cuida',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a apresentação',
      sentence: "Hello, my ____ is Camila.",
      options: ['name', 'home', 'day'],
      correct: 'name',
      context: 'Respondendo "What\'s your name?".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tchau, se cuida',
      correct: ['Goodbye, take care', 'goodbye, take care', 'Goodbye take care', 'Goodbye, take care.'],
    },
  ],

  rwenDialogue: {
    intro: 'Você tá no Largo da Carioca no Rio. Uma turista australiana se aproxima pra pedir uma indicação — só fala inglês.',
    lines: [
      { speaker: 'npc', target: "Hello! How are you?", native: 'Olá! Como você está?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm fine, thanks. My name is Camila. What's your name?", native: 'Estou bem, obrigado. Meu nome é Camila. Como você se chama?', correct: true,  feedback: "Mandou bem — respondeu, deu o nome e devolveu a pergunta. Conversa fluindo." },
          { target: 'Hi.',                                                       native: 'Oi.',                                                            correct: false, feedback: "Curto demais pra primeira conversa — adicione nome e devolva a pergunta." },
          { target: "Where are you from?",                                       native: 'De onde você é?',                                                correct: false, feedback: "Não respondeu o que ela perguntou — primeiro responda, depois pergunte." },
        ],
      },
      { speaker: 'npc', target: "I'm Sarah, from Sydney. Nice to meet you, Camila. Goodbye!", native: 'Sou Sarah, de Sydney. Prazer em conhecer, Camila. Tchau!' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você fechou o Módulo 1 — agora consegue abrir, conduzir e fechar uma conversa em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva a conversa completa de memória.',
    prompts: [
      { prompt: "Hello, my name is Camila. I'm from São Paulo. (em inglês)", correct: [
        "Hello, my name is Camila. I'm from São Paulo.",
        "Hello, my name is Camila. I'm from São Paulo",
        "Hello my name is Camila. I'm from São Paulo.",
      ] },
      { prompt: "Nice to meet you. Goodbye! (em inglês)", correct: [
        'Nice to meet you. Goodbye!',
        'Nice to meet you. Goodbye',
        'Nice to meet you. Goodbye.',
        'nice to meet you. goodbye!',
      ] },
    ],
  },

  mission: {
    title: 'Missão de hoje — Conversa completa',
    task: "Hoje, tente fazer uma conversa de apresentação completa em inglês — do 'Hello' ao 'Goodbye'. Inclua nome, origem, e despedida com 'Take care'.",
    rwenSignoff: "Você terminou o Módulo 1 — começou a viagem. Vejo você no Módulo 2.",
  },

  phase8: {
    scenario: "You're walking through Rio's Largo da Carioca and a friendly Australian tourist who's clearly lost stops you. They speak only English. Have a complete first-meeting conversation: greet, exchange names, ask where they're from, and part warmly.",
    rwenRole: "Emma, 28, an Australian tourist on her first day in Brazil. Curious, polite, a bit jet-lagged. Speaks clear, friendly English.",
    successCriteria: "User runs the full flow: opens with a greeting (Hello / Good afternoon), exchanges names ('My name is...' / 'What's your name?'), asks 'Where are you from?', and closes with 'Goodbye' or 'Take care'. All chunks from Module 1 used naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
