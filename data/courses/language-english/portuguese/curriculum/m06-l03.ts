import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Hundreds, Thousands, Millions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Números grandes: 'one thousand', 'ten thousand', 'one million'. Pra preço de carro, salário, ou notícia econômica.",
    culturalNote: "Em português 'mil' e 'milhão' aceitam plural ('mil reais', 'cinco milhões'). Em inglês 'thousand' e 'million' não pegam -s quando vêm com número específico: 'two thousand dollars' — não 'thousands dollars'. Mas SEM número: 'thousands of dollars' (vários milhares).",
  },

  chunks: [
    {
      id: 'one_thousand',
      target: 'One thousand',
      native: 'Mil',
      literal: 'One thousand',
      emoji: '🔢',
      phonetic: 'wun-THOW-zand',
      audioRef: null,
    },
    {
      id: 'ten_thousand',
      target: 'Ten thousand',
      native: 'Dez mil',
      literal: 'Ten thousand',
      emoji: '💵',
      phonetic: 'ten-THOW-zand',
      audioRef: null,
    },
    {
      id: 'one_million',
      target: 'One million',
      native: 'Um milhão',
      literal: 'One million',
      emoji: '💰',
      phonetic: 'wun-MIL-yon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Large numbers — no plural with number',
    explanation: "Com número específico: sem -s ('two hundred', 'five thousand', 'ten million'). Sem número: com -s ('hundreds of people', 'thousands of dollars').",
    examples: [
      { target: 'Two thousand dollars',         native: 'Dois mil dólares' },
      { target: 'Five hundred people',          native: 'Quinhentas pessoas' },
      { target: 'Thousands of dollars',         native: 'Milhares de dólares' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os números grandes',
      pairs: [
        { left: 'One thousand',  right: 'Mil' },
        { left: 'Ten thousand',  right: 'Dez mil' },
        { left: 'One million',   right: 'Um milhão' },
        { left: 'One hundred',   right: 'Cem' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Cinco mil reais',
      correct: ['Five thousand reais', 'five thousand reais'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — sem -s',
      sentence: 'The car costs ten ____ dollars.',
      options: ['thousand', 'thousands', 'thousand of'],
      correct: 'thousand',
      context: "Com número, 'thousand' fica no singular.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "There are millions of people in São Paulo"',
      words: ['São Paulo.', 'are', 'people', 'There', 'in', 'millions', 'of'],
      correct: ['There', 'are', 'millions', 'of', 'people', 'in', 'São Paulo.'],
      translation: 'Há milhões de pessoas em SP',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Trezentas pessoas',
      correct: ['Three hundred people', 'three hundred people'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: 'I have _____ in my account.',
      options: [
        { text: 'two thousand dollars', correct: true },
        { text: 'two thousands dollars', correct: false },
        { text: 'two thousand of dollars', correct: false },
      ],
      explanation: "Com número específico: sem 's', sem 'of'.",
    },
  ],

  rwenDialogue: {
    intro: 'Negociação de salário com gerente americana. Faria Lima, sexta-feira.',
    lines: [
      { speaker: 'npc', target: "What salary are you looking for?", native: 'Qual salário você espera?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Around twelve thousand reais a month.", native: 'Por volta de doze mil reais por mês.', correct: true, feedback: 'Mandou bem — número grande certo, sem -s.' },
          { target: "Around twelve thousands reais.",          native: '...',                                  correct: false, feedback: "Sem -s em 'thousand' com número." },
          { target: "Twelve thousand of reais.",                native: '...',                                  correct: false, feedback: "Sem 'of' depois do número." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mandou bem! Negociação salarial com inglês limpo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Two thousand (em inglês)', correct: ['Two thousand', 'two thousand'] },
      { prompt: 'One million (em inglês)',  correct: ['One million', 'a million', 'one million', 'a million'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diz três valores grandes em inglês — preço de um apartamento, salário, população de uma cidade.",
    rwenSignoff: "Amanhã — horas.",
  },

  phase8: {
    scenario: "Salary negotiation with English-speaking manager at a Faria Lima firm.",
    rwenRole: "Polite hiring manager listening to your salary expectation.",
    successCriteria: "User uses 'thousand' or 'million' with a number (no -s) at least once. Uses 'hundreds/thousands of' for vague large amounts at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
