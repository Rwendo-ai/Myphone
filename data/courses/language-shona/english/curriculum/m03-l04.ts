import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-mhuri',
  module: 3,
  lesson: 4,
  title: 'Ndine Mhuri — I Have a Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, family is everything. It's not background — it's the whole story. When you talk about your family in Shona, you're sharing your roots. People listen closely.",
    culturalNote: "'Mhuri' means family — but Shona family is much wider than the nuclear family. It includes extended relatives, clan members, and sometimes an entire village. When someone asks about your mhuri, they're asking about your whole world.",
  },

  chunks: [
    {
      id: 'ndine_mhuri',
      target: 'Ndine mhuri',
      native: 'I have a family',
      literal: 'I-have family',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ndi-ne mm-HU-ri',
      audioRef: null,
    },
    {
      id: 'ndine_vana',
      target: 'Ndine vana...',
      native: 'I have ... children',
      literal: 'I-have children...',
      emoji: '👶',
      phonetic: 'ndi-ne va-na',
      audioRef: null,
    },
    {
      id: 'ndiriye_mumwe_chete',
      target: 'Ndiriye mumwe chete',
      native: 'I am an only child',
      literal: 'I-am one alone',
      emoji: '🧍',
      phonetic: 'ndi-ri-ye mu-mwe CHE-te',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndine + noun — I have [something]',
    explanation: "You've seen 'ndine makore' (I have years = I am X years old). The same 'ndine' works for family members: ndine vana (I have children), ndine mukomana (I have a son), ndine musikana (I have a daughter). One pattern, infinite uses.",
    examples: [
      { target: 'Ndine mhuri', native: 'I have a family' },
      { target: 'Ndine vana vaviri', native: 'I have two children' },
      { target: 'Ndine mukomana mumwe', native: 'I have one son' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndine mhuri', right: 'I have a family' },
        { left: 'Ndine vana...', right: 'I have ... children' },
        { left: 'Ndiriye mumwe chete', right: 'I am an only child' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have two children',
      sentence: 'Ndine vana _____.',
      options: ['vaviri', 'vatatu', 'vanomwe'],
      correct: 'vaviri',
      context: 'Someone asks about your children.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have a family',
      correct: ['Ndine mhuri', 'ndine mhuri'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Ndiriye mumwe chete'. What does this tell you?",
      question: 'What does this mean?',
      options: [
        { text: 'They are an only child', correct: true },
        { text: 'They have one child', correct: false },
        { text: 'They live alone', correct: false },
      ],
      explanation: "'Ndiriye mumwe chete' — I am one/alone — specifically means they grew up as an only child.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have two children"',
      words: ['vaviri', 'Ndine', 'vana'],
      correct: ['Ndine', 'vana', 'vaviri'],
      translation: 'I have two children',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am an only child',
      correct: ['Ndiriye mumwe chete', 'ndiriye mumwe chete'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your family. Share something real.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Une mhuri here? Unawo vana?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hongu, ndine mhuri. Ndine vana...', native: 'Yes, I have a family. I have ... children.', correct: true, feedback: "You shared your family honestly. Rwen listens with genuine interest." },
          { target: 'Handizivi', native: "I don't know", correct: false, feedback: "You know your own family — 'Ndine mhuri' or 'Ndiriye mumwe chete' are both good starts." },
          { target: 'Ndiriye mumwe chete', native: 'I am an only child', correct: false, feedback: "That's a perfectly valid and complete answer." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Zvakanaka zvikuru. Mhuri ndirwo rugare.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Family is peace — that's what Rwen said. And now you can talk about yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a family', correct: ['Ndine mhuri', 'ndine mhuri'] },
      { prompt: 'I am an only child', correct: ['Ndiriye mumwe chete', 'ndiriye mumwe chete'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think about your family. Say 'Ndine mhuri' — and then describe one family member in Shona, using 'Ndine...'.",
    rwenSignoff: "Your family is part of your story. Famba zvakanaka.",
  },
};

export default lesson;
