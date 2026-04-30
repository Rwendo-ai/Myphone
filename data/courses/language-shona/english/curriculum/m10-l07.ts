import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past',
  module: 10,
  lesson: 7,
  title: 'Talking About the Past — Nguva Yadarika',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Language comes alive when you can tell stories. And stories live in the past. Today we look at how Shona talks about times gone by — kare (long ago), nguva yadarika (in the past), and the narrative past tense that brings stories to life.",
    culturalNote: "Oral storytelling is central to Shona culture. Stories pass down wisdom, history, and identity across generations. The storyteller opens with 'Paivapo...' (Once upon a time / There was...) and listeners respond 'Paivapo!' Learning to tell stories in Shona is an act of cultural participation.",
  },

  chunks: [
    {
      id: 'kare',
      target: 'Kare',
      native: 'Long ago / In the old days / Once',
      literal: 'Long-ago',
      emoji: '🕰️',
      phonetic: 'KA-re',
      audioRef: null,
    },
    {
      id: 'paivapo',
      target: 'Paivapo...',
      native: 'Once upon a time / There was...',
      literal: 'There-was-there...',
      emoji: '📖',
      phonetic: 'pa-I-va-po',
      audioRef: null,
    },
    {
      id: 'ndakanga',
      target: 'Ndakanga...',
      native: 'I was / I used to be...',
      literal: 'I-was (pluperfect past)',
      emoji: '⬅️',
      phonetic: 'nda-KAN-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndakanga — the deep past',
    explanation: "'Ndakanga' creates a past-in-the-past — 'I was [state]' describing a condition that existed before another past event. Ndakanga ndiri mudzidzi (I was a student, in the past). It's used in storytelling to set scenes in the far past.",
    examples: [
      { target: 'Kare kare, paivapo munhu...', native: 'Long, long ago, there was a person...' },
      { target: 'Ndakanga ndiri mudiki', native: 'I used to be young / When I was young' },
      { target: 'Nguva yadarika...', native: 'In the past... / Once...' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the past phrase to its meaning',
      pairs: [
        { left: 'Kare', right: 'Long ago / Once' },
        { left: 'Paivapo...', right: 'Once upon a time...' },
        { left: 'Ndakanga...', right: 'I was / I used to be...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Begin a story',
      sentence: '_____ kare, paivapo murume akanaka...',
      options: ['Kare', 'Nguva', 'Zvino'],
      correct: 'Kare',
      context: 'Long, long ago, there was a good man...',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Long ago / Once',
      correct: ['Kare', 'kare'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to begin a Shona story traditionally. What do you say?",
      question: 'Begin a traditional Shona story:',
      options: [
        { text: 'Paivapo...', correct: true },
        { text: 'Ndinofara...', correct: false },
        { text: 'Kare kare...', correct: false },
      ],
      explanation: "'Paivapo...' is the traditional Shona story opener — like 'Once upon a time'. Listeners respond 'Paivapo!' to confirm they're ready.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Long ago I was a child'",
      words: ['Kare,', 'ndakanga', 'ndiri', 'mwana.'],
      correct: ['Kare,', 'ndakanga', 'ndiri', 'mwana.'],
      translation: 'Long ago I was a child',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Once upon a time...',
      correct: ['Paivapo', 'paivapo'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen begins to tell you a traditional Shona story. You must respond in the traditional way.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Paivapo...",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paivapo!', native: 'Once upon a time! (response)', correct: true, feedback: "You responded with 'Paivapo!' — signalling you're ready to listen. Rwen continues the story." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "The traditional response to 'Paivapo' is 'Paivapo!' — echo it back to signal you're listening." },
          { target: 'Zvakanaka', native: "That's good", correct: false, feedback: "Echo the opener — 'Paivapo!' That's how Shona storytelling works. The listener confirms." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Kare kare, paivapo chameleon — Rwen — aifamba nzira refu... [the story of how Rwen learned Shona] ...",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Long ago', correct: ['Kare', 'kare'] },
      { prompt: 'Once upon a time...', correct: ['Paivapo', 'paivapo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Begin a story from your own past: 'Kare, ndakanga ndiri mudiki...' (Long ago, I was young...) Continue with two sentences about what you were doing then. Your life story in Shona.",
    rwenSignoff: "Every story begins with 'Paivapo.' Every life is a story. Famba zvakanaka.",
  },
};

export default lesson;
