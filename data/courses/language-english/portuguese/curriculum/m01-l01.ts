import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — Olá',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Em inglês, quando você encontra alguém, começa com 'Hello'. Sem 'Bom dia' obrigatório, sem beijinho — só uma palavra direta que serve pra todo mundo.",
    culturalNote: "No Brasil a gente cumprimenta com calor — abraço, beijo, 'Tudo bem?' que vira conversa. Em inglês 'Hello' é mais neutro: serve pro chefe gringo no Zoom e pra atendente do Starbucks. Não é frieza — é o tom padrão.",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'Olá',
      literal: undefined,
      emoji: '👋',
      phonetic: 'heh-LOH',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: 'Como você está?',
      literal: 'How are you?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: 'Estou bem, obrigado(a).',
      literal: 'I-am fine, thanks',
      emoji: '✨',
      phonetic: 'aym-FAYN-thanks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings',
    explanation: "Em inglês, 'How are you?' não é uma pergunta de verdade — faz parte do cumprimento. A resposta é quase sempre 'I'm fine, thanks', mesmo se o seu dia tá um caos. No Brasil 'Tudo bem?' pode abrir uma conversa de 10 minutos. Em inglês, não — responde rápido e segue.",
    examples: [
      { target: 'Hello',        native: 'Olá' },
      { target: 'Hi',           native: 'Oi (informal)' },
      { target: 'How are you?', native: 'Como você está?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras em inglês com o português',
      pairs: [
        { left: 'Hello',         right: 'Olá' },
        { left: 'How are you?',  right: 'Como você está?' },
        { left: "I'm fine",      right: 'Estou bem' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Olá',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a frase',
      sentence: 'Hello! ____ are you?',
      options: ['How', 'What', 'Who'],
      correct: 'How',
      context: 'Primeira reunião por Zoom com cliente americano.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a melhor resposta',
      question: "O cliente pergunta 'How are you?' — você responde:",
      options: [
        { text: "I'm fine, thanks.", correct: true },
        { text: 'Yes, please.',      correct: false },
        { text: 'Goodbye.',          correct: false },
      ],
      explanation: "'I'm fine, thanks' é a resposta padrão e segura — mesmo se você tá cansado.",
    },
    {
      type: 'build_sentence',
      instruction: 'Coloque as palavras na ordem certa',
      words: ['How', 'you', 'are'],
      correct: ['How', 'are', 'you'],
      translation: 'Como você está?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou bem, obrigado.',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine thanks"],
    },
  ],

  rwenDialogue: {
    intro: 'Reunião matinal por Zoom — você é estagiário em São Paulo numa fintech com sede em Nova York. Seu manager americano abre a chamada.',
    lines: [
      { speaker: 'npc',  target: 'Hello! How are you?', native: 'Olá! Como você está?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, I'm fine, thanks. How are you?", native: 'Olá, estou bem, obrigado. Como você está?', correct: true,  feedback: 'Perfeito — você respondeu e devolveu a pergunta. Isso é inglês natural.' },
          { target: 'Hello.',                                   native: 'Olá.',                                       correct: false, feedback: 'Curto demais — devolva a pergunta pra manter a conversa fluindo.' },
          { target: 'Tudo bem!',                                native: 'Tudo bem!',                                  correct: false, feedback: 'Ele não fala português — em inglês, use "I\'m fine, thanks".' },
        ],
      },
      { speaker: 'npc',  target: "I'm good, thanks. Welcome to the team.", native: 'Estou bem também, obrigado. Bem-vindo à equipe.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Primeira saudação em inglês — nem formal demais, nem curto demais.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar pra cima. Escreva de memória.',
    prompts: [
      { prompt: 'Hello (em inglês)', correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (em inglês)', correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, fale 'Hello, how are you?' pra alguém — pode ser pro espelho, pode ser pro seu cachorro. O importante é a boca se acostumar com o som.",
    rwenSignoff: "Até amanhã. Take care.",
  },

  phase8: {
    scenario: "Primeiro dia numa fintech brasileira que atende clientes nos EUA. 9h da manhã, kickoff call, seu manager americano cumprimenta você por Zoom em inglês.",
    rwenRole: "Mike, 32, your team lead from New York. Friendly but checking if you can hold a casual English exchange.",
    successCriteria: "User opens with 'Hello' (not 'Bom dia' or 'Tudo bem'), responds 'I'm fine, thanks' to 'How are you?' (NOT a literal long answer), and asks 'How are you?' back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
