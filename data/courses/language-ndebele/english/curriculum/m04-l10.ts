import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10',
  module: 4,
  lesson: 10,
  title: 'Talking About a Meal You Enjoyed',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Final lesson of the module. Today you tell a story — a meal you ate, what was on the plate, how it tasted, who you were with. Past tense, real life. Everything from the last nine lessons, woven together.",
    culturalNote: "Ndebele storytelling tradition (intsumi) values a teller who can paint a scene with small details — what was eaten, who served, what was said. A story about food is rarely just about food. It's about who you were with.",
  },

  chunks: [
    {
      id: 'izolo',
      target: 'izolo',
      native: 'yesterday',
      emoji: '📅',
      phonetic: 'ee-ZOH-loh',
      audioRef: null,
    },
    {
      id: 'ngadla',
      target: 'Ngadla',
      native: 'I ate',
      emoji: '🍽️',
      phonetic: 'ngah-DLAH',
      audioRef: null,
    },
    {
      id: 'bekumnandi',
      target: 'Bekumnandi',
      native: 'It was tasty',
      emoji: '😋',
      phonetic: 'beh-koom-NAHN-dee',
      audioRef: null,
    },
    {
      id: 'nge',
      target: 'lo',
      native: 'with (joining word — used like English "and" between people)',
      emoji: '🤝',
      phonetic: 'loh',
      audioRef: null,
    },
    {
      id: 'narrative',
      target: 'Izolo ngadla isitshwala lo Sipho. Bekumnandi kakhulu.',
      native: 'Yesterday I ate isitshwala with Sipho. It was very tasty.',
      emoji: '📖',
      phonetic: 'ee-ZOH-loh ngah-DLAH ee-see-CHWAH-lah loh SEE-poh. beh-koom-NAHN-dee kah-KOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense — Nga- (I did)',
    explanation: "To say 'I ate' (past), the prefix 'Ngi-' (I) shifts to 'Nga-' (I did, in the past). Ngidla = I eat → Ngadla = I ate. Ngiphuza = I drink → Ngaphuza = I drank. This is the simple past — the same form for 'I ate' and 'I have eaten'. Drop in 'izolo' (yesterday) at the start to anchor the time.",
    examples: [
      { target: 'Ngadla isitshwala', native: 'I ate isitshwala' },
      { target: 'Ngaphuza itiye', native: 'I drank tea' },
      { target: 'Izolo ngadla inyama', native: 'Yesterday I ate meat' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'Yesterday I ate isitshwala',
      correct: ['Izolo ngadla isitshwala', 'izolo ngadla isitshwala'],
    },
    {
      type: 'fill_blank',
      instruction: 'Past tense: "I ate beef yesterday"',
      sentence: 'Izolo ____ inyama yenkomo.',
      options: ['ngadla', 'ngidla', 'angidli'],
      correct: 'ngadla',
      context: "'Izolo' (yesterday) tells you this is past tense.",
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'Yesterday I ate isitshwala with Sipho. It was very tasty.'",
      words: ['lo Sipho.', 'Bekumnandi kakhulu.', 'ngadla isitshwala', 'Izolo'],
      correct: ['Izolo', 'ngadla isitshwala', 'lo Sipho.', 'Bekumnandi kakhulu.'],
      translation: 'Yesterday I ate isitshwala with Sipho. It was very tasty.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the past-tense form',
      question: "Which of these means 'I drank tea'?",
      options: [
        { text: 'Ngaphuza itiye.', correct: true },
        { text: 'Ngiphuza itiye.', correct: false },
        { text: 'Ngifuna itiye.', correct: false },
      ],
      explanation: "Ngi- (I, present) shifts to Nga- (I, past). Ngiphuza = I drink (now). Ngaphuza = I drank.",
    },
  ],

  rwenDialogue: {
    intro: "You're back home. A friend asks how the trip to Bulawayo went, especially the food.",
    lines: [
      { speaker: 'npc',  target: 'Kunjani ekudleni eBulawayo? Watshani izolo?', native: 'How was the food in Bulawayo? What did you eat yesterday?' },
      { speaker: 'rwen', rwenLine: 'Tell the story. Anchor with izolo. Use ngadla. Name what you ate, who with, and how it tasted. Build it brick by brick.' },
      { speaker: 'user', userChoices: [
        { target: 'Izolo ngadla isitshwala lenyama yenkomo lo MaNdlovu.', native: 'Yesterday I ate isitshwala and beef with MaNdlovu.', correct: true, feedback: 'Beautiful — past tense, two foods, a person. The full picture.' },
        { target: 'Ngidla isitshwala.', native: 'I am eating isitshwala (present).', correct: false, feedback: "Almost — but the question is about yesterday. Shift Ngidla → Ngadla." },
      ] },
      { speaker: 'npc',  target: 'Bekumnandi?', native: 'Was it tasty?' },
      { speaker: 'user', userChoices: [
        { target: 'Yebo, bekumnandi kakhulu!', native: 'Yes, it was very tasty!', correct: true, feedback: 'Anchored with bekumnandi and intensified with kakhulu — the storyteller\'s instinct.' },
      ] },
      { speaker: 'npc',  target: 'Watshoni ngiziphuzayo?', native: 'And what about the drinks?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngaphuza itiye loku amanzi. Akukho umqombothi!', native: 'I drank tea and water. No umqombothi!', correct: true, feedback: "Confident past tense and a callback to umqombothi from lesson 2 — closing the module nicely." },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "What's the isiNdebele word for 'yesterday'?",        correct: ['izolo'] },
      { prompt: "How do you say 'I ate'?",                            correct: ['Ngadla', 'ngadla'] },
      { prompt: "How do you say 'It was tasty'?",                     correct: ['Bekumnandi', 'bekumnandi'] },
    ],
  },

  mission: {
    title: 'Tell the story of one meal',
    task: "Pick a meal from this past week. Out loud, in isiNdebele, tell its story in three sentences: when, what, with whom, how it was. Use 'izolo' if it was yesterday, 'ngadla', and 'bekumnandi'. Don't worry about getting every word right — the goal is to feel yourself moving through past tense in real time.",
    rwenSignoff: "Module four complete. You can sit at a Ndebele table now — order, refuse, accept, host, and tell the story afterwards. The food is the doorway; the people on the other side are the real lesson.",
  },

  phase8: {
    scenario: "You've just returned from a trip to Matabeleland. A friend asks you about the food and the meals you had there. You tell the story of one memorable meal in past tense — when, what you ate, who you were with, how it tasted.",
    rwenRole: "Thandi — a friend who has never been to Matabeleland and is genuinely curious about your trip and the food.",
    successCriteria: "User used 'izolo' or another past-time anchor, used at least two past-tense verbs ('ngadla', 'ngaphuza', or similar), named at least two foods or drinks, and used 'bekumnandi' or a similar evaluation phrase.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
