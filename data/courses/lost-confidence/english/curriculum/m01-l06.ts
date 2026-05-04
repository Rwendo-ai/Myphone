import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-small-evidence',
  module: 1,
  lesson: 6,
  title: 'Small Evidence',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who collects small evidence on purpose. Confidence is not rebuilt by pep talk. It is rebuilt by accumulating modest acts of capability you can actually point at. Today we collect one — and design tomorrow's.",
    culturalNote: "Albert Bandura's research on self-efficacy was unambiguous: of the four sources of confidence — mastery experience, vicarious experience, verbal persuasion, and emotional state — the strongest by a wide margin is mastery experience. Doing one small thing successfully predicts confidence in the next thing more reliably than any pep talk ever does. BJ Fogg made the same point behaviourally: tiny habits are the only kind robust enough to survive a low-confidence period. CBT calls this behavioural activation — when motivation is gone, action precedes feeling, not the other way around.",
  },

  chunks: [
    {
      id: 'mastery_experience',
      target: 'Mastery experience',
      native: "A specific, recently-completed action that counts as evidence of capability — however small",
      literal: "Bandura — *Self-Efficacy: The Exercise of Control* (1997); the most powerful of the four sources of self-efficacy",
      emoji: '🧱',
      phonetic: "One brick at a time. The brick is real. The wall is later.",
      audioRef: null,
    },
    {
      id: 'tiny_specific',
      target: 'Tiny and specific',
      native: "Small enough to do on a bad day, specific enough to recognise when it's done",
      literal: "BJ Fogg — *Tiny Habits*; Charles Duhigg — *The Power of Habit*; behavioural design",
      emoji: '🔬',
      phonetic: "'Get fit' is not it. 'Walk to the corner and back' is it.",
      audioRef: null,
    },
    {
      id: 'evidence_log',
      target: 'Evidence log',
      native: "A short, daily, honest record of what you actually did — not what you intended, not what you planned",
      literal: "CBT behavioural activation; positive psychology — Seligman's 'three good things' generalised to actions",
      emoji: '📒',
      phonetic: "Confidence has a memory problem. Writing it down is the fix.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Behavioural activation in low gear',
    explanation: "When confidence is gone, the temptation is to wait until you feel ready before acting. CBT research shows this is backwards: the action precedes the feeling, not the other way around. The technique has three parts. (1) Identify one small thing you actually did recently — even something most people would not count. Count it anyway. (2) Pick one tiny, specific, completable action for tomorrow — small enough to do on a bad day. (3) Log both, in writing. The log is doing more work than you think.",
    examples: [
      { target: "After getting fired in his fifties: 'I haven't done anything productive in three weeks.'", native: "Counted: 'I returned three calls. I went to the gym twice. I made a list of former colleagues to contact.' Tomorrow: 'I will email one of them.'" },
      { target: "After her novel flopped: 'I haven't written a word.'", native: "Counted: 'I read for an hour yesterday. I edited the document I started last month, even briefly.' Tomorrow: 'I will write 200 words. Any 200.'" },
      { target: "After the divorce: 'I'm not even functioning.'", native: "Counted: 'I cooked twice this week. The kids got to school. I paid the council tax.' Tomorrow: 'I will go for a 15-minute walk before lunch.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Mastery experience', right: 'A recent, specific action that counts as evidence of capability' },
        { left: 'Tiny and specific', right: "Small enough to do on a bad day, specific enough to recognise when it's done" },
        { left: 'Evidence log', right: 'A short honest record of what you actually did' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a tiny, specific action — the kind that can survive a bad day?',
      question: 'Pick the one that meets both criteria',
      options: [
        { text: '"Get back into shape this month."', correct: false },
        { text: '"Walk to the end of the road and back, once today."', correct: true },
        { text: '"Become more productive."', correct: false },
      ],
      explanation: "The first and third are aspirations, not actions — neither has a clear done state, and neither survives a low-energy day. The middle option is small, specific, and unambiguously completable. Bandura's whole point: the *completing* is the source of confidence, not the size.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle from CBT behavioural activation',
      sentence: 'When confidence is gone, action precedes _____, not the other way around.',
      options: ['feeling', 'thinking', 'planning'],
      correct: 'feeling',
      context: "Most self-help operates the wrong way around: 'feel motivated, then act.' CBT and Bandura both say: act, then the feeling slowly returns. The first repetition is the hardest because you have to do it without the feeling of wanting to.",
    },
    {
      type: 'translate',
      instruction: 'In two words — what is the strongest source of self-efficacy according to Bandura?',
      prompt: 'The technical term:',
      correct: ['mastery experience', 'mastery experiences', 'mastery'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the technique',
      words: ['count', 'log', 'design', 'one', 'one', 'tomorrow', 'today', 'both', 'for', 'thing'],
      correct: ['count', 'one', 'thing', 'today', 'design', 'one', 'for', 'tomorrow', 'log', 'both'],
      translation: "Three steps. Together, about ten minutes a day. The compounding is real.",
    },
    {
      type: 'translate',
      instruction: 'Name one specific thing you actually did this week — however small.',
      prompt: 'Type one action (e.g. "made one phone call", "walked the dog", "answered three emails"):',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's count one specific thing from this week and design one for tomorrow.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "First — name one thing you actually did in the last seven days. Not the cool version. Not the ambitious version. One actual completed action. 'Returned a phone call.' 'Went to a class.' 'Cooked dinner once.' Just one.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have one. It's small but it counts.", native: '', correct: true, feedback: "Good. The qualifier 'but it counts' is the lesson. Most people stop at 'it's small'. The whole technique depends on counting it anyway." },
          { target: "I have several. They've been invisible to me until you asked.", native: '', correct: true, feedback: "That is the most common response. The actions were there. The accounting was missing. Pick the one that matters most to you and write it down today — that is the start of the log." },
          { target: "Honestly, I cannot think of one. The week has been a fog.", native: '', correct: true, feedback: "Stay with it for ten more seconds. Did you eat? Did you reply to one message? Did you get out of bed on a hard day? Bandura's bar is genuinely that low for the first rep — and it has to be, because the user we are designing for is exhausted. Anything counts." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now — what is one specific, tiny thing you will do tomorrow? Small enough to survive a hard morning. Specific enough that you will know when it's done. Hold it in mind.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have it. Small, specific, doable.", native: '', correct: true, feedback: "That is the design move. Tomorrow, the only job is doing the thing — not feeling like doing it. Action first, feeling later." },
          { target: "I want to pick something bigger.", native: '', correct: true, feedback: "Notice the impulse. The bigger version is often the one that doesn't get done — and the not-doing then becomes new evidence against you. Smaller is the right size for now. Bigger comes later, after the log has built." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Confidence is rebuilt one specific completed action at a time. You named one. You designed one. That is the lesson. Now write both down somewhere you will look tomorrow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Bandura's term for the strongest source of self-efficacy?",
        correct: ['mastery experience', 'mastery experiences', 'mastery'],
      },
      {
        prompt: "Action precedes ___ , not the other way around.",
        correct: ['feeling', 'feelings', 'the feeling', 'motivation'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, write down one specific thing you actually did in the last seven days. Then write one specific, tiny action for tomorrow. Two lines. Same piece of paper. Look at the paper tomorrow morning.",
    rwenSignoff: "Two lines. The first time it will feel like nothing. By line ten it stops feeling like nothing.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen offers a 3-minute conversation in which the user names one specific completed action from the last week and designs one specific tiny action for tomorrow. The aim is to leave with both written down.",
    rwenRole: "Rwen — encouraging but not effusive. Insists on specificity. Pushes back gently on vague answers ('that sounds great — what specifically did you do, and when?'). Pushes back on too-big tomorrow plans ('what's the smaller version of that you could do even on your worst day this week?'). Counts genuinely small things as real.",
    successCriteria: "User produces (1) one named completed action from the last seven days, in concrete terms (not 'I tried to be productive' but 'I made the call to the bank on Tuesday'), and (2) one named tomorrow action that is specific, completable, and small enough to survive a bad morning. Bonus if the user notices their own initial dismissal ('but it's so small') and counts it anyway.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
