import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed practice — articles in flow',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Agora misturamos tudo — a, an, the e nada. Aplicar fluindo é o que separa quem 'sabe' de quem 'fala'.",
    culturalNote: "Em português a gente sente o artigo certo no automático. Em inglês o brasileiro tropeça nos extremos: ou esquece o artigo ('I went to market'), ou exagera ('I love the music'). A regra de ouro: a/an apresentação, the já conhecido, nada pra abstrato/genérico.",
  },

  chunks: [
    {
      id: 'a_the_combo',
      target: 'I read a book. The book was good.',
      native: 'Li um livro. O livro foi bom.',
      literal: 'a (intro) → the (after intro)',
      emoji: '📖',
      phonetic: 'I read a buk. Thuh buk wuhz gud.',
      audioRef: null,
    },
    {
      id: 'no_the_combo',
      target: 'Children love music. The children at this school sing.',
      native: 'Crianças adoram música. As crianças desta escola cantam.',
      literal: 'general (no article) → specific (the)',
      emoji: '🎵',
      phonetic: 'CHIL-dren luv MYU-zik...',
      audioRef: null,
    },
    {
      id: 'mixed_flow',
      target: 'I have a dog. The dog likes water.',
      native: 'Tenho um cachorro. O cachorro gosta de água.',
      literal: 'a → the → no article (water)',
      emoji: '🐕',
      phonetic: 'I hav a dog...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flow",
    explanation: "Regrão: (1) 'a/an' na primeira menção. (2) 'the' depois que ambos sabem. (3) Nada com substantivos abstratos ou plurais genéricos. Articles fluindo são marca de fluência.",
    examples: [
      { target: 'I bought a phone yesterday. The phone is excellent.', native: 'Comprei um celular ontem. O celular é excelente.' },
      { target: 'Music is universal. The music at this party is loud.', native: 'Música é universal. A música desta festa tá alta.' },
      { target: 'I have many friends. Some friends live in Rio.',   native: 'Tenho muitos amigos. Alguns moram no Rio.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Escolha articles (a/an/the/—)',
      sentence: 'I saw _____ man at _____ market. _____ man was selling tomatoes.',
      options: ['a / the / The', 'the / a / A', 'a / a / A'],
      correct: 'a / the / The',
      context: 'Homem (primeiro). Mercado (conhecido). Homem (já mencionado).',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Crianças adoram música.',
      correct: ['Children love music.', 'Children love music', 'children love music.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha o artigo',
      sentence: 'I drink _____ water every day. _____ water from this well is clean.',
      options: ['— / The', 'The / The', 'A / A'],
      correct: '— / The',
      context: 'Água em geral (sem). Água específica (the).',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "She is a teacher at the school"',
      words: ['school.', 'teacher', 'is', 'She', 'a', 'the', 'at'],
      correct: ['She', 'is', 'a', 'teacher', 'at', 'the', 'school.'],
      translation: 'Ela é professora na escola',
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a frase correta',
      question: 'Choose the natural English:',
      options: [
        { text: 'I have a brother. The brother lives in London.', correct: true },
        { text: 'I have brother. Brother lives in London.', correct: false },
        { text: 'I have the brother. A brother lives in London.', correct: false },
      ],
      explanation: 'Primeira menção = a. Já mencionado = the.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tenho uma maçã. A maçã é vermelha.',
      correct: ['I have an apple. The apple is red.', 'I have an apple. The apple is red'],
    },
  ],

  rwenDialogue: {
    intro: "Conta pra um amigo americano o que aconteceu hoje.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me what happened today.",
        native: 'Conta o que aconteceu hoje.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I went to a market. The market was busy. I bought some apples and a chicken.", native: 'Fui à feira. Tava cheia. Comprei umas maçãs e um frango.', correct: true, feedback: "Mandou bem — 'a market' (intro), 'the market' (já mencionado), 'some apples', 'a chicken'." },
          { target: "I went to market. Market was busy. I bought apples and chicken.", native: 'Fui ao mercado. Mercado tava cheio. Comprei maçãs e frango.', correct: false, feedback: "Faltou articles — adicione 'a market', 'the market', 'a chicken'." },
          { target: "I went to the market. A market was busy. I bought the apples.", native: '...', correct: false, feedback: "Inverteu a/the. Primeiro = a, depois = the." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa. Articles entram naturalmente — primeira menção a, segunda the, abstratos sem nada.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: '"I bought ___ apple. ___ apple was red." (preencha)', correct: ['an / The', 'an, The', 'an The', 'An The'] },
      { prompt: '"___ children at school love ___ music." (pode ser —)', correct: ['The / —', 'The —', 'the —', 'the / —'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Lê um parágrafo em inglês (notícia, livro). Para em cada artigo: por que a/an/the/nada? Treino do olho.",
    rwenSignoff: "Articles entram pelo treino. Lê, presta atenção, aprende.",
  },

  phase8: {
    scenario: "Telling a friend about a story you heard on the radio in English. Articles must flow.",
    rwenRole: "Friend listening to your story.",
    successCriteria: "User uses three or more different articles correctly in one sustained narrative.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
