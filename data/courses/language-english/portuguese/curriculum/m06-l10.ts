import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone do Módulo 6 — números, tempo, dias, meses, dinheiro. Tudo numa conversa só.",
    culturalNote: "Esse é o módulo da vida cotidiana em inglês: combinar horário, marcar dia, perguntar preço. Quem domina essas estruturas anda sozinho num país anglófono — e isso é A2 sólido. Note as preposições — 'at' pra hora, 'on' pra dia, 'in' pra mês.",
  },

  chunks: [
    {
      id: 'price_time',
      target: "It costs twenty dollars and the shop closes at six P.M.",
      native: 'Custa vinte dólares e a loja fecha às seis da tarde.',
      literal: 'price + closing time',
      emoji: '🛒',
      phonetic: 'it-kosts-TWEN-tee-DOL-arz...',
      audioRef: null,
    },
    {
      id: 'when_meet',
      target: "Let's meet on Friday at half past seven.",
      native: 'Vamos nos encontrar sexta às sete e meia.',
      literal: 'day + time meeting',
      emoji: '🤝',
      phonetic: "lets-MEET-on-FRY-day...",
      audioRef: null,
    },
    {
      id: 'total_with_discount',
      target: "The total is fifty dollars with a ten percent discount.",
      native: 'O total é cinquenta dólares com 10% de desconto.',
      literal: 'total + percentage discount',
      emoji: '🧾',
      phonetic: 'thuh-TOH-tul-iz-FIF-tee-DOL-arz...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers, time, money — capstone',
    explanation: "Preposições-chave: 'at' (hora — at six P.M.), 'on' (dia — on Friday), 'in' (mês — in October), 'for' (preço a granel — two for ten).",
    examples: [
      { target: 'I will pay forty dollars on Monday at three P.M.',          native: 'Vou pagar quarenta dólares segunda às três da tarde.' },
      { target: 'The meeting is on Friday at half past nine in the morning.', native: 'A reunião é sexta às nove e meia da manhã.' },
      { target: "What's the total with the discount?",                       native: 'Qual o total com o desconto?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vamos nos encontrar sexta às seis da tarde no café.',
      correct: ["Let's meet on Friday at six P.M. at the cafe", "Let's meet on Friday at six P.M. at the cafe.", "Let's meet at the cafe on Friday at six P.M."],
    },
    {
      type: 'fill_blank',
      instruction: 'Preposições — números, tempo, mês',
      sentence: 'My birthday is ____ October ____ Saturday ____ seven P.M.',
      options: ['in / on / at', 'on / in / at', 'at / on / in'],
      correct: 'in / on / at',
      context: "'In October' (mês), 'on Saturday' (dia), 'at seven P.M.' (hora).",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Custa trinta dólares sem desconto.',
      correct: ['It costs thirty dollars without a discount', 'It costs thirty dollars without a discount.', 'It costs thirty dollars with no discount'],
    },
    {
      type: 'build_sentence',
      instruction: "Monte: 'The shop closes at six P.M.'",
      words: ['closes', 'shop', 'P.M.', 'The', 'six', 'at'],
      correct: ['The', 'shop', 'closes', 'at', 'six', 'P.M.'],
      translation: 'A loja fecha às seis',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Três por quinze dólares com 10% de desconto.',
      correct: ['Three for fifteen dollars with a ten percent discount.', 'Three for fifteen dollars with 10% discount.', 'Three for fifteen dollars with ten percent discount.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Frase mais natural',
      question: 'Setting up a meeting:',
      options: [
        { text: "Let's meet on Tuesday at half past four in October.", correct: true },
        { text: "Let's meet in Tuesday on half past four at October.", correct: false },
        { text: "Let's meet at Tuesday in half past four on October.", correct: false },
      ],
      explanation: "On + dia, at + hora, in + mês.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — você marca uma reunião com cliente americano e fecha valor.',
    lines: [
      {
        speaker: 'npc',
        target: "Let's lock in the meeting and the budget. When works for you, and how much for the project?",
        native: 'Vamos fechar a reunião e o orçamento. Quando você pode, e quanto pelo projeto?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Let's meet on Wednesday at half past two P.M. The total is two thousand dollars, with a ten percent discount if you confirm by Friday.",
            native: '...',
            correct: true,
            feedback: 'Mandou bem — dia, hora, total, desconto, prazo. Pacote completo.',
          },
          {
            target: "Wednesday two thirty. Two thousand dollars.",
            native: '...',
            correct: false,
            feedback: "Faltou estrutura — adicione 'on', 'at', 'with discount'.",
          },
          {
            target: "Quarta às 14h30, dois mil dólares.",
            native: '...',
            correct: false,
            feedback: "Em português — traduza tudo.",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 6. Reuniões, valores e horários em inglês — fluxo profissional.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'On Friday at six P.M. (em inglês)', correct: ['On Friday at six P.M.', 'on Friday at six P.M.', 'On Friday at 6 P.M.'] },
      { prompt: 'The total is fifty dollars (em inglês)', correct: ['The total is fifty dollars', 'The total is fifty dollars.', 'the total is fifty dollars'] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 6',
    task: "Marca uma reunião imaginária em inglês: dia, hora, mês, valor com desconto. Em uma frase só.",
    rwenSignoff: "Você fechou o Módulo 6. Próximo: comida.",
  },

  phase8: {
    scenario: "Capstone: scheduling a meeting and confirming a budget with an English-speaking client.",
    rwenRole: "Polite American client wrapping up logistics.",
    successCriteria: "User uses preposition trio correctly (in/on/at), states a price with discount, and proposes a day + time.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
