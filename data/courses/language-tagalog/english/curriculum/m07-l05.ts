import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: 'Gusto Ko, Ayaw Ko — Likes and Dislikes',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipinos LOVE talking about food they love. 'Mahilig ako sa adobo' isn't just 'I like adobo' — it's 'I'm devoted to adobo'. Today we learn how to confess our food obsessions.",
    culturalNote: "Saying 'masarap!' (delicious) at someone's home table is non-negotiable. Even if it's just okay, you say masarap. The cook beams. The whole table beams. Refusing food directly with 'ayoko' (don't want) is rude — soften it with 'busog na po ako' (I'm full).",
  },

  chunks: [
    {
      id: 'mahilig_ako_sa',
      target: 'Mahilig ako sa adobo',
      native: 'I love adobo',
      literal: 'Devoted I to adobo',
      emoji: '😍',
      phonetic: 'ma-HI-lig A-ko sa a-DO-bo',
      audioRef: null,
    },
    {
      id: 'ayaw_ko_ng',
      target: 'Ayaw ko ng ampalaya',
      native: "I don't like bitter melon",
      literal: 'Dislike I some bitter-melon',
      emoji: '🥲',
      phonetic: 'A-yaw ko nang am-pa-LA-ya',
      audioRef: null,
    },
    {
      id: 'masarap',
      target: 'Masarap!',
      native: 'Delicious!',
      literal: 'Has-tastiness',
      emoji: '😋',
      phonetic: 'ma-sa-RAP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mahilig sa vs gusto ko ng',
    explanation: "**Gusto ko ng** = I want / I like (mild, neutral). **Mahilig ako sa** = I'm devoted to / I love (strong, lifelong). For dislikes, **ayaw ko ng** is the polite-ish negation — but never use 'ayoko' at a host's table.",
    examples: [
      { target: 'Gusto ko ng pancit', native: 'I want / like pancit' },
      { target: 'Mahilig ako sa pancit', native: 'I love pancit (it\'s my thing)' },
      { target: 'Ayaw ko ng pancit', native: "I don't like pancit" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Mahilig ako sa adobo', right: 'I love adobo' },
        { left: 'Ayaw ko ng ampalaya', right: "I don't like bitter melon" },
        { left: 'Masarap!', right: 'Delicious!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tita asks how the food is. You take a bite. Best one-word reply?",
      sentence: '_____, tita!',
      options: ['Masarap', 'Ayaw', 'Uhaw'],
      correct: 'Masarap',
      context: "It's almost compulsory — say masarap, even if you're being polite.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I love adobo (devoted to it)',
      correct: ['Mahilig ako sa adobo', 'mahilig ako sa adobo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Say you don\'t like bitter melon',
      words: ['ng', 'Ayaw', 'ampalaya', 'ko'],
      correct: ['Ayaw', 'ko', 'ng', 'ampalaya'],
      translation: "I don't like bitter melon",
    },
    {
      type: 'multiple_choice',
      instruction: "You've eaten lechon every Christmas since birth. How do you express this passion?",
      question: 'Choose the strongest, most natural phrase',
      options: [
        { text: 'Mahilig ako sa lechon', correct: true },
        { text: 'Gusto ko ng lechon', correct: false },
        { text: 'Ayaw ko ng lechon', correct: false },
      ],
      explanation: "Mahilig is the deeper love — gusto is just 'I'd like some'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Delicious!',
      correct: ['Masarap', 'masarap', 'Masarap!'],
    },
  ],

  rwenDialogue: {
    intro: "Lola has just placed her famous chicken adobo in front of you. Steam rising. She's watching you take the first bite.",
    lines: [
      {
        speaker: 'npc',
        target: 'Subukan mo, anak.',
        native: 'Try it, child.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Masarap! Mahilig ako sa adobo', native: "Delicious! I love adobo", correct: true, feedback: 'Lola might cry. In a good way.' },
          { target: 'Ayoko', native: "I don't want it", correct: false, feedback: "Never. Not at a Filipino lola's table. Soften everything." },
          { target: 'Bill po', native: 'The bill please', correct: false, feedback: "She made it for free, with love. There's no bill." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, kumain ka pa! May marami pa.',
        native: 'Oh, eat more! There is plenty more.',
      },
      {
        speaker: 'rwen',
        rwenLine: "One word — masarap — and you've made her week.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I love adobo (deeply, devoted) — in Tagalog', correct: ['Mahilig ako sa adobo', 'mahilig ako sa adobo'] },
      { prompt: 'Delicious! (in Tagalog)', correct: ['Masarap', 'Masarap!', 'masarap'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one food you genuinely love. Say 'Mahilig ako sa [food]' out loud. Notice the rush of remembering why you love it.",
    rwenSignoff: "Tomorrow — we cook. Sarap pa rin?",
  },

  phase8: {
    scenario: "Sunday merienda at lola's house. She's laid out adobo, pancit, and ampalaya con carne. She wants to know which is your favourite — and watches your face for the truth as you taste each one.",
    rwenRole: "Lola Conching — grandmother, ~78yo, has cooked for 60 years and reads faces; melts at the word 'masarap', visibly hurt by 'ayoko' but accepts 'busog na po ako'.",
    successCriteria: "User says 'masarap' at least once after tasting, uses 'mahilig ako sa [food]' to name a favourite, and softens any dislike with 'busog na po ako' rather than blunt 'ayoko'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
