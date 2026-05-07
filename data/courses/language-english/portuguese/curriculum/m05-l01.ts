import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — Mãe e Pai',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Módulo 5 é sobre família. Começamos com os pais — 'Mother' e 'Father'. Cuidado com o possessivo: em inglês vem ANTES do substantivo.",
    culturalNote: "Em português a gente diz 'minha mãe' ou 'a minha mãe' — possessivo antes ou com artigo. Em inglês é só 'my mother' — sem 'the' antes. E falar de pais em inglês tende a ser mais reservado que no Brasil; o calor familiar fica no tom, não nas palavras.",
  },

  chunks: [
    {
      id: 'mother',
      target: 'Mother',
      native: 'Mãe',
      literal: undefined,
      emoji: '👩🏾',
      phonetic: 'MUH-thuh',
      audioRef: null,
    },
    {
      id: 'father',
      target: 'Father',
      native: 'Pai',
      literal: undefined,
      emoji: '👨🏾',
      phonetic: 'FAH-thuh',
      audioRef: null,
    },
    {
      id: 'my_parents',
      target: 'My parents',
      native: 'Meus pais',
      literal: 'parents my',
      emoji: '👨‍👩‍👧',
      phonetic: 'mahy PAIR-ents',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family possessives — my / our',
    explanation: "Possessivo em inglês vem ANTES: 'my mother' (minha mãe), 'our parents' (nossos pais). Não tem 'the': em inglês é só 'my mother', não 'the my mother'.",
    examples: [
      { target: 'My mother',  native: 'Minha mãe' },
      { target: 'My father',  native: 'Meu pai' },
      { target: 'Our parents', native: 'Nossos pais' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Mother',      right: 'Mãe' },
        { left: 'Father',      right: 'Pai' },
        { left: 'My parents',  right: 'Meus pais' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha mãe',
      correct: ['My mother', 'my mother', 'My mother.', 'my mother.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — falando da família',
      prompt: 'Meus pais moram em São Paulo.',
      correct: ['My parents live in São Paulo.', 'My parents live in São Paulo', 'my parents live in São Paulo.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "This is my father"',
      words: ['This', 'is', 'my', 'father.'],
      correct: ['This', 'is', 'my', 'father.'],
      translation: 'Este é meu pai',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — falando do casal de pais',
      sentence: '_____ parents are coming to dinner.',
      options: ['My', 'Our', 'I'],
      correct: 'Our',
      context: "'Our' = nossos. Quando você fala incluindo um irmão, por exemplo.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Apresentação natural',
      question: 'Apresentando seu pai a um colega — qual soa melhor?',
      options: [
        { text: "This is my father, James.",     correct: true },
        { text: "Look, my father.",              correct: false },
        { text: "Father is mine, look.",         correct: false },
      ],
      explanation: "'This is my father, [nome]' é o padrão de apresentação.",
    },
  ],

  rwenDialogue: {
    intro: 'Uma amiga inglesa visita sua casa pela primeira vez. Seus pais estão na sala.',
    lines: [
      { speaker: 'npc', target: "Hi! It's nice to meet your family.", native: 'Oi! Que legal conhecer sua família.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'This is my mother, and this is my father.', native: 'Esta é minha mãe e este é meu pai.', correct: true,  feedback: "Mandou bem — apresentação clara." },
          { target: 'My mother. My father.',                      native: 'Minha mãe. Meu pai.',                  correct: false, feedback: "Curto demais — adicione 'This is...'." },
          { target: 'Mother and father here.',                     native: 'Mãe e pai aqui.',                        correct: false, feedback: "Faltou 'my' — em inglês é essencial." },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you both.", native: 'Prazer em conhecer vocês dois.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Apresentação familiar redonda em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Mother (em inglês)',          correct: ['Mother', 'mother'] },
      { prompt: 'My parents (em inglês)',      correct: ['My parents', 'my parents', 'My parents.', 'my parents.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pega uma foto dos seus pais. Apresente em voz alta como se fosse pra um amigo gringo: 'This is my mother. This is my father.'",
    rwenSignoff: "Até amanhã — vamos ver irmãos.",
  },

  phase8: {
    scenario: "An English-speaking visitor has come to your home for the first time. Your mother and father are in the living room. Introduce them warmly.",
    rwenRole: "Sarah, 32, your friend visiting from London. Asks small follow-ups like 'What does your father do?'.",
    successCriteria: "User uses 'This is my mother / father' or 'My parents are...' with possessive 'my' at least twice. Answers one follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
