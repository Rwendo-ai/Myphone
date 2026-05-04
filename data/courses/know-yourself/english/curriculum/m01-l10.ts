import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-attention-as-practice',
  module: 1,
  lesson: 10,
  title: 'Attention as a Practice, Not a Performance',
  estimatedMinutes: 7,
  xpReward: 40,

  hook: {
    rwenLine: "This is the last lesson of Unit 1. Before we move on to the body, the feelings, the stories, and the rest, I want to say one thing clearly. Everything we've done in the last nine lessons is a practice — something you keep returning to — not a performance you get right and finish.",
    culturalNote: "Modern self-help often confuses practice with achievement. You don't 'become mindful'. You practise mindfulness, and on most days you do badly, and that is fine. The traditions that have kept these practices alive for thousands of years did so by treating them as a way of life, not a course to complete. We're borrowing that framing.",
  },

  chunks: [
    {
      id: 'practice',
      target: 'Practice',
      native: 'Something you do regularly, with no expectation that you will ever finish it or perfect it',
      literal: 'Across traditions — Buddhist, Christian contemplative, Stoic; also modern habit science (Clear, Fogg)',
      emoji: '🪷',
      phonetic: "A practice is not a project. It does not have a finish line.",
      audioRef: null,
    },
    {
      id: 'performance_mode',
      target: 'Performance mode',
      native: "Treating an inner skill the way you would treat a job interview — pass or fail, success or failure",
      literal: "Carol Dweck — fixed mindset applied to self-development; also Brené Brown on perfectionism",
      emoji: '🎭',
      phonetic: "The fastest way to quit a practice is to start grading yourself on it.",
      audioRef: null,
    },
    {
      id: 'beginning_again',
      target: 'Beginning again',
      native: "The core move of any practice — when you've fallen off, missed days, stopped — simply start again, today, without ceremony",
      literal: 'Pema Chödrön — "the practice is beginning again"; also habit science on streak recovery',
      emoji: '🌱',
      phonetic: "You will fall off. You will miss days. The practice is the returning, exactly as it has always been.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How a practice differs from a project',
    explanation: "A project is finished. You launch the thing, ship the thing, complete the thing. A practice is never finished. You sit, you walk, you breathe, you write, and tomorrow you do it again. The error most adults make with self-development is treating it like a project — read the book, take the course, fix the self. The frame that actually works is the older one: you are simply someone who practises this now.",
    examples: [
      { target: 'Project frame: "I will become a calm person."', native: 'Practice frame: "I am someone who practises returning to my breath."' },
      { target: 'Project frame: "I will master self-knowledge in 100 lessons."', native: 'Practice frame: "I am someone who pays attention to my own life, on most days, imperfectly."' },
      { target: 'Project frame: "I missed three days. I have failed."', native: 'Practice frame: "I missed three days. I begin again, today."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Practice', right: 'Something you do regularly, with no finish line' },
        { left: 'Performance mode', right: 'Treating an inner skill as pass-or-fail' },
        { left: 'Beginning again', right: 'The core move when you have fallen off — start, today, without ceremony' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You missed five days of practice. According to this lesson, what is the right move?',
      question: 'Pick the response most aligned with the lesson',
      options: [
        { text: 'Restart the whole course from Lesson 1 to make up for it', correct: false },
        { text: 'Decide self-development is not for you and stop', correct: false },
        { text: 'Open the next lesson today, without ceremony, and begin again', correct: true },
      ],
      explanation: "The first answer is performance mode in disguise. The second is fusion with a story. The third is the practice — and the only one that has ever worked, for anyone, in any tradition.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'A project is finished. A _____ is never finished — only continued.',
      options: ['practice', 'performance', 'plan'],
      correct: 'practice',
      context: 'The shift from project to practice is one of the most useful framings in adult self-development.',
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the core move whenever you have fallen off the practice?',
      prompt: 'The phrase is:',
      correct: ['beginning again', 'begin again', 'start again', 'starting again', 'begin today', 'begin again, today'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the lesson title',
      words: ['attention', 'as', 'a', 'practice', 'not', 'a', 'performance'],
      correct: ['attention', 'as', 'a', 'practice', 'not', 'a', 'performance'],
      translation: "The framing of the entire course, in seven words.",
    },
    {
      type: 'translate',
      instruction: 'Reframe this thought from project to practice: "I will become a calm person."',
      prompt: 'I am someone who...',
      correct: ['practises', 'practises returning to my breath', 'practices', 'practices being calm', 'practises being present', 'practises being calm', 'is practising calm', 'practises calm', 'practises calmness'],
    },
  ],

  rwenDialogue: {
    intro: "Last conversation of the unit. Let me ask you the question I'd ask if we were sitting across a table from each other.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Of the ten lessons we've done together, which one — honestly — would you most like to keep close as we move into the rest of the course?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Lesson 4 — 'When you notice you're distracted, you're already back.'", native: '', correct: true, feedback: "A good one to carry. It dissolves the most common reason people quit any inner practice — the false belief that wandering means failure. You'll need it for Units 2-10." },
          { target: "Lesson 7 — 'The pause between stimulus and response.'", native: '', correct: true, feedback: "The most practical lesson of the unit. Builds the gap that makes Units 6, 7, and 8 possible — relationship, communication, habit change all live in that gap." },
          { target: "Lesson 9 — 'Sitting with what you'd rather avoid.'", native: '', correct: true, feedback: "The hardest one, and arguably the most load-bearing. Without that capacity, the emotional work in Unit 3 and onwards has nowhere to land." },
          { target: "Lesson 6 — 'What you pay attention to becomes your life.'", native: '', correct: true, feedback: "A motivating one to keep close. It connects every small daily move you make in this course to the larger arc of who you become over months and years." },
          { target: "Honestly, none of them stuck — I'm not sure I'm getting this.", native: '', correct: true, feedback: "I appreciate the honesty more than any other answer. The unit is dense and the work is slow. Open Unit 2 anyway. Sometimes the lessons land later, sideways, on a day you didn't expect. Beginning again is the move." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you said — that lesson is now yours to keep. Carry it into the next unit. We are going to leave the head for a while now, and visit the body. The next unit is where attention starts having a place to live.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase — what is the framing this lesson asks you to adopt for self-development? (Not a project, but a ___)',
        correct: ['practice', 'a practice'],
      },
      {
        prompt: "What is the core move whenever you have fallen off the practice?",
        correct: ['beginning again', 'begin again', 'start again', 'starting again'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Take 60 seconds. Write down — paper, phone notes, even just in your head — one sentence: 'I am someone who practises ____.' Fill in the blank with whatever you want to keep practising. That sentence is yours.",
    rwenSignoff: "Unit 1 is complete. You are not a more mindful person. You are simply someone who practises this now. That is enough. Famba zvakanaka — go well. I'll see you in Unit 2.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 10 and therefore Unit 1. Rwen invites a slightly longer reflective conversation in which the user articulates, in their own words, one practice they want to carry forward and what 'beginning again' will look like for them when they fall off.",
    rwenRole: "Rwen — warm, congratulating without being saccharine. Helps the user articulate (1) one practice from Unit 1 they want to keep, (2) what beginning again will look like specifically (e.g. 'I will open the app on the next day I miss, without restarting the unit'), and (3) one honest acknowledgement of where they're likely to fall off and what they'll do then.",
    successCriteria: "User commits to one specific practice from Unit 1, articulates a specific 'begin again' protocol for when they miss days, and names one realistic obstacle they expect to encounter. Bonus if they identify which lesson of Unit 1 most surprised them or shifted something.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
