import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04',
  module: 4,
  lesson: 4,
  title: 'Meat and Vegetables — Cattle Country',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Inyama. Meat. In Matabeleland that word usually means one thing first: beef. The Ndebele are a cattle people — izinkomo are wealth, dowry, identity, and yes, the centre of any feast.",
    culturalNote: "Cattle (izinkomo) sit at the heart of Ndebele culture. They are the bride-price (lobola), the inheritance, the sign of a family's standing. Slaughtering a beast is never casual — it marks weddings, funerals, and the arrival of important guests. To serve a guest beef is to honour them at the highest level.",
  },

  chunks: [
    {
      id: 'inyama',
      target: 'inyama',
      native: 'meat (often: beef, by default)',
      emoji: '🥩',
      phonetic: 'ee-NYAH-mah',
      audioRef: null,
    },
    {
      id: 'izinkomo',
      target: 'izinkomo',
      native: 'cattle / cows',
      emoji: '🐄',
      phonetic: 'ee-zee-NKOH-moh',
      audioRef: null,
    },
    {
      id: 'inkukhu',
      target: 'inkukhu',
      native: 'chicken',
      emoji: '🐓',
      phonetic: 'in-KOO-khoo',
      audioRef: null,
    },
    {
      id: 'izithelo',
      target: 'izithelo',
      native: 'fruit (plural)',
      emoji: '🍎',
      phonetic: 'ee-zee-THEH-loh',
      audioRef: null,
    },
    {
      id: 'izitshalo',
      target: 'izitshalo',
      native: 'crops / cultivated plants (vegetables)',
      emoji: '🥬',
      phonetic: 'ee-zee-CHAH-loh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The izi- plural prefix',
    explanation: "Many isiNdebele plurals are formed with 'izi-'. Singular isithelo (one fruit) becomes plural izithelo (fruits). Singular isitshalo becomes izitshalo. Even izinkomo follows a related pattern (the singular 'inkomo' = one cow becomes 'izinkomo' = cattle). Whenever you see a noun starting with izi- or izin-, it's almost always a plural.",
    examples: [
      { target: 'isithelo / izithelo', native: 'a fruit / fruits' },
      { target: 'isitshalo / izitshalo', native: 'a crop / crops' },
      { target: 'inkomo / izinkomo', native: 'a cow / cattle' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its English meaning',
      pairs: [
        { left: 'inyama',    right: 'meat (often beef)' },
        { left: 'izinkomo',  right: 'cattle' },
        { left: 'inkukhu',   right: 'chicken' },
        { left: 'izithelo',  right: 'fruit' },
        { left: 'izitshalo', right: 'crops / vegetables' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural question',
      question: "When a Ndebele family slaughters a cow (inkomo) for a guest, what does it usually signal?",
      options: [
        { text: 'The guest is being honoured at a very high level.', correct: true },
        { text: "It's an everyday meal — no special meaning.", correct: false },
        { text: "The family is showing off their wealth.", correct: false },
      ],
      explanation: "Cattle are wealth and lineage in Ndebele culture. Slaughtering one for a guest is a major mark of honour, often reserved for weddings, funerals, and the arrival of someone important.",
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'Cattle',
      correct: ['izinkomo'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I want fruit'",
      sentence: 'Ngifuna ____.',
      options: ['izithelo', 'izinkomo', 'inkukhu'],
      correct: 'izithelo',
      context: "'Ngifuna' means 'I want'. Pick fruits.",
    },
  ],

  rwenDialogue: {
    intro: 'Saturday lunch at a rural homestead. The host is asking what you prefer to eat.',
    lines: [
      { speaker: 'npc',  target: 'Uthanda inyama yenkomo loba inkukhu?', native: 'Do you prefer beef or chicken?' },
      { speaker: 'rwen', rwenLine: "'Inyama yenkomo' = meat-of-cow = beef specifically. They are giving you a real choice — answer honestly." },
      { speaker: 'user', userChoices: [
        { target: 'Ngithanda inyama yenkomo.', native: 'I prefer beef.', correct: true, feedback: 'Direct and clear.' },
        { target: 'Inkukhu, ngiyabonga.', native: 'Chicken, thank you.', correct: true, feedback: 'Equally fine — both are good answers.' },
      ] },
      { speaker: 'npc',  target: 'Lezithelo lezitshalo zikhona.', native: 'And there are fruits and vegetables too.' },
      { speaker: 'user', userChoices: [
        { target: 'Ngiyabonga, ngifuna izithelo lazo.', native: 'Thank you, I want fruit too.', correct: true, feedback: 'Nice — you used both new plurals.' },
        { target: 'Hatshi izitshalo.', native: 'No vegetables.', correct: false, feedback: "Refusing one category abruptly can feel cold. A 'ngiyabonga' first softens it." },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "What is the isiNdebele word for 'meat' (often beef)?",       correct: ['inyama'] },
      { prompt: "What is the isiNdebele word for 'cattle / cows'?",           correct: ['izinkomo'] },
      { prompt: "What does 'izithelo' mean?",                                 correct: ['fruit', 'fruits', 'fruit (plural)'] },
    ],
  },

  mission: {
    title: 'Read about lobola',
    task: "Spend five minutes searching 'lobola Zimbabwe izinkomo' online and read one short article. Notice how the bride-price is still measured in cattle, even when paid in cash. The number of cows is the language.",
    rwenSignoff: "When a culture measures family bonds in cattle, the cow is more than meat. Inyama yenkomo on your plate carries that whole history.",
  },

  phase8: {
    scenario: "You are a guest at a weekend family lunch in rural Matabeleland. The grandmother asks what you would like — beef, chicken, fruit, or vegetables. You make choices and explain your preferences.",
    rwenRole: "Gogo Ncube — the grandmother of the homestead, in her seventies, who has prepared a generous spread for the guests.",
    successCriteria: "User used 'inyama' or 'inyama yenkomo' or 'inkukhu' once, mentioned either 'izithelo' or 'izitshalo', and thanked the host with 'ngiyabonga'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
