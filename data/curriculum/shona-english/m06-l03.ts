import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-time',
  module: 6,
  lesson: 3,
  title: 'Nguva — What\'s the Time?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time in Zimbabwe runs differently. There's a concept called 'African time' — but that's not laziness, it's different priorities. Relationships come first. Still, knowing how to ask and tell the time is essential for appointments and markets.",
    culturalNote: "Shona time-telling uses a 12-hour system. Importantly, Shona traditionally counted hours from sunrise (6am = hour 1). So 'iri yega' (it's one o'clock) in traditional Shona means 7am. Modern Shona uses the Western system — be aware of context.",
  },

  chunks: [
    {
      id: 'nguva_ngani',
      target: 'Nguva ngani?',
      native: 'What time is it?',
      literal: 'Time how-many?',
      emoji: '🕐',
      phonetic: 'NGU-va nga-ni',
      audioRef: null,
    },
    {
      id: 'iri_yega',
      target: 'Iri yega / Iri mbiri',
      native: "It's one o'clock / It's two o'clock",
      literal: "It-is one / It-is two",
      emoji: '⏰',
      phonetic: 'I-ri YE-ga / I-ri MBI-ri',
      audioRef: null,
    },
    {
      id: 'manheru_masikati',
      target: 'Manheru / Masikati',
      native: 'Evening (pm) / Afternoon',
      literal: 'Evening / Daytime',
      emoji: '🌅🌆',
      phonetic: 'man-HE-ru / ma-si-KA-ti',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Iri + number = it's [time] o'clock",
    explanation: "'Iri' means 'it is' (for impersonal statements like time). Iri yega (1 o'clock), iri mbiri (2 o'clock), iri tatu (3 o'clock). Add manheru (pm/evening) or masikati (pm/afternoon) for clarity.",
    examples: [
      { target: 'Iri yega', native: "It's one o'clock" },
      { target: 'Iri tatu masikati', native: "It's 3pm" },
      { target: 'Iri nomwe manheru', native: "It's 7pm" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the time phrase to its meaning',
      pairs: [
        { left: 'Nguva ngani?', right: "What time is it?" },
        { left: 'Iri yega', right: "It's one o'clock" },
        { left: 'Iri mbiri', right: "It's two o'clock" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Ask what time it is",
      sentence: 'Nguva _____?',
      options: ['ngani', 'mangani', 'chii'],
      correct: 'ngani',
      context: "You need to know if you're late.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'What time is it?',
      correct: ['Nguva ngani?', 'nguva ngani?', 'Nguva ngani', 'nguva ngani'],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 3 o'clock in the afternoon. How do you say that?",
      question: "3pm in Shona:",
      options: [
        { text: 'Iri tatu masikati', correct: true },
        { text: 'Iri tatu manheru', correct: false },
        { text: 'Iri tatu mangwanani', correct: false },
      ],
      explanation: "Masikati = afternoon/pm. Manheru = evening. Iri tatu masikati = it's 3pm.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'It's five o'clock'",
      words: ['Iri', 'shanu.'],
      correct: ['Iri', 'shanu.'],
      translation: "It's five o'clock",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "It's two o'clock",
      correct: ['Iri mbiri', 'iri mbiri'],
    },
  ],

  rwenDialogue: {
    intro: "You need to meet someone at 3pm. Check the time.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nguva ngani, ndapota?', native: 'What time is it, please?', correct: true, feedback: "Polite and correct. Perfect way to ask the time from a stranger." },
          { target: 'Iri tatu?', native: "Is it three o'clock?", correct: false, feedback: "You're guessing — ask properly: 'Nguva ngani, ndapota?'" },
          { target: 'Mangani?', native: 'How many?', correct: false, feedback: "Mangani is for counting things. For time: 'Nguva ngani, ndapota?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Iri tatu masikati.',
        native: "It's 3pm.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Iri tatu masikati — you understood, you responded, you're on time. That's fluency.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What time is it?', correct: ['Nguva ngani?', 'nguva ngani?', 'Nguva ngani', 'nguva ngani'] },
      { prompt: "It's one o'clock", correct: ['Iri yega', 'iri yega'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every hour today, say the time in Shona — even just in your head. 'Iri yega' at 1pm, 'Iri mbiri' at 2pm. Make time Shona.",
    rwenSignoff: "Nguva ndiyo pfuma — time is wealth. Famba zvakanaka.",
  },
};

export default lesson;
