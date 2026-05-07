import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: 'I like / I don\'t like food — Gostos e desgostos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Falando do que gosta e não gosta. 'I love it', 'I don't like it', 'It's delicious'. Em jantar internacional, brasileiro fica tímido — fala!",
    culturalNote: "No Brasil 'comeu, comeu' — falar que não gostou pode parecer rude. Em jantar americano/inglês, é esperado que você tenha opinião: 'I love this', 'It's a bit too spicy for me'. Não é grosseria — é interação.",
  },

  chunks: [
    {
      id: 'i_love_it',
      target: 'I love it',
      native: 'Adoro',
      literal: 'I love it',
      emoji: '❤️',
      phonetic: 'ay-LUV-it',
      audioRef: null,
    },
    {
      id: 'i_dont_like',
      target: "I don't like it",
      native: 'Não gosto',
      literal: "I don't like it",
      emoji: '👎',
      phonetic: 'ay-DOHNT-LAYK-it',
      audioRef: null,
    },
    {
      id: 'its_delicious',
      target: "It's delicious",
      native: 'Tá delicioso',
      literal: "It is delicious",
      emoji: '😋',
      phonetic: 'its-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Preferences — like, love, don\'t like',
    explanation: "Três níveis: 'I like it' (gosto), 'I love it' (adoro), 'I don't like it' (não gosto). Adicione 'really': 'I really like it' (gosto muito), 'I really don't like onions' (não gosto mesmo de cebola).",
    examples: [
      { target: 'I love feijoada.',                native: 'Adoro feijoada.' },
      { target: "I don't really like fish.",    native: 'Não gosto muito de peixe.' },
      { target: "It's delicious.",              native: 'Tá delicioso.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os gostos',
      pairs: [
        { left: 'I love it', right: 'Adoro' },
        { left: "I don't like it", right: 'Não gosto' },
        { left: "It's delicious", right: 'Tá delicioso' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Adoro feijoada',
      correct: ['I love feijoada', 'I love feijoada.', 'i love feijoada'],
    },
    {
      type: 'fill_blank',
      instruction: 'Negação',
      sentence: "I _____ like it.",
      options: ["don't", "am not", "no"],
      correct: "don't",
      context: "'I don't like it'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It is delicious"',
      words: ['delicious.', 'is', 'It'],
      correct: ['It', 'is', 'delicious.'],
      translation: 'Tá delicioso',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Não gosto muito de peixe',
      correct: ["I don't really like fish", "I don't really like fish.", "I really don't like fish"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Suavizando',
      question: 'Como dizer educadamente que não gosta?',
      options: [
        { text: "It's not really for me, but thank you.", correct: true },
        { text: "I hate it.", correct: false },
        { text: "Bad food.", correct: false },
      ],
      explanation: "'Not really for me' é educado e diplomático.",
    },
  ],

  rwenDialogue: {
    intro: 'Jantar na casa de uma amiga inglesa. Ela fez bobotie pela primeira vez.',
    lines: [
      { speaker: 'npc', target: "Have you tried it? What do you think?", native: 'Provou? O que achou?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's delicious — I love it. Thank you for cooking.", native: 'Tá delicioso — adoro. Obrigada por cozinhar.', correct: true, feedback: 'Mandou bem — elogio caloroso e agradecimento.' },
          { target: "Bad.", native: 'Ruim.', correct: false, feedback: 'Direto demais — suavize.' },
          { target: "OK.", native: 'OK.', correct: false, feedback: 'Sem opinião — diga o que sentiu.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Calor brasileiro com inglês fluente.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I love it (em inglês)', correct: ['I love it', 'I love it.', 'i love it'] },
      { prompt: "I don't like it (em inglês)", correct: ["I don't like it", "I do not like it", "i don't like it"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa em três comidas. Em inglês: uma 'I love', uma 'I like', uma 'I don't really like'.",
    rwenSignoff: "Amanhã — verbos de cozinhar.",
  },

  phase8: {
    scenario: "Dinner at an English-speaking friend's home. They made a new dish — give honest, polite feedback.",
    rwenRole: "Friend who cooked and is curious for opinion.",
    successCriteria: "User says one positive ('I love it' / 'It's delicious') and uses one diplomatic phrase if needed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
