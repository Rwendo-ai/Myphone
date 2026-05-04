import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-self-compassion-after-screwing-up',
  module: 1,
  lesson: 7,
  title: 'Self-Compassion for the Parent Who Already Screwed Up',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "If you grew up with a hard parent, this lesson may bring that up. It's normal. We stay focused on the present — what you say to yourself, today, after you mess up. If at any point this is too much, the mission is small enough to do later.",
    culturalNote: "Kristin Neff's research is unambiguous on this point: self-criticism predicts worse behaviour change, not better. Parents who shame themselves after a hard moment are more likely to do the same thing again, not less. Self-compassion is not soft — it is the load-bearing tool of actual change. Most parents resist it because they were taught that being hard on themselves is what good parents do. The evidence says the opposite.",
  },

  chunks: [
    {
      id: 'self_kindness',
      target: 'Self-kindness',
      native: "Speaking to yourself, after a hard moment, the way you would speak to a friend in the same situation. Not letting yourself off — just not flogging yourself either.",
      literal: 'Kristin Neff — three components of self-compassion (self-kindness, common humanity, mindfulness)',
      emoji: '🤲',
      phonetic: "If you wouldn't say it to a friend, don't say it to yourself.",
      audioRef: null,
    },
    {
      id: 'common_humanity',
      target: 'Common humanity',
      native: "The recognition that struggling with parenting is not a personal failing — it is what parents do, everywhere, in every era. You are not uniquely bad. Other parents are doing the same thing tonight, somewhere.",
      literal: 'Neff — common humanity; Buddhist roots in shared suffering',
      emoji: '🌍',
      phonetic: "Your hard night is not exceptional. It is human.",
      audioRef: null,
    },
    {
      id: 'shame_predicts_repeat',
      target: 'Shame predicts repeat',
      native: "Self-criticism after a parenting failure makes the next failure more likely, not less. Shame depletes the prefrontal cortex's capacity to choose differently next time.",
      literal: 'Neff (2003); Brené Brown — shame and behaviour; Kelly McGonigal — willpower research',
      emoji: '🔁',
      phonetic: "The voice that says 'you're a terrible parent' is not making you a better one.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The replacement script',
    explanation: "After a hard parenting moment, the inner voice usually goes one of two ways. Voice A: 'I'm a terrible parent. I always do this. They'd be better off without me.' Voice B (the replacement): 'I lost it. That was hard. Other parents lose it too. I'll repair when I can, and I'll try again.' Voice A produces shame, which depletes the system that would help you do better. Voice B produces motivation that survives the night. The replacement is not a trick or a positive-thinking exercise. It is the language that keeps the prefrontal cortex online, which is the part of you that can actually parent better tomorrow.",
    examples: [
      { target: "After shouting at a toddler", native: "Voice A: 'I'm scarring them. Look what I'm doing.' Voice B: 'I shouted. I was depleted. I'll go in and repair when I'm calmer. Toddlers need parents who repair, not parents who never err.'" },
      { target: "After a cruel exchange with a teen", native: "Voice A: 'I've damaged the relationship for good.' Voice B: 'That was bad. Many parents have moments like that. The relationship is bigger than tonight. I'll repair tomorrow when we've both slept.'" },
      { target: "After failing your adult child in some long-running way", native: "Voice A: 'I was a bad parent. They'll never trust me.' Voice B: 'I made real mistakes. Many parents did. The repair is still available, even years late. I'll start where I can.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Self-kindness', right: 'Speaking to yourself the way you would to a friend' },
        { left: 'Common humanity', right: 'Your struggle is not exceptional — it is human' },
        { left: 'Shame predicts repeat', right: 'Self-criticism makes the next failure more likely' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'After a hard parenting moment, the most useful thing to say to yourself is...',
      question: 'Pick the option supported by the research',
      options: [
        { text: "'I'm a bad parent. I have to do better or they'll be damaged.'", correct: false },
        { text: "'I lost it. Other parents lose it too. I'll repair when I can and try again.'", correct: true },
        { text: "'It wasn't really my fault. They were impossible.'", correct: false },
      ],
      explanation: "The first option is shame, which the evidence says makes repeat failure more likely. The third is denial, which prevents repair. The middle option is self-compassion: it acknowledges the failure, normalises it, and points toward action. That combination is what predicts actual change.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Self-criticism predicts _____ behaviour change, not better.',
      options: ['worse', 'better', 'no'],
      correct: 'worse',
      context: "Neff's clinical finding. The 'I have to be hard on myself or I won't improve' belief is empirically backwards. Self-compassion produces more reliable behaviour change because it preserves the brain capacity that does the changing.",
    },
    {
      type: 'translate',
      instruction: "If you wouldn't say it to a friend, ___",
      prompt: "Don't say it ___",
      correct: ['to yourself', 'to you', 'about yourself', 'to your own self', 'inside your head', 'out loud'],
    },
    {
      type: 'build_sentence',
      instruction: "Build Neff's central reframe",
      words: ['exceptional', 'human', 'not', 'is', 'this'],
      correct: ['this', 'is', 'not', 'exceptional', 'human'],
      translation: "It's not 'this is not exceptional, it is human.' We dropped a word for the build. The reminder: your hard night is not unique to you. It is what parenting is.",
    },
    {
      type: 'translate',
      instruction: "The voice that says 'you're a terrible parent' is doing what?",
      prompt: "Making the next failure ___",
      correct: ['more likely', 'likely', 'more probable', 'closer', 'easier', 'more frequent', 'more common', 'worse'],
    },
  ],

  rwenDialogue: {
    intro: "Bring to mind your last hard parenting moment. We're going to listen, just for thirty seconds, to how you talked to yourself afterwards.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "What was the inner voice saying? Don't clean it up. The honest version is the useful one.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "'You're a bad parent. You always do this. They deserve better.'", native: '', correct: true, feedback: "That's a shame voice. Hear it as a voice — not as truth. Try the replacement once: 'I lost it. Other parents lose it too. I'll repair when I can and try again.' Read those three sentences out loud if you can. Notice if anything in your chest moves." },
          { target: "'They are going to grow up just like I did. I'm passing it on.'", native: '', correct: true, feedback: "The intergenerational fear is one of the heaviest. The good news from the research: secure attachment is built more by repair than by absence-of-rupture. The fact that you can hear yourself, can name the pattern, can repair afterwards — that is itself the interrupting move. The chain is not unbreakable." },
          { target: "'I'm too tired to keep doing this. I want to disappear.'", native: '', correct: true, feedback: "That's exhaustion talking, not a verdict on you as a parent. The intervention is not a better self-talk script — it is sleep, food, water, and one other adult who can take the load for an hour. If you don't have one of those right now, that lack is the problem worth solving, not your parenting." },
          { target: "Honestly, I don't really talk to myself afterwards. I just push through.", native: '', correct: true, feedback: "Push-through is a survival pattern, not a flaw. But ungrieved hard moments stack up — the fatigue you carry into next week is partly the unprocessed weight of last week. One sentence to yourself after a hard moment ('that was hard, of course I'm tired') is a small, real release. Try it tonight." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The replacement script is not about pretending you didn't mess up. It's about staying in the room with yourself afterwards, the way you'd want to stay in the room with your child.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Self-criticism predicts ___ behaviour change, not better',
        correct: ['worse', 'no', 'less', 'reduced', 'poorer', 'weaker'],
      },
      {
        prompt: "Name the three components of self-compassion (self-kindness, common humanity, ___)",
        correct: ['mindfulness', 'awareness', 'noticing', 'present-moment awareness', 'mindful awareness'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "After your next hard parenting moment — small or large — try the replacement script out loud or silently: 'I lost it. Other parents lose it too. I'll repair when I can and try again.' Notice if anything in your body softens. That softening is the prefrontal cortex coming back online. That's what makes tomorrow workable.",
    rwenSignoff: "Three sentences. To yourself. The kindness is the work, not the reward.",
  },

  phase8: {
    scenario: "User has just finished Lesson 7. Rwen helps them rehearse the replacement script for a specific recent hard moment. Rwen explicitly checks if the user has someone to talk to about the harder material this lesson surfaces, and gently suggests reaching out if they don't.",
    rwenRole: "Rwen — warm, careful, not therapeutic. Notices if the user starts spiralling into shame and gently brings them back to the replacement script. Mentions, where appropriate, that the AI is not a substitute for a friend or family member they trust.",
    successCriteria: "User identifies a recent hard parenting moment, names the shame voice that followed, and rehearses the replacement script at least once. Bonus if they articulate that being kinder to themselves is the move that makes them a better parent tomorrow — not a reward for being good.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
