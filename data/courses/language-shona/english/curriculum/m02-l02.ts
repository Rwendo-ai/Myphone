import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-ndatenda',
  module: 2,
  lesson: 2,
  title: 'Ndatenda — Thank You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Gratitude is the currency of relationship in Shona culture. 'Ndatenda' said sincerely lands differently from a mumbled 'thanks'. Let's make sure yours lands right.",
    culturalNote: "In Zimbabwe, gratitude is expressed verbally and often — not just for big things but for small acts of kindness. Saying 'ndatenda zvikuru' (thank you very much) for something simple is never excessive. It's always appreciated.",
  },

  chunks: [
    {
      id: 'ndatenda',
      target: 'Ndatenda',
      native: 'Thank you',
      literal: 'I-have-been-grateful',
      emoji: '🙏',
      phonetic: 'nda-TEN-da',
      audioRef: null,
    },
    {
      id: 'ndatenda_zvikuru',
      target: 'Ndatenda zvikuru',
      native: 'Thank you very much',
      literal: 'I-thank greatly/a-lot',
      emoji: '💛',
      phonetic: 'nda-TEN-da zvi-KU-ru',
      audioRef: null,
    },
    {
      id: 'wakanaka',
      target: 'Wakanaka',
      native: 'You are kind / You are good',
      literal: 'You-are-good',
      emoji: '✨',
      phonetic: 'wa-ka-NAH-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Zvikuru — the intensifier',
    explanation: "'Zvikuru' means 'greatly' or 'very much'. Add it after almost any positive statement to strengthen it. You've seen 'akanaka' (that is good) — 'zvikuru' is its amplifier.",
    examples: [
      { target: 'Ndatenda', native: 'Thank you' },
      { target: 'Ndatenda zvikuru', native: 'Thank you very much' },
      { target: 'Ndinofara zvikuru', native: 'I am very happy' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndatenda', right: 'Thank you' },
        { left: 'Ndatenda zvikuru', right: 'Thank you very much' },
        { left: 'Wakanaka', right: 'You are kind' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Intensify the thank you',
      sentence: 'Ndatenda _____.',
      options: ['zvikuru', 'zvishoma', 'zvakanaka'],
      correct: 'zvikuru',
      context: 'Someone went out of their way to help you.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Thank you very much',
      correct: ['Ndatenda zvikuru', 'ndatenda zvikuru'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build a warm thank you',
      words: ['zvikuru', 'Ndatenda'],
      correct: ['Ndatenda', 'zvikuru'],
      translation: 'Thank you very much',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'You are kind / You are good',
      correct: ['Wakanaka', 'wakanaka'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Someone gives you a gift. What is the warmest response?',
      question: 'Choose the most grateful reply',
      options: [
        { text: 'Ndatenda zvikuru. Wakanaka.', correct: true },
        { text: 'Zvinoenderana', correct: false },
        { text: 'Ndapota', correct: false },
      ],
      explanation: "'Ndatenda zvikuru. Wakanaka.' — thank you greatly, you're kind — is the warmest combination for receiving a gift.",
    },
  ],

  rwenDialogue: {
    intro: "Rwen has just helped you find your way. Express real gratitude.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ndiyo nzira — enda mberi uchidzika kurudyi.',
        native: "That's the way — go forward then turn right.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda zvikuru. Wakanaka.', native: 'Thank you very much. You are kind.', correct: true, feedback: "Warm and genuine. Rwen beams." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Correct — but 'Ndatenda zvikuru. Wakanaka.' shows deeper appreciation for real help." },
          { target: 'Zvinoenderana', native: "You're welcome", correct: false, feedback: "That's the REPLY to thanks — but right now you're the one saying thanks." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Zvinoenderana. Toona!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Gratitude given freely is never forgotten in Shona culture. You're already learning more than words.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thank you very much', correct: ['Ndatenda zvikuru', 'ndatenda zvikuru'] },
      { prompt: 'You are kind / You are good', correct: ['Wakanaka', 'wakanaka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Ndatenda' to someone today — and mean it. If they did something significant, add 'zvikuru'.",
    rwenSignoff: "Gratitude is its own reward. Famba zvakanaka.",
  },
};

export default lesson;
