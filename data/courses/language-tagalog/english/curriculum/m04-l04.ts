import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-sa-marker',
  module: 4,
  lesson: 4,
  title: 'Sa — Place & Destination',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English uses three words: in, at, to. Tagalog uses one — 'sa'. 'Sa Maynila' can mean 'in Manila', 'at Manila', or 'to Manila' depending on the verb. One marker, three jobs. Generous, isn't it?",
    culturalNote: "'Sa' is the third core marker. It handles location, destination, and direction — wherever there's a 'where' question, 'sa' shows up. For places involving people's names, 'sa' becomes 'kay' (which you already met in lesson 2). Same job, name version.",
  },

  chunks: [
    {
      id: 'sa_maynila',
      target: 'Sa Maynila',
      native: 'In Manila / to Manila',
      literal: 'AT Manila',
      emoji: '🏙️',
      phonetic: 'sa mai-NI-la',
      audioRef: null,
    },
    {
      id: 'sa_bahay',
      target: 'Sa bahay',
      native: 'At the house / home',
      literal: 'AT house',
      emoji: '🏠',
      phonetic: 'sa BA-hai',
      audioRef: null,
    },
    {
      id: 'sa_palengke',
      target: 'Sa palengke',
      native: 'At the market / to the market',
      literal: 'AT market',
      emoji: '🥭',
      phonetic: 'sa pa-LENG-ke',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Sa = the 'where' marker",
    explanation: "Put 'sa' before any place to say where something is, or where you're going, or where it happened. The verb tells you which one — 'sa' itself is delightfully vague. Names get 'kay' instead.",
    examples: [
      { target: 'Nasa bahay ako', native: "I'm at home" },
      { target: 'Pumunta sa palengke', native: 'Go to the market' },
      { target: 'Nakatira sa Maynila', native: 'Lives in Manila' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: "Match the Tagalog 'sa' phrase to its meaning",
      pairs: [
        { left: 'Sa Maynila', right: 'In/to Manila' },
        { left: 'Sa bahay', right: 'At the house' },
        { left: 'Sa palengke', right: 'At/to the market' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'I'm going TO the market'",
      sentence: 'Pupunta ako _____ palengke.',
      options: ['sa', 'ang', 'ng'],
      correct: 'sa',
      context: "'Sa' marks destination as well as location.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'In/to Manila',
      correct: ['Sa Maynila', 'sa Maynila', 'sa maynila'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'I live in Manila'",
      words: ['Maynila', 'ako', 'sa', 'Nakatira'],
      correct: ['Nakatira', 'ako', 'sa', 'Maynila'],
      translation: 'I live in Manila',
    },
    {
      type: 'multiple_choice',
      instruction: "Which marker would you use for 'going to Maria'?",
      question: "'Pumunta _____ Maria.'",
      options: [
        { text: 'kay', correct: true },
        { text: 'sa', correct: false },
        { text: 'ni', correct: false },
      ],
      explanation: "'Sa' is for places. For named people it switches to 'kay' — same job, name version.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'At the market',
      correct: ['Sa palengke', 'sa palengke'],
    },
  ],

  rwenDialogue: {
    intro: "A friend texts asking where you are and where you're heading.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nasaan ka?',
        native: 'Where are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nasa bahay ako, papunta sa palengke', native: "I'm at home, going to the market", correct: true, feedback: "Perfect — 'sa' for both location and destination, just as it should be." },
          { target: 'Nasa bahay ako, papunta ng palengke', native: '(wrong marker for destination)', correct: false, feedback: "'Ng' is possession. For destination, use 'sa'." },
          { target: 'Ang bahay ako', native: '(wrong marker for location)', correct: false, feedback: "'Ang' is the spotlight, not the where-marker. Use 'sa'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, magkita tayo sa palengke!',
        native: "Okay, let's meet at the market!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how 'sa palengke' worked for both 'going to' and 'meet at'? That's the magic of 'sa' — same word, the verb does the heavy lifting.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'In/to Manila (in Tagalog)',
        correct: ['Sa Maynila', 'sa Maynila', 'sa maynila'],
      },
      {
        prompt: 'At the market (in Tagalog)',
        correct: ['Sa palengke', 'sa palengke'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'sa' for three different places today. 'Pupunta ako sa kape.' 'Nasa opisina ako.' 'Sa Maynila.' Build the muscle memory — 'sa' before places, 'kay' before names.",
    rwenSignoff: "Hanggang bukas — until tomorrow. You've now met all three core markers.",
  },

  phase8: {
    scenario: "You're planning a Saturday with your cousin. They want to know where you'll be all day — your first stop, your meet-up spot, your final destination. Every answer needs 'sa'.",
    rwenRole: "Pinsan Joey — your chatty cousin in his 20s; he'll ask 'saan ka pupunta?' (where are you going?) at three different points and wants location-specific answers.",
    successCriteria: "User uses 'sa' before at least 3 different place nouns (e.g., 'sa palengke', 'sa kape shop', 'sa bahay'). If they accidentally try 'sa' with a person's name, they should self-correct to 'kay'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
