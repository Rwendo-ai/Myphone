import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02',
  module: 7,
  lesson: 2,
  title: 'Cities of Matabeleland',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Matabeleland is wide. From the granite hills of Matobo to the thundering water of Victoria Falls. Every place you might travel to has a Ndebele name — and the e- prefix tells you you're heading there.",
    culturalNote: "Bulawayo — kobulawayo, 'the place of the killing' — is the cultural capital of the Ndebele people. Founded by King Lobengula in 1872, it remains the heart of isiNdebele music, theatre and identity. Locals shorten it affectionately to 'koBulawayo' or just 'eBulawayo'.",
  },

  chunks: [
    {
      id: 'ebulawayo',
      target: 'eBulawayo',
      native: 'in / to Bulawayo',
      emoji: '🏛️',
      phonetic: 'eh-boo-lah-wah-yoh',
      audioRef: null,
    },
    {
      id: 'egwanda',
      target: 'eGwanda',
      native: 'in / to Gwanda',
      emoji: '⛰️',
      phonetic: 'eh-gwahn-dah',
      audioRef: null,
    },
    {
      id: 'evictoria_falls',
      target: 'eVictoria Falls',
      native: 'in / to Victoria Falls',
      emoji: '💦',
      phonetic: 'eh-vik-toh-ree-ah fahls',
      audioRef: null,
    },
    {
      id: 'aManz',
      target: 'aManz' + "'" + 'aThunqayo',
      native: 'the smoke that thunders (Ndebele name for Victoria Falls)',
      literal: 'water that smokes/rises',
      emoji: '🌊',
      phonetic: 'ah-mahn-zah-toon-chah-yoh',
      audioRef: null,
    },
    {
      id: 'plumtree',
      target: 'ePlumtree',
      native: 'in / to Plumtree (border town with Botswana)',
      emoji: '🛂',
      phonetic: 'eh-plum-tree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Place names take e-',
    explanation: "Just like ordinary nouns, place names take the e- prefix when you're going there or talking about being there. Bulawayo → eBulawayo. Gwanda → eGwanda. Even foreign names get the prefix: Plumtree → ePlumtree, Victoria Falls → eVictoria Falls. The prefix is doing the work of English 'in' or 'to'.",
    examples: [
      { target: 'Bulawayo → eBulawayo', native: 'Bulawayo → to/in Bulawayo' },
      { target: 'Gwanda → eGwanda', native: 'Gwanda → to/in Gwanda' },
      { target: 'Plumtree → ePlumtree', native: 'Plumtree → to/in Plumtree' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the place to its description',
      pairs: [
        { left: 'eBulawayo', right: 'cultural capital of Matabeleland' },
        { left: 'eGwanda', right: 'capital of Matabeleland South' },
        { left: 'eVictoria Falls', right: 'aManz' + "'" + 'aThunqayo — the smoke that thunders' },
        { left: 'ePlumtree', right: 'border town with Botswana' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence',
      sentence: 'Ngiya ___ (to Bulawayo).',
      options: ['eBulawayo', 'eGwanda', 'ePlumtree'],
      correct: 'eBulawayo',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'I am going to Victoria Falls.',
      correct: ['Ngiya eVictoria Falls', 'ngiya eVictoria Falls', 'Ngiya eVictoria Falls.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "What does 'aManz" + "'" + "aThunqayo' literally mean?",
      options: [
        { text: 'The smoke that thunders / water that rises like smoke', correct: true },
        { text: 'The great river', correct: false },
        { text: "King Lobengula's water", correct: false },
      ],
      explanation: "Both isiNdebele and chiTonga have versions of this name. The Tonga version 'Mosi-oa-Tunya' became famous globally, but the Ndebele 'aManz" + "'" + "aThunqayo' carries the same image — water that looks like rising smoke.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a long-distance bus rank. The conductor is calling out destinations.",
    lines: [
      { speaker: 'npc',  target: 'eGwanda! eGwanda! Lapha, lapha!', native: 'Gwanda! Gwanda! Here, here!' },
      { speaker: 'rwen', rwenLine: "He's calling for passengers heading south. You want Victoria Falls — tell him." },
      { speaker: 'user', userChoices: [
        { target: 'Mina ngiya eVictoria Falls.', native: 'I am going to Victoria Falls.', correct: true, feedback: "Clear. He'll point you to the right kombi." },
        { target: 'eBulawayo.', native: 'Bulawayo.', correct: false, feedback: "But you're already in Bulawayo — you want to go somewhere else." },
        { target: 'Sawubona.', native: 'Hello.', correct: false, feedback: "Polite, but he's running a queue. State your destination." },
      ]},
      { speaker: 'npc',  target: 'Awu, kufanele uye phesheya. Iqembu lakhona ngapha.', native: 'Ah, you must go across. That group is over there.' },
    ],
  },

  activeRecall: {
    instruction: 'Recall the place names with their prefixes.',
    prompts: [
      { prompt: 'How do you say "to Bulawayo"?', correct: ['eBulawayo', 'ebulawayo'] },
      { prompt: 'How do you say "to Gwanda"?', correct: ['eGwanda', 'egwanda'] },
      { prompt: "What is the Ndebele name for Victoria Falls (the smoke that thunders)?", correct: ['aManz' + "'" + 'aThunqayo', 'amanzathunqayo', 'aManzathunqayo'] },
    ],
  },

  mission: {
    title: 'Locate yourself on the map',
    task: "Open a map of Zimbabwe. Find Bulawayo, Gwanda, Victoria Falls and Plumtree. Trace the road from one to the next out loud: 'Ngiya eBulawayo. Sengiya eGwanda. Sengiya eVictoria Falls.' Two minutes.",
    rwenSignoff: "When you can name a place, you start to feel you've already been there.",
  },

  phase8: {
    scenario: "You're at a Bulawayo travel agency. Tell the agent which Matabeleland city you'd most like to visit and why. They will ask follow-up questions.",
    rwenRole: "Bulawayo travel agent, 30s, knows Matabeleland deeply, switches between English and isiNdebele",
    successCriteria: "User used at least two place names with the e- prefix and gave a reason for visiting.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
