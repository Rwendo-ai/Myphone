import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-control-and-not',
  module: 1,
  lesson: 9,
  title: 'What You Can Control and What You Cannot',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Money is one of the parts of life where the lack of control becomes most obvious. Markets move. Jobs end. Illness arrives. Family members ask. Currencies fall. A car breaks. A roof leaks. A government changes. A health system bills you. None of these are yours to control. And the suffering in this domain comes very often not from the events themselves but from the part of us that keeps trying to control them anyway. Today we apply, carefully, an old idea: there is what is yours, and there is what is not, and the wisdom is in the discernment.",
    culturalNote: "The Stoic Epictetus, who had been a slave, wrote: 'Some things are up to us and some things are not.' The line is two thousand years old and still does most of the work. Modern Stoic-CBT writers like Donald Robertson and Massimo Pigliucci have brought the dichotomy back into psychological practice. The frame is not resignation. It is discernment — spending energy where it can move the needle, and refusing to spend it where it cannot.",
  },

  chunks: [
    {
      id: 'in_your_hands',
      target: 'In your hands',
      native: 'The choices, behaviours, and responses that are actually yours to make — even if small',
      literal: 'Stoic prohairesis — the faculty of choice; what Epictetus calls "up to us"',
      emoji: '✋',
      phonetic: 'How you respond. What you spend energy on. What habits you build. Who you become.',
      audioRef: null,
    },
    {
      id: 'not_in_your_hands',
      target: 'Not in your hands',
      native: 'The events, outcomes, and forces that move regardless of what you do',
      literal: 'Stoic — what Epictetus calls "not up to us"; cognate with serenity-prayer wisdom',
      emoji: '🌊',
      phonetic: 'Markets. Other people. Illness. Layoffs. The economy. The roof. The price of food. The future.',
      audioRef: null,
    },
    {
      id: 'discernment',
      target: 'Discernment',
      native: 'The slow practice of seeing which is which — and spending energy where it can actually do something',
      literal: 'Modern Stoic-CBT (Robertson, Pigliucci) — applied dichotomy of control; also acceptance work in ACT',
      emoji: '⚖️',
      phonetic: "Most chronic money anxiety is energy spent on what is not in your hands.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sort the situation, then act',
    explanation: "When a money situation arrives — a bill you didn't expect, a layoff, a market drop, a family request — the first move is not action. It is sorting. What in this situation is actually up to me? What is not? Energy spent on the not-up-to-me column produces anxiety with no result. Energy spent on the up-to-me column produces, sometimes, a real change. The sorting is the work. Action follows sorting; it does not replace it.",
    examples: [
      { target: 'Up to you', native: 'How you respond emotionally; what you say to your partner; what next concrete step you take; whether you ask for help' },
      { target: 'Not up to you', native: 'Whether the layoff is being announced; what the market did this week; whether the family member calls again; how long the recession lasts' },
      { target: 'The mistake to avoid', native: 'Treating something not in your hands as if it were — checking, refreshing, ruminating, blaming yourself for not preventing what was not yours to prevent' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'In your hands', right: "The choices and responses that are actually yours" },
        { left: 'Not in your hands', right: 'Events and forces that move regardless of what you do' },
        { left: 'Discernment', right: 'Knowing which is which — and spending energy accordingly' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A market falls and your savings drop. Which of these is actually in your hands?',
      question: 'Pick the one that fits the dichotomy of control',
      options: [
        { text: 'How quickly the market recovers', correct: false },
        { text: 'How you choose to respond — what you say to yourself, what (if anything) you do, who you talk to', correct: true },
        { text: 'Whether the news keeps reporting on it', correct: false },
      ],
      explanation: "The market and the news are not yours. Your response — emotional, behavioural, relational — is. That is where the energy belongs.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Most chronic money anxiety is energy spent on what is _____ in your hands.',
      options: ['not', 'still', 'almost'],
      correct: 'not',
      context: "Worry that does not produce a decision is a form of suffering that the dichotomy of control was designed to interrupt.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one money situation in your life where you have been spending energy on the not-up-to-you column',
      prompt: 'I have been spending energy on _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle',
      words: ['the', 'sort', 'situation', 'act', 'then'],
      correct: ['sort', 'the', 'situation', 'then', 'act'],
      translation: "Sorting is not delay. It is the precondition of useful action.",
    },
    {
      type: 'translate',
      instruction: 'For the situation you named, name one specific thing that IS in your hands',
      prompt: 'What is in my hands here is _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's run one situation through the sort.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind a current money situation that is taking up space in your head. A bill, an uncertainty, a request, a loss, an upcoming change. Anything that is producing some background hum of worry.",
      },
      {
        speaker: 'rwen',
        rwenLine: "First column: what about this is actually in your hands? Be specific and small. Not 'fix everything' — but 'I can write the email', 'I can have the conversation', 'I can choose how I respond emotionally', 'I can sleep tonight'.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Second column: what about this is not in your hands? Also be specific. 'Whether they reply.' 'Whether the market does the thing.' 'Whether my brother changes his behaviour.' 'How long this lasts.'",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Most of what I've been worrying about is in column two.", native: '', correct: true, feedback: "Very common finding. The worry has been doing nothing useful — and the part you can move on has been getting starved of attention. The redirection of energy is the practical result of this lesson." },
          { target: "I see something specific in column one I had not been doing.", native: '', correct: true, feedback: "That is the gold. One small action you can take that you had not been taking. Not because the action solves the situation — but because spending energy where it can actually move makes the situation smaller, even if not by much." },
          { target: "I see that what I'm calling worry is actually grief about something I cannot change.", native: '', correct: true, feedback: "An important distinction. Grief is different from worry. Grief is the appropriate response to loss; it is not solved, only honoured. Naming it grief — instead of treating it as a problem to fix — is the right move." },
          { target: "I see that I have been blaming myself for something that was not mine to prevent.", native: '', correct: true, feedback: "One of the most common shapes self-criticism takes. The dichotomy of control extends backwards too: the things that have already happened were also, in many cases, not yours to prevent. Releasing the blame is not absolution; it is accuracy." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The sort doesn't change the world. It changes where your energy goes. That is, in the long run, almost everything.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is "discernment" in this lesson?',
        correct: ['knowing what is in your hands and what is not', 'knowing which is which and spending energy accordingly', 'the practice of seeing which is which', 'sorting what is up to you from what is not', 'distinguishing what is in your hands from what is not'],
      },
      {
        prompt: 'Complete the principle: "Most chronic money anxiety is energy spent on what is _____ in your hands."',
        correct: ['not'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when a money worry arrives, ask one question: 'Is this in my hands?' If yes, name one small thing you can actually do. If no, take one breath, name that it is not yours, and let it pass through. The mission is the question, not the answer.",
    rwenSignoff: "One question. One breath. That's the practice.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 9. Rwen invites a short conversation about one specific current money situation and walks the user through the sort — what is in their hands, what is not. The aim is to redirect energy, not to solve the situation.",
    rwenRole: "Rwen — calm, structured, NOT a financial advisor. Helps the user list specifically what is in their hands and what is not. Does NOT advise the financial action itself. Does NOT minimise the size of the not-in-your-hands column. If the user is in real crisis (cannot afford essentials), Rwen names that real-world support is the right next step and offers to keep working with the emotional layer of the situation.",
    successCriteria: "User names one situation and produces a clear two-column sort: in my hands / not in my hands. User identifies one small action in the in-my-hands column they had not been taking. Bonus if the user recognises that some of their suffering has been grief in disguise (rather than worry).",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
