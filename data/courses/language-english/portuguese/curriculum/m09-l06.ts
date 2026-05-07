import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the airport — No aeroporto',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Aeroporto: 'boarding pass', 'departure gate', 'customs'. Nessas horas o inglês é obrigatório.",
    culturalNote: "Em aeroporto a maioria dos termos é em inglês mesmo no Brasil — 'gate', 'check-in', 'security'. Em Heathrow ou JFK, atendentes esperam clareza: pergunte direto, sem rodeios. Não tenha vergonha de pedir pra repetir.",
  },

  chunks: [
    {
      id: 'boarding_pass',
      target: 'Boarding pass',
      native: 'Cartão de embarque',
      literal: 'Boarding pass',
      emoji: '🛂',
      phonetic: 'BOR-ding-PAS',
      audioRef: null,
    },
    {
      id: 'departure_gate',
      target: 'Departure gate',
      native: 'Portão de embarque',
      literal: 'Departure gate',
      emoji: '🚪',
      phonetic: 'di-PAR-cher-GAYT',
      audioRef: null,
    },
    {
      id: 'customs',
      target: 'Customs',
      native: 'Alfândega',
      literal: 'Customs',
      emoji: '🛃',
      phonetic: 'KUS-tums',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Airport vocabulary',
    explanation: "Termos chave: boarding pass (cartão), gate (portão), customs (alfândega), check-in (registro), security (segurança), baggage claim (esteira de bagagem).",
    examples: [
      { target: "Where is gate 22?",                  native: 'Onde fica o portão 22?' },
      { target: 'I need to go through customs.',       native: 'Preciso passar pela alfândega.' },
      { target: 'Here is my boarding pass.',           native: 'Aqui está meu cartão de embarque.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Boarding pass', right: 'Cartão de embarque' },
        { left: 'Departure gate', right: 'Portão de embarque' },
        { left: 'Customs', right: 'Alfândega' },
        { left: 'Baggage claim', right: 'Esteira' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Onde fica o portão 22?',
      correct: ['Where is gate 22?', 'Where is gate twenty-two?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Documento',
      sentence: 'May I see your _____, please?',
      options: ['boarding pass', 'gate', 'customs'],
      correct: 'boarding pass',
      context: 'Documento de embarque.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Here is my passport"',
      words: ['passport.', 'is', 'Here', 'my'],
      correct: ['Here', 'is', 'my', 'passport.'],
      translation: 'Aqui está meu passaporte',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Preciso passar pela alfândega.',
      correct: ['I need to go through customs.', 'I need to go through customs'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Aeroporto',
      question: 'Como pedir indicação do portão:',
      options: [
        { text: 'Excuse me, where is gate 14?', correct: true },
        { text: 'Gate 14 where?', correct: false },
        { text: 'You tell me 14.', correct: false },
      ],
      explanation: '"Excuse me, where is gate ___?" é o padrão.',
    },
  ],

  rwenDialogue: {
    intro: 'Heathrow — você acabou de pousar com conexão apertada.',
    lines: [
      { speaker: 'npc', target: "How can I help?", native: 'Como posso ajudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, where is gate 22? My boarding pass says it leaves in 30 minutes.", native: 'Com licença, onde fica o portão 22? Meu embarque sai em 30 minutos.', correct: true, feedback: 'Mandou bem.' },
          { target: "Gate 22 where?", native: '...', correct: false, feedback: 'Estrutura quebrada.' },
          { target: "Onde portão 22?", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Boarding pass (em inglês)', correct: ['Boarding pass', 'boarding pass'] },
      { prompt: 'Departure gate (em inglês)', correct: ['Departure gate', 'departure gate'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Liste em inglês 5 palavras de aeroporto. Pratica em voz alta.",
    rwenSignoff: "Amanhã — hotel.",
  },

  phase8: {
    scenario: "Lost in Heathrow with a tight connection — find your gate.",
    rwenRole: "Helpful airport staff member.",
    successCriteria: "User uses 'gate', 'boarding pass', and asks 'where is...?' clearly under time pressure.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
