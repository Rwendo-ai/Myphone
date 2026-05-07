import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Bus, Taxi, Train — Ônibus, Táxi, Trem',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Transporte: 'the bus', 'a taxi', 'the train'. Verbo padrão: 'take' (pegar/tomar).",
    culturalNote: "Em Londres tem 'the tube' (metrô); em NY 'the subway'. 'Uber' virou verbo: 'I'll Uber there'. Em SP a gente fala 'pegar o ônibus' — em inglês 'take the bus'. Sem 'a' antes de 'tube/subway' — 'I take the tube to work'.",
  },

  chunks: [
    {
      id: 'the_bus',
      target: 'The bus',
      native: 'O ônibus',
      literal: 'The bus',
      emoji: '🚌',
      phonetic: 'thuh-BUS',
      audioRef: null,
    },
    {
      id: 'taxi',
      target: 'A taxi',
      native: 'Um táxi',
      literal: 'A taxi',
      emoji: '🚕',
      phonetic: 'uh-TAK-see',
      audioRef: null,
    },
    {
      id: 'the_train',
      target: 'The train',
      native: 'O trem',
      literal: 'The train',
      emoji: '🚆',
      phonetic: 'thuh-TRAYN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Transport nouns',
    explanation: "Verbo 'take' resolve a maioria: 'I take the bus', 'I take a taxi', 'I take the train'. 'I'm taking ___ now' = estou pegando agora.",
    examples: [
      { target: 'I take the bus to work.',   native: 'Pego o ônibus pro trabalho.' },
      { target: "Let's take a taxi.",         native: 'Vamos pegar um táxi.' },
      { target: "I'm taking the train at 9.", native: 'Pego o trem às 9.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os transportes',
      pairs: [
        { left: 'The bus', right: 'O ônibus' },
        { left: 'A taxi', right: 'Um táxi' },
        { left: 'The train', right: 'O trem' },
        { left: 'The subway', right: 'O metrô' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Pego o ônibus pro trabalho.',
      correct: ['I take the bus to work.', 'I take the bus to work'],
    },
    {
      type: 'fill_blank',
      instruction: 'Verbo de transporte',
      sentence: "I _____ the bus every morning.",
      options: ['take', 'do', 'go'],
      correct: 'take',
      context: 'Take the bus.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"Let's take a taxi\"",
      words: ['taxi.', 'a', "Let's", 'take'],
      correct: ["Let's", 'take', 'a', 'taxi.'],
      translation: 'Vamos pegar um táxi',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vou pegar o metrô.',
      correct: ["I'm going to take the subway.", 'I will take the subway.', "I'll take the subway."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pegando trem',
      question: 'Pra dizer "vou pegar o trem das 8":',
      options: [
        { text: "I'm taking the 8 o'clock train.", correct: true },
        { text: "I taking train 8.", correct: false },
        { text: "I take a 8 train.", correct: false },
      ],
      explanation: 'I\'m taking + the [time] train.',
    },
  ],

  rwenDialogue: {
    intro: 'Reunião acabou tarde. Você decide como voltar pra casa em Londres.',
    lines: [
      { speaker: 'npc', target: "How are you getting home?", native: 'Como você vai pra casa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll take the tube — it's faster than a taxi.", native: 'Vou pegar o metrô — é mais rápido que táxi.', correct: true, feedback: 'Mandou bem.' },
          { target: "Tube I take.", native: '...', correct: false, feedback: 'Estrutura quebrada.' },
          { target: "Pego metrô.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I take the bus (em inglês)', correct: ['I take the bus', 'I take the bus.'] },
      { prompt: "I'll take a taxi (em inglês)", correct: ["I'll take a taxi", "I will take a taxi"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Em inglês: como você vai pro trabalho? Use 'I take the ___'.",
    rwenSignoff: "Amanhã — comprando ingresso.",
  },

  phase8: {
    scenario: "Discussing how you usually commute, with English-speaking new colleague in São Paulo.",
    rwenRole: "Curious colleague.",
    successCriteria: "User uses 'take' with two transport types and one preference reason.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
