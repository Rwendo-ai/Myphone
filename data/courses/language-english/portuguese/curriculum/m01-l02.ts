import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-hi-bye',
  module: 1,
  lesson: 2,
  title: 'Hi & Bye — Saudações casuais',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Oi! Hoje aprendemos as palavras de amigos — 'Hi' e 'Bye'. Curtas, leves, do dia a dia.",
    culturalNote: "No Brasil, 'Oi' serve quase pra todo mundo — atendente, médico, primo. Em inglês 'Hi' é mais informal: ótimo entre colegas, mas pode parecer pouco numa reunião com cliente. Use 'Hello' quando quiser pisar com mais cuidado.",
  },

  chunks: [
    {
      id: 'hi',
      target: 'Hi',
      native: 'Oi',
      literal: undefined,
      emoji: '👋',
      phonetic: 'HAY',
      audioRef: null,
    },
    {
      id: 'bye',
      target: 'Bye',
      native: 'Tchau',
      literal: 'Goodbye (short)',
      emoji: '👋',
      phonetic: 'BAI',
      audioRef: null,
    },
    {
      id: 'see_you_later',
      target: 'See you later',
      native: 'Até mais',
      literal: 'See you later',
      emoji: '🔁',
      phonetic: 'SEE-yoo-LAY-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual register',
    explanation: "Em inglês, o registro casual ('Hi'/'Bye') é diferente do formal ('Hello'/'Goodbye'). Entre amigos e colegas próximos, 'Hi' funciona — mas em reunião de trabalho com cliente novo, fica leve demais.",
    examples: [
      { target: 'Hi',             native: 'Oi' },
      { target: 'Bye',            native: 'Tchau' },
      { target: 'See you later',  native: 'Até mais' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Hi',             right: 'Oi' },
        { left: 'Bye',            right: 'Tchau' },
        { left: 'See you later',  right: 'Até mais' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Até mais',
      correct: ['See you later', 'see you later', 'See you later.', 'see you later.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a despedida casual',
      sentence: '____, see you later!',
      options: ['Hi', 'Hello', 'Bye'],
      correct: 'Bye',
      context: 'Você tá saindo do café com um amigo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Coloque as palavras em ordem',
      words: ['Hi', 'see', 'you', 'later'],
      correct: ['Hi', 'see', 'you', 'later'],
      translation: 'Oi, até mais',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Oi',
      correct: ['Hi', 'hi', 'Hi.', 'hi.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a melhor opção',
      question: "Você tá saindo do happy hour com colegas. O que diz?",
      options: [
        { text: 'Bye, see you later!', correct: true },
        { text: 'Hello, how are you?', correct: false },
        { text: 'Good morning.',       correct: false },
      ],
      explanation: "'Bye' e 'See you later' são as despedidas casuais entre colegas.",
    },
  ],

  rwenDialogue: {
    intro: 'Você esbarra numa amiga brasileira que mora em Londres há 5 anos. Ela já tá meio anglicizada, fala em inglês mesmo entre brasileiros.',
    lines: [
      { speaker: 'npc', target: 'Hi! How are you?', native: 'Oi! Como você está?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'm fine. See you later!", native: 'Oi, estou bem. Até mais!', correct: true,  feedback: 'Mandou bem — respondeu e já marcou o próximo encontro.' },
          { target: 'Good morning, sir.',             native: 'Bom dia, senhor.',          correct: false, feedback: 'Formal demais — é uma amiga, relaxa.' },
        ],
      },
      { speaker: 'npc', target: 'Bye!', native: 'Tchau!' },
      {
        speaker: 'rwen',
        rwenLine: "Boa! Você acertou o tom — leve, entre amigos.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Hi (em inglês)',            correct: ['Hi', 'hi'] },
      { prompt: 'See you later (em inglês)', correct: ['See you later', 'see you later', 'See you later.', 'see you later.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Use 'Hi' com um amigo hoje — mesmo que a conversa siga em português, deixa o 'Hi' começar.",
    rwenSignoff: "See you later!",
  },

  phase8: {
    scenario: "You bump into a Brazilian friend who's lived in London for years and now speaks English by default. Quick coffee catch-up, then say bye.",
    rwenRole: "Tariq, 28, an old college friend from your time in Rio. Warm, talkative, code-switches into English fast.",
    successCriteria: "User opens with 'Hi', closes with 'Bye' or 'See you later', stays casual (no 'Good morning sir' or formal phrasing).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
