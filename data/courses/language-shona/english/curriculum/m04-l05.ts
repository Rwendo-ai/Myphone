import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-subject-concord',
  module: 4,
  lesson: 5,
  title: 'Subject Concord — Verbs Agree with Nouns',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Here's where Shona grammar becomes beautiful. Verbs don't just describe actions — they agree with their subject. The verb prefix mirrors the noun class. One rule, infinite sentences.",
    culturalNote: "Subject concord is the heartbeat of Shona grammar. Every verb in every sentence reflects the class of its subject. Once you feel this rhythm, Shona stops being a foreign language and starts feeling like music.",
  },

  chunks: [
    {
      id: 'munhu_anoenda',
      target: 'Munhu anoenda',
      native: 'The person goes',
      literal: 'Person a-no-enda (a- = class 1 subject prefix)',
      emoji: '🚶',
      phonetic: 'MU-nhu a-no-EN-da',
      audioRef: null,
    },
    {
      id: 'chinhu_chinoita',
      target: 'Chinhu chinoita',
      native: 'The thing works / happens',
      literal: 'Thing chi-no-ita (chi- = class 7 subject prefix)',
      emoji: '⚙️',
      phonetic: 'CHI-nhu chi-no-I-ta',
      audioRef: null,
    },
    {
      id: 'muti_unomera',
      target: 'Muti unomera',
      native: 'The tree grows',
      literal: 'Tree u-no-mera (u- = class 3 subject prefix)',
      emoji: '🌱',
      phonetic: 'MU-ti u-no-ME-ra',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Subject prefixes match noun classes',
    explanation: "Each noun class has its own subject prefix used on verbs. Class 1 (munhu) uses a-, Class 7 (chinhu) uses chi-, Class 3 (muti) uses u-. The verb always mirrors who or what is acting.",
    examples: [
      { target: 'Munhu a-no-enda', native: 'Person goes (a- = class 1)' },
      { target: 'Chinhu chi-no-ita', native: 'Thing works (chi- = class 7)' },
      { target: 'Muti u-no-mera', native: 'Tree grows (u- = class 3)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the noun to its verb prefix',
      pairs: [
        { left: 'Munhu (person)', right: 'A- (anoenda)' },
        { left: 'Chinhu (thing)', right: 'Chi- (chinoita)' },
        { left: 'Muti (tree)', right: 'U- (unomera)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Munhu ___ kuenda. Which verb prefix fits?",
      question: 'The person goes:',
      options: [
        { text: 'Munhu anoenda', correct: true },
        { text: 'Munhu chinoenda', correct: false },
        { text: 'Munhu unoenda', correct: false },
      ],
      explanation: "Munhu (class 1) uses a- on verbs. Munhu anoenda — the person goes.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'The person goes',
      correct: ['Munhu anoenda', 'munhu anoenda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the right subject prefix',
      sentence: 'Chinhu _____ pano.',
      options: ['chiripo', 'aripo', 'uripo'],
      correct: 'chiripo',
      context: 'The thing is here.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The tree grows"',
      words: ['Muti', 'unomera.'],
      correct: ['Muti', 'unomera.'],
      translation: 'The tree grows',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'The thing works / happens',
      correct: ['Chinhu chinoita', 'chinhu chinoita'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen tests your subject concord with a quick quiz using things you can see.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndinokubvunza. Munhu anoenda here? Uye chinhu chinoita here?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu. Munhu anoenda. Chinhu chinoita.', native: 'Yes. A person goes. A thing works.', correct: true, feedback: "Perfect concord. The verb prefix matched the noun class every time." },
          { target: 'Munhu chinoenda', native: 'Person works (wrong concord)', correct: false, feedback: "Watch the verb prefix — Munhu uses a- not chi-. Munhu anoenda." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "Munhu = a- prefix, so 'Munhu anoenda'. Chinhu = chi- prefix, so 'Chinhu chinoita'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka! Subject concord is the heartbeat of Shona. You're feeling it now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The person goes', correct: ['Munhu anoenda', 'munhu anoenda'] },
      { prompt: 'The tree grows', correct: ['Muti unomera', 'muti unomera'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at 3 things or people near you. Describe what they're doing in Shona — even if just in your head. 'Munhu anoenda. Chinhu chiripo.'",
    rwenSignoff: "Every verb reflects its subject. That's Shona harmony. Famba zvakanaka.",
  },
};

export default lesson;
