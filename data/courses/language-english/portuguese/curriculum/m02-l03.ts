import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — Você pode me ajudar?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Quando você se perde ou não sabe o que fazer, precisa pedir ajuda. Em inglês, a palavra mágica é 'can' — abre o caminho do pedido.",
    culturalNote: "No Brasil a gente tende a pedir ajuda com rodeios — 'será que você pode...?', 'desculpa incomodar...'. Em inglês 'Can you help me?' é direto e funciona com qualquer pessoa, do desconhecido ao chefe. Ser direto não é grosseria — é o padrão.",
  },

  chunks: [
    {
      id: 'can_you_help_me',
      target: 'Can you help me?',
      native: 'Você pode me ajudar?',
      literal: 'Can you help me?',
      emoji: '🆘',
      phonetic: 'KAN-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_need_help',
      target: 'I need help',
      native: 'Preciso de ajuda',
      literal: 'I-need help',
      emoji: '🙋',
      phonetic: 'AY-need-HELP',
      audioRef: null,
    },
    {
      id: 'im_lost',
      target: "I'm lost",
      native: 'Estou perdido(a)',
      literal: 'I-am lost',
      emoji: '🧭',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Modal verb "can"',
    explanation: "'Can' é o verbo modal pra pedir algo. Estrutura: 'Can + you + (verbo) + ...?'. Esse 'can' transforma a frase numa solicitação educada — sem ele soa como ordem.",
    examples: [
      { target: 'Can you help me?',           native: 'Você pode me ajudar?' },
      { target: 'Can you speak slowly?',      native: 'Você pode falar devagar?' },
      { target: 'Can you show me the way?',   native: 'Você pode me mostrar o caminho?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: 'Can you help me?', right: 'Você pode me ajudar?' },
        { left: 'I need help',      right: 'Preciso de ajuda' },
        { left: "I'm lost",         right: 'Estou perdido' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você se perdeu numa cidade que não conhece',
      prompt: 'Estou perdido. Você pode me ajudar?',
      correct: [
        "I'm lost. Can you help me?",
        "I'm lost, can you help me?",
        "I am lost. Can you help me?",
        "i'm lost. can you help me?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — pedindo ajuda no balcão de informações',
      sentence: '____ you help me, please?',
      options: ['Can', 'Are', 'Do'],
      correct: 'Can',
      context: "'Can you...?' é a forma padrão de pedir ajuda.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase — você precisa de ajuda',
      words: ['I', 'need', 'some', 'help'],
      correct: ['I', 'need', 'some', 'help'],
      translation: 'Preciso de ajuda',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou perdido',
      correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — pedindo ajuda formalmente',
      prompt: 'Por favor, você pode me ajudar?',
      correct: ['Please, can you help me?', 'Please can you help me?', 'Please, can you help me', 'please, can you help me?'],
    },
  ],

  rwenDialogue: {
    intro: "Você acabou de chegar no aeroporto JFK em Nova York. Tá perdido — não sabe onde pegar o trem pra Manhattan. Vai até o balcão de informações.",
    lines: [
      { speaker: 'npc', target: "Hi, how can I help?", native: 'Oi, como posso ajudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. Can you help me?", native: 'Com licença, estou perdido. Você pode me ajudar?', correct: true,  feedback: 'Mandou bem — abriu com licença, explicou e pediu ajuda.' },
          { target: 'Help.',                                  native: 'Ajuda.',                                            correct: false, feedback: 'Curto demais — fala uma frase completa.' },
          { target: 'Thank you.',                             native: 'Obrigado.',                                          correct: false, feedback: "Você não agradeceu nada ainda — peça ajuda primeiro." },
        ],
      },
      { speaker: 'npc', target: "Of course — where are you trying to go?", native: 'Claro — pra onde você tá tentando ir?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'Excuse me' + 'I'm lost' + 'Can you help me?' — combo que salva você em qualquer aeroporto.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Can you help me? (em inglês)', correct: ['Can you help me?', 'Can you help me', 'can you help me?', 'can you help me'] },
      { prompt: "I'm lost (em inglês)",          correct: ["I'm lost", "I am lost", "i'm lost", "I'm lost.", "I am lost."] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Imagine uma situação onde precisaria pedir ajuda em inglês. Fala em voz alta: 'Excuse me, can you help me? I'm lost.' Duas vezes.",
    rwenSignoff: "Essas frases são ouro — não tenha medo de usar.",
  },

  phase8: {
    scenario: "You've just landed at JFK airport in New York. You can't find the AirTrain to Manhattan, your phone is dead, and signs aren't making sense. Approach the information desk and ask for help.",
    rwenRole: "Lwazi, 26, the airport information officer. Patient, helpful, polite. Speaks clear American English.",
    successCriteria: "User opens with 'Excuse me' or 'Hi', states a problem ('I'm lost' / 'I need help'), uses 'Can you help me?' or equivalent. Responds to follow-up questions about where they're trying to go.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
