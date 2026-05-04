import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-comparison-spiral',
  module: 1,
  lesson: 4,
  title: 'The Comparison Spiral',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who treats their comparison-mind as something to manage, not something to feel ashamed of. Comparing is what brains do. After a knock, the brain does it more, with worse inputs, in worse moods. Today is hygiene, not exhortation.",
    culturalNote: "Festinger's social comparison theory (1954) showed that humans evaluate themselves by comparison — it is a default, not a flaw. What is new is the scale and the asymmetry: the modern feed shows you other people's highlight reels alongside your own outtakes. Kristin Neff calls the corrective 'common humanity' — the recognition that suffering and inadequacy are part of the shared human experience, not a private mark of defect. Marcus Aurelius reached for the view-from-above for the same reason: to dilute the felt-importance of any single comparison by widening the frame.",
  },

  chunks: [
    {
      id: 'comparison_default',
      target: 'The comparison default',
      native: 'The brain\'s automatic tendency to evaluate self by reference to others',
      literal: "Festinger's social comparison theory (1954); confirmed by decades of social psychology",
      emoji: '⚖️',
      phonetic: 'It is a feature of the system, not a personal failing. The skill is what you do with the input.',
      audioRef: null,
    },
    {
      id: 'common_humanity',
      target: 'Common humanity',
      native: "Recognising that struggle and inadequacy are part of being human, not signs you alone are broken",
      literal: "Kristin Neff — one of the three pillars of self-compassion (mindfulness, self-kindness, common humanity)",
      emoji: '🫂',
      phonetic: "The person you are comparing yourself to has their own dip you cannot see.",
      audioRef: null,
    },
    {
      id: 'comparison_hygiene',
      target: 'Comparison hygiene',
      native: "Practical environment changes that reduce unhelpful comparison input — mute, unfollow, time-cap, swap signal",
      literal: "Behavioural design (Fogg, Clear) applied to the attention economy; also Cal Newport on input curation",
      emoji: '🧼',
      phonetic: 'You cannot will yourself out of comparing. You can change what you let in.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hygiene before willpower',
    explanation: "Telling yourself to stop comparing rarely works. The brain compares automatically. What does work is changing the inputs and the moments. Three reliable moves: mute or unfollow specific accounts that reliably hurt to look at (this is not weakness, this is hygiene); time-cap the input that reliably hurts (e.g. fifteen minutes total, set a timer); swap the signal you measure progress by (instead of revenue, days written; instead of likes, conversations had). The work is not to compare less. The work is to compare against signal you actually care about.",
    examples: [
      { target: "A 50-year-old laid-off middle manager scrolling former colleagues' promotions on LinkedIn three times a day.", native: "Hygiene: log out of LinkedIn on the phone. Visit only on the laptop, fifteen minutes once a week. Swap signal: track applications sent, not roles obtained." },
      { target: "A novelist whose book flopped, watching peers win prizes on social media.", native: "Hygiene: mute (not unfollow — too dramatic) the prize-winning peers for ninety days. Swap signal: pages drafted this week, not books sold this year." },
      { target: "A divorced parent watching old friends' family-holiday posts.", native: "Hygiene: hide the feed for the season. Swap signal: how present you were on this week's school run, not how the photo would compare." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Comparison default', right: 'The brain\'s automatic tendency to evaluate self against others' },
        { left: 'Common humanity', right: 'Recognising that struggle is part of being human, not your private mark of defect' },
        { left: 'Comparison hygiene', right: 'Practical changes to inputs and moments to reduce unhelpful comparison' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A 47-year-old founder whose startup just shut down keeps scrolling Twitter at midnight, watching peers raise rounds. Which is the most useful first move?',
      question: 'Pick the move most likely to actually reduce the spiral',
      options: [
        { text: "Tell himself to stop being so insecure and just be happy for them.", correct: false },
        { text: "Mute or unfollow the specific accounts that hurt to look at, and remove the app from the phone home screen for thirty days.", correct: true },
        { text: "Force himself to post about the shutdown publicly so he can stop hiding.", correct: false },
      ],
      explanation: "The first is exhortation, which the comparison default will defeat by morning. The third is a separate decision that may or may not be right but is not hygiene. The middle option changes the environment, which is the only intervention robust enough to outlast a 2am mood.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete Kristin Neff's principle",
      sentence: "Recognising that struggle is part of being human, not a private mark of defect, is what self-compassion calls _____.",
      options: ['common humanity', 'self-kindness', 'mindfulness'],
      correct: 'common humanity',
      context: "Self-compassion has three pillars: mindfulness (acknowledging the pain is here), self-kindness (treating yourself the way you would treat a friend), and common humanity (knowing you are not uniquely broken). The third is the antidote to the comparison spiral specifically.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what changes faster, your tendency to compare, or the inputs you let in?',
      prompt: 'The honest answer:',
      correct: ['the inputs', 'inputs', 'the inputs you let in', 'what you let in', 'the inputs i let in', 'what i let in'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the lesson principle',
      words: ['hygiene', 'before', 'willpower'],
      correct: ['hygiene', 'before', 'willpower'],
      translation: 'Three words. Most behaviour change advice gets the order wrong. We don\'t.',
    },
    {
      type: 'translate',
      instruction: 'Name one specific account, person, or feed that reliably hurts to look at right now.',
      prompt: 'You don\'t have to act on it yet. Just name it:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's design one specific piece of hygiene together.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of one source of comparison that has been hurting recently. A specific account. A specific person. A specific feed. A specific moment of the day. You don't have to type it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now pick one of three moves. Mute or unfollow them. Time-cap the moment (no LinkedIn after 9pm; fifteen minutes once a week). Swap the signal (track something you actually care about instead). Which move fits?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Mute or unfollow. I keep going back and it keeps hurting.", native: '', correct: true, feedback: "That is allowed. Muting is not punishing them — it is care for you. You can unmute later. Most people find they never do." },
          { target: "Time-cap. I want to keep some access but not all the time.", native: '', correct: true, feedback: "Realistic and sustainable. Set the time and the cap before you open the app, not during. The brain at 11pm is not the brain that made the rule." },
          { target: "Swap the signal. The metric I'm tracking is the wrong one.", native: '', correct: true, feedback: "This is the deepest move of the three. Choosing what counts as progress is choosing how you measure your life. The comparison spiral often dissolves when the signal changes." },
          { target: "I know I should but I'm not ready to do any of it yet.", native: '', correct: true, feedback: "Naming the source is itself useful. You have made the comparison visible, which is the first move. Hygiene can wait until you have the energy. There is no rush." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Comparison-mind is not a moral failing. It is a default. Today you treated it like one. That is the lesson.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Kristin Neff's term for recognising that struggle is part of being human, not a private mark of defect?",
        correct: ['common humanity'],
      },
      {
        prompt: "Three-word principle: ______ before willpower.",
        correct: ['hygiene'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, do one piece of comparison hygiene. Mute one specific account. Or set one specific time-cap. Or write down the new signal you are tracking instead of the old one. Just one. Tell no one.",
    rwenSignoff: "One move. Five minutes. You don't have to feel proud of it. You just have to do it.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen offers a 3-minute conversation in which the user names one specific source of unhelpful comparison and chooses one specific hygiene move (mute, time-cap, or signal-swap). The aim is for the user to leave with one concrete intervention they will execute today.",
    rwenRole: "Rwen — practical, non-judgemental, direct. Does NOT moralise comparison ('it's bad to compare!'). Does NOT push the user toward big dramatic moves (deleting all social media). Helps the user pick the smallest move that will hold. Gently challenges 'I'll just try harder' as a strategy.",
    successCriteria: "User (1) names one specific account/person/feed/moment that hurts, (2) chooses one specific concrete hygiene move, (3) commits to executing it today within a specific window. Bonus if they identify the signal they had been tracking and name a more useful one.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
