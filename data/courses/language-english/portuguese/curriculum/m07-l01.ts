import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: 'Hungry & Thirsty — Fome e sede',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Módulo 7 é sobre comida. Começamos com fome e sede — mas atenção: em inglês 'I am hungry', não 'I have hunger'.",
    culturalNote: "Em português a gente diz 'tenho fome' — verbo 'ter'. Em inglês usa 'be': 'I am hungry'. Erro clássico do BR é dizer 'I have hunger' — que parece errado mesmo. Mesma coisa pra sede: 'I am thirsty'.",
  },

  chunks: [
    {
      id: 'im_hungry',
      target: "I'm hungry",
      native: 'Estou com fome',
      literal: 'I-am hungry',
      emoji: '🍴',
      phonetic: 'aym-HUN-gree',
      audioRef: null,
    },
    {
      id: 'im_thirsty',
      target: "I'm thirsty",
      native: 'Estou com sede',
      literal: 'I-am thirsty',
      emoji: '💧',
      phonetic: 'aym-THUR-stee',
      audioRef: null,
    },
    {
      id: 'i_want_water',
      target: 'I want water',
      native: 'Quero água',
      literal: 'I want water',
      emoji: '🥤',
      phonetic: 'ay-WONT-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stative "I am" with feelings',
    explanation: "Em inglês fome, sede, cansaço usam 'I am' — não 'I have'. 'I am hungry' (sou fominha agora). É um estado, não uma posse.",
    examples: [
      { target: "I'm hungry",  native: 'Estou com fome' },
      { target: "I'm thirsty", native: 'Estou com sede' },
      { target: "I'm tired",   native: 'Estou cansado' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: "I'm hungry", right: 'Estou com fome' },
        { left: "I'm thirsty", right: 'Estou com sede' },
        { left: 'I want water', right: 'Quero água' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou com fome',
      correct: ["I'm hungry", "I am hungry", "i'm hungry"],
    },
    {
      type: 'fill_blank',
      instruction: 'Estado em inglês',
      sentence: "I ____ thirsty.",
      options: ['am', 'have', 'is'],
      correct: 'am',
      context: "Em inglês: 'I AM thirsty'. Não 'I have'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I want some water"',
      words: ['water.', 'want', 'some', 'I'],
      correct: ['I', 'want', 'some', 'water.'],
      translation: 'Quero um pouco de água',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou com sede',
      correct: ["I'm thirsty", "I am thirsty", "i'm thirsty"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Erro clássico',
      question: 'Como dizer "tenho fome" em inglês?',
      options: [
        { text: "I'm hungry.", correct: true },
        { text: "I have hunger.", correct: false },
        { text: "I have hungry.", correct: false },
      ],
      explanation: "'I'm hungry' — 'I am' é o verbo certo.",
    },
  ],

  rwenDialogue: {
    intro: 'Almoço com colega americano em SP. Ele pergunta se você quer comer.',
    lines: [
      { speaker: 'npc', target: "Are you hungry?", native: 'Tá com fome?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm hungry. And thirsty too.", native: 'Sim, tô com fome. E com sede também.', correct: true, feedback: 'Mandou bem — "I am" pra estados.' },
          { target: "I have hunger.", native: '...', correct: false, feedback: "Em inglês: 'I am hungry', não 'I have'." },
          { target: "Hungry.", native: 'Fome.', correct: false, feedback: 'Frase incompleta.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem! Verbo "be" pra fome — fixou.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'm hungry (em inglês)", correct: ["I'm hungry", "I am hungry", "i'm hungry"] },
      { prompt: 'I want water (em inglês)', correct: ['I want water', 'I want water.', 'i want water'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Da próxima vez que estiver com fome, fala em voz alta: 'I'm hungry'. Sente o 'am' substituindo o 'tenho'.",
    rwenSignoff: "Amanhã — comidas comuns.",
  },

  phase8: {
    scenario: "Lunch with an American colleague in SP. They ask if you want to eat.",
    rwenRole: "Friendly colleague checking in.",
    successCriteria: "User uses 'I'm hungry' or 'I'm thirsty' (with 'am'), not 'I have'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
