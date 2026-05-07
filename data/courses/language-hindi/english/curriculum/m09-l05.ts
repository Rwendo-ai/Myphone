import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-auto-rickshaw',
  module: 9,
  lesson: 5,
  title: 'Auto-Rickshaw — Meter Chalega Kya?',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Three wheels, a green-and-yellow body, a meter that may or may not be running — the auto-rickshaw is South Asia's signature vehicle. There are millions of them across India. Today you learn the single most important phrase in the auto-rickshaw economy: 'Meter chalega kya?' — Will you run the meter?",
    culturalNote: "Every Indian auto ride starts with a negotiation. The driver might say the meter is broken (it isn't), or quote you a 'tourist price' (don't pay it). 'Meter chalega kya?' (will the meter run?) signals that you know the game. If he says no, walk to the next auto. There's always a next auto.",
  },

  chunks: [
    {
      id: 'auto',
      target: 'ऑटो',
      native: 'Auto-rickshaw',
      literal: 'Auto — three-wheeler taxi',
      emoji: '🛺',
      phonetic: 'AW-toh',
      audioRef: null,
    },
    {
      id: 'meter_chalega',
      target: 'मीटर चलेगा क्या?',
      native: 'Will the meter run?',
      literal: 'Meter chalega kya — meter will-run question?',
      emoji: '💰',
      phonetic: 'MEE-tar cha-LE-gaa kyaa',
      audioRef: null,
    },
    {
      id: 'kitna_hoga',
      target: 'कितना होगा?',
      native: 'How much will it be?',
      literal: 'Kitna hoga — how much will-be?',
      emoji: '💵',
      phonetic: 'KIT-naa HO-gaa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The auto negotiation script — three lines',
    explanation: "Every auto ride in India follows the same three-line opening: (1) Name destination — 'Connaught Place chaloge?' (2) Ask about meter — 'Meter chalega kya?' (3) If no meter, ask price — 'Kitna hoga?'. Then negotiate or walk to the next auto. Memorise the script.",
    examples: [
      { target: 'Bandra chaloge?', native: 'Will you go to Bandra?' },
      { target: 'Meter chalega kya?', native: 'Will the meter run?' },
      { target: 'Kitna hoga?', native: 'How much will it be?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the auto-rickshaw phrase to its meaning',
      pairs: [
        { left: 'Auto', right: 'Auto-rickshaw' },
        { left: 'Meter chalega kya?', right: 'Will the meter run?' },
        { left: 'Kitna hoga?', right: 'How much will it be?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the auto driver if he will run the meter',
      sentence: 'Meter _____ kya?',
      options: ['chalega', 'jaayega', 'aayega'],
      correct: 'chalega',
      context: 'Will the meter run?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How much will it be?',
      correct: ['Kitna hoga?', 'kitna hoga?', 'Kitna hoga', 'kitna hoga'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auto driver in Mumbai refuses the meter and says '300 rupees'. What's the local move?",
      question: "You don't want to pay tourist price — what do you do?",
      options: [
        { text: 'Say "nahin, dhanyavaad" and walk to the next auto', correct: true },
        { text: 'Pay 300 to avoid the hassle', correct: false },
        { text: 'Argue loudly until he agrees', correct: false },
      ],
      explanation: "There's always another auto. Walking away is the strongest negotiation move — and locals do it routinely. The next driver almost always agrees to the meter.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Brother, will you go to the airport? Will the meter run?'",
      words: ['Bhaiya,', 'airport', 'chaloge?', 'Meter', 'chalega', 'kya?'],
      correct: ['Bhaiya,', 'airport', 'chaloge?', 'Meter', 'chalega', 'kya?'],
      translation: 'Brother, will you go to the airport? Will the meter run?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Will the meter run?',
      correct: ['Meter chalega kya?', 'meter chalega kya?', 'Meter chalega kya', 'meter chalega kya'],
    },
  ],

  rwenDialogue: {
    intro: "You step out of Mumbai's Andheri station. Three autos are parked. You approach the first driver.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, Juhu chaloge? Meter chalega kya?', native: 'Brother, will you go to Juhu? Will the meter run?', correct: true, feedback: "Two-line auto opening — destination then meter. Local move. He nods and starts the meter without quoting a tourist price." },
          { target: 'Juhu jaana hai. 200 rupees?', native: 'I want to go to Juhu. 200 rupees?', correct: false, feedback: "You've already conceded by quoting a price. Always ask for the meter first: 'Meter chalega kya?' Then talk price." },
          { target: 'Juhu', native: 'Juhu', correct: false, feedback: "Just naming a place reads as tourist. Open with 'Bhaiya, Juhu chaloge? Meter chalega kya?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'हाँ मैडम, मीटर से चलूँगा। बैठिए।',
        native: "Yes madam, I'll go by the meter. Get in.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Meter chalega kya. Three Hindi words. Hundreds of rupees saved every ride. That's the language paying for itself.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Will the meter run?', correct: ['Meter chalega kya?', 'meter chalega kya?', 'Meter chalega kya', 'meter chalega kya'] },
      { prompt: 'How much will it be?', correct: ['Kitna hoga?', 'kitna hoga?', 'Kitna hoga', 'kitna hoga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the three-line auto opening out loud: '[Place] chaloge? Meter chalega kya? Kitna hoga?' Say it three times until your tongue knows the rhythm. The first time you use it in India, you'll save the cost of a meal.",
    rwenSignoff: "The auto-rickshaw is India's heartbeat. Now you can ride it on local terms. Phir milenge.",
  },

  phase8: {
    scenario: "You've stepped out of Andheri station in Mumbai at 7 PM and three auto drivers are calling out to you. The first one quotes ₹250 to Juhu without starting the meter — a clear tourist price. You need to push back politely in Hindi using the meter pattern, and if he refuses, walk to the next auto and try again. Speak only in Hindi register.",
    rwenRole: "Auto driver at Andheri East station — mid-30s, will absolutely run the meter if you ask for it in Hindi but tries his luck with English-speaking tourists; respects 'meter chalega kya?' as a signal you're not a fare to inflate.",
    successCriteria: "User opens with 'Bhaiya' (NOT just barking the destination), asks 'Meter chalega kya?' BEFORE accepting any price quote, walks away with 'Nahin, dhanyavaad' if the driver refuses (rather than negotiating up from tourist price), and only asks 'Kitna hoga?' as fallback if metered fares aren't running for that route.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
