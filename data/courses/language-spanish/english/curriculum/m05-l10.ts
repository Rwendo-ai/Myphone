import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-rwen-familia',
  module: 5,
  lesson: 10,
  title: "Rwen's Family — Full Conversation",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today you meet my whole family — and they meet you. Use every family word you've learned. This is real conversation, not practice. The whole table is waiting.",
    culturalNote: "A Latin American family Sunday gathering is a long, layered event — almuerzo at 2pm, sobremesa (the after-meal conversation) until 6pm, café and pan dulce, and forty interlocking conversations at once. Holding even basic Spanish across that arc shows real respect.",
  },

  chunks: [
    {
      id: 'bienvenido',
      target: 'Bienvenido a la familia',
      native: 'Welcome to the family',
      literal: 'Welcome to the family',
      emoji: '🤗',
      phonetic: 'byen-veh-NEE-doh ah lah fah-MEE-lyah',
      audioRef: null,
    },
    {
      id: 'gusto',
      target: 'Mucho gusto en conocerlos',
      native: 'Pleased to meet you all',
      literal: 'Much pleasure in knowing-them (plural object)',
      emoji: '🙏',
      phonetic: 'MOO-choh GOOS-toh en koh-noh-SEHR-lohs',
      audioRef: null,
    },
    {
      id: 'gracias',
      target: 'Gracias por recibirme',
      native: 'Thank you for having me',
      literal: 'Thanks for receiving-me',
      emoji: '💐',
      phonetic: 'GRAH-syahs por reh-see-BEER-meh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Object pronouns clipped onto infinitives',
    explanation: "Spanish glues object pronouns onto infinitive verbs: conocer + los → conocerlos (to meet them). Recibir + me → recibirme (to receive me). One word, two meanings stacked. Listen for it everywhere — it's a hallmark of fluent speech.",
    examples: [
      { target: 'conocerlos', native: 'to meet them (conocer + los)' },
      { target: 'recibirme', native: 'to receive me (recibir + me)' },
      { target: 'verte', native: 'to see you (ver + te)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the welcome phrase to its meaning',
      pairs: [
        { left: 'Bienvenido a la familia', right: 'Welcome to the family' },
        { left: 'Mucho gusto en conocerlos', right: 'Pleased to meet you all' },
        { left: 'Gracias por recibirme', right: 'Thank you for having me' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Abuela María says 'Bienvenido a la familia.' What does she mean?",
      question: 'Bienvenido a la familia means:',
      options: [
        { text: 'Welcome to the family', correct: true },
        { text: 'Goodbye to the family', correct: false },
        { text: 'I am part of the family', correct: false },
      ],
      explanation: "'Bienvenido' (masculine) / 'Bienvenida' (feminine) = welcome. The form changes with who is being welcomed.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Welcome to the family',
      correct: ['Bienvenido a la familia', 'Bienvenida a la familia', 'bienvenido a la familia'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the welcome',
      sentence: 'Mucho gusto en _____.',
      options: ['conocerlos', 'conocer', 'conocerlo'],
      correct: 'conocerlos',
      context: 'Greeting a group — needs the plural "los" clipped to the infinitive.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Thank you for having me'",
      words: ['Gracias', 'por', 'recibirme.'],
      correct: ['Gracias', 'por', 'recibirme.'],
      translation: 'Thank you for having me',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Pleased to meet you all',
      correct: ['Mucho gusto en conocerlos', 'mucho gusto en conocerlos'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at Rwen's grandparents' home in Mexico City. Sunday almuerzo. Forty people, three generations, all waiting on the patio. Navigate the full welcome.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bienvenido, mijo. Pasa, pasa. Te estábamos esperando.',
        native: 'Welcome, dear. Come in, come in. We were waiting for you. (Abuela speaks)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes, abuelita. Mucho gusto en conocerlos. Gracias por recibirme.', native: 'Good afternoon, Grandma. Pleased to meet you all. Thank you for having me.', correct: true, feedback: "Three full sentences — title, group greeting, gratitude. And you used 'abuelita' instead of cold 'señora'. The whole patio just warmed up." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "This is a welcome moment — open big. 'Buenas tardes, abuelita. Mucho gusto en conocerlos. Gracias por recibirme.'" },
          { target: 'Mucho gusto', native: 'Nice to meet you (singular)', correct: false, feedback: "There are forty people watching — make it plural: 'Mucho gusto en conocerLOS'. And add 'Gracias por recibirme'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mira qué bien hablas español. ¿Y tu familia? ¿Tienes hermanos?',
        native: 'Look how well you speak Spanish. And your family? Do you have siblings?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, tengo dos hermanos y una hermana. Somos cinco en mi familia. Amo a mi familia.', native: 'Yes, I have two brothers and one sister. There are five of us. I love my family.', correct: true, feedback: "Count, structure, feeling — and the personal 'a' before 'mi familia'. That sentence will get retold at every Sunday lunch for years. That's why you came." },
          { target: 'Sí, tengo familia', native: 'Yes, I have family', correct: false, feedback: "Go bigger — count them: 'Tengo dos hermanos y una hermana. Somos cinco.' Spanish-speaking families want the numbers." },
          { target: 'Amo mi familia', native: 'I love my family (missing personal "a")', correct: false, feedback: "Add the personal 'a' — 'Amo A mi familia'. With it, you sound like family." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Toda la familia se quedó callada para escucharte. Eso no pasa con cualquiera. Módulo 5 — terminado. Felicitaciones.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Welcome to the family', correct: ['Bienvenido a la familia', 'bienvenido a la familia'] },
      { prompt: 'Thank you for having me', correct: ['Gracias por recibirme', 'gracias por recibirme'] },
    ],
  },

  mission: {
    title: "Your Module 5 Mission",
    task: "Tell one person about Rwen's family today — describe what you learned about how Spanish speakers talk about family. Teaching it to someone else is the fastest way to make it yours.",
    rwenSignoff: "Toda la familia te recibe. The whole family welcomes you. Module 6 — numbers, time, and the market — is next. Hasta pronto.",
  },

  phase8: {
    scenario: "You arrive at Rwen's family Sunday almuerzo in Mexico City for the first time — abuela María, Don Ernesto, tía Carmen, primos, hijos, all on the patio. Abuela María formally welcomes you with 'Bienvenido, mijo.' You need to respond with one flowing turn: gratitude, joy at meeting everyone, and a respectful greeting using her family title. The whole patio is listening.",
    rwenRole: "Abuela María — Rwen's grandmother, ~81, the family matriarch presiding over the welcome; the entire mhuri — sorry, the whole familia — is watching to see if you can carry this moment in Spanish.",
    successCriteria: "User combines all three chunks into a single welcome turn: 'Gracias por recibirme', 'Mucho gusto en conocerlos' (plural — NOT singular 'conocerte'), AND uses the warm 'abuelita' or 'abuela' (NOT 'señora') with a complete greeting like 'Buenas tardes' rather than just 'Hola'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
