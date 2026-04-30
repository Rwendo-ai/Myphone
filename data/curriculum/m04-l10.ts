import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-grammar-context',
  module: 4,
  lesson: 10,
  title: 'Grammar in Context — The Full Picture',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine grammar lessons. Today we don't learn anything new — we USE everything. Noun classes, subject concord, adjective agreement, tenses, questions. All in one conversation. This is where grammar becomes language.",
    culturalNote: "Grammar in Shona is not a set of rules to memorise — it's a set of patterns to feel. By the end of this lesson, you should be starting to feel those patterns rather than think through each one. That feeling is fluency beginning.",
  },

  chunks: [
    {
      id: 'ndinoda_kuziva',
      target: 'Ndinoda kuziva',
      native: 'I want to know',
      literal: 'I-want to-know',
      emoji: '🔍',
      phonetic: 'ndi-no-da ku-ZI-va',
      audioRef: null,
    },
    {
      id: 'zvinobuda',
      target: 'Zvinobuda zvakanaka',
      native: 'It turns out well / It works out',
      literal: 'Things-come-out that-are-good',
      emoji: '✨',
      phonetic: 'zvi-no-BU-da zva-ka-NA-ka',
      audioRef: null,
    },
    {
      id: 'ndazvifunza',
      target: 'Ndazvifunza',
      native: 'I taught myself / I learned it',
      literal: 'I-taught-myself',
      emoji: '🎓',
      phonetic: 'nda-zvi-FUN-za',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Grammar summary — all classes together',
    explanation: "People: Munhu/Vanhu (Mu/Va). Things: Chinhu/Zvinhu (Chi/Zvi). Trees: Muti/Miti (Mu/Mi). Verbs match subjects. Adjectives match nouns. Tenses live in the verb. Questions go at the end. You now have the skeleton of Shona grammar.",
    examples: [
      { target: 'Munhu akanaka anoenda', native: 'A good person goes (class 1, adjective + verb agree)' },
      { target: 'Chinhu chakanaka chakaitika', native: 'A good thing happened (class 7, agreement)' },
      { target: 'Ndichaenda rinhi?', native: 'When will I go? (future tense + question word)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match grammar concept to example',
      pairs: [
        { left: 'Class 1 subject prefix', right: 'Munhu anoenda' },
        { left: 'Class 7 adjective', right: 'Chinhu chakanaka' },
        { left: 'Future tense', right: 'Ndichaenda' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence is grammatically complete and correct?",
      question: 'Choose the correct sentence:',
      options: [
        { text: 'Munhu akanaka anotaura ChiShona', correct: true },
        { text: 'Munhu chakanaka anotaura ChiShona', correct: false },
        { text: 'Munhu akanaka chinotaura ChiShona', correct: false },
      ],
      explanation: "Munhu (class 1) uses a- for both adjective (akanaka) and verb (anotaura). All agreement is correct.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want to know',
      correct: ['Ndinoda kuziva', 'ndinoda kuziva'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with correct adjective agreement',
      sentence: 'Chikoro _____ chakanaka chiripo mumusha wangu.',
      options: ['ichi', 'uyu', 'ava'],
      correct: 'ichi',
      context: 'This good school is in my village.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "A good person taught themselves"',
      words: ['Munhu', 'akanaka', 'akazvifunza.'],
      correct: ['Munhu', 'akanaka', 'akazvifunza.'],
      translation: 'A good person taught themselves',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'It turns out well',
      correct: ['Zvinobuda zvakanaka', 'zvinobuda zvakanaka'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen gives you a full challenge — describe yourself, your journey, and your goals using everything you've learned in this module.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndiudze nezvako — uchishandisa rudzi rwezita (noun classes) nemiririro (tenses).",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndiri munhu akatanga kudzidza ChiShona. Ndinoda kuziva zvinhu zvakawanda. Ndichaenda kuZimbabwe.', native: 'I am a person who started learning Shona. I want to know many things. I will go to Zimbabwe.', correct: true, feedback: "Class agreement, tenses, vocabulary — all working together. That's real Shona." },
          { target: 'Ndinodzidzа ChiShona', native: 'I learn Shona', correct: false, feedback: "Good start — expand it. Add noun class language, tenses, and your goals." },
          { target: 'Handizivi sei', native: "I don't know how", correct: false, feedback: "Start simple: 'Ndiri munhu akatanga kudzidza ChiShona.' — I am a person who started learning Shona." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvinobuda zvakanaka. Module 4 complete — you have the skeleton of Shona grammar. Now the flesh comes.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want to know', correct: ['Ndinoda kuziva', 'ndinoda kuziva'] },
      { prompt: 'It turns out well', correct: ['Zvinobuda zvakanaka', 'zvinobuda zvakanaka'] },
    ],
  },

  mission: {
    title: "Your Module 4 Mission",
    task: "Write or say one complete Shona sentence that uses: a noun (with its class), an adjective that agrees, a verb that agrees, and a tense marker. Even one sentence counts.",
    rwenSignoff: "The skeleton is built. Module 5 — your Shona family — begins next. Tichaonana.",
  },
};

export default lesson;
