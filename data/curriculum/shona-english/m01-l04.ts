import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-manheru',
  module: 1,
  lesson: 4,
  title: 'Manheru — Good Evening',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The sun is going down. In Zimbabwe, evenings are for family — gathering, eating, sharing stories. The evening greeting carries all of that warmth. Let me teach you.",
    culturalNote: "'Manheru akanaka' isn't just 'good evening' — it's an invitation to settle in. You say it when you arrive somewhere and want to signal you're glad to be there. It opens the door to connection.",
  },

  chunks: [
    {
      id: 'manheru',
      target: 'Manheru',
      native: 'Good evening',
      literal: 'Evening',
      emoji: '🌇',
      phonetic: 'man-HEH-ru',
      audioRef: null,
    },
    {
      id: 'manheru_akanaka',
      target: 'Manheru akanaka',
      native: 'Good evening (warm, welcoming)',
      literal: 'Evening that is good',
      emoji: '🌙',
      phonetic: 'man-HEH-ru a-ka-NAH-ka',
      audioRef: null,
    },
    {
      id: 'hona',
      target: 'Hona',
      native: 'Look / See / Here',
      literal: 'Look (draws attention, shows something)',
      emoji: '👁️',
      phonetic: 'HOH-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Akanaka — the "good" modifier',
    explanation: "'Akanaka' means 'that is good' and can be added to anything to warm it up. You'll see it again and again in Shona. It's one of the most useful words in the language.",
    examples: [
      { target: 'Manheru', native: 'Evening / Good evening (simple)' },
      { target: 'Manheru akanaka', native: 'Good evening (warm, full greeting)' },
      { target: 'Zvakanaka', native: 'It is good / Good (general approval)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Manheru', right: 'Good evening (simple)' },
        { left: 'Manheru akanaka', right: 'Good evening (warm)' },
        { left: 'Hona', right: 'Look / See / Here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the warm evening greeting',
      sentence: 'Manheru _____.',
      options: ['akanaka', 'sei?', 'mese'],
      correct: 'akanaka',
      context: "You arrive at a family home for dinner — make them feel you're glad to be there.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Good evening (warm)',
      correct: ['Manheru akanaka', 'manheru akanaka'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You arrive at your friend\'s home at 7pm. What do you say first?',
      question: 'Choose the best opening greeting',
      options: [
        { text: 'Manheru akanaka', correct: true },
        { text: 'Maswera sei?', correct: false },
        { text: 'Mangwanani', correct: false },
      ],
      explanation: "'Manheru akanaka' is warm and timely. 'Maswera sei?' is afternoon — it's now evening. 'Mangwanani' is morning only.",
    },
    {
      type: 'build_sentence',
      instruction: 'Put the evening greeting in order',
      words: ['akanaka', 'Manheru'],
      correct: ['Manheru', 'akanaka'],
      translation: 'Good evening (warm)',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Good evening (simple)',
      correct: ['Manheru', 'manheru'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a family gathering at Rwen's home. Everyone looks up. Greet the room.",
    lines: [
      {
        speaker: 'npc',
        target: 'Manheru akanaka',
        native: 'Good evening (welcome)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Manheru akanaka', native: 'Good evening (warm)', correct: true, feedback: "You matched their warmth exactly. The room smiles." },
          { target: 'Manheru', native: 'Good evening', correct: false, feedback: "Correct time, but 'Manheru akanaka' is warmer — match the energy they gave you." },
          { target: 'Maswera sei?', native: 'How did you spend the day?', correct: false, feedback: "It's evening now — use 'Manheru' not the afternoon form." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hona — tauya tose',
        native: 'Look — we are all here',
      },
      {
        speaker: 'rwen',
        rwenLine: "You walked into that room with confidence. That's what the right greeting does — it opens every door.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good evening (warm, welcoming)', correct: ['Manheru akanaka', 'manheru akanaka'] },
      { prompt: 'Good evening (simple)', correct: ['Manheru', 'manheru'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Manheru akanaka' to someone tonight — a family member, a housemate, anyone. Notice how it lands differently from a simple 'hi'.",
    rwenSignoff: "Evenings are special. Toona mangwana — see you tomorrow.",
  },
};

export default lesson;
