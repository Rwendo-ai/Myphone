import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-before-you-open-your-mouth',
  module: 1,
  lesson: 1,
  title: 'Before You Open Your Mouth',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Today's the day you become someone who prepares for hard conversations instead of bracing for them. We don't start with what to say. We start with what's happening in your body, what you actually want, and what's not yours to control.",
    culturalNote: "Across traditions — Stoic, Buddhist, modern clinical — the rule is the same: a conversation you walk into with a hijacked nervous system is a conversation you have already half-lost. Epictetus said it cleanly two thousand years ago: some things are within our control, some are not. Confusing the two is the source of most pointless workplace pain.",
  },

  chunks: [
    {
      id: 'state_check',
      target: 'State check',
      native: 'Naming what your body and nervous system are doing before you speak',
      literal: 'Polyvagal-informed practice (Porges) — recognising regulated, activated, or shut-down states before high-stakes communication',
      emoji: '🫁',
      phonetic: 'Heart racing? Throat tight? Mind blanking? Notice it before the conversation, not during.',
      audioRef: null,
    },
    {
      id: 'real_intent',
      target: 'Your real intent',
      native: 'What you actually want from the conversation, separate from what you want to say',
      literal: 'Crucial Conversations (Patterson et al.) — "start with heart"; the question "What do I really want here?" before opening',
      emoji: '🎯',
      phonetic: 'Want to be right is not the same as want to be heard. Want to vent is not the same as want to resolve.',
      audioRef: null,
    },
    {
      id: 'dichotomy_of_control',
      target: 'The dichotomy of control',
      native: 'The line between what you can change in this conversation and what you cannot',
      literal: 'Stoic — Epictetus, *Enchiridion* §1; modern application: ACT acceptance + active commitment',
      emoji: '⚖️',
      phonetic: 'You can choose your words. You cannot choose their reaction. Knowing which is which is the whole skill.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The three-question pre-flight check',
    explanation: "Before any difficult conversation, you ask yourself three short questions. They take less than a minute. They will not make the conversation easy, but they will make it cleaner. (1) What is my body doing right now? (2) What do I actually want from this — not from them? (3) What's mine to control, and what isn't?",
    examples: [
      { target: '"My chest is tight and I want to be vindicated"', native: "Body activated, intent is revenge — not ready. Take three slow exhales first." },
      { target: `"I'm calm but I want to make them feel small"`, native: "Regulated, but the intent is harm. Reset before opening — that goal will produce a worse conversation." },
      { target: `"I'm a bit nervous and I want them to know how this landed for me"`, native: "That's a workable state and a workable intent. Go." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each pre-flight check to what it asks',
      pairs: [
        { left: 'State check', right: 'What is my body doing right now?' },
        { left: 'Real intent', right: 'What do I actually want from this?' },
        { left: 'Dichotomy of control', right: "What's mine to change, and what isn't?" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a workable intent for a hard conversation?',
      question: 'Pick the one most likely to produce a useful exchange',
      options: [
        { text: '"I want them to admit they were wrong."', correct: false },
        { text: '"I want them to know how the missed deadline affected the team and to agree on a plan."', correct: true },
        { text: '"I want to finally let them have it."', correct: false },
      ],
      explanation: "The middle option names a clear outcome you can both work toward. The other two are about being right or being heard at their expense — both produce defensiveness and rarely change behaviour.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the Stoic principle that anchors this lesson',
      sentence: 'Some things are within my control, and some things are _____. Knowing the difference is most of the work.',
      options: ['not', 'simple', 'easy'],
      correct: 'not',
      context: "Epictetus' opening line in the *Enchiridion*. Two thousand years later, it is still the most useful sentence to read before sending a difficult message.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what are you checking for in a state check before a hard conversation?',
      prompt: 'Whether your body is regulated, activated, or...',
      correct: ['shut down', 'shut-down', 'shutdown', 'frozen', 'numb'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle that opens this track',
      words: ['the', 'open', 'is', 'before', 'work', 'mouth', 'you', 'your'],
      correct: ['the', 'work', 'is', 'before', 'you', 'open', 'your', 'mouth'],
      translation: "What you do in the sixty seconds before you speak shapes the next sixty minutes more than the words themselves do.",
    },
    {
      type: 'translate',
      instruction: 'In your own words — what is the question that defines your real intent?',
      prompt: 'What do I actually want from ___, separate from what I want to say?',
      correct: ['this conversation', 'this', 'the conversation', 'them', 'this exchange'],
    },
  ],

  rwenDialogue: {
    intro: "Let's run the pre-flight check on a real conversation you're sitting with right now.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one work conversation you've been postponing — with a colleague, a manager, a client, anyone. You don't have to type it. Just hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Question one. Right now, in your body — is your chest tight, is your jaw clenched, is your stomach doing something? What's there?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, something is activated. I can feel it as I think about this.", native: '', correct: true, feedback: "Good. That's information, not failure. Take three slow exhales — make the out-breath longer than the in-breath. Then we move on." },
          { target: "Honestly, I feel pretty calm right now.", native: '', correct: true, feedback: "Useful baseline. The state-check matters most when something IS firing — but doing it when you're calm trains the muscle for when you're not." },
          { target: "I went numb. I don't really feel anything when I think about it.", native: '', correct: true, feedback: "That counts too. Going numb is a state — what polyvagal practitioners call shut-down. It's not a failure of feeling, it's a protection. A conversation from there is usually one you postpone, not one you win." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Question two. If you could only get one thing from this conversation — not the cleanest version, the one real thing — what is it? Not what you want to say. What you want to walk away with.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'What is the name for noticing your nervous-system state before a hard conversation?',
        correct: ['state check', 'a state check', 'state-check', 'check my state', 'checking my state'],
      },
      {
        prompt: 'Complete the Stoic frame — some things are within my control, some are ___.',
        correct: ['not', 'not within my control', 'outside my control', 'beyond my control'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Pick one work conversation you've been postponing. Don't have it yet. Run the three-question pre-flight check on it: body, real intent, what's mine vs not. Write the answers down — three lines, no more. You'll use them later this week.",
    rwenSignoff: "Three lines. Three minutes. The conversation can wait one more day. Your preparation can't.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen invites a 3-minute coaching conversation walking the user through the three-question pre-flight check on a specific conversation they are postponing. The aim is for the user to leave with one clarified intent sentence ('what I actually want from this is...') and one named body sensation.",
    rwenRole: "Rwen — calm, unhurried, body-aware. Asks questions one at a time. Does NOT advise on what to say in the actual conversation yet. Stays on the pre-flight: body, intent, control. Reflects back what the user notices without interpreting it.",
    successCriteria: "User identifies (1) at least one specific somatic signal they have right now (e.g. 'tight chest', 'jaw clenched'), (2) one concrete real-intent sentence that is not 'I want them to admit they were wrong', and (3) one element of the situation they recognise is not theirs to control. Bonus if they catch a difference between what they want to say and what they actually want.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
