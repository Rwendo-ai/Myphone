import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — Bom dia',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Bom dia! Em inglês, a saudação muda com a hora — 'Good morning' vai do amanhecer até o meio-dia.",
    culturalNote: "No Brasil, 'Bom dia' é quase sagrado — você diz pro porteiro, pro padeiro, pra galera no elevador. Em inglês, 'Good morning' tem o mesmo papel, mas a pergunta 'Did you sleep well?' não rola tanto — é mais íntima, fica entre família ou parceiro.",
  },

  chunks: [
    {
      id: 'good_morning',
      target: 'Good morning',
      native: 'Bom dia',
      literal: undefined,
      emoji: '🌅',
      phonetic: 'good-MOR-ning',
      audioRef: null,
    },
    {
      id: 'did_you_sleep_well',
      target: 'Did you sleep well?',
      native: 'Dormiu bem?',
      literal: 'Did you sleep well?',
      emoji: '😴',
      phonetic: 'did-yoo-SLEEP-well',
      audioRef: null,
    },
    {
      id: 'i_slept_well',
      target: 'I slept well',
      native: 'Dormi bem',
      literal: 'I-slept well',
      emoji: '✨',
      phonetic: 'aye-SLEPT-well',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greeting',
    explanation: "Em inglês a saudação muda com a hora. 'Good morning' vai até o meio-dia (12pm). 'Did you sleep well?' é íntima — usa com família, parceiro ou amigo bem próximo, não com colega de trabalho que você acabou de conhecer.",
    examples: [
      { target: 'Good morning',           native: 'Bom dia' },
      { target: 'Did you sleep well?',    native: 'Dormiu bem?' },
      { target: 'I slept well, thanks',   native: 'Dormi bem, obrigado(a)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Good morning',         right: 'Bom dia' },
        { left: 'Did you sleep well?',  right: 'Dormiu bem?' },
        { left: 'I slept well',         right: 'Dormi bem' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Bom dia',
      correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — responda à pergunta',
      prompt: 'Dormi bem',
      correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a saudação matinal',
      sentence: 'Good ____, how did you sleep?',
      options: ['morning', 'evening', 'night'],
      correct: 'morning',
      context: 'São 8h da manhã, você acabou de chegar no escritório.',
    },
    {
      type: 'build_sentence',
      instruction: 'Coloque em ordem',
      words: ['Did', 'you', 'sleep', 'well'],
      correct: ['Did', 'you', 'sleep', 'well'],
      translation: 'Dormiu bem?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Dormiu bem?',
      correct: ['Did you sleep well?', 'did you sleep well?', 'Did you sleep well', 'did you sleep well'],
    },
  ],

  rwenDialogue: {
    intro: '8h da manhã. Você é estagiário numa empresa em São Paulo com sócios britânicos. Encontra um deles na cozinha enquanto faz café.',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: 'Bom dia! Dormiu bem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good morning. I slept well, thanks.", native: 'Bom dia. Dormi bem, obrigado.', correct: true,  feedback: "Perfeito — saudação certa e resposta educada." },
          { target: 'Hi.',                                  native: 'Oi.',                              correct: false, feedback: "Curto demais pro contexto profissional matinal — 'Good morning' é o esperado." },
          { target: 'Bye!',                                 native: 'Tchau!',                            correct: false, feedback: "Essa é despedida, não saudação." },
        ],
      },
      { speaker: 'npc', target: "Glad to hear it.", native: 'Que bom.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Manhã profissional — gentileza sem exagero.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Good morning (em inglês)', correct: ['Good morning', 'good morning', 'Good morning.', 'good morning.'] },
      { prompt: 'I slept well (em inglês)', correct: ['I slept well', 'i slept well', 'I slept well.', 'i slept well.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Amanhã de manhã, fale 'Good morning' pra alguém — em voz alta, mesmo que seja pro espelho.",
    rwenSignoff: "Até amanhã.",
  },

  phase8: {
    scenario: "It's 8am. You walk into the office kitchen of a São Paulo startup with British co-founders. One of them is making coffee.",
    rwenRole: "Sarah, 35, British co-founder who's lived in Brazil for 8 years. Polite, morning-person, asks genuine questions in clear English.",
    successCriteria: "User opens with 'Good morning', responds appropriately if asked 'Did you sleep well?' (uses 'I slept well' or similar), keeps register polite-professional.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
