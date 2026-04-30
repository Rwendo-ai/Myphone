import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-zita-rako',
  module: 1,
  lesson: 6,
  title: 'Zita Rako Ndiani? — What\'s Your Name?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You can greet anyone now. But what comes after 'hello'? A name. In Shona, asking someone's name isn't small talk — it's genuine interest. Names here often have deep meanings.",
    culturalNote: "Shona names are often full sentences or statements of meaning. 'Tendai' means 'be grateful'. 'Rudo' means 'love'. When you ask someone's name in Shona, you're asking for a piece of their story.",
  },

  chunks: [
    {
      id: 'zita_rako_ndiani',
      shona: 'Zita rako ndiani?',
      english: 'What is your name?',
      literal: 'Name your it-is-who?',
      emoji: '🏷️',
      phonetic: 'ZI-ta ra-ko ndi-AH-ni',
      audioRef: null,
    },
    {
      id: 'zita_rangu_ndi',
      shona: 'Zita rangu ndi...',
      english: 'My name is...',
      literal: 'Name my it-is...',
      emoji: '🙋',
      phonetic: 'ZI-ta ran-gu ndi',
      audioRef: null,
    },
    {
      id: 'wakanaka_kukuziva',
      shona: 'Wakanaka kukuziva',
      english: 'Nice to meet you',
      literal: 'It-is-good to-know-you',
      emoji: '🤗',
      phonetic: 'wa-ka-NAH-ka ku-ku-ZI-va',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Rako vs Rangu — Your vs My',
    explanation: "These two endings appear constantly in Shona. 'Rako' means 'your' and 'rangu' means 'my'. They attach to nouns to show ownership. Learn them here and you'll recognise them everywhere.",
    examples: [
      { shona: 'Zita rako', english: 'Your name' },
      { shona: 'Zita rangu', english: 'My name' },
      { shona: 'Imba rako', english: 'Your house' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Zita rako ndiani?', right: 'What is your name?' },
        { left: 'Zita rangu ndi...', right: 'My name is...' },
        { left: 'Wakanaka kukuziva', right: 'Nice to meet you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "my name is..."',
      sentence: 'Zita _____ ndi Tendai.',
      options: ['rangu', 'rako', 'ranu'],
      correct: 'rangu',
      context: 'Introduce yourself.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'What is your name?',
      correct: ['Zita rako ndiani?', 'zita rako ndiani?', 'Zita rako ndiani', 'zita rako ndiani'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the question "What is your name?"',
      words: ['ndiani?', 'Zita', 'rako'],
      correct: ['Zita', 'rako', 'ndiani?'],
      translation: 'What is your name?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Nice to meet you',
      correct: ['Wakanaka kukuziva', 'wakanaka kukuziva'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Zita rako ndiani?" What do they want to know?',
      question: 'What is this question asking?',
      options: [
        { text: 'Your name', correct: true },
        { text: 'Where you are from', correct: false },
        { text: 'How you are', correct: false },
      ],
      explanation: "'Zita rako ndiani?' literally means 'Name your it-is-who?' — asking for your name.",
    },
  ],

  rwenDialogue: {
    intro: "I've heard your greeting — now I want to know you. Let's introduce ourselves.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Zita rako ndiani?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Zita rangu ndi...', english: 'My name is...', correct: true, feedback: "Perfect introduction. Rwen smiles — they know your name now." },
          { shona: 'Zita rako ndiani?', english: 'What is your name?', correct: false, feedback: "That's the question — not the answer. They asked you first, now reply with 'Zita rangu ndi...'." },
          { shona: 'Makadii?', english: 'How are you?', correct: false, feedback: "That's a greeting — they're asking for your name. Use 'Zita rangu ndi...'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wakanaka kukuziva. Zita rangu ndi Rwen.',
      },
      {
        speaker: 'rwen',
        rwenLine: "A name exchanged is a connection made. You're not strangers anymore.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What is your name? (in Shona)', correct: ['Zita rako ndiani?', 'zita rako ndiani?', 'Zita rako ndiani', 'zita rako ndiani'] },
      { prompt: 'Nice to meet you', correct: ['Wakanaka kukuziva', 'wakanaka kukuziva'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself in Shona to one person today — even just 'Zita rangu ndi [your name]'. Watch their reaction.",
    rwenSignoff: "Your name in Shona sounds like music. Famba zvakanaka.",
  },
};

export default lesson;
