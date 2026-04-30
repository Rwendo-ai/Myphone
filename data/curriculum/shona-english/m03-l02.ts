import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-ndinoshanda',
  module: 3,
  lesson: 2,
  title: 'Ndinoshanda — I Work',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Work is identity in Shona culture — not just what you do but who you are in the community. Whether you work with your hands, your mind, or your words — there's dignity in all of it. Let's talk about work.",
    culturalNote: "In Zimbabwe, asking someone where they work and what they do is normal conversation — not intrusive. It's how people understand your place in the community and find common ground. Being open about your work builds trust.",
  },

  chunks: [
    {
      id: 'ndinoshanda',
      target: 'Ndinoshanda',
      native: 'I work',
      literal: 'I-work',
      emoji: '💼',
      phonetic: 'ndi-no-SHAN-da',
      audioRef: null,
    },
    {
      id: 'ndinoshanda_mu',
      target: 'Ndinoshanda mu...',
      native: 'I work in / at...',
      literal: 'I-work in...',
      emoji: '🏢',
      phonetic: 'ndi-no-shan-da MU',
      audioRef: null,
    },
    {
      id: 'handishande',
      target: 'Handishande iye zvino',
      native: "I don't work right now / I'm not working",
      literal: 'I-work-not now',
      emoji: '🏠',
      phonetic: 'han-di-SHAN-de i-ye ZVI-no',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-shanda root — the work verb',
    explanation: "'Shanda' is the root verb for work/labour. Add 'ndi-no-' to make 'I work' (present habitual). This 'ndinо-' pattern works for most verbs: ndinoda (I want), ndinofara (I'm happy), ndinoshanda (I work).",
    examples: [
      { target: 'Ndinoshanda', native: 'I work' },
      { target: 'Ndinoshanda mu ofisi', native: 'I work in an office' },
      { target: 'Ndinoshanda ku Harare', native: 'I work in Harare' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ndinoshanda', right: 'I work' },
        { left: 'Ndinoshanda mu...', right: 'I work in/at...' },
        { left: 'Handishande iye zvino', right: "I don't work right now" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say where you work',
      sentence: 'Ndinoshanda _____ chikoro.',
      options: ['mu', 'ku', 'pa'],
      correct: 'mu',
      context: 'You work at a school.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I work',
      correct: ['Ndinoshanda', 'ndinoshanda'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Unoshanda kupi?' (Where do you work?). You work in London. What do you say?",
      question: 'Choose the correct answer',
      options: [
        { text: 'Ndinoshanda ku London', correct: true },
        { text: 'Ndiri ku London', correct: false },
        { text: 'Ndinogara ku London', correct: false },
      ],
      explanation: "'Ndinoshanda ku London' — I work in London. 'Ndinogara ku London' means I live there. 'Ndiri ku London' means I am in London right now.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I work in an office"',
      words: ['ofisi', 'Ndinoshanda', 'mu'],
      correct: ['Ndinoshanda', 'mu', 'ofisi'],
      translation: 'I work in an office',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "I don't work right now",
      correct: ["Handishande iye zvino", 'handishande iye zvino'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen is curious about your life. Tell them about your work.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Unoshanda kupi? Unoita basa rei?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinoshanda mu [profession]. Ndinofara nebasa rangu.', native: 'I work in [profession]. I am happy with my work.', correct: true, feedback: "You shared your work AND how you feel about it. Real connection." },
          { target: 'Ndinoshanda', native: 'I work', correct: false, feedback: "Good start — add where or what type of work: 'Ndinoshanda mu...'" },
          { target: 'Handishande iye zvino', native: "I don't work right now", correct: false, feedback: "That's fine if true — and you can add what you do instead." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wakanaka! Basa ndiro hupenyu.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Work is life — that's what Rwen said. And now you can talk about yours in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I work', correct: ['Ndinoshanda', 'ndinoshanda'] },
      { prompt: 'I work in... (start of phrase)', correct: ['Ndinoshanda mu', 'ndinoshanda mu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Ndinoshanda mu...' followed by your workplace or profession today. Say it like you mean it.",
    rwenSignoff: "Your work matters. Say it in Shona. Famba zvakanaka.",
  },
};

export default lesson;
