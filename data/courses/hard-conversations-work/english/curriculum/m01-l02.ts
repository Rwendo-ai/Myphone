import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-observation-without-evaluation',
  module: 1,
  lesson: 2,
  title: 'Observation Without Evaluation',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today's the day you become someone who can describe what happened without telling the other person what it meant. This one move — separating data from interpretation — is the first step of NVC, and it's the move most people skip when they're upset.",
    culturalNote: "Marshall Rosenberg, who developed Nonviolent Communication, said observation without evaluation is the highest form of human intelligence. He may have been overselling it. But he wasn't wrong about its scarcity. In a hard conversation, almost everyone leads with their interpretation and treats it as the data.",
  },

  chunks: [
    {
      id: 'observation',
      target: 'Observation',
      native: 'A description of what happened that a video camera could have recorded',
      literal: 'NVC step 1 — Marshall Rosenberg, *Nonviolent Communication*; the data layer of the conversation',
      emoji: '🎥',
      phonetic: '"You sent the report at 6pm Friday." Camera could record that. "You always leave things until the last minute." Camera could not record that.',
      audioRef: null,
    },
    {
      id: 'evaluation',
      target: 'Evaluation',
      native: 'Your interpretation, judgement, or character claim about what happened',
      literal: 'NVC — Rosenberg; Beck (CBT) — the move from event to inference is automatic and usually invisible',
      emoji: '⚖️',
      phonetic: '"Lazy", "always", "never", "thoughtless", "deliberately" — these are evaluations dressed as observations.',
      audioRef: null,
    },
    {
      id: 'mixed_speech',
      target: 'Mixed speech',
      native: 'Sentences that fuse observation and evaluation in a way that sounds factual but is not',
      literal: 'NVC core teaching — "When you confuse observation and evaluation, people hear criticism and resist what you actually said"',
      emoji: '🌀',
      phonetic: '"You disrespected me in the meeting" sounds like a fact. It is not. The fact is what they said. The disrespect is your reading.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The camera test',
    explanation: "Before you raise something, run the camera test on the sentence you plan to say. Could a video camera with no understanding of context record the thing you are describing? If yes, it's an observation. If no, it's an evaluation. Both have their place — but in the opening of a hard conversation, observation goes first, alone.",
    examples: [
      { target: '"You interrupted me three times in the team meeting on Tuesday."', native: 'Camera could record this. Observation.' },
      { target: '"You don\'t respect my contributions."', native: 'Camera could not record this. Evaluation.' },
      { target: '"In the last two weeks, the budget report was submitted after the Friday 5pm deadline three times."', native: 'Specific, datable, countable. Observation.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sort each sentence by whether a camera could record it',
      pairs: [
        { left: '"She arrived 25 minutes after the meeting started"', right: 'Observation' },
        { left: '"He doesn\'t care about the team"', right: 'Evaluation' },
        { left: '"The email had three exclamation marks"', right: 'Observation' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the cleanest observation?',
      question: 'Pick the sentence with no evaluation hidden inside',
      options: [
        { text: '"You never give me credit for my ideas."', correct: false },
        { text: '"In the last two team updates, you presented the proposal as your own without naming me."', correct: true },
        { text: '"You\'re really insecure about my work."', correct: false },
      ],
      explanation: 'The middle option is datable, countable, and a camera could record it. The first hides "never" — almost always an evaluation, almost never literally true. The third is an interpretation about the other person\'s inner state, which you cannot directly observe.',
    },
    {
      type: 'fill_blank',
      instruction: 'Convert this evaluation into an observation',
      sentence: 'Evaluation: "You don\'t take this work seriously." Observation: "The last three reports you sent me had _____ in the totals column."',
      options: ['errors', 'feelings', 'opinions'],
      correct: 'errors',
      context: '"Errors in the totals column" is countable, specific, datable. "Doesn\'t take it seriously" is your read of why those errors are there — that comes later in the conversation, if at all.',
    },
    {
      type: 'translate',
      instruction: 'Words that almost always smuggle an evaluation into an observation',
      prompt: 'The two big tells are the words "always" and ___',
      correct: ['never', '"never"', 'always and never'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle that grounds NVC step one',
      words: ['could', 'a', 'an', 'observation', 'is', 'record', 'camera', 'what'],
      correct: ['an', 'observation', 'is', 'what', 'a', 'camera', 'could', 'record'],
      translation: 'A camera has no opinion. It records the event without inferring a motive. Your opening sentence should be at least as restrained.',
    },
    {
      type: 'translate',
      instruction: 'Convert: "You ignored my email" — into a clean observation.',
      prompt: 'I sent you the proposal on Monday and as of today, ___',
      correct: ['I have not received a reply', 'I haven\'t had a reply', 'no reply has come', 'I have not had a response', 'I have not heard back', 'haven\'t heard back'],
    },
  ],

  rwenDialogue: {
    intro: "Let's strip the evaluation out of one of your own sentences in real time.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of one workplace complaint you've voiced recently — to a friend, a partner, or in your own head. Something like 'my manager doesn't trust me' or 'my coworker is passive-aggressive'. Hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now run the camera test. What did the person ACTUALLY do or say? Not what it meant. What a camera would have caught.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I tried — and I got stuck. I can't separate them. The behaviour and what it meant feel like the same thing.", native: '', correct: true, feedback: "That's the whole reason this skill is rare. They feel the same because the inference is automatic. Try again with one fact: a date, a sentence they said, an action they took. Just one." },
          { target: "I got something. They sent a message at 11pm with three exclamation marks asking why my section wasn't done. That's the observation.", native: '', correct: true, feedback: "Excellent. Notice how different that feels from 'they were aggressive at me'. The camera version gives you a place to stand. The interpretation gives you a fight." },
          { target: "I got the observation but my evaluation is still louder than the facts.", native: '', correct: true, feedback: "Honest. The evaluation will keep firing — that's how minds work. The skill isn't to silence it. The skill is to lead with the observation when you open your mouth, even when the evaluation is yelling in your head." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "What you just did is what most people don't do in a hard conversation: separate the data from the story. Tomorrow we'll add the next layer — the feeling. For now, the camera is enough.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one phrase — an observation is what a ___ could record.',
        correct: ['camera', 'video camera', 'recording', 'video'],
      },
      {
        prompt: 'Two words that almost always smuggle in evaluation:',
        correct: ['always and never', 'always, never', 'never and always', 'always never', 'never always'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Take the conversation you identified yesterday. Write down the opening sentence you would have said. Then rewrite it twice — strip out every word that wouldn't survive the camera test. The final version is shorter, drier, and probably feels weirdly bland. That's correct. Save it.",
    rwenSignoff: "Two rewrites. The third draft is the one you'll use. Boring is the goal.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen offers to help them rewrite the opening sentence of a real workplace conversation, applying the camera test. The user supplies their first-draft sentence; Rwen helps them locate the evaluation hidden inside and produce a clean observation.",
    rwenRole: "Rwen — patient, surgical, non-judgemental. Asks the user for their draft sentence. Identifies one or two evaluative words ('always', 'never', 'careless', 'rude', any character claim). Asks 'what did they actually do or say?' Helps the user produce a sentence a camera could record. Does NOT add any of their own interpretation of the situation.",
    successCriteria: "User produces an opening sentence that is (1) datable or specific to a concrete instance, (2) free of character claims, and (3) free of 'always' / 'never'. Bonus if they notice their own resistance to the cleaner sentence ('that doesn't capture what really happened') and recognise that resistance as a signal.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
