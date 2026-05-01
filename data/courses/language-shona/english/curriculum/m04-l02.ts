import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-chi-zvi',
  module: 4,
  lesson: 2,
  title: 'Chinhu / Zvinhu — Thing & Things',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Last lesson: people (Mu/Va). Today: things (Chi/Zvi). The Chi/Zvi class covers objects, languages, and abstract concepts. It's everywhere — including the word for 'Shona language' itself: ChiShona.",
    culturalNote: "The Chi- prefix in language names is how Shona names all languages: ChiShona (Shona), ChiRungu (English), ChiNdebele (Ndebele). When you say you speak 'ChiShona', you're using the Chi/Zvi noun class correctly.",
  },

  chunks: [
    {
      id: 'chinhu',
      target: 'Chinhu',
      native: 'A thing / An object',
      literal: 'Chi-nhu (class 7 prefix)',
      emoji: '📦',
      phonetic: 'CHI-nhu',
      audioRef: null,
    },
    {
      id: 'zvinhu',
      target: 'Zvinhu',
      native: 'Things / Objects',
      literal: 'Zvi-nhu (class 8 plural prefix)',
      emoji: '📦📦',
      phonetic: 'ZVI-nhu',
      audioRef: null,
    },
    {
      id: 'chikoro',
      target: 'Chikoro',
      native: 'School',
      literal: 'Chi-koro (thing class)',
      emoji: '🏫',
      phonetic: 'chi-KO-ro',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chi- singular, Zvi- plural (things)',
    explanation: "Things use Chi- (one thing) and Zvi- (many things). Languages use Chi- too — ChiShona, ChiRungu. Verbs describing things start with Chi- or Zvi- to match.",
    examples: [
      { target: 'Chi-nhu → Zvi-nhu', native: 'Thing → Things' },
      { target: 'Chi-koro → Zvi-koro', native: 'School → Schools' },
      { target: 'Chi-Shona', native: 'Shona language (Chi- class)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Chinhu', right: 'A thing' },
        { left: 'Zvinhu', right: 'Things' },
        { left: 'Chikoro', right: 'School' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence about schools',
      sentence: '_____ zvikoro zviri pedyo.',
      options: ['Izvi', 'Ava', 'Imi'],
      correct: 'Izvi',
      context: 'These schools are nearby.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'A thing',
      correct: ['Chinhu', 'chinhu'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why is 'Shona language' called 'ChiShona'?",
      question: 'ChiShona uses which noun class?',
      options: [
        { text: 'Chi/Zvi — the things class', correct: true },
        { text: 'Mu/Va — the people class', correct: false },
        { text: 'Mu/Mi — the tree class', correct: false },
      ],
      explanation: "Languages are in the Chi/Zvi class. ChiShona, ChiRungu, ChiNdebele — all use Chi-.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Things are here"',
      words: ['Zvinhu', 'zviri', 'pano.'],
      correct: ['Zvinhu', 'zviri', 'pano.'],
      translation: 'Things are here',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'School',
      correct: ['Chikoro', 'chikoro'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen points to objects around the classroom to demonstrate the Chi/Zvi class.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Chinhu ichi ndichipi? Chipunu — spoon. Zvinhu izvi — spoons. Unoona here maitiro?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoona. Chi- imwe, Zvi- vazhinji.', native: "I see. Chi- one thing, Zvi- many things.", correct: true, feedback: "You've got it. The pattern is the same as Mu/Va — just different sounds." },
          { target: 'Handanzwisisi zvizvi', native: "I don't understand this", correct: false, feedback: "Chi- = one thing, Zvi- = many things. Same pattern as Mu- and Va- for people." },
          { target: 'Ndatenda Rwen', native: 'Thank you Rwen', correct: false, feedback: "Good — but try describing the pattern: Chi- for one thing, Zvi- for many." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka zvikuru. Two classes down, a few more to go. You're building the skeleton.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A thing (singular)', correct: ['Chinhu', 'chinhu'] },
      { prompt: 'School', correct: ['Chikoro', 'chikoro'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find 3 objects near you and say 'Chinhu ichi' (this thing) for each one. Then point at all of them and say 'Zvinhu izvi' (these things).",
    rwenSignoff: "Things are everywhere. Now you can name their class. Famba zvakanaka.",
  },

  phase8: {
    scenario: "It's Monday morning at a primary school in Chitungwiza. You're sitting in on a Grade 2 class as a visitor, and the teacher hands you a basket of objects — a spoon, a book, an exercise pad — and asks you to walk to the chalkboard and label each one in Shona for the children.",
    rwenRole: "VaMutasa — a stern but kind primary-school teacher, mid-50s, who watches whether you use the Chi-/Zvi- class correctly when pointing at a single object versus a pile of them.",
    successCriteria: "User uses 'Chinhu' for a single object, 'Zvinhu' when pointing at a pile, and says 'Chikoro' (not 'Mukoro' or 'Vakoro') when asked the word for school — and correctly identifies that 'ChiShona' uses the Chi-/Zvi- class because it's a language.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
