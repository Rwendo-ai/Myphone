import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-this-that',
  module: 4,
  lesson: 6,
  title: 'This & That — These & Those',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'This' = perto. 'That' = longe. Plural: 'These' (perto, vários) e 'Those' (longe, vários).",
    culturalNote: "Em português a gente tem 'este/isso/aquele' — três níveis. Inglês simplifica em dois: this/that. E muda no plural — these/those. Detalhe: combina sempre com o número (singular/plural).",
  },

  chunks: [
    {
      id: 'this_book',
      target: 'This book',
      native: 'Este livro (perto)',
      literal: 'singular + close',
      emoji: '📕',
      phonetic: 'this-BUK',
      audioRef: null,
    },
    {
      id: 'that_house',
      target: 'That house',
      native: 'Aquela casa (longe)',
      literal: 'singular + far',
      emoji: '🏠',
      phonetic: 'that-HOWS',
      audioRef: null,
    },
    {
      id: 'these_children',
      target: 'These children',
      native: 'Estas crianças (perto)',
      literal: 'plural + close',
      emoji: '👶',
      phonetic: 'theez-CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Demonstratives: this/that, these/those",
    explanation: "this (perto, sing.) → these (perto, pl.). that (longe, sing.) → those (longe, pl.).",
    examples: [
      { target: 'This book / These books',   native: 'Este livro / Estes livros' },
      { target: 'That house / Those houses', native: 'Aquela casa / Aquelas casas' },
      { target: 'This is mine. That is yours.', native: 'Este é meu. Aquele é seu.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Escolha this/that/these/those',
      sentence: '_____ apple in my hand is red.',
      options: ['This', 'That', 'These'],
      correct: 'This',
      context: 'Maçã na mão (perto, singular) → "This".',
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha this/that/these/those',
      sentence: '_____ children over there are playing.',
      options: ['Those', 'These', 'This'],
      correct: 'Those',
      context: 'Crianças longe (plural) → "Those".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Este livro',
      correct: ['This book', 'this book'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estas crianças',
      correct: ['These children', 'these children'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: 'I want _____ shoes (the ones over there).',
      options: [
        { text: 'those', correct: true },
        { text: 'these', correct: false },
        { text: 'that', correct: false },
      ],
      explanation: '"Over there" = longe. Shoes = plural. Logo "those".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "These bags are heavy"',
      words: ['heavy.', 'are', 'These', 'bags'],
      correct: ['These', 'bags', 'are', 'heavy.'],
      translation: 'Estas bolsas são pesadas',
    },
  ],

  rwenDialogue: {
    intro: "Loja de tênis numa galeria em SP. Você tá mostrando pra amiga uns que tá perto e outros longe.",
    lines: [
      {
        speaker: 'npc',
        target: "Which shoes do you like?",
        native: 'Qual tênis você curte?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I like these shoes here, but those shoes over there are too expensive.", native: 'Curto estes daqui, mas aqueles ali estão caros demais.', correct: true, feedback: "Mandou bem — 'these' (perto) e 'those' (longe), ambos plurais." },
          { target: "I like this shoes here, but that shoes over there are expensive.", native: '...', correct: false, feedback: "Shoes é plural. Use 'these' e 'those'." },
          { target: "I like that shoes here, but these shoes over there are expensive.", native: '...', correct: false, feedback: "Inverteu perto e longe. 'These' = perto, 'those' = longe." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa. This/These = perto. That/Those = longe. Combina sempre com singular/plural.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'This book (em inglês)', correct: ['This book', 'this book'] },
      { prompt: 'Those houses (em inglês)', correct: ['Those houses', 'those houses'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Aponta pra três coisas perto ('This is...') e três coisas longe ('That is...'). Sente a diferença.",
    rwenSignoff: "Perto = this. Longe = that. Plural muda pra these/those. Mandou bem.",
  },

  phase8: {
    scenario: "Shopping mall in São Paulo — pointing at items near and far while shopping with a friend.",
    rwenRole: "Friend trying clothes, asks your opinion on near and far items.",
    successCriteria: "User uses all four demonstratives — 'this', 'that', 'these', 'those' — correctly by distance and number.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
