import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Family verbs — Visit, call, miss',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Família precisa de verbos — visitar, ligar, sentir saudade. Em inglês: 'visit', 'call', 'miss'. 'Miss' é o que mais pega o brasileiro — funciona ao contrário do português.",
    culturalNote: "Aqui tem armadilha: 'tenho saudade' não vira 'I have saudade'. A construção em inglês é 'I miss [pessoa]' — você é o sujeito, não a saudade. Saudade não tem tradução exata, mas 'miss' faz o trabalho. 'Call' = ligar, 'visit' = visitar. Bem diretos.",
  },

  chunks: [
    {
      id: 'visit',
      target: 'Visit',
      native: 'Visitar',
      literal: undefined,
      emoji: '🏃🏾',
      phonetic: 'VIH-zit',
      audioRef: null,
    },
    {
      id: 'call',
      target: 'Call',
      native: 'Ligar',
      literal: 'phone',
      emoji: '📞',
      phonetic: 'KAWL',
      audioRef: null,
    },
    {
      id: 'miss',
      target: 'Miss (someone)',
      native: 'Sentir saudade',
      literal: 'long-for someone',
      emoji: '🥺',
      phonetic: 'MIS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family verbs — visit, call, miss',
    explanation: "'I visit my mother' (visito minha mãe), 'I call my father' (ligo pro meu pai), 'I miss my sister' (sinto saudade da minha irmã). Atenção: 'I miss [pessoa]' — sem 'for'. Não diga 'I miss for my sister'. Passado: visited, called, missed.",
    examples: [
      { target: 'I visit my grandmother every Sunday.', native: 'Visito minha avó todo domingo.' },
      { target: 'I call my mother every day.',          native: 'Ligo pra minha mãe todo dia.' },
      { target: 'I miss my brother.',                    native: 'Sinto saudade do meu irmão.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os verbos',
      pairs: [
        { left: 'Visit',  right: 'Visitar' },
        { left: 'Call',   right: 'Ligar' },
        { left: 'Miss',   right: 'Sentir saudade' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Eu ligo pra minha mãe toda manhã.',
      correct: ['I call my mother every morning.', 'I call my mother every morning', 'i call my mother every morning.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — plano de fim de semana',
      prompt: 'Vamos visitar nosso avô na semana que vem.',
      correct: ['We will visit our grandfather next week.', "We're visiting our grandfather next week.", 'We will visit our grandfather next week', "We will visit grandfather next week."],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I miss my children very much"',
      words: ['miss', 'I', 'much.', 'children', 'my', 'very'],
      correct: ['I', 'miss', 'my', 'children', 'very', 'much.'],
      translation: 'Sinto muita saudade dos meus filhos',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — passado de call',
      sentence: 'I _____ my brother yesterday — he was happy.',
      options: ['call', 'called', 'calls'],
      correct: 'called',
      context: "Yesterday = passado. 'Called'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Tradução de "Sinto muita saudade da minha mãe"',
      question: 'Qual frase está certa?',
      options: [
        { text: "I miss my mother very much.",        correct: true },
        { text: "I'm missing for my mother much.",     correct: false },
        { text: "My mother is missing me much.",        correct: false },
      ],
      explanation: "'I miss [pessoa]' — sem 'for'. 'My mother is missing me' inverte: aí ela sente saudade.",
    },
  ],

  rwenDialogue: {
    intro: 'Plano de fim de semana — você fala com colega sobre família.',
    lines: [
      { speaker: 'npc', target: "What are you doing this weekend?", native: 'O que você vai fazer no fim de semana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to visit my grandmother on Saturday, and I'll call my brother on Sunday — I miss him.", native: 'Vou visitar minha avó sábado, e ligar pro meu irmão domingo — tô com saudade.', correct: true, feedback: "Mandou bem — visit, call, miss em uma frase." },
          { target: "Visit. Call. Miss.",                                                                                native: 'Visitar. Ligar. Saudade.',                                                                            correct: false, feedback: "Adicione 'I'll' ou 'I'm going to'." },
          { target: "I miss my brother for visit.",                                                                       native: '...',                                                              correct: false, feedback: "Estrutura quebrou — separe em frases: 'I'm visiting my grandmother. I'll call my brother. I miss him.'" },
        ],
      },
      { speaker: 'npc', target: "Sounds like a lovely weekend with family.", native: 'Parece um fim de semana lindo com a família.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Três verbos numa frase fluida — visit, call, miss.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I miss my mother (em inglês)',     correct: ['I miss my mother', 'I miss my mother.', 'i miss my mother'] },
      { prompt: 'I called my brother (passado)',   correct: ['I called my brother', 'I called my brother.', 'i called my brother'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escolhe alguém da família. Escreve em inglês: 'I will call/visit my [pessoa] this week. I miss them.'. Depois: pega o celular e liga.",
    rwenSignoff: "Amanhã — contar histórias da família.",
  },

  phase8: {
    scenario: "Weekend plans with English-speaking friend. What family things you'll do.",
    rwenRole: "Sam, colleague who likes hearing about weekends. Asks 'How is your grandmother?'.",
    successCriteria: "User uses two of: 'visit', 'call', 'miss'. Names a family member. Uses 'I'll' or 'I'm going to' for one future plan.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
