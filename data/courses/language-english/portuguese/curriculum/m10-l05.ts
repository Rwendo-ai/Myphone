import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Body Parts — Partes do corpo',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Partes do corpo: head (cabeça), stomach (barriga/estômago), arm (braço). Pra dor: 'My ___ hurts' — mesma estrutura do português ('meu ___ dói').",
    culturalNote: "Em fisioterapeuta no exterior, apontar funciona — mas saber o nome ajuda. 'It hurts here' (dói aqui) com gesto resolve apertos. Pra dor crônica: 'My back has been hurting for a week'.",
  },

  chunks: [
    {
      id: 'head',
      target: 'Head',
      native: 'Cabeça',
      literal: 'head',
      emoji: '🗣️',
      phonetic: 'HED',
      audioRef: null,
    },
    {
      id: 'stomach',
      target: 'Stomach',
      native: 'Estômago / Barriga',
      literal: 'stomach',
      emoji: '🫃',
      phonetic: 'STUH-muk',
      audioRef: null,
    },
    {
      id: 'arm',
      target: 'Arm',
      native: 'Braço',
      literal: 'arm',
      emoji: '💪',
      phonetic: 'AHRM',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body parts + hurt',
    explanation: "Estrutura: 'My + parte + hurts' (singular) ou 'My + partes + hurt' (plural). Ex: 'My head hurts', 'My legs hurt'. Pra apontar: 'It hurts here'.",
    examples: [
      { target: 'My head hurts.',           native: 'Minha cabeça dói.' },
      { target: 'My back hurts a lot.',      native: 'Minhas costas doem muito.' },
      { target: 'It hurts here.',             native: 'Dói aqui.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine partes do corpo',
      pairs: [
        { left: 'Head', right: 'Cabeça' },
        { left: 'Stomach', right: 'Estômago' },
        { left: 'Arm', right: 'Braço' },
        { left: 'Leg', right: 'Perna' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha barriga dói.',
      correct: ['My stomach hurts.', 'My stomach hurts'],
    },
    {
      type: 'fill_blank',
      instruction: 'Singular vs plural',
      sentence: 'My legs _____.',
      options: ['hurt', 'hurts', 'hurted'],
      correct: 'hurt',
      context: 'Plural (legs) → hurt sem -s.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It hurts here"',
      words: ['here.', 'hurts', 'It'],
      correct: ['It', 'hurts', 'here.'],
      translation: 'Dói aqui',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu braço dói há uma semana.',
      correct: ['My arm has been hurting for a week.', 'My arm hurts for a week.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'No fisioterapeuta',
      question: 'Como descrever dor crônica?',
      options: [
        { text: "My back has been hurting for a week — it gets worse at night.", correct: true },
        { text: "Back pain night.", correct: false },
        { text: "My back hurted week.", correct: false },
      ],
      explanation: '"Has been hurting" = dor que continua há tempo.',
    },
  ],

  rwenDialogue: {
    intro: 'Fisioterapeuta inglesa pergunta o que dói.',
    lines: [
      { speaker: 'npc', target: "Where does it hurt?", native: 'Onde dói?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My lower back hurts — it started after I ran on Sunday.", native: 'Minhas costas doem — começou depois que corri domingo.', correct: true, feedback: 'Mandou bem.' },
          { target: "Back pain.", native: '...', correct: false, feedback: 'Adicione contexto.' },
          { target: "Costas.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My head hurts (em inglês)', correct: ['My head hurts', 'My head hurts.'] },
      { prompt: 'It hurts here (em inglês)', correct: ['It hurts here', 'It hurts here.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Liste em inglês 7 partes do corpo. Pratica 'My ___ hurts' com 3 delas.",
    rwenSignoff: "Amanhã — médico.",
  },

  phase8: {
    scenario: "Physiotherapist appointment in São Paulo with English-speaking specialist.",
    rwenRole: "Polite English-speaking physio asking about pain.",
    successCriteria: "User uses 'my ___ hurts', specifies location, gives onset/cause.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
