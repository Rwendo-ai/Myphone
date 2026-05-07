import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Daily routine — Morning',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Rotina matinal: 'I wake up at 6', 'I take a shower', 'I eat breakfast'. Note o 'at' antes da hora.",
    culturalNote: "Em português 'acordo às 6' — preposição embutida em 'às'. Em inglês: 'I wake up AT 6'. Sempre 'at' antes da hora. E 'wake up', 'get up', 'sit down' são verbos com 'particle' (preposição grudada que faz parte do verbo).",
  },

  chunks: [
    {
      id: 'i_wake_up_at_6',
      target: 'I wake up at 6.',
      native: 'Eu acordo às 6.',
      literal: 'I wake up at 6',
      emoji: '⏰',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_take_a_shower',
      target: 'I take a shower.',
      native: 'Eu tomo banho.',
      literal: 'I take a shower',
      emoji: '🚿',
      phonetic: 'ay-TAYK-uh-SHOW-er',
      audioRef: null,
    },
    {
      id: 'i_eat_breakfast',
      target: 'I eat breakfast.',
      native: 'Eu tomo café da manhã.',
      literal: 'I eat breakfast',
      emoji: '🍳',
      phonetic: 'ay-EET-BREK-fust',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time + verb — Morning routine',
    explanation: "Estrutura: 'At [hora], I [verbo]' ou 'I [verbo] at [hora]'. Use simple present (I wake, I take, I eat) — não continuous (I'm waking).",
    examples: [
      { target: 'I wake up at 6.',     native: 'Acordo às 6.' },
      { target: 'I take a shower at 6:30.', native: 'Tomo banho às 6:30.' },
      { target: 'I eat breakfast at 7.',     native: 'Tomo café às 7.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine a rotina',
      pairs: [
        { left: 'Wake up', right: 'Acordar' },
        { left: 'Take a shower', right: 'Tomar banho' },
        { left: 'Eat breakfast', right: 'Tomar café da manhã' },
        { left: 'Get dressed', right: 'Se vestir' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Acordo às 6.',
      correct: ['I wake up at 6.', 'I wake up at six.', 'i wake up at 6.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Preposição de hora',
      sentence: 'I wake up _____ 6.',
      options: ['at', 'in', 'on'],
      correct: 'at',
      context: 'Hora usa "at".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I take a shower at 6:30"',
      words: ['shower', 'I', '6:30.', 'take', 'at', 'a'],
      correct: ['I', 'take', 'a', 'shower', 'at', '6:30.'],
      translation: 'Tomo banho às 6:30',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tomo café da manhã às 7.',
      correct: ['I eat breakfast at 7.', 'I eat breakfast at seven.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Tempo certo',
      question: 'Pra falar de rotina, use:',
      options: [
        { text: 'I wake up at 6 every day.', correct: true },
        { text: "I'm waking up at 6 every day.", correct: false },
        { text: 'I waked up at 6 every day.', correct: false },
      ],
      explanation: 'Rotina = simple present.',
    },
  ],

  rwenDialogue: {
    intro: 'Conversa casual com colega americano sobre rotina.',
    lines: [
      { speaker: 'npc', target: "What time do you usually start your day?", native: 'A que horas você costuma começar o dia?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6 and eat breakfast at 7.", native: 'Acordo às 6 e tomo café às 7.', correct: true, feedback: 'Mandou bem.' },
          { target: "I'm waking up at 6.", native: '...', correct: false, feedback: 'Use simple present pra rotina.' },
          { target: "Acordo às 6.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I wake up at 6 (em inglês)', correct: ['I wake up at 6', 'I wake up at six', 'I wake up at 6.'] },
      { prompt: 'I take a shower (em inglês)', correct: ['I take a shower', 'I take a shower.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Descreva sua manhã em 3 frases em inglês — acordar, tomar banho, comer.",
    rwenSignoff: "Amanhã — trabalho e escola.",
  },

  phase8: {
    scenario: "Casual chat with American colleague about morning routines.",
    rwenRole: "Curious colleague.",
    successCriteria: "User describes 3+ morning steps with 'at [time]' and simple present tense.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
