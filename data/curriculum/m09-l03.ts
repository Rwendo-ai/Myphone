import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-right-left',
  module: 9,
  lesson: 3,
  title: 'Kurudyi & Kuruboshwe — Right & Left',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Right and left. Simple concept, tricky in practice — especially when someone gives you directions on the phone. In Shona: kurudyi (right) and kuruboshwe (left). Say them until they come automatically.",
    culturalNote: "In Zimbabwe as in many cultures, 'right' carries additional meaning — the right hand is used for greetings, eating, and passing things. Using the left hand for these is considered disrespectful. Kurudyi is the respectful side.",
  },

  chunks: [
    {
      id: 'kurudyi',
      shona: 'Kurudyi',
      english: 'Right (direction)',
      literal: 'To-the-right',
      emoji: '➡️',
      phonetic: 'ku-RU-dyi',
      audioRef: null,
    },
    {
      id: 'kuruboshwe',
      shona: 'Kuruboshwe',
      english: 'Left (direction)',
      literal: 'To-the-left',
      emoji: '⬅️',
      phonetic: 'ku-ru-BO-shwe',
      audioRef: null,
    },
    {
      id: 'dzokorora_kurudyi',
      shona: 'Dzokorora kurudyi',
      english: 'Turn right',
      literal: 'Turn to-the-right',
      emoji: '↩️',
      phonetic: 'dzo-ko-RO-ra ku-RU-dyi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Dzokorora + direction = turn that way',
    explanation: "'Dzokorora' means turn/rotate. Dzokorora kurudyi (turn right), Dzokorora kuruboshwe (turn left). You already know 'Dzokorora ndapota' (please repeat) — same word, different context. Shona verbs are versatile.",
    examples: [
      { shona: 'Dzokorora kurudyi', english: 'Turn right' },
      { shona: 'Dzokorora kuruboshwe', english: 'Turn left' },
      { shona: 'Uri kurudyi kwedu', english: 'You are to our right' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction to its meaning',
      pairs: [
        { left: 'Kurudyi', right: 'Right' },
        { left: 'Kuruboshwe', right: 'Left' },
        { left: 'Dzokorora kurudyi', right: 'Turn right' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the direction',
      sentence: 'Enda mberi, wobva wadzokorora _____.',
      options: ['kurudyi', 'mberi', 'shure'],
      correct: 'kurudyi',
      context: 'Go forward, then turn right.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Turn right',
      correct: ['Dzokorora kurudyi', 'dzokorora kurudyi'],
    },
    {
      type: 'multiple_choice',
      instruction: "You need to turn left at the next junction. What do you say?",
      question: 'Instruction to turn left:',
      options: [
        { text: 'Dzokorora kuruboshwe', correct: true },
        { text: 'Dzokorora kurudyi', correct: false },
        { text: 'Enda mberi', correct: false },
      ],
      explanation: "Kuruboshwe = left. Dzokorora kuruboshwe = turn left.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Go forward then turn left'",
      words: ['Enda', 'mberi,', 'dzokorora', 'kuruboshwe.'],
      correct: ['Enda', 'mberi,', 'dzokorora', 'kuruboshwe.'],
      translation: 'Go forward, then turn left',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Left (direction)',
      correct: ['Kuruboshwe', 'kuruboshwe'],
    },
  ],

  rwenDialogue: {
    intro: "You're driving with Rwen giving you directions. Focus.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Enda mberi — uone rondo — dzokorora kurudyi — wobva wadzokorora kuruboshwe. Nzira yako iyo.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Mberi — rondo — kurudyi — kuruboshwe. Ndanzwisisa!', english: 'Forward — roundabout — right — left. I understand!', correct: true, feedback: "You summarised the key directions back. Clear, confident navigation." },
          { shona: 'Dzokorora kurudyi', english: 'Turn right', correct: false, feedback: "You got part of it — there's also kuruboshwe at the end. Repeat all directions: mberi → rondo → kurudyi → kuruboshwe." },
          { shona: 'Handanzwisisi', english: "I don't understand", correct: false, feedback: "Ask Rwen to repeat: 'Dzokorora, ndapota. Taura zvishoma.' Then try again." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wasvika! You navigated. Right, left, forward — Zimbabwe's roads are yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Right (direction)', correct: ['Kurudyi', 'kurudyi'] },
      { prompt: 'Left (direction)', correct: ['Kuruboshwe', 'kuruboshwe'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you turn today — in a car, walking, anywhere — say 'Kurudyi' or 'Kuruboshwe'. Turn right? Kurudyi. Turn left? Kuruboshwe. Make turning Shona.",
    rwenSignoff: "Know your right. Know your left. Know your nzira. Famba zvakanaka.",
  },
};

export default lesson;
