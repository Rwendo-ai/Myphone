import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-paani-bhookh',
  module: 7,
  lesson: 3,
  title: 'Bhookh & Pyaas — Hunger and Thirst',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In India, saying you're hungry or thirsty isn't complaining — it's permission. The host has been waiting for you to ask. Until you say 'mujhe bhookh lagi hai', they'll worry they haven't done enough.",
    culturalNote: "Hindi expresses hunger and thirst as something that 'happened' to you — 'bhookh lagi' (hunger has struck), 'pyaas lagi' (thirst has struck). It's not 'I am hungry' — it's 'hunger has come to me'. Same grammar shape for fever, sleep, fear. The body is acted upon.",
  },

  chunks: [
    {
      id: 'bhookh_lagi',
      target: 'भूख लगी है',
      native: 'I\'m hungry (lit. hunger has struck)',
      literal: 'Bhookh lagi hai — hunger struck is',
      emoji: '😋',
      phonetic: 'BHOOK la-GEE hai',
      audioRef: null,
    },
    {
      id: 'pyaas_lagi',
      target: 'प्यास लगी है',
      native: 'I\'m thirsty (lit. thirst has struck)',
      literal: 'Pyaas lagi hai — thirst struck is',
      emoji: '💧',
      phonetic: 'PYAAS la-GEE hai',
      audioRef: null,
    },
    {
      id: 'paani',
      target: 'पानी',
      native: 'Water',
      literal: 'Paani — water',
      emoji: '🚰',
      phonetic: 'PAA-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe X lagi hai — "X has struck me"',
    explanation: "Hindi feelings often use 'mujhe' (to me) + the noun + 'lagi/laga hai' (has struck/attached). 'Mujhe bhookh lagi hai' = hunger has come to me. Same shape: mujhe pyaas lagi hai (thirst), mujhe neend aa rahi hai (sleep is coming), mujhe darr lag raha hai (fear).",
    examples: [
      { target: 'Mujhe bhookh lagi hai', native: 'I\'m hungry (hunger struck me)' },
      { target: 'Mujhe pyaas lagi hai', native: 'I\'m thirsty (thirst struck me)' },
      { target: 'Mujhe paani chahiye', native: 'I want water' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hunger/thirst phrase to its meaning',
      pairs: [
        { left: 'Bhookh lagi hai', right: 'I\'m hungry' },
        { left: 'Pyaas lagi hai', right: 'I\'m thirsty' },
        { left: 'Paani', right: 'Water' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you\'re thirsty',
      sentence: 'Mujhe _____ lagi hai.',
      options: ['pyaas', 'paani', 'bhookh'],
      correct: 'pyaas',
      context: 'You want to ask for water — start by stating thirst.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I\'m hungry',
      correct: ['Mujhe bhookh lagi hai', 'mujhe bhookh lagi hai', 'Bhookh lagi hai', 'bhookh lagi hai'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your host\'s mother says "khaana khaaya?" (Have you eaten?). You\'re actually starving. Best answer:',
      question: 'Reply when genuinely hungry:',
      options: [
        { text: 'Nahi, mujhe bhookh lagi hai', correct: true },
        { text: 'Haan, peet bhar gaya', correct: false },
        { text: 'I\'m okay, thanks', correct: false },
      ],
      explanation: "'Nahi, mujhe bhookh lagi hai' — no, hunger has struck me. Saying it gives the auntie permission to feed you, which is what she wanted to do anyway.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want water"',
      words: ['paani', 'chahiye', 'Mujhe'],
      correct: ['Mujhe', 'paani', 'chahiye'],
      translation: 'I want water',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Water',
      correct: ['Paani', 'paani'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at a friend's parents' home in Lucknow after a long train ride. The mother greets you and immediately checks on you.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, खाना खाया?',
        native: 'Son/dear, have you eaten?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nahi aunty, mujhe bhookh lagi hai. Aur thodi pyaas bhi.', native: 'No aunty, I\'m hungry. And a little thirsty too.', correct: true, feedback: 'Honest, polite, and you used both phrases. She\'s already heading to the kitchen.' },
          { target: 'Haan, theek hai', native: 'Yes, fine', correct: false, feedback: 'If you\'re actually hungry, say so. "Mujhe bhookh lagi hai" gives her the permission she\'s waiting for.' },
          { target: 'Mujhe khaana do', native: 'Give me food', correct: false, feedback: 'Too direct. Lead with the feeling: "Mujhe bhookh lagi hai" — then she\'ll offer.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'अरे बेटा! बैठो, मैं अभी रोटी बनाती हूँ।',
        native: 'Oh dear! Sit, I\'ll make roti right now.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She didn't feed you because you asked. She fed you because you let her. That's the trick.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I\'m thirsty', correct: ['Mujhe pyaas lagi hai', 'mujhe pyaas lagi hai', 'Pyaas lagi hai', 'pyaas lagi hai'] },
      { prompt: 'Water', correct: ['Paani', 'paani'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, the next time you're actually hungry or thirsty, name it in Hindi first — out loud or silent. 'Mujhe bhookh lagi hai.' / 'Mujhe pyaas lagi hai.' Notice the grammar — it didn't happen because of you. It happened to you.",
    rwenSignoff: "Hunger comes to you, water comes from the host. Phir milenge.",
  },

  phase8: {
    scenario: "You\'ve just stepped off the Shatabdi at Lucknow Junction after six hours and your friend\'s mother has met you on the platform. She immediately starts walking you toward the car asking the standard wellness questions — eaten? drunk water? — before letting you do anything else.",
    rwenRole: "Aunty (your friend\'s mother) — early 60s, North Indian household matriarch; treats hunger as her personal responsibility to solve and won\'t accept polite Western 'I\'m fine' answers.",
    successCriteria: "User answers honestly using the 'mujhe X lagi hai' construction (NOT just 'I\'m fine' or 'thank you'), names both bhookh and pyaas if relevant, accepts the offered food or water rather than refusing — and lets her insist when she does, because that's the dance.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
