import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel & Accommodation — Hotel',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hotel: 'I have a reservation', 'My room key', 'I'd like to check out'. Frases padrão de check-in/out.",
    culturalNote: "Em hotel internacional, 'sir' e 'ma'am' rolam de funcionários. Não estranha — é educação. Pra reclamar de algo no quarto, fale direto e educado: 'There's a problem with the AC' — eles querem resolver.",
  },

  chunks: [
    {
      id: 'reservation',
      target: 'I have a reservation.',
      native: 'Tenho uma reserva.',
      literal: 'I have a reservation.',
      emoji: '📋',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
    {
      id: 'room_key',
      target: 'My room key',
      native: 'A chave do meu quarto',
      literal: 'My room key',
      emoji: '🔑',
      phonetic: 'my-ROOM-KEE',
      audioRef: null,
    },
    {
      id: 'check_out',
      target: "I'd like to check out.",
      native: 'Queria fazer o check-out.',
      literal: 'I-would like to check out.',
      emoji: '🧳',
      phonetic: 'ayd-LAYK-too-CHEK-owt',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel transactions',
    explanation: "Check-in: 'I have a reservation under [name]'. Quarto: 'room key', 'room number'. Reclamar: 'There's a problem with the ___'. Check-out: 'I'd like to check out'.",
    examples: [
      { target: 'I have a reservation under Silva.',  native: 'Tenho reserva no nome Silva.' },
      { target: "I lost my room key.",                 native: 'Perdi a chave do quarto.' },
      { target: 'There\'s a problem with the AC.',     native: 'Tem problema com o ar condicionado.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine termos de hotel',
      pairs: [
        { left: 'Reservation', right: 'Reserva' },
        { left: 'Room key', right: 'Chave do quarto' },
        { left: 'Check out', right: 'Sair' },
        { left: 'Reception', right: 'Recepção' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tenho uma reserva no nome Silva.',
      correct: ['I have a reservation under Silva.', 'I have a reservation under Silva'],
    },
    {
      type: 'fill_blank',
      instruction: 'Reclamando educado',
      sentence: 'There\'s a _____ with the WiFi.',
      options: ['problem', 'problems', 'bad'],
      correct: 'problem',
      context: '"There\'s a problem with..." é padrão.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I'd like to check out\"",
      words: ['out.', 'check', "I'd", 'to', 'like'],
      correct: ["I'd", 'like', 'to', 'check', 'out.'],
      translation: 'Queria fazer o check-out',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Perdi a chave do quarto.',
      correct: ['I lost my room key.', 'I lost my room key'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Reclamando',
      question: 'Modo educado de reclamar do AC:',
      options: [
        { text: "There's a problem with the AC — could someone fix it?", correct: true },
        { text: "AC bad fix it.", correct: false },
        { text: "AC no work.", correct: false },
      ],
      explanation: '"There\'s a problem... could someone fix it?" é educado e claro.',
    },
  ],

  rwenDialogue: {
    intro: 'Check-in num hotel em Lisboa.',
    lines: [
      { speaker: 'npc', target: "Welcome. Do you have a reservation?", native: 'Bem-vindo. Tem reserva?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have a reservation under Silva.", native: 'Sim, tenho reserva no nome Silva.', correct: true, feedback: 'Mandou bem.' },
          { target: "Reservation Silva.", native: '...', correct: false, feedback: 'Frase quebrada.' },
          { target: "Reserva Silva.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I have a reservation (em inglês)', correct: ['I have a reservation', 'I have a reservation.'] },
      { prompt: "I'd like to check out (em inglês)", correct: ["I'd like to check out", "I would like to check out"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica check-in completo em voz alta — reserva, nome, dias, chave.",
    rwenSignoff: "Amanhã — emergências de viagem.",
  },

  phase8: {
    scenario: "Hotel check-in in Lisbon — confirm reservation, get key, ask about WiFi.",
    rwenRole: "Polite hotel receptionist.",
    successCriteria: "User uses 'I have a reservation', confirms name, asks for WiFi or key.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
