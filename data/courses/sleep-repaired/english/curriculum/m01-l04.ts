import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-wind-down-hour',
  module: 1,
  lesson: 4,
  title: "The Wind-Down Hour You Don't Have",
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "You cannot go from a meeting, a screaming toddler, or a tax-return spreadsheet to sleep. The body needs a runway. Most adults sprint until 10:59 and then expect to be unconscious by 11. The brain doesn't work like that — and neither does yours.",
    culturalNote: "The wind-down hour is not a luxury or a wellness affectation. It's the cool-down phase of the autonomic nervous system shifting from sympathetic ('go') to parasympathetic ('rest and digest'). CBT-I (Carney & Manber) names this phase as one of the most reliable, lowest-effort, highest-yield changes for people whose sleep has gone sideways. We'll be honest: most users will be able to manage 30 minutes, not 60. That's fine. Some runway beats none.",
  },

  chunks: [
    {
      id: 'wind_down',
      target: 'The wind-down',
      native: "A protected stretch — ideally 30–60 minutes — between the high-arousal day and bed; reserved for low-arousal activity",
      literal: "CBT-I — sleep hygiene component. The principle isn't 'do calming things'; it's 'stop doing arousing things' so your nervous system can shift gears.",
      emoji: '🛬',
      phonetic: "Don't go straight from the meeting to the pillow. The brain needs a runway.",
      audioRef: null,
    },
    {
      id: 'stimulus_control',
      target: 'Stimulus control',
      native: "Re-training the brain to associate the bed with sleep (and only sleep, plus sex). Don't work, scroll, eat, or argue in bed.",
      literal: "CBT-I — Bootzin's stimulus control therapy (1972). One of the most evidence-supported behavioural interventions in all of sleep medicine. Not folk wisdom; therapy.",
      emoji: '🛏️',
      phonetic: "The bed is not your office. It is not your phone-stand. It is not your worry chamber.",
      audioRef: null,
    },
    {
      id: 'sleep_window',
      target: 'Your sleep window',
      native: "The block of time you commit to being in bed for sleep — anchored at the wake end, with bedtime determined by working backwards from your needed total time",
      literal: "CBT-I — the foundational move of sleep restriction therapy. Counterintuitively, *less* time in bed often produces *more* sleep, by raising sleep pressure and rebuilding bed-as-sleep association.",
      emoji: '⏱️',
      phonetic: "Anchor the wake end. Set the bedtime that gives you a real chance of sleep, not a pious ideal.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Defend the runway, anchor the window',
    explanation: "Two moves do most of the work here. First, build a small protected wind-down — even 20 minutes counts — where you do low-arousal activities (warm shower, light reading, slow stretching, music, basic kitchen tidy). Second, set a sleep window: a fixed wake time (yes, weekends too, within an hour) and a bedtime calculated by subtracting roughly the sleep you actually need (start with 7 hours if you genuinely don't know — most adults need 7–9; some need 6 and some need 10). If you currently lie in bed for 9 hours and sleep 6, your bed-association has rotted. Restricting your time in bed to closer to your actual sleep — temporarily — re-builds the association. This is sleep restriction therapy, the engine of CBT-I.",
    examples: [
      { target: "You watch a thriller, scroll the news, then turn off the light at 11", native: "Cortisol up, heart rate up, mind active — then you're surprised it takes 45 minutes to drop off. The runway never existed." },
      { target: "You lie in bed reading for an hour 'until you feel sleepy', then sleep 6 hours, then lie there awake for 30 minutes", native: "You spent 7.5 hours in bed for 6 hours of sleep — sleep efficiency 80%. The bed has been re-trained to mean 'a place where I lie awake.' Restricting time in bed is the cure." },
      { target: "Aroha, parent of a baby — total sleep is 6 hours, mostly broken", native: "Cannot do classic sleep restriction. Her move is different: the longest unbroken block, plus 20 minutes of wind-down before her earliest plausible bedtime, plus brutal stimulus control during the night wakings (no scrolling). We'll cover her case in Lesson 8." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each move to what it does',
      pairs: [
        { left: 'The wind-down', right: 'Low-arousal runway between day and bed' },
        { left: 'Stimulus control', right: 'Re-training the bed to mean sleep, and only sleep' },
        { left: 'Sleep window / sleep restriction', right: 'Restricting time in bed to rebuild sleep pressure and bed-association' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Counterintuitively, what often produces *more* sleep over a few weeks?',
      question: 'Pick the CBT-I move',
      options: [
        { text: 'Spending more time in bed to "give yourself more chance"', correct: false },
        { text: 'Spending less time in bed, building sleep pressure, then expanding gradually', correct: true },
        { text: 'Going to bed earlier whenever you feel tired during the day', correct: false },
      ],
      explanation: "Sleep restriction therapy: temporarily limiting time in bed to close to your actual current sleep total raises sleep pressure, consolidates fragmented sleep, and rebuilds bed-as-sleep. Then you expand the window by 15 minutes at a time as efficiency improves. This is one of the most counterintuitive and most effective tools in CBT-I — and almost no one hears about it from wellness culture.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the stimulus-control rule",
      sentence: "The bed should be associated with sleep and sex — and almost _____ else.",
      options: ['nothing', 'everything', 'something'],
      correct: 'nothing',
      context: "Bootzin's stimulus control. Reading in bed when sleepy is fine; watching TV, scrolling, working, arguing, or worrying in bed all dilute the conditioned 'bed = sleep' link until the bed becomes a place where you lie awake.",
    },
    {
      type: 'translate',
      instruction: "Which end of the sleep window should you anchor first?",
      prompt: "The...",
      correct: ['wake end', 'wake time', 'waking end', 'wake', 'morning end', 'rise time', 'getting-up time', 'waking time'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the wind-down principle",
      words: ['needs', 'a', 'sleep', 'runway', 'before'],
      correct: ['sleep', 'needs', 'a', 'runway', 'before'],
      translation: "30–60 minutes ideally. 15–20 if that's all you have. Zero is the version that fails.",
    },
    {
      type: 'translate',
      instruction: "Why does spending 9 hours in bed for 6 hours of sleep make insomnia worse, not better?",
      prompt: "Because the bed becomes associated with...",
      correct: ['lying awake', 'being awake', 'wakefulness', 'not sleeping', 'awakeness', 'staying awake', 'frustration', 'worry'],
    },
  ],

  rwenDialogue: {
    intro: "Let's design your wind-down honestly. Not the Pinterest version — the version that survives a Tuesday night.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tonight, what is the realistic protected window you could carve out before bed? Not the ideal. The version that survives reality.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I could probably manage 20 minutes most nights.", native: '', correct: true, feedback: "Good — that's a real number. Twenty minutes of low-arousal activity (shower, slow stretching, dim lights, a few pages of fiction) is enough to start shifting the autonomic nervous system. Most people overshoot ambition and undershoot consistency. You're picking the version that actually happens." },
          { target: "Honestly, with kids, I get maybe 5 minutes between the last task and falling into bed.", native: '', correct: true, feedback: "Then your wind-down has to live inside the kid-tasks, not after them. Dim the lights for the last 30 minutes of the bedtime routine. Don't open the work laptop after the kids are down. Five minutes of breath in the bathroom counts. Don't let the perfect be the enemy of the possible — Lesson 8 returns to your case directly." },
          { target: "I work nights. My 'bedtime' is 9am.", native: '', correct: true, feedback: "Same principle, different clock. Your wind-down is 8:30–9am. The hard parts: blackout curtains, blue-blocker glasses on the drive home, decompressing without doomscrolling. Lesson 8 has the specific shift-worker moves. The architecture of the wind-down is the same — only the clock changes." },
          { target: "I have time but I just keep choosing to scroll until I drop.", native: '', correct: true, feedback: "Honest. The phone is a stimulus engine; it's the opposite of a wind-down. The intervention isn't willpower — it's friction. Charger out of the bedroom. Greyscale mode. 'Do not disturb' from 10pm. Make the path of least resistance the path you want. Lesson 5 is going to be specifically about this." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Twenty minutes of real wind-down beats sixty minutes of imaginary wind-down. The version that survives is the version that helps.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is stimulus control teaching you to associate the bed with?",
        correct: ['sleep', 'sleep only', 'only sleep', 'sleep and sex', 'sleep (and sex)', 'sleep and sex only', 'sleep + sex', 'just sleep'],
      },
      {
        prompt: "Sleep restriction therapy works by raising sleep _____ and rebuilding the bed-as-sleep association.",
        correct: ['pressure', 'drive', 'sleep pressure', 'sleep drive'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Tonight, set a wind-down alarm 20 minutes before your intended bedtime. When it goes off — close the laptop, put the phone on the charger in another room, dim the lights. Do something low-arousal: warm shower, slow stretching, a few pages of fiction, slow tidying, listening to music. Twenty minutes. Then bed.",
    rwenSignoff: "Twenty minutes. The alarm is the trick — it removes willpower from the equation.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen helps them design a personalised wind-down ritual that survives their actual evening — not a generic 'meditate and journal' template. The aim: name the specific 20–30 minute window, the specific activity, the specific friction-removers (phone out of room, laptop closed, lights dimmed), and one obstacle the user already knows will trip them up.",
    rwenRole: "Rwen — practical and honest. Helps the user pre-commit to one specific wind-down design, then runs a brief 'when X happens, what will you do?' rehearsal for the most likely failure mode. Does not preach about screen time; does help the user remove obstacles they've already identified.",
    successCriteria: "User commits to (1) a specific time and length of wind-down, (2) one specific low-arousal activity, (3) one specific friction-remover (phone in another room, laptop closed, lights dimmed at a fixed time), and (4) names one likely failure mode and what they'll do when it happens. Bonus if they choose a real time tonight to start.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
