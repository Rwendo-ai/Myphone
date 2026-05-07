import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Past tense — Yesterday I...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Passado em inglês: regulares ganham '-ed' (walk → walked). Irregulares mudam de cara: go → went, see → saw, eat → ate.",
    culturalNote: "Em português o passado também tem irregulares (ir → fui, ver → vi). A diferença é a quantidade — em inglês são uns 100 verbos irregulares importantes. Os mais frequentes (was/were, went, saw, had, did, made, came) você decora rapidinho.",
  },

  chunks: [
    {
      id: 'yesterday_i_went',
      target: 'Yesterday I went to the market.',
      native: 'Ontem fui ao mercado.',
      literal: 'Yesterday I went to the market',
      emoji: '🚶',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
    {
      id: 'i_saw_a_friend',
      target: 'I saw a friend.',
      native: 'Vi um amigo.',
      literal: 'I saw a friend',
      emoji: '👀',
      phonetic: 'ay-SAW-uh-FREND',
      audioRef: null,
    },
    {
      id: 'it_was_great',
      target: 'It was great.',
      native: 'Foi ótimo.',
      literal: 'It was great',
      emoji: '👍',
      phonetic: 'it-WUZ-GRAYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Simple past — Regular & Irregular',
    explanation: "REGULAR: -ed (walk→walked, watch→watched). IRREGULAR (decorar!): go→WENT, see→SAW, eat→ATE, have→HAD, be→WAS/WERE, come→CAME, do→DID, make→MADE. 'I was', 'You/We/They WERE', 'He/She/It WAS'.",
    examples: [
      { target: 'Yesterday I went to the market.',  native: 'Ontem fui ao mercado.' },
      { target: 'I saw a friend.',                    native: 'Vi um amigo.' },
      { target: 'It was a good day.',                 native: 'Foi um dia bom.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine presente e passado',
      pairs: [
        { left: 'Go', right: 'Went' },
        { left: 'See', right: 'Saw' },
        { left: 'Eat', right: 'Ate' },
        { left: 'Have', right: 'Had' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Ontem comi pizza.',
      correct: ['Yesterday I ate pizza.', 'I ate pizza yesterday.', 'yesterday I ate pizza.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Passado de "go"',
      sentence: 'Yesterday I _____ to the cinema.',
      options: ['went', 'goed', 'go'],
      correct: 'went',
      context: 'go → went (irregular).',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I had a good day"',
      words: ['day.', 'good', 'a', 'I', 'had'],
      correct: ['I', 'had', 'a', 'good', 'day.'],
      translation: 'Tive um dia bom',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vi minha mãe ontem.',
      correct: ['I saw my mother yesterday.', 'I saw my mom yesterday.', 'Yesterday I saw my mother.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Forma certa',
      question: 'Yesterday I _____ tired.',
      options: [
        { text: 'was', correct: true },
        { text: 'were', correct: false },
        { text: 'is', correct: false },
      ],
      explanation: 'I/He/She/It → was. You/We/They → were.',
    },
  ],

  rwenDialogue: {
    intro: 'Segunda de manhã, colega pergunta como foi o fim de semana.',
    lines: [
      { speaker: 'npc', target: "How was your weekend?", native: 'Como foi seu fim de semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was great — I went to the beach and saw old friends.", native: 'Foi ótimo — fui pra praia e vi amigos antigos.', correct: true, feedback: 'Mandou bem — was, went, saw.' },
          { target: "I goed to the beach.", native: '...', correct: false, feedback: 'É "went" (irregular).' },
          { target: "Foi bom.", native: 'Foi bom.', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Irregulares decorados.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Yesterday I went (em inglês)', correct: ['Yesterday I went', 'I went yesterday'] },
      { prompt: 'It was great (em inglês)', correct: ['It was great', 'It was great.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Conte em inglês 3 coisas que você fez ontem. Use went, saw, ate, had ou was.",
    rwenSignoff: "Amanhã — futuro.",
  },

  phase8: {
    scenario: "Monday morning chat about your weekend with English-speaking colleague.",
    rwenRole: "Curious coworker.",
    successCriteria: "User uses three irregular past forms (went, saw, ate, had, was) correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
