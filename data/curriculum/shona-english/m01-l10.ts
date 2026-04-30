import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is it. Everything from this module — in one conversation. No new words today. Just you, me, and the language you've built. Let's see what you can do.",
    culturalNote: "A full first encounter in Shona flows like this: time-appropriate greeting → wellness check → name exchange → origin → farewell blessing. Each step builds trust. By the end, you're not strangers.",
  },

  chunks: [
    {
      id: 'review_makadii',
      target: 'Makadii?',
      native: 'How are you? (universal safety net)',
      literal: 'You how-are?',
      emoji: '🤝',
      phonetic: 'ma-kah-DEE',
      audioRef: null,
    },
    {
      id: 'review_zita',
      target: 'Zita rako ndiani?',
      native: 'What is your name?',
      literal: 'Name your it-is-who?',
      emoji: '🏷️',
      phonetic: 'ZI-ta ra-ko ndi-AH-ni',
      audioRef: null,
    },
    {
      id: 'review_famba',
      target: 'Famba zvakanaka',
      native: 'Go well (said by the one staying)',
      literal: 'Go that-is-well',
      emoji: '🚶',
      phonetic: 'FAM-ba zva-ka-NAH-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Full Greeting Flow',
    explanation: "A complete Shona first encounter has five beats. Each one matters. Miss a step and the conversation feels incomplete.",
    examples: [
      { target: 'Mangwanani / Makadii', native: '1. Time greeting' },
      { target: 'Mamuka sei? / Makadii?', native: '2. Wellness check' },
      { target: 'Zita rako ndiani?', native: '3. Name exchange' },
      { target: 'Wabva kupi?', native: '4. Origin' },
      { target: 'Famba / Sara zvakanaka', native: '5. Farewell blessing' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each step to the right phrase',
      pairs: [
        { left: 'Time greeting', right: 'Mangwanani / Masikati / Manheru' },
        { left: 'Wellness check', right: 'Makadii? / Maswera sei?' },
        { left: 'Farewell (you are staying)', right: 'Famba zvakanaka' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's morning. A stranger greets you: 'Mangwanani, makadii?' — what is the BEST reply?",
      question: 'Choose the complete, natural reply',
      options: [
        { text: 'Ndiripo, makadiiwo. Zita rangu ndi...', correct: true },
        { text: 'Mangwanani', correct: false },
        { text: 'Ndiripo', correct: false },
      ],
      explanation: "The best reply answers the wellness check AND continues the conversation naturally with your name.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'What is your name? (asking someone)',
      correct: ['Zita rako ndiani?', 'zita rako ndiani?', 'Zita rako ndiani', 'zita rako ndiani'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the farewell — you are staying, they are leaving',
      sentence: '_____ zvakanaka!',
      options: ['Famba', 'Sara', 'Hona'],
      correct: 'Famba',
      context: 'Your new friend is heading home after a great conversation.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am well, and how are you?"',
      words: ['makadiiwo?', 'Ndiripo,'],
      correct: ['Ndiripo,', 'makadiiwo?'],
      translation: 'I am well, and how are you?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'We will see each other again',
      correct: ['Tichaonana', 'tichaonana'],
    },
  ],

  rwenDialogue: {
    intro: "A full conversation. You've earned this. I'll be the stranger — you lead the whole exchange.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Makadii?', native: 'How are you?', correct: true, feedback: "Strong opening — universal and respectful. The conversation begins." },
          { target: 'Hesi', native: 'Hey (casual)', correct: false, feedback: "Too casual for a first meeting with a stranger. 'Makadii?' opens the door more warmly." },
          { target: 'Wamuka sei?', native: 'How did you wake? (informal)', correct: false, feedback: "Reserve informal greetings for friends. With a stranger, start with 'Makadii?'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ndiripo, makadiiwo? Zita rako ndiani?',
        native: 'I am well, and you? What is your name?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndiripo. Zita rangu ndi... Wabva kupi?', native: "I'm well. My name is... Where are you from?", correct: true, feedback: "You answered and kept the conversation going. That's fluency in action." },
          { target: 'Ndiripo', native: "I'm well", correct: false, feedback: "Good start — but answer their name question too. Use 'Zita rangu ndi...' to introduce yourself." },
          { target: 'Makadii?', native: 'How are you?', correct: false, feedback: "They already asked you — now share your name with 'Zita rangu ndi...'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wakanaka kukuziva. Ndabva ku Harare. Famba zvakanaka!',
        native: "Nice to meet you. I'm from Harare. Go well!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sara zvakanaka. Tichaonana!', native: 'Stay well. See you again!', correct: true, feedback: "You blessed them correctly — they're staying, so you said 'Sara'. And 'Tichaonana' closes it beautifully." },
          { target: 'Famba zvakanaka', native: 'Go well', correct: false, feedback: "They said 'Famba zvakanaka' to you — now YOU say 'Sara zvakanaka' back (you're the one leaving)." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Close — but this is a farewell moment. Use 'Sara zvakanaka' and 'Tichaonana'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A complete Shona conversation. Greeting to goodbye — with warmth, respect, and curiosity. You did it. Tsika Initiate.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Go well (you are staying)', correct: ['Famba zvakanaka', 'famba zvakanaka'] },
      { prompt: 'Stay well (you are leaving)', correct: ['Sara zvakanaka', 'sara zvakanaka'] },
    ],
  },

  mission: {
    title: "Your Module 1 Mission",
    task: "Have a complete Shona first encounter today — even if it's with yourself in the mirror. Greeting, wellness check, name, origin, farewell. All five beats.",
    rwenSignoff: "You've walked through Module 1. The door to Shona is open. Tichaonana — we will meet again in Module 2.",
  },
};

export default lesson;
