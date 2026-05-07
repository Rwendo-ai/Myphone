import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — When to use it',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'The' aponta pra algo específico que você e o ouvinte já conhecem. É o equivalente fraco de 'o/a' do português.",
    culturalNote: "Em português a gente usa 'o/a' antes de quase tudo — 'o livro', 'a casa'. Em inglês 'the' é mais seletivo: só pra coisa específica e conhecida. 'A book' = um livro qualquer. 'The book' = aquele livro que falamos. E muito brasileiro usa 'the' demais — 'I love the music' (errado, é só 'I love music').",
  },

  chunks: [
    {
      id: 'the_book',
      target: 'The book',
      native: 'O livro (aquele)',
      literal: 'specific/known book',
      emoji: '📘',
      phonetic: 'thuh-BUK',
      audioRef: null,
    },
    {
      id: 'the_zimbabwe_team',
      target: 'The Brazil team',
      native: 'A seleção brasileira',
      literal: 'the team of Brazil (only one)',
      emoji: '⚽',
      phonetic: 'thuh-bra-ZEEL-teem',
      audioRef: null,
    },
    {
      id: 'the_morning',
      target: 'The morning',
      native: 'A manhã (única)',
      literal: 'the (one and only) morning',
      emoji: '🌅',
      phonetic: 'thuh-MOR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Definite article: 'the'",
    explanation: "Use 'the' quando: (1) ambos sabem do que fala — 'pass me the salt'; (2) coisa única — 'the sun', 'the President'; (3) já mencionado — 'I bought a book. The book is good'.",
    examples: [
      { target: 'I have a car. The car is red.', native: 'Tenho um carro. O carro é vermelho.' },
      { target: 'The sun is hot.',                 native: 'O sol é quente.' },
      { target: 'Pass me the keys, please.',       native: 'Passa as chaves, por favor.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Escolha 'a', 'an' ou 'the'",
      sentence: 'I bought _____ book yesterday. _____ book is interesting.',
      options: ['a / The', 'The / A', 'An / A'],
      correct: 'a / The',
      context: 'Primeira menção: a. Segunda (já conhecido): the.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quero ler aquele livro',
      correct: ['I want to read the book', 'I want to read the book.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "The sun is bright"',
      words: ['bright.', 'sun', 'The', 'is'],
      correct: ['The', 'sun', 'is', 'bright.'],
      translation: 'O sol é brilhante',
    },
    {
      type: 'fill_blank',
      instruction: "Coloque 'the' ou nada",
      sentence: '_____ President of Brazil gave a speech.',
      options: ['The', 'A', 'An'],
      correct: 'The',
      context: 'Há um presidente do Brasil — "the".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual usa "the" certo?',
      question: 'Escolha a frase correta',
      options: [
        { text: 'Pass me the salt, please.', correct: true },
        { text: 'Pass me a salt, please.', correct: false },
        { text: 'Pass me salt the, please.', correct: false },
      ],
      explanation: 'Na mesa, todos sabem qual sal — "the salt".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'A lua brilha à noite',
      correct: ['The moon shines at night', 'The moon shines at night.'],
    },
  ],

  rwenDialogue: {
    intro: "Trabalho num escritório em SP. Sua chefe inglesa pede um relatório específico.",
    lines: [
      {
        speaker: 'npc',
        target: "Could you bring me the report we discussed yesterday?",
        native: 'Você poderia me trazer o relatório que falamos ontem?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'll bring the report now.", native: 'Sim, trago o relatório agora.', correct: true, feedback: "Boa — 'the report' porque ambos sabem qual." },
          { target: "Yes, I'll bring a report now.", native: 'Sim, trago um relatório agora.', correct: false, feedback: "'A report' = qualquer um. Use 'the report'." },
          { target: "Yes, I'll bring report now.", native: 'Sim, trago relatório.', correct: false, feedback: "Em inglês não dá pra omitir — use 'the report'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa. 'The' marca que vocês falam da mesma coisa — algo crucial em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'The book (em inglês)', correct: ['The book', 'the book'] },
      { prompt: 'The morning (em inglês)', correct: ['The morning', 'the morning'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, escute ou leia inglês. Conte 5 vezes que aparece 'the'. Sente o quanto entra na conversa.",
    rwenSignoff: "'The' fala do que ambos conhecem. Repare hoje.",
  },

  phase8: {
    scenario: "Office in São Paulo. Your boss asks for specific documents — you need to distinguish 'the' (specific) from 'a' (any).",
    rwenRole: "Polite English-speaking boss requesting specific files.",
    successCriteria: "User uses 'the' for known items, 'a/an' for new ones, in at least three sentences.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
