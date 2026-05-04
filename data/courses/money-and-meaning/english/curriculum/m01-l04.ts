import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-debt-without-shame',
  module: 1,
  lesson: 4,
  title: 'Debt Without Shame',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "If you have ever owed money — to a bank, a friend, a family member, a credit card, a hospital — you have probably also carried some shame about it. The shame is sometimes louder than the debt. It runs in the background of your day. It makes the envelope feel radioactive. It makes you avoid checking. It makes you avoid the person you owe. Today we look at the shame, separately from the debt, because the shame is what keeps the debt unworkable. We are not absolving the math. We are absolving you.",
    culturalNote: "Kristin Neff's research on self-compassion is unambiguous: shame impairs the executive function that any difficult decision requires. People who treat themselves with self-compassion do *better* at the actual work of changing things — including financial things — than people who attack themselves. Brené Brown's distinction between shame ('I am bad') and guilt ('I did something I would do differently') is the working tool of this lesson.",
  },

  chunks: [
    {
      id: 'debt_shame',
      target: 'Debt shame',
      native: 'The identity-claim that you are bad because you owe money',
      literal: 'Brené Brown — shame as global self-evaluation; distinct from guilt, which is about an action',
      emoji: '😶‍🌫️',
      phonetic: '"I am bad" — fused with the debt rather than separable from it.',
      audioRef: null,
    },
    {
      id: 'guilt_workable',
      target: 'Guilt as information',
      native: 'The recognition that you did a thing you would do differently — usable, separable, repairable',
      literal: 'CBT / Brené Brown — guilt is an event-level evaluation; it is workable in a way shame is not',
      emoji: '🛠️',
      phonetic: '"I did this. I want to do something else next time." — workable.',
      audioRef: null,
    },
    {
      id: 'self_compassion',
      target: 'Self-compassion (around money)',
      native: 'Treating yourself, around your debt, the way you would treat a close friend in the same situation',
      literal: 'Kristin Neff — three components: self-kindness, common humanity (you are not the only one), mindfulness (clear-eyed acknowledgement)',
      emoji: '🤲',
      phonetic: 'Self-compassion is a precondition for clear thinking, not a reward for it.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'You are not the debt',
    explanation: "There is a sentence underneath most debt shame: 'I am the kind of person who…'. Self-compassion is the act of removing that sentence and replacing it with something more honest: 'I owe an amount. The amount is not me. What I owe and who I am are two separate things.' This is not financial advice — there are real practical steps for working with debt and a financial counsellor or licensed professional is often the right help. This lesson is about the emotional layer that makes those steps unreachable.",
    examples: [
      { target: '"I am irresponsible."', native: '"I made some choices I would make differently. I am not the choices."' },
      { target: '"I should be ashamed."', native: '"I am noticing the feeling of shame. The feeling is not the verdict."' },
      { target: '"Other people don\'t have this problem."', native: '"Many adults carry debt and shame around it. I am not alone in this. I am, however, the one who can take the next small step."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Debt shame', right: 'The identity-claim that you are bad because you owe money' },
        { left: 'Guilt as information', right: 'Recognising you did a thing you would do differently — workable' },
        { left: 'Self-compassion', right: 'Treating yourself the way you would treat a close friend' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these statements is shame, and which is guilt?',
      question: 'Pick the statement that is workable (i.e. guilt, not shame)',
      options: [
        { text: '"I am a financial disaster of a person."', correct: false },
        { text: '"I made some specific choices I would make differently next time."', correct: true },
        { text: '"I am too ashamed to even open the envelope."', correct: false },
      ],
      explanation: "The middle option names a behaviour, separates it from identity, and points toward a different next move. The other two fuse the person with the behaviour and are not workable.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Self-compassion is a _____ for clear thinking, not a reward for it.',
      options: ['precondition', 'replacement', 'consequence'],
      correct: 'precondition',
      context: "This is the loadbearing claim of Neff's research: shame impairs the cognitive function that change requires. Self-compassion is not soft — it is functional.",
    },
    {
      type: 'translate',
      instruction: 'In your own words — what would you say to a close friend who told you they were carrying a debt and felt ashamed?',
      prompt: 'I would say to them: _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: "Build the orienting claim of this lesson",
      words: ['the', 'are', 'you', 'not', 'debt'],
      correct: ['you', 'are', 'not', 'the', 'debt'],
      translation: "What you owe and who you are are two separate things.",
    },
    {
      type: 'translate',
      instruction: 'In one sentence, restate one shame-statement you have made about money in the form of guilt instead. (Shame: "I am ___." Guilt: "I did ___, and I would do ___ next time.")',
      prompt: 'Shame becomes: I did ___, and I would do ___',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's slow down with this one. We are going to do a small, specific move with one debt-related thought.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind any debt — past or present, big or small — that you have felt some shame around. A loan. A balance. Money you borrowed from a family member. Any of it. You don't need to type it. Just hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now ask yourself: what is the sentence underneath the shame? Not the math. The 'I am ___' sentence. Find it. (Examples: 'I am bad with money.' 'I am irresponsible.' 'I am the disappointment of the family.')",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I found it. The sentence is brutal.", native: '', correct: true, feedback: "Most people's shame sentences are brutal. They are also rarely things you would say to anyone else. Notice that — the standard you hold yourself to is one you would never apply to a friend." },
          { target: "I found it. It's the thing one of my parents used to say.", native: '', correct: true, feedback: "That is one of the most common findings: the shame sentence is often a borrowed sentence. You did not write it. You inherited it. That does not make it less painful, but it does make it more workable — you can choose, slowly, whose voice you let speak." },
          { target: "I couldn't find a clear sentence — the shame is more of a fog.", native: '', correct: true, feedback: "That is also common. Sometimes the shame is so atmospheric it doesn't form into words. The simple act of saying 'there is shame here, and I do not yet know its name' is real progress." },
          { target: "I started feeling defensive instead of ashamed.", native: '', correct: true, feedback: "Defensiveness is often shame's bodyguard. The feeling underneath it, if you sit with it, is usually still the same. Be gentle with the bodyguard — it has been doing a job for you." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now, silently, try this — without forcing belief: 'I am not the debt. The debt is a number. I am a person.' Read it twice. See what happens.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It loosened something. A small breath of room.", native: '', correct: true, feedback: "That breath of room is what self-compassion does — it gives you back the part of yourself that the shame had taken. From that room, decisions are possible." },
          { target: "Nothing shifted yet.", native: '', correct: true, feedback: "Self-compassion is a skill. It often loosens nothing the first time. Saying the sentence at all is the practice — the shift is downstream of the practice, not inside one repetition." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you owe — to a bank, to a person, to yourself — you are not it. The debt is a number you are working with. You are the one doing the working. That distinction is the whole point of this lesson.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the difference between shame and guilt?',
        correct: ['shame is "I am bad"; guilt is "I did something I would do differently"', 'shame is about identity; guilt is about an action', 'shame is identity-level; guilt is event-level', 'shame is who I am; guilt is what I did', 'shame is global; guilt is specific', 'shame says i am bad; guilt says i did something bad'],
      },
      {
        prompt: 'Complete the principle: "Self-compassion is a _____ for clear thinking, not a reward for it."',
        correct: ['precondition'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when a self-critical thought about money arrives, silently rephrase it once. From 'I am ___' to 'I did ___, and I'm working on ___.' You don't have to mean it the first time. The mission is the rephrase, not the believing.",
    rwenSignoff: "One sentence. One rephrase. That's the whole assignment.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen offers a slightly longer, gentler conversation in which the user can name one debt-shame thought and apply the shame-to-guilt move. Rwen does NOT advise on how to repay the debt, does not refer to specific financial products, and does not pretend to know the user's situation. The conversation is purely about the emotional layer.",
    rwenRole: "Rwen — soft, slow, NOT a financial advisor and explicit about that. If the user asks for advice on how to pay off the debt, Rwen says clearly that a licensed financial counsellor or advisor is the right help, and offers to keep working with the emotional layer. Rwen does not minimise actual financial pain. Rwen helps the user separate identity ('I am ___') from action ('I did ___').",
    successCriteria: "User names one shame sentence ('I am ___') and rephrases it as a guilt/action sentence ('I did ___, and I'm working on ___'). Rwen does not give financial advice. Bonus if the user notices the borrowed-voice quality of their shame sentence (i.e. realises it sounds like someone else's voice).",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
