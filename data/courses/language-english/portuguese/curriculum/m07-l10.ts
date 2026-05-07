import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'A meal conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone do Módulo 7 — restaurante completo: entrar, pedir, comentar a comida, pagar. Tudo numa só conversa.",
    culturalNote: "Comer junto é universal. Em inglês, a etiqueta de restaurante pede 'please', 'thank you', 'I'd like'. Em casa de gente, pede calor (welcome, help yourself). Você junta os dois mundos — pratica brasileira e gentileza inglesa.",
  },

  chunks: [
    {
      id: 'review_table_menu',
      target: "A table for two, please. Could we have the menu?",
      native: 'Mesa pra dois, por favor. A gente pode ter o cardápio?',
      literal: 'A table for two, please. Could we have the menu?',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_id_like_modify',
      target: "I'd like the chicken, without onions, please.",
      native: 'Queria o frango, sem cebola, por favor.',
      literal: "I'd like the chicken, without onions, please.",
      emoji: '🍗',
      phonetic: "ayd-LAYK-thuh-CHIK-en",
      audioRef: null,
    },
    {
      id: 'review_delicious_bill',
      target: "It was delicious. Could we have the bill, please?",
      native: 'Tava delicioso. A conta, por favor?',
      literal: 'It was delicious. Could we have the bill, please?',
      emoji: '🧾',
      phonetic: 'it-WUZ-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full meal flow',
    explanation: "Quatro fases: (1) Entrar — 'A table for two, please.' (2) Pedir — 'I'd like ___, without ___.' (3) Durante — 'It's delicious'. (4) Pagar — 'Could we have the bill?'.",
    examples: [
      { target: "A table for two, please.",                                  native: 'Mesa pra dois.' },
      { target: "I'd like the steak, medium-rare, without onions.",           native: 'Queria o bife, ao ponto pro mal-passado, sem cebola.' },
      { target: "It was delicious. Could we have the bill, please?",          native: 'Tava delicioso. A conta?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Mesa pra dois, por favor. A gente pode ter o cardápio?',
      correct: ['A table for two, please. Could we have the menu?', 'A table for two, please. Could we have the menu', 'a table for two, please. Could we have the menu?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pedindo educado',
      sentence: "_____ I have the fish, without rice?",
      options: ['Could', 'Want', 'Are'],
      correct: 'Could',
      context: "'Could I have...' é o padrão educado.",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tava delicioso. A conta, por favor.',
      correct: ['It was delicious. The bill, please.', "It was delicious. Could we have the bill, please?", 'It was delicious. The check, please.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte uma frase do final',
      words: ['please.', 'have', 'we', 'the', 'Could', 'bill,'],
      correct: ['Could', 'we', 'have', 'the', 'bill,', 'please.'],
      translation: 'A gente pode ter a conta?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Queria o frango sem pimenta, por favor.',
      correct: ["I'd like the chicken without chilli, please.", "I would like the chicken without chilli, please.", "I'd like the chicken without chilli please"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Frase A2',
      question: 'Mais natural pra fechar a noite no restaurante:',
      options: [
        { text: 'It was delicious — could we have the bill, please?', correct: true },
        { text: 'Bill we want pay food was good.', correct: false },
        { text: 'Pay now bill.', correct: false },
      ],
      explanation: 'Elogia + pede a conta — fluxo natural de fechar.',
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — você tá num restaurante em SP com cliente americano. Conversa completa do começo ao fim.',
    lines: [
      {
        speaker: 'npc',
        target: "Welcome! How many?",
        native: 'Bem-vindos! Quantos?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "A table for two, please.", native: 'Uma mesa pra dois, por favor.', correct: true, feedback: 'Mandou bem — entrada limpa.' },
          { target: "Two.", native: 'Dois.', correct: false, feedback: 'Curto demais.' },
          { target: "Mesa dois.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Are you ready to order?",
        native: 'Prontos pra pedir?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — I'd like the steak, medium-rare, without onions, please.", native: 'Sim — queria o bife, ao ponto pro mal-passado, sem cebola, por favor.', correct: true, feedback: 'Mandou bem — pedido detalhado.' },
          { target: "Steak.", native: 'Bife.', correct: false, feedback: 'Adicione "I\'d like".' },
          { target: "I want steak no onions.", native: '...', correct: false, feedback: "'I want' soa rude — use 'I'd like'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 7 — jantar inteiro em inglês. Próximo: rotina diária e tempos verbais.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'd like the chicken (em inglês)", correct: ["I'd like the chicken", "I would like the chicken"] },
      { prompt: 'The bill, please (em inglês)', correct: ['The bill, please', 'The check, please', 'the bill, please'] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 7',
    task: "Pratica em voz alta um jantar inteiro em inglês: entrar, pedir, comentar, pagar. Quatro frases.",
    rwenSignoff: "Você fechou o Módulo 7. Próximo — rotina, hábitos, ontem e amanhã.",
  },

  phase8: {
    scenario: "Capstone restaurant night with an American client in São Paulo. You walk in, order, eat, and pay — all in English.",
    rwenRole: "American client politely letting you take the lead.",
    successCriteria: "User runs full flow: 'A table for X', 'I'd like ___, without ___, please', 'It was delicious', 'The bill, please'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
