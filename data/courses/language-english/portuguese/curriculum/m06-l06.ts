import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: 'Days of the week — Dias da semana',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Dias da semana: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Sempre com letra maiúscula.",
    culturalNote: "Em português 'segunda-feira', 'terça-feira' — minúsculas. Em inglês os dias começam com letra maiúscula: Monday, Friday. E pra dizer 'na segunda', usa 'on Monday'. Plural com 'on Mondays' = toda segunda.",
  },

  chunks: [
    {
      id: 'weekdays',
      target: 'Monday, Tuesday, Wednesday, Thursday, Friday',
      native: 'Segunda, terça, quarta, quinta, sexta',
      literal: 'Mon-Fri',
      emoji: '📅',
      phonetic: 'MUN-day, TYOOZ-day, WENZ-day, THURZ-day, FRY-day',
      audioRef: null,
    },
    {
      id: 'weekend',
      target: 'Saturday, Sunday',
      native: 'Sábado, domingo',
      literal: 'Sat, Sun',
      emoji: '🛌',
      phonetic: 'SAT-er-day, SUN-day',
      audioRef: null,
    },
    {
      id: 'today_tomorrow',
      target: 'Today, tomorrow, yesterday',
      native: 'Hoje, amanhã, ontem',
      literal: 'Today, tomorrow, yesterday',
      emoji: '⏳',
      phonetic: 'too-DAY, too-MOR-oh, YES-ter-day',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Week cycle — capitals + on',
    explanation: "Dias com letra maiúscula. Pra 'na quinta': 'on Thursday'. Plural 'on Thursdays' = toda quinta. 'Today' (hoje), 'yesterday' (ontem), 'tomorrow' (amanhã) — sem 'on'.",
    examples: [
      { target: 'See you on Monday',        native: 'Te vejo na segunda' },
      { target: 'Today is Wednesday',       native: 'Hoje é quarta' },
      { target: 'Tomorrow is my birthday',  native: 'Amanhã é meu aniversário' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os dias',
      pairs: [
        { left: 'Monday',    right: 'Segunda' },
        { left: 'Friday',    right: 'Sexta' },
        { left: 'Sunday',    right: 'Domingo' },
        { left: 'Tomorrow',  right: 'Amanhã' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Hoje é quarta',
      correct: ['Today is Wednesday', 'Today is Wednesday.', 'today is Wednesday'],
    },
    {
      type: 'fill_blank',
      instruction: "Escolha a preposição",
      sentence: 'I have a meeting ____ Friday.',
      options: ['on', 'in', 'at'],
      correct: 'on',
      context: "Dias usam 'on'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "See you on Monday"',
      words: ['Monday.', 'on', 'See', 'you'],
      correct: ['See', 'you', 'on', 'Monday.'],
      translation: 'Te vejo na segunda',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Amanhã é sábado',
      correct: ['Tomorrow is Saturday', 'Tomorrow is Saturday.', 'tomorrow is Saturday'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Toda quinta',
      question: 'Qual frase significa "toda quinta-feira"?',
      options: [
        { text: 'I go to yoga on Thursdays.', correct: true },
        { text: 'I go to yoga in Thursday.', correct: false },
        { text: 'I go to yoga at Thursday.', correct: false },
      ],
      explanation: "'on Thursdays' (com -s) = toda quinta.",
    },
  ],

  rwenDialogue: {
    intro: 'Marcando reunião com cliente americano por e-mail.',
    lines: [
      { speaker: 'npc', target: "When can we meet?", native: 'Quando a gente pode se reunir?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Are you free on Wednesday?", native: 'Você tá livre quarta?', correct: true, feedback: 'Mandou bem — "on" + dia.' },
          { target: "Are you free in Wednesday?",  native: '...',                    correct: false, feedback: "Dia usa 'on', não 'in'." },
          { target: "Are you free Wednesday?",      native: 'Tá livre quarta?',      correct: false, feedback: "Mais natural com 'on'." },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Monday (em inglês)', correct: ['Monday', 'monday'] },
      { prompt: 'Tomorrow (em inglês)', correct: ['Tomorrow', 'tomorrow'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês os 7 dias da semana, em ordem. Aí diga: 'Today is ___' e 'Tomorrow is ___'.",
    rwenSignoff: "Amanhã — meses e estações.",
  },

  phase8: {
    scenario: "Setting up a meeting with a US client by email/Slack — picking a day.",
    rwenRole: "Polite English-speaking client confirming weekday availability.",
    successCriteria: "User uses 'on + [Day]' at least once and 'today/tomorrow' once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
