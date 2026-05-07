import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — Eu sou...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Hoje vamos nos apresentar em inglês. A frase-chave é 'I am' — ou 'I'm' contraído. É a base de tudo: nome, profissão, origem.",
    culturalNote: "Pra nós brasileiros, o pulo do gato aqui é o ser/estar — em inglês não tem essa distinção: 'I am' serve pra ambos. 'I am Maria' (sou Maria) e 'I am tired' (estou cansada) usam o mesmo verbo. E mais: você precisa do 'am' em todas as frases — não dá pra omitir como em 'Sou estudante'. Em inglês: 'I am a student' — sem o 'am' soa quebrado.",
  },

  chunks: [
    {
      id: 'i_am',
      target: 'I am',
      native: 'Eu sou / Eu estou',
      literal: 'I am',
      emoji: '🙋',
      phonetic: 'ay-AM',
      audioRef: null,
    },
    {
      id: 'im_a_student',
      target: "I'm a student",
      native: 'Eu sou estudante',
      literal: 'I-am a student',
      emoji: '📚',
      phonetic: 'aym-uh-STOO-dnt',
      audioRef: null,
    },
    {
      id: 'im_from_brazil',
      target: "I'm from Brazil",
      native: 'Eu sou do Brasil',
      literal: 'I-am from Brazil',
      emoji: '🇧🇷',
      phonetic: 'aym-from-bra-ZEEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb "to be" — I am / I\'m',
    explanation: "'I am' é a forma do verbo 'to be' pra primeira pessoa. Pode contrair pra 'I'm'. Cuidado: em inglês, 'be' cobre 'ser' E 'estar'. 'I am Maria' (sou) e 'I am happy' (estou) — mesmo verbo. E note também: 'I'm a student' precisa do 'a' (artigo) — sem ele soa errado.",
    examples: [
      { target: "I am Maria",          native: 'Eu sou Maria' },
      { target: "I'm a student",         native: 'Eu sou estudante' },
      { target: "I'm from Brazil",     native: 'Eu sou do Brasil' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: 'I am',                 right: 'Eu sou' },
        { left: "I'm a student",         right: 'Eu sou estudante' },
        { left: "I'm from Brazil",     right: 'Eu sou do Brasil' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Eu sou estudante',
      correct: ["I'm a student", "I am a student", "i'm a student", "i am a student"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Eu sou do Brasil',
      correct: ["I'm from Brazil", "I am from Brazil", "i'm from Brazil", "i am from Brazil"],
    },
    {
      type: 'fill_blank',
      instruction: "Complete com 'I'm' ou 'I am'",
      sentence: "____ from São Paulo.",
      options: ["I'm", 'I am the', 'Am I'],
      correct: "I'm",
      context: 'Você tá se apresentando.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a apresentação',
      words: ["I'm", 'a', 'student'],
      correct: ["I'm", 'a', 'student'],
      translation: 'Eu sou estudante',
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a frase certa',
      question: "Sou Maria. Qual está certo em inglês?",
      options: [
        { text: "I am Maria.",   correct: true },
        { text: "Me Maria.",     correct: false },
        { text: "I Maria.",      correct: false },
      ],
      explanation: "Em inglês precisa do 'am' entre 'I' e o nome. 'I Maria' soa quebrado.",
    },
  ],

  rwenDialogue: {
    intro: "Você chegou num workshop de inglês em SP. A facilitadora pede pra cada um se apresentar.",
    lines: [
      { speaker: 'npc', target: "Welcome! Please tell us about yourself.", native: 'Bem-vindo! Por favor, fale um pouco sobre você.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm Maria. I'm a student from Brazil.", native: 'Oi, eu sou a Maria. Sou estudante do Brasil.', correct: true,  feedback: "Mandou bem — nome, profissão e origem em duas frases." },
          { target: "Maria. Student. Brazil.",                    native: 'Maria. Estudante. Brasil.',                     correct: false, feedback: "Faltou o 'I'm' — fica robótico. Adicione." },
          { target: "I Maria from Brazil.",                       native: 'Eu Maria do Brasil.',                           correct: false, feedback: "Esqueceu o 'am' — em inglês não dá pra omitir." },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you, Maria.", native: 'Prazer em conhecer, Maria.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Três coisas — nome, profissão, origem — com 'I'm'. Padrão de apresentação em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: "Eu sou estudante (em inglês)",          correct: ["I'm a student", "I am a student", "i'm a student", "i am a student"] },
      { prompt: "Eu sou do Brasil (em inglês)",     correct: ["I'm from Brazil", "I am from Brazil", "i'm from Brazil", "i am from Brazil"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Fala três frases que começam com 'I'm ...' hoje — em voz alta: 'I'm Maria.' / 'I'm a student.' / 'I'm from Brazil.'",
    rwenSignoff: "Bom começo. Até amanhã.",
  },

  phase8: {
    scenario: "You're at the start of an English-language workshop in São Paulo. The facilitator goes round the room and asks each person to introduce themselves in one or two sentences.",
    rwenRole: "Tariro, 35, the facilitator. Warm, encouraging. Asks one gentle follow-up after each person speaks.",
    successCriteria: "User produces at least two 'I'm ...' sentences (e.g., name + role/origin) and answers the follow-up without dropping the verb 'am'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
