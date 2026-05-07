import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: 'How far? — Quão longe?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'How far?' — pergunta de distância. Resposta em tempo: 'five minutes' walk', ou 'just around the corner' (logo ali).",
    culturalNote: "Brasileiros gostam de medir em quadras. Em inglês mede-se em minutos a pé ('a 10-minute walk') ou pontos visuais ('two blocks down'). 'Just around the corner' = logo ali na esquina, perto.",
  },

  chunks: [
    {
      id: 'how_far',
      target: 'How far?',
      native: 'Quão longe?',
      literal: 'How far?',
      emoji: '📏',
      phonetic: 'HOW-FAR',
      audioRef: null,
    },
    {
      id: 'five_minutes_walk',
      target: "Five minutes' walk",
      native: 'Cinco minutos a pé',
      literal: 'Five minutes walk',
      emoji: '🚶',
      phonetic: 'fyv-MIN-its-WAWK',
      audioRef: null,
    },
    {
      id: 'around_the_corner',
      target: 'Just around the corner',
      native: 'Logo ali na esquina',
      literal: 'Just around the corner',
      emoji: '↩️',
      phonetic: 'JUST-uh-ROWND-thuh-COR-ner',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Distance — near and far',
    explanation: "'How far is it?' / 'Is it far?'. Resposta em tempo ('5 minutes', 'a 5-minute walk'), em distância visual ('two blocks down') ou idioma ('just around the corner').",
    examples: [
      { target: 'How far is it?',              native: 'Fica longe?' },
      { target: "It's a five-minute walk.",     native: 'É cinco minutos a pé.' },
      { target: "It's just around the corner.", native: 'É logo ali na esquina.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine distâncias',
      pairs: [
        { left: 'How far?', right: 'Quão longe?' },
        { left: "Five minutes' walk", right: 'Cinco minutos a pé' },
        { left: 'Around the corner', right: 'Na esquina' },
        { left: 'Two blocks down', right: 'Duas quadras' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Fica longe?',
      correct: ['Is it far?', 'How far is it?', 'is it far?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Distância em tempo',
      sentence: "It's a ten-_____ walk.",
      options: ['minute', 'minutes', 'min'],
      correct: 'minute',
      context: 'Adjetivo composto: "a ten-minute walk" (sem -s no minute).',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"It's just around the corner\"",
      words: ['corner.', 'around', "It's", 'just', 'the'],
      correct: ["It's", 'just', 'around', 'the', 'corner.'],
      translation: 'É logo ali',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Cinco minutos a pé',
      correct: ["Five minutes' walk", 'A five-minute walk', 'Five minutes walk'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Distância',
      question: 'Pergunta natural sobre distância:',
      options: [
        { text: "Is it far from here?", correct: true },
        { text: "Far is it?", correct: false },
        { text: "Distance how?", correct: false },
      ],
      explanation: '"Is it far?" é o padrão.',
    },
  ],

  rwenDialogue: {
    intro: 'Você quer saber se chega de carro ou caminhando.',
    lines: [
      { speaker: 'npc', target: "Where do you need to go?", native: 'Pra onde você precisa ir?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I need to get to the museum. Is it far?", native: 'Preciso chegar no museu. Fica longe?', correct: true, feedback: 'Mandou bem.' },
          { target: "Far museum?", native: '...', correct: false, feedback: 'Frase quebrada.' },
          { target: "Tá longe?", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'How far is it? (em inglês)', correct: ['How far is it?', 'Is it far?'] },
      { prompt: 'Just around the corner (em inglês)', correct: ['Just around the corner', 'just around the corner'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês a distância de 3 lugares perto de você — em minutos a pé.",
    rwenSignoff: "Amanhã — transporte.",
  },

  phase8: {
    scenario: "Asking a stranger if a place is close — and confirming the distance.",
    rwenRole: "Helpful local who answers in time/blocks.",
    successCriteria: "User asks 'How far?' or 'Is it far?', confirms by repeating the time or distance back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
