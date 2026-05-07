import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Goodbye — Tchau / Até logo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pra se despedir em inglês tem várias opções. 'Goodbye' é a forma completa. 'See you tomorrow' marca encontro. 'Take care' é um cuidado afetivo — quase um abraço em palavra.",
    culturalNote: "No Brasil a gente fecha com beijo, abraço, 'um abraço!', 'beijos!'. Em inglês falta o gesto físico — mas 'Take care' carrega o calor. É o equivalente cultural: 'se cuida'. Use com amigos, família, colegas próximos. Em e-mail formal, prefira 'Best regards' ou 'Kind regards'.",
  },

  chunks: [
    {
      id: 'goodbye',
      target: 'Goodbye',
      native: 'Tchau / Adeus',
      literal: undefined,
      emoji: '👋',
      phonetic: 'good-BAI',
      audioRef: null,
    },
    {
      id: 'see_you_tomorrow',
      target: 'See you tomorrow',
      native: 'Até amanhã',
      literal: 'See you tomorrow',
      emoji: '📅',
      phonetic: 'SEE-yoo-tuh-MOR-oh',
      audioRef: null,
    },
    {
      id: 'take_care',
      target: 'Take care',
      native: 'Se cuida',
      literal: 'Take care of yourself',
      emoji: '💚',
      phonetic: 'tayk-KAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative goodbye',
    explanation: "'Take care' tá no imperativo — é uma ordem suave: 'cuide-se'. Em português 'se cuida' tem o mesmo tom. 'See you tomorrow' já marca o próximo encontro — bom pra colega de trabalho que você vê todo dia.",
    examples: [
      { target: 'Goodbye',          native: 'Tchau' },
      { target: 'See you tomorrow', native: 'Até amanhã' },
      { target: 'Take care',        native: 'Se cuida' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as despedidas',
      pairs: [
        { left: 'Goodbye',           right: 'Tchau' },
        { left: 'See you tomorrow',  right: 'Até amanhã' },
        { left: 'Take care',         right: 'Se cuida' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Até amanhã',
      correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Se cuida',
      correct: ['Take care', 'take care', 'Take care.', 'take care.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a despedida',
      sentence: '____ you tomorrow!',
      options: ['See', 'Meet', 'Know'],
      correct: 'See',
      context: 'Você tá indo embora — vão se ver de novo amanhã.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a despedida com cuidado',
      words: ['Goodbye', 'and', 'take', 'care'],
      correct: ['Goodbye', 'and', 'take', 'care'],
      translation: 'Tchau e se cuida',
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a melhor opção',
      question: "Você tá saindo do escritório às 18h. O que diz pros colegas?",
      options: [
        { text: 'Goodbye! See you tomorrow.',  correct: true },
        { text: 'Hi! How are you?',             correct: false },
        { text: 'Good morning.',                correct: false },
      ],
      explanation: "Despedida no fim do dia: 'Goodbye' ou 'See you tomorrow'. As outras são saudação inicial.",
    },
  ],

  rwenDialogue: {
    intro: "18h — fim do expediente em SP. Sua colega da mesa ao lado pega o casaco também e te encontra na porta.",
    lines: [
      { speaker: 'npc', target: "Hey, you're heading out? Goodbye!", native: 'Ei, tá saindo? Tchau!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Goodbye! See you tomorrow. Take care.", native: 'Tchau! Até amanhã. Se cuida.', correct: true,  feedback: "Mandou bem — três fórmulas em sequência, despedida quentinha." },
          { target: 'Good morning!',                          native: 'Bom dia!',                       correct: false, feedback: "É fim de tarde — saudação não cabe agora." },
          { target: "What's your name?",                      native: 'Como você se chama?',            correct: false, feedback: "Vocês trabalham juntos — não pergunte o nome agora." },
        ],
      },
      { speaker: 'npc', target: "Take care! See you tomorrow.", native: 'Se cuida! Até amanhã.' },
      {
        speaker: 'rwen',
        rwenLine: "Boa! Você fechou o dia com afeto — em inglês as palavras carregam o que o abraço faria.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Goodbye (em inglês)',        correct: ['Goodbye', 'goodbye', 'Goodbye.', 'goodbye.'] },
      { prompt: 'See you tomorrow (em inglês)', correct: ['See you tomorrow', 'see you tomorrow', 'See you tomorrow.', 'see you tomorrow.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, na hora de sair, fala 'Goodbye' ou 'Take care' — mesmo que pra alguém que fala português. Treina a boca.",
    rwenSignoff: "Take care. Até amanhã.",
  },

  phase8: {
    scenario: "It's 6pm and you're packing up at your São Paulo office. A colleague catches you at the door — exchange a proper goodbye in English.",
    rwenRole: "Tinashe, 30, your work neighbour from the next desk. Friendly, casual-professional, sees you every weekday.",
    successCriteria: "User uses 'Goodbye' or 'See you tomorrow', adds 'Take care' or similar warm closing, and stays in casual-professional register (not stiff-formal, not like meeting a stranger).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
