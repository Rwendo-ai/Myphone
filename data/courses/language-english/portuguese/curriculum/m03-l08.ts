import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Describing yourself — Se descrevendo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Como você é? Amigável, tímido, curioso? Em inglês: 'I'm friendly', 'I'm shy sometimes', 'I love learning'. Adjetivos te ajudam a se mostrar sem inventar.",
    culturalNote: "Brasileiro às vezes hesita em se elogiar — soa 'metido'. Em inglês, especialmente em entrevista, dizer 'I'm friendly' / 'I'm hardworking' é esperado, não arrogante. Cultura diferente: lá você precisa se vender com naturalidade, sem culpa.",
  },

  chunks: [
    {
      id: 'im_friendly',
      target: "I'm friendly",
      native: 'Sou amigável',
      literal: 'I-am friendly',
      emoji: '😊',
      phonetic: 'aym-FREND-lee',
      audioRef: null,
    },
    {
      id: 'im_shy_sometimes',
      target: "I'm shy sometimes",
      native: 'Sou tímido(a) às vezes',
      literal: 'I-am shy sometimes',
      emoji: '🙈',
      phonetic: 'aym-SHAI-sum-taymz',
      audioRef: null,
    },
    {
      id: 'i_love_learning',
      target: 'I love learning',
      native: 'Adoro aprender',
      literal: 'I love learning',
      emoji: '📖',
      phonetic: 'ay-LUV-LUR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjectives for self',
    explanation: "Depois de 'I'm', coloque um adjetivo: friendly (amigável), shy (tímido), curious (curioso), hardworking (trabalhador), patient (paciente). Adicionar 'sometimes' ou 'always' suaviza: 'I'm shy sometimes' soa mais leve que 'I'm shy' como sentença final.",
    examples: [
      { target: "I'm friendly",                native: 'Sou amigável' },
      { target: "I'm patient",                  native: 'Sou paciente' },
      { target: "I'm curious by nature",         native: 'Sou curioso por natureza' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os adjetivos',
      pairs: [
        { left: 'Friendly',     right: 'Amigável' },
        { left: 'Shy',          right: 'Tímido' },
        { left: 'Curious',      right: 'Curioso' },
        { left: 'Hardworking',   right: 'Trabalhador' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Sou amigável',
      correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Adoro aprender',
      correct: ['I love learning', 'i love learning', 'I love to learn', 'i love to learn'],
    },
    {
      type: 'fill_blank',
      instruction: "Escolha a forma certa",
      sentence: "I'm ____ sometimes.",
      options: ['shy', 'shies', 'shyly'],
      correct: 'shy',
      context: 'Depois de "I\'m" usa adjetivo, não advérbio.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase descrevendo você',
      words: ["I'm", 'friendly', 'and', 'patient'],
      correct: ["I'm", 'friendly', 'and', 'patient'],
      translation: 'Sou amigável e paciente',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de aprender',
      words: ['I', 'love', 'learning'],
      correct: ['I', 'love', 'learning'],
      translation: 'Adoro aprender',
    },
  ],

  rwenDialogue: {
    intro: "Entrevista de emprego numa multinacional em SP. O gerente quer te conhecer.",
    lines: [
      { speaker: 'npc', target: "Describe yourself in three words.", native: 'Descreva você em três palavras.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm friendly, hardworking, and curious.", native: 'Sou amigável, trabalhador e curioso.', correct: true,  feedback: "Mandou bem — três adjetivos sem hesitar." },
          { target: "Friendly. Hardworking. Curious.",          native: 'Amigável. Trabalhador. Curioso.',       correct: false, feedback: "Bons adjetivos, mas faltou 'I'm' — frase completa demonstra fluência." },
          { target: "I am very good.",                          native: 'Sou muito bom.',                         correct: false, feedback: "Vago demais — entrevista quer adjetivos específicos." },
        ],
      },
      { speaker: 'npc', target: "Lovely. Tell me about a time you were curious.", native: 'Ótimo. Conte sobre uma vez que você foi curioso.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Em inglês profissional, falar bem de si mesmo é educação — não soberba. Esse é o ajuste cultural.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Sou amigável (em inglês)',                correct: ["I'm friendly", "I am friendly", "i'm friendly", "i am friendly"] },
      { prompt: 'Sou tímido às vezes (em inglês)',        correct: ["I'm shy sometimes", "I am shy sometimes", "i'm shy sometimes", "i am shy sometimes"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escolha três adjetivos que te descrevem. Escreva em inglês: 'I'm ___, ___, and ___'. Treine como se fosse a resposta de 'Describe yourself' numa entrevista.",
    rwenSignoff: "Mandou bem. Até amanhã.",
  },

  phase8: {
    scenario: "You're in the final five minutes of an English-language job interview at a multinational in São Paulo. The interviewer says, 'Last question — describe yourself in three words.'",
    rwenRole: "Mr. Mhlanga, 45, the hiring manager. Polite but probing. After your three words, asks for one example of one of them.",
    successCriteria: "User produces three adjectives in an 'I'm X, Y, and Z' sentence (full sentence, not bare list), then backs one up with a one-sentence example when probed.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
