import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-gutom-uhaw',
  module: 7,
  lesson: 1,
  title: 'Gutom & Uhaw — Hungry & Thirsty',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome to Module 7 — kain tayo! In the Philippines, food is love. The first thing any tita asks is 'Kumain ka na ba?' — have you eaten? Today we learn to say what your stomach is asking for.",
    culturalNote: "Filipinos use 'na' to mean 'already' — 'gutom na ako' literally means 'I am hungry already'. It signals a state has just arrived. Saying it isn't complaining — it's an invitation for someone to feed you.",
  },

  chunks: [
    {
      id: 'gutom_na_ako',
      target: 'Gutom na ako',
      native: "I'm hungry",
      literal: 'Hungry already I',
      emoji: '🍽️',
      phonetic: 'GU-tom na A-ko',
      audioRef: null,
    },
    {
      id: 'uhaw_na_ako',
      target: 'Uhaw na ako',
      native: "I'm thirsty",
      literal: 'Thirsty already I',
      emoji: '💧',
      phonetic: 'U-haw na A-ko',
      audioRef: null,
    },
    {
      id: 'gusto_ko_ng_tubig',
      target: 'Gusto ko ng tubig',
      native: 'I want water',
      literal: 'Want I some water',
      emoji: '🚰',
      phonetic: 'gus-TO ko nang TU-big',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stative na (already)',
    explanation: "The little word 'na' after a state means 'now / already'. It marks that something has just become true. Tagalog uses it constantly — 'gutom na', 'busog na' (full now), 'tapos na' (done now).",
    examples: [
      { target: 'Gutom na ako', native: "I'm hungry (now)" },
      { target: 'Busog na ako', native: "I'm full (now)" },
      { target: 'Pagod na ako', native: "I'm tired (now)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Gutom na ako', right: "I'm hungry" },
        { left: 'Uhaw na ako', right: "I'm thirsty" },
        { left: 'Gusto ko ng tubig', right: 'I want water' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your throat is dry. What do you say?",
      sentence: '_____ na ako.',
      options: ['Uhaw', 'Gutom', 'Busog'],
      correct: 'Uhaw',
      context: 'Uhaw = thirsty. Gutom = hungry. Busog = full.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm hungry",
      correct: ['Gutom na ako', 'gutom na ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask for water — drag the words in order',
      words: ['ng', 'Gusto', 'tubig', 'ko'],
      correct: ['Gusto', 'ko', 'ng', 'tubig'],
      translation: 'I want water',
    },
    {
      type: 'multiple_choice',
      instruction: "Tita asks if you've eaten. Your stomach is growling.",
      question: "What's the most natural reply?",
      options: [
        { text: 'Gutom na ako', correct: true },
        { text: 'Uhaw na ako', correct: false },
        { text: 'Gusto ko ng tubig', correct: false },
      ],
      explanation: "She'll have a plate in front of you in 30 seconds — guaranteed.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I want water',
      correct: ['Gusto ko ng tubig', 'gusto ko ng tubig'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at Tita Marissa's house in Quezon City. She opens the door, takes one look at you, and asks how you're doing.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, kumain ka na ba?',
        native: 'Child, have you eaten yet?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gutom na ako, tita', native: "I'm hungry, tita", correct: true, feedback: 'Perfect — and tita is already heading to the kitchen.' },
          { target: 'Busog na ako', native: "I'm full", correct: false, feedback: "She'll be a little hurt — Filipino tita food-love is hard to refuse." },
          { target: 'Uhaw na ako', native: "I'm thirsty", correct: false, feedback: "True maybe, but she asked about food — answer the food question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Halika, may kanin pa!',
        native: 'Come, there is still rice!',
      },
      {
        speaker: 'rwen',
        rwenLine: "There it is — the second you said 'gutom', a plate appeared. This is Filipino love language.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm hungry (in Tagalog)", correct: ['Gutom na ako', 'gutom na ako'] },
      { prompt: 'I want water (in Tagalog)', correct: ['Gusto ko ng tubig', 'gusto ko ng tubig'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time your stomach growls, say 'Gutom na ako' out loud — even alone. Let your mouth feel the rhythm of it.",
    rwenSignoff: "I'll ask you tomorrow. Kain tayo soon — let's eat together.",
  },

  phase8: {
    scenario: "It's Sunday lunch at Tita Marissa's house in Quezon City. The whole family is at the table — adobo, rice, sinigang already steaming. Tita just spotted you walk in and is about to ask if you've eaten. You haven't.",
    rwenRole: "Tita Marissa — the family's unofficial feeder, ~58yo, fluent in food-as-love, lights up when guests admit they're hungry, gently offended when they say busog (full).",
    successCriteria: "User says 'Gutom na ako' (or 'Uhaw na ako' / 'Gusto ko ng tubig') clearly when prompted, accepting tita's offer of food rather than declining. Bonus warmth if they call her 'tita'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
