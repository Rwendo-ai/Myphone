import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-kuona',
  module: 8,
  lesson: 7,
  title: 'Kuona — To See',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Ndinoona' (I see) goes far beyond eyesight in Shona — it means understanding, recognising, perceiving. When Rwen says 'Unoona here?' he's asking both 'Do you see?' and 'Do you understand?' Sight and insight are one.",
    culturalNote: "In Shona philosophy, seeing and understanding are connected. 'Ona' (look/see) is used when showing someone something important — 'Ona mwanangu' (Look, my child) carries the weight of teaching and revelation.",
  },

  chunks: [
    {
      id: 'ndinoona',
      shona: 'Ndinoona',
      english: 'I see / I understand',
      literal: 'I-see (habitual)',
      emoji: '👁️',
      phonetic: 'ndi-no-O-na',
      audioRef: null,
    },
    {
      id: 'ndaona',
      shona: 'Ndaona',
      english: 'I saw / I have seen',
      literal: 'I-saw (completed)',
      emoji: '✅',
      phonetic: 'nda-O-na',
      audioRef: null,
    },
    {
      id: 'ona',
      shona: 'Ona!',
      english: 'Look! / See this!',
      literal: 'See! (command)',
      emoji: '👀',
      phonetic: 'O-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kuona — see and understand together',
    explanation: "'Unoona here?' can mean both 'Do you see?' (physically) and 'Do you understand?' Context tells you which. This double meaning is a window into Shona philosophy — physical and intellectual sight are one concept.",
    examples: [
      { shona: 'Ndinoona', english: 'I see / I understand' },
      { shona: 'Ndaona zimbabwe — yakanaka', english: 'I saw Zimbabwe — it is beautiful' },
      { shona: 'Ona chinhu ichi', english: 'Look at this thing' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndinoona', right: 'I see / I understand' },
        { left: 'Ndaona', right: 'I saw (past)' },
        { left: 'Ona!', right: 'Look! (command)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you understand',
      sentence: 'Ndi_____ — ndanzwisisa.',
      options: ['noona', 'noenda', 'nofara'],
      correct: 'noona',
      context: "I see — I understand.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I see / I understand',
      correct: ['Ndinoona', 'ndinoona'],
    },
    {
      type: 'multiple_choice',
      instruction: "Rwen says 'Unoona here?' What might he be asking?",
      question: 'Unoona here? can mean:',
      options: [
        { text: 'Both "Do you see?" and "Do you understand?"', correct: true },
        { text: 'Only "Do you see?" (physically)', correct: false },
        { text: 'Only "Do you understand?"', correct: false },
      ],
      explanation: "In Shona, sight and understanding share the same verb. Context tells you which is meant — but both are always present.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Look — the family is here'",
      words: ['Ona', '—', 'mhuri', 'iri', 'pano.'],
      correct: ['Ona', '—', 'mhuri', 'iri', 'pano.'],
      translation: 'Look — the family is here',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I saw (past)',
      correct: ['Ndaona', 'ndaona'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen shows you something beautiful in his garden and asks if you see it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ona chinhu ichi — muti wakakura. Unoona here mhizha yarwo?",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinoona! Muti uyu wakanaka zvikuru. Ndaona miti yakadai muZimbabwe here?', english: "I see it! This tree is very beautiful. Have I seen trees like this in Zimbabwe?", correct: true, feedback: "You saw, you appreciated, you asked a follow-up. That's genuine curiosity in Shona." },
          { shona: 'Ndinoona', english: 'I see', correct: false, feedback: "Add appreciation — 'Ndinoona! Muti uyu wakanaka zvikuru.' Show you're moved by what you see." },
          { shona: 'Handioni', english: "I don't see it", correct: false, feedback: "Ha- negation of ona = Handioni (I don't see). But the tree is right there — 'Ndinoona!' — I see it!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndaona miti yakadai — kuMasvingo, pedyo neGreat Zimbabwe. Ndichaenda nawe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I see / I understand', correct: ['Ndinoona', 'ndinoona'] },
      { prompt: 'Look! (command)', correct: ['Ona!', 'ona!', 'Ona', 'ona'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find something beautiful today and say 'Ona! [describe it]. Zvakanakisisa.' Point at it, name it, appreciate it — in Shona.",
    rwenSignoff: "See more. Understand more. They are the same journey. Famba zvakanaka.",
  },
};

export default lesson;
