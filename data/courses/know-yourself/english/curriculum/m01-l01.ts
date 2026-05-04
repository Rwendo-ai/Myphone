import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-looking-and-seeing',
  module: 1,
  lesson: 1,
  title: 'The Difference Between Looking and Seeing',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome. Before we work on anything else, we have to learn to notice. Most of life is lived on autopilot — we look at things without really seeing them. Today we slow that down by one notch.",
    culturalNote: "The first skill of self-knowledge is attention. Every contemplative tradition — from Buddhist mindfulness to Stoic prosoche to modern MBSR — begins here. Not because attention is mystical, but because nothing else works without it.",
  },

  chunks: [
    {
      id: 'autopilot',
      target: 'Autopilot',
      native: 'The default state where you act without noticing you are acting',
      literal: 'Cognitive science — automatic processing (Kahneman, System 1)',
      emoji: '🚗',
      phonetic: 'Most of your day runs on it.',
      audioRef: null,
    },
    {
      id: 'noticing',
      target: 'Noticing',
      native: 'Bringing awareness to something that was already happening',
      literal: 'MBSR — Kabat-Zinn defines mindfulness as paying attention on purpose, in the present moment, non-judgementally',
      emoji: '🪟',
      phonetic: 'Not adding anything. Just looking.',
      audioRef: null,
    },
    {
      id: 'present_moment',
      target: 'The present moment',
      native: 'The only place where life is actually happening',
      literal: 'Buddhist psychology — sati / mindfulness; also William James on attention',
      emoji: '⏳',
      phonetic: 'Past is memory. Future is imagination. Now is real.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Autopilot vs. Noticing',
    explanation: "Looking happens automatically — your eyes do it whether you're paying attention or not. Seeing requires you to bring yourself to what's in front of you. The shift from one to the other takes about half a second. Today we practise that half-second.",
    examples: [
      { target: 'Looking at your phone', native: 'Seeing the actual face of the person texting you' },
      { target: 'Hearing rain', native: 'Listening to it for ten seconds with nothing else going on' },
      { target: 'Eating lunch while scrolling', native: 'Tasting one bite — the texture, the temperature, the salt' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'Autopilot', right: 'Acting without noticing you are acting' },
        { left: 'Noticing', right: 'Bringing awareness to what is already there' },
        { left: 'The present moment', right: 'The only place where life is actually happening' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is an example of seeing rather than looking?',
      question: 'Pick the one that involves real attention',
      options: [
        { text: 'Glancing at the sky to check the weather, then walking on', correct: false },
        { text: 'Standing still for ten seconds and watching a single cloud move', correct: true },
        { text: 'Reading a headline while half-listening to the radio', correct: false },
      ],
      explanation: "Looking is brief and instrumental — you check, you move on. Seeing slows down and stays. The cloud example is seeing because you stopped doing anything else.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Mindfulness is paying attention on purpose, in the _____ moment, non-judgementally.',
      options: ['present', 'perfect', 'past'],
      correct: 'present',
      context: "Kabat-Zinn's definition. The word 'present' is doing all the work — it points to the only moment where attention is actually possible.",
    },
    {
      type: 'translate',
      instruction: 'In one sentence — what is the difference between looking and seeing?',
      prompt: 'Looking is automatic. Seeing is _____',
      correct: ['on purpose', 'intentional', 'deliberate', 'with attention', 'attentive'],
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange the words into the principle that grounds this lesson',
      words: ['actually', 'is', 'the', 'happening', 'where', 'present', 'life', 'moment', 'is'],
      correct: ['the', 'present', 'moment', 'is', 'where', 'life', 'is', 'actually', 'happening'],
      translation: 'A reminder, not an instruction. Past and future live in the head; the body is always here.',
    },
    {
      type: 'translate',
      instruction: 'A friend asks you what you learned today. Reply in one sentence.',
      prompt: 'There is a difference between looking and seeing. Looking is...',
      correct: ['automatic', 'autopilot', 'on autopilot', 'unconscious', 'passive'],
    },
  ],

  rwenDialogue: {
    intro: "Let's try noticing right now. I'll guide you through a 30-second experiment.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Wherever you are, look up from your screen for a moment. Pick one object you can see. Anything. A wall, a tree, a cup. Look at it for five seconds. Then come back. Take your time.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. I noticed something I hadn't seen before.", native: '', correct: true, feedback: "That's the whole skill. You just did the thing the rest of this course is built on." },
          { target: "I did it but I didn't notice anything new.", native: '', correct: true, feedback: "That counts. The skill is the looking, not the discovery. Sometimes you see something. Sometimes you don't. Both are practice." },
          { target: "I skipped it. I'll do it later.", native: '', correct: false, feedback: "Honest answer. Try this: do it now, even for two seconds. The whole point of this course is that small acts of attention compound. Skipping the first one sets the wrong precedent." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Good. That was it. The whole lesson, in five seconds. Everything else we'll do this year is a variation on what you just practised.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one phrase, what is the state where you act without noticing?',
        correct: ['autopilot', 'on autopilot', 'automatic', 'automatic processing', 'default'],
      },
      {
        prompt: 'In one phrase — what does mindfulness mean? (paying attention __, in the present moment, non-judgementally)',
        correct: ['on purpose', 'deliberately', 'intentionally'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "One time today — anywhere, any moment — stop for ten seconds and really see one thing. The rim of your cup. A face. A leaf. The texture of the floor. Don't try to feel anything in particular. Just look.",
    rwenSignoff: "Ten seconds. That's the whole assignment. I'll ask tomorrow what you saw.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen invites them into a short conversation about what they noticed during the 10-second mission earlier today (or, if they haven't done it yet, in real time during the conversation). The aim is to practise describing an act of attention out loud, which deepens the encoding.",
    rwenRole: "Rwen — warm, curious, unhurried. Asks one open question at a time. Does not interpret or analyse what the user says. Mirrors back what they noticed and gently asks one more question.",
    successCriteria: "User describes one specific thing they saw or heard, in concrete sensory detail (a colour, a texture, a sound), rather than in abstract language ('I felt calmer'). Bonus if they notice something they had walked past many times before without seeing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
