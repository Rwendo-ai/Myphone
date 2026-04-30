import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-questions',
  module: 4,
  lesson: 9,
  title: 'Asking Questions in Shona',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Questions unlock conversation. You've already used some — 'Makadii?', 'Wabva kupi?', 'Zvinoreva chii?'. Today we bring the question words together as a system so you can ask about anything.",
    culturalNote: "In Shona, questions are formed by adding question words at the end or changing the verb tone. The rising intonation that signals a question in Shona is subtle — listening carefully to native speakers will train your ear.",
  },

  chunks: [
    {
      id: 'chii',
      target: 'Chii?',
      native: 'What?',
      literal: 'What-is-it?',
      emoji: '❓',
      phonetic: 'CHII',
      audioRef: null,
    },
    {
      id: 'ndiani',
      target: 'Ndiani?',
      native: 'Who?',
      literal: 'It-is-who?',
      emoji: '🙋',
      phonetic: 'ndi-AH-ni',
      audioRef: null,
    },
    {
      id: 'rinhi',
      target: 'Rinhi?',
      native: 'When?',
      literal: 'Time-when?',
      emoji: '🕐',
      phonetic: 'RI-nhi',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question words in Shona',
    explanation: "Shona question words: Chii? (what), Ndiani? (who), Rinhi? (when), Kupi? (where), Sei? (how), Mangani? (how many). Most go at the END of the sentence, after the verb.",
    examples: [
      { target: 'Unoda chii?', native: 'You want what? → What do you want?' },
      { target: 'Unobva kupi?', native: 'You come from where? → Where are you from?' },
      { target: 'Uchaenda rinhi?', native: 'You will go when? → When will you go?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question word to its meaning',
      pairs: [
        { left: 'Chii?', right: 'What?' },
        { left: 'Ndiani?', right: 'Who?' },
        { left: 'Rinhi?', right: 'When?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question',
      sentence: 'Unotaura _____ muShona?',
      options: ['chii', 'ndiani', 'rinhi'],
      correct: 'chii',
      context: 'What do you say in Shona?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'What?',
      correct: ['Chii?', 'chii?', 'Chii', 'chii'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you ask 'who is this person'?",
      question: 'Munhu uyu ___?',
      options: [
        { text: 'Munhu uyu ndiani?', correct: true },
        { text: 'Munhu uyu chii?', correct: false },
        { text: 'Munhu uyu rinhi?', correct: false },
      ],
      explanation: "Ndiani? = who? For people, use ndiani. Chii? is for things.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "When will you go?"',
      words: ['Uchaenda', 'rinhi?'],
      correct: ['Uchaenda', 'rinhi?'],
      translation: 'When will you go?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Who?',
      correct: ['Ndiani?', 'ndiani?', 'Ndiani', 'ndiani'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen gives you a mystery object and waits for you to ask questions about it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndine chinhu. Bvunza mibvunzo.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Chinhu chii ichi? Chakanaka here?', native: 'What is this thing? Is it good?', correct: true, feedback: "Two questions — chii (what) and asking for description. Great curiosity." },
          { target: 'Ndiani?', native: 'Who?', correct: false, feedback: "Ndiani is for people. For objects use Chii? — What is this thing? Chinhu chii ichi?" },
          { target: 'Ndinoziva', native: 'I know', correct: false, feedback: "Ask a question about the mystery object — 'Chinhu chii ichi?' (What is this thing?)" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Chinhu chakanaka — ndechiSpline! Rwen's 3D model coming to life soon.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What? (question word)', correct: ['Chii?', 'chii?', 'Chii', 'chii'] },
      { prompt: 'When? (question word)', correct: ['Rinhi?', 'rinhi?', 'Rinhi', 'rinhi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask 3 real questions today using Shona question words — even in your head. 'Unoda chii?' (what do you want?), 'Uchaenda rinhi?' (when will you go?), 'Munhu uyu ndiani?' (who is this person?)",
    rwenSignoff: "Questions are the engine of curiosity. Famba zvakanaka.",
  },
};

export default lesson;
