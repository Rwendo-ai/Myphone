import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Aunts & Uncles — Tios e Tias',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tios e tias — em inglês 'aunt' e 'uncle'. Em inglês não distingue tio paterno/materno: tudo é 'uncle' ou 'aunt'. Pra precisar, adiciona 'on my mother's side' ou similar.",
    culturalNote: "No Brasil a gente usa 'tio'/'tia' até pra adulto da família que não é parente — 'tia Lúcia da padaria', 'tio Pedro do bairro'. Em inglês 'aunt' e 'uncle' são mais técnicos; pra adulto da família alargada não tem o mesmo espalhamento. 'Cousin' não tem gênero — serve pra primo e prima.",
  },

  chunks: [
    {
      id: 'aunt',
      target: 'Aunt',
      native: 'Tia',
      literal: 'aunt',
      emoji: '👩🏾‍🦱',
      phonetic: 'AHNT (or ANT)',
      audioRef: null,
    },
    {
      id: 'uncle',
      target: 'Uncle',
      native: 'Tio',
      literal: 'uncle',
      emoji: '👨🏾‍🦱',
      phonetic: 'UN-kuhl',
      audioRef: null,
    },
    {
      id: 'cousin',
      target: 'Cousin',
      native: 'Primo / Prima',
      literal: 'cousin — gender-neutral',
      emoji: '🧑🏾',
      phonetic: 'KUH-zin',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kinship — clarifying with English',
    explanation: "'Aunt' e 'uncle' não distinguem lado da família. Pra precisar: 'on my father's side' (lado paterno) ou 'my mother's brother' (irmão da minha mãe). 'Cousin' é unissex.",
    examples: [
      { target: "My aunt (my father's sister)",         native: 'Minha tia (irmã do meu pai)' },
      { target: "My uncle (my mother's brother)",       native: 'Meu tio (irmão da minha mãe)' },
      { target: "My cousin (my aunt's child)",          native: 'Meu primo (filho da minha tia)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Aunt',                    right: 'Tia' },
        { left: 'Uncle',                   right: 'Tio' },
        { left: 'Cousin',                  right: 'Primo/Prima' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha tia mora em Curitiba.',
      correct: ['My aunt lives in Curitiba.', "My aunt — my father's sister — lives in Curitiba.", 'My aunt lives in Curitiba', 'my aunt lives in Curitiba.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu tio, irmão da minha mãe, me ensinou a dirigir.',
      correct: ["My uncle — my mother's brother — taught me to drive.", "My uncle, my mother's brother, taught me to drive.", "My maternal uncle taught me to drive."],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My cousin is my aunt\'s son"',
      words: ['son.', 'My', 'is', "aunt's", 'cousin', 'my'],
      correct: ['My', 'cousin', 'is', 'my', "aunt's", 'son.'],
      translation: 'Meu primo é filho da minha tia',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — apóstrofo de posse',
      sentence: 'This is my uncle, on my _____ side.',
      options: ['mother', "mother's", 'mothers'],
      correct: "mother's",
      context: "'mother's' (com apóstrofo) = da minha mãe.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Apresentando uma tia',
      question: 'Apresentando sua tia (irmã do pai) a um estrangeiro:',
      options: [
        { text: "This is my aunt — my father's sister.",   correct: true },
        { text: "This is my tia.",                          correct: false },
        { text: "This my father sister woman.",              correct: false },
      ],
      explanation: "'This is my aunt — my father's sister' é claro e bonito.",
    },
  ],

  rwenDialogue: {
    intro: "Casamento da família. Um amigo inglês quer entender quem é quem.",
    lines: [
      { speaker: 'npc', target: "Who is everyone? Help me understand!", native: 'Quem é cada um? Me ajuda!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my aunt — my father's sister. And this is my uncle on my mother's side.", native: 'Esta é minha tia — irmã do meu pai. E este é meu tio do lado da minha mãe.', correct: true, feedback: "Mandou bem — você usou inglês claro e detalhou." },
          { target: "This my aunt. This my uncle. Different.",                                                                                native: 'Tia. Tio. Diferentes.',                                                                       correct: false, feedback: "Adicione detalhe ('my father's sister', etc.)." },
          { target: "Tia e tio.",                                                                                                   native: 'Tia e tio.',                                                                                                  correct: false, feedback: "Em português — não vai entender." },
        ],
      },
      { speaker: 'npc', target: "Wow — Brazilian families are big and warm. I love that.", native: 'Nossa — famílias brasileiras são grandes e calorosas. Adoro isso.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Sua família ficou clara em inglês — sem perder o calor.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "My aunt — my father's sister (em inglês)", correct: ["My aunt — my father's sister", "My aunt - my father's sister", "My aunt, my father's sister"] },
      { prompt: 'My cousin (em inglês)',                     correct: ['My cousin', 'my cousin'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escolhe um tio ou tia. Escreve em inglês: 'My aunt/uncle on my [father's/mother's] side lives in [lugar].' Repara como o lado da família entra.",
    rwenSignoff: "Amanhã — sogros e cunhados.",
  },

  phase8: {
    scenario: "Family wedding in Brazil. A foreign guest is curious about who's who.",
    rwenRole: "James, 40, UK guest fascinated by Brazilian family. Asks 'How are they related to you?'.",
    successCriteria: "User uses 'my aunt' or 'my uncle' AND clarifies the side ('on my father's/mother's side'). Names at least one cousin or relation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
