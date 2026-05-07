import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — Avós',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Avó e avô — em inglês: 'grandmother' e 'grandfather'. O 'grand-' funciona como prefixo: literalmente 'grande mãe / grande pai'.",
    culturalNote: "No Brasil os avós ocupam um lugar afetivo enorme — 'minha vó', 'meu vô' carregam saudade. Em inglês 'grandmother/grandfather' soam mais formais; o carinho aparece na história que você conta. 'Grandma' e 'Grandpa' são as versões carinhosas — equivalentes ao nosso 'vó/vô'.",
  },

  chunks: [
    {
      id: 'grandmother',
      target: 'Grandmother',
      native: 'Avó',
      literal: 'big-mother',
      emoji: '👵🏾',
      phonetic: 'GRAND-muh-thuh',
      audioRef: null,
    },
    {
      id: 'grandfather',
      target: 'Grandfather',
      native: 'Avô',
      literal: 'big-father',
      emoji: '👴🏾',
      phonetic: 'GRAND-fah-thuh',
      audioRef: null,
    },
    {
      id: 'grandchild',
      target: 'Grandchild',
      native: 'Neto / Neta',
      literal: 'big-child',
      emoji: '🧒🏾',
      phonetic: 'GRAND-chayld',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Generational — grand- prefix',
    explanation: "'Grand-' marca uma geração acima ou abaixo: grandmother, grandfather, grandchild. Plural: grandparents (avós), grandchildren (netos — irregular, sem -s extra).",
    examples: [
      { target: 'My grandmother',     native: 'Minha avó' },
      { target: 'My grandfather',     native: 'Meu avô' },
      { target: 'My grandchildren',   native: 'Meus netos' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Grandmother',  right: 'Avó' },
        { left: 'Grandfather',  right: 'Avô' },
        { left: 'Grandchild',   right: 'Neto/Neta' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Minha avó mora no interior.',
      correct: ['My grandmother lives in the village.', 'My grandmother lives in the countryside.', 'My grandmother lives in the village', 'my grandmother lives in the village.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — contando uma memória',
      prompt: 'Meu avô me contou uma história.',
      correct: ['My grandfather told me a story.', 'My grandfather told me a story', 'my grandfather told me a story.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My grandmother used to sing"',
      words: ['used', 'My', 'sing.', 'grandmother', 'to'],
      correct: ['My', 'grandmother', 'used', 'to', 'sing.'],
      translation: 'Minha avó costumava cantar',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — plural irregular',
      sentence: 'My grandparents have five _____ in total.',
      options: ['grandchilds', 'grandchildren', 'grandchildrens'],
      correct: 'grandchildren',
      context: "'Children' é irregular — então 'grandchildren' segue a regra.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Contando memória',
      question: 'Pra contar algo que sua avó dizia:',
      options: [
        { text: "My grandmother used to say...",      correct: true },
        { text: "My vovó they said...",            correct: false },
        { text: "Grandmother of me say always...",     correct: false },
      ],
      explanation: "'Used to' carrega o passado de hábito — perfeito pra histórias da vó.",
    },
  ],

  rwenDialogue: {
    intro: 'Café com uma amiga inglesa. Vocês falam de avós — você lembra de algo da sua.',
    lines: [
      { speaker: 'npc', target: "You said your grandmother taught you something important — tell me.", native: 'Você disse que sua avó te ensinou algo importante — conta.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My grandmother used to say: 'A patient person eats ripe fruit.' She told me that often.", native: 'Minha avó dizia: "Quem tem paciência come fruta madura". Ela repetia isso muito.', correct: true, feedback: "Mandou bem — 'used to say' carrega o tom de memória, e o ditado entrou em inglês com graça." },
          { target: "Grandmother says fruit ripe wait people.",                                                  native: '...',                                                                            correct: false, feedback: "Ordem das palavras quebrou — usa 'My grandmother used to say...'" },
          { target: "Minha vó dizia...",                                                                        native: 'Minha vó dizia...',                                                              correct: false, feedback: "Tudo em português — sua amiga não fala. Traduza." },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — was she from the countryside?", native: 'Que lindo — ela era do interior?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você levou a sabedoria da vó pro inglês — sem perder o calor.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My grandmother (em inglês)',  correct: ['My grandmother', 'my grandmother'] },
      { prompt: 'My grandfather (em inglês)',  correct: ['My grandfather', 'my grandfather'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa numa coisa que sua avó ou avô te ensinou. Escreve em inglês: 'My grandmother used to say...' ou 'My grandfather taught me...'.",
    rwenSignoff: "Amanhã — tios e tias.",
  },

  phase8: {
    scenario: "Sharing a memory of your grandmother's wisdom over coffee with an English-speaking friend.",
    rwenRole: "Anna, 35, warm friend who loves family stories. Asks 'What was she like?'.",
    successCriteria: "User uses 'grandmother' or 'grandfather' twice. Uses 'used to say' or 'told me' (past). Shares a specific memory.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
