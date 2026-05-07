import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hola',
  module: 1,
  lesson: 1,
  title: 'Hola — The Doorway In',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! One word, two syllables, and it works in Mexico City, Buenos Aires, Bogotá, Lima — anywhere across 20 Latin American countries. Today we open the door. By the end of Module 1 you'll walk through it.",
    culturalNote: "Spanish in Latin America is warmer than the textbooks suggest. A 'Hola' usually comes with eye contact, a smile, often a handshake or a kiss on one cheek (Mexico, most of LatAm). Saying 'Hola' without acknowledging the person physically can feel cold.",
  },

  chunks: [
    {
      id: 'hola',
      target: 'Hola',
      native: 'Hi / Hello (universal, any time)',
      literal: 'Hola — works morning, noon, night',
      emoji: '👋',
      phonetic: 'OH-lah',
      audioRef: null,
    },
    {
      id: 'que_tal',
      target: '¿Qué tal?',
      native: "How's it going? (casual, friendly)",
      literal: 'What such? — informal wellness check',
      emoji: '🙂',
      phonetic: 'keh TAHL',
      audioRef: null,
    },
    {
      id: 'mucho_gusto',
      target: 'Mucho gusto',
      native: 'Nice to meet you',
      literal: 'Much pleasure',
      emoji: '🤝',
      phonetic: 'MOO-choh GOOS-toh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Inverted punctuation — ¿ and ¡',
    explanation: "Spanish opens questions with ¿ and exclamations with ¡. They mark the start of the sentence. Skipping them looks half-finished in writing — and they tell your reader what tone to expect before they hit the end.",
    examples: [
      { target: '¿Qué tal?', native: "How's it going?" },
      { target: '¡Hola!', native: 'Hi!' },
      { target: '¿Cómo estás?', native: 'How are you?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish phrase to its meaning',
      pairs: [
        { left: 'Hola', right: 'Hi / Hello' },
        { left: '¿Qué tal?', right: "How's it going?" },
        { left: 'Mucho gusto', right: 'Nice to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the casual greeting',
      sentence: 'Hola, ¿_____ tal?',
      options: ['qué', 'cómo', 'dónde'],
      correct: 'qué',
      context: "You're greeting a coworker at a Mexico City café.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Hi / Hello',
      correct: ['Hola', 'hola', '¡Hola!', 'hola!'],
    },
    {
      type: 'build_sentence',
      instruction: 'Greet a new acquaintance — put the words in order',
      words: ['gusto', 'Hola,', 'mucho'],
      correct: ['Hola,', 'mucho', 'gusto'],
      translation: 'Hi, nice to meet you',
    },
    {
      type: 'multiple_choice',
      instruction: "Someone offers their hand and says 'Hola, mucho gusto'. What's the natural reply?",
      question: 'Choose the right response',
      options: [
        { text: 'Mucho gusto', correct: true },
        { text: 'Adiós', correct: false },
        { text: 'No', correct: false },
      ],
      explanation: "You mirror their warmth — 'Mucho gusto' (or 'Igualmente — likewise') is the standard return. 'Adiós' is goodbye; you'd be ending before you started.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "How's it going? (casual)",
      correct: ['¿Qué tal?', 'Qué tal?', '¿Qué tal', 'qué tal?', 'Que tal?'],
    },
  ],

  rwenDialogue: {
    intro: "You've just sat down at a small café in Roma Norte, Mexico City. The barista comes over with a smile. Open the conversation.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Hola! ¿Qué tal?',
        native: 'Hi! How are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hola, mucho gusto', native: 'Hi, nice to meet you', correct: true, feedback: 'Warm and natural — exactly the energy a Mexican café opens with.' },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "That's a farewell — you've only just walked in. Try 'Hola' to open." },
          { target: 'No', native: 'No', correct: false, feedback: "They greeted you, not asked a yes/no question. Open with 'Hola'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Igualmente. ¿Un café?',
        native: 'Likewise. A coffee?',
      },
      {
        speaker: 'rwen',
        rwenLine: "One word — Hola — and the door is open. That's how every Spanish conversation starts.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Hi / Hello (in Spanish)',
        correct: ['Hola', 'hola', '¡Hola!'],
      },
      {
        prompt: 'Nice to meet you',
        correct: ['Mucho gusto', 'mucho gusto'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Hola' to one person today — out loud. Coffee shop, neighbour, mirror. Notice how the OH-lah feels in your mouth.",
    rwenSignoff: "Hasta mañana — until tomorrow.",
  },

  phase8: {
    scenario: "It's late morning in a small café in Roma Norte, Mexico City. You step in, the barista — friendly, mid-30s — looks up from the espresso machine and gives you a smile. Your opening greeting sets the tone for whether this is a transaction or a conversation.",
    rwenRole: "Diego — café barista, ~32, friendly and chatty; in Mexican café culture he expects a real 'Hola' before any order, and warms up fast to anyone who greets him as a person first.",
    successCriteria: "User opens with 'Hola' (NOT silently going straight into an order, NOT 'Adiós'), follows with '¿Qué tal?' or returns 'Mucho gusto' if introduced, and stays warm rather than transactional. Bonus if they mirror 'Igualmente' when he says 'Mucho gusto'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
