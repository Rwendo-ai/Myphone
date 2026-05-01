import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-demonstratives',
  module: 4,
  lesson: 7,
  title: 'Ito, Iyan, Iyon — This, That, That-Far',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English has two: this and that. Tagalog has three: ito, iyan, iyon. The difference? Distance — but not just from you. From the LISTENER too. Once you've got these, you can point at anything in any conversation, and the listener instantly knows where to look.",
    culturalNote: "Spanish does this too (este/ese/aquel). Mandarin doesn't. English barely does. The three-way demonstrative tunes you to share space with the listener — it's a cooperative grammar. Filipino vendors use it constantly: 'ito ba, iyan, o iyon?' — this one, that one, or that one over there?",
  },

  chunks: [
    {
      id: 'ito',
      target: 'Ito',
      native: 'This (near me)',
      literal: 'speaker-near',
      emoji: '☝️',
      phonetic: 'ee-TO',
      audioRef: null,
    },
    {
      id: 'iyan',
      target: 'Iyan',
      native: 'That (near you)',
      literal: 'listener-near',
      emoji: '👉',
      phonetic: 'ee-YAN',
      audioRef: null,
    },
    {
      id: 'iyon',
      target: 'Iyon',
      native: 'That (far from both of us)',
      literal: 'far-from-both',
      emoji: '🫳',
      phonetic: 'ee-YON',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three-way demonstrative',
    explanation: "Tagalog splits 'that' into two: 'iyan' for things near the listener, 'iyon' for things far from both of you. 'Ito' is what's near you, the speaker. Always picture the triangle — me, you, far-away.",
    examples: [
      { target: 'Ito ay libro', native: 'This is a book (near me)' },
      { target: 'Iyan ba ang sa iyo?', native: 'Is that one (by you) yours?' },
      { target: 'Iyon ang bahay namin', native: 'That (over there) is our house' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each demonstrative to its distance',
      pairs: [
        { left: 'Ito', right: 'This (near me)' },
        { left: 'Iyan', right: 'That (near you)' },
        { left: 'Iyon', right: 'That (far from both)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You hold a mango. You ask the vendor:',
      sentence: 'Magkano _____?',
      options: ['ito', 'iyan', 'iyon'],
      correct: 'ito',
      context: "It's in your hand — 'ito' = this, near me.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'That (the one near you)',
      correct: ['Iyan', 'iyan'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'That (far) is our house'",
      words: ['namin', 'ang', 'bahay', 'Iyon'],
      correct: ['Iyon', 'ang', 'bahay', 'namin'],
      translation: 'That (over there) is our house',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a market. The vendor holds a fish. You point at it. Which word do you use?",
      question: 'The fish is in the vendor\'s hand, not yours.',
      options: [
        { text: 'Iyan', correct: true },
        { text: 'Ito', correct: false },
        { text: 'Iyon', correct: false },
      ],
      explanation: "Near the LISTENER (vendor) = 'iyan'. 'Ito' = near you. 'Iyon' = far from both.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'This (in my hand)',
      correct: ['Ito', 'ito'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Quiapo market. There's a mango in your hand, a pineapple in the vendor's hand, and a stack of bananas on a table at the back of the stall.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong gusto mo?',
        native: 'What do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magkano ito? At iyan? At iyon?', native: 'How much is this? And that? And that one over there?', correct: true, feedback: "Perfect — three demonstratives in one breath. The vendor knows EXACTLY which is which." },
          { target: 'Magkano ito? At ito? At ito?', native: 'How much is this? And this? And this?', correct: false, feedback: "All 'ito' means 'near me'. The vendor can't tell which item you mean." },
          { target: 'Magkano iyon?', native: 'How much is that (far)?', correct: false, feedback: "Only one word — but you have THREE items at three distances. Use all three." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ito, beinte. Iyan, sampung piso. Iyon, treinta.',
        native: 'This (the mango near you), 20. That (the pineapple by me), 10 pesos. That (the bananas over there), 30.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how she echoed your demonstratives? You picked the right distance for each item, and the conversation just flowed. Three-way pointing is a superpower.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'This (near me, in Tagalog)',
        correct: ['Ito', 'ito'],
      },
      {
        prompt: 'That (far from both, in Tagalog)',
        correct: ['Iyon', 'iyon'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Point at three things and name them with the right demonstrative. Your coffee cup ('ito'). Your friend's phone ('iyan'). The building across the street ('iyon'). Three points, three distances.",
    rwenSignoff: "Hanggang bukas — until tomorrow. The pointing system is yours.",
  },

  phase8: {
    scenario: "You're at a Quiapo market stall. The vendor has fruit in their hand, you have one in yours, and there's a basket on a shelf at the back. You want prices on all three.",
    rwenRole: "Manong Boy — Quiapo fruit vendor, ~55, holds up items as you ask, will ask 'alin?' (which?) if your demonstrative doesn't match the distance.",
    successCriteria: "User correctly uses all three: 'ito' for the item near them, 'iyan' for the item near the vendor, 'iyon' for the item far from both. If they swap them, Manong Boy points and asks 'alin?' for clarification.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
