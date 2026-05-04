import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-generosity-vs-self-protection',
  module: 1,
  lesson: 6,
  title: 'Generosity vs. Self-Protection',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Most adults run an internal negotiation, often unconscious, between giving and not. Helping a sibling with rent. Picking up the bill. Lending money you may not get back. Donating. Saying no when you're tired. Saying yes when you can't afford it. Both moves can be right and both can be wrong, depending on the situation, the relationship, and what you are trying to protect — or perform. Today we look at how to know which move is which, in your particular life.",
    culturalNote: "ACT (Acceptance and Commitment Therapy) frames this as a values question rather than a maximisation question. The right answer is not 'always give' or 'always protect yourself' — it is the answer that aligns with what you actually care about, with eyes open about cost. Adam Grant's research on givers, takers, and matchers is useful at the level of pattern recognition, though the categories are simplifications. Brené Brown's wholeheartedness frame is the closest to what this lesson is doing: generosity from a settled self looks completely different from generosity from a frightened one.",
  },

  chunks: [
    {
      id: 'values_aligned_giving',
      target: 'Values-aligned giving',
      native: 'Generosity that comes from a clear sense of what matters to you and what you can actually afford to give',
      literal: 'ACT values work — giving as an expression of what you care about, with eyes open about the cost',
      emoji: '🎁',
      phonetic: 'You give because the giving fits who you want to be — not to be liked, not to be safe.',
      audioRef: null,
    },
    {
      id: 'fear_giving',
      target: 'Fear-driven giving',
      native: 'Generosity that is actually a way of avoiding conflict, guilt, disapproval, or being seen as small',
      literal: 'Brené Brown — performative generosity; clinical literature on people-pleasing as a self-abandoning pattern',
      emoji: '😬',
      phonetic: 'It looks like giving. It is actually a tax you are paying to avoid feeling something.',
      audioRef: null,
    },
    {
      id: 'self_protection',
      target: 'Healthy self-protection',
      native: 'Saying no to a request because giving yes would cost you something more important than the request asks',
      literal: 'NVC — needs both sides; ACT — values are zero-sum at any given moment, so honouring one need refusing another',
      emoji: '🛡️',
      phonetic: 'A no spoken from values is not selfish. It is the cost of being able to mean your yeses.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The four squares of give/protect',
    explanation: "There are four moves: give from values, give from fear, protect from values, protect from fear. The same external action — saying yes to lending a friend money, or saying no — can come from any of the four. The skill is asking, before the answer leaves your mouth: which of the four is this? You are not auditing the friend. You are auditing the part of you that is about to speak.",
    examples: [
      { target: 'Give from values', native: 'You help a sibling with rent because supporting your family is a thing you actually care about and can afford right now' },
      { target: 'Give from fear', native: 'You pick up the bill because you cannot stand the idea of being seen as the one who didn\'t — even though it stretches you thin' },
      { target: 'Protect from values', native: 'You decline to lend money to a friend because lending and friendship don\'t mix well for you, and you would rather keep the friend' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Values-aligned giving', right: 'Generosity from a clear sense of what matters and what you can give' },
        { left: 'Fear-driven giving', right: 'Generosity that is actually about avoiding guilt, conflict, or being seen as small' },
        { left: 'Healthy self-protection', right: 'Saying no when yes would cost something more important than the request asks' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the BEST question to ask before giving or refusing?',
      question: 'Pick the question that fits the lesson',
      options: [
        { text: '"What will the other person think of me if I refuse?"', correct: false },
        { text: '"Is this give or this no coming from values, or from fear?"', correct: true },
        { text: '"Can I afford it?"', correct: false },
      ],
      explanation: "The first question optimises for performance, not values. The third is necessary but not sufficient. The middle one is the one that does the actual emotional work.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'A no spoken from values is not selfish. It is the cost of being able to mean your _____.',
      options: ['yeses', 'feelings', 'savings'],
      correct: 'yeses',
      context: "If you cannot say no, your yes does not mean anything — it is just compliance. Real generosity requires the capacity to refuse.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name a recent give or no around money where you suspect fear was driving more of the decision than you realised',
      prompt: 'I think the fear underneath was _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle of this lesson',
      words: ['no', 'a', 'cost', 'of', 'is', 'meaning', 'the', 'your', 'yeses'],
      correct: ['a', 'no', 'is', 'the', 'cost', 'of', 'meaning', 'your', 'yeses'],
      translation: "If every yes is automatic, no yes is meaningful.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one upcoming money decision (give or no) you can apply the four-square question to',
      prompt: 'I can ask the question about: _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's run one real decision through the question.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of the last time you gave money — to a friend, family member, charity, anyone. Or the last time you refused. Bring it back. Don't pick the one you feel best about. Pick the one that has the most charge.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now ask yourself, honestly: which of the four was that? Give from values, give from fear, protect from values, protect from fear? Sit with the question for a moment.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was give from values. I cared. I could afford it. I am glad I did it.", native: '', correct: true, feedback: "Good. That kind of give does not leave residue. Notice it — those moments are worth remembering, because the resentment-free generosity is rarer than people pretend." },
          { target: "It was give from fear. I felt I had no choice — and afterwards I resented it.", native: '', correct: true, feedback: "Resentment after giving is one of the clearest diagnostics of fear-driven generosity. The give was external; internally, you were paying a tax to avoid a feeling. That is not your failure — it is information about a pattern." },
          { target: "It was protect from values. I said no, and it cost me something, but it was right.", native: '', correct: true, feedback: "These are some of the hardest moves. A no from values is often misread by others — and sometimes by ourselves — as selfishness. It is not. It is the practice of being able to mean your yeses." },
          { target: "It was protect from fear. I refused because I was scared, even though I could have given.", native: '', correct: true, feedback: "This is also common, and worth being honest about. Fear-driven refusal often hides behind language of prudence. The skill is naming the fear, not necessarily changing the answer — sometimes the no is still right; you just want to know what really drove it." },
          { target: "It was a mix of all four, depending on the moment.", native: '', correct: true, feedback: "Often true. Most real decisions are mixed. The clarity is partial — and that's enough." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you said: now you know which kind it was. The next time the same situation arises, you have one more degree of freedom — because you can ask the question before you answer.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the question to ask before giving or refusing?',
        correct: ['is this from values or from fear', 'is this give or no from values or from fear', 'values or fear', 'is this coming from values or fear', 'am i acting from values or fear'],
      },
      {
        prompt: 'Complete the principle: "A no is the cost of meaning your _____."',
        correct: ['yeses'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, before any small money decision — paying for a coffee for someone, lending a small amount, donating, refusing a request — pause for one breath and ask: 'Values or fear?' Don't change your answer because of the question. Just ask it. Notice what shifts.",
    rwenSignoff: "One question. One breath. That's the practice.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen invites a short conversation about a real, current give-or-protect decision in the user's life. The aim is to apply the four-square question and let the user articulate which of the four their inclination is coming from.",
    rwenRole: "Rwen — non-judgemental, curious. Does NOT tell the user whether to give or refuse. Does NOT moralise about generosity. Helps the user clarify which of the four squares their answer is in. If the user discovers fear is driving the move, Rwen does not shame the fear — fear is information.",
    successCriteria: "User names one specific decision and identifies which of the four squares their inclination is coming from. Rwen does not advise the actual decision. Bonus if the user catches that their first instinct was performative and finds a more honest version of the same decision.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
