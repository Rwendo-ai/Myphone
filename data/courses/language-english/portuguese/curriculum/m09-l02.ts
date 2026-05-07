import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Left, Right, Straight — Esquerda, Direita, Reto',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Turn left', 'Go straight', 'It's on the right'. Direções diretas em inglês.",
    culturalNote: "No Brasil 'vira ali à esquerda, segue reto, é na direita'. Em inglês a estrutura é a mesma. Atalho: 'Take the second left' = pega a segunda à esquerda.",
  },

  chunks: [
    {
      id: 'turn_left',
      target: 'Turn left',
      native: 'Vira à esquerda',
      literal: 'Turn left',
      emoji: '⬅️',
      phonetic: 'TURN-LEFT',
      audioRef: null,
    },
    {
      id: 'go_straight',
      target: 'Go straight',
      native: 'Vá em frente',
      literal: 'Go straight',
      emoji: '⬆️',
      phonetic: 'GOH-STRAYT',
      audioRef: null,
    },
    {
      id: 'its_on_the_right',
      target: "It's on the right",
      native: 'É à direita',
      literal: 'It-is on the right',
      emoji: '➡️',
      phonetic: 'its-on-thuh-RYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Direction verbs',
    explanation: "Imperativo direto: 'Turn ___', 'Go ___', 'Take ___'. Resposta de localização: 'It's on/at ___'.",
    examples: [
      { target: 'Turn left',           native: 'Vira à esquerda' },
      { target: 'Go straight',          native: 'Vá em frente' },
      { target: 'Take the second right', native: 'Pega a segunda à direita' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as direções',
      pairs: [
        { left: 'Turn left', right: 'Vira à esquerda' },
        { left: 'Go straight', right: 'Vá em frente' },
        { left: 'On the right', right: 'À direita' },
        { left: 'At the corner', right: 'Na esquina' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vira à esquerda na esquina.',
      correct: ['Turn left at the corner.', 'Turn left at the corner', 'turn left at the corner.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Direção',
      sentence: 'The bank is _____ the right.',
      options: ['on', 'at', 'in'],
      correct: 'on',
      context: '"On the right/left" é o padrão.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Go straight then turn right"',
      words: ['right.', 'turn', 'Go', 'then', 'straight'],
      correct: ['Go', 'straight', 'then', 'turn', 'right.'],
      translation: 'Vá em frente, depois vire à direita',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'É à direita.',
      correct: ["It's on the right.", "It is on the right."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Direção natural',
      question: 'Como dizer "vira na primeira à esquerda"?',
      options: [
        { text: 'Take the first left.', correct: true },
        { text: 'Take left first.', correct: false },
        { text: 'First go left.', correct: false },
      ],
      explanation: '"Take the [number] left/right" é o padrão.',
    },
  ],

  rwenDialogue: {
    intro: 'Você pediu direção pra estação. Local te explica.',
    lines: [
      { speaker: 'npc', target: "Go straight, take the second right, and it's on your left.", native: 'Vá em frente, pegue a segunda à direita, e é à sua esquerda.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Got it — straight, second right, on the left. Thank you!", native: 'Entendi — em frente, segunda à direita, à esquerda. Obrigado!', correct: true, feedback: 'Mandou bem.' },
          { target: "OK go.", native: '...', correct: false, feedback: 'Confirma com palavras chave.' },
          { target: "Não entendi.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Turn left (em inglês)', correct: ['Turn left', 'turn left'] },
      { prompt: 'Go straight (em inglês)', correct: ['Go straight', 'go straight'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Dê em inglês as direções de uma rua que você conhece bem — pra um turista.",
    rwenSignoff: "Amanhã — distância.",
  },

  phase8: {
    scenario: "Giving directions in English to a tourist asking about a place near you.",
    rwenRole: "Lost tourist asking for directions.",
    successCriteria: "User uses 'turn left/right', 'go straight', and 'on the left/right' correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
