import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: '"To want" & "to need" — I want / I need',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'I want' é direto. 'I need' é urgente. 'I'd like' é educado. Saber quando usar cada um define seu tom.",
    culturalNote: "No Brasil 'eu quero' é neutro — 'eu quero um café'. Em inglês 'I want' soa um pouco infantil/imperativo num restaurante. Use 'I'd like' (queria) com garçom, atendente, qualquer pessoa que serve. 'I need' guarda pra coisa séria — 'I need water' (estou desidratado).",
  },

  chunks: [
    {
      id: 'i_want_coffee',
      target: 'I want coffee.',
      native: 'Eu quero café.',
      literal: 'I want coffee',
      emoji: '☕',
      phonetic: 'ay-WONT-KAW-fee',
      audioRef: null,
    },
    {
      id: 'i_need_a_break',
      target: 'I need a break.',
      native: 'Preciso de um descanso.',
      literal: 'I need a break',
      emoji: '😮‍💨',
      phonetic: 'ay-NEED-uh-BRAYK',
      audioRef: null,
    },
    {
      id: 'id_like_tea',
      target: "I'd like tea, please.",
      native: 'Eu queria um chá, por favor.',
      literal: 'I would like tea, please',
      emoji: '🍵',
      phonetic: 'ayd-LAYK-TEE-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness ladder',
    explanation: "WANT = direto, casual. NEED = forte, urgência. WOULD LIKE ('I'd like') = educado padrão. Em serviço use 'I'd like' ou 'Could I have'.",
    examples: [
      { target: 'I want pizza tonight.',         native: 'Quero pizza hoje.' },
      { target: 'I need help.',                  native: 'Preciso de ajuda.' },
      { target: "I'd like a coffee, please.",    native: 'Queria um café, por favor.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os níveis',
      pairs: [
        { left: 'I want', right: 'Eu quero' },
        { left: 'I need', right: 'Preciso' },
        { left: "I'd like", right: 'Eu queria' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — pedindo educado num café',
      prompt: 'Eu queria um chá, por favor.',
      correct: ["I'd like tea, please.", "I would like tea, please.", "I'd like a tea, please."],
    },
    {
      type: 'fill_blank',
      instruction: 'Urgência',
      sentence: 'I _____ water — I\'m dehydrated.',
      options: ['need', 'want', "'d like"],
      correct: 'need',
      context: 'Urgência → need.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I need a break"',
      words: ['break.', 'need', 'a', 'I'],
      correct: ['I', 'need', 'a', 'break.'],
      translation: 'Preciso de um descanso',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — entre amigos',
      prompt: 'Quero pizza hoje.',
      correct: ['I want pizza tonight.', 'I want pizza tonight', 'i want pizza tonight.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pedindo no café',
      question: 'O mais educado:',
      options: [
        { text: "I'd like a cappuccino, please.", correct: true },
        { text: "I want cappuccino.", correct: false },
        { text: "Cappuccino now.", correct: false },
      ],
      explanation: "'I'd like' é o registro padrão de serviço.",
    },
  ],

  rwenDialogue: {
    intro: 'Cafeteria nova com atendente americana — você quer pedir educado.',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: 'O que posso trazer?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a cappuccino, please.", native: 'Queria um cappuccino, por favor.', correct: true, feedback: 'Mandou bem — registro de serviço.' },
          { target: "I want a cappuccino.", native: 'Quero um cappuccino.', correct: false, feedback: 'Soa abrupto — use "I\'d like".' },
          { target: "I need cappuccino.", native: '...', correct: false, feedback: 'Forte demais — não é urgência.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'd like (em inglês)", correct: ["I'd like", "I would like"] },
      { prompt: 'I need (em inglês)', correct: ['I need', 'i need'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diga em inglês três frases — uma com 'I want', uma com 'I need', uma com 'I'd like'.",
    rwenSignoff: "Amanhã — rotina matinal.",
  },

  phase8: {
    scenario: "Cafe ordering and casual chat — practicing all three levels.",
    rwenRole: "Polite American barista.",
    successCriteria: "User uses 'I'd like' or 'Could I have' for ordering, 'I need' if appropriate, and 'I want' only in casual personal chat.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
