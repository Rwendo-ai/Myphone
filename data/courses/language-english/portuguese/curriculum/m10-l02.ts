import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: 'Anger & Frustration — Raiva e frustração',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'I'm angry', 'I'm frustrated'. No trabalho, suaviza com 'a bit frustrated'. 'Calm down' é facão — usa com cuidado.",
    culturalNote: "Brasileiro às vezes 'esquenta' a conversa — 'tô puta' (perdão pelo termo). Em ambiente profissional anglófono, suaviza: 'I'm a bit frustrated about the deadline' funciona melhor que 'I'm angry'. E nunca diga 'calm down' pra alguém irritado — é gasolina no fogo.",
  },

  chunks: [
    {
      id: 'im_angry',
      target: "I'm angry",
      native: 'Estou com raiva',
      literal: 'I-am angry',
      emoji: '😠',
      phonetic: 'aym-ANG-gree',
      audioRef: null,
    },
    {
      id: 'im_frustrated',
      target: "I'm frustrated",
      native: 'Estou frustrado(a)',
      literal: 'I-am frustrated',
      emoji: '😤',
      phonetic: 'aym-FRUS-tray-ted',
      audioRef: null,
    },
    {
      id: 'calm_down',
      target: 'Calm down',
      native: 'Se acalma',
      literal: 'be-calm down',
      emoji: '🌬️',
      phonetic: 'KAHM-down',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Anger — softening for work',
    explanation: "Em ambiente profissional, suaviza: 'a bit frustrated' / 'a little annoyed'. Adicione causa: 'about the change', 'with the timeline'. 'Calm down' funciona entre amigos íntimos — em outras situações pode ofender.",
    examples: [
      { target: "I'm a bit frustrated about the deadline.",     native: 'Estou um pouco frustrado com o prazo.' },
      { target: "I'm annoyed with the situation.",                native: 'Estou irritado com a situação.' },
      { target: "Let's take a deep breath.",                       native: 'Vamos respirar fundo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine emoções',
      pairs: [
        { left: 'Angry', right: 'Com raiva' },
        { left: 'Frustrated', right: 'Frustrado' },
        { left: 'Annoyed', right: 'Irritado' },
        { left: 'Calm down', right: 'Se acalma' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou um pouco frustrado com o prazo.',
      correct: ["I'm a bit frustrated about the deadline.", "I'm a little frustrated about the deadline."],
    },
    {
      type: 'fill_blank',
      instruction: 'Suavizando',
      sentence: "I'm a _____ frustrated.",
      options: ['bit', 'lot', 'much'],
      correct: 'bit',
      context: '"A bit" suaviza.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I'm annoyed with the situation\"",
      words: ['situation.', 'with', 'annoyed', "I'm", 'the'],
      correct: ["I'm", 'annoyed', 'with', 'the', 'situation.'],
      translation: 'Estou irritado com a situação',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vamos respirar fundo.',
      correct: ["Let's take a deep breath.", "Let's take a deep breath"],
    },
    {
      type: 'multiple_choice',
      instruction: 'No trabalho',
      question: 'Reclamando do prazo educadamente:',
      options: [
        { text: "I'm a bit frustrated about the deadline change — could we talk about it?", correct: true },
        { text: "I'm angry deadline.", correct: false },
        { text: "Calm down deadline bad.", correct: false },
      ],
      explanation: 'Suaviza + propõe diálogo.',
    },
  ],

  rwenDialogue: {
    intro: 'Reunião com gerente americano. Você está frustrado com prazo apertado.',
    lines: [
      { speaker: 'npc', target: "Anything on your mind?", native: 'Algo te incomodando?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a bit frustrated about the new deadline. Could we discuss it?", native: 'Estou um pouco frustrado com o novo prazo. Podemos conversar?', correct: true, feedback: 'Mandou bem — claro e profissional.' },
          { target: "Deadline angry me.", native: '...', correct: false, feedback: 'Frase quebrada.' },
          { target: "Tô puto.", native: '...', correct: false, feedback: 'Em português, e forte demais.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Frustração canalizada com profissionalismo.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'm frustrated (em inglês)", correct: ["I'm frustrated", 'I am frustrated'] },
      { prompt: "I'm a bit annoyed (em inglês)", correct: ["I'm a bit annoyed", 'I am a bit annoyed'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pense em algo que te frustrou recentemente. Escreve em inglês com 'I'm a bit frustrated about ___'.",
    rwenSignoff: "Amanhã — medo e preocupação.",
  },

  phase8: {
    scenario: "1-on-1 with American manager — voicing frustration about a deadline change professionally.",
    rwenRole: "Open manager willing to hear concerns.",
    successCriteria: "User uses 'a bit frustrated/annoyed', specifies cause, proposes dialogue.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
