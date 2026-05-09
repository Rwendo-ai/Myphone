import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06',
  module: 4,
  lesson: 6,
  title: 'At a Restaurant — Calling and Ordering',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Bulawayo restaurant. You sit. You catch the waiter's eye. You order. Today: how to call a waiter politely, how to order, and how not to sound demanding.",
    culturalNote: "In Zimbabwean restaurants — Ndebele, Shona, or English-speaking — you don't snap fingers or shout. A raised hand and 'uxolo' (excuse me) is the standard. Waiters are often called by 'sisi' (sister) or 'bhuti' (brother) — friendly, not formal. Tipping ~10% is normal in city restaurants if service was good.",
  },

  chunks: [
    {
      id: 'uxolo',
      target: 'Uxolo',
      native: 'Excuse me / sorry',
      emoji: '🙋',
      phonetic: 'oo-XOH-loh',
      audioRef: null,
    },
    {
      id: 'sisi',
      target: 'sisi',
      native: 'sister (friendly address to a young woman, e.g. waitress)',
      emoji: '👩',
      phonetic: 'SEE-see',
      audioRef: null,
    },
    {
      id: 'bhuti',
      target: 'bhuti',
      native: 'brother (friendly address to a young man, e.g. waiter)',
      emoji: '👨',
      phonetic: 'BOO-tee',
      audioRef: null,
    },
    {
      id: 'imenu',
      target: 'imenu',
      native: 'menu',
      emoji: '📋',
      phonetic: 'ee-MEH-noo',
      audioRef: null,
    },
    {
      id: 'ngicela',
      target: 'Ngicela',
      native: 'Please / I request',
      emoji: '🙏',
      phonetic: 'ngee-CHEH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ngicela vs Ngifuna — soft vs direct',
    explanation: "'Ngicela' literally means 'I request' — it carries a built-in 'please'. 'Ngifuna' means 'I want' — direct, fine with friends and family. In a restaurant, with someone you've just met, default to 'Ngicela'. It is the polite register.",
    examples: [
      { target: 'Ngicela imenu', native: 'May I have the menu, please' },
      { target: 'Ngicela isitshwala lenyama', native: 'I would like isitshwala and meat, please' },
      { target: 'Ngifuna amanzi', native: 'I want water (direct, casual)' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Choose the right opener',
      question: 'You want to catch the waiter\'s attention politely in a Bulawayo restaurant. What do you say?',
      options: [
        { text: 'Uxolo, sisi! / Uxolo, bhuti!', correct: true },
        { text: 'Hayi! Hayi!', correct: false },
        { text: 'Snap fingers loudly.', correct: false },
      ],
      explanation: "Uxolo (excuse me) plus sisi/bhuti is the standard polite call. Snapping or shouting reads as rude.",
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'May I have the menu, please',
      correct: ['Ngicela imenu', 'ngicela imenu'],
    },
    {
      type: 'fill_blank',
      instruction: "You want to politely order isitshwala and meat",
      sentence: '____ isitshwala lenyama.',
      options: ['Ngicela', 'Ngifuna', 'Uxolo'],
      correct: 'Ngicela',
      context: "In a restaurant, default to the polite request form.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Excuse me, sister, may I have water'",
      words: ['amanzi', 'Uxolo', 'sisi,', 'ngicela'],
      correct: ['Uxolo', 'sisi,', 'ngicela', 'amanzi'],
      translation: 'Excuse me, sister, may I have water.',
    },
  ],

  rwenDialogue: {
    intro: "A small restaurant in Bulawayo at lunchtime. You have just sat down. The waitress is finishing with another table.",
    lines: [
      { speaker: 'rwen', rwenLine: "Catch her eye, raise your hand, then speak. No need to shout." },
      { speaker: 'user', userChoices: [
        { target: 'Uxolo, sisi! Ngicela imenu.', native: 'Excuse me, sister! May I have the menu.', correct: true, feedback: 'Polite, complete, friendly.' },
        { target: 'Imenu!', native: '(just shouts the word)', correct: false, feedback: 'Too curt — and reads as demanding. Open with uxolo.' },
      ] },
      { speaker: 'npc',  target: 'Yebo, nakhu imenu. Uthanda ukudla kwani?', native: 'Yes, here is the menu. What would you like to eat?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngicela isitshwala lenyama yenkomo.', native: 'May I have isitshwala and beef, please.', correct: true, feedback: 'Specific and polite — perfect.' },
        { target: 'Ngifuna inyama!', native: 'I want meat!', correct: false, feedback: "Understandable but too direct for a restaurant — and 'inyama' alone is vague. Use ngicela and specify." },
      ] },
      { speaker: 'npc',  target: 'Lokuphuza? Itiye, ikhofi, amanzi?', native: 'And to drink? Tea, coffee, water?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngicela amanzi, ngiyabonga.', native: 'Water, please. Thank you.', correct: true, feedback: 'Clean and complete.' },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'excuse me' in isiNdebele?",                  correct: ['Uxolo', 'uxolo'] },
      { prompt: "What's the polite word for 'please / I request'?",           correct: ['Ngicela', 'ngicela'] },
      { prompt: "How would you address a young waiter (brother)?",            correct: ['bhuti'] },
    ],
  },

  mission: {
    title: "Roleplay your next coffee order",
    task: "Next time you go to a café — anywhere — say your order silently to yourself first as 'Uxolo, ngicela ____.' Your real order can stay in English. The point is to wire up the politeness register.",
    rwenSignoff: "The opener — uxolo — does most of the work. Get that one phrase smooth and the rest follows.",
  },

  phase8: {
    scenario: "You are at a small restaurant in Bulawayo at lunchtime. You greet the waiter politely, ask for a menu, order food and a drink, and respond when she asks if you want anything else.",
    rwenRole: "Sisi Thandi — a waitress in her late twenties, friendly and patient with people learning isiNdebele.",
    successCriteria: "User opened with 'uxolo, sisi/bhuti', used 'ngicela' at least twice when ordering, and named at least one specific food and one specific drink.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
