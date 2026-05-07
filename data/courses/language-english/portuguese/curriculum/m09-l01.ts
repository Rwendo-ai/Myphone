import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — Onde fica...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Em terra estrangeira a primeira coisa que você precisa saber perguntar é 'Where is...?'. Salva você de qualquer rua perdida.",
    culturalNote: "Em Londres, NY, Lisboa — quem mora ali tá com pressa, mas costuma ajudar. Comece com 'Excuse me' (com licença) — abre a porta. Sem isso, soa rude. E 'Where is the bathroom?' é provavelmente a frase em inglês que mais salva turista.",
  },

  chunks: [
    {
      id: 'where_is_the_bank',
      target: 'Where is the bank?',
      native: 'Onde fica o banco?',
      literal: 'Where is the bank?',
      emoji: '🏦',
      phonetic: 'WHAIR-iz-thuh-BANK',
      audioRef: null,
    },
    {
      id: 'excuse_me_toilets',
      target: 'Excuse me, the toilets?',
      native: 'Com licença, os banheiros?',
      literal: 'Excuse-me, the toilets?',
      emoji: '🙏',
      phonetic: 'ek-SKYOOZ-mee-thuh-TOY-lets',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'Ali',
      literal: 'Over there',
      emoji: '👉',
      phonetic: 'OH-ver-THAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Locations',
    explanation: "Comece com 'Excuse me' depois 'Where is the ___?'. O 'the' aponta pra um lugar específico que ambos sabem que existe.",
    examples: [
      { target: 'Where is the bank?',           native: 'Onde fica o banco?' },
      { target: 'Where is the station?',         native: 'Onde fica a estação?' },
      { target: 'Where is the toilet?',          native: 'Onde fica o banheiro?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os locais',
      pairs: [
        { left: 'The bank', right: 'O banco' },
        { left: 'The station', right: 'A estação' },
        { left: 'The toilet', right: 'O banheiro' },
        { left: 'Over there', right: 'Ali' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Onde fica o banco?',
      correct: ['Where is the bank?', 'where is the bank?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pergunta de lugar',
      sentence: '_____ is the station?',
      options: ['Where', 'What', 'How'],
      correct: 'Where',
      context: 'Lugar = Where.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Excuse me, where is the bank?"',
      words: ['bank?', 'me,', 'where', 'is', 'Excuse', 'the'],
      correct: ['Excuse', 'me,', 'where', 'is', 'the', 'bank?'],
      translation: 'Com licença, onde fica o banco?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Ali',
      correct: ['Over there', 'over there', "It's over there"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pedir direção',
      question: 'Pergunta natural a um desconhecido:',
      options: [
        { text: 'Excuse me, where is the metro?', correct: true },
        { text: 'Metro where?', correct: false },
        { text: 'Tell me metro.', correct: false },
      ],
      explanation: '"Excuse me + where is the ___?" é o padrão.',
    },
  ],

  rwenDialogue: {
    intro: 'Primeira manhã em Lisboa, você precisa achar a estação de metrô.',
    lines: [
      { speaker: 'npc', target: "Hi, can I help?", native: 'Oi, posso ajudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me — where is the metro station?", native: 'Com licença — onde fica a estação de metrô?', correct: true, feedback: 'Mandou bem.' },
          { target: "Metro?", native: '...', correct: false, feedback: 'Curto demais.' },
          { target: "Onde fica?", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Where is the bank? (em inglês)', correct: ['Where is the bank?', 'where is the bank?'] },
      { prompt: 'Over there (em inglês)', correct: ['Over there', 'over there'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratique em voz alta 3 perguntas: 'Where is the bank?', 'Where is the toilet?', 'Where is the bus stop?'.",
    rwenSignoff: "Amanhã — direções (esquerda, direita).",
  },

  phase8: {
    scenario: "Lost in central London/Lisbon. Ask a passerby for a public location.",
    rwenRole: "Polite local who points and gives a quick direction.",
    successCriteria: "User opens with 'Excuse me' and asks 'Where is the [place]?'. Understands a directional reply.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
