import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come" — I go / I come',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Go' = ir embora de onde você está. 'Come' = vir pra perto de quem fala. Pra invitar alguém: 'Come to my house', não 'Go to my house'.",
    culturalNote: "Em português 'venha' / 'vou' funcionam parecidos. Em inglês cuidado: ao telefone, se alguém te chama 'where are you?' e você está chegando, diz 'I'm coming!' (estou indo aí!) — porque você se posiciona do ponto de vista de quem está te esperando.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Eu vou pro trabalho.',
      literal: 'I go to work',
      emoji: '🚶',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'come_here',
      target: 'Come here.',
      native: 'Vem aqui.',
      literal: 'Come here',
      emoji: '👋',
      phonetic: 'KUM-HEER',
      audioRef: null,
    },
    {
      id: 'were_coming',
      target: "We're coming.",
      native: 'Estamos indo.',
      literal: 'We are coming',
      emoji: '🏃',
      phonetic: 'WEER-KUM-ing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Go vs Come',
    explanation: "GO = pra longe (I go to work, I'm going home). COME = pra perto de quem fala (Come here, She's coming to my party). Convite: use 'come'.",
    examples: [
      { target: 'I go to work at 8.',     native: 'Vou pro trabalho às 8.' },
      { target: 'Come to my place.',      native: 'Vem na minha casa.' },
      { target: "I'm coming!",            native: 'Estou indo!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os movimentos',
      pairs: [
        { left: 'I go', right: 'Eu vou' },
        { left: 'Come here', right: 'Vem aqui' },
        { left: "I'm coming", right: 'Estou indo' },
        { left: 'Go home', right: 'Ir pra casa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vou pro trabalho às 8.',
      correct: ['I go to work at 8.', 'I go to work at eight.', 'i go to work at 8.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Convite',
      sentence: '_____ to my house!',
      options: ['Come', 'Go', 'Walk'],
      correct: 'Come',
      context: 'Convite usa "come".',
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I'm coming home\"",
      words: ['home.', "I'm", 'coming'],
      correct: ["I'm", 'coming', 'home.'],
      translation: 'Estou indo pra casa',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — telefone',
      prompt: 'Estou indo!',
      correct: ["I'm coming!", "I am coming!", "i'm coming!"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Convite pra festa',
      question: 'Pra convidar amiga pra sua festa:',
      options: [
        { text: "Come to my party!", correct: true },
        { text: "Go to my party!", correct: false },
        { text: "I go to your party!", correct: false },
      ],
      explanation: 'Convite = come.',
    },
  ],

  rwenDialogue: {
    intro: 'Convidando amiga americana pro aniversário.',
    lines: [
      { speaker: 'npc', target: "What's happening this weekend?", native: 'O que vai rolar no fim de semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's my birthday — come to my place on Saturday!", native: 'É meu aniversário — vem na minha casa sábado!', correct: true, feedback: 'Mandou bem — convite com "come".' },
          { target: "Go to my house Saturday.", native: '...', correct: false, feedback: 'Convite usa "come".' },
          { target: "Vem na festa.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Come here (em inglês)', correct: ['Come here', 'Come here.'] },
      { prompt: 'I go to work (em inglês)', correct: ['I go to work', 'I go to work.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Convide alguém pra algum lugar em inglês: 'Come to ___'. E diga aonde você vai amanhã: 'Tomorrow I go to ___'.",
    rwenSignoff: "Amanhã — want e need.",
  },

  phase8: {
    scenario: "Inviting an English-speaking friend to your birthday — explain where, when.",
    rwenRole: "Friendly invitee.",
    successCriteria: "User uses 'come' for invitation and 'go' for own movement at least once each.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
