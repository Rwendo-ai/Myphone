import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-survival-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine tools in your kit. Today you use them all in one scenario — navigating a real situation in Zimbabwe with nothing but what you've learned in this module. Let's see what you're made of.",
    culturalNote: "The real test of survival language is not knowing every word — it's keeping the conversation alive long enough to get what you need. Politeness, honesty about what you don't know, and asking for help will carry you further than vocabulary alone.",
  },

  chunks: [
    {
      id: 'ndinoda_kuenda',
      target: 'Ndinoda kuenda ku...',
      native: 'I want / need to go to...',
      literal: 'I-want to-go to...',
      emoji: '🚶',
      phonetic: 'ndi-no-da ku-EN-da ku',
      audioRef: null,
    },
    {
      id: 'nzira_ipi',
      target: 'Nzira ipi?',
      native: 'Which way? / Which road?',
      literal: 'Road which?',
      emoji: '🗺️',
      phonetic: 'nzi-ra I-pi',
      audioRef: null,
    },
    {
      id: 'ndatenda_rubatsiro',
      target: 'Ndatenda rubatsiro rwako',
      native: 'Thank you for your help',
      literal: 'I-thank help your',
      emoji: '🙏',
      phonetic: 'nda-TEN-da ru-bat-SI-ro rwa-ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Putting survival phrases together',
    explanation: "Real survival conversations mix everything: greetings, politeness, admitting you don't know, asking for help, understanding confirmation, and gratitude. The key is not individual phrases — it's chaining them naturally.",
    examples: [
      { target: 'Makadii? Ndibatsire ndapota.', native: 'How are you? Please help me.' },
      { target: 'Handanzwisisi — dzokorora ndapota.', native: "I don't understand — please repeat." },
      { target: 'Ndatenda zvikuru. Wakanaka.', native: 'Thank you very much. You are kind.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the survival phrase to its meaning',
      pairs: [
        { left: 'Ndinoda kuenda ku...', right: 'I need to go to...' },
        { left: 'Nzira ipi?', right: 'Which way?' },
        { left: 'Ndatenda rubatsiro rwako', right: 'Thank you for your help' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You are lost and need directions. What is your complete opening?",
      question: 'Choose the best way to start',
      options: [
        { text: 'Makadii? Ndibatsire ndapota — ndinoda kuenda ku town.', correct: true },
        { text: 'Nzira ipi?', correct: false },
        { text: 'Handizivi', correct: false },
      ],
      explanation: "Greet first, then ask for help, then state your need. That's the full chain.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I need to go to... (start of phrase)',
      correct: ['Ndinoda kuenda ku', 'ndinoda kuenda ku'],
    },
    {
      type: 'fill_blank',
      instruction: 'They speak too fast. What do you say?',
      sentence: 'Handanzwisisi — _____, ndapota.',
      options: ['dzokorora', 'ndatenda', 'ndinogona'],
      correct: 'dzokorora',
      context: 'The person giving directions spoke very quickly.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Thank you for your help"',
      words: ['rubatsiro', 'Ndatenda', 'rwako'],
      correct: ['Ndatenda', 'rubatsiro', 'rwako'],
      translation: 'Thank you for your help',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Which way? / Which road?',
      correct: ['Nzira ipi?', 'nzira ipi?', 'Nzira ipi', 'nzira ipi'],
    },
  ],

  rwenDialogue: {
    intro: "You are in Harare, lost, and need to find the post office. A stranger is nearby. Navigate this.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Makadii? Ndibatsire ndapota — ndinoda kuenda ku posvo.', native: 'How are you? Please help me — I need to go to the post office.', correct: true, feedback: "Greeting + polite request + clear need. Perfect opening." },
          { target: 'Nzira ipi?', native: 'Which way?', correct: false, feedback: "Too abrupt without a greeting. Greet first — 'Makadii?' — then ask." },
          { target: 'Ndinoda rubatsiro', native: 'I need help', correct: false, feedback: "Good instinct — add a greeting first and specify where you're going." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hongu. Enda mberi, wobva wadzokorora kurudyi.',
        native: 'Yes. Go forward, then turn right.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Handanzwisisi — taura zvishoma ndapota.', native: "I don't understand — please speak slowly.", correct: true, feedback: "Exactly right — you kept the conversation going by asking for clarity." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Only say that if you truly followed. If you didn't, use 'Handanzwisisi — taura zvishoma ndapota'." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Don't close the conversation before you have the information you need!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Enda — mberi — wobva wadzokorora — kurudyi.',
        native: 'Go — forward — then turn — right.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndanzwisisa. Ndatenda rubatsiro rwako zvikuru.', native: 'I understand. Thank you very much for your help.', correct: true, feedback: "Complete, warm, grateful. Module 2 complete. You survived — and thrived." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Good — and 'Ndatenda rubatsiro rwako zvikuru' is even warmer for someone who took the time to help." },
          { target: 'Zvinoenderana', native: "You're welcome", correct: false, feedback: "That's what they say to YOU — your line is 'Ndatenda'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Lost in Harare. Found your way — in Shona. That is what survival language does. You're ready for anything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need to go to... (start of phrase)', correct: ['Ndinoda kuenda ku', 'ndinoda kuenda ku'] },
      { prompt: 'Thank you for your help', correct: ['Ndatenda rubatsiro rwako', 'ndatenda rubatsiro rwako'] },
    ],
  },

  mission: {
    title: "Your Module 2 Mission",
    task: "Imagine you are lost somewhere in Zimbabwe today. Play through the conversation in your head — greeting, asking for help, not understanding, asking for repetition, thanking. Run it all the way through.",
    rwenSignoff: "You can survive anywhere now. Module 3 — who you are — begins next. Tichaonana.",
  },
};

export default lesson;
