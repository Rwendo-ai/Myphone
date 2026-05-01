import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-name',
  module: 1,
  lesson: 6,
  title: "Comment vous appelez-vous? — Names",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Your name in French isn't 'I am Sarah' — it's 'I call myself Sarah'. The verb is reflexive — you do it to yourself. A tiny grammatical detail, hugely revealing.",
    culturalNote: "After exchanging names, French speakers say 'Enchanté' or 'Enchantée' (literally: enchanted). It sounds dramatic in English, but in French it's the standard 'pleased to meet you'. Add the extra -e if you yourself are a woman — it's an agreement on the speaker's gender, not the other person's.",
  },

  chunks: [
    {
      id: 'comment_vous_appelez',
      target: 'Comment vous appelez-vous?',
      native: "What's your name? (formal)",
      literal: 'How call-yourself you (vous)?',
      emoji: '❓',
      phonetic: 'koh-mahn voo zah-play VOO',
      audioRef: null,
    },
    {
      id: 'je_mappelle',
      target: "Je m'appelle...",
      native: 'My name is...',
      literal: 'I call-myself...',
      emoji: '🪪',
      phonetic: 'zhuh mah-PELL',
      audioRef: null,
    },
    {
      id: 'enchante',
      target: 'Enchanté(e)',
      native: 'Pleased to meet you',
      literal: 'Enchanted',
      emoji: '🤝',
      phonetic: 'ahn-shahn-TAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reflexive verbs (s\'appeler)',
    explanation: 'In French you don\'t "are" your name — you "call yourself" your name. The little "se / me / te / vous" before the verb is the reflexive marker — it always loops back to the speaker.',
    examples: [
      { target: "Je m'appelle Marc", native: 'My name is Marc (I call myself Marc)' },
      { target: "Tu t'appelles comment?", native: "What's your name? (informal)" },
      { target: "Il s'appelle Pierre", native: 'His name is Pierre' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Comment vous appelez-vous?', right: "What's your name? (formal)" },
        { left: "Je m'appelle...", right: 'My name is...' },
        { left: 'Enchanté(e)', right: 'Pleased to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete your introduction',
      sentence: "Je _____ appelle Sophie.",
      options: ["m'", "s'", "t'"],
      correct: "m'",
      context: "It's reflexive — back to me, so 'me' (m' before a vowel).",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My name is Alex',
      correct: ["Je m'appelle Alex", "je m'appelle Alex", "Je m appelle Alex"],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a stranger their name — put the words in order',
      words: ['vous-vous?', 'appelez', 'Comment'],
      correct: ['Comment', 'vous', 'appelez-vous?'],
      translation: "What's your name? (formal)",
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone has just told you their name. What do you say?',
      question: 'Choose the right reply',
      options: [
        { text: 'Enchanté(e)', correct: true },
        { text: 'De rien', correct: false },
        { text: "S'il vous plaît", correct: false },
      ],
      explanation: "'Enchanté' (or Enchantée if you're a woman) is the standard meeting reply.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Pleased to meet you',
      correct: ['Enchanté', 'Enchantée', 'enchanté', 'enchantée'],
    },
  ],

  rwenDialogue: {
    intro: "You're at an art gallery opening in the Marais. A friend leads you up to the artist whose work fills the back wall.",
    lines: [
      {
        speaker: 'npc',
        target: "Bonsoir, comment vous appelez-vous?",
        native: "Good evening, what's your name?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Je m'appelle Sam, enchanté(e)", native: "My name is Sam, pleased to meet you", correct: true, feedback: 'Smooth — name plus the warm "enchanté".' },
          { target: "Sam", native: "Sam", correct: false, feedback: 'Just the name lands a bit cold — French wraps it in a sentence.' },
          { target: "Je suis Sam", native: 'I am Sam', correct: false, feedback: 'Almost — but in French you "call yourself" your name. Use "Je m\'appelle".' },
        ],
      },
      {
        speaker: 'npc',
        target: "Enchantée. Et vous venez d'où?",
        native: 'Pleased to meet you. And where are you from?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch her 'Enchantée' with the extra -e? She's a woman, so the adjective agrees. Tiny rule, real signal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My name is [your name]',
        correct: ["Je m'appelle", "je m'appelle"],
      },
      {
        prompt: "What's your name? (formal — to a stranger)",
        correct: ['Comment vous appelez-vous?', 'Comment vous appelez-vous', 'comment vous appelez-vous?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, in front of a mirror or in your kitchen — introduce yourself in French. 'Bonjour, je m'appelle ___, enchanté(e).' Three short lines. Just say them.",
    rwenSignoff: "Demain you tell them where you're from. À demain.",
  },

  phase8: {
    scenario: "Opening night at a small contemporary gallery in the Marais. You've come with a French friend who has just spotted the artist across the room and is steering you toward her for an introduction. The room is full, lights are warm, the artist turns and smiles.",
    rwenRole: "Inès — the artist, ~35, friendly and curious about the people who like her work; she introduces herself with 'Comment vous appelez-vous?' and expects a name + 'enchantée' back.",
    successCriteria: "User uses 'Je m'appelle [name]' (NOT 'Je suis [name]'), follows up with 'Enchanté' (or 'Enchantée' if female-presenting), and stays in vous register since they've just met.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
