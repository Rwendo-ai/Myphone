import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'In-laws — Sogros e cunhados',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sogros — em inglês 'mother-in-law' e 'father-in-law'. O '-in-law' funciona como sufixo: literalmente 'pelo casamento'.",
    culturalNote: "No Brasil sogro/sogra carregam piada cultural — 'minha sogra...'. Em inglês existe esse mesmo humor ('the mother-in-law jokes'), mas o termo é mais técnico. 'In-laws' no plural cobre tudo (sogros e cunhados). 'Husband' = marido, 'wife' = esposa.",
  },

  chunks: [
    {
      id: 'mother_in_law',
      target: 'Mother-in-law',
      native: 'Sogra',
      literal: 'mother through marriage',
      emoji: '👩🏾‍🦳',
      phonetic: 'MUH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'father_in_law',
      target: 'Father-in-law',
      native: 'Sogro',
      literal: 'father through marriage',
      emoji: '👨🏾‍🦳',
      phonetic: 'FAH-thuh-in-law',
      audioRef: null,
    },
    {
      id: 'spouse',
      target: 'My husband / My wife',
      native: 'Meu marido / Minha esposa',
      literal: 'husband mine / wife mine',
      emoji: '💍',
      phonetic: 'mahy HUZ-bund / mahy WAYF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marriage-family — hyphenated terms',
    explanation: "Termos com '-in-law' usam hífen: mother-in-law, father-in-law, brother-in-law, sister-in-law. Plural irregular: 'mothers-in-law' (s na primeira parte). 'In-laws' no plural geral cobre toda a família por casamento.",
    examples: [
      { target: 'My mother-in-law',           native: 'Minha sogra' },
      { target: 'My in-laws live in Curitiba.', native: 'Meus sogros moram em Curitiba.' },
      { target: "My husband's sister",         native: 'Cunhada (irmã do meu marido)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Mother-in-law',  right: 'Sogra' },
        { left: 'Father-in-law',  right: 'Sogro' },
        { left: 'My husband',     right: 'Meu marido' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha esposa e minha sogra trabalham juntas.',
      correct: ['My wife and my mother-in-law work together.', 'My wife and mother-in-law work together.', 'my wife and my mother-in-law work together.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vou conhecer meu sogro pela primeira vez semana que vem.',
      correct: ["I'm meeting my father-in-law for the first time next week.", "I will meet my father-in-law for the first time next week.", "I'm meeting my father-in-law next week for the first time."],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My in-laws are very kind"',
      words: ['kind.', 'My', 'are', 'in-laws', 'very'],
      correct: ['My', 'in-laws', 'are', 'very', 'kind.'],
      translation: 'Meus sogros são muito gentis',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — plural de in-law',
      sentence: 'My _____ are visiting from Recife this weekend.',
      options: ['mother-in-laws', 'mothers-in-law', 'in-laws'],
      correct: 'in-laws',
      context: "'In-laws' (geral) = todos os parentes por casamento. Singular: 'mother-in-law'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Mensagem natural',
      question: "Mensagem pra amiga sobre conhecer sua sogra:",
      options: [
        { text: "I'm meeting my mother-in-law tomorrow — I'm a bit nervous.", correct: true },
        { text: "Tomorrow my sogra. Fear inside.",                       correct: false },
        { text: "I have meeting woman of marriage tomorrow scared.",          correct: false },
      ],
      explanation: "'I'm meeting my mother-in-law tomorrow' soa natural. Adicionar 'a bit nervous' deixa humano.",
    },
  ],

  rwenDialogue: {
    intro: "Mensagem pra uma amiga inglesa contando como foi conhecer seus sogros.",
    lines: [
      { speaker: 'npc', target: "How was meeting the in-laws? Tell me everything!", native: 'Como foi conhecer os sogros? Conta tudo!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It went well — my father-in-law is kind, but my mother-in-law was a bit reserved at first. We talked for two hours.", native: 'Foi bem — meu sogro é gentil, mas minha sogra ficou meio reservada no início. Conversamos por duas horas.', correct: true, feedback: "Mandou bem — diferenciou sogro/sogra com nuance, e 'reserved at first' carrega um detalhe humano." },
          { target: "Good. Talked. Done.",                                                                                                  native: 'Bom. Conversamos. Acabou.',                                                                                              correct: false, feedback: "Curto demais — sua amiga quer detalhe." },
          { target: "Sogro legal mas sogra distante.",                                                                          native: 'Sogro legal mas sogra distante.',                                                                                  correct: false, feedback: "Em português — traduza pro inglês." },
        ],
      },
      { speaker: 'npc', target: "That's normal at first — give it time.", native: 'Isso é normal no início — dê tempo.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você falou de sogros em inglês com nuance — sem perder calor humano.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My mother-in-law (em inglês)', correct: ['My mother-in-law', 'my mother-in-law'] },
      { prompt: 'My husband (em inglês)',        correct: ['My husband', 'my husband'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa nos seus sogros (ou imagine se não tem). Escreve em inglês: 'My mother-in-law is...' ou 'My father-in-law lives in...'.",
    rwenSignoff: "Amanhã — amigos como família.",
  },

  phase8: {
    scenario: "Texting an English-speaking friend before/after meeting your future in-laws.",
    rwenRole: "Lisa, 30, close English-speaking friend. Asks 'How did your husband/wife react?' or 'Did your mother-in-law like the gift?'.",
    successCriteria: "User uses 'mother-in-law', 'father-in-law', or 'in-laws' at least once. Uses 'my husband' or 'my wife'. Conveys an emotional state.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
