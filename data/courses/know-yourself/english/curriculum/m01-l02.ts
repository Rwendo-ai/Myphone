import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-one-breath-on-purpose',
  module: 1,
  lesson: 2,
  title: 'One Breath, On Purpose',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you saw one thing. Today we use the breath as our anchor. Not because breathing is sacred, but because it's always with you. You can't forget your breath at home.",
    culturalNote: "Every wisdom tradition that teaches attention uses the breath — Buddhist anapanasati, Christian centring prayer, Sufi dhikr, Hindu pranayama, modern MBSR. Not because they all agree, but because the breath is the most reliable doorway any human has back into the present.",
  },

  chunks: [
    {
      id: 'anchor',
      target: 'The anchor',
      native: 'A reliable physical sensation you can return to when your mind wanders',
      literal: 'MBSR / contemplative practice — a chosen object of attention (breath, sound, body) that gives the mind something to come back to',
      emoji: '⚓',
      phonetic: 'For most people, the breath is the easiest anchor. It is always available.',
      audioRef: null,
    },
    {
      id: 'one_breath',
      target: 'One breath',
      native: 'A single inhale and exhale that you actually pay attention to',
      literal: 'Tiny Habits (Fogg) applied to attention — the smallest possible practice that still counts',
      emoji: '🌬️',
      phonetic: 'Not ten breaths. Not a meditation. One.',
      audioRef: null,
    },
    {
      id: 'wandering_is_not_failure',
      target: 'Wandering is not failure',
      native: 'When your mind drifts, that is not a sign you are bad at this — that is the practice',
      literal: 'MBSR core teaching — the act of returning IS the meditation; the wandering itself is not the problem',
      emoji: '🔄',
      phonetic: "If your mind wanders 50 times, you get 50 reps of returning. That's the whole skill.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The breath cycle as practice',
    explanation: "Every breath has the same three parts: the inhale, the small pause, the exhale. The skill isn't to breathe a special way. The skill is to notice the breath you're already taking. That's it.",
    examples: [
      { target: 'Inhale — feel the air enter', native: 'Notice the cool sensation in the nose, or the chest rising' },
      { target: 'The small pause at the top', native: "Just a moment. Don't force it." },
      { target: 'Exhale — feel the air leave', native: 'Notice the chest falling, or the warm air leaving the nose' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'The anchor', right: 'A sensation you return to when your mind wanders' },
        { left: 'One breath', right: 'The smallest possible attention practice that still counts' },
        { left: 'Wandering is not failure', right: 'The act of returning IS the practice' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your mind wanders during the practice. What does that mean?',
      question: 'Pick the most accurate answer',
      options: [
        { text: "It means you're bad at this and should try harder", correct: false },
        { text: "It means the practice isn't working", correct: false },
        { text: "It means you have the chance to practise the skill of returning", correct: true },
      ],
      explanation: "The wandering isn't the obstacle to the practice — the wandering is what gives you the chance to practise. A mind that never wandered would have nothing to learn.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'The breath is a useful _____ because it is always available.',
      options: ['anchor', 'breath', 'feeling'],
      correct: 'anchor',
      context: "An anchor is anything that gives the mind a place to come back to. The breath qualifies because it is always with you and always now.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — when your mind wanders, what should you do?',
      prompt: 'Notice that it wandered, and gently...',
      correct: ['return', 'come back', 'go back', 'return to the breath', 'come back to the breath'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle of this lesson',
      words: ['the', 'practice', 'is', 'returning', 'the'],
      correct: ['the', 'returning', 'is', 'the', 'practice'],
      translation: "Every time you notice your mind has drifted and you bring it back, you've done the rep.",
    },
    {
      type: 'translate',
      instruction: 'In your own words — what is the smallest possible attention practice that counts?',
      prompt: 'One ___, paid attention to.',
      correct: ['breath', 'breath taken', 'breath in and out'],
    },
  ],

  rwenDialogue: {
    intro: "Let's take one breath together right now. The instruction is simple: breathe in, notice that you're breathing in. Breathe out, notice that you're breathing out. That's it.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Take one breath now — at your own pace. Notice the air entering. The pause. The air leaving. Take your time. I'm here.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. My mind stayed on the breath.", native: '', correct: true, feedback: "Good. That's a clean rep. Tomorrow you'll do another one." },
          { target: "I did it but my mind wandered to something else.", native: '', correct: true, feedback: "That's also a clean rep. The wandering and the return are both part of the practice. You did the skill." },
          { target: "I tried but I felt self-conscious.", native: '', correct: true, feedback: "Honest. That's normal — paying attention to something you usually do unconsciously feels strange the first few times. The strangeness fades. The practice doesn't." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever happened, it counted. There is no version of this where you do it wrong. The only failure is not trying.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type your answer.',
    prompts: [
      {
        prompt: 'What word describes a reliable sensation you return to when the mind wanders?',
        correct: ['anchor', 'an anchor', 'the anchor'],
      },
      {
        prompt: 'When your mind wanders during the practice, the wandering is...',
        correct: ['not failure', 'not a failure', 'part of the practice', 'the practice', 'normal'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today — before a meal, before you stand up, before you reply to a message — take ONE breath on purpose. Notice the inhale. Notice the exhale. Then carry on. That's the whole assignment.",
    rwenSignoff: "One breath. That's it. The streak isn't about minutes. It's about showing up.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen invites a short coaching conversation about installing 'one breath' as a recurring micro-habit. The aim is to help the user pick a specific cue (a moment in their day when they will reliably take the breath) and rehearse it once.",
    rwenRole: "Rwen — practical, grounded, gentle. Asks the user to name one specific moment in their day (e.g. before the first sip of morning tea, when they sit down at their desk, before they pick up their phone in the morning). Does not lecture about the benefits of breathing.",
    successCriteria: "User names a specific, concrete cue tied to an existing daily action (NOT 'every hour' or 'whenever I remember'), and practises one breath with Rwen on the call. Bonus if they articulate why they chose that cue.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
