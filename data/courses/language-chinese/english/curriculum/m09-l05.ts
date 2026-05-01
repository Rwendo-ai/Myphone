import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Mǎi piào — Buying a Ticket',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Beijing South ticket counter, queue ten deep, a bored agent behind plexiglass. You have ninety seconds. The phrase that gets you a ticket: 'Yì zhāng dào [city]' — one [ticket] to [city]. Short enough that even nervous you can deliver it.",
    culturalNote: "Mandarin uses 'measure words' — every noun needs one between the number and the noun. Tickets get 'zhāng' (张, also used for paper, photos, beds). 'Yì zhāng' = one (ticket). 'Liǎng zhāng' = two (tickets). You can't skip them in real Mandarin — but for a ticket counter, 'yì zhāng' is plenty.",
  },

  chunks: [
    {
      id: 'yi_zhang_dao',
      target: 'Yì zhāng dào Běijīng',
      native: 'One ticket to Beijing',
      literal: '(一张到北京) lit: one-(measure)-to-Beijing',
      emoji: '🎫',
      phonetic: 'YEE jang DOW bay-jing',
      audioRef: null,
    },
    {
      id: 'lai_hui',
      target: 'Lái huí',
      native: 'Round trip',
      literal: '(来回) lit: come-back',
      emoji: '🔁',
      phonetic: 'LIE hway',
      audioRef: null,
    },
    {
      id: 'dan_cheng',
      target: 'Dān chéng',
      native: 'One way',
      literal: '(单程) lit: single-trip',
      emoji: '➡️',
      phonetic: 'DAN chung',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Number] + zhāng + dào + [destination]',
    explanation: "The ticket-buying skeleton: number + zhāng (measure word for tickets) + dào (到, 'to') + destination city. After it, optionally add lái huí (round trip) or dān chéng (one way). 'Liǎng zhāng dào Hángzhōu, lái huí' = 'Two tickets to Hangzhou, round trip'.",
    examples: [
      { target: 'Yì zhāng dào Shànghǎi', native: 'One ticket to Shanghai' },
      { target: 'Liǎng zhāng dào Xī\'ān, dān chéng', native: 'Two tickets to Xi\'an, one-way' },
      { target: 'Duōshao qián?', native: 'How much money?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the ticket phrase to its meaning',
      pairs: [
        { left: 'Yì zhāng dào Běijīng', right: 'One ticket to Beijing' },
        { left: 'Lái huí', right: 'Round trip' },
        { left: 'Dān chéng', right: 'One way' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Buying ONE ticket — pick the measure word",
      sentence: 'Yì _____ dào Hángzhōu',
      options: ['zhāng', 'gè', 'běn'],
      correct: 'zhāng',
      context: "'Zhāng' (张) is the measure word for flat things — tickets, paper, photos. 'Gè' (个) is the generic measure word, but tickets specifically take 'zhāng'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'One ticket to Shanghai, round trip'",
      words: ['lái huí', 'Shànghǎi', 'Yì', 'dào', 'zhāng'],
      correct: ['Yì', 'zhāng', 'dào', 'Shànghǎi', 'lái huí'],
      translation: 'One ticket to Shanghai, round trip',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'One ticket to Beijing',
      correct: ['Yì zhāng dào Běijīng', 'Yi zhang dao Beijing', 'yi zhang dao beijing', 'yì zhāng dào běijīng', '一张到北京'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'One way (single trip)',
      correct: ['Dān chéng', 'Dan cheng', 'dan cheng', 'dān chéng', '单程'],
    },
    {
      type: 'multiple_choice',
      instruction: "Agent asks 'Lái huí háishì dān chéng?' What's she asking?",
      question: "Pick the meaning",
      options: [
        { text: 'Round trip or one way?', correct: true },
        { text: 'First class or second class?', correct: false },
        { text: 'Today or tomorrow?', correct: false },
      ],
      explanation: "'Háishì' (还是) means 'or' in a question. So: lái huí (round) háishì (or) dān chéng (one-way)? Always answer with one of the two — don't say 'shì' (yes).",
    },
  ],

  rwenDialogue: {
    intro: "Friday morning, Shanghai Hongqiao Station. Long queue. You shuffle to the window. The agent doesn't look up. Your turn.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yì zhāng dào Hángzhōu, lái huí', native: 'One ticket to Hangzhou, round trip', correct: true, feedback: 'Clean and complete. She prints without a follow-up question.' },
          { target: 'Wǒ yào piào Hángzhōu', native: "I want ticket Hangzhou", correct: false, feedback: "Understandable, but the standard counter phrase is 'Yì zhāng dào Hángzhōu'. Faster, smoother." },
          { target: 'Hángzhōu, Hángzhōu!', native: "Hangzhou, Hangzhou!", correct: false, feedback: "Place name alone won't get you a ticket. She needs to know how many and one-way or round." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Liǎng bǎi yuán',
        native: '200 yuan',
      },
      {
        speaker: 'npc',
        target: 'Sān hào chēxiāng, èrshí pái',
        native: 'Carriage 3, row 20',
      },
      {
        speaker: 'rwen',
        rwenLine: "Ticket in hand, you walk to your platform. That little phrase opens every train station in China. Nicely done.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'One ticket to Beijing',
        correct: ['Yì zhāng dào Běijīng', 'Yi zhang dao Beijing', 'yi zhang dao beijing', 'yì zhāng dào běijīng', '一张到北京'],
      },
      {
        prompt: 'Round trip',
        correct: ['Lái huí', 'Lai hui', 'lai hui', 'lái huí', '来回'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a Chinese city you'd love to visit — Chéngdū? Hángzhōu? Xī'ān? Out loud, buy yourself the ticket: 'Yì zhāng dào [city], lái huí.' Imagine the agent printing it.",
    rwenSignoff: "Tickets are tiny doors. Tomorrow, the airport. Zàijiàn.",
  },

  phase8: {
    scenario: "Saturday morning, a busy ticket counter at Shanghai Hongqiao Railway Station. You need ONE round-trip high-speed rail ticket to Hangzhou for today, returning tomorrow evening. The agent is short on patience.",
    rwenRole: "Ticket agent — late 30s, professional, fast Mandarin, will only ask once.",
    successCriteria: "User says 'Yì zhāng dào Hángzhōu' (correct measure word zhāng, correct preposition dào). Picks 'lái huí' over 'dān chéng' for round trip. Survives the price reply ('duōshao qián?' or recognising a number).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
