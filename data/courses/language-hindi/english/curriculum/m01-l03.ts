import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-suprabhat',
  module: 1,
  lesson: 3,
  title: 'Suprabhat — Good Morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Most Indians use 'Namaste' anytime. But there's a more poetic, time-tied greeting too — 'Suprabhat' for good morning. You'll hear it in temples at dawn, in old Hindi films, in Sanskrit-flavoured Hindi. Today we add it to your toolkit.",
    culturalNote: "'Suprabhat' (सुप्रभात) is Sanskrit-rooted Hindi — su (good) + prabhat (dawn). It's slightly formal and lyrical. In casual Hinglish people just say 'Good morning'. But hearing 'Suprabhat' from a foreigner makes Indians light up — it shows you went deeper than the textbook.",
  },

  chunks: [
    {
      id: 'suprabhat',
      target: 'सुप्रभात',
      native: 'Good morning (formal/lyrical)',
      literal: 'Suprabhat — su (good) + prabhat (dawn)',
      emoji: '🌅',
      phonetic: 'soo-pruh-BHAAT',
      audioRef: null,
    },
    {
      id: 'subah_subah',
      target: 'सुबह सुबह',
      native: 'Early in the morning (idiomatic doubling)',
      literal: 'Subah subah — morning morning (very early)',
      emoji: '🌄',
      phonetic: 'SU-bah SU-bah',
      audioRef: null,
    },
    {
      id: 'kahaan_ja_rahe_ho',
      target: 'कहाँ जा रहे हो?',
      native: 'Where are you going? (informal)',
      literal: 'Kahaan ja rahe ho — where going are (you-friend)?',
      emoji: '🚶',
      phonetic: 'kah-HAAN JAA RAH-eh HO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greetings',
    explanation: "Hindi has a Sanskrit-rooted set for time of day: Suprabhat (good morning), Shubh dopahar (good afternoon), Shubh sandhya (good evening), Shubh ratri (good night). Most everyday Indians just use 'Namaste' instead — but knowing these makes you sound educated and poetic.",
    examples: [
      { target: 'Suprabhat', native: 'Good morning (formal)' },
      { target: 'Shubh dopahar', native: 'Good afternoon (formal)' },
      { target: 'Namaste', native: 'Hello (anytime — the universal default)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to the time of day',
      pairs: [
        { left: 'Suprabhat', right: 'Good morning (formal)' },
        { left: 'Shubh dopahar', right: 'Good afternoon (formal)' },
        { left: 'Subah subah', right: 'Very early in the morning' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'It is 6am. You greet your yoga teacher at the studio. What is the most respectful greeting?',
      question: 'Choose the most fitting morning greeting',
      options: [
        { text: 'Suprabhat', correct: true },
        { text: 'Kya haal hai?', correct: false },
        { text: 'Shubh sandhya', correct: false },
      ],
      explanation: "'Suprabhat' fits the formal, dawn setting of a yoga studio. 'Kya haal hai?' is too casual; 'Shubh sandhya' means good evening.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the morning greeting',
      sentence: '_____, aap kaise hain?',
      options: ['Suprabhat', 'Shubh ratri', 'Kya haal hai'],
      correct: 'Suprabhat',
      context: 'You are greeting an elder at 7am.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Good morning (formal/lyrical)',
      correct: ['Suprabhat', 'suprabhat'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full morning greeting',
      words: ['hain?', 'Suprabhat,', 'aap', 'kaise'],
      correct: ['Suprabhat,', 'aap', 'kaise', 'hain?'],
      translation: 'Good morning, how are you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Where are you going? (informal)',
      correct: ['Kahaan ja rahe ho?', 'Kahaan ja rahe ho', 'kahaan ja rahe ho?', 'kahaan ja rahe ho', 'Kahan ja rahe ho?', 'kahan ja rahe ho?'],
    },
  ],

  rwenDialogue: {
    intro: "It's 6:30am at a riverside ghat in Rishikesh. An elderly yoga instructor is rolling out his mat. Greet him in the lyrical morning form.",
    lines: [
      {
        speaker: 'npc',
        target: 'सुप्रभात',
        native: 'Suprabhat (Good morning)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Suprabhat, aap kaise hain?', native: 'Good morning, how are you? (formal)', correct: true, feedback: "Excellent — you matched the dawn register and showed real interest." },
          { target: 'Kya haal hai?', native: "What's up?", correct: false, feedback: "Too casual for a yoga master at sunrise. Use 'Suprabhat, aap kaise hain?'." },
          { target: 'Shubh ratri', native: 'Good night', correct: false, feedback: "It's morning, not bedtime. 'Suprabhat' is what you want." },
        ],
      },
      {
        speaker: 'npc',
        target: 'मैं ठीक हूँ, धन्यवाद',
        native: 'I am well, thank you',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the moment. Sanskrit-rooted Hindi at sunrise — that's how poetry sounds in real life.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good morning (formal/lyrical)', correct: ['Suprabhat', 'suprabhat'] },
      { prompt: 'Good afternoon (formal)', correct: ['Shubh dopahar', 'shubh dopahar'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Suprabhat' as a morning greeting today — text it to a friend, say it in your head, or to anyone. Notice how it feels different from 'Good morning'.",
    rwenSignoff: "Mornings have their own music. Phir milenge.",
  },

  phase8: {
    scenario: "It's 6am at the ghats in Varanasi. Mist on the Ganges, bells from a small temple, an elderly priest finishing his morning aarti. He sees you and folds his hands. The whole atmosphere is asking for a greeting that matches the dawn.",
    rwenRole: "Pandit-ji — temple priest, ~68, soft-spoken Sanskrit scholar; he visibly warms when foreigners use the lyrical morning form rather than rushing to 'Namaste'.",
    successCriteria: "User opens with 'Suprabhat' (NOT just 'Namaste' or English 'Good morning' — it's a dawn moment with a priest), follows with the formal 'Aap kaise hain?' because he's elder + religious figure, and avoids casual Hinglish like 'Kya haal hai' which would clash with the temple register.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
