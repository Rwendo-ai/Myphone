import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Tito & Tita — Aunts, Uncles & Beyond',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a beautiful Filipino secret: Tito and Tita don't just mean 'uncle' and 'aunt'. They mean every kind older man and woman in your life. Your mum's friend? Tita. The neighbour who watched you grow up? Tita. Your Tatay's old college buddy? Tito. Today the family gets bigger.",
    culturalNote: "This is THE most important Filipino kinship rule. Calling an older non-relative by their first name feels strangely cold. Even at 35, you still call your mum's friend 'Tita Marissa'. Filipinos don't have strangers — they have not-yet-titos and not-yet-titas.",
  },

  chunks: [
    {
      id: 'tito',
      target: 'Tito',
      native: 'Uncle (or any older man)',
      literal: 'Uncle (also honorific)',
      emoji: '🧔',
      phonetic: 'TI-to',
      audioRef: null,
    },
    {
      id: 'tita',
      target: 'Tita',
      native: 'Aunt (or any older woman)',
      literal: 'Aunt (also honorific)',
      emoji: '👩‍🦰',
      phonetic: 'TI-ta',
      audioRef: null,
    },
    {
      id: 'pinsan',
      target: 'Pinsan',
      native: 'Cousin',
      literal: 'Cousin (any gender)',
      emoji: '👫',
      phonetic: 'pin-SAN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tito/Tita extends beyond family',
    explanation: "If someone is roughly your parents' age — friend, neighbour, your boss, even a stranger — they get Tito or Tita. It's warmth, not literalism. Pinsan (cousin) is gender-neutral — you don't need to specify.",
    examples: [
      { target: 'Tito Boy', native: 'Uncle Boy (or older man named Boy)' },
      { target: 'Tita Marissa', native: "Aunt Marissa (or mum's friend Marissa)" },
      { target: 'Pinsan ko siya.', native: "She's my cousin." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog word to its meaning',
      pairs: [
        { left: 'Tito', right: 'Uncle / older man' },
        { left: 'Tita', right: 'Aunt / older woman' },
        { left: 'Pinsan', right: 'Cousin' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your mum's best friend Marissa is at the door. She's not your blood aunt, but she's been around forever.",
      sentence: 'Hi _____ Marissa!',
      options: ['Tita', 'Tito', 'Pinsan'],
      correct: 'Tita',
      context: "She's older than you and feels like family — Tita, every time. Calling her just 'Marissa' would feel cold.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My cousin',
      correct: ['Pinsan ko', 'pinsan ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Uncle Boy is my dad\'s brother"',
      words: ['Tatay', 'Boy', 'Tito', 'kapatid', 'ng', 'ay', 'ko'],
      correct: ['Tito', 'Boy', 'ay', 'kapatid', 'ng', 'Tatay', 'ko'],
      translation: "Uncle Boy is my dad's brother.",
    },
    {
      type: 'multiple_choice',
      instruction: "At a fiesta, you're introduced to a kind man, ~50 years old, your dad's longtime friend Boy. He's not actually your uncle.",
      question: 'How do you address him?',
      options: [
        { text: 'Tito Boy', correct: true },
        { text: 'Boy (just the name)', correct: false },
        { text: 'Lolo Boy', correct: false },
      ],
      explanation: "He's older AND tied to your family — automatic Tito. Filipinos extend the family with these titles; that's the warmth of the culture.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Aunt Marissa',
      correct: ['Tita Marissa', 'tita marissa'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Sunday-lunch fiesta in your Filipino partner's family home. They want to introduce you to everyone.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ito si Boy, matagal nang kaibigan ng Tatay ko. Tapos ito si Marissa, kapitbahay namin.',
        native: "This is Boy, my dad's longtime friend. And this is Marissa, our neighbour.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hello Tito Boy! Hello Tita Marissa!', native: 'Hello Uncle Boy! Hello Aunt Marissa!', correct: true, feedback: 'Perfect — you just made them feel like family. They love you already.' },
          { target: 'Hi Boy. Hi Marissa.', native: 'Hi Boy. Hi Marissa.', correct: false, feedback: 'Too cold for older Filipinos — they expect Tito/Tita. Try again.' },
          { target: 'Hi Pinsan Boy.', native: 'Hi Cousin Boy.', correct: false, feedback: "Pinsan is for same-generation cousins. Boy is your parents' age — he's a Tito." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, marunong! Parang Pinoy ka na.',
        native: "Wow, you know! You're like a Filipino already.",
      },
      {
        speaker: 'rwen',
        rwenLine: "That single word — Tito — just expanded your family by ten people. This is the gift of Filipino kinship: nobody stays a stranger.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Aunt / older woman (in Tagalog)', correct: ['Tita', 'tita'] },
      { prompt: 'Cousin (in Tagalog)', correct: ['Pinsan', 'pinsan'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find one person in your life who would naturally be a Tito or Tita to you — a friend's mum, an older neighbour, your boss. In your head, call them by that title once today. Notice how it shifts the relationship.",
    rwenSignoff: "Hanggang bukas — until tomorrow.",
  },

  phase8: {
    scenario: "You're at a Filipino family fiesta in Quezon City. Your partner's dad introduces you to his old college friend Boy (~55) and to Marissa, the long-time neighbour next door. Neither is actually your blood relative.",
    rwenRole: "Tito Boy — friendly older man, your partner's dad's best friend; he'll ask where you're from, how you met your partner, and silently judge a little if you call him just 'Boy'.",
    successCriteria: "User addresses him as 'Tito Boy' (not just 'Boy') and uses 'Tita Marissa' if/when she's mentioned. User correctly uses pinsan only for same-generation relatives. Bonus: user uses 'po' for respect.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
