import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-ndapota',
  module: 2,
  lesson: 1,
  title: 'Ndapota — Please',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've mastered greetings. Now let's get things done. In any new language, 'please' is the key that unlocks doors. In Shona it also signals that you're asking, not demanding.",
    culturalNote: "Shona culture values politeness deeply. Adding 'ndapota' to a request transforms it from a command into an invitation. Skipping it — especially with elders — can come across as rude, even unintentionally.",
  },

  chunks: [
    {
      id: 'ndapota',
      target: 'Ndapota',
      native: 'Please',
      literal: 'I ask / I beg',
      emoji: '🙏',
      phonetic: 'NDA-po-ta',
      audioRef: null,
    },
    {
      id: 'ndibatsire',
      target: 'Ndibatsire, ndapota',
      native: 'Please help me',
      literal: 'Help-me, I-ask',
      emoji: '🤝',
      phonetic: 'ndi-bat-SI-re NDA-po-ta',
      audioRef: null,
    },
    {
      id: 'zvinoenderana',
      target: 'Zvinoenderana',
      native: "You're welcome / It's fine",
      literal: 'It-goes-along / It matches',
      emoji: '✅',
      phonetic: 'zvi-no-en-de-RAH-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndapota — the politeness key',
    explanation: "'Ndapota' can go at the start or end of any request. It works like a key — put it in and the door opens more easily. It literally means 'I ask/beg' and softens whatever comes with it.",
    examples: [
      { target: 'Ndapota, ndiudze...', native: 'Please tell me...' },
      { target: 'Ndibatsire, ndapota', native: 'Please help me' },
      { target: 'Zvinoenderana', native: "You're welcome (reply to ndatenda)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndapota', right: 'Please' },
        { left: 'Ndibatsire', right: 'Help me' },
        { left: 'Zvinoenderana', right: "You're welcome" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add please to make this polite',
      sentence: 'Ndibatsire, _____.',
      options: ['ndapota', 'ndatenda', 'ndiripo'],
      correct: 'ndapota',
      context: 'You need directions from a stranger.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Please',
      correct: ['Ndapota', 'ndapota'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please help me"',
      words: ['ndapota', 'Ndibatsire,'],
      correct: ['Ndibatsire,', 'ndapota'],
      translation: 'Please help me',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "You're welcome / It's fine",
      correct: ['Zvinoenderana', 'zvinoenderana'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone says "Ndatenda" (thank you). What do you reply?',
      question: 'Choose the correct response',
      options: [
        { text: 'Zvinoenderana', correct: true },
        { text: 'Ndapota', correct: false },
        { text: 'Ndiripo', correct: false },
      ],
      explanation: "'Zvinoenderana' is the natural reply to 'Ndatenda' — like 'you're welcome' or 'no problem'.",
    },
  ],

  rwenDialogue: {
    intro: "You're lost. A local is standing nearby. Ask for help politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndibatsire, ndapota', native: 'Please help me', correct: true, feedback: "Polite and clear. They stop and smile." },
          { target: 'Ndibatsire', native: 'Help me', correct: false, feedback: "Grammatically fine but adding 'ndapota' makes it a request, not a command." },
          { target: 'Makadii?', native: 'How are you?', correct: false, feedback: "A good start to any conversation — but follow it with your actual request." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hongu, ndinokubatsira.',
        native: 'Yes, I will help you.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda zvikuru', native: 'Thank you very much', correct: true, feedback: "Warm and genuine. The interaction ends well." },
          { target: 'Zvinoenderana', native: "You're welcome", correct: false, feedback: "That's the reply TO thank you — not the thank you itself." },
          { target: 'Ndapota', native: 'Please', correct: false, feedback: "They've already helped you — now it's time to thank them." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "One word — ndapota — and the whole interaction changed. That's the power of politeness.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please', correct: ['Ndapota', 'ndapota'] },
      { prompt: "You're welcome / No problem", correct: ['Zvinoenderana', 'zvinoenderana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Add 'ndapota' to every request you make today — even internally. Notice how it changes the feeling of asking.",
    rwenSignoff: "Politeness opens every door. Famba zvakanaka.",
  },
};

export default lesson;
