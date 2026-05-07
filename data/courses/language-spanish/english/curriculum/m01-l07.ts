import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-como-te-llamas',
  module: 1,
  lesson: 7,
  title: '¿Cómo Te Llamas? — Names',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greeting opens the door. A name takes you inside. Latin Americans love asking — and they remember. The question is short, the answer is shorter, and you'll use it almost every day if you live in this language.",
    culturalNote: "Latin American Spanish reflexive verbs: '¿Cómo te llamas?' literally means 'How do you call yourself?' It feels strange to translate, but to a Spanish speaker it's the most natural way to ask. Plenty of people also have a second 'apellido' (surname) — most LatAm folks carry both their father's and mother's family names.",
  },

  chunks: [
    {
      id: 'como_te_llamas',
      target: '¿Cómo te llamas?',
      native: "What's your name? (informal)",
      literal: 'How (do) you (tú) call yourself?',
      emoji: '🏷️',
      phonetic: 'KOH-moh teh YAH-mahs',
      audioRef: null,
    },
    {
      id: 'me_llamo',
      target: 'Me llamo...',
      native: 'My name is... (lit. I call myself...)',
      literal: 'I call myself...',
      emoji: '🙋',
      phonetic: 'meh YAH-moh',
      audioRef: null,
    },
    {
      id: 'encantado',
      target: 'Encantado / Encantada',
      native: 'Pleased to meet you (masc. / fem.)',
      literal: 'Enchanted',
      emoji: '🤝',
      phonetic: 'en-kahn-TAH-doh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reflexive me / te — for verbs you do to yourself',
    explanation: "'Llamarse' (to call oneself) is reflexive — every conjugation needs a little pronoun before it. Me llamo (I call myself), te llamas (you call yourself). You'll meet this pattern again and again: levantarse (to get up), ducharse (to shower), llamarse (to be called).",
    examples: [
      { target: 'Me llamo Diego', native: 'My name is Diego (I call myself Diego)' },
      { target: '¿Cómo te llamas?', native: 'What\'s your name? (How do you call yourself?)' },
      { target: '¿Cómo se llama usted?', native: 'What\'s your name? (formal — How do YOU call yourself?)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: '¿Cómo te llamas?', right: "What's your name? (informal)" },
        { left: 'Me llamo...', right: 'My name is...' },
        { left: 'Encantada', right: 'Pleased to meet you (fem.)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Introduce yourself',
      sentence: '_____ llamo Ana.',
      options: ['Me', 'Te', 'Se'],
      correct: 'Me',
      context: 'Talking about yourself — use the "I" reflexive pronoun.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "What's your name? (to a friend)",
      correct: ['¿Cómo te llamas?', 'Cómo te llamas?', '¿Cómo te llamas', 'cómo te llamas?', 'Como te llamas?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the question',
      words: ['llamas?', '¿Cómo', 'te'],
      correct: ['¿Cómo', 'te', 'llamas?'],
      translation: "What's your name? (informal)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (introducing yourself, name = Sofía)',
      prompt: 'My name is Sofía',
      correct: ['Me llamo Sofía', 'me llamo Sofía', 'Me llamo Sofia', 'me llamo sofia'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A new colleague (your age) walks up. What\'s the natural question?',
      question: 'Choose the right introduction question',
      options: [
        { text: '¿Cómo te llamas?', correct: true },
        { text: '¿De dónde eres?', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "'¿Cómo te llamas?' asks for their name. '¿De dónde eres?' asks where they're from (next lesson). 'Adiós' is goodbye.",
    },
  ],

  rwenDialogue: {
    intro: "I'm Rwen — your future friend in Spanish. We've just shared a 'Hola' and a 'mucho gusto'. Now let's exchange names.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Hola, ¿cómo te llamas?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me llamo... ¿y tú?', native: 'My name is... and you?', correct: true, feedback: "Perfect — you answered AND asked back. That's the natural rhythm of a Spanish introduction." },
          { target: '¿Cómo te llamas?', native: "What's your name?", correct: false, feedback: "I asked YOU first — answer with 'Me llamo...' and then you can ask back." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "We just met — that's farewell territory. Try 'Me llamo...'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Encantado. Me llamo Rwen.',
      },
      {
        speaker: 'rwen',
        rwenLine: "A name traded both ways — that's the move. We're not strangers anymore.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "What's your name? (informal)", correct: ['¿Cómo te llamas?', 'Cómo te llamas?', 'cómo te llamas?', 'Como te llamas?'] },
      { prompt: 'My name is... (start of the phrase)', correct: ['Me llamo', 'me llamo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself in Spanish to one person today — 'Me llamo [your name]'. Even rehearsed in front of the mirror counts.",
    rwenSignoff: "Encantado de conocerte — pleased to know you.",
  },

  phase8: {
    scenario: "It's a Tuesday afternoon at a co-working space in Mexico City. A new person — around your age — sits down at the desk next to yours, sets up their laptop, and turns to you with a friendly smile. The whole exchange will take 30 seconds, but it sets the tone for whether you're work-neighbours or just two people in the same room.",
    rwenRole: "Camila — new co-worker, ~28, friendly and chatty Mexicana; she's about to introduce herself first and expects a real name exchange, not just a nod.",
    successCriteria: "User answers her '¿Cómo te llamas?' with 'Me llamo [name]' (NOT just stating bare name in English), uses the reflexive 'me' (NOT dropping it: 'Llamo [name]' is wrong), asks back '¿y tú?', and uses 'Encantado/Encantada' to close the introduction warmly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
