import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Un à Dix — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Numbers are the bones of every real conversation — buying a baguette, telling someone your age, catching the 8h12 train. Today we lay down the first ten. Sounds easy? There's a tiny gender twist hiding in 'un' that even three-year-old French kids master. We'll meet it.",
    culturalNote: "French numbers from 1 to 10 are stable and friendly — none of the chaos of 70s and 80s yet (that's tomorrow). The only quirk: the number 'one' changes shape depending on what you're counting. 'Un' for masculine things, 'une' for feminine. Numbers from 2 onward don't care about gender — they stay the same.",
  },

  chunks: [
    {
      id: 'un_deux_trois',
      target: 'un, deux, trois',
      native: 'one, two, three',
      literal: 'one, two, three',
      emoji: '1️⃣',
      phonetic: 'uhn, duh, twah',
      audioRef: null,
    },
    {
      id: 'quatre_cinq_six',
      target: 'quatre, cinq, six',
      native: 'four, five, six',
      literal: 'four, five, six',
      emoji: '5️⃣',
      phonetic: 'KAT-ruh, sank, sees',
      audioRef: null,
    },
    {
      id: 'sept_huit_neuf_dix',
      target: 'sept, huit, neuf, dix',
      native: 'seven, eight, nine, ten',
      literal: 'seven, eight, nine, ten',
      emoji: '🔟',
      phonetic: 'set, weet, nuhf, deess',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Un / Une — the only number with a gender',
    explanation: "From 'deux' onwards, numbers don't change. But 'un' (one) splits into 'un' for masculine nouns and 'une' for feminine ones. So 'one croissant' (m.) is 'un croissant', but 'one baguette' (f.) is 'une baguette'. Same number — different word.",
    examples: [
      { target: 'un café', native: 'one coffee (m.)' },
      { target: 'une bière', native: 'one beer (f.)' },
      { target: 'deux cafés, deux bières', native: 'two coffees, two beers (no change)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French number to its English equivalent',
      pairs: [
        { left: 'trois', right: 'three' },
        { left: 'sept', right: 'seven' },
        { left: 'dix', right: 'ten' },
        { left: 'cinq', right: 'five' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You order a beer (la bière is feminine). Complete: '___ bière, s'il vous plaît.'",
      sentence: '_____ bière, s\'il vous plaît.',
      options: ['Un', 'Une', 'Deux'],
      correct: 'Une',
      context: "'Bière' is feminine, so 'one' becomes 'une'.",
    },
    {
      type: 'translate',
      instruction: 'Type the French number',
      prompt: 'eight',
      correct: ['huit', 'Huit'],
    },
    {
      type: 'build_sentence',
      instruction: "Order one coffee (le café — masculine). Drag the words.",
      words: ['un', 'café', 's\'il vous plaît'],
      correct: ['un', 'café', 's\'il vous plaît'],
      translation: 'One coffee, please.',
    },
    {
      type: 'multiple_choice',
      instruction: "You point at a baguette (feminine) and want one. What do you say?",
      question: 'Choose the right form',
      options: [
        { text: 'Une baguette, s\'il vous plaît', correct: true },
        { text: 'Un baguette, s\'il vous plaît', correct: false },
        { text: 'Deux baguette, s\'il vous plaît', correct: false },
      ],
      explanation: "'Baguette' is feminine — so 'one' is 'une', not 'un'.",
    },
    {
      type: 'translate',
      instruction: 'Type the French numbers',
      prompt: 'four, five, six',
      correct: ['quatre, cinq, six', 'quatre cinq six'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small Parisian café terrace. The serveur arrives and asks how many of you there are. Two friends are with you — three of you total.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour! Vous êtes combien?',
        native: 'Hello! How many of you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Trois, s\'il vous plaît', native: 'Three, please', correct: true, feedback: 'Perfect — clean and confident.' },
          { target: 'Troi, s\'il vous plaît', native: '(misspelt)', correct: false, feedback: "Spelling: it's t-r-o-i-s. The 's' is silent but written." },
          { target: 'Une, s\'il vous plaît', native: 'One, please', correct: false, feedback: "That'd mean just you — but you're three." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien, suivez-moi.',
        native: 'Very good, follow me.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Numbers in your mouth already opening doors. Three syllables and you've got a table.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'one (with a feminine noun like "bière")', correct: ['une', 'Une'] },
      { prompt: 'seven (in French)', correct: ['sept', 'Sept'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from un to dix out loud, twice. Once fast, once slow. Let your tongue meet 'quatre' and 'neuf' — they're the trickiest. Bonus: count something real (eggs, stairs, your fingers).",
    rwenSignoff: "À demain — tomorrow we tackle the wild teens and the legendary 70/80/90.",
  },

  phase8: {
    scenario: "You're ordering at a busy Parisian café. The serveur asks how many of you there are, then takes your order. You want one coffee (un café — masculine) and one beer (une bière — feminine) for your friend.",
    rwenRole: "Hugo — a brisk but friendly Parisian serveur in his 30s, white apron, no time for hesitation but warm to those who try. He'll repeat back orders to confirm.",
    successCriteria: "User says 'trois' (or correct number) for table size, then orders 'un café' AND 'une bière' — getting BOTH gender forms right. If they say 'un bière' or 'une café', Hugo gently corrects.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
