import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-filipino-food',
  module: 7,
  lesson: 8,
  title: 'Mga Ulam Pinoy — Filipino Dishes',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today we name the heavy hitters. Adobo. Sinigang. Lechon. These aren't just dishes — they're identity. Every Filipino has a 'best adobo' in their family, and they will defend it.",
    culturalNote: "Adobo (chicken or pork in soy + vinegar + garlic + bay leaf) is the unofficial national dish — every region has its version. Sinigang is sour soup, often with tamarind, comfort-food category. Lechon — a whole pig roasted on bamboo over coals — is the showpiece of every fiesta. Skipping the lechon is unthinkable.",
  },

  chunks: [
    {
      id: 'adobo',
      target: 'Adobo',
      native: 'Adobo (meat braised in soy + vinegar)',
      literal: 'Marinated',
      emoji: '🍖',
      phonetic: 'a-DO-bo',
      audioRef: null,
    },
    {
      id: 'sinigang',
      target: 'Sinigang',
      native: 'Sour tamarind soup',
      literal: 'Soured',
      emoji: '🍲',
      phonetic: 'si-ni-GANG',
      audioRef: null,
    },
    {
      id: 'lechon',
      target: 'Lechon',
      native: 'Whole roast pig (fiesta centrepiece)',
      literal: 'Suckling',
      emoji: '🐷',
      phonetic: 'le-CHON',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming Filipino dishes',
    explanation: "When naming a Filipino ulam, you can simply state it: 'adobo'. To say it's your favourite: 'paborito kong ulam ang adobo' (my favourite ulam is adobo). The structure: paborito kong ulam ang [dish].",
    examples: [
      { target: 'Paborito kong ulam ang adobo', native: 'My favourite dish is adobo' },
      { target: 'May sinigang tayo', native: 'We have sinigang' },
      { target: 'May lechon sa fiesta', native: "There's lechon at the fiesta" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the dish to its description',
      pairs: [
        { left: 'Adobo', right: 'Meat braised in soy + vinegar' },
        { left: 'Sinigang', right: 'Sour tamarind soup' },
        { left: 'Lechon', right: 'Whole roast pig' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's a barangay fiesta. The whole roast pig has just arrived on a bamboo pole. What is it?",
      sentence: 'Ang _____ ay nasa mesa na!',
      options: ['lechon', 'adobo', 'sinigang'],
      correct: 'lechon',
      context: 'Lechon is the whole roast pig — fiesta centrepiece.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (the dish)',
      prompt: 'Sour tamarind soup (Filipino comfort dish)',
      correct: ['Sinigang', 'sinigang'],
    },
    {
      type: 'build_sentence',
      instruction: 'Say your favourite dish is adobo',
      words: ['ulam', 'ang', 'kong', 'Paborito', 'adobo'],
      correct: ['Paborito', 'kong', 'ulam', 'ang', 'adobo'],
      translation: 'My favourite dish is adobo',
    },
    {
      type: 'multiple_choice',
      instruction: "Cold rainy day in Baguio. You want something warm and sour to eat with rice.",
      question: 'Which dish?',
      options: [
        { text: 'Sinigang', correct: true },
        { text: 'Lechon', correct: false },
        { text: 'Halo-halo', correct: false },
      ],
      explanation: "Sinigang — sour, hot, soup-y. Comfort food on a wet day.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Whole roast pig (the fiesta dish)',
      correct: ['Lechon', 'lechon'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a barangay fiesta in Cavite. Tito Boy is carving the lechon. He looks up and asks the question every Filipino asks every foreigner.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong paborito mong ulam pinoy?',
        native: "What's your favourite Filipino dish?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paborito kong ulam ang adobo', native: 'My favourite is adobo', correct: true, feedback: 'A classic answer — Tito Boy approves.' },
          { target: 'Bill po', native: 'The bill, please', correct: false, feedback: "It's a fiesta — there's no bill, just lechon." },
          { target: 'Magluto tayo', native: "Let's cook", correct: false, feedback: "Lechon's already done! Just answer the question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, mahilig din ako diyan! Subukan mo ang sinigang ko.',
        native: "Oh, I love that too! Try my sinigang.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You named a dish — and instantly you're family at this fiesta.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The Filipino soy-and-vinegar braised dish', correct: ['Adobo', 'adobo'] },
      { prompt: 'The Filipino sour tamarind soup', correct: ['Sinigang', 'sinigang'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick the Filipino dish that calls to you most. Tonight, look up one recipe — adobo, sinigang, or lechon. Just read it. Imagine cooking it.",
    rwenSignoff: "Tomorrow — hosting. Halika, kain tayo.",
  },

  phase8: {
    scenario: "You're at a barangay fiesta in Cavite. The lechon has just been carved, sinigang is steaming, adobo is in a pot in the corner. Tito Boy is asking every guest what their favourite Filipino dish is — it's the icebreaker question of fiesta culture.",
    rwenRole: "Tito Boy — uncle and the barangay's lechon master, ~62yo, hugely warm, will instantly offer you a piece of whatever dish you name; loves debating which province makes the best version.",
    successCriteria: "User names one Filipino dish (adobo / sinigang / lechon / pancit / kare-kare) using 'paborito kong ulam ang [dish]' or similar, and reacts warmly when tito offers them a serving.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
