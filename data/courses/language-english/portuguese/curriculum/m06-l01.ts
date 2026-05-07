import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Numbers 1-10 — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Módulo 6 abre com números — coisa que você usa todo dia. Começamos do 1 ao 10.",
    culturalNote: "Em português os números pegam gênero: 'duas maçãs', 'dois carros'. Em inglês não muda — 'two apples', 'two cars', 'two days' — sempre 'two'. Vida facilitada.",
  },

  chunks: [
    {
      id: 'one_five',
      target: 'One, two, three, four, five',
      native: 'Um, dois, três, quatro, cinco',
      literal: '1, 2, 3, 4, 5',
      emoji: '🖐️',
      phonetic: 'wun, too, three, for, fyv',
      audioRef: null,
    },
    {
      id: 'six_ten',
      target: 'Six, seven, eight, nine, ten',
      native: 'Seis, sete, oito, nove, dez',
      literal: '6, 7, 8, 9, 10',
      emoji: '🔟',
      phonetic: 'siks, SEH-vn, ayt, nyn, ten',
      audioRef: null,
    },
    {
      id: 'how_many',
      target: 'How many?',
      native: 'Quantos?',
      literal: 'How many?',
      emoji: '❓',
      phonetic: 'how-MEH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cardinal counting',
    explanation: "Em inglês, número não muda com gênero ou substantivo: 'three apples', 'three children', 'three dollars' — sempre 'three'.",
    examples: [
      { target: 'Three children',  native: 'Três crianças' },
      { target: 'Three apples',    native: 'Três maçãs' },
      { target: 'Three dollars',   native: 'Três dólares' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os números',
      pairs: [
        { left: 'One',   right: 'Um' },
        { left: 'Five',  right: 'Cinco' },
        { left: 'Ten',   right: 'Dez' },
        { left: 'Seven', right: 'Sete' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Três',
      correct: ['Three', 'three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a sequência',
      sentence: 'One, two, three, ____, five.',
      options: ['four', 'five', 'six'],
      correct: 'four',
      context: 'Sequência: 1-2-3-4-5.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I have five children"',
      words: ['children.', 'have', 'I', 'five'],
      correct: ['I', 'have', 'five', 'children.'],
      translation: 'Tenho cinco filhos',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quantos?',
      correct: ['How many?', 'how many?', 'How many', 'how many'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: 'I see _____ apples on the table.',
      options: [
        { text: 'seven', correct: true },
        { text: 'sevens', correct: false },
        { text: 'a seven', correct: false },
      ],
      explanation: "Número não recebe -s nem 'a': só 'seven apples'.",
    },
  ],

  rwenDialogue: {
    intro: 'Você compra ingressos pra família no metrô em SP, mas o atendente é estagiário canadense.',
    lines: [
      { speaker: 'npc', target: "How many tickets?", native: 'Quantos ingressos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Four tickets, please.", native: 'Quatro, por favor.', correct: true, feedback: 'Mandou bem — número claro.' },
          { target: "Fours tickets.",         native: 'Quatros ingressos.',  correct: false, feedback: "'Four' não tem -s." },
          { target: "A four ticket.",          native: 'Um quatro ingresso.', correct: false, feedback: "Sem 'a' antes do número." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mandou bem! Números invariáveis em inglês.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Three (em inglês)', correct: ['Three', 'three'] },
      { prompt: 'Ten (em inglês)',    correct: ['Ten', 'ten'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Conta de 1 a 10 em inglês em voz alta. Aí conta para trás: ten, nine, eight...",
    rwenSignoff: "Amanhã — números maiores.",
  },

  phase8: {
    scenario: "Buying tickets at a São Paulo subway station from an English-speaking trainee.",
    rwenRole: "Friendly trainee getting comfortable with simple ticket sales.",
    successCriteria: "User says a number 1-10 clearly and uses it with a noun ('four tickets', 'two adults').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
