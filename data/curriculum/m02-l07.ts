import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-zvii-mushona',
  module: 2,
  lesson: 7,
  title: 'Zvii muShona? — How Do You Say?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here is the learner's superpower: asking about the language itself. 'How do you say this in Shona?' turns every conversation into a lesson. You become a learner in the field, not just in the classroom.",
    culturalNote: "Shona speakers are almost universally delighted when someone asks them how to say something in their language. It shows respect for ChiShona and curiosity about their world. It's an instant connection-builder.",
  },

  chunks: [
    {
      id: 'zvii_mushona',
      target: 'Zvii muShona?',
      native: 'How do you say it in Shona? / What is it in Shona?',
      literal: 'What-is-it in-Shona?',
      emoji: '🗣️',
      phonetic: 'zvii mu-SHO-na',
      audioRef: null,
    },
    {
      id: 'zvinorevaiko',
      target: 'Zvinoreva chii?',
      native: 'What does it mean?',
      literal: 'It-means what?',
      emoji: '❓',
      phonetic: 'zvi-no-REH-va chii',
      audioRef: null,
    },
    {
      id: 'ndinoda_kudzidza',
      target: 'Ndinoda kudzidza ChiShona',
      native: 'I want to learn Shona',
      literal: 'I-want to-learn Shona-language',
      emoji: '📚',
      phonetic: 'ndi-no-da ku-DZI-dza chi-SHO-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zvii? — asking what something is',
    explanation: "'Zvii?' means 'what is it?' — a short, powerful question. Attach 'mu' (in/at) plus a language name and you ask how to say anything. 'MuShona', 'muChiRungu' (in English) — the pattern works for any language.",
    examples: [
      { target: 'Zvii muShona?', native: 'What is it in Shona?' },
      { target: 'Zvii muChiRungu?', native: 'What is it in English?' },
      { target: 'Zvinoreva chii?', native: 'What does it mean?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Zvii muShona?', right: 'How do you say it in Shona?' },
        { left: 'Zvinoreva chii?', right: 'What does it mean?' },
        { left: 'Ndinoda kudzidza ChiShona', right: 'I want to learn Shona' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask how to say something in Shona',
      sentence: 'Zvii _____?',
      options: ['muShona', 'muChiRungu', 'mukamba'],
      correct: 'muShona',
      context: "You see a bird you don't know the Shona name for.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How do you say it in Shona?',
      correct: ['Zvii muShona?', 'zvii mushona?', 'Zvii muShona', 'zvii mushona'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone uses a Shona word you don't know. What do you ask?",
      question: 'Choose the right question',
      options: [
        { text: 'Zvinoreva chii?', correct: true },
        { text: 'Zvii muShona?', correct: false },
        { text: 'Handizivi', correct: false },
      ],
      explanation: "'Zvinoreva chii?' (what does it mean?) is for when you hear a word but don't understand it. 'Zvii muShona?' is for when you know what you want to say but not the Shona word.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to learn Shona"',
      words: ['ChiShona', 'Ndinoda', 'kudzidza'],
      correct: ['Ndinoda', 'kudzidza', 'ChiShona'],
      translation: 'I want to learn Shona',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'What does it mean?',
      correct: ['Zvinoreva chii?', 'zvinoreva chii?', 'Zvinoreva chii', 'zvinoreva chii'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen uses a word you've never heard. Don't let it slide — ask.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uno-faira ChiShona, handiti?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvinoreva chii — faira?', native: "What does 'faira' mean?", correct: true, feedback: "Perfect — you caught the unknown word and asked immediately. That's how you learn fast." },
          { target: 'Handanzwisisi', native: "I don't understand", correct: false, feedback: "Good instinct — but narrowing it down to the specific word ('Zvinoreva chii — faira?') gets you a faster, more useful answer." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Don't let unknown words pass by. Ask 'Zvinoreva chii?' — that's your learning superpower." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Faira' — it means 'to like' or 'to enjoy'. Uno-faira = you enjoy. Good catch!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Every word you stop to ask about is a word you will never forget.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How do you say it in Shona?', correct: ['Zvii muShona?', 'zvii mushona?', 'Zvii muShona', 'zvii mushona'] },
      { prompt: 'What does it mean?', correct: ['Zvinoreva chii?', 'zvinoreva chii?', 'Zvinoreva chii', 'zvinoreva chii'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find any object near you right now. Look up what it is in Shona. Then say 'Zvii muShona?' out loud and answer yourself.",
    rwenSignoff: "Your curiosity is your teacher. Famba zvakanaka.",
  },
};

export default lesson;
