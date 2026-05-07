import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Common foods — Comidas comuns',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Comidas em inglês: bread (pão), rice (arroz), meat (carne). Vocabulário básico que abre cardápios.",
    culturalNote: "Cuidado: 'meat' em inglês é genérico — pode ser carne bovina, suína, frango. Pra precisar: 'beef' (boi), 'pork' (porco), 'chicken' (frango), 'fish' (peixe). Em português 'carne' já tende a significar bovina por padrão.",
  },

  chunks: [
    {
      id: 'bread',
      target: 'Bread',
      native: 'Pão',
      literal: undefined,
      emoji: '🍞',
      phonetic: 'BRED',
      audioRef: null,
    },
    {
      id: 'rice',
      target: 'Rice',
      native: 'Arroz',
      literal: undefined,
      emoji: '🍚',
      phonetic: 'RAYS',
      audioRef: null,
    },
    {
      id: 'meat',
      target: 'Meat',
      native: 'Carne',
      literal: undefined,
      emoji: '🍖',
      phonetic: 'MEET',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Food nouns — countable vs uncountable',
    explanation: "Bread, rice, meat são incontáveis — sem 'a' nem '-s'. Use 'some bread', 'a slice of bread', 'a bowl of rice'.",
    examples: [
      { target: 'Some bread, please.',     native: 'Pão, por favor.' },
      { target: 'A bowl of rice.',          native: 'Uma tigela de arroz.' },
      { target: 'I love meat.',             native: 'Adoro carne.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os alimentos',
      pairs: [
        { left: 'Bread', right: 'Pão' },
        { left: 'Rice', right: 'Arroz' },
        { left: 'Meat', right: 'Carne' },
        { left: 'Fish', right: 'Peixe' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Pão, por favor',
      correct: ['Bread, please', 'Some bread, please', 'bread, please'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sem -s',
      sentence: 'I love _____.',
      options: ['rice', 'rices', 'a rice'],
      correct: 'rice',
      context: "'Rice' é incontável.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I want some bread"',
      words: ['bread.', 'want', 'some', 'I'],
      correct: ['I', 'want', 'some', 'bread.'],
      translation: 'Quero um pouco de pão',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Frango',
      correct: ['Chicken', 'chicken'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pedindo carne',
      question: 'Como pedir carne (genérico) sem ofender vegetarianos?',
      options: [
        { text: "Do you have any meat dishes?", correct: true },
        { text: "I want a meat.", correct: false },
        { text: "Meat please.", correct: false },
      ],
      explanation: "'Meat dishes' soa natural; 'a meat' não rola.",
    },
  ],

  rwenDialogue: {
    intro: 'Restaurante em SP, garçom estagiário americano.',
    lines: [
      { speaker: 'npc', target: "What would you like to eat?", native: 'O que vai querer comer?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like some rice and chicken, please.", native: 'Quero um pouco de arroz e frango.', correct: true, feedback: 'Mandou bem.' },
          { target: "I want a rice and a chicken.", native: '...', correct: false, feedback: "Sem 'a' antes — 'some rice', 'chicken'." },
          { target: "Eat please.", native: '...', correct: false, feedback: 'Frase quebrada.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Bread (em inglês)', correct: ['Bread', 'bread'] },
      { prompt: 'Meat (em inglês)', correct: ['Meat', 'meat'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Liste em inglês cinco comidas que você comeu essa semana.",
    rwenSignoff: "Amanhã — restaurante.",
  },

  phase8: {
    scenario: "Restaurant in São Paulo. Order food using basic food vocabulary.",
    rwenRole: "Polite English-speaking server.",
    successCriteria: "User names three foods correctly, uses 'some' or 'a slice/bowl of' for uncountables.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
