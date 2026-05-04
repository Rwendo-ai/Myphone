import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-body-clock-not-enemy',
  module: 1,
  lesson: 3,
  title: 'Your Body Clock Is Not Your Enemy',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "If you've been told you're lazy because you don't 'naturally' wake at 6am, this lesson is for you. Your body clock is not a moral failing. It is a real, partly-genetic biological rhythm. Working with it beats fighting it — and once you know which version you have, half the shame around bedtime evaporates.",
    culturalNote: "Russell Foster's chronobiology is the cleanest source here. The suprachiasmatic nucleus — a tiny cluster of neurons in your hypothalamus — is your master clock. It runs at roughly, but not exactly, 24 hours, and it gets re-set every morning by light landing on specialised cells in your retina. None of this is mystical. All of it is gene-driven biology that varies between people.",
  },

  chunks: [
    {
      id: 'chronotype',
      target: 'Chronotype',
      native: 'Your body\'s natural preferred timing for sleep — partly genetic, varies across the population from extreme larks to extreme owls',
      literal: "Roenneberg's chronotype research; PER, CLOCK gene variants. Real, but the 'lark vs owl' simplification is a useful pedagogical model, not a clean two-category fact.",
      emoji: '🦉',
      phonetic: "Larks rise easy, fade early. Owls rise hard, peak late. Both are biology. Neither is virtue.",
      audioRef: null,
    },
    {
      id: 'zeitgebers',
      target: 'Zeitgebers',
      native: '"Time-givers" — environmental cues (mainly morning light, also food timing, exercise, social contact) that anchor your body clock to the 24-hour day',
      literal: "Foster — chronobiology. Morning light is the strongest zeitgeber by orders of magnitude. Even 5–10 minutes of outdoor light shortly after waking has a measurable phase-shifting effect.",
      emoji: '☀️',
      phonetic: "Morning light is the king. Everything else is a courtier.",
      audioRef: null,
    },
    {
      id: 'social_jetlag',
      target: 'Social jetlag',
      native: 'The mismatch between your biological body clock and the schedule your job, school, or family forces on you',
      literal: "Roenneberg coined the term. Most night owls live with it permanently — they wake before their biology is ready, then 'catch up' on weekends, which keeps the clock from ever stabilising.",
      emoji: '🛬',
      phonetic: "If your weekday and weekend wake times differ by 2+ hours, you live in a permanent westbound flight.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Anchor the clock first; everything else follows',
    explanation: "Chronotype is partly fixed (genes) and partly malleable (light, timing, age — chronotype shifts later in adolescence and earlier in old age). What you can change is the precision of your clock's anchor. The single highest-leverage move is consistency at one end — usually wake time — paired with morning light. You don't need to wake at 6am. You need to wake at the same time most days, then get bright light into your eyes within an hour. The clock will adjust to whatever schedule you're consistent with, within the limits of your chronotype.",
    examples: [
      { target: "An owl who has to be at work by 8am every weekday and sleeps until noon on Saturday", native: "Has 4 hours of social jetlag every week. The body clock never settles. Sunday-night insomnia is the predictable result." },
      { target: "A lark who pushes themselves to stay out until 1am on weekends", native: "Costs them quality sleep both weekend nights and creates a Tuesday-morning 'hangover' from drift. Chronotype works in both directions." },
      { target: "A parent who is woken at 5am every morning whether they like it or not", native: "Has an involuntary anchor — and can use it. The trade is going to bed earlier without guilt; honouring the wake time you didn't choose by giving it the bedtime it requires." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its definition',
      pairs: [
        { left: 'Chronotype', right: "Your body's natural preferred sleep timing, partly genetic" },
        { left: 'Zeitgeber', right: 'An environmental cue (light, food, social contact) that anchors your clock' },
        { left: 'Social jetlag', right: 'The mismatch between your biological clock and your social schedule' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which is the single most powerful zeitgeber?',
      question: 'Pick the cue your body clock cares about most',
      options: [
        { text: 'Bright light in the morning, ideally outdoors', correct: true },
        { text: 'A consistent dinner time', correct: false },
        { text: 'Going to bed at the same time every night', correct: false },
      ],
      explanation: "Morning light beats every other cue by orders of magnitude. Even on a cloudy day, outdoor light is 10–100x brighter than indoor light. Five to ten minutes of daylight within the first hour of waking is the highest-leverage circadian intervention you can make. Bedtime consistency matters too, but downstream of the anchor.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the chronobiology principle",
      sentence: "Consistency at the _____ end of sleep matters more than consistency at the bedtime end.",
      options: ['waking', 'middle', 'evening'],
      correct: 'waking',
      context: "You don't fully control when you fall asleep — sleep arrives when pressure and the clock agree. But you can control when you wake, and morning light entrainment is what re-sets the clock. Consistency at the wake end stabilises the whole system.",
    },
    {
      type: 'translate',
      instruction: "What is 'social jetlag'?",
      prompt: "The mismatch between your body's chronotype and the schedule your job or family imposes. Specifically, the difference between your weekday and weekend...",
      correct: ['wake time', 'wake times', 'sleep times', 'bedtime', 'sleep schedule', 'sleep-wake schedule', 'sleep schedules'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the pattern principle",
      words: ['light', 'is', 'the', 'morning', 'zeitgeber', 'strongest'],
      correct: ['morning', 'light', 'is', 'the', 'strongest', 'zeitgeber'],
      translation: "Outdoor light, within an hour of waking, even on a cloudy day. The cheapest sleep intervention there is.",
    },
    {
      type: 'translate',
      instruction: 'A night owl is forced to wake at 6am for work. What is the most effective single move to ease the misalignment?',
      prompt: "Get outdoor _____ within an hour of waking, every day, including weekends.",
      correct: ['light', 'sunlight', 'morning light', 'daylight', 'bright light'],
    },
  ],

  rwenDialogue: {
    intro: "Let's place you on the chronotype spectrum. There are no extra points for being a lark.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "If you had no obligations — no alarm, no job, no kids, nothing pulling you out of bed — what time would you naturally fall asleep, and what time would you naturally wake?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd be asleep by 10pm and up at 6am — naturally an early bird.", native: '', correct: true, feedback: "Lark chronotype. Easier to align with most work schedules — but watch out for late-evening social pressure that costs you sleep both weekend nights. Your worst nights are usually nights you stayed up against your biology." },
          { target: "I'd fall asleep around midnight and wake at 8am — middle of the road.", native: '', correct: true, feedback: "Intermediate chronotype, which is actually most people. Reasonably forgiving. Your highest-leverage move is consistency, especially of wake time — your clock entrains well if you let it." },
          { target: "I'd be up till 2am and want to sleep till 10am — full night owl.", native: '', correct: true, feedback: "Owl chronotype. You are not lazy. The world is set up for larks and you are paying social jetlag tax every weekday. Lessons 4 and 8 will give you the actual moves: aggressive morning light, anchored wake time, accepting that your bedtime is later than your moralistic friends say it should be." },
          { target: "Honestly, I'd sleep when I'm tired and wake when I'm done — no fixed pattern.", native: '', correct: true, feedback: "This usually means your clock has lost its anchor. Without consistent zeitgebers — especially morning light and a fixed wake time — the SCN free-runs at slightly more than 24 hours, which is why your sleep drifts later over time. Anchoring the wake end is the move. We'll get there." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whichever you are — there is no virtuous chronotype. There is only the one your biology gave you and the schedule your life demands. Your job is alignment, not transformation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the single most powerful zeitgeber for entraining the body clock?",
        correct: ['morning light', 'bright morning light', 'outdoor light', 'sunlight in the morning', 'light', 'morning sunlight', 'daylight in the morning'],
      },
      {
        prompt: "Which end of sleep should you keep most consistent if you only pick one — bedtime or wake time?",
        correct: ['wake time', 'wake', 'waking', 'wake-up time', 'wake up time', 'morning wake time', 'rising time'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Tomorrow morning, within one hour of waking, get outside for 5–10 minutes. No phone. No tasks. Just outdoor light landing on your face. Even if it's overcast. If you genuinely can't go outside (early shift, baby, weather), sit by the brightest window you have for the same 5–10 minutes. That is your circadian anchor for the day.",
    rwenSignoff: "Five minutes of light. Free, drug-free, evidence-based. The cheapest sleep intervention in the world.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen helps them name their chronotype honestly (without virtue-signalling either way), identify the size of their current social jetlag, and design one realistic morning-light protocol that fits their actual life — not a fantasy version of it.",
    rwenRole: "Rwen — non-moralistic, biology-literate. Defuses any 'I should be a morning person' guilt without overcorrecting into 'all schedules are equally good' (they aren't, when your job demands a fixed start). Helps the user separate what is fixed (their job, their kids) from what is malleable (when they get light, when they wake on weekends).",
    successCriteria: "User states their probable chronotype, names the rough size of their social jetlag (in hours), and commits to one specific morning-light habit that will actually happen tomorrow. Bonus if they articulate that owl-ness is biology, not character.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
