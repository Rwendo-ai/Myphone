import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-enough',
  module: 1,
  lesson: 10,
  title: "Enough — and the Life You'd Live If You Believed It",
  estimatedMinutes: 9,
  xpReward: 40,

  hook: {
    rwenLine: "We arrive at the question this whole course has been pointing toward. What is enough? Not in the abstract. Not in someone else's life. In yours. The question matters because most adults, asked it directly, have never sat with it. We aim, instead, at *more* — and *more* is a horizon that recedes as you walk toward it. *Enough* is a different kind of orientation. It is the only one that lets the work of a life be about something other than the chase.",
    culturalNote: "George Kinder's life-planning method has, at its centre, three questions — the third of which is the most powerful question in the field: 'If you went to the doctor and were told you had only a day to live, what feelings would arise? What did you miss? What did you not get to do? What do you now wish you had done?' We hold the question with care. Vicki Robin's *Your Money or Your Life* gave the modern world the word 'enough' as a conscious orientation. Viktor Frankl said it earlier and from much darker ground: *meaning is what allows us to bear almost anything.* This lesson does not give you an answer. It gives you the question — and a place to stand while you sit with it.",
  },

  chunks: [
    {
      id: 'enough',
      target: 'Enough',
      native: 'A self-defined point at which what you have, for the life you actually want, is sufficient',
      literal: 'Vicki Robin — *Your Money or Your Life*; the modern conscious-finance frame for "the chase has an end if you choose one"',
      emoji: '🌅',
      phonetic: '"Enough" is not the same as "the most I can imagine." It is the amount that lets the rest of the work of your life be about something else.',
      audioRef: null,
    },
    {
      id: 'kinder_question',
      target: "The third question",
      native: 'If you knew your life was very short, what would you regret not having done? What did you miss?',
      literal: "George Kinder — life planning; the third of the 'EVOKE' three questions; the one that most reliably surfaces what actually matters",
      emoji: '🕯️',
      phonetic: "The question rarely returns the answer 'I should have made more money.' It almost always returns something else.",
      audioRef: null,
    },
    {
      id: 'meaning_orients_money',
      target: 'Meaning orients money',
      native: 'Once you know what your "enough" is for — what life it serves — money becomes a means rather than the goal',
      literal: 'Frankl — meaning as orientation; ACT — values clarity allowing committed action; Kinder — money in service of a life, not vice versa',
      emoji: '🧭',
      phonetic: "The number is whatever it needs to be to fund the life. The life comes first.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Enough is the answer to a different question',
    explanation: "The question 'how much money do I want?' returns infinity. The question 'what life do I want, and what does that life require?' returns a number — sometimes smaller than expected, sometimes larger, but always finite. The orientation of this whole course has been preparing you to ask the second question instead of the first. From here, money becomes a tool for something. Without the something, more money is just more — and more, in itself, is not a destination.",
    examples: [
      { target: 'The first question (infinite)', native: '"How much money would I like to have?" — produces no end-state' },
      { target: 'The second question (finite)', native: '"What life do I actually want, and what does that life require?" — produces a number, eventually' },
      { target: 'The deathbed question', native: '"What would I regret not having done?" — almost always returns relationships, presence, courage, or specific small joys, rarely "earnings"' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Enough', right: 'A self-defined point of sufficiency for the life you actually want' },
        { left: "The third question", right: 'If your life were short, what would you regret not having done?' },
        { left: 'Meaning orients money', right: 'Money serves the life; the life does not serve the money' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the question this lesson asks you to sit with?',
      question: 'Pick the question that returns a finite answer',
      options: [
        { text: '"How much money would I ideally have?"', correct: false },
        { text: '"What life do I actually want, and what would it require?"', correct: true },
        { text: '"What is the most I could possibly earn?"', correct: false },
      ],
      explanation: "The first and third return no end-state. The middle one points at a finite, specifiable answer — the only one that lets 'enough' become real.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: '"Enough" is not the same as "the most I can imagine." It is the amount that lets the rest of the work of your life be about something _____.',
      options: ['else', 'big', 'safe'],
      correct: 'else',
      context: "If money is the goal, the rest of the life is the means. If a life is the goal, money is the means. Most adults discover, on examination, that they want the second framing.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what would you regret not having done if your life were very short? (For yourself. Not for me.)',
      prompt: 'I would regret not having _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle of the whole course',
      words: ['life', 'serves', 'a', 'money'],
      correct: ['money', 'serves', 'a', 'life'],
      translation: "Not the other way around.",
    },
    {
      type: 'translate',
      instruction: 'In one sentence — describe the life that, if you had enough to fund it, would let you stop chasing',
      prompt: 'The life I would live, if I believed I had enough, would look like _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "We are at the last lesson. I am going to ask you the question we have been building toward. Take your time.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Imagine, gently, that a doctor has told you your life will be short. Not tomorrow — but soon enough that you cannot defer the things that matter. What would you regret not having done? What did you miss? Whose face would you wish you had spent more time with?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hold the answers for a moment, before you say them. They are tender. Let them be tender.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I would regret not being more present with the people I love.", native: '', correct: true, feedback: "Almost universal answer, and not less true for being universal. Notice that the regret is not about earnings. It is about presence — which is in your hands, today, even at the funding level you have." },
          { target: "I would regret not doing the work I actually wanted to do, instead of the work I did to be safe.", native: '', correct: true, feedback: "One of the most common findings of Kinder's work. 'Enough' is often, on examination, less than what we have been chasing — and the difference would have funded a different life. This is not advice to quit. It is information." },
          { target: "I would regret the things I was scared to try.", native: '', correct: true, feedback: "Fear-driven omission is one of the most common deathbed regrets in the literature. The Stoics said: do the brave thing now. We don't have to make it dramatic. We just have to take the smaller fears more seriously than we have been." },
          { target: "I would regret time spent worrying about money I either had or could have stopped chasing.", native: '', correct: true, feedback: "The whole course has been building toward this. The worry was not free. It cost something. The cost is what you would not get back. Knowing this changes, sometimes, what you are willing to keep paying." },
          { target: "I would regret things specific to my own life that no one else's list would name.", native: '', correct: true, feedback: "Honour those. They are yours. The course's whole bet is that the answer is yours and that no curriculum can give it to you. We have only built the room you can sit in to find it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now: knowing what you would regret — what is the smallest version of that life you could begin to live, this week, with what you already have?",
      },
      {
        speaker: 'rwen',
        rwenLine: "That is the answer to 'enough'. Not a number. A direction. The number is whatever it needs to be to fund the direction. The direction is what your one short life is for.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is "enough"?',
        correct: ['the amount that funds the life you actually want', 'a self-defined point of sufficiency for the life you want', 'enough to fund the life you want', 'sufficient for the life you actually want', 'the amount that lets the rest of life be about something else'],
      },
      {
        prompt: "Complete the principle: \"Money serves a _____.\"",
        correct: ['life'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, write down — for yourself, on paper or your phone — one sentence in this exact form: 'Enough, for me, looks like ___.' Don't worry if the sentence is incomplete. The course doesn't end when you finish writing. It begins.",
    rwenSignoff: "One sentence. The whole course was the lead-up to it. Take your time.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 10 — the final lesson of the course. Rwen offers a slightly longer, slower closing conversation. The user is invited to articulate one version of their 'enough', one regret-they-would-not-want, and one small move they can make this week toward the life they want. Rwen treats this as a real ending, not a transition to a sales pitch or a next module.",
    rwenRole: "Rwen — slow, present, reverent without being sentimental. NOT a financial advisor. NOT trying to upsell. Helps the user articulate one sentence about their 'enough' and one specific small move. If the user becomes emotional, Rwen does not analyse — Rwen names that this is what mattered, and stays.",
    successCriteria: "User produces one sentence in the form 'Enough, for me, looks like ___'. User names one specific small action they could take this week aligned with that sentence. Rwen does not advise on money decisions and does not pivot to next-course content. Bonus if the user notices that the answer to 'enough' was different from what they thought it would be at the start of the course.",
    estimatedMinutes: 4,
    bonusXp: 15,
  },
};

export default lesson;
