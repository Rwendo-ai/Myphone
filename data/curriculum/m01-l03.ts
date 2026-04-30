import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-maswera-sei',
  module: 1,
  lesson: 3,
  title: 'Maswera Sei? — Afternoon Greetings',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "It's afternoon now — and using 'Mangwanani' would be like saying 'good morning' at sunset. Shona greetings are tied to the rhythm of the day. Let's learn the afternoon.",
    culturalNote: "In Shona culture, using the wrong time-of-day greeting isn't just incorrect — it shows you weren't paying attention. Matching the greeting to the moment is a form of respect.",
  },

  chunks: [
    {
      id: 'maswera_sei',
      target: 'Maswera sei?',
      native: 'How did you spend the day? (respectful)',
      literal: 'You (plural) spent-the-day how?',
      emoji: '☀️',
      phonetic: 'ma-SWEH-ra SAY',
      audioRef: null,
    },
    {
      id: 'ndaswera_maswerawo',
      target: 'Ndaswera, kana maswerawo',
      native: 'I spent well, if you also spent well',
      literal: 'I-spent-day, if you(pl)-spent-day-also',
      emoji: '✨',
      phonetic: 'nda-SWEH-ra KA-na ma-SWEH-ra-wo',
      audioRef: null,
    },
    {
      id: 'masikati',
      target: 'Masikati',
      native: 'Good afternoon',
      literal: 'Afternoon (time of day)',
      emoji: '🌤️',
      phonetic: 'mah-si-KAH-ti',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Muka vs Swera — Morning vs Afternoon root',
    explanation: "The root changes with the time of day. 'Muka' means woke — used in the morning. 'Swera' means spent the day — used from midday onwards. Same prefixes, different roots.",
    examples: [
      { target: 'Ma-muka sei?', native: 'How did you wake? (morning, respectful)' },
      { target: 'Ma-swera sei?', native: 'How did you spend the day? (afternoon, respectful)' },
      { target: 'Nd-a-swera', native: 'I spent the day (well)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to the time of day',
      pairs: [
        { left: 'Mangwanani', right: 'Morning greeting' },
        { left: 'Maswera sei?', right: 'Afternoon greeting (respectful)' },
        { left: 'Masikati', right: 'Good afternoon' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'It is 2pm. You see your neighbour. What do you say?',
      question: 'Choose the right greeting for the afternoon',
      options: [
        { text: 'Maswera sei?', correct: true },
        { text: 'Mangwanani', correct: false },
        { text: 'Wamuka sei?', correct: false },
      ],
      explanation: "'Maswera sei?' is the afternoon wellness check. 'Mangwanani' is only for the morning.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the afternoon greeting',
      sentence: 'Maswera sei? — Ndaswera, kana _____.',
      options: ['maswerawo', 'mamukawo', 'wamukawo'],
      correct: 'maswerawo',
      context: 'You are replying to an elder in the afternoon.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How did you spend the day? (to an elder)',
      correct: ['Maswera sei?', 'maswera sei?', 'Maswera sei', 'maswera sei'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full afternoon reply',
      words: ['Ndaswera,', 'maswerawo', 'kana'],
      correct: ['Ndaswera,', 'kana', 'maswerawo'],
      translation: 'I spent well, if you also spent well',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Good afternoon',
      correct: ['Masikati', 'masikati'],
    },
  ],

  rwenDialogue: {
    intro: "It's 3pm at the market. A vendor smiles at you as you approach their stall. Greet them correctly.",
    lines: [
      {
        speaker: 'npc',
        target: 'Masikati',
        native: 'Good afternoon',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Masikati. Maswera sei?', native: 'Good afternoon. How did you spend the day?', correct: true, feedback: "Excellent — you matched the moment and showed genuine interest." },
          { target: 'Mangwanani', native: 'Good morning', correct: false, feedback: "It's afternoon — 'Mangwanani' is the morning greeting. Time matters in Shona." },
          { target: 'Masikati', native: 'Good afternoon', correct: false, feedback: "Good start — but following up with 'Maswera sei?' shows you care about how they are." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ndaswera, kana maswerawo',
        native: 'I spent well, if you also spent well',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the time and the moment. That's how relationships are built in Zimbabwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How did you spend the day? (respectful, afternoon)', correct: ['Maswera sei?', 'maswera sei?', 'Maswera sei', 'maswera sei'] },
      { prompt: 'Good afternoon', correct: ['Masikati', 'masikati'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Maswera sei?' in the afternoon today — with anyone. Notice how it feels different from a simple 'hi'.",
    rwenSignoff: "The afternoon is yours. Famba zvakanaka.",
  },
};

export default lesson;
