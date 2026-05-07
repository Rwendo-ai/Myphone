import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-where-is',
  module: 2,
  lesson: 7,
  title: 'Where is...? — Onde fica...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pra achar uma coisa ou um lugar, pergunta com 'Where is...?'. Essa é a frase que te leva ao banheiro, à saída, ao café que você procurava.",
    culturalNote: "Em português é 'Onde fica o banheiro?' — sem artigo na frente do verbo. Em inglês precisa do 'the': 'Where is the bathroom?'. Sem 'the' soa estranho — quase como 'Onde fica banheiro?' no português ruim.",
  },

  chunks: [
    {
      id: 'where_is_the_bathroom',
      target: 'Where is the bathroom?',
      native: 'Onde fica o banheiro?',
      literal: 'Where is the bathroom?',
      emoji: '🚻',
      phonetic: 'WHAIR-iz-thuh-BATH-room',
      audioRef: null,
    },
    {
      id: 'where_is_the_exit',
      target: 'Where is the exit?',
      native: 'Onde fica a saída?',
      literal: 'Where is the exit?',
      emoji: '🚪',
      phonetic: 'WHAIR-iz-thee-EK-sit',
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
    name: "Locative 'where'",
    explanation: "Pergunta de lugar começa com 'Where is + the + lugar?'. O 'the' aponta pra um lugar específico que ambos sabem que existe ('the bathroom' do prédio onde você está). Resposta pode ser bem curta: 'Over there' ou 'Down the hall'.",
    examples: [
      { target: 'Where is the bathroom?', native: 'Onde fica o banheiro?' },
      { target: 'Where is the exit?',      native: 'Onde fica a saída?' },
      { target: 'Where is room 101?',      native: 'Onde fica a sala 101?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: 'Where is the bathroom?', right: 'Onde fica o banheiro?' },
        { left: 'Where is the exit?',      right: 'Onde fica a saída?' },
        { left: 'Over there',               right: 'Ali' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — num evento, precisa do banheiro',
      prompt: 'Onde fica o banheiro?',
      correct: [
        'Where is the bathroom?',
        'Where is the toilet?',
        'where is the bathroom?',
        'Where is the bathroom',
        'Where is the restroom?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a pergunta',
      sentence: '____ is the exit?',
      options: ['Where', 'What', 'How'],
      correct: 'Where',
      context: "Perguntas de localização começam com 'Where'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta — você precisa da saída',
      words: ['the', 'is', 'Where', 'exit'],
      correct: ['Where', 'is', 'the', 'exit'],
      translation: 'Onde fica a saída?',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — apontando',
      prompt: 'Ali',
      correct: ['Over there', 'Over there.', 'over there', "It's over there", "It's over there."],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Onde fica a cafeteria?',
      correct: ['Where is the coffee shop?', 'Where is the coffee shop', 'where is the coffee shop?', 'Where is the cafe?'],
    },
  ],

  rwenDialogue: {
    intro: "Conferência de tech em São Paulo, com palestrantes internacionais. Você precisa do banheiro. Pergunta pra um steward.",
    lines: [
      { speaker: 'npc', target: "Hi, can I help you?", native: 'Oi, posso ajudar?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the bathroom?', native: 'Com licença, onde fica o banheiro?',     correct: true,  feedback: 'Mandou bem — abriu com licença, perguntou direto.' },
          { target: 'Toilet?',                              native: 'Banheiro?',                              correct: false, feedback: 'Curto demais — pergunta completa.' },
          { target: 'I am lost.',                          native: 'Estou perdido.',                          correct: false, feedback: 'Você não tá perdido — só procurando o banheiro. Pergunta direto.' },
        ],
      },
      { speaker: 'npc', target: "Sure — over there, on the right.", native: 'Claro — ali, à direita.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'Where is the bathroom?' — uma das frases mais úteis do mundo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Where is the bathroom? (em inglês)', correct: ['Where is the bathroom?', 'Where is the bathroom', 'where is the bathroom?', 'Where is the toilet?', 'Where is the restroom?'] },
      { prompt: 'Over there (em inglês)',              correct: ['Over there', 'Over there.', 'over there', "It's over there"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pergunta hoje 'Where is the ...?' em voz alta. Pratica até sair tranquilo, sem nervosismo.",
    rwenSignoff: "Quem pergunta não se perde. Até amanhã.",
  },

  phase8: {
    scenario: "You're at an English-language tech conference at the Hilton in São Paulo. You urgently need to find the bathroom and you're not sure where the registration desk moved to. Find a steward and ask.",
    rwenRole: "Thandi, 29, conference steward. Smiling, helpful, knows the venue inside out. Speaks clear English.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the bathroom?' or 'Where is the registration desk?', understands directional response ('Over there', 'down the hall', 'on the right'), thanks her.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
