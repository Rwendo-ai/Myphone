import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Half past, quarter to — Minutos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hora com minutos: 'half past two' (2:30), 'quarter to nine' (8:45), 'five past six' (6:05). E o jeito americano mais corrido: 'eight forty-five'.",
    culturalNote: "Em português a gente diz 'sete e meia', 'quinze pras nove'. Em inglês: 'half past seven', 'quarter to nine'. Sistema parecido. Mas no inglês americano você ouve mais 'eight forty-five' (oito e quarenta e cinco) — direto, número puro.",
  },

  chunks: [
    {
      id: 'half_past',
      target: 'Half past two',
      native: 'Duas e meia',
      literal: 'Half after two',
      emoji: '🕝',
      phonetic: 'haf-PAST-too',
      audioRef: null,
    },
    {
      id: 'quarter_to',
      target: 'Quarter to nine',
      native: 'Quinze pras nove',
      literal: 'Quarter before nine',
      emoji: '🕘',
      phonetic: 'KWOR-ter-too-nyn',
      audioRef: null,
    },
    {
      id: 'five_past',
      target: 'Five past six',
      native: 'Seis e cinco',
      literal: 'Five after six',
      emoji: '🕕',
      phonetic: 'fyv-past-siks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past / to',
    explanation: "Minutos 1-30: usa 'past' (depois da hora). Minutos 31-59: usa 'to' (faltando pra próxima). 'Half past' = e meia. 'Quarter past/to' = e quinze / quinze pra. Estilo americano: 'three oh five' (3:05), 'seven forty' (7:40).",
    examples: [
      { target: "Half past four (4:30)",        native: 'Quatro e meia' },
      { target: "Quarter past seven (7:15)",    native: 'Sete e quinze' },
      { target: "Twenty to nine (8:40)",        native: 'Vinte pras nove' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as horas',
      pairs: [
        { left: 'Half past two',     right: '2:30' },
        { left: 'Quarter past seven', right: '7:15' },
        { left: 'Quarter to nine',    right: '8:45' },
        { left: 'Twenty to eight',    right: '7:40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — 4:30',
      prompt: 'Quatro e meia',
      correct: ['Half past four', 'half past four', 'Four thirty', 'four thirty'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — 8:45',
      sentence: "It's quarter ____ nine.",
      options: ['to', 'past', 'before'],
      correct: 'to',
      context: '8:45 = faltam 15 pras 9 → quarter to nine.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It is half past three"',
      words: ['three.', 'is', 'It', 'past', 'half'],
      correct: ['It', 'is', 'half', 'past', 'three.'],
      translation: 'São três e meia',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — 7:40',
      prompt: 'Vinte pras oito',
      correct: ['Twenty to eight', 'twenty to eight', 'Seven forty', 'seven forty'],
    },
    {
      type: 'multiple_choice',
      instruction: '5:15 — qual está certo?',
      question: 'Pick the most natural answer:',
      options: [
        { text: "Quarter past five.", correct: true },
        { text: "Five and quarter.",  correct: false },
        { text: "Five past quarter.",  correct: false },
      ],
      explanation: "5:15 = um quarto depois das cinco = quarter past five.",
    },
  ],

  rwenDialogue: {
    intro: 'Marcando reunião por Zoom com um colega britânico. Negociando o horário.',
    lines: [
      { speaker: 'npc', target: "What time works for you?", native: 'Que horas funciona pra você?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How about half past three?", native: 'Que tal três e meia?', correct: true, feedback: 'Mandou bem — meia hora certinha.' },
          { target: "Three and half.",              native: 'Três e meia.',          correct: false, feedback: "Em inglês: 'half past three'." },
          { target: "Quarter to three.",             native: 'Quinze pras três.',     correct: false, feedback: 'Diferente: quarter to three = 2:45.' },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mandou bem! Hora marcada com 'half past'.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Half past two (em inglês)', correct: ['Half past two', 'half past two'] },
      { prompt: 'Quarter to nine (em inglês)', correct: ['Quarter to nine', 'quarter to nine'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Olha o relógio agora. Diga a hora em inglês das duas formas: 'half past' / 'quarter to' e o estilo direto ('three forty-five').",
    rwenSignoff: "Amanhã — dias da semana.",
  },

  phase8: {
    scenario: "Booking a Zoom call with a British colleague — negotiating the exact time.",
    rwenRole: "Polite British colleague who uses 'half past' / 'quarter to' style.",
    successCriteria: "User suggests at least one time using 'half past' or 'quarter to/past' and one using direct number style ('three forty-five').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
