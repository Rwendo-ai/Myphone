import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'Mealtime Conversation — The Whole Meal',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Final lesson of Module 7. Today we put it all together — arriving hungry, ordering, eating, complimenting, leaving full. One whole Filipino meal, in Tagalog, from start to finish.",
    culturalNote: "A real Filipino meal isn't transactional — it's narrative. Greeting, asking what's cooking, complimenting, laughing, refusing more food politely with 'busog na po ako'. The conversation IS the meal.",
  },

  chunks: [
    {
      id: 'ano_ang_ulam',
      target: 'Ano ang ulam?',
      native: "What's the dish?",
      literal: 'What the dish',
      emoji: '🍲',
      phonetic: 'A-no ang U-lam',
      audioRef: null,
    },
    {
      id: 'ang_sarap_nito',
      target: 'Ang sarap nito!',
      native: 'This is so delicious!',
      literal: 'The tastiness of-this',
      emoji: '😋',
      phonetic: 'ang sa-RAP ni-TO',
      audioRef: null,
    },
    {
      id: 'busog_na_po_ako',
      target: 'Busog na po ako, salamat',
      native: "I'm full, thank you",
      literal: 'Full already sir/maam I, thanks',
      emoji: '🙏',
      phonetic: 'BU-sog na po A-ko sa-LA-mat',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The whole-meal arc',
    explanation: "A Filipino mealtime conversation flows: arrival ('gutom na ako') → curiosity ('ano ang ulam?') → enjoyment ('ang sarap nito!') → polite refusal of more ('busog na po ako, salamat'). 'Busog na po ako' is the polite way to stop eating — never just 'ayoko'.",
    examples: [
      { target: 'Gutom na ako, ano ang ulam?', native: "I'm hungry, what's the dish?" },
      { target: 'Ang sarap nito! Mahilig ako sa adobo.', native: 'So delicious! I love adobo.' },
      { target: 'Busog na po ako, salamat tita', native: "I'm full, thank you tita" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ano ang ulam?', right: "What's the dish?" },
        { left: 'Ang sarap nito!', right: 'This is so delicious!' },
        { left: 'Busog na po ako, salamat', right: "I'm full, thank you" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tita is offering a third helping. You're stuffed but want to be polite.",
      sentence: '_____ na po ako, salamat.',
      options: ['Busog', 'Gutom', 'Uhaw'],
      correct: 'Busog',
      context: "Busog = full. The polite way to refuse more — never use 'ayoko' here.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'This is so delicious!',
      correct: ['Ang sarap nito!', 'Ang sarap nito', 'ang sarap nito'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely say you\'re full',
      words: ['ako', 'Busog', 'po', 'salamat', 'na'],
      correct: ['Busog', 'na', 'po', 'ako', 'salamat'],
      translation: "I'm full, thank you",
    },
    {
      type: 'multiple_choice',
      instruction: "You walk into tita's house at lunch. She's stirring a pot. What's the most natural opener?",
      question: 'Choose the right phrase',
      options: [
        { text: 'Gutom na ako! Ano ang ulam?', correct: true },
        { text: 'Bill po', correct: false },
        { text: 'Magpahinga ka', correct: false },
      ],
      explanation: "Hungry first, then ask what's cooking. Tita will be delighted to tell you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm full, thank you (polite refusal of more food)",
      correct: ['Busog na po ako, salamat', 'Busog na po ako salamat', 'busog na po ako salamat'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch at Tita Marissa's. You walk in, she greets you, and the whole arc of a Filipino meal begins.",
    lines: [
      {
        speaker: 'npc',
        target: 'Halika anak! Kumain ka na?',
        native: 'Come child! Have you eaten?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gutom na ako, tita. Ano ang ulam?', native: "I'm hungry, tita. What's the dish?", correct: true, feedback: "Perfect arrival — hungry and curious. Tita's heart is full." },
          { target: 'Busog na po ako', native: "I'm full", correct: false, feedback: "You just walked in! Save that for after eating." },
          { target: 'Bill po', native: 'The bill, please', correct: false, feedback: "Tita doesn't run a karinderya — this is family." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sinigang at adobo. Subukan mo!',
        native: 'Sinigang and adobo. Try it!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ang sarap nito! Mahilig ako sa adobo', native: "So delicious! I love adobo.", correct: true, feedback: 'Tita just floated three inches off the floor.' },
          { target: 'Ayoko', native: "I don't want it", correct: false, feedback: "Never. Even if it's not your favourite, you say masarap." },
          { target: 'Walang sibuyas', native: 'No onions', correct: false, feedback: "Wrong moment — she's already cooked it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kain pa, anak! Marami pa.',
        native: 'Eat more, child! There is plenty.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Busog na po ako, salamat tita', native: "I'm full, thank you tita", correct: true, feedback: 'Polite, warm, with tita on the end. Textbook close.' },
          { target: 'Ayoko na', native: "I don't want any more", correct: false, feedback: "Too direct — softens with 'busog na po ako, salamat'." },
          { target: 'Gutom na ako', native: "I'm hungry", correct: false, feedback: "You just ate two plates!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 7 done. You arrived hungry, ate with joy, refused politely. You ate like a Filipino. Halika, kain tayo — always.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "What's the dish? (in Tagalog)", correct: ['Ano ang ulam?', 'Ano ang ulam', 'ano ang ulam'] },
      { prompt: "I'm full, thank you (polite refusal, in Tagalog)", correct: ['Busog na po ako, salamat', 'Busog na po ako salamat', 'busog na po ako salamat'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run the whole arc tonight — even alone in your kitchen. Say 'Gutom na ako'. Then 'Ang sarap nito!'. Then 'Busog na po ako, salamat'. One whole Filipino meal, in your mouth.",
    rwenSignoff: "Module 7 — done. You eat like a Filipino now. Halika, kain tayo — always.",
  },

  phase8: {
    scenario: "Sunday lunch at Tita Marissa's apartment in Quezon City. You walk in hungry. The full arc unfolds: greeting, asking what's cooking, complimenting the food, accepting a second helping, then politely refusing a third. The whole meal in Tagalog.",
    rwenRole: "Tita Marissa — the family's master host, ~58yo, will run the whole hosting playbook on you: greeting, feeding, insisting on more, beaming at every 'masarap'. She accepts 'busog na po ako, salamat' as a graceful close.",
    successCriteria: "User completes the full meal arc: opens with 'gutom na ako' or 'ano ang ulam?', uses 'ang sarap nito' or 'mahilig ako sa [dish]' mid-meal, and closes with 'busog na po ako, salamat' (NOT 'ayoko'). Bonus warmth for using 'tita'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
