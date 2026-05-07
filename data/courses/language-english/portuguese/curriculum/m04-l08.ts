import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-much-many',
  module: 4,
  lesson: 8,
  title: 'Much vs Many',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Much' pra coisas incontáveis — água, dinheiro, tempo. 'Many' pra coisas contáveis — filhos, livros, horas.",
    culturalNote: "Em português a gente diz 'muito' pra tudo — 'muito tempo', 'muitos amigos', sem mudar a palavra. Em inglês são duas palavras: much (incontável) e many (contável). Pensa assim: se conta 1, 2, 3 — many. Se não conta — much.",
  },

  chunks: [
    {
      id: 'much_water',
      target: 'Much water',
      native: 'Muita água',
      literal: 'uncountable',
      emoji: '🌊',
      phonetic: 'much-WAW-ter',
      audioRef: null,
    },
    {
      id: 'many_friends',
      target: 'Many friends',
      native: 'Muitos amigos',
      literal: 'countable plural',
      emoji: '👥',
      phonetic: 'MEN-ee FRENDS',
      audioRef: null,
    },
    {
      id: 'how_much_how_many',
      target: 'How much? / How many?',
      native: 'Quanto? / Quantos?',
      literal: 'much (uncount) vs many (count)',
      emoji: '🤔',
      phonetic: 'how-much / how-MEN-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Much (uncountable) vs Many (countable)",
    explanation: "Much: incontáveis — water, money, time, music, love. Many: contáveis no plural — books, friends, hours, cars. Perguntas: 'How much money?' / 'How many books?'.",
    examples: [
      { target: 'How much time do you have?',  native: 'Quanto tempo você tem?' },
      { target: 'How many minutes are left?',  native: 'Quantos minutos faltam?' },
      { target: 'I have many friends.',        native: 'Tenho muitos amigos.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Escolha 'much' ou 'many'",
      sentence: 'How _____ money do you have?',
      options: ['much', 'many', 'lot'],
      correct: 'much',
      context: 'Money é incontável — "much".',
    },
    {
      type: 'fill_blank',
      instruction: "Escolha 'much' ou 'many'",
      sentence: 'How _____ books are on the shelf?',
      options: ['many', 'much', 'lot'],
      correct: 'many',
      context: 'Books é contável plural — "many".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quanto tempo você tem?',
      correct: ['How much time do you have?', 'How much time do you have', 'how much time do you have?'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Muitos amigos',
      correct: ['Many friends', 'many friends'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: "I don't have _____ work today.",
      options: [
        { text: 'much', correct: true },
        { text: 'many', correct: false },
        { text: 'lots', correct: false },
      ],
      explanation: 'Work = incontável. "Much work".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "How many minutes do you need?"',
      words: ['need?', 'do', 'minutes', 'How', 'you', 'many'],
      correct: ['How', 'many', 'minutes', 'do', 'you', 'need?'],
      translation: 'De quantos minutos você precisa?',
    },
  ],

  rwenDialogue: {
    intro: "Fim de expediente em SP — você fala com colega sobre o dia.",
    lines: [
      {
        speaker: 'npc',
        target: "How was your day?",
        native: 'Como foi seu dia?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Long! I had many meetings and not much time to rest.", native: 'Longo! Tive muitas reuniões e pouco tempo pra descansar.', correct: true, feedback: "Mandou bem — meetings (contável) → many; time (incontável) → much." },
          { target: "Long! I had much meetings and not many time to rest.", native: '...', correct: false, feedback: "Inverteu — meetings é contável (many), time é incontável (much)." },
          { target: "Long! I had a lot meetings.", native: 'Longo, várias reuniões.', correct: false, feedback: "'A lot of meetings' rola, mas hoje praticamos much/many." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tempo, dinheiro, água — much. Pessoas, livros, horas — many.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'How much time? (em inglês)', correct: ['How much time?', 'How much time', 'how much time?', 'how much time'] },
      { prompt: 'Many friends (em inglês)', correct: ['Many friends', 'many friends'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Cinco perguntas: '_____ money?' '_____ books?' '_____ water?' '_____ children?' '_____ time?'. Encaixa much ou many.",
    rwenSignoff: "Conta? Many. Não conta? Much. Simples.",
  },

  phase8: {
    scenario: "Conversation about time, money, and workload using much/many.",
    rwenRole: "Coworker checking on your schedule.",
    successCriteria: "User uses 'much' and 'many' correctly in questions and answers — 'how much time?', 'how many minutes?', 'much work', 'many people'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
