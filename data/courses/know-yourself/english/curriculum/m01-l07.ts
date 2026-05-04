import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-the-pause',
  module: 1,
  lesson: 7,
  title: 'The Pause Between Stimulus and Response',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "There is a famous line, often attributed to Viktor Frankl: 'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.' Whether or not Frankl actually wrote it, it points to something real.",
    culturalNote: "Stoics called this prohairesis — the faculty of choice. Buddhist psychology calls it the gap between feeling and reaction. Modern neuroscience locates it (loosely) in the prefrontal cortex's capacity to inhibit the limbic system's first reply. The space is small. The space is everything.",
  },

  chunks: [
    {
      id: 'stimulus',
      target: 'Stimulus',
      native: "Anything that lands on you and asks for a reaction — a word, a look, a notification, a memory, a feeling",
      literal: "Behaviourist psychology — the input half of stimulus-response; in this lesson, broadened beyond external triggers",
      emoji: '⚡',
      phonetic: 'Stimuli arrive whether you want them or not. They are not the question.',
      audioRef: null,
    },
    {
      id: 'the_pause',
      target: 'The pause',
      native: "The small space — sometimes a fraction of a second — where you can notice what is happening before you react",
      literal: 'Viktor Frankl (attributed); Stoic prohairesis; modern emotion regulation literature (James Gross)',
      emoji: '⏸️',
      phonetic: 'It is not always there at first. It can be widened by practice.',
      audioRef: null,
    },
    {
      id: 'response',
      target: 'Response',
      native: "What you actually do — chosen, even slightly, rather than purely reflexive",
      literal: 'In contrast to a reaction: a reaction is automatic; a response involves at least a flicker of choice',
      emoji: '🎯',
      phonetic: 'Reaction: the sharp reply, the slammed door, the hot text. Response: the half-second longer.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How to widen the pause',
    explanation: "The pause is not a thing you have or don't have. It is a capacity you can grow. Three reliable ways to widen it: notice the body cue (heat, jaw clench, racing heart) that means the stimulus has landed; take one breath before replying; name what you're feeling, even silently. Each move buys you time. Time is everything.",
    examples: [
      { target: "Stimulus: a sharp comment from someone you love", native: "Reaction: snap back. Pause move: breath, name the heat in your chest, then choose the next word." },
      { target: "Stimulus: a notification you didn't ask for", native: "Reaction: open it. Pause move: notice the pull, breathe once, decide if now is when you want to spend that attention." },
      { target: "Stimulus: a memory that arrives uninvited", native: "Reaction: spiral. Pause move: notice the arrival, name the feeling ('this is regret'), let it pass through without acting." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its definition',
      pairs: [
        { left: 'Stimulus', right: 'Anything that lands on you and asks for a reaction' },
        { left: 'The pause', right: 'The space where noticing becomes possible before reacting' },
        { left: 'Response', right: 'What you do — chosen, even slightly, rather than reflexive' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says something that hits a nerve. The first thing to do isn't to reply better. It is to...",
      question: 'Pick the move this lesson recommends',
      options: [
        { text: 'Compose a perfect response in your head', correct: false },
        { text: 'Notice the body cue that the stimulus has landed (heat, tension, breath)', correct: true },
        { text: 'Try to feel less affected so you can stay calm', correct: false },
      ],
      explanation: "You can't choose the response well from inside the reaction. The first move is interoception — noticing what just happened in your body. From there, the pause has somewhere to live.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Between stimulus and response there is a _____. In that space is our power to choose.',
      options: ['space', 'choice', 'reaction'],
      correct: 'space',
      context: 'The pause is a space, not an action. You do not create it. You discover it is already there, by slowing down enough to find it.',
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the difference between a reaction and a response?',
      prompt: 'A reaction is automatic. A response involves...',
      correct: ['choice', 'a choice', 'choosing', 'some choice', 'a moment of choice', 'even slight choice', 'awareness', 'noticing'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central claim",
      words: ['between', 'a', 'response', 'space', 'is', 'and', 'there', 'stimulus'],
      correct: ['between', 'stimulus', 'and', 'response', 'there', 'is', 'a', 'space'],
      translation: "Read it slowly. Even half a second of space changes a life.",
    },
    {
      type: 'translate',
      instruction: 'Name one of the three reliable ways to widen the pause',
      prompt: 'Notice the body cue, take a breath, or...',
      correct: ['name the feeling', 'name the emotion', 'name what you feel', 'name what you are feeling', 'name it', 'naming the feeling', 'naming'],
    },
  ],

  rwenDialogue: {
    intro: "I want you to bring to mind a moment from the last week where you reacted instead of responded. We're not going to relive it. We're just going to see if there was a pause we could have widened.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of one moment — a sharp word, a notification, a thought — where, in hindsight, you wish you'd had a slightly longer half-second.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Got one. I snapped at someone I love.", native: '', correct: true, feedback: "Painful but useful. The next time the same kind of stimulus arrives, your job is not to be perfect. It is to notice the heat in your body half a second sooner. That's the whole skill." },
          { target: "Got one. I sent a message I shouldn't have.", native: '', correct: true, feedback: "Most of us have. Texting in particular collapses the pause — the speed of typing is faster than the speed of real consideration. Building in a 'wait one breath before sending' rule is one tiny intervention many people find useful." },
          { target: "Got one. I went down a rabbit hole I didn't want to.", native: '', correct: true, feedback: "Attention reactions count too. The pull of a feed is a stimulus, the scroll is a reaction, and the pause is the half-second where you could have noticed the pull as a feeling rather than an order." },
          { target: "I don't have one — at least nothing I'd call a reaction I regret.", native: '', correct: true, feedback: "Fair. Either you've already built this, or your week was unusually steady, or there's a small one you haven't surfaced yet. Either way, when one arrives, you'll have the frame ready." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "We are not aiming for a life with no reactions. We are aiming for a life with a slightly wider gap. That gap, over years, is the difference between regret and self-respect.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Complete the famous line: "Between stimulus and response there is a ___."',
        correct: ['space', 'pause', 'gap'],
      },
      {
        prompt: 'Name one of three reliable ways to widen the pause',
        correct: ['breath', 'one breath', 'take a breath', 'name the feeling', 'name what you feel', 'name it', 'notice the body', 'notice the body cue', 'notice your body', 'body cue', 'interoception'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, before you reply to one message — any message — take one breath first. Just one. Then reply. Notice if anything was different about the reply.",
    rwenSignoff: "One breath before one reply. The smallest intervention. Real over time.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen helps them rehearse the pause for a specific upcoming situation they expect to find difficult — a conversation with someone, a recurring frustration at work, an evening when they tend to react. The aim is to mentally pre-load the three pause moves (notice body, breathe, name) so they are available in the moment.",
    rwenRole: "Rwen — supportive, practical, NOT promising the user they will succeed perfectly. Helps them name the specific situation, the specific stimulus, and the specific body cue they are likely to feel. Treats the upcoming difficulty as a realistic challenge, not a test the user will pass or fail.",
    successCriteria: "User names a concrete upcoming situation where they expect to react rather than respond, identifies the body cue that will probably tell them the stimulus has landed, and rehearses the sequence (notice → breathe → name) at least once. Bonus if they articulate that they are not aiming for perfection but for a slightly wider gap.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
