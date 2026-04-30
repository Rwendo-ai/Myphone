import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-wabva-kupi',
  module: 1,
  lesson: 7,
  title: 'Wabva Kupi? — Where Are You From?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, 'where are you from?' isn't just curiosity — it's connection. Your origin tells your story. People bond over shared provinces, villages, or neighbouring countries. Let's learn how to share that.",
    culturalNote: "Knowing someone's origin in Zimbabwe unlocks conversation. It can reveal shared relatives, languages, or history. Asking 'Wabva kupi?' is an act of genuine interest, not interrogation.",
  },

  chunks: [
    {
      id: 'wabva_kupi',
      shona: 'Wabva kupi?',
      english: 'Where are you from?',
      literal: 'You-came-from where?',
      emoji: '🗺️',
      phonetic: 'WAH-bva ku-pi',
      audioRef: null,
    },
    {
      id: 'ndabva_ku',
      shona: 'Ndabva ku...',
      english: 'I am from...',
      literal: 'I-came-from (place)...',
      emoji: '📍',
      phonetic: 'NDA-bva ku',
      audioRef: null,
    },
    {
      id: 'ndinogara_ku',
      shona: 'Ndinogara ku...',
      english: 'I live in...',
      literal: 'I-stay/live at (place)...',
      emoji: '🏡',
      phonetic: 'ndi-no-GAH-ra ku',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ku- marks a place',
    explanation: "'Ku' before a place name means 'at', 'in', or 'from' that place. It's a locative prefix — one of Shona's most useful tools. Stick 'ku' before any place name and you've located yourself.",
    examples: [
      { shona: 'Ndabva ku Zimbabwe', english: 'I am from Zimbabwe' },
      { shona: 'Ndinogara ku Harare', english: 'I live in Harare' },
      { shona: 'Wabva ku South Africa?', english: 'Are you from South Africa?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Wabva kupi?', right: 'Where are you from?' },
        { left: 'Ndabva ku...', right: 'I am from...' },
        { left: 'Ndinogara ku...', right: 'I live in...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence about where you live',
      sentence: 'Ndinogara _____ London.',
      options: ['ku', 'wa', 'ndi'],
      correct: 'ku',
      context: "Tell someone you live in London.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Where are you from?',
      correct: ['Wabva kupi?', 'wabva kupi?', 'Wabva kupi', 'wabva kupi'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am from Zimbabwe"',
      words: ['Zimbabwe', 'Ndabva', 'ku'],
      correct: ['Ndabva', 'ku', 'Zimbabwe'],
      translation: 'I am from Zimbabwe',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I live in... (the start of the phrase)',
      correct: ['Ndinogara ku', 'ndinogara ku'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Ndabva ku Bulawayo". What does this tell you?',
      question: 'What does this sentence mean?',
      options: [
        { text: 'I am from Bulawayo', correct: true },
        { text: 'I live in Bulawayo', correct: false },
        { text: 'I am going to Bulawayo', correct: false },
      ],
      explanation: "'Ndabva' means 'I came from' — origin. 'Ndinogara' would mean 'I live in' — current home.",
    },
  ],

  rwenDialogue: {
    intro: "Rwen is curious about you. A real conversation is starting.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Wabva kupi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndabva ku...', english: 'I am from... (your country)', correct: true, feedback: "Perfect — you shared your origin. That's connection in Shona." },
          { shona: 'Ndinogara ku...', english: 'I live in...', correct: false, feedback: "Close — but they asked where you're FROM, not where you live. Use 'Ndabva ku...'." },
          { shona: 'Zita rangu ndi...', english: 'My name is...', correct: false, feedback: "That's your name, not your origin. They asked 'Wabva kupi?' — where you're from." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wakanaka! Ndinogara ku Zimbabwe — ndinofarira nyika yangu.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Origin shared, connection made. You're having a real Shona conversation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where are you from? (in Shona)', correct: ['Wabva kupi?', 'wabva kupi?', 'Wabva kupi', 'wabva kupi'] },
      { prompt: 'I am from... (start of the phrase)', correct: ['Ndabva ku', 'ndabva ku'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone where you're from using Shona today — 'Ndabva ku [your country/city]'. Even in your head counts.",
    rwenSignoff: "Your origin is your story. Famba zvakanaka.",
  },
};

export default lesson;
