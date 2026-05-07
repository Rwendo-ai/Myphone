import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Being Sick — Doente',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Doença em inglês: 'I have a headache' (mesma estrutura do português 'tenho dor de cabeça'!). E 'I don't feel well' pra começar com o médico.",
    culturalNote: "Pra dor a gente usa 'have' tanto em inglês quanto em português — bridge boa. 'I have a headache', 'I have a fever', 'I have a cough'. Em consulta médica curta (5 min em UK NHS), seja direto: o que dói, há quanto tempo, o que piora.",
  },

  chunks: [
    {
      id: 'dont_feel_well',
      target: "I don't feel well",
      native: 'Não estou me sentindo bem',
      literal: 'I do-not feel well',
      emoji: '🤒',
      phonetic: 'ay-DOHNT-feel-WEL',
      audioRef: null,
    },
    {
      id: 'have_headache',
      target: 'I have a headache',
      native: 'Estou com dor de cabeça',
      literal: 'I-have a headache',
      emoji: '🤕',
      phonetic: 'ay-HAV-uh-HED-ayk',
      audioRef: null,
    },
    {
      id: 'need_a_doctor',
      target: 'I need a doctor',
      native: 'Preciso de um médico',
      literal: 'I-need a doctor',
      emoji: '👨‍⚕️',
      phonetic: 'ay-NEED-uh-DOK-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sickness phrases',
    explanation: "'I have a + sintoma': headache, fever, cough, sore throat, stomach ache. 'I don't feel well' (mal-estar geral). 'It started ___' (passado: yesterday, last night).",
    examples: [
      { target: "I have a fever and a cough.",        native: 'Estou com febre e tosse.' },
      { target: "I don't feel well — it started last night.", native: 'Não estou bem — começou ontem à noite.' },
      { target: 'I need to see a doctor.',             native: 'Preciso ver um médico.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine sintomas',
      pairs: [
        { left: 'Headache', right: 'Dor de cabeça' },
        { left: 'Fever', right: 'Febre' },
        { left: 'Cough', right: 'Tosse' },
        { left: 'Sore throat', right: 'Dor de garganta' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou com dor de cabeça.',
      correct: ['I have a headache.', 'I have a headache'],
    },
    {
      type: 'fill_blank',
      instruction: 'Verbo certo',
      sentence: 'I _____ a fever.',
      options: ['have', 'am', 'do'],
      correct: 'have',
      context: 'Sintoma usa "have".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I don\'t feel well"',
      words: ['well.', "don't", 'feel', 'I'],
      correct: ['I', "don't", 'feel', 'well.'],
      translation: 'Não estou me sentindo bem',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Preciso ver um médico.',
      correct: ['I need to see a doctor.', 'I need a doctor.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Telefonando pro consultório',
      question: 'Como começa a explicar?',
      options: [
        { text: "Hi, I don't feel well — I have a fever and a cough since yesterday.", correct: true },
        { text: "Sick fever cough.", correct: false },
        { text: "Doctor I need please.", correct: false },
      ],
      explanation: 'Direto e completo.',
    },
  ],

  rwenDialogue: {
    intro: 'Você liga pro consultório em SP, mas a recepção fala inglês com cliente americano.',
    lines: [
      { speaker: 'npc', target: "How can I help?", native: 'Como posso ajudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi — I don't feel well. I have a fever and a sore throat since yesterday. I'd like to see a doctor.", native: 'Oi — não estou bem. Tô com febre e dor de garganta desde ontem. Queria ver um médico.', correct: true, feedback: 'Mandou bem — sintomas + duração + pedido.' },
          { target: "Doctor today?", native: '...', correct: false, feedback: 'Adicione sintomas.' },
          { target: "Tô doente.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I have a headache (em inglês)', correct: ['I have a headache', 'I have a headache.'] },
      { prompt: "I don't feel well (em inglês)", correct: ["I don't feel well", "I do not feel well"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Liste em inglês 5 sintomas comuns: 'I have a ___'.",
    rwenSignoff: "Amanhã — partes do corpo.",
  },

  phase8: {
    scenario: "Calling a São Paulo English-speaking clinic to describe symptoms and book an appointment.",
    rwenRole: "Polite reception agent at international clinic.",
    successCriteria: "User uses 'I have a ___' for symptoms, mentions duration ('since yesterday'), asks for an appointment.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
