import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'A complete French greeting',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Today you put the whole module together — greeting, name, where you're from, the polite chain, the goodbye-with-a-wish. One full conversation. This is the moment your French stops being words and starts being a person.",
    culturalNote: "A complete French first encounter has a shape: Bonjour → Comment allez-vous? → name exchange → where from → small talk → Au revoir + bonne soirée. Each beat does work. Skip a beat and the rhythm breaks. By the end of this lesson, the rhythm is yours.",
  },

  chunks: [
    {
      id: 'enchante_de_vous_rencontrer',
      target: 'Enchanté(e) de vous rencontrer',
      native: "Pleased to meet you (full)",
      literal: 'Enchanted to-you meet',
      emoji: '🤝',
      phonetic: 'ahn-shahn-TAY duh voo rahn-kohn-TRAY',
      audioRef: null,
    },
    {
      id: 'cest_un_plaisir',
      target: 'C\'est un plaisir',
      native: "It's a pleasure",
      literal: 'It-is a pleasure',
      emoji: '✨',
      phonetic: 'seh tuhn pleh-ZEER',
      audioRef: null,
    },
    {
      id: 'a_bientot',
      target: 'À bientôt',
      native: 'See you soon',
      literal: 'Until soon',
      emoji: '👋',
      phonetic: 'ah bee-ehn-TOH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full politesse flow',
    explanation: 'A complete French first encounter has six beats: greeting, polite check-in, name exchange, origin, brief link/comment, farewell with wish. You\'ve learned every piece — now it\'s about flow.',
    examples: [
      { target: 'Bonjour, comment allez-vous?', native: 'Hello, how are you? (open)' },
      { target: "Je m'appelle Sam, et vous?", native: "My name is Sam, and you? (exchange)" },
      { target: 'Au revoir, bonne journée, à bientôt!', native: 'Goodbye, have a good day, see you soon! (close)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Enchanté(e) de vous rencontrer', right: 'Pleased to meet you (full)' },
        { left: "C'est un plaisir", right: "It's a pleasure" },
        { left: 'À bientôt', right: 'See you soon' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You've just learned someone's name. Complete the warm reply.",
      sentence: "Enchanté de _____ rencontrer.",
      options: ['vous', 'tu', 'me'],
      correct: 'vous',
      context: 'Vous since you just met. "Enchanté de vous rencontrer" = pleased to meet you.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — opening line of a polite first meeting',
      prompt: 'Hello, how are you? (formal)',
      correct: ['Bonjour, comment allez-vous?', 'Bonjour comment allez-vous?', 'bonjour, comment allez-vous?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Introduce yourself and ask their name — put the words in order',
      words: ['vous?', 'appelle', "Je", 'Sam,', "m'", 'et'],
      correct: ['Je', "m'", 'appelle', 'Sam,', 'et', 'vous?'],
      translation: 'My name is Sam, and you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in French — close out a first meeting warmly',
      prompt: 'Goodbye, have a good evening, see you soon!',
      correct: [
        'Au revoir, bonne soirée, à bientôt!',
        'Au revoir, bonne soirée, à bientôt',
        'au revoir, bonne soirée, à bientôt!',
        'Au revoir bonne soirée à bientôt!',
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in French — pleased to meet you (formal, full version)',
      prompt: 'Pleased to meet you',
      correct: [
        'Enchanté de vous rencontrer',
        'Enchantée de vous rencontrer',
        'enchanté de vous rencontrer',
        'Enchanté',
        'Enchantée',
      ],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small dinner at your friend Camille's apartment. She's introducing you to her parents, Madame and Monsieur Roussel, who you've just heard so much about. They're standing in the hallway smiling. Go.",
    lines: [
      {
        speaker: 'npc',
        target: "Bonsoir! Vous devez être l'ami de Camille. Comment allez-vous?",
        native: "Good evening! You must be Camille's friend. How are you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonsoir madame, je m'appelle Sam, enchanté(e) de vous rencontrer", native: "Good evening madam, my name is Sam, pleased to meet you", correct: true, feedback: 'Picture-perfect first meeting — greeting, title, name, formal pleasure.' },
          { target: "Salut, je suis Sam, ça va?", native: 'Hi, I\'m Sam, how\'s it going? (informal)', correct: false, feedback: "Camille's parents at first meeting = full vous mode. Salut and ça va are too casual." },
          { target: "Sam.", native: 'Sam.', correct: false, feedback: 'Just your name skips the whole French opening — they\'ll feel rushed past.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Enchantée Sam, asseyez-vous! D'où venez-vous?",
        native: 'Pleased to meet you Sam, please sit down! Where are you from?',
      },
      {
        speaker: 'rwen',
        rwenLine: "There it is — a full French first encounter, and you held the register the whole way through. C'est un plaisir, vraiment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type the full opening from memory.",
    prompts: [
      {
        prompt: "Hello, how are you? My name is [your name]. (formal — combine the lines)",
        correct: [
          "Bonjour, comment allez-vous? Je m'appelle",
          "Bonjour comment allez-vous? Je m'appelle",
          "Bonjour, comment allez-vous ? Je m'appelle",
        ],
      },
      {
        prompt: "Goodbye, have a good evening, see you soon!",
        correct: [
          'Au revoir, bonne soirée, à bientôt!',
          'Au revoir, bonne soirée, à bientôt',
          'Au revoir bonne soirée à bientôt',
          'au revoir, bonne soirée, à bientôt!',
        ],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Have a complete French greeting today — out loud, with anyone. Even into your phone camera, even with a French-speaking AI. Open with Bonjour, give your name, ask theirs, close with bonne journée. The whole arc, in one breath.",
    rwenSignoff: "Tu as fini le module un. Sérieusement — bravo. À très bientôt.",
  },

  phase8: {
    scenario: "Sunday lunch at your French friend Camille's parents' apartment in the 16th arrondissement. You've heard about them for months. They're meeting you for the first time, in the entry hall, with curiosity and warmth. The next 90 seconds is your first complete French encounter — greeting, name, where you're from, a small connection point, and (later) a graceful goodbye with wish.",
    rwenRole: "Madame Roussel — Camille's mother, ~60, retired, charming and observant; she sets the formal tone, expects vous throughout, will ask follow-up questions about your origin, and notices warmly if you stack 'merci' and 'bonne soirée' on your goodbye.",
    successCriteria: "User runs the full Module 1 arc end to end: opens with 'Bonjour' (or 'Bonsoir' if evening) + 'madame', uses 'Comment allez-vous?' (formal), introduces self with 'Je m'appelle', adds 'Enchanté(e)', answers 'D'où venez-vous?' with 'Je viens de [city]', stays in vous register THE WHOLE TIME (no slipping to tu), and closes with 'Au revoir + bonne soirée + merci'. The test is integration — every Module 1 piece, in correct order, in one connected exchange.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
