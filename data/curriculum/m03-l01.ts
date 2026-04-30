import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-ndiri',
  module: 3,
  lesson: 1,
  title: 'Ndiri — I Am',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Greetings open doors. Survival phrases keep you safe. Now — who are you? Module 3 is your story. We start with the simplest, most important phrase: I am.",
    culturalNote: "In Shona culture, introducing yourself fully — who you are, what you do, where you're from — is expected and welcomed. It's not showing off; it's showing up. People want to know you.",
  },

  chunks: [
    {
      id: 'ndiri',
      target: 'Ndiri...',
      native: 'I am...',
      literal: 'I-am...',
      emoji: '🙋',
      phonetic: 'NDI-ri',
      audioRef: null,
    },
    {
      id: 'ndiri_mudzidzisi',
      target: 'Ndiri mudzidzisi',
      native: 'I am a teacher',
      literal: 'I-am teacher',
      emoji: '👩‍🏫',
      phonetic: 'NDI-ri mu-dzi-DZI-si',
      audioRef: null,
    },
    {
      id: 'ndiri_murwi',
      target: 'Ndiri murwi weshoko',
      native: 'I am a student / learner',
      literal: 'I-am fighter of-word/language',
      emoji: '📖',
      phonetic: 'NDI-ri mu-rwi we-SHO-ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndiri + noun — I am [something]',
    explanation: "'Ndiri' followed by a noun tells who you are. The noun is often a person noun with the 'mu-' prefix, which you've seen before. 'Mudzidzisi' (teacher), 'murwi' (learner/fighter) — mu- marks a person doing something.",
    examples: [
      { target: 'Ndiri mudzidzisi', native: 'I am a teacher' },
      { target: 'Ndiri gadziriro', native: 'I am a doctor (informal)' },
      { target: 'Ndiri murwi weshoko', native: 'I am a language learner' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndiri', right: 'I am' },
        { left: 'Ndiri mudzidzisi', right: 'I am a teacher' },
        { left: 'Ndiri murwi weshoko', right: 'I am a language learner' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I am a teacher"',
      sentence: 'Ndiri _____.',
      options: ['mudzidzisi', 'mushonga', 'mukomana'],
      correct: 'mudzidzisi',
      context: 'Introduce your profession.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am (just the phrase)',
      correct: ['Ndiri', 'ndiri'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Unoshanda sei?' (What do you do?). You are a teacher. What do you say?",
      question: 'Choose the right answer',
      options: [
        { text: 'Ndiri mudzidzisi', correct: true },
        { text: 'Ndiri murwi weshoko', correct: false },
        { text: 'Ndiri Rwen', correct: false },
      ],
      explanation: "'Ndiri mudzidzisi' — I am a teacher — is the profession answer. 'Murwi weshoko' means language learner specifically.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am a language learner"',
      words: ['weshoko', 'Ndiri', 'murwi'],
      correct: ['Ndiri', 'murwi', 'weshoko'],
      translation: 'I am a language learner',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am a teacher',
      correct: ['Ndiri mudzidzisi', 'ndiri mudzidzisi'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to know more about you. Start your self-introduction.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Uri ani? Unoshanda sei?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndiri murwi weshoko. Ndinoda kudzidza ChiShona.', native: "I am a language learner. I want to learn Shona.", correct: true, feedback: "You introduced yourself with purpose. Rwen is interested." },
          { target: 'Ndiri mudzidzisi', native: 'I am a teacher', correct: false, feedback: "That works — now add 'Ndinoda kudzidza ChiShona' to say why you're here." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know who you are! Use 'Ndiri...' to share." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Ndinofara zvikuru. Tichadzidza pamwe chete.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You told me who you are. Now I know you a little better. That's what language is for.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am (just the phrase)', correct: ['Ndiri', 'ndiri'] },
      { prompt: 'I am a teacher', correct: ['Ndiri mudzidzisi', 'ndiri mudzidzisi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Ndiri...' followed by who you are today — your profession, your role, anything. Say it out loud in Shona.",
    rwenSignoff: "You are someone worth knowing. Famba zvakanaka.",
  },
};

export default lesson;
