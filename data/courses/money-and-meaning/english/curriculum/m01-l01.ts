import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-money-is-a-relationship',
  module: 1,
  lesson: 1,
  title: 'Money Is a Relationship, Not a Number',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Before we begin — a clear note. This is not a financial advice course. I am not your financial advisor. We are not going to talk about investments, budgets, taxes, or apps. We are going to talk about the part of money that lives between your ribs. Why it makes you flinch. Why it shows up in your relationships. Why you bought the thing that didn't make you feel better. Most adults will not talk about that honestly. This course is a place to do that.",
    culturalNote: "George Kinder, who founded the field of life planning, says money has more emotional content than almost any other subject in adult life. Brené Brown calls money 'a tender and tangled subject — for everyone.' We start where they start: money is a relationship you are already in. And like every relationship, it can be examined, and it can change.",
  },

  chunks: [
    {
      id: 'money_relationship',
      target: 'Money as relationship',
      native: 'The set of feelings, beliefs, fears, and behaviours you have around money — separate from the money itself',
      literal: 'George Kinder — life planning; the foundational claim that money is psychological before it is mathematical',
      emoji: '💞',
      phonetic: 'You have a relationship with money whether you have noticed or not.',
      audioRef: null,
    },
    {
      id: 'emotional_arithmetic',
      target: 'Emotional arithmetic',
      native: 'The hidden way feelings shape every money decision — even the ones that look "rational"',
      literal: 'Behavioural economics (Kahneman, Thaler) — used here as observation, not gospel; people are not consistent maximisers',
      emoji: '🧠',
      phonetic: 'Every spreadsheet has a person crying or proud or scared inside it.',
      audioRef: null,
    },
    {
      id: 'examined_money',
      target: 'Examined money',
      native: 'The slow practice of noticing the relationship instead of just having it',
      literal: 'Stoic prosoche + ACT awareness — applied to a domain most adults never bring under the lamp',
      emoji: '🔦',
      phonetic: 'Most people inherit a relationship with money. Few people choose one.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Money is psychological before it is mathematical',
    explanation: "When two people make the same amount of money, their experience of it can be completely different. One feels secure; the other feels three months from disaster. The number is the same. The relationship is different. This is the whole reason this course exists. We work on the relationship — and let the math be the math.",
    examples: [
      { target: 'Two people earning identical amounts', native: 'One sleeps fine; the other lies awake checking the balance' },
      { target: 'A person who pays off a debt', native: 'Feels relief for one day, then finds a new thing to worry about' },
      { target: 'A person with very little', native: 'Gives more than the wealthy friend at the same table — and feels lighter for it' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its definition',
      pairs: [
        { left: 'Money as relationship', right: 'The feelings and beliefs you have around money, separate from the money' },
        { left: 'Emotional arithmetic', right: 'The way feelings shape every money decision' },
        { left: 'Examined money', right: 'Noticing the relationship instead of just having it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these statements is closest to what this course is about?',
      question: 'Pick the one that matches the framing of this lesson',
      options: [
        { text: 'How to invest what you have so it grows', correct: false },
        { text: 'How to notice the feelings, beliefs, and patterns you already have around money', correct: true },
        { text: 'A budgeting system you should follow every week', correct: false },
      ],
      explanation: "This course is about your relationship with money — emotional, relational, philosophical. It is not financial advice. For investment or budgeting questions, the right move is a licensed professional.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Money is _____ before it is mathematical.',
      options: ['psychological', 'optional', 'permanent'],
      correct: 'psychological',
      context: "The number is the easy part. The relationship is what we work on here.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the difference between two people earning the same amount but feeling completely different about it?',
      prompt: 'The number is the same. The _____ is different.',
      correct: ['relationship', 'feeling', 'experience', 'emotional relationship', 'meaning'],
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange the words into the orienting principle',
      words: ['relationship', 'a', 'is', 'money', 'a', 'not', 'number'],
      correct: ['money', 'is', 'a', 'relationship', 'not', 'a', 'number'],
      translation: "The whole course is downstream of this sentence.",
    },
    {
      type: 'translate',
      instruction: 'In one sentence, name one feeling you noticed about money in the last week. (Just for yourself — anything counts.)',
      prompt: 'Recently I noticed feeling _____ about money',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's start somewhere small. I'm going to ask you to notice one thing about your relationship with money — without judging it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think back to the last time you checked how much you have — your balance, your wallet, an app, anything. Don't replay it carefully. Just remember the feeling.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I felt a small drop in my chest. I was hoping it was more.", native: '', correct: true, feedback: "That's a real datum. Most people feel some version of that drop. The drop is part of the relationship — it does not need fixing today, only seeing." },
          { target: "I felt nothing. I just looked at the number and moved on.", native: '', correct: true, feedback: "Sometimes the relationship is dissociation — you have learned not to feel anything because the feeling is too much. That is also information. Treating yourself gently is the right next step." },
          { target: "I felt relief, briefly. Then I started worrying about something else.", native: '', correct: true, feedback: "The relief-and-then-new-worry loop is one of the most common shapes a money relationship takes. We will look at this directly later." },
          { target: "I haven't checked recently. I'm avoiding it.", native: '', correct: true, feedback: "Avoidance is one of the loudest signals there is. It does not mean anything is wrong with you. It means there is something you are not yet ready to look at — and noticing that is the first move." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you said: that is the relationship. We are not trying to make it better today. We are trying to see it clearly. That is the entire skill of this course.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one phrase: what is this course actually about? (Hint: not the math.)',
        correct: ['the relationship with money', 'your relationship with money', 'the emotional relationship with money', 'how you feel about money', 'feelings and beliefs about money', 'the psychological side of money'],
      },
      {
        prompt: 'Complete the principle: "Money is _____ before it is mathematical."',
        correct: ['psychological', 'emotional', 'relational'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "One time today, when money comes up — paying for something, checking a balance, lending or borrowing, hearing someone else mention it — pause for a single breath and notice what you feel. Don't fix it. Don't analyse it. Just say to yourself, silently: 'There it is.' That's the whole assignment.",
    rwenSignoff: "One breath. One feeling. That's the start.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen invites a short coaching conversation about the user's general relationship with money — not a problem to solve, just an invitation to describe. The user names one feeling, one belief, or one moment from the last month that captures their relationship with money. Rwen mirrors back what they hear without analysing or advising.",
    rwenRole: "Rwen — warm, unhurried, clearly NOT a financial advisor. Does not give money advice of any kind. Does not say 'you should…' about any financial decision. Mirrors what the user names; asks one open question. If the user asks for financial advice, gently says they should speak with a licensed professional and offers to keep talking about the feelings instead.",
    successCriteria: "User describes one feeling, belief, or moment about their relationship with money in concrete language. Rwen does not give financial advice and does not analyse the user's situation. Bonus if the user notices that articulating the feeling already shifts something.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
