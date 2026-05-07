import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Fear & Worry — Medo e preocupação',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'I'm scared' (medo agudo). 'I'm worried about ___' (preocupação prolongada). 'Don't worry' (não se preocupa) — mas com cuidado.",
    culturalNote: "Brasileiro tem mais facilidade pra falar de medo entre amigos — 'tô apavorado'. Em inglês 'I'm scared' funciona, e 'I'm worried about my mum's health' carrega preocupação contínua. 'Don't worry' sozinho pode soar dispensador — adicione 'we'll figure it out' pra acolher.",
  },
  crisisHandoff: true,

  chunks: [
    {
      id: 'im_scared',
      target: "I'm scared",
      native: 'Estou com medo',
      literal: 'I-am scared',
      emoji: '😨',
      phonetic: 'aym-SKAYRD',
      audioRef: null,
    },
    {
      id: 'worried_about',
      target: "I'm worried about...",
      native: 'Estou preocupado(a) com...',
      literal: 'I-have worry about',
      emoji: '😟',
      phonetic: 'aym-WUH-reed-uh-BOWT',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry",
      native: 'Não se preocupa',
      literal: "do-not worry",
      emoji: '🤝',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Fear & worry',
    explanation: "'I'm scared of ___' (medo de). 'I'm worried about ___' (preocupado com). 'Don't worry — we'll figure it out' (não se preocupa, a gente resolve).",
    examples: [
      { target: "I'm scared of flying.",          native: 'Tenho medo de voar.' },
      { target: "I'm worried about my mum.",       native: 'Estou preocupado com minha mãe.' },
      { target: "Don't worry — we'll figure it out together.", native: 'Não se preocupa — a gente resolve junto.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine emoções',
      pairs: [
        { left: 'Scared', right: 'Com medo' },
        { left: 'Worried', right: 'Preocupado' },
        { left: 'Anxious', right: 'Ansioso' },
        { left: "Don't worry", right: 'Não se preocupa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou preocupado com minha mãe.',
      correct: ["I'm worried about my mother.", "I'm worried about my mum."],
    },
    {
      type: 'fill_blank',
      instruction: 'Preposição',
      sentence: "I'm worried _____ the trip.",
      options: ['about', 'of', 'with'],
      correct: 'about',
      context: '"Worried about" é a combinação fixa.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I\'m scared of flying"',
      words: ['flying.', 'of', 'scared', "I'm"],
      correct: ["I'm", 'scared', 'of', 'flying.'],
      translation: 'Tenho medo de voar',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — acolhendo',
      prompt: 'Não se preocupa — a gente resolve junto.',
      correct: ["Don't worry — we'll figure it out together.", "Don't worry, we'll figure it out together."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Acolhendo amigo nervoso',
      question: 'Frase mais acolhedora:',
      options: [
        { text: "Don't worry — we'll figure it out together.", correct: true },
        { text: "Don't worry.", correct: false },
        { text: "Calm down.", correct: false },
      ],
      explanation: 'Adicionar "we\'ll figure it out together" não dispensa o sentimento.',
    },
  ],

  rwenDialogue: {
    intro: 'Amiga te liga preocupada com mudança de país.',
    lines: [
      { speaker: 'npc', target: "I'm so worried about moving abroad next month.", native: 'Estou tão preocupada com a mudança no próximo mês.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I understand — it's a big change. Don't worry, we'll figure it out together.", native: 'Eu entendo — é uma mudança grande. Não se preocupa, a gente resolve junto.', correct: true, feedback: 'Mandou bem — acolheu sem dispensar.' },
          { target: "Don't worry.", native: '...', correct: false, feedback: 'Curto demais — adicione acolhida.' },
          { target: "Calma.", native: '...', correct: false, feedback: 'Em português, e seco.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'm worried about (em inglês)", correct: ["I'm worried about", 'I am worried about'] },
      { prompt: "Don't worry (em inglês)", correct: ["Don't worry", 'Do not worry'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pense numa preocupação atual. Escreva em inglês 'I'm worried about ___'. Pratique acolher um amigo com 'Don't worry — we'll figure it out together'.",
    rwenSignoff: "Amanhã — doença.",
  },

  phase8: {
    scenario: "Friend calls you anxious about a big life change. Listen and reassure them in English.",
    rwenRole: "Anxious friend opening up.",
    successCriteria: "User uses 'I understand', acknowledges the worry, and offers 'we'll figure it out together' or similar.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
