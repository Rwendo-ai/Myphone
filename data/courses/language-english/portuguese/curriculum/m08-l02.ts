import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make" — I do / I make',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Do' e 'make' parecem iguais mas não são. 'Do' é pra tarefa pré-existente (homework, dishes, work). 'Make' é pra criar algo novo (tea, food, mistakes).",
    culturalNote: "Em português 'fazer' resolve tudo — 'fazer comida', 'fazer trabalho'. Em inglês precisa decidir: você faz o trabalho que já existia ('do my work') ou cria algo novo ('make a sandwich')? Erros: 'do a mistake' não existe — é 'make a mistake' (você produziu o erro).",
  },

  chunks: [
    {
      id: 'i_do_my_homework',
      target: 'I do my homework.',
      native: 'Faço minha lição.',
      literal: 'I do my homework',
      emoji: '📚',
      phonetic: 'ay-DOO-may-HOHM-werk',
      audioRef: null,
    },
    {
      id: 'she_makes_tea',
      target: 'She makes tea.',
      native: 'Ela faz chá.',
      literal: 'She makes tea',
      emoji: '🍵',
      phonetic: 'shee-MAYKS-TEE',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry.",
      native: 'Não se preocupa.',
      literal: 'Do not worry',
      emoji: '🙏',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Do vs Make',
    explanation: "DO = tarefa rotineira: do work, do homework, do the dishes, do exercise. MAKE = criar/produzir: make tea, make a sandwich, make a plan, make a mistake. 'Don't' = 'do not' — aqui 'do' é auxiliar.",
    examples: [
      { target: 'I do my homework.',  native: 'Faço minha lição.' },
      { target: 'She makes coffee.',  native: 'Ela faz café.' },
      { target: "Don't worry.",        native: 'Não se preocupa.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine do/make',
      pairs: [
        { left: 'Do homework', right: 'Fazer lição' },
        { left: 'Make tea', right: 'Fazer chá' },
        { left: 'Make a mistake', right: 'Cometer um erro' },
        { left: 'Do the dishes', right: 'Lavar a louça' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Ela faz café toda manhã.',
      correct: ['She makes coffee every morning.', 'She makes coffee every morning'],
    },
    {
      type: 'fill_blank',
      instruction: 'Do ou Make?',
      sentence: 'I _____ my work in the office.',
      options: ['do', 'make', 'have'],
      correct: 'do',
      context: 'Trabalho rotineiro = do.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"Don't worry about it\"",
      words: ['it.', "Don't", 'about', 'worry'],
      correct: ["Don't", 'worry', 'about', 'it.'],
      translation: 'Não se preocupa com isso',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Cometi um erro.',
      correct: ['I made a mistake.', "I've made a mistake.", 'I made a mistake'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Errar',
      question: '"Cometi um erro" em inglês:',
      options: [
        { text: 'I made a mistake.', correct: true },
        { text: 'I did a mistake.', correct: false },
        { text: 'I have mistake.', correct: false },
      ],
      explanation: 'Erro a gente "produz" — make a mistake.',
    },
  ],

  rwenDialogue: {
    intro: 'Reunião com colega que percebe que você errou um número.',
    lines: [
      { speaker: 'npc', target: "There's a typo here.", native: 'Tem um erro de digitação aqui.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry — I made a mistake. Let me fix it.", native: 'Desculpa — cometi um erro. Deixa eu consertar.', correct: true, feedback: 'Mandou bem — make a mistake.' },
          { target: "I did a mistake.", native: '...', correct: false, feedback: 'É "made a mistake".' },
          { target: "Sorry, error.", native: '...', correct: false, feedback: 'Frase quebrada.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I do my homework (em inglês)', correct: ['I do my homework', 'I do my homework.'] },
      { prompt: 'She makes tea (em inglês)', correct: ['She makes tea', 'She makes tea.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Liste 3 coisas que você 'do' (faz como rotina) e 3 que você 'make' (cria) — em inglês.",
    rwenSignoff: "Amanhã — go e come.",
  },

  phase8: {
    scenario: "Office conversation about work — using 'do' (tasks) and 'make' (creations) in different contexts.",
    rwenRole: "Colleague reviewing progress.",
    successCriteria: "User uses 'do' for tasks and 'make' for creations correctly at least twice each.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
