import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Lost & Travel emergencies — Perdido em viagem',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Apuros de viagem: 'I'm lost', 'I missed my bus', 'I lost my bag'. Frases que salvam quando o dia desanda.",
    culturalNote: "Brasileiro tende a improvisar com gestos. Em país anglófono, fale claro: 'I'm lost', 'I need help'. Adicione 'please' — aumenta a chance de alguém parar pra ajudar. Em metrô lotado, ainda assim funciona.",
  },

  chunks: [
    {
      id: 'im_lost',
      target: "I'm lost.",
      native: 'Estou perdido(a).',
      literal: 'I-am lost.',
      emoji: '😰',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
    {
      id: 'i_missed_my_bus',
      target: 'I missed my bus.',
      native: 'Perdi meu ônibus.',
      literal: 'I missed my bus.',
      emoji: '🚌',
      phonetic: 'ay-MIST-my-BUS',
      audioRef: null,
    },
    {
      id: 'i_lost_my_bag',
      target: 'I lost my bag.',
      native: 'Perdi minha bolsa.',
      literal: 'I lost my bag.',
      emoji: '👜',
      phonetic: 'ay-LOST-my-BAG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emergency travel phrases',
    explanation: "'I'm lost' (perdido). 'I missed ___' (perdi o transporte). 'I lost ___' (perdi um objeto). Cuidado: 'miss' = perder oportunidade/horário; 'lose' (lost) = perder objeto/lugar.",
    examples: [
      { target: "I'm lost — could you help me?",       native: 'Estou perdido — pode me ajudar?' },
      { target: 'I missed my flight.',                  native: 'Perdi meu voo.' },
      { target: 'I lost my passport.',                   native: 'Perdi meu passaporte.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os apuros',
      pairs: [
        { left: "I'm lost", right: 'Estou perdido' },
        { left: 'I missed my bus', right: 'Perdi o ônibus' },
        { left: 'I lost my bag', right: 'Perdi a bolsa' },
        { left: 'I need help', right: 'Preciso de ajuda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Perdi minha bolsa no trem.',
      correct: ['I lost my bag on the train.', 'I lost my bag on the train'],
    },
    {
      type: 'fill_blank',
      instruction: 'Verbo certo',
      sentence: 'I _____ my flight.',
      options: ['missed', 'lost', 'left'],
      correct: 'missed',
      context: 'Perder o voo (não embarcar a tempo) = miss.',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I'm lost — could you help me?\"",
      words: ['me?', 'lost', "I'm", 'help', 'could', '—', 'you'],
      correct: ["I'm", 'lost', '—', 'could', 'you', 'help', 'me?'],
      translation: 'Estou perdido — pode me ajudar?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Perdi meu passaporte.',
      correct: ['I lost my passport.', 'I lost my passport'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Verbo certo',
      question: '"Perdi o trem das 9":',
      options: [
        { text: "I missed the 9 o'clock train.", correct: true },
        { text: "I lost the 9 o'clock train.", correct: false },
        { text: "I left the 9 o'clock train.", correct: false },
      ],
      explanation: 'Perder horário = miss. Perder objeto = lose.',
    },
  ],

  rwenDialogue: {
    intro: 'Você sai do trem em Londres mas esqueceu a mala.',
    lines: [
      { speaker: 'npc', target: "You look worried — everything OK?", native: 'Parece preocupado — tudo bem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm lost — and I lost my bag on the train. Could you help me?", native: 'Estou perdido — e perdi minha mala no trem. Pode me ajudar?', correct: true, feedback: 'Mandou bem — situação clara, pedido educado.' },
          { target: "Bag train no good.", native: '...', correct: false, feedback: 'Frase quebrada.' },
          { target: "Perdi mala.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Apuro virou pedido educado.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'm lost (em inglês)", correct: ["I'm lost", 'I am lost', "i'm lost"] },
      { prompt: 'I lost my bag (em inglês)', correct: ['I lost my bag', 'I lost my bag.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratica em voz alta — três apuros: 'I'm lost', 'I missed my bus', 'I lost my passport'.",
    rwenSignoff: "Amanhã — pedindo ajuda em viagem.",
  },

  phase8: {
    scenario: "Lost in London after missing a connection — ask for help and report a lost bag.",
    rwenRole: "Sympathetic stranger willing to help.",
    successCriteria: "User says 'I'm lost', specifies what's missing/missed (bag, train, bus), asks 'Could you help me?'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
