import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-where-from',
  module: 1,
  lesson: 7,
  title: 'Where are you from? — De onde você é?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Em inglês, pra falar de lugar tem duas preposições essenciais: 'from' (de onde você veio) e 'in' (onde você mora agora). 'Where are you from?' = de onde você é. 'I live in...' = moro em.",
    culturalNote: "No Brasil 'sou de Salvador' e 'moro em Salvador' são naturalmente diferentes. Em inglês a separação é mais explícita: você pode ser 'from Recife' mas estar 'living in Lisbon'. A preposição muda — não é só ser ou estar (o velho dilema do BR-Eng).",
  },

  chunks: [
    {
      id: 'where_are_you_from',
      target: 'Where are you from?',
      native: 'De onde você é?',
      literal: 'Where are you from?',
      emoji: '🌍',
      phonetic: 'wair-ar-yoo-FROM',
      audioRef: null,
    },
    {
      id: 'im_from',
      target: "I'm from ...",
      native: 'Eu sou de...',
      literal: 'I-am from ...',
      emoji: '🏠',
      phonetic: 'aym-FROM',
      audioRef: null,
    },
    {
      id: 'i_live_in',
      target: 'I live in ...',
      native: 'Eu moro em...',
      literal: 'I-live in ...',
      emoji: '🏘️',
      phonetic: 'aye-LIV-in',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Prepositions from/in',
    explanation: "Duas preposições-chave: 'from' = de (origem). 'in' = em (localização atual). Frase típica: 'I'm from Rio, but I live in São Paulo' = 'Sou do Rio, mas moro em SP'. Repare: 'from' nunca é 'em'.",
    examples: [
      { target: "I'm from Brazil",     native: 'Eu sou do Brasil' },
      { target: 'I live in São Paulo', native: 'Eu moro em São Paulo' },
      { target: "I'm from a small town", native: 'Eu sou de uma cidade pequena' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: 'Where are you from?', right: 'De onde você é?' },
        { left: "I'm from ...",         right: 'Eu sou de...' },
        { left: 'I live in ...',        right: 'Eu moro em...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'De onde você é?',
      correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Eu sou do Brasil',
      correct: ["I'm from Brazil", "i'm from Brazil", 'I am from Brazil', 'i am from Brazil'],
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha as preposições certas',
      sentence: "I'm ____ Rio and I live ____ London.",
      options: ['from / in', 'in / from', 'from / from'],
      correct: 'from / in',
      context: "'from' = origem. 'in' = onde mora agora.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de localização',
      words: ['I', 'live', 'in', 'São Paulo'],
      correct: ['I', 'live', 'in', 'São Paulo'],
      translation: 'Eu moro em São Paulo',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ['Where', 'are', 'you', 'from'],
      correct: ['Where', 'are', 'you', 'from'],
      translation: 'De onde você é?',
    },
  ],

  rwenDialogue: {
    intro: 'Voo São Paulo–Lisboa. O passageiro inglês ao seu lado puxa papo uma hora depois da decolagem.',
    lines: [
      { speaker: 'npc', target: "Hi! Where are you from?", native: 'Oi! De onde você é?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm from Brazil. I live in São Paulo.", native: 'Sou do Brasil. Moro em São Paulo.', correct: true,  feedback: "Perfeito — 'from' pra origem, 'in' pra cidade onde mora." },
          { target: "I'm in Brazil.",                          native: 'Estou no Brasil.',                    correct: false, feedback: "Quando perguntam 'from', responda com 'I'm from' — não 'I'm in'." },
          { target: 'My name is Camila.',                      native: 'Meu nome é Camila.',                  correct: false, feedback: "Resposta errada — perguntaram a origem, não o nome." },
        ],
      },
      { speaker: 'npc', target: "Nice. I'm from London myself.", native: 'Que legal. Eu sou de Londres.' },
      {
        speaker: 'rwen',
        rwenLine: "Boa! Você abriu uma conversa boa — origem e cidade.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Where are you from? (em inglês)', correct: ['Where are you from?', 'where are you from?', 'Where are you from', 'where are you from'] },
      { prompt: "I'm from Brazil (em inglês)",      correct: ["I'm from Brazil", "i'm from Brazil", 'I am from Brazil', 'i am from Brazil'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Conta pra alguém em inglês de onde você é e onde mora: 'I'm from ... and I live in ...'.",
    rwenSignoff: "Take care. Até amanhã.",
  },

  phase8: {
    scenario: "You're on a flight from São Paulo to London. The English-speaking passenger next to you starts small talk an hour into the flight.",
    rwenRole: "Mrs Patel, 60, a London-based grandmother flying back from visiting friends in Brazil. Friendly, curious, asks gentle questions in clear British English.",
    successCriteria: "User answers 'Where are you from?' with 'I'm from ...', uses 'I live in ...' to specify current city if it differs, and asks the seatmate the same questions back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
