import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Hobbies — Hobbies / Lazer',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "O que te diverte? Livro, música, dança? Em inglês fala com 'I like ...' ou 'I enjoy ...'. Mas tem um detalhe importante — depois desses verbos, o próximo verbo ganha '-ing' no fim.",
    culturalNote: "Em português a gente diz 'gosto de ler' — infinitivo simples. Em inglês: 'I like reading' — com '-ing'. ('I like to read' também funciona, mas 'reading' é mais natural em conversa). Esse '-ing' transforma o verbo em substantivo: 'reading' = 'a leitura'.",
  },

  chunks: [
    {
      id: 'i_like',
      target: 'I like ...',
      native: 'Eu gosto de...',
      literal: 'I like ...',
      emoji: '👍',
      phonetic: 'ay-LAYK',
      audioRef: null,
    },
    {
      id: 'i_enjoy',
      target: 'I enjoy ...',
      native: 'Eu curto...',
      literal: 'I enjoy ...',
      emoji: '😊',
      phonetic: 'ay-en-JOY',
      audioRef: null,
    },
    {
      id: 'in_my_free_time',
      target: 'In my free time',
      native: 'No meu tempo livre',
      literal: 'In my free time',
      emoji: '🕐',
      phonetic: 'in-may-FREE-taym',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Like" + gerund (-ing form)',
    explanation: "Depois de 'I like' ou 'I enjoy', o próximo verbo vira gerúndio (-ing): read → reading, cook → cooking, watch → watching. Frase típica: 'I enjoy reading in my free time' = 'Curto ler no meu tempo livre'.",
    examples: [
      { target: 'I like reading',                 native: 'Gosto de ler' },
      { target: 'I enjoy cooking',                 native: 'Curto cozinhar' },
      { target: 'In my free time, I watch films',  native: 'No tempo livre, vejo filmes' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os hobbies',
      pairs: [
        { left: 'Reading',     right: 'Ler' },
        { left: 'Cooking',     right: 'Cozinhar' },
        { left: 'Watching films', right: 'Ver filmes' },
        { left: 'Music',        right: 'Música' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Gosto de ler',
      correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'No meu tempo livre, curto cozinhar',
      correct: ['In my free time, I enjoy cooking', 'In my free time I enjoy cooking', 'in my free time, i enjoy cooking', 'in my free time i enjoy cooking'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete com a forma '-ing'",
      sentence: "I like ____ in my free time.",
      options: ['reading', 'read', 'reads'],
      correct: 'reading',
      context: 'Depois de "like" usa "-ing".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de hobby',
      words: ['I', 'enjoy', 'cooking'],
      correct: ['I', 'enjoy', 'cooking'],
      translation: 'Curto cozinhar',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase mais longa',
      words: ['In', 'my', 'free', 'time', 'I', 'read'],
      correct: ['In', 'my', 'free', 'time', 'I', 'read'],
      translation: 'No meu tempo livre eu leio',
    },
  ],

  rwenDialogue: {
    intro: "Você foi a um clube de leitura em inglês em SP. Cada um se apresenta dizendo um hobby.",
    lines: [
      { speaker: 'npc', target: "Tell us — what do you like doing in your free time?", native: 'Conta — o que você gosta de fazer no tempo livre?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I enjoy reading. In my free time, I read every evening.", native: 'Curto ler. No meu tempo livre, leio toda noite.', correct: true,  feedback: "Mandou bem — hobby + detalhe extra." },
          { target: "I like read.",                                              native: 'Gosto ler.',                                          correct: false, feedback: "Esqueceu o '-ing' — é 'I like reading'." },
          { target: "Read.",                                                     native: 'Ler.',                                                correct: false, feedback: "Curto demais — num clube de leitura querem ouvir mais." },
        ],
      },
      { speaker: 'npc', target: "Oh wonderful — what's your favourite book?", native: 'Que legal — qual seu livro favorito?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você acertou o '-ing' no 'reading'. O gerúndio é a forma natural pra falar de hobby em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Gosto de ler (em inglês)',                     correct: ['I like reading', 'i like reading', 'I like to read', 'i like to read'] },
      { prompt: 'No meu tempo livre (em inglês)',              correct: ['In my free time', 'in my free time', 'In my free time,', 'in my free time,'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escolhe um hobby — escreve uma frase: 'In my free time, I enjoy ___-ing.' Aí outra com 'I like ___-ing'.",
    rwenSignoff: "Bom trabalho. Até amanhã.",
  },

  phase8: {
    scenario: "You're at an English-language book club meeting in São Paulo. The group does a quick round of 'tell us one thing you enjoy outside work' before starting.",
    rwenRole: "Chipo, 28, the book club host. Friendly, follows up with 'what's a favourite book/show/recipe?' depending on what you say.",
    successCriteria: "User produces at least one 'I like/enjoy ___-ing' sentence with correct gerund form (no 'I like read'), and gives one extra detail about the hobby.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
