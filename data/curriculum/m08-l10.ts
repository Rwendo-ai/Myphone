import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-daily-routine',
  module: 8,
  lesson: 10,
  title: 'A Day in Shona — Full Daily Routine',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "From waking (kumuka) to sleeping (kurara), your entire day exists in Shona now. Today we narrate a full day — every action, every verb — from morning greeting to goodnight blessing. This is fluency in daily life.",
    culturalNote: "In Zimbabwe, daily rhythms are deeply communal — greetings at waking, shared meals, collective tasks, evening gathering. Describing a Shona day isn't just vocabulary — it's a portrait of Zimbabwean life.",
  },

  chunks: [
    {
      id: 'zuva_rangu',
      shona: 'Zuva rangu rinoita sei?',
      english: 'What is my day like?',
      literal: 'Day my it-does how?',
      emoji: '📅',
      phonetic: 'ZU-va ran-gu ri-no-I-ta sei',
      audioRef: null,
    },
    {
      id: 'zuva_nezuva',
      shona: 'Zuva nezuva',
      english: 'Every day / Day by day',
      literal: 'Day and-day',
      emoji: '🔁',
      phonetic: 'ZU-va ne-ZU-va',
      audioRef: null,
    },
    {
      id: 'ndakafara_nhasi',
      shona: 'Ndakafara nhasi',
      english: 'I was happy today',
      literal: 'I-was-happy today',
      emoji: '😊',
      phonetic: 'nda-ka-FA-ra NHA-si',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'A full day described in Shona verbs',
    explanation: "A Shona day: Ndamuka (I woke) → Ndadya (I ate) → Ndaenda (I went) → Ndinodzidzа (I learn) → Ndatenda (I thanked) → Ndakafara (I was happy) → Ndarara (I slept). Seven verbs, one complete human day.",
    examples: [
      { shona: 'Ndamuka — ndadya — ndaenda', english: 'I woke — I ate — I went' },
      { shona: 'Ndakafara zvikuru nhasi', english: 'I was very happy today' },
      { shona: 'Ndarara zvakanaka', english: 'I slept well' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the daily action to its Shona verb',
      pairs: [
        { left: 'Waking up', right: 'Ndamuka' },
        { left: 'Going somewhere', right: 'Ndaenda' },
        { left: 'Sleeping', right: 'Ndarara' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Describe a complete Shona daily routine — which sequence is correct?",
      question: 'Morning to night:',
      options: [
        { text: 'Ndamuka → Ndadya → Ndinodzidzа → Ndarara', correct: true },
        { text: 'Ndarara → Ndadya → Ndamuka → Ndinodzidzа', correct: false },
        { text: 'Ndinodzidzа → Ndarara → Ndadya → Ndamuka', correct: false },
      ],
      explanation: "The natural daily sequence: Wake (Ndamuka) → Eat (Ndadya) → Learn/Work (Ndinodzidzа) → Sleep (Ndarara).",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I was happy today',
      correct: ['Ndakafara nhasi', 'ndakafara nhasi'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the daily reflection',
      sentence: 'Zuva _____ ranga rakanaka.',
      options: ['rangu', 'wangu', 'yangu'],
      correct: 'rangu',
      context: 'My day was good.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I woke, ate, and went to work'",
      words: ['Ndamuka,', 'ndadya,', 'ndaenda', 'kubasa.'],
      correct: ['Ndamuka,', 'ndadya,', 'ndaenda', 'kubasa.'],
      translation: 'I woke, ate, and went to work',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Every day',
      correct: ['Zuva nezuva', 'zuva nezuva'],
    },
  ],

  rwenDialogue: {
    intro: "End of the day. Rwen asks you to describe your whole day in Shona.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndiudze nezvezuva rako. Kubva mangwanani kusvika manheru.",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndamuka, ndadya chingwa ne tii. Ndaenda kubasa. Ndinodzidzа ChiShona manheru. Ndakafara nhasi. Ndarara zvakanaka.', english: 'I woke, ate bread and tea. I went to work. I learn Shona in the evenings. I was happy today. I slept well.', correct: true, feedback: "A complete Shona day — five verbs, past tense, real life. Module 8 complete. That's fluency." },
          { shona: 'Ndamuka, ndadya, ndaenda', english: 'I woke, ate, went', correct: false, feedback: "Good start — add learning, emotion, and sleep to complete the day: 'Ndinodzidzа. Ndakafara. Ndarara.'" },
          { shona: 'Zvakanaka', english: "It was good", correct: false, feedback: "Narrate the whole day! 'Ndamuka → Ndadya → Ndaenda → Ndinodzidzа → Ndakafara → Ndarara.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zuva rakanaka. Rara zvakanaka — Module 8 complete. You can describe a full Shona day. Module 9 — directions and travel — begins tomorrow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I was happy today', correct: ['Ndakafara nhasi', 'ndakafara nhasi'] },
      { prompt: 'Every day', correct: ['Zuva nezuva', 'zuva nezuva'] },
    ],
  },

  mission: {
    title: "Your Module 8 Mission",
    task: "Tonight before sleep, describe your actual day in Shona: 'Ndamuka → Ndadya → Ndaenda → [what you did] → Ndakafara [how you felt] → Ndichatora kurara.' Make today's Shona diary entry.",
    rwenSignoff: "Module 8 complete. Action verbs — the engine of language. Module 9 — Zimbabwe's roads and skies — begins next. Rara zvakanaka. Tichaonana.",
  },
};

export default lesson;
