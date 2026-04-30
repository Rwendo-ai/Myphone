import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-zvakaita',
  module: 3,
  lesson: 9,
  title: 'Ndinofarira — What I Enjoy',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The deepest conversations happen when you can share not just what you do, but what you love. Hobbies, passions, things that light you up. Today you get to say what makes you, you.",
    culturalNote: "In Zimbabwe, sharing what you enjoy creates bonds instantly. Music, football, cooking, reading — these are common ground across cultures. Being able to say 'Ndinofarira...' (I enjoy...) opens doors that professional introductions cannot.",
  },

  chunks: [
    {
      id: 'ndinofarira',
      target: 'Ndinofarira...',
      native: 'I enjoy / I am fond of...',
      literal: 'I-am-fond-of...',
      emoji: '❤️',
      phonetic: 'ndi-no-fa-RI-ra',
      audioRef: null,
    },
    {
      id: 'ndinotenga',
      target: 'Ndinotenga',
      native: 'I shop / I buy things',
      literal: 'I-buy/shop',
      emoji: '🛒',
      phonetic: 'ndi-no-TEN-ga',
      audioRef: null,
    },
    {
      id: 'ndinoda_mimhanzi',
      target: 'Ndinoda mimhanzi',
      native: 'I love music',
      literal: 'I-love music',
      emoji: '🎵',
      phonetic: 'ndi-no-da mi-MHAN-zi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinofarira vs Ndinoda — enjoyment vs love',
    explanation: "'Ndinofarira' (I enjoy / I am fond of) is slightly less intense than 'ndinoda' (I love / I want). Both can describe preferences. 'Ndinoda mimhanzi' = I love music. 'Ndinofarira mimhanzi' = I enjoy music. Learn both — they shade meaning.",
    examples: [
      { target: 'Ndinoda mimhanzi', native: 'I love music' },
      { target: 'Ndinofarira kutenga', native: 'I enjoy shopping' },
      { target: 'Ndinofarira kurima', native: 'I enjoy farming/gardening' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndinofarira', right: 'I enjoy / I am fond of' },
        { left: 'Ndinotenga', right: 'I shop / I buy things' },
        { left: 'Ndinoda mimhanzi', right: 'I love music' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you enjoy something',
      sentence: 'Ndinofarira _____ mimhanzi.',
      options: ['kuterera', 'kuona', 'kufamba'],
      correct: 'kuterera',
      context: "You enjoy listening to music.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I enjoy / I am fond of... (just the phrase)',
      correct: ['Ndinofarira', 'ndinofarira'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I love music' in Shona?",
      question: 'Choose the correct phrase',
      options: [
        { text: 'Ndinoda mimhanzi', correct: true },
        { text: 'Ndinofarira mimhanzi', correct: false },
        { text: 'Ndine mimhanzi', correct: false },
      ],
      explanation: "Both 'ndinoda' and 'ndinofarira' work — but 'ndinoda mimhanzi' (I love/want music) expresses deeper feeling. 'Ndinofarira' = I enjoy, 'ndinoda' = I love.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I love music"',
      words: ['mimhanzi', 'Ndinoda'],
      correct: ['Ndinoda', 'mimhanzi'],
      translation: 'I love music',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I shop / I buy things',
      correct: ['Ndinotenga', 'ndinotenga'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to know what makes you happy beyond work. Share your passion.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Unofarira chii muhupenyu hwako? Basa racho, zvinoita mufaro wako.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoda mimhanzi. Ndinofarira kuterera nzeve dzengu.', native: 'I love music. I enjoy listening with my ears.', correct: true, feedback: "You shared something real about yourself. Rwen leans in." },
          { target: 'Ndinofarira kudzidza', native: 'I enjoy learning', correct: false, feedback: "That's true — go further and name something personal beyond learning." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know what you enjoy — name it with 'Ndinoda...' or 'Ndinofarira...'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Ndinoda mimhanzi zvakare! Tine chinhu chimwe chatinoshanda nacho.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Shared joy is the fastest bridge between two people — in any language.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I enjoy / I am fond of... (phrase)', correct: ['Ndinofarira', 'ndinofarira'] },
      { prompt: 'I love music', correct: ['Ndinoda mimhanzi', 'ndinoda mimhanzi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name your favourite thing — music, sport, food, anything. Say 'Ndinoda...' or 'Ndinofarira...' followed by it. Own that feeling in Shona.",
    rwenSignoff: "What you love makes you who you are. Famba zvakanaka.",
  },
};

export default lesson;
