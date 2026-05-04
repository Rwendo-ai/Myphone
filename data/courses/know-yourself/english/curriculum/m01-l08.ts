import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-boredom-is-information',
  module: 1,
  lesson: 8,
  title: 'Boredom Is Information',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Most people treat boredom like an emergency. The phone comes out. The fridge opens. Something — anything — to fill the silence. Today we try a different move. We treat boredom as a messenger and ask what it has to say.",
    culturalNote: "Researchers like Sandi Mann and John Eastwood have shown that boredom — the kind we are protected from by constant input — is correlated with creativity, problem-solving, and self-reflection. Not because boredom feels good, but because it forces the mind to do something other than consume. Jenny Odell's 'How to Do Nothing' is the long form of this lesson.",
  },

  chunks: [
    {
      id: 'boredom',
      target: 'Boredom',
      native: "An uncomfortable state of unstimulation in which the mind has run out of easy input and starts producing its own",
      literal: "John Eastwood (boredom researcher) — boredom is the state of wanting to be engaged but being unable to engage",
      emoji: '🪨',
      phonetic: "Not the same as tiredness. Not the same as sadness. Specifically: under-stimulated and aware of it.",
      audioRef: null,
    },
    {
      id: 'avoidance',
      target: 'Avoidance',
      native: "Reaching for input — phone, food, noise — at the first hint of discomfort, before the discomfort can teach you anything",
      literal: "ACT — experiential avoidance; the move that briefly relieves discomfort but reinforces the inability to tolerate it",
      emoji: '🏃',
      phonetic: "Each successful avoidance makes the next discomfort feel worse, faster.",
      audioRef: null,
    },
    {
      id: 'sitting_with',
      target: 'Sitting with',
      native: "Staying in the boredom long enough to find out what it is actually about — restlessness, longing, fatigue, an unfinished thought",
      literal: 'MBSR / contemplative practice — non-reactive presence to discomfort; also Mihaly Csikszentmihalyi on flow emerging from sustained low-stimulus attention',
      emoji: '🪑',
      phonetic: "Boredom that you stay with usually turns into something else — sometimes a feeling, sometimes a creative idea, sometimes simply rest.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'What boredom is usually telling you',
    explanation: "Boredom is rarely just boredom. Underneath it, there is almost always a more specific signal you have been too busy to read. Three of the most common: a feeling you don't want to feel; tiredness you've been overriding; a hunger for something more meaningful than the easy input you've been substituting for it.",
    examples: [
      { target: 'You feel bored at 10pm and reach for your phone', native: 'Underneath: tiredness, plus a feeling about the day you were avoiding' },
      { target: 'You feel bored at work and check email for the 30th time', native: 'Underneath: a piece of work that requires hard thinking and you keep flinching from it' },
      { target: "You feel bored on a quiet Sunday afternoon", native: 'Underneath: a longing for something — a person, a meaning, a project — you have not let yourself name yet' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Boredom', right: 'Wanting to be engaged but unable to engage' },
        { left: 'Avoidance', right: 'Reaching for input to escape the discomfort' },
        { left: 'Sitting with', right: 'Staying long enough to learn what the discomfort is about' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You are bored. What does this lesson recommend?',
      question: 'Pick the move most aligned with the lesson',
      options: [
        { text: 'Reach for the easiest stimulating input — boredom is unproductive', correct: false },
        { text: 'Force yourself to be productive — boredom is wasted time', correct: false },
        { text: 'Stay in the boredom for a few minutes and see what surfaces underneath it', correct: true },
      ],
      explanation: "Boredom is not the problem to solve. It is the cover for something else — a feeling, a tiredness, a longing. If you escape it instantly, you never find out.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Boredom is rarely just boredom. Underneath, there is almost always a more specific _____.',
      options: ['signal', 'problem', 'failure'],
      correct: 'signal',
      context: 'Reframe: not an emergency, not a deficit. Information.',
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the move you make when you reach for your phone the moment you feel bored?',
      prompt: 'It is called experiential...',
      correct: ['avoidance', 'experiential avoidance'],
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange these words into the lesson title',
      words: ['boredom', 'is', 'information'],
      correct: ['boredom', 'is', 'information'],
      translation: "Treat it as data, not as a problem.",
    },
    {
      type: 'translate',
      instruction: 'Name one of the three things this lesson says boredom often hides',
      prompt: 'Boredom often hides ___, tiredness, or longing for something meaningful.',
      correct: ['a feeling', 'a feeling you are avoiding', 'an avoided feeling', 'an emotion', 'an unwanted feeling', 'feelings'],
    },
  ],

  rwenDialogue: {
    intro: "Let's run an experiment. The next time you feel bored — even today — I want you to try this small thing.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "When boredom shows up, instead of immediately reaching for input, set a tiny timer. Two minutes. Just sit. See what shows up underneath.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two minutes feels easy. I can do that.", native: '', correct: true, feedback: "Try it today. Many people are surprised by what surfaces — sometimes a feeling, sometimes a thought, sometimes just an unexpected calm." },
          { target: "Two minutes sounds harder than I expected.", native: '', correct: true, feedback: "Honest. That difficulty is the lesson. The ease with which we currently fill any blank moment is itself information about how rarely we let our minds rest." },
          { target: "I'd rather do five minutes — go bigger.", native: '', correct: true, feedback: "Admire the ambition. But two is the better starting unit. Build the muscle small. The reps matter more than the duration." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boredom is one of the few free teachers most adults still have access to. The cost of admission is only the willingness not to skip the class.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase — what is the technical term for reaching for input the moment you feel boredom or discomfort?',
        correct: ['avoidance', 'experiential avoidance', 'distraction'],
      },
      {
        prompt: 'Complete the sentence: Boredom is rarely just boredom. Underneath, there is almost always a more specific ___.',
        correct: ['signal', 'feeling', 'message', 'information'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, the next time you feel bored, set a 2-minute timer. Don't pick up your phone. Don't open the fridge. Just sit and see what surfaces. Curiosity, not endurance.",
    rwenSignoff: "Boredom is the room. Something else is in the room with it. Today we say hello to that thing.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 8. Rwen invites them into a short conversation about their default reach when boredom shows up — phone, food, noise, snack, scroll, work — and what they suspect might be underneath. No commitment, no shame, just an honest look.",
    rwenRole: "Rwen — gently curious, NOT moralising about screen time or any specific medium. Asks the user what their boredom usually feels like physically (jittery, heavy, restless), what they reach for, and what they suspect they would feel if they didn't reach. Pure inquiry.",
    successCriteria: "User names the specific thing they reach for when bored, names the physical quality of their boredom (where they feel it, what it feels like), and ventures one guess at what might be underneath the next time they let it sit. Bonus if they identify a specific time of day when this pattern is strongest.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
