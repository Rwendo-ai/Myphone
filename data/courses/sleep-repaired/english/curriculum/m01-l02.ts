import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-what-sleep-actually-does',
  module: 1,
  lesson: 2,
  title: 'What Sleep Actually Does (and Why You Can\'t Skip It)',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Before we change anything, you need to know what you're protecting. Sleep is not a passive switch-off — it's the single most active stretch of biological repair work your body does each day. If you understand what's happening up there, the cost of skipping it stops being abstract.",
    culturalNote: "Matthew Walker's *Why We Sleep* is the most-quoted modern sleep book — useful, alarming, and occasionally overstated. We'll borrow his architecture (REM, NREM, glymphatic clearance) but flag where his strongest claims have been challenged in peer review. The mainstream consensus: sleep matters enormously for memory, immunity, mood, and metabolism — and the dose-response is real even if the absolute risks are smaller than the scariest framings suggest.",
  },

  chunks: [
    {
      id: 'nrem',
      target: 'NREM sleep',
      native: 'Deep, slow-wave sleep — concentrated in the first half of the night — when the brain consolidates facts and the body does most of its physical repair',
      literal: "Sleep architecture (Walker; Foster). NREM dominates the first 3–4 hours. Lose those hours and you lose most of the deep sleep, regardless of total time in bed.",
      emoji: '🌊',
      phonetic: "First half of the night = facts and physical repair. The early hours are not optional.",
      audioRef: null,
    },
    {
      id: 'rem',
      target: 'REM sleep',
      native: 'Dreaming sleep — concentrated in the second half of the night — when the brain processes emotion and integrates new memory',
      literal: "REM rebounds when suppressed (e.g. after alcohol or REM-suppressing antidepressants wear off). Most REM happens in the last 2–3 hours of sleep — which is why cutting sleep short cuts REM disproportionately.",
      emoji: '👁️',
      phonetic: "Last hours of the night = emotion and meaning. Cut them and you wake brittle.",
      audioRef: null,
    },
    {
      id: 'glymphatic',
      target: 'Glymphatic clearance',
      native: 'A cleansing system in the brain that flushes metabolic waste (including beta-amyloid) more actively during sleep than during waking',
      literal: "First mapped by Maiken Nedergaard's lab (2013). Walker links chronic short sleep to higher amyloid burden — direction-of-effect is supported but causation in humans is still under active research. Don't panic; do prioritise.",
      emoji: '🧹',
      phonetic: "Sleep is the brain washing itself. Cause-and-effect in humans is still being mapped — but the direction is clear.",
      audioRef: null,
    },
  ],

  pattern: {
    name: "Different parts of the night do different jobs",
    explanation: "Sleep is not a uniform 7–8 hour block. It cycles through stages, and the stages are not evenly distributed. Deep NREM (physical repair, factual memory) front-loads the night. REM (emotional processing, creative integration) back-loads the night. This means that going to bed at 2am and waking at 8am is not the same as 11pm to 5am — even though both are six hours. The first cuts your REM. The second cuts your deep sleep. Both leave gaps. Knowing this changes what 'enough sleep' means.",
    examples: [
      { target: "You drank wine at dinner and woke at 4am, mind racing", native: "Alcohol suppresses REM, then your brain rebounds REM hard in the second half of the night — fragmented, intense, often anxious. Not the wine 'helping you sleep'; the wine costing you the second half." },
      { target: "You only got the first 4 hours of your usual sleep", native: "You got most of your deep NREM but almost none of your REM. You'll feel okay physically but emotionally brittle." },
      { target: "You only slept the last 4 hours (e.g. baby finally settled at 3am)", native: "You got plenty of REM but skipped most deep NREM. You'll feel hungover and physically drained." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each stage to what it does',
      pairs: [
        { left: 'NREM (first half of night)', right: 'Deep physical repair and factual memory consolidation' },
        { left: 'REM (second half of night)', right: 'Emotional processing and creative integration' },
        { left: 'Glymphatic clearance', right: 'Brain flushing metabolic waste, more active in sleep than waking' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "How should you read Walker's strongest claims (e.g. 'every aspect of biology worsens under 7 hours')?",
      question: 'Pick the most honest framing',
      options: [
        { text: 'Take it literally — every minute under 7 hours has measurable cost', correct: false },
        { text: "Direction of effect is real, but several specific claims have been challenged; population effect sizes are smaller than the framing implies", correct: true },
        { text: 'Ignore Walker entirely — peer review has discredited his work', correct: false },
      ],
      explanation: "Walker is a useful science populariser. Independent reviews (notably Alexey Guzey 2019) flagged several overstatements; subsequent corrections have been published. The mainstream reading is the middle option: sleep matters, the dose-response is real, but the strongest fear-based framings overstate population-level absolute risk. The course will be honest with you here.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the sleep-architecture rule",
      sentence: "Most deep NREM sleep happens in the _____ half of the night.",
      options: ['first', 'second', 'middle'],
      correct: 'first',
      context: "Which is why losing the first 2–3 hours of sleep — being kept up late by a baby, a deadline, or anxiety — costs deep NREM disproportionately. And why losing the last 2–3 hours (e.g. an early flight) costs REM disproportionately.",
    },
    {
      type: 'translate',
      instruction: "Why does alcohol leave you feeling unrested even after a 'full night' of sleep?",
      prompt: 'Because it suppresses _____ sleep in the first half of the night, then rebounds it later, fragmenting the second half.',
      correct: ['rem', 'REM', 'rapid eye movement', 'dreaming', 'rem sleep'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central architectural claim",
      words: ['stages', 'sleep', 'cycles', 'through', 'evenly', 'not', 'distributed'],
      correct: ['sleep', 'cycles', 'through', 'stages', 'not', 'evenly', 'distributed'],
      translation: "First half of the night is mostly deep NREM. Second half is mostly REM. Cutting either end is not the same as cutting the other.",
    },
    {
      type: 'translate',
      instruction: 'Name one major job sleep does that waking does much less of',
      prompt: 'During sleep, the brain runs a process called the _____ system that flushes metabolic waste',
      correct: ['glymphatic', 'glymphatic system', 'glymphatic clearance', 'brain cleansing', 'cleansing'],
    },
  ],

  rwenDialogue: {
    intro: "Let me show you why a parent of a baby who sleeps in two-hour fragments isn't just 'tired' — they're in a measurable, specific kind of sleep debt that no behavioural trick fully solves.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Imagine your typical sleep right now is broken into chunks. Aroha, who I mentioned in Lesson 1, sleeps from 10pm to midnight, then 1am to 3am, then 4am to 6:30am. That's 6.5 hours of total sleep. How does that compare to 6.5 unbroken hours?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's worse — every wake-up resets the cycle.", native: '', correct: true, feedback: "Yes. Each wake-up disrupts the architecture. The brain doesn't simply pick up the cycle where it left off; the early sleep stages re-occur, which means total deep NREM and REM are both reduced even though the clock shows 6.5 hours. This is biology, not weakness." },
          { target: "It's about the same — total time in bed is what matters.", native: '', correct: false, feedback: "Common assumption, but no. Sleep architecture matters more than total time. Aroha is getting fewer minutes of deep NREM and REM than her 6.5 hours suggest. This isn't moral weakness on her part — it is a structural fact about how sleep works." },
          { target: "It's better — at least she gets multiple sleep onsets.", native: '', correct: false, feedback: "Counterintuitively, no. Sleep onset is not where the value is. The value is in the deep stages that emerge 30+ minutes in. Repeated onsets mean less time in those stages." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "This is why we won't gaslight you with 'just sleep when the baby sleeps.' We'll instead protect the longest unbroken block you can build, even if total time stays the same. That is a real, evidence-based move. We get to it in Lesson 8.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Which kind of sleep dominates the first half of the night?",
        correct: ['deep nrem', 'nrem', 'deep sleep', 'slow wave', 'slow-wave', 'slow wave sleep', 'deep nrem sleep'],
      },
      {
        prompt: "Why does cutting sleep short by 2 hours at the end of the night disproportionately cost REM?",
        correct: ['rem is concentrated in the second half', 'most rem happens in the second half of the night', 'rem is in the last hours', 'rem is back loaded', 'rem is back-loaded', 'rem comes later in the night', 'rem is in the second half', 'because rem is in the last part of the night', 'rem dominates the late night'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Tonight, before bed, run a quick mental audit. What time will you most likely fall asleep? What time will you most likely wake? Which half of the night is at risk — the deep NREM front, or the REM back? You don't have to fix anything yet. Just notice which trade you're actually making.",
    rwenSignoff: "Awareness first. Repair starts when you can see what you're losing.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen invites them to name what they think the dominant sleep cost is in their current life — are they losing the front of the night (deep NREM, due to late bedtime, late work, late screens) or the back of the night (REM, due to early waking, early baby, early shift, 3am insomnia)? The aim is to get the user to identify which half they're losing, because the moves to repair each are different.",
    rwenRole: "Rwen — practical, biology-literate, kind. Helps the user place themselves in the architecture without diagnosing them. Reflects back what they say. Names the trade-off the user is currently making (often unknowingly). Does not catastrophise.",
    successCriteria: "User identifies, in concrete terms, whether they are mostly losing the front or back of the night, and can articulate one likely cost (mood/emotion brittleness if losing REM; physical fatigue and brain fog if losing deep NREM). Bonus if they spot a specific behaviour (late screen, early alarm, alcohol, baby pattern) that drives that loss.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
