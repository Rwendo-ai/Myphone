import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-already-back',
  module: 1,
  lesson: 4,
  title: "When You Notice You're Distracted, You're Already Back",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here is one of the most useful sentences in the whole course. Read it slowly. The moment you notice you were distracted is itself an act of attention. By the time you say 'I'm distracted', you're already not distracted any more.",
    culturalNote: "This insight is the quiet heart of every meditation tradition — and it's also why people give up on meditation. They think wandering means failure. It means the opposite: it means the witness has come back online.",
  },

  chunks: [
    {
      id: 'noticing_is_returning',
      target: 'Noticing is returning',
      native: "The instant you notice you were elsewhere, you are no longer elsewhere",
      literal: 'MBSR / contemplative pedagogy — the act of noticing IS the act of arriving',
      emoji: '🎯',
      phonetic: "There is no time gap between noticing and being back. They are the same event.",
      audioRef: null,
    },
    {
      id: 'the_rep',
      target: 'The rep',
      native: "Each time you notice and return is one repetition of the skill — the only thing that builds it",
      literal: 'Skill acquisition / Anders Ericsson on deliberate practice — the unit of practice is the corrected error',
      emoji: '🔁',
      phonetic: "A 20-minute meditation with 50 wanderings = 50 reps. That's a great session.",
      audioRef: null,
    },
    {
      id: 'no_judgement',
      target: 'No judgement',
      native: "When you catch your mind wandering, return without scolding yourself for having wandered",
      literal: 'Kabat-Zinn — non-judgement is the third pillar of mindfulness; self-criticism IS another form of distraction',
      emoji: '🤲',
      phonetic: "The scolding is itself a thought. Treat it the same way: notice, return.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The wandering–return cycle',
    explanation: "Attention is not a state you achieve and hold. It is a cycle: focus, drift, notice, return. The cycle is the practice. Trying to skip the drift is like trying to do push-ups without lowering yourself first.",
    examples: [
      { target: 'Drift: thinking about dinner during the breath', native: 'Notice: "Oh, I drifted." Return: back to the breath. One rep complete.' },
      { target: 'Drift: replaying an argument from yesterday', native: 'Notice: "I am rehearsing." Return: this breath, now. One rep complete.' },
      { target: "Drift: judging yourself for drifting", native: 'Notice: "Even the scolding is a thought." Return: back to the breath. Still one rep.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Noticing is returning', right: 'The act of noticing IS the act of being back' },
        { left: 'The rep', right: 'One full cycle of drift, notice, return' },
        { left: 'No judgement', right: 'Returning without scolding yourself for having wandered' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Halfway through your one-breath practice, your mind starts planning dinner. Best response?',
      question: 'Pick the response that aligns with the lesson',
      options: [
        { text: '"I always do this. I am terrible at this." Then keep going.', correct: false },
        { text: '"Oh — drifted." Return to the breath. No commentary.', correct: true },
        { text: 'Force the dinner thoughts away and try harder to focus.', correct: false },
      ],
      explanation: "The middle one is the practice. The first adds self-criticism, which is itself another wandering. The third uses force — which raises tension and makes the wandering worse next time.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'A 20-minute meditation with 50 wanderings is not a bad session — it is 50 ___ of the only skill that matters.',
      options: ['reps', 'seconds', 'failures'],
      correct: 'reps',
      context: "Each wandering, noticed and returned from, is one repetition of the skill of returning. The skill is built by the returning, not by the staying.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — by the time you say "I am distracted", you are...',
      prompt: 'You are already...',
      correct: ['back', 'not distracted', 'returning', 'already back', 'no longer distracted'],
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange these words into the lesson title',
      words: ['back', 'distracted', 'noticing', 'when', 'are', 'already', 'you', 'you', "you're", "you're"],
      correct: ['when', "you're", 'noticing', "you're", 'distracted', 'you', 'are', 'already', 'back'],
      translation: "Read it once a day for the next month and it will save you many hours of self-criticism.",
    },
    {
      type: 'translate',
      instruction: 'Your mind has wandered for the tenth time in a row. What do you do?',
      prompt: 'No judgement. No scolding. Just...',
      correct: ['return', 'come back', 'go back', 'return to the breath', 'one more rep', 'one more time'],
    },
  ],

  rwenDialogue: {
    intro: "Let's reframe what you might already think of as 'failed' meditation.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Have you ever tried to meditate and given up because your mind kept wandering and you decided you were just bad at it?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — many times.", native: '', correct: true, feedback: "Then you have been doing the practice without realising it. Every wandering you noticed was a rep. The thing you thought was failure was the actual skill, in reps you weren't counting." },
          { target: "I haven't really tried.", native: '', correct: true, feedback: "That's an honest answer. When you do try, remember: the wandering is not the obstacle. The wandering is the gym. Each return is one rep." },
          { target: "I've never had that thought — I just gave up because I got bored.", native: '', correct: true, feedback: "Boredom is its own teaching, and we have a whole lesson on it. For now: boredom that you notice is also a rep. You're paying attention to something you'd rather skip — that's the skill." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "From today, the question is no longer 'did my mind wander?' — it's 'did I notice that it wandered?' And if you did, you were practising. There is no other practice.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Complete the sentence: When you notice you are distracted, you are already...',
        correct: ['back', 'returning', 'not distracted', 'no longer distracted', 'already back'],
      },
      {
        prompt: 'A meditation with many wanderings is not a failed session — it is a session with many...',
        correct: ['reps', 'repetitions', 'returns', 'practice reps'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when you catch your mind has wandered — anywhere, any time, in any task — say to yourself: 'one rep'. Then carry on. Do this once. Twice if you remember.",
    rwenSignoff: "Reframe the wandering. The wandering is the practice.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen invites them into a 3-minute conversation specifically about a recent moment when they 'failed' at attention — got distracted at work, lost focus during a conversation, drifted off during something they wanted to be present for. Rwen helps them re-read that moment as a returning event rather than a failure event.",
    rwenRole: "Rwen — warm, curious, slightly playful. Does NOT minimise the user's frustration with their own distraction. Helps them see that the moment of noticing was itself the skill, and that reframing changes what they will do next time it happens.",
    successCriteria: "User names a specific recent moment of distraction, identifies the moment they noticed they were distracted, and reframes that noticing as the skill rather than the failure. Bonus if they articulate what they will say to themselves the next time their mind wanders during something important.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
