import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-soy',
  module: 3,
  lesson: 1,
  title: 'Soy — I Am (Identity)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English has one verb 'to be'. Spanish has two — and they fight you on day one. 'Soy' (from ser) is for who you ARE — your name, your job, your nationality, your essence. 'Estoy' (from estar) is for how you ARE right now — tired, in Madrid, happy. Module 3 starts with the permanent one: soy.",
    culturalNote: "In Latin American introductions, your full name often includes two surnames — your father's first, then your mother's. So 'Ana García López' is Ana, daughter of Mr García and Mrs López. Latinos rarely correct foreigners on this, but using both surnames signals you've done your homework.",
  },

  chunks: [
    {
      id: 'soy',
      target: 'Soy...',
      native: 'I am...',
      literal: 'I-am (essence/identity)',
      emoji: '🙋',
      phonetic: 'soy',
      audioRef: null,
    },
    {
      id: 'me_llamo',
      target: 'Me llamo...',
      native: 'My name is... (lit. I call myself...)',
      literal: 'Me I-call...',
      emoji: '🏷️',
      phonetic: 'meh YAH-mo',
      audioRef: null,
    },
    {
      id: 'mucho_gusto',
      target: 'Mucho gusto',
      native: 'Nice to meet you (lit. much pleasure)',
      literal: 'Much pleasure',
      emoji: '🤝',
      phonetic: 'MOO-cho GOOS-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser (soy) — for permanent identity',
    explanation: "'Soy' is the 'yo' (I) form of ser — used for things that define you: name, nationality, profession, personality, relationships. The trap: English speakers reach for 'estoy' because estar sounds closer to 'is/are'. Wrong. For WHO you are, always soy.",
    examples: [
      { target: 'Soy Ana', native: 'I am Ana (identity)' },
      { target: 'Soy estadounidense', native: 'I am American (nationality)' },
      { target: 'Soy profesor', native: 'I am a teacher (no "un" needed before profession)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Soy...', right: 'I am... (identity)' },
        { left: 'Me llamo...', right: 'My name is...' },
        { left: 'Mucho gusto', right: 'Nice to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I am Ana"',
      sentence: '_____ Ana.',
      options: ['Soy', 'Estoy', 'Tengo'],
      correct: 'Soy',
      context: "Identity — name is part of WHO you are, not WHERE you are.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'My name is Ana (lit. I call myself Ana)',
      correct: ['Me llamo Ana', 'me llamo Ana', 'me llamo ana'],
    },
    {
      type: 'multiple_choice',
      instruction: "You meet someone at a Mexican wedding. They say their name. How do you respond?",
      question: 'Choose the natural reply',
      options: [
        { text: 'Mucho gusto. Me llamo [name].', correct: true },
        { text: 'Estoy [name].', correct: false },
        { text: 'Hola, soy un profesor.', correct: false },
      ],
      explanation: "'Mucho gusto' is the standard pleased-to-meet-you, then 'Me llamo' shares your name. 'Estoy [name]' is the classic English-speaker error — names are identity, use soy/llamo.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am a teacher"',
      words: ['profesor', 'Soy'],
      correct: ['Soy', 'profesor'],
      translation: 'I am a teacher (Spanish drops "a/an" before professions)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am [your nationality] — use "estadounidense" for American',
      correct: ['Soy estadounidense', 'soy estadounidense'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a primo's wedding in Guadalajara. The bride's tía spots you across the patio and walks over with a glass of mezcal. Introduce yourself.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Hola! ¿Cómo te llamas?',
        native: 'Hi! What is your name?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me llamo [your name]. Mucho gusto.', native: 'My name is [your name]. Nice to meet you.', correct: true, feedback: "Perfect — name + the standard pleased-to-meet-you. She smiles and asks for the second surname." },
          { target: 'Estoy [your name].', native: 'I am [your name].', correct: false, feedback: "The English-speaker trap. Names are identity — use 'Me llamo...' or 'Soy...', never 'Estoy...'." },
          { target: 'Soy bien.', native: 'I am well.', correct: false, feedback: "That mixes ser with a state — and 'I am well' uses estoy anyway. For your name, 'Me llamo...'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mucho gusto. Yo soy María García López, tía de la novia.',
        native: 'Nice to meet you. I am María García López, the bride\'s aunt.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two surnames, García from her dad and López from her mom. That's how Latin America does it. You said your name and you didn't trip on ser/estar. Buen comienzo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am... (identity — just the verb)', correct: ['Soy', 'soy'] },
      { prompt: 'My name is Ana (using "I call myself")', correct: ['Me llamo Ana', 'me llamo Ana', 'me llamo ana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Me llamo [your name]. Soy [your profession or nationality]. Mucho gusto.' out loud. Three sentences, no English. That's a complete first impression in Spanish.",
    rwenSignoff: "You introduced yourself. The ser/estar war begins now — and you won round one. ¡Hasta luego!",
  },

  phase8: {
    scenario: "You're at a primo's wedding reception in Guadalajara. The bride's mother walks over to introduce herself and asks who you are and how you know the couple.",
    rwenRole: "Doña Carmen — bride's mother, ~55, warm, formal, will use 'usted' with you and expects a clean self-introduction; she may ask for your second surname.",
    successCriteria: "User uses 'Me llamo...' or 'Soy...' (NOT 'Estoy...') for their name, drops the 'un/una' before profession ('Soy profesor', not 'Soy un profesor'), and replies to 'mucho gusto' appropriately. Doesn't conflate ser and estar.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
