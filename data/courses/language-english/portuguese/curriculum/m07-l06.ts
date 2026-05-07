import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cooking verbs — Cozinhar',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Verbos da cozinha: cook (cozinhar), chop (picar), boil (ferver). Pra explicar uma receita ou comentar um prato.",
    culturalNote: "Em português a gente diz 'pica a cebola, ferve a água'. Em inglês a estrutura é igualzinha — imperativo direto: 'Chop the onions, boil the water'. Útil pra ensinar feijoada pra um americano sem se enrolar.",
  },

  chunks: [
    {
      id: 'cook',
      target: 'Cook',
      native: 'Cozinhar',
      literal: undefined,
      emoji: '👨‍🍳',
      phonetic: 'KOOK',
      audioRef: null,
    },
    {
      id: 'chop',
      target: 'Chop',
      native: 'Picar',
      literal: undefined,
      emoji: '🔪',
      phonetic: 'CHOP',
      audioRef: null,
    },
    {
      id: 'boil',
      target: 'Boil',
      native: 'Ferver',
      literal: 'Boil (water)',
      emoji: '♨️',
      phonetic: 'BOYL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Action verbs — instructions',
    explanation: "Em receitas, use o imperativo direto: 'Chop the onions. Boil the water. Cook for ten minutes.' Igualzinho ao português.",
    examples: [
      { target: 'You boil the water first.',  native: 'Primeiro você ferve a água.' },
      { target: 'Chop the onions finely.',     native: 'Pica a cebola fininha.' },
      { target: 'Cook for ten minutes.',        native: 'Cozinha por dez minutos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os verbos',
      pairs: [
        { left: 'Cook', right: 'Cozinhar' },
        { left: 'Chop', right: 'Picar' },
        { left: 'Boil', right: 'Ferver' },
        { left: 'Fry', right: 'Fritar' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Pica a cebola',
      correct: ['Chop the onion', 'Chop the onions', 'chop the onion'],
    },
    {
      type: 'fill_blank',
      instruction: 'Receita',
      sentence: '_____ the water for ten minutes.',
      options: ['Boil', 'Fry', 'Chop'],
      correct: 'Boil',
      context: 'Água ferve.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Cook for thirty minutes"',
      words: ['minutes.', 'thirty', 'Cook', 'for'],
      correct: ['Cook', 'for', 'thirty', 'minutes.'],
      translation: 'Cozinhe por trinta minutos',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Frita o frango',
      correct: ['Fry the chicken', 'fry the chicken'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Receita brasileira',
      question: 'Como começa uma receita simples?',
      options: [
        { text: 'First, chop the onions and garlic.', correct: true },
        { text: 'First chop onions and garlic.', correct: false },
        { text: 'Chop you the onions garlic.', correct: false },
      ],
      explanation: "'First, chop the onions and garlic' soa natural.",
    },
  ],

  rwenDialogue: {
    intro: 'Sua amiga americana quer aprender a fazer feijoada.',
    lines: [
      { speaker: 'npc', target: "Teach me — what's the first step?", native: 'Me ensina — qual o primeiro passo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "First, chop the onions and garlic. Then boil the beans.", native: 'Primeiro pica a cebola e o alho. Depois ferve o feijão.', correct: true, feedback: 'Mandou bem — receita clara.' },
          { target: "Onions garlic boil beans.", native: '...', correct: false, feedback: 'Falta estrutura.' },
          { target: "Pica cebola.", native: 'Pica cebola.', correct: false, feedback: 'Em português — traduza.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Receita transmitida.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Cook (em inglês)', correct: ['Cook', 'cook'] },
      { prompt: 'Boil the water (em inglês)', correct: ['Boil the water', 'boil the water'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Descreva em inglês 3 passos da última coisa que você cozinhou. Use chop, boil, cook.",
    rwenSignoff: "Amanhã — bebidas.",
  },

  phase8: {
    scenario: "Teaching an American friend a simple Brazilian recipe over WhatsApp.",
    rwenRole: "Curious friend who wants to cook your dish.",
    successCriteria: "User uses 'chop', 'boil', 'cook' or 'fry' in clear sequential instructions.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
