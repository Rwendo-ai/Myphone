import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "What's your name? — Como você se chama?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Pra conhecer alguém, começa com o nome. Em inglês: 'What's your name?' e a resposta 'My name is...'. Aí coroa com 'Nice to meet you'.",
    culturalNote: "No Brasil a gente solta o nome rapidinho — 'Sou o João!', 'Oi, Camila!'. Em inglês a estrutura é mais marcada: 'My name is John'. E 'Nice to meet you' não é opcional — é quase ritual quando você acabou de saber o nome de alguém.",
  },

  chunks: [
    {
      id: 'whats_your_name',
      target: "What's your name?",
      native: 'Como você se chama?',
      literal: 'What is your name?',
      emoji: '❓',
      phonetic: 'wuts-yor-NAYM',
      audioRef: null,
    },
    {
      id: 'my_name_is',
      target: 'My name is ...',
      native: 'Meu nome é...',
      literal: 'My name is ...',
      emoji: '🪪',
      phonetic: 'may-NAYM-iz',
      audioRef: null,
    },
    {
      id: 'nice_to_meet_you',
      target: 'Nice to meet you',
      native: 'Prazer em conhecer você',
      literal: 'Nice to meet you',
      emoji: '🤝',
      phonetic: 'nais-too-MEET-yoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessives my/your',
    explanation: "Em inglês 'my' = meu/minha, 'your' = seu/sua. 'What's your name?' usa 'your'. A resposta começa com 'My'. Cuidado: em inglês não tem gênero ('my' serve pra masculino e feminino) — diferente do português onde 'meu' e 'minha' mudam.",
    examples: [
      { target: "What's your name?",  native: 'Como você se chama?' },
      { target: 'My name is Maria',   native: 'Meu nome é Maria' },
      { target: 'Nice to meet you',   native: 'Prazer em conhecer você' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: "What's your name?", right: 'Como você se chama?' },
        { left: 'My name is ...',    right: 'Meu nome é...' },
        { left: 'Nice to meet you',  right: 'Prazer em conhecer' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Como você se chama?',
      correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês (com seu nome ou um exemplo)',
      prompt: 'Meu nome é Maria',
      correct: ['My name is Maria', 'my name is Maria', 'My name is maria', 'my name is maria'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a apresentação',
      sentence: '____ name is Camila.',
      options: ['My', 'Your', 'His'],
      correct: 'My',
      context: 'Você tá se apresentando.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a saudação cordial',
      words: ['Nice', 'to', 'meet', 'you'],
      correct: ['Nice', 'to', 'meet', 'you'],
      translation: 'Prazer em conhecer você',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ["What's", 'your', 'name'],
      correct: ["What's", 'your', 'name'],
      translation: 'Como você se chama?',
    },
  ],

  rwenDialogue: {
    intro: "Você tá num evento de networking pra fundadores em São Paulo. Um americano expat se aproxima.",
    lines: [
      { speaker: 'npc', target: "Hi! What's your name?", native: 'Oi! Como você se chama?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My name is Camila. Nice to meet you.", native: 'Meu nome é Camila. Prazer em conhecer.', correct: true,  feedback: "Mandou bem — deu o nome e fechou com a fórmula educada." },
          { target: 'Camila.',                                native: 'Camila.',                                  correct: false, feedback: "Curto demais pro primeiro contato — adiciona 'My name is'." },
          { target: "What's your name?",                      native: 'Como você se chama?',                       correct: false, feedback: "Ele perguntou primeiro — responda antes de devolver a pergunta." },
        ],
      },
      { speaker: 'npc', target: "Nice to meet you, Camila. I'm Sarah.", native: 'Prazer em conhecer, Camila. Sou a Sarah.' },
      {
        speaker: 'rwen',
        rwenLine: "Boa! Primeira apresentação em inglês — fluxo correto.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: "What's your name? (em inglês)", correct: ["What's your name?", "what's your name?", "What is your name?", "what is your name?"] },
      { prompt: 'Nice to meet you (em inglês)',   correct: ['Nice to meet you', 'nice to meet you', 'Nice to meet you.', 'nice to meet you.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Fala em inglês 'My name is ...' pra alguém hoje — pode ser pro Duolingo, pro espelho, pro vizinho gringo.",
    rwenSignoff: "Nice to meet you. Até amanhã.",
  },

  phase8: {
    scenario: "You're at a small networking event in São Paulo for tech founders. Someone you've never met walks up to introduce themselves in English.",
    rwenRole: "Michael, 32, an American product manager working at a startup in Brazil. Confident, friendly, asks follow-up questions.",
    successCriteria: "User exchanges names cleanly: gives 'My name is ...', uses 'Nice to meet you' at least once, and asks the other person's name back if they haven't already.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
