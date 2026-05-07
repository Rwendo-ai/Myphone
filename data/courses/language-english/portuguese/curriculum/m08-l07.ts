import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-evening-routine',
  module: 8,
  lesson: 7,
  title: 'Evening routine — Coming home',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Fim do dia: 'I come home at 6', 'I cook dinner', 'I watch TV'. Atenção: 'come home' (não 'go home') quando você chegou — perspectiva de quem já está em casa.",
    culturalNote: "No Brasil 'volto pra casa' funciona em qualquer caso. Em inglês 'come home' e 'go home' diferem: 'come' do ponto de vista de chegou; 'go' do de quem ainda vai. E 'watch TV' (não 'see TV') — assistir TV usa 'watch'.",
  },

  chunks: [
    {
      id: 'i_come_home',
      target: 'I come home at 6.',
      native: 'Volto pra casa às 6.',
      literal: 'I come home at 6',
      emoji: '🏡',
      phonetic: 'ay-KUM-HOHM-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_cook_dinner',
      target: 'I cook dinner.',
      native: 'Faço o jantar.',
      literal: 'I cook dinner',
      emoji: '🍲',
      phonetic: 'ay-KUUK-DIN-er',
      audioRef: null,
    },
    {
      id: 'i_watch_tv',
      target: 'I watch TV.',
      native: 'Assisto TV.',
      literal: 'I watch TV',
      emoji: '📺',
      phonetic: 'ay-WOCH-TEE-VEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Evening verbs',
    explanation: "COME HOME (sem 'to'). COOK (cozinhar/criar refeição). WATCH (assistir — TV, filme, série).",
    examples: [
      { target: 'I come home at 6.',     native: 'Volto pra casa às 6.' },
      { target: 'I cook dinner at 7.',    native: 'Faço o jantar às 7.' },
      { target: 'I watch a film at 9.',   native: 'Assisto um filme às 9.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine a rotina noturna',
      pairs: [
        { left: 'Come home', right: 'Voltar pra casa' },
        { left: 'Cook dinner', right: 'Fazer o jantar' },
        { left: 'Watch TV', right: 'Assistir TV' },
        { left: 'Go to bed', right: 'Ir dormir' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Volto pra casa às 6.',
      correct: ['I come home at 6.', 'I come home at six.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Verbo certo',
      sentence: 'I _____ TV at night.',
      options: ['watch', 'see', 'look'],
      correct: 'watch',
      context: 'TV usa "watch".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I cook dinner at 7"',
      words: ['7.', 'dinner', 'cook', 'I', 'at'],
      correct: ['I', 'cook', 'dinner', 'at', '7.'],
      translation: 'Faço o jantar às 7',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vou dormir às 11.',
      correct: ['I go to bed at 11.', 'I go to bed at eleven.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Verbo de TV',
      question: '"Vou assistir um filme":',
      options: [
        { text: "I'm going to watch a film.", correct: true },
        { text: "I'm going to see a film.", correct: false },
        { text: "I'm going to look a film.", correct: false },
      ],
      explanation: 'Filme/TV/série = watch. "See a film" rola só pra cinema, mas "watch" é mais usado.',
    },
  ],

  rwenDialogue: {
    intro: 'Conversa casual sobre noite com colega americana.',
    lines: [
      { speaker: 'npc', target: "What do you usually do in the evening?", native: 'O que você costuma fazer à noite?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come home at 6, cook dinner, and watch TV.", native: 'Volto às 6, faço o jantar, assisto TV.', correct: true, feedback: 'Mandou bem.' },
          { target: "I go home see TV.", native: '...', correct: false, feedback: 'Use "come" pra chegada e "watch" pra TV.' },
          { target: "Volto, cozinho, assisto.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I come home at 6 (em inglês)', correct: ['I come home at 6', 'I come home at six'] },
      { prompt: 'I watch TV (em inglês)', correct: ['I watch TV', 'I watch TV.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Descreva sua noite em três frases — voltar, jantar, descansar.",
    rwenSignoff: "Amanhã — passado.",
  },

  phase8: {
    scenario: "Casual chat about evening routines.",
    rwenRole: "Curious colleague.",
    successCriteria: "User says 3+ evening activities using simple present.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
