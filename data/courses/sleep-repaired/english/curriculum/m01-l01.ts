import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-sleep-is-a-skill',
  module: 1,
  lesson: 1,
  title: 'Sleep Is a Skill, Not a Stroke of Luck',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome. Today's the day you become someone who treats sleep as a skill, not a stroke of luck. If your sleep has gone sideways — for a week, a month, or six years — you have not failed at being a person. Your body is doing reasonable things in unreasonable circumstances. We can work with that.",
    culturalNote: "Sleep is a behaviour as much as it is a biology. The most evidence-based treatment for chronic insomnia — Cognitive Behavioural Therapy for Insomnia, or CBT-I — outperforms sleeping pills on long-term outcomes (American College of Physicians, 2016). It teaches the user, not drugs the user. That is what this course will do, in eight short lessons.",
  },

  chunks: [
    {
      id: 'sleep_as_skill',
      target: 'Sleep as a skill',
      native: "The frame that sleep is a behaviour you can practise — not a personality trait you do or don't have",
      literal: "CBT-I (Carney & Manber); habit science (Clear, Fogg); identity-based behaviour change",
      emoji: '🌙',
      phonetic: "Skills can be repaired. Traits feel like fate. We choose skills.",
      audioRef: null,
    },
    {
      id: 'two_processes',
      target: 'The two-process model',
      native: 'Sleep is regulated by two systems — sleep pressure (how long since you last slept) and the body clock (where you are in your 24-hour cycle)',
      literal: "Borbély's two-process model (1982); Russell Foster's chronobiology — both processes must agree for sleep to come easily",
      emoji: '⚙️',
      phonetic: "Tired isn't enough. The clock has to agree, too.",
      audioRef: null,
    },
    {
      id: 'sleep_drive',
      target: 'Sleep pressure',
      native: 'A chemical (adenosine) that builds in the brain the longer you are awake; it is the "tiredness" you feel',
      literal: "Neuroscience — adenosine accumulates during waking and is cleared by sleep; caffeine works by blocking its receptors",
      emoji: '🧪',
      phonetic: "Naps and caffeine borrow from this account. There is no free pour.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sleep is built by two systems, both of which respond to behaviour',
    explanation: "You don't fall asleep because you decide to. You fall asleep when sleep pressure (built up across the day) and the body clock (telling you it's the right hour) line up. This is the two-process model, and it explains almost everything that goes wrong with sleep. Stay in bed too long, sleep pressure crashes. Sleep at irregular hours, the clock loses its grip. Almost every move in this course adjusts one of these two levers. You don't need willpower. You need to understand the system.",
    examples: [
      { target: "You took a 90-minute nap at 5pm and now can't fall asleep at 11pm", native: "The nap dumped your sleep pressure. Not a character flaw. The system worked exactly as designed." },
      { target: "You went to bed at 10pm one night and 1am the next; tonight you can't settle", native: "Your body clock has lost its anchor. The clock entrains to consistent timing, especially morning light." },
      { target: "You're exhausted at 9pm but get a 'second wind' at 11pm", native: "The body clock has wake-promoting signals that fire late evening (the 'forbidden zone' for sleep) — biology, not bad luck." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'Sleep as a skill', right: 'A behaviour you can practise, not a personality trait' },
        { left: 'Sleep pressure', right: 'The chemical tiredness that builds the longer you are awake' },
        { left: 'The body clock', right: 'The 24-hour rhythm that decides when sleep is biologically allowed' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the most evidence-based long-term treatment for chronic insomnia?',
      question: 'Pick the one major guideline bodies actually recommend',
      options: [
        { text: 'Sleeping pills (e.g. zopiclone, zolpidem)', correct: false },
        { text: 'Melatonin supplements', correct: false },
        { text: 'CBT-I (Cognitive Behavioural Therapy for Insomnia)', correct: true },
      ],
      explanation: "The American College of Physicians (2016) and most international guidelines name CBT-I as first-line for chronic insomnia. Sleeping pills work in the short term but lose effectiveness, can cause dependence, and don't outperform CBT-I beyond a few weeks. Most people have never been told this.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "Sleep is regulated by two processes: sleep pressure, and the body _____.",
      options: ['clock', 'effort', 'mood'],
      correct: 'clock',
      context: "This is Borbély's two-process model. Almost every sleep problem traces back to one of these two systems being out of alignment with the other.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what builds up the longer you are awake?',
      prompt: 'The chemical that creates "tiredness" is called...',
      correct: ['adenosine', 'sleep pressure', 'sleep drive'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange this lesson's identity statement",
      words: ['skill', 'a', 'sleep', 'is', 'not', 'a', 'stroke', 'of', 'luck'],
      correct: ['sleep', 'is', 'a', 'skill', 'not', 'a', 'stroke', 'of', 'luck'],
      translation: "Read it as your new working assumption. Repair is possible because skills are practised, not given.",
    },
    {
      type: 'translate',
      instruction: 'Why does a 90-minute nap at 5pm often wreck the night?',
      prompt: 'Because it dumps your...',
      correct: ['sleep pressure', 'sleep drive', 'adenosine', 'tiredness'],
    },
  ],

  rwenDialogue: {
    intro: "Before we go further, I want to know what kind of broken sleep you're working with. There's no wrong answer. The advice you'll get over the next eight lessons depends on the constraints you're actually living with.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Which of these sounds most like your sleep right now? You can pick the closest one — or none of them, if your situation doesn't fit.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "There is a small human in my house and they decide when I sleep.", native: '', correct: true, feedback: "Welcome. This course assumes you exist. Your sleep is partly hostage to a body smaller than yours, and you cannot 'fix' that with breathing exercises. You can still build the parts of the system that are yours to build — and we'll be specific about that. Lessons 4, 6, and 8 will name your situation." },
          { target: "I work shifts. My body and my schedule disagree.", native: '', correct: true, feedback: "This course will not pretend you're a 9-to-5 worker. Shift work fights chronobiology, and there is no way to 'win' that fight — only harm-reduce it. Lesson 3 will explain why your body is doing what it's doing, and Lesson 8 will give you the actual moves shift workers use." },
          { target: "I lie awake at 3am. Every night. For months.", native: '', correct: true, feedback: "You are exactly who CBT-I was designed for. Long insomnia is the most treatable kind of broken sleep there is — it just needs the right intervention, and the intervention isn't pills. Lessons 4, 6, and 7 are your spine. Stay with me." },
          { target: "I scroll my phone in bed and then can't sleep. I know. I know.", native: '', correct: true, feedback: "Honest. Lesson 5 is going to surprise you a little — the truth about screens is more nuanced than the wellness influencers claim. We'll work on it without moralism." },
          { target: "My body has changed (peri/menopause, age, hormones) and sleep changed with it.", native: '', correct: true, feedback: "Real. Sleep architecture genuinely changes across the lifespan, and peri-menopausal sleep changes are biologically driven, not imagined. Lessons 7 and 8 will be honest about what behaviour can and cannot fix, and when to involve a clinician." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Good. I have you in mind for the rest of the course. Whatever your version of broken sleep is, the two-process model is still running underneath. We're going to use it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: "What are the two systems that regulate sleep? (Sleep ______ and the body ______.)",
        correct: ['pressure and clock', 'pressure, clock', 'pressure / clock', 'sleep pressure and the body clock', 'pressure and the body clock', 'drive and clock'],
      },
      {
        prompt: "What is the most evidence-based long-term treatment for chronic insomnia?",
        correct: ['cbt-i', 'cbt for insomnia', 'cognitive behavioural therapy for insomnia', 'cognitive behavioral therapy for insomnia', 'cbti'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Write down one sentence — anywhere, on paper, in your phone — that names what you actually want from sleep right now. Not 'eight hours.' Something concrete and yours: 'I want to fall asleep within 30 minutes most nights.' Or, 'I want to stop dreading bedtime.' Or, 'I want to wake up at 3am and not panic about it.' One sentence. That is your working target for the rest of the course.",
    rwenSignoff: "One sentence. Specific to you. The course gets sharper when you know what you're aiming at.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen helps them name, out loud, the sleep problem they actually have — concretely, not in clichés. The aim is to get the user to articulate one specific, behavioural sleep target they could plausibly hit in eight weeks, and to defuse any 'I'm just a bad sleeper' identity statements that would predict failure.",
    rwenRole: "Rwen — warm, curious, completely non-judgemental about the user's current sleep. Asks open questions. Does not prescribe. Reflects back the user's specific words. If the user says 'I'm a bad sleeper,' Rwen gently reframes — not by arguing, but by asking what specifically goes wrong (falling asleep? staying asleep? waking too early?).",
    successCriteria: "User names a concrete, behavioural sleep target ('fall asleep within 30 minutes', 'sleep through to 5am', 'not dread 11pm', 'stop fearing the 3am wake') rather than an abstract one ('sleep better'). Bonus if they articulate one specific way their current sleep frustration is treated as a personal failing rather than a system problem.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
