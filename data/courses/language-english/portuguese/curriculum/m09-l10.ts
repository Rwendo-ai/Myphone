import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone do Módulo 9 — viagem inteira em inglês: aeroporto, transporte, hotel, ajuda. Tudo numa conversa.",
    culturalNote: "'Please', 'thank you', 'excuse me', 'could you' — esses 4 carregam viagem inteira em país anglófono. O calor brasileiro entra no sorriso e no ritmo. A estrutura é mais econômica — mas funciona em qualquer aeroporto, estação, hotel.",
  },

  chunks: [
    {
      id: 'review_arrived_directions',
      target: "Excuse me, I just arrived. Where is the Underground?",
      native: 'Com licença, acabei de chegar. Onde fica o metrô?',
      literal: 'Excuse me, I just arrived. Where is the Underground?',
      emoji: '🛬',
      phonetic: 'ek-SKYOOZ-mee-ay-just-uh-RYVD',
      audioRef: null,
    },
    {
      id: 'review_ticket_distance',
      target: "One ticket to King's Cross, please. How far is it?",
      native: "Um ingresso pra King's Cross, por favor. É longe?",
      literal: "One ticket to King's Cross, please. How far is it?",
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-KINGZ-KROS-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_hotel_help',
      target: "I have a reservation. Could you write down the WiFi password?",
      native: 'Tenho uma reserva. Pode escrever a senha do WiFi?',
      literal: 'I have a reservation. Could you write down the WiFi password?',
      emoji: '📶',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Travel flow',
    explanation: "Sequência: aeroporto → transporte → hotel → adaptação. Frases-chave: 'Excuse me + where is...?', 'One ticket to ___', 'I have a reservation', 'Could you ___?'.",
    examples: [
      { target: "Excuse me, where is gate 22?",                  native: 'Com licença, onde fica o portão 22?' },
      { target: "I'd like a return ticket, please.",              native: 'Queria ida e volta, por favor.' },
      { target: "I have a reservation under Silva.",              native: 'Tenho reserva no nome Silva.' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Com licença, acabei de chegar. Onde fica o metrô?',
      correct: ['Excuse me, I just arrived. Where is the Underground?', 'Excuse me, I just arrived. Where is the metro?', 'Excuse me, I just arrived. Where is the subway?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Hotel',
      sentence: 'I have a _____ under Silva.',
      options: ['reservation', 'reserve', 'booking room'],
      correct: 'reservation',
      context: '"Reservation" é o termo padrão.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Pode escrever a senha do WiFi?',
      correct: ['Could you write down the WiFi password?', 'Could you write the WiFi password down?'],
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"How far is the airport?\"",
      words: ['airport?', 'far', 'is', 'How', 'the'],
      correct: ['How', 'far', 'is', 'the', 'airport?'],
      translation: 'Quão longe é o aeroporto?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Dois ingressos ida e volta, por favor.',
      correct: ['Two return tickets, please.', 'Two round-trip tickets, please.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Capstone',
      question: 'Frase mais natural pra abrir conversa com um desconhecido em viagem:',
      options: [
        { text: "Excuse me, could you help me? I just arrived — I'm a bit lost.", correct: true },
        { text: "Help. Lost. Tell me.", correct: false },
        { text: "I no know area.", correct: false },
      ],
      explanation: '"Excuse me + could you help" é o pacote educado.',
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — primeira manhã em Londres. Você precisa de informação, transporte, hotel.',
    lines: [
      {
        speaker: 'npc',
        target: "Need any help?",
        native: 'Precisa de ajuda?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Yes, please — I just arrived from São Paulo. Where is the Underground? I need to go to King's Cross.",
            native: '...',
            correct: true,
            feedback: 'Mandou bem — chegada, pedido, destino tudo claro.',
          },
          {
            target: "Underground King's Cross.",
            native: '...',
            correct: false,
            feedback: 'Adicione "I need to go to..." e "Where is...".',
          },
          {
            target: "Cheguei agora, vou pra King's Cross.",
            native: '...',
            correct: false,
            feedback: 'Em português.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "The Underground is just downstairs. Take the Piccadilly line.",
        native: 'O metrô é logo embaixo. Pega a linha Piccadilly.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sorry, could you write that down? I want to make sure I get the right line.",
            native: '...',
            correct: true,
            feedback: 'Mandou bem — você confirmou educadamente.',
          },
          {
            target: "Repeat.",
            native: '...',
            correct: false,
            feedback: 'Use "Could you repeat?" — mais educado.',
          },
          {
            target: "Não entendi.",
            native: '...',
            correct: false,
            feedback: 'Em português.',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 9 — viagem inteira em inglês com gentileza brasileira. Próximo: emoções e história pessoal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Excuse me, where is...? (em inglês)', correct: ['Excuse me, where is', 'Excuse me, where is...'] },
      { prompt: "Could you write it down? (em inglês)", correct: ['Could you write it down?', 'Could you write it down'] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 9',
    task: "Imagine sua próxima viagem em país anglófono. Pratica em voz alta um diálogo: aeroporto → transporte → hotel.",
    rwenSignoff: "Você fechou o Módulo 9. Próximo — emoções e história pessoal. Capstone do curso.",
  },

  phase8: {
    scenario: "Capstone travel arc: arrive in London, find transport, get to hotel, ask for help along the way.",
    rwenRole: "Sequence of polite English-speaking helpers (info desk, ticket clerk, hotel receptionist).",
    successCriteria: "User runs 4-step travel flow: arrival info, transport ticket, hotel check-in, polite request for clarification.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
