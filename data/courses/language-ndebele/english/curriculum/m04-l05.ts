import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05',
  module: 4,
  lesson: 5,
  title: 'I Want to Eat — Ngifuna ukudla',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Ngifuna ukudla. 'I want to eat.' Four syllables that work in a kitchen, a market, a restaurant, a home. Today you also learn how to swap 'eat' for any other verb you want.",
    culturalNote: "In a Ndebele home, you usually wait to be offered food rather than asking — but if you have travelled far or arrived hungry between meals, saying 'ngifuna ukudla' to your host is honest and welcomed. With friends and family it's normal everyday speech.",
  },

  chunks: [
    {
      id: 'ngifuna',
      target: 'Ngifuna',
      native: 'I want',
      emoji: '🙋',
      phonetic: 'ngee-FOO-nah',
      audioRef: null,
    },
    {
      id: 'ukudla',
      target: 'ukudla',
      native: 'to eat / food',
      emoji: '🍽️',
      phonetic: 'oo-KOO-dlah',
      audioRef: null,
    },
    {
      id: 'ukuphuza',
      target: 'ukuphuza',
      native: 'to drink',
      emoji: '🥤',
      phonetic: 'oo-koo-PHOO-zah',
      audioRef: null,
    },
    {
      id: 'ngifuna_ukudla',
      target: 'Ngifuna ukudla',
      native: 'I want to eat',
      emoji: '🍲',
      phonetic: 'ngee-FOO-nah oo-KOO-dlah',
      audioRef: null,
    },
    {
      id: 'ngifuna_ukuphuza',
      target: 'Ngifuna ukuphuza amanzi',
      native: 'I want to drink water',
      emoji: '💧',
      phonetic: 'ngee-FOO-nah oo-koo-PHOO-zah ah-MAHN-zee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ngifuna + uku- verb (I want to ___)',
    explanation: "To say 'I want to do X', use 'Ngifuna' (I want) plus the infinitive of the verb. The infinitive in isiNdebele almost always starts with 'uku-' — so ukudla (to eat), ukuphuza (to drink), ukulala (to sleep), ukuhamba (to go). Slot any uku- verb in after Ngifuna and you have a complete sentence.",
    examples: [
      { target: 'Ngifuna ukudla', native: 'I want to eat' },
      { target: 'Ngifuna ukuphuza itiye', native: 'I want to drink tea' },
      { target: 'Ngifuna ukulala', native: 'I want to sleep' },
    ],
  },

  exercises: [
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "I want to eat"',
      words: ['Ngifuna', 'ukudla'],
      correct: ['Ngifuna', 'ukudla'],
      translation: 'I want to eat.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "I want to drink water"',
      words: ['ukuphuza', 'amanzi', 'Ngifuna'],
      correct: ['Ngifuna', 'ukuphuza', 'amanzi'],
      translation: 'I want to drink water.',
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'I want tea',
      correct: ['Ngifuna itiye', 'ngifuna itiye', 'Ngifuna ukuphuza itiye', 'ngifuna ukuphuza itiye'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the correct version',
      question: "Which sentence means 'I want to eat isitshwala'?",
      options: [
        { text: 'Ngifuna ukudla isitshwala.', correct: true },
        { text: 'Ngifuna isitshwala ukudla.', correct: false },
        { text: 'Ukudla ngifuna isitshwala.', correct: false },
      ],
      explanation: "Order: 'Ngifuna' first, then the uku- verb, then the noun. Subject — verb — object, just like English here.",
    },
  ],

  rwenDialogue: {
    intro: 'A late-evening kitchen scene. You have just arrived after a long bus ride from Bulawayo to Plumtree.',
    lines: [
      { speaker: 'npc',  target: 'Ulambile na?', native: 'Are you hungry?' },
      { speaker: 'user', userChoices: [
        { target: 'Yebo, ngifuna ukudla.', native: 'Yes, I want to eat.', correct: true, feedback: 'Direct and honest. After a long journey this is exactly right.' },
        { target: 'Hatshi.', native: 'No.', correct: false, feedback: "If you're actually hungry, this leaves your host guessing — be direct." },
      ] },
      { speaker: 'npc',  target: 'Ufunani uthanda?', native: 'What would you like?' },
      { speaker: 'rwen', rwenLine: "Use the pattern. Ngifuna + uku- verb + the noun." },
      { speaker: 'user', userChoices: [
        { target: 'Ngifuna ukudla isitshwala.', native: 'I want to eat isitshwala.', correct: true, feedback: 'Perfectly built sentence.' },
        { target: 'Ngifuna isitshwala ukudla.', native: '(wrong word order)', correct: false, feedback: 'The verb (ukudla) comes before the noun (isitshwala). Rebuild.' },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'I want' in isiNdebele?",       correct: ['Ngifuna', 'ngifuna'] },
      { prompt: "How do you say 'I want to eat'?",              correct: ['Ngifuna ukudla', 'ngifuna ukudla'] },
      { prompt: "How do you say 'I want to drink water'?",      correct: ['Ngifuna ukuphuza amanzi', 'ngifuna ukuphuza amanzi'] },
    ],
  },

  mission: {
    title: 'Use the pattern five times today',
    task: "Five times today — silently or out loud — say 'Ngifuna uku___ ___' for whatever you are about to do. Eat, drink, sleep, go, sit. The pattern is more important than vocabulary; the words will follow.",
    rwenSignoff: "Patterns are language scaffolding. Once you have one, you can hang any new verb off it.",
  },

  phase8: {
    scenario: "You arrive late at a friend's home in Plumtree after a long bus journey. Their mother asks what you need. You ask for food, drink, and possibly rest, using the Ngifuna + uku- verb pattern.",
    rwenRole: "MaMpofu — your friend's mother, who is glad you arrived safely and wants to make sure you eat before sleeping.",
    successCriteria: "User used 'Ngifuna' followed by an uku- verb at least twice in the conversation, with at least two different verbs (e.g. ukudla, ukuphuza, ukulala).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
