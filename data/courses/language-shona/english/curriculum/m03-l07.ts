import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-ndinoda-kudzidza',
  module: 3,
  lesson: 7,
  title: 'Ndinoda Kudzidza — I Want to Learn',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're learning Shona. Why? That's actually one of the most interesting things about you to a Shona speaker. Let's make sure you can explain your motivation — in Shona.",
    culturalNote: "The fact that you are learning Shona at all is remarkable to most Zimbabweans. Most foreigners never try. When you explain why — in Shona — you will be remembered. This conversation is its own cultural bridge.",
  },

  chunks: [
    {
      id: 'ndinoda_kudzidza',
      target: 'Ndinoda kudzidza ChiShona',
      native: 'I want to learn Shona',
      literal: 'I-want to-learn Shona-language',
      emoji: '📚',
      phonetic: 'ndi-no-da ku-DZI-dza chi-SHO-na',
      audioRef: null,
    },
    {
      id: 'ndirikudzidza',
      target: 'Ndirikudzidza',
      native: 'I am learning (right now)',
      literal: 'I-am-learning',
      emoji: '🎓',
      phonetic: 'ndi-ri-ku-DZI-dza',
      audioRef: null,
    },
    {
      id: 'ndinoda_kutaura',
      target: 'Ndinoda kutaura ChiShona',
      native: 'I want to speak Shona',
      literal: 'I-want to-speak Shona',
      emoji: '🗣️',
      phonetic: 'ndi-no-da ku-TAU-ra chi-SHO-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinoda ku- + verb — I want to [do something]',
    explanation: "'Ndinoda ku-' followed by a verb infinitive means 'I want to [verb]'. The 'ku-' before a verb is the infinitive marker — like 'to' in English. 'Ku-dzidza' = to learn, 'ku-taura' = to speak, 'ku-enda' = to go.",
    examples: [
      { target: 'Ndinoda ku-dzidza', native: 'I want to learn' },
      { target: 'Ndinoda ku-taura', native: 'I want to speak' },
      { target: 'Ndinoda ku-enda', native: 'I want to go' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndinoda kudzidza ChiShona', right: 'I want to learn Shona' },
        { left: 'Ndirikudzidza', right: 'I am learning (right now)' },
        { left: 'Ndinoda kutaura ChiShona', right: 'I want to speak Shona' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I want to learn Shona"',
      sentence: 'Ndinoda _____ ChiShona.',
      options: ['kudzidza', 'kutaura', 'kuona'],
      correct: 'kudzidza',
      context: 'Explain why you are using Rwendo.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want to learn Shona',
      correct: ['Ndinoda kudzidza ChiShona', 'ndinoda kudzidza chishona', 'Ndinoda kudzidza Chishona'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say 'I want to speak' in Shona?",
      question: 'Choose the correct phrase',
      options: [
        { text: 'Ndinoda kutaura', correct: true },
        { text: 'Ndinoda kudzidza', correct: false },
        { text: 'Ndirikudzidza', correct: false },
      ],
      explanation: "'Kutaura' is the infinitive of 'to speak'. 'Kudzidza' is 'to learn'. Different verbs, same ndinoda ku- pattern.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am learning right now"',
      words: ['Ndirikudzidza'],
      correct: ['Ndirikudzidza'],
      translation: 'I am learning (right now)',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want to speak Shona',
      correct: ['Ndinoda kutaura ChiShona', 'ndinoda kutaura chishona', 'Ndinoda kutaura Chishona'],
    },
  ],

  rwenDialogue: {
    intro: "A Shona speaker asks why you are learning their language. This is your moment.",
    lines: [
      {
        speaker: 'npc',
        target: 'Unodzidza ChiShona sei? Nei?',
        native: 'How are you learning Shona? Why?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoda kutaura ChiShona nokuti ndinoda vanhu veZimbabwe.', native: 'I want to speak Shona because I love the people of Zimbabwe.', correct: true, feedback: "That answer will stop a conversation in its tracks — in the best way. They will remember you." },
          { target: 'Ndirikudzidza ChiShona', native: 'I am learning Shona', correct: false, feedback: "True — and add WHY. 'Nokuti...' (because...) lets you share the reason." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You do know — try 'Ndinoda kudzidza nokuti...' (I want to learn because...)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Zvakanaka zvikuru. Tinotenda zvikuru.',
        native: 'That is wonderful. We thank you very much.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You told them why. That answer changes how they see you — forever.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want to learn Shona', correct: ['Ndinoda kudzidza ChiShona', 'ndinoda kudzidza chishona', 'Ndinoda kudzidza Chishona'] },
      { prompt: 'I am learning (right now)', correct: ['Ndirikudzidza', 'ndirikudzidza'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say out loud WHY you are learning Shona — in Shona. 'Ndinoda kudzidza ChiShona nokuti...' Finish that sentence with your real reason.",
    rwenSignoff: "Your reason is your motivation. Keep it close. Famba zvakanaka.",
  },
};

export default lesson;
