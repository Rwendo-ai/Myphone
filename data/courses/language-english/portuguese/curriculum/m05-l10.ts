import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A family conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Você fechou o Módulo 5! Agora junta tudo: pais, irmãos, filhos, avós, tios, sogros, amigos como família, e os verbos visit/call/miss. Numa conversa só.",
    culturalNote: "Família brasileira é um universo — cada um tem seu apelido, sua história, sua piada. Em inglês, a estrutura é mais enxuta — mas você pode trazer o calor, a quantidade de gente, o cuidado. 'My family is big' já é convite pra contar mais. O calor brasileiro não some na tradução — só vira mais cadenciado.",
  },

  chunks: [
    {
      id: 'family_intro',
      target: "I have a big family. My parents and my two siblings live in São Paulo.",
      native: 'Tenho uma família grande. Meus pais e meus dois irmãos moram em SP.',
      literal: 'big family, parents, siblings',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav uh BIG FAM-uh-lee...',
      audioRef: null,
    },
    {
      id: 'extended_family',
      target: "My grandmother lives in Recife, and my aunt — my father's sister — lives in Salvador.",
      native: 'Minha avó mora em Recife, e minha tia — irmã do meu pai — mora em Salvador.',
      literal: 'grandmother, aunt with side clarification',
      emoji: '🏡',
      phonetic: 'mahy GRAND-muh-thuh livz...',
      audioRef: null,
    },
    {
      id: 'family_actions',
      target: "I visit them every month, I call my mother every day, and I miss my brother who lives abroad.",
      native: 'Visito eles todo mês, ligo pra minha mãe todo dia, e tô com saudade do meu irmão que mora no exterior.',
      literal: 'visit, call, miss — combined',
      emoji: '📞',
      phonetic: 'ay VIH-zit them...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family in flowing speech',
    explanation: "Numa conversa real sobre família, você usa: possessivos, termos de parentesco, qualificadores (older/younger, on my mother's side), idiomas (like family), hábitos passados (used to), verbos (visit/call/miss). Estrutura: começa com 'I have...', adiciona detalhes, fecha com sentimento.",
    examples: [
      { target: 'I have a big family — my parents, two siblings, and many cousins.',     native: 'Tenho família grande — pais, dois irmãos, muitos primos.' },
      { target: "My grandmother used to live with us; she's like a second mother.",       native: 'Minha avó morava com a gente; é como uma segunda mãe.' },
      { target: "I miss my brother — I call him every Sunday.",                            native: 'Sinto saudade do meu irmão — ligo pra ele todo domingo.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Complete o parágrafo',
      sentence: "I have two _____ — an older brother and a _____ sister. My _____ live in São Paulo.",
      options: ['siblings / younger / parents', 'siblings / older / children', 'children / younger / parents'],
      correct: 'siblings / younger / parents',
      context: "Siblings (irmãos), younger (mais nova), parents (pais).",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha avó costumava dizer que melhor amigo é como família.',
      correct: ['My grandmother used to say that a best friend is like family.', 'My grandmother used to say a best friend is like family.', 'My grandmother used to say that your best friend is like family.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha tia — irmã do meu pai — mora no Reino Unido, e tô com saudade dela.',
      correct: ["My aunt — my father's sister — lives in the UK, and I miss her.", "My aunt, my father's sister, lives in the UK, and I miss her.", "My aunt — my father's sister — lives abroad, and I miss her."],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My in-laws are visiting us this weekend"',
      words: ['weekend.', 'My', 'this', 'visiting', 'are', 'in-laws', 'us'],
      correct: ['My', 'in-laws', 'are', 'visiting', 'us', 'this', 'weekend.'],
      translation: 'Meus sogros vão nos visitar nesse fim de semana',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu tio, irmão da minha mãe, sempre diz: "Família é força."',
      correct: ['My uncle, my mother\'s brother, always says: "Family is strength."', "My uncle — my mother's brother — always says: 'Family is strength.'", 'My maternal uncle always says: "Family is strength."'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Conta sobre sua família',
      question: 'Qual resposta tem mais nuance A2?',
      options: [
        { text: "I have a big family. My parents live in São Paulo with my younger sister. My older brother is abroad — I miss him. My grandmother — my father's mother — used to live with us, and she still calls every week. My in-laws are kind. I visit everyone often.", correct: true },
        { text: "Big family. Parents SP. Brother far. Miss. Grandmother call. In-laws good.",                                                                                                                                                                            correct: false },
        { text: "Família grande. Pais em SP. Irmão longe.",                                                                                                                                                                       correct: false },
      ],
      explanation: "A primeira tem tudo: pais, irmãos com nuance, avó com lado, sogros, e os verbos miss/call/visit.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — descrever família inteira em inglês pra um amigo americano.',
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family — everyone, the whole picture.",
        native: 'Conta da sua família — todo mundo, o quadro todo.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I have a close family. My parents live in São Paulo with my younger sister. My older brother lives in Lisbon — I miss him, but we call every Sunday. My grandmother — my father's mother — used to tell us stories every weekend; she's like a second mother to me. My aunt on my father's side is visiting next week. We're a big family, and we visit each other often.",
            native: '...',
            correct: true,
            feedback: "Mandou muito bem — pais, irmãos (older/younger), avó com 'used to', tia com lado, miss/call/visit, e idioma 'like a second mother'. Capstone fechado.",
          },
          {
            target: "I have parents. I have brother and sister. I have grandmother. Aunt and uncle. We talk sometimes.",
            native: '...',
            correct: false,
            feedback: "Tudo lá mas sem nuance — adicione 'older/younger', 'on my father's side', 'used to', 'I miss them'.",
          },
          {
            target: "Família — pais, irmão, avó, tia. Amo todos.",
            native: '...',
            correct: false,
            feedback: "Em português — traduza tudo pro inglês.",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 5. A família brasileira inteira passou pro inglês com calor. Próximo: números, tempo, dinheiro.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Capstone recall.',
    prompts: [
      { prompt: "My grandmother used to ___ (qualquer verbo em inglês)", correct: ['cook', 'sing', 'tell stories', 'live with us', 'bake', 'pray', 'teach me', 'say', 'come over'] },
      { prompt: 'I miss my brother (em inglês)',                          correct: ['I miss my brother', 'I miss my brother.', 'i miss my brother'] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 5',
    task: "Escreve um parágrafo em inglês sobre sua família — 5-7 frases. Use: pais, irmãos (older/younger), filhos ou parentes próximos, avó/avô (used to), tia/tio (clarifique o lado), amigo como família, e dois de visit/call/miss.",
    rwenSignoff: "Você fechou o Módulo 5. Sua família chegou em inglês com calor brasileiro. Módulo 6 — números, tempo, dinheiro.",
  },

  phase8: {
    scenario: "Capstone family conversation: an English-speaking friend wants to fully understand your family. Tell everything in one flowing exchange.",
    rwenRole: "Emily, 32, English-speaking friend who just visited Brazil. Asks 'How are they related?' and 'Who do you miss most?'.",
    successCriteria: "User uses 6+ family terms: parents, sibling (older/younger), grandparent, aunt/uncle WITH clarifier, in-laws OR friend-like-family. Uses 'used to' once. Uses two of visit/call/miss. Brings BR family richness into English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
