import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: 'No article — Plural & abstract',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Tem horas que NÃO se usa 'a/an/the'. Plurais gerais e coisas abstratas (love, time, music) vão sem nada antes.",
    culturalNote: "Aqui o português atrapalha de novo: a gente diz 'a vida é bela', 'o amor é paciente', 'as crianças brincam'. Em inglês: 'Life is beautiful' (sem 'the'), 'Love is patient', 'Children play'. O brasileiro tende a colocar 'the' demais — uma das marcas mais reveladoras de sotaque escrito.",
  },

  chunks: [
    {
      id: 'books',
      target: 'Books',
      native: 'Livros (em geral)',
      literal: 'books in general — no article',
      emoji: '📚',
      phonetic: 'BUKS',
      audioRef: null,
    },
    {
      id: 'love',
      target: 'Love',
      native: 'Amor',
      literal: 'love (abstract — no article)',
      emoji: '❤️',
      phonetic: 'LUHV',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Crianças (em geral)',
      literal: 'children in general — no article',
      emoji: '👶',
      phonetic: 'CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Zero article — sem 'a/an/the'",
    explanation: "Sem artigo quando: (1) plural genérico — 'Cats are clever' (gatos em geral); (2) abstrato — 'Love is patient', 'Music makes me happy'; (3) palavras como 'school', 'home', 'work' — 'I go to school' (não 'the school' a menos que seja específica).",
    examples: [
      { target: 'Children laugh.',  native: 'Crianças riem.' },
      { target: 'Love is patient.', native: 'O amor é paciente.' },
      { target: 'I go to work.',    native: 'Vou pro trabalho.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Escolha 'a', 'the' ou nada (—)",
      sentence: '_____ love is the most powerful feeling.',
      options: ['—', 'The', 'A'],
      correct: '—',
      context: '"Love" abstrato — sem artigo.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Crianças riem',
      correct: ['Children laugh', 'Children laugh.'],
    },
    {
      type: 'fill_blank',
      instruction: "Escolha o certo",
      sentence: 'I drink _____ water every morning.',
      options: ['—', 'a', 'an'],
      correct: '—',
      context: '"Water" é incontável — sem artigo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Music makes me happy"',
      words: ['happy.', 'me', 'Music', 'makes'],
      correct: ['Music', 'makes', 'me', 'happy.'],
      translation: 'Música me deixa feliz',
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está sem artigo (correto)?',
      question: 'Escolha a frase certa',
      options: [
        { text: 'Dogs bark at strangers.', correct: true },
        { text: 'The dogs bark at the strangers.', correct: false },
        { text: 'A dogs bark at a strangers.', correct: false },
      ],
      explanation: "Cães em geral — sem artigo. 'Dogs bark' = cães latem.",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'O amor é paciente',
      correct: ['Love is patient', 'Love is patient.'],
    },
  ],

  rwenDialogue: {
    intro: "Conversa profunda à noite com uma amiga americana em SP. Falando sobre o que importa.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me — what matters most to you?",
        native: 'Conta — o que mais importa pra você?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Family and love matter most. Children are the future.', native: 'Família e amor importam mais. As crianças são o futuro.', correct: true, feedback: "Mandou bem — 'family', 'love', 'children' sem artigo. 'The future' com 'the' (único)." },
          { target: 'The family and the love matter most. The children are the future.', native: 'A família e o amor importam mais.', correct: false, feedback: "Aí o 'the' tá em excesso — em inglês família e amor abstratos vão sem artigo." },
          { target: 'A family and a love matter most.', native: 'Uma família e um amor importam mais.', correct: false, feedback: "'Love' e 'family' abstratos não pedem 'a'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa — você acertou a diferença entre genérico (sem) e específico (the).",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Children (em inglês, sem artigo)', correct: ['Children', 'children'] },
      { prompt: 'Love (em inglês, sem artigo)', correct: ['Love', 'love'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pense em coisas importantes — amor, paz, família, fé. Diga três frases sem 'the' nem 'a': 'Love is good. Family is everything. Music heals.'",
    rwenSignoff: "Sem artigo é o caminho do genérico. Mesmo soando estranho.",
  },

  phase8: {
    scenario: "Late-night conversation with a friend about what matters in life — love, family, future, faith.",
    rwenRole: "Close friend who encourages you to talk about big abstract values without overusing 'the'.",
    successCriteria: "User produces three abstract sentences without 'the' ('Love is...', 'Children are...', 'Music makes...') and notes the contrast with 'the future' which needs 'the'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
