import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-ruregerero',
  module: 2,
  lesson: 3,
  title: 'Ruregerero — Sorry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Making mistakes is part of learning — in language and in life. In Shona, knowing how to apologise properly is as important as knowing how to greet. Let me show you both the words and the weight behind them.",
    culturalNote: "In Shona culture, a sincere apology is expected to be direct and unhurried. Simply saying 'ruregerero' while maintaining eye contact carries real weight. Rushing it or mumbling it can seem dismissive.",
  },

  chunks: [
    {
      id: 'ruregerero',
      target: 'Ruregerero',
      native: 'Sorry / Forgive me',
      literal: 'Forgiveness',
      emoji: '🕊️',
      phonetic: 'ru-re-ge-REH-ro',
      audioRef: null,
    },
    {
      id: 'ndinokumbira_ruregerero',
      target: 'Ndinokumbira ruregerero',
      native: 'I ask your forgiveness',
      literal: 'I-ask-for forgiveness',
      emoji: '🙏',
      phonetic: 'ndi-no-KUM-bi-ra ru-re-ge-REH-ro',
      audioRef: null,
    },
    {
      id: 'haitei',
      target: 'Haitei',
      native: "No problem / It's fine",
      literal: "It doesn't matter",
      emoji: '👌',
      phonetic: 'hai-TEH-i',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinokumbira — I ask for',
    explanation: "'Ndinokumbira' means 'I ask for' or 'I request'. Pair it with anything you need and it becomes a formal, respectful request. 'Ndinokumbira ruregerero' is a full, formal apology.",
    examples: [
      { target: 'Ruregerero', native: 'Sorry (informal)' },
      { target: 'Ndinokumbira ruregerero', native: 'I ask your forgiveness (formal)' },
      { target: 'Ndinokumbira mvura', native: 'I ask for water / May I have water?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Ruregerero', right: 'Sorry / Forgive me' },
        { left: 'Ndinokumbira ruregerero', right: 'I ask your forgiveness' },
        { left: 'Haitei', right: "No problem / It's fine" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You accidentally bump into an elder. What is the most respectful thing to say?",
      question: 'Choose the most appropriate apology',
      options: [
        { text: 'Ndinokumbira ruregerero', correct: true },
        { text: 'Haitei', correct: false },
        { text: 'Ruregerero', correct: false },
      ],
      explanation: "With an elder, use the full formal apology 'Ndinokumbira ruregerero'. 'Ruregerero' alone works with friends. 'Haitei' is what THEY say to you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Sorry / Forgive me (informal)',
      correct: ['Ruregerero', 'ruregerero'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the formal apology',
      sentence: 'Ndinokumbira _____.',
      options: ['ruregerero', 'ndatenda', 'rubatsiro'],
      correct: 'ruregerero',
      context: 'You were late to an important meeting.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build the formal apology',
      words: ['ruregerero', 'Ndinokumbira'],
      correct: ['Ndinokumbira', 'ruregerero'],
      translation: 'I ask your forgiveness',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "No problem / It's fine",
      correct: ['Haitei', 'haitei'],
    },
  ],

  rwenDialogue: {
    intro: "You are late. Rwen has been waiting. You owe a real apology.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Wakuenda kupi? Ndakakumirira nguva refu.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinokumbira ruregerero. Ndanonoka.', native: 'I ask your forgiveness. I was late.', correct: true, feedback: "Direct, sincere, and complete. Rwen nods." },
          { target: 'Ruregerero', native: 'Sorry', correct: false, feedback: "Acceptable — but a full 'Ndinokumbira ruregerero' shows more respect when someone waited for you." },
          { target: 'Haitei', native: "No problem", correct: false, feedback: "That's what THEY say to forgive you — not what you say when apologising." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Haitei. Tichatanga zvino.',
      },
      {
        speaker: 'rwen',
        rwenLine: "An apology given well restores trust fast. That's true in any language.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I ask your forgiveness (formal apology)', correct: ['Ndinokumbira ruregerero', 'ndinokumbira ruregerero'] },
      { prompt: "No problem / It's fine", correct: ['Haitei', 'haitei'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time you need to apologise for something — even something small — say 'Ruregerero' out loud. Notice how saying it in Shona makes you mean it more.",
    rwenSignoff: "Forgiveness is strength. Famba zvakanaka.",
  },
};

export default lesson;
