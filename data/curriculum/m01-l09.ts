import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-sara-zvakanaka',
  module: 1,
  lesson: 9,
  title: 'Sara Zvakanaka — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Every journey has a farewell. In Shona, goodbye is not just 'bye' — it blesses the other person's path. The words you use depend on one thing: who is leaving and who is staying.",
    culturalNote: "'Famba zvakanaka' literally means 'go well' — it's said by the person staying, blessing the one leaving. 'Sara zvakanaka' means 'stay well' — said by the person leaving, blessing the one who remains. Get them the right way round.",
  },

  chunks: [
    {
      id: 'sara_zvakanaka',
      target: 'Sara zvakanaka',
      native: 'Stay well (said by the person leaving)',
      literal: 'Stay that-is-well',
      emoji: '🏠',
      phonetic: 'SAH-ra zva-ka-NAH-ka',
      audioRef: null,
    },
    {
      id: 'famba_zvakanaka',
      target: 'Famba zvakanaka',
      native: 'Go well (said by the person staying)',
      literal: 'Go/travel that-is-well',
      emoji: '🚶',
      phonetic: 'FAM-ba zva-ka-NAH-ka',
      audioRef: null,
    },
    {
      id: 'tichaonana',
      target: 'Tichaonana',
      native: 'We will see each other again',
      literal: 'We-will-see-each-other',
      emoji: '👋',
      phonetic: 'ti-cha-o-NAH-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sara vs Famba — Stay vs Go',
    explanation: "These two verbs are opposites and both use 'zvakanaka' (that is well) as a blessing. The trick: you bless the OTHER person's situation, not your own. Leaving? Say 'Sara zvakanaka' (blessing those staying). Staying? Say 'Famba zvakanaka' (blessing those going).",
    examples: [
      { target: 'Sara zvakanaka', native: 'Stay well (you are leaving, they stay)' },
      { target: 'Famba zvakanaka', native: 'Go well (you stay, they are leaving)' },
      { target: 'Tichaonana', native: 'We will see each other (either person can say this)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the farewell to who says it',
      pairs: [
        { left: 'Sara zvakanaka', right: 'Said by the person leaving' },
        { left: 'Famba zvakanaka', right: 'Said by the person staying' },
        { left: 'Tichaonana', right: 'See you again (either person)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your friend is leaving your home. You are staying. What do you say?',
      question: 'You are the one staying — what farewell do you use?',
      options: [
        { text: 'Famba zvakanaka', correct: true },
        { text: 'Sara zvakanaka', correct: false },
        { text: 'Tichaonana', correct: false },
      ],
      explanation: "You're staying — so you bless their journey: 'Famba zvakanaka' (go well). If you were leaving, you'd say 'Sara zvakanaka' (stay well).",
    },
    {
      type: 'fill_blank',
      instruction: 'You are leaving a friend\'s house. What do you say?',
      sentence: '_____ zvakanaka!',
      options: ['Sara', 'Famba', 'Ndabva'],
      correct: 'Sara',
      context: "You're the one leaving — bless those who stay.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Go well (you are staying, they are leaving)',
      correct: ['Famba zvakanaka', 'famba zvakanaka'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "We will see each other again"',
      words: ['Tichaonana'],
      correct: ['Tichaonana'],
      translation: 'We will see each other again',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Stay well (you are the one leaving)',
      correct: ['Sara zvakanaka', 'sara zvakanaka'],
    },
  ],

  rwenDialogue: {
    intro: "You've spent the afternoon with Rwen. It's time to head home. You're leaving — Rwen is staying.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sara zvakanaka, Rwen', native: 'Stay well, Rwen', correct: true, feedback: "Perfect — you're leaving, so you bless Rwen who stays. Exactly right." },
          { target: 'Famba zvakanaka', native: 'Go well', correct: false, feedback: "That's the blessing for someone who is leaving — but you're the one leaving, not Rwen. Use 'Sara zvakanaka'." },
          { target: 'Mangwanani', native: 'Good morning', correct: false, feedback: "That's a greeting, not a farewell. Use 'Sara zvakanaka' when you're leaving." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Famba zvakanaka. Tichaonana!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You left with a blessing. And I blessed your path. That's how it works in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Go well (you are staying, they are leaving)', correct: ['Famba zvakanaka', 'famba zvakanaka'] },
      { prompt: 'We will see each other again', correct: ['Tichaonana', 'tichaonana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time someone leaves — a colleague, a family member, anyone — say 'Famba zvakanaka' instead of 'bye'. Mean it.",
    rwenSignoff: "Famba zvakanaka. Until tomorrow.",
  },
};

export default lesson;
