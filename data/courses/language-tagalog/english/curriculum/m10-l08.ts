import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Pag-asa — Hope',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today we learn one of the most beautiful words in Tagalog: **sana**. It means 'I hope' — but more than that. It means 'would that...' a wish whispered to the universe. Sana umulan. Sana magkita tayo. One word holds a whole prayer.",
    culturalNote: "**Sana** lives at the heart of Filipino daily speech — said before exams, before goodbyes, before flights. There's no exact English word for it; 'I hope' is the closest, but sana also carries a soft 'if only' / 'may it be that...' tone. Filipinos use it dozens of times a day.",
  },

  chunks: [
    {
      id: 'sana',
      target: 'Sana...',
      native: "I hope... / would that...",
      literal: '(particle of wish/hope)',
      emoji: '🌠',
      phonetic: 'SA-na',
      audioRef: null,
    },
    {
      id: 'balang_araw',
      target: 'Balang araw...',
      native: 'One day...',
      literal: 'Some-day',
      emoji: '🌅',
      phonetic: 'BA-lang A-raw',
      audioRef: null,
    },
    {
      id: 'pangarap_ko',
      target: 'Pangarap ko...',
      native: 'I dream of... / My dream is...',
      literal: 'Dream my',
      emoji: '💫',
      phonetic: 'pa-NGA-rap ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sana — the hope particle',
    explanation: "**Sana** sits at the front of a sentence and turns whatever follows into a wish. *Sana umulan* = 'I hope it rains' / 'would that it rains'. *Sana magkita tayo* = 'I hope we meet'. There's no English equivalent — it's gentler than 'I hope', closer to 'may it be...'. Pair it with **balang araw** (one day) and **pangarap ko** (my dream is) to talk about the future.",
    examples: [
      { target: 'Sana umulan', native: 'I hope it rains' },
      { target: 'Sana magkita tayo balang araw', native: 'I hope we meet one day' },
      { target: 'Pangarap ko ang mag-aral sa Pilipinas', native: 'My dream is to study in the Philippines' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Sana...', right: 'I hope... / would that...' },
        { left: 'Balang araw...', right: 'One day...' },
        { left: 'Pangarap ko...', right: 'I dream of...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You miss your kaibigan in Cebu. Wish for a future visit.',
      sentence: '_____ magkita tayo ulit.',
      options: ['Sana', 'Hindi', 'Galit'],
      correct: 'Sana',
      context: "Sana goes at the very front of a wish — 'I hope we meet again'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'One day...',
      correct: ['Balang araw', 'balang araw', 'Balang araw...'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I hope it rains"',
      words: ['umulan', 'Sana'],
      correct: ['Sana', 'umulan'],
      translation: 'I hope it rains',
    },
    {
      type: 'multiple_choice',
      instruction: 'Your kaibigan is taking a tough exam tomorrow. You want to wish her well.',
      question: 'Which is the most natural Tagalog blessing?',
      options: [
        { text: 'Sana pumasa ka', correct: true },
        { text: 'Galit ako', correct: false },
        { text: 'Masakit ang ulo ko', correct: false },
      ],
      explanation: "Sana pumasa ka = 'I hope you pass'. The classic Filipino good-luck whisper.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My dream is...',
      correct: ['Pangarap ko', 'pangarap ko', 'Pangarap ko...'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a long bus ride in Baguio with a new friend. The conversation has gotten quiet and honest. She turns to you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ano ang pangarap mo?',
        native: 'What is your dream?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pangarap ko ang matuto ng Tagalog. Sana balang araw, magaling na ako.', native: 'My dream is to learn Tagalog. I hope one day I will be good at it.', correct: true, feedback: "Three of today's chunks woven together — pangarap, sana, balang araw. That's a whole future stitched in one breath." },
          { target: 'Masakit ang ulo ko.', native: 'My head hurts.', correct: false, feedback: "She asked about your dream — share that, save the headache for later." },
          { target: 'Sana', native: 'I hope', correct: false, feedback: 'Sana needs something after it — a verb or a wish. Try a full sentence.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ang ganda ng pangarap mo. Sana matupad.',
        native: 'Your dream is beautiful. May it come true.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Sana matupad — may it come true. That's the most Filipino blessing there is. You've earned it today.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I hope... (the wish particle)', correct: ['Sana', 'sana', 'Sana...'] },
      { prompt: 'My dream is... (in Tagalog)', correct: ['Pangarap ko', 'pangarap ko'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Whisper one wish today in Tagalog. Sana ____. Anything — sana umulan, sana okay si lola, sana mahanap ko ang susi. The word is yours now.",
    rwenSignoff: "Sana magaling ka tomorrow. Ingat ka.",
  },

  phase8: {
    scenario: "You're sitting on the steps of an old church in Vigan with a Filipino friend. The light is golden, the bell rings, and she asks softly: 'Ano ang pangarap mo? Ano ang sana mo?' (What is your dream? What is your sana?). She wants to hear your real answer.",
    rwenRole: "Maya — a Filipino friend, late 20s, thoughtful, the kind of person who asks deep questions and waits.",
    successCriteria: "User shares one real hope using 'sana' AND one dream using 'pangarap ko'. Bonus: uses 'balang araw' for a future timeframe. At least 2-3 sentences total — not one-word answers.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
