import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-plurals-regular',
  module: 4,
  lesson: 4,
  title: 'Plurals — adding -s',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Plural em inglês é praticamente só adicionar '-s'. Cat → cats. Day → days. Mais simples que o português.",
    culturalNote: "Em português plural muda mais — casa/casas, mão/mãos, papel/papéis. Em inglês 95% das vezes só adiciona '-s'. Mas tem a regrinha do '-es' (bus → buses) e o '-ies' (baby → babies). Detalhes pequenos, mas o brasileiro pula muitas vezes — fala 'two book' em vez de 'two books'.",
  },

  chunks: [
    {
      id: 'cats',
      target: 'Cat → Cats',
      native: 'Gato → Gatos',
      literal: 'add -s for plural',
      emoji: '🐱',
      phonetic: 'kat → kats',
      audioRef: null,
    },
    {
      id: 'days',
      target: 'Day → Days',
      native: 'Dia → Dias',
      literal: 'add -s',
      emoji: '📅',
      phonetic: 'day → days',
      audioRef: null,
    },
    {
      id: 'friends',
      target: 'Friend → Friends',
      native: 'Amigo → Amigos',
      literal: 'add -s',
      emoji: '👥',
      phonetic: 'frend → frends',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Plurals: add -s (or -es)",
    explanation: "Padrão: adiciona '-s'. Exceções: palavras terminadas em -s, -x, -ch, -sh ganham '-es' (bus → buses, box → boxes). Palavras em -y depois de consoante: -y vira -ies (baby → babies).",
    examples: [
      { target: 'One book, two books',     native: 'Um livro, dois livros' },
      { target: 'One bus, three buses',    native: 'Um ônibus, três ônibus' },
      { target: 'One baby, two babies',    native: 'Um bebê, dois bebês' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Coloque no plural',
      sentence: 'I have two _____ (cat).',
      options: ['cats', 'cates', 'cat'],
      correct: 'cats',
      context: 'Cat → cats (só -s).',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Três livros',
      correct: ['Three books', 'three books'],
    },
    {
      type: 'fill_blank',
      instruction: 'Coloque no plural — atenção',
      sentence: 'There are five _____ (bus) in the parking lot.',
      options: ['buses', 'buss', 'busies'],
      correct: 'buses',
      context: 'Bus termina em -s, então -es: buses.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I bought four apples"',
      words: ['apples.', 'four', 'I', 'bought'],
      correct: ['I', 'bought', 'four', 'apples.'],
      translation: 'Comprei quatro maçãs',
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual plural está certo?',
      question: 'One baby, two _____',
      options: [
        { text: 'babies', correct: true },
        { text: 'babys', correct: false },
        { text: 'baby', correct: false },
      ],
      explanation: '-y depois de consoante (b) vira -ies: babies.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Cinco dias',
      correct: ['Five days', 'five days'],
    },
  ],

  rwenDialogue: {
    intro: "Feira em Pinheiros. Você compra frutas; o feirante é gringo recém-chegado, só fala inglês.",
    lines: [
      {
        speaker: 'npc',
        target: "Welcome! What would you like today?",
        native: 'Bem-vinda! O que vai querer hoje?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two apples, three bananas, and four oranges, please.", native: 'Duas maçãs, três bananas e quatro laranjas, por favor.', correct: true, feedback: "Mandou bem — apples, bananas, oranges, todos com -s." },
          { target: "Two apple, three banana, and four orange, please.", native: 'Duas maçã, três banana, quatro laranja.', correct: false, feedback: "Em inglês precisa do -s no plural — apples, bananas, oranges." },
          { target: "Two apples, three banana, and four oranges, please.", native: 'Duas maçãs, três banana, quatro laranjas.', correct: false, feedback: "Quase — 'banana' vira 'bananas'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa. Plural em inglês é só pedir um -s. Não pula.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Coloque no plural.',
    prompts: [
      { prompt: 'Plural de "day"', correct: ['Days', 'days'] },
      { prompt: 'Plural de "friend"', correct: ['Friends', 'friends'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Olha 5 coisas perto de você. Diga em inglês com plurais: 'three chairs', 'two phones', 'four books'. Repara no '-s'.",
    rwenSignoff: "O '-s' é pequeno mas faz diferença. Mandou bem.",
  },

  phase8: {
    scenario: "Buying fruit at a market in Pinheiros from an English-speaking vendor — using plurals for quantities.",
    rwenRole: "Polite expat fruit vendor who expects clear plurals.",
    successCriteria: "User produces six different plurals in conversation ('apples', 'bananas', 'oranges', 'tomatoes', 'mangoes', 'lemons') with quantities.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
