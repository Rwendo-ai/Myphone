import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-shona-food',
  module: 7,
  lesson: 8,
  title: 'Sharing Brazilian food in English — Feijoada, pão de queijo, brigadeiro',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Estrangeiros não conhecem feijoada, pão de queijo, brigadeiro. Você é o tradutor cultural — mantém o nome em português, explica em inglês.",
    culturalNote: "Não traduza 'feijoada' como 'black bean stew with pork'. Diga 'feijoada' e explique. Italianos não traduzem 'risotto', japoneses não traduzem 'sushi' — você não traduz 'feijoada'. Saudade pela palavra original tem valor cultural — e respeito também.",
  },

  chunks: [
    {
      id: 'feijoada',
      target: "Feijoada — Brazil's signature dish",
      native: 'Feijoada',
      literal: 'Black bean and pork stew',
      emoji: '🍲',
      phonetic: 'fay-zhwa-DA',
      audioRef: null,
    },
    {
      id: 'pao_de_queijo',
      target: 'Pão de queijo — cheese bread',
      native: 'Pão de queijo',
      literal: 'Cheese bread (small, chewy)',
      emoji: '🧀',
      phonetic: 'pow-deh-KAY-zhoo',
      audioRef: null,
    },
    {
      id: 'brigadeiro',
      target: 'Brigadeiro — chocolate truffle',
      native: 'Brigadeiro',
      literal: 'Condensed milk chocolate truffle',
      emoji: '🍫',
      phonetic: 'bri-ga-DAY-ro',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming foreign foods — keep the Portuguese name, then explain',
    explanation: "Estrutura: <Nome em português> — <explicação curta em inglês>. 'Feijoada — it's a black bean and pork stew, our national dish.' Mantenha a palavra original; o inglês entra na explicação.",
    examples: [
      { target: 'Feijoada is a black bean stew with pork — our Saturday tradition.',          native: 'Feijoada é um ensopado de feijão preto com porco — nossa tradição de sábado.' },
      { target: 'Pão de queijo — small cheese breads, eaten warm.',                            native: 'Pão de queijo — pãozinhos de queijo, comidos quentes.' },
      { target: 'Brigadeiro — a chocolate truffle made with condensed milk.',                  native: 'Brigadeiro — trufa de chocolate com leite condensado.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os pratos',
      pairs: [
        { left: 'Feijoada', right: 'Black bean stew' },
        { left: 'Pão de queijo', right: 'Cheese bread' },
        { left: 'Brigadeiro', right: 'Chocolate truffle' },
        { left: 'Coxinha', right: 'Chicken croquette' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — explicando feijoada',
      prompt: 'Feijoada é um ensopado de feijão preto com porco.',
      correct: ['Feijoada is a black bean stew with pork.', 'Feijoada is a black bean stew with pork', 'feijoada is a black bean stew with pork.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Mantém o nome',
      sentence: '_____ is our national dish.',
      options: ['Feijoada', 'Black bean stew', 'Brazilian food'],
      correct: 'Feijoada',
      context: 'Mantenha o nome original.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Pão de queijo is a cheese bread"',
      words: ['bread.', 'a', 'queijo', 'cheese', 'is', 'Pão de'],
      correct: ['Pão de', 'queijo', 'is', 'a', 'cheese', 'bread.'],
      translation: 'Pão de queijo é um pãozinho de queijo',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Brigadeiro é uma trufa de chocolate.',
      correct: ['Brigadeiro is a chocolate truffle.', 'Brigadeiro is a chocolate truffle', 'brigadeiro is a chocolate truffle.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Apresentando feijoada',
      question: 'Qual é a melhor maneira?',
      options: [
        { text: "It's called feijoada — a black bean stew with pork.", correct: true },
        { text: "It's a black bean dish.", correct: false },
        { text: "Brazilian feijoada food.", correct: false },
      ],
      explanation: "Nomeie + explique brevemente.",
    },
  ],

  rwenDialogue: {
    intro: 'Almoço de sábado com colega americana — você fez feijoada.',
    lines: [
      { speaker: 'npc', target: "What is this called?", native: 'Como se chama isso?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's called feijoada — a black bean stew with pork. We eat it on Saturdays.", native: 'Se chama feijoada — um ensopado de feijão preto com porco. Comemos aos sábados.', correct: true, feedback: 'Mandou bem — nome + explicação + tradição.' },
          { target: "Black bean stew.", native: 'Ensopado de feijão preto.', correct: false, feedback: 'Mantenha o nome original.' },
          { target: "Brazilian food.", native: 'Comida brasileira.', correct: false, feedback: 'Genérico demais — nomeia.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Cultura passada com nome próprio.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Feijoada (em inglês)', correct: ['Feijoada', 'feijoada'] },
      { prompt: 'Pão de queijo is cheese bread (em inglês)', correct: ['Pão de queijo is cheese bread', 'Pão de queijo is a cheese bread'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escolha um prato brasileiro. Escreva em inglês: '<Nome> — <explicação curta>'. Mantenha o nome.",
    rwenSignoff: "Amanhã — receber gente em casa.",
  },

  phase8: {
    scenario: "Saturday lunch with an American colleague — you cooked feijoada and they ask about it.",
    rwenRole: "Curious foreigner trying Brazilian food for the first time.",
    successCriteria: "User keeps the Portuguese name and adds a short English explanation. Names at least two Brazilian foods.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
