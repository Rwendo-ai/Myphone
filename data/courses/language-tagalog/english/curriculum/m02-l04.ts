import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-yes-no',
  module: 2,
  lesson: 4,
  title: 'Oo & Hindi — Yes & No',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two tiny words run the whole country: 'oo' (yes) and 'hindi' (no). But there's a hidden layer — say 'opo' to anyone older and you become the polite one. Skip it and you sound like a kid talking back.",
    culturalNote: "Filipinos rarely say a flat 'no'. Even 'hindi po' is softened. Often they hedge: 'medyo hindi' (sort of no), 'siguro' (maybe), or just look away. If someone hesitates, they're often saying no without saying no — read the pause.",
  },

  chunks: [
    {
      id: 'oo',
      target: 'Oo',
      native: 'Yes (casual)',
      literal: 'Yes',
      emoji: 'NOD',
      phonetic: 'O-oh',
      audioRef: null,
    },
    {
      id: 'opo',
      target: 'Opo',
      native: 'Yes (respectful)',
      literal: 'Yes + respect',
      emoji: 'BOW',
      phonetic: 'O-poh',
      audioRef: null,
    },
    {
      id: 'hindi',
      target: 'Hindi (po)',
      native: 'No (casual / respectful)',
      literal: 'No (+ respect)',
      emoji: 'SHAKE',
      phonetic: 'hin-DEE (POH)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Casual vs respectful: -po',
    explanation: "Same word, two registers. With friends and kids: 'oo' / 'hindi'. With anyone older, a stranger, or someone in authority: 'opo' / 'hindi po'. There's no neutral middle — pick a side. When in doubt with adults, go respectful.",
    examples: [
      { target: 'Oo, pre', native: 'Yes, bro (friends)' },
      { target: 'Opo, lola', native: 'Yes, grandma (respectful)' },
      { target: 'Hindi po, salamat', native: 'No (sir/ma\'am), thank you' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the word to who you would say it to',
      pairs: [
        { left: 'Oo', right: 'Yes (to a friend)' },
        { left: 'Opo', right: 'Yes (to your tita)' },
        { left: 'Hindi po', right: 'No (to a stranger)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your lola asks if you ate. You answer respectfully.',
      sentence: '_____, lola.',
      options: ['Opo', 'Oo', 'Hindi'],
      correct: 'Opo',
      context: "'Lola' (grandma) automatically gets the 'po' form. 'Oo' alone would sound rude.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'No (to an older stranger)',
      correct: ['Hindi po', 'hindi po'],
    },
    {
      type: 'build_sentence',
      instruction: "Politely decline a vendor: 'No (sir), thank you'",
      words: ['salamat', 'po,', 'Hindi'],
      correct: ['Hindi', 'po,', 'salamat'],
      translation: "No (sir/ma'am), thank you",
    },
    {
      type: 'multiple_choice',
      instruction: "Your barkada (friend group) asks if you're coming. What's the natural reply?",
      question: 'Which sounds right with friends?',
      options: [
        { text: 'Oo', correct: true },
        { text: 'Opo', correct: false },
        { text: 'Hindi po', correct: false },
      ],
      explanation: "'Opo' to your barkada sounds like you're being weirdly formal — almost sarcastic. Friends get 'oo'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog (respectful)',
      prompt: 'Yes (to your tita)',
      correct: ['Opo', 'opo'],
    },
  ],

  rwenDialogue: {
    intro: "Your friend's lola welcomes you into the house. She asks if you've already eaten dinner. The honest answer is yes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kumain ka na ba, anak?',
        native: 'Have you eaten yet, dear?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Opo, lola, salamat po', native: 'Yes (ma\'am), grandma, thank you', correct: true, feedback: "Three respect markers stacked — 'opo', 'lola', 'po'. She'll love you." },
          { target: 'Oo', native: 'Yes', correct: false, feedback: "She's a lola — 'oo' alone sounds like you're talking to a classmate." },
          { target: 'Hindi po', native: 'No (ma\'am)', correct: false, feedback: 'You said you ate — this contradicts.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti naman, anak. Maupo ka',
        native: 'Good, dear. Have a seat',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'anak' — child? You earned it with one syllable: the 'p' in 'opo'. That's tsika in Tagalog form.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Yes (respectful, to an elder)',
        correct: ['Opo', 'opo'],
      },
      {
        prompt: 'No (respectful, to a stranger)',
        correct: ['Hindi po', 'hindi po'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice the oo/opo split today. Anytime you say 'yes' in English, ask yourself: would this person get 'oo' or 'opo' in Tagalog? Train the instinct, not just the vocab.",
    rwenSignoff: "Salamat sa effort — thanks for trying. Bukas ulit.",
  },

  phase8: {
    scenario: "You're at your friend's family dinner in Makati. His lola — visiting from Tagaytay — keeps asking you questions: did you eat, do you like adobo, will you have more rice. Each one is a yes-or-no chance to get the register right.",
    rwenRole: "Lola Pacita — friend's grandmother, mid-70s, sweet but very old-school; notices every missing 'po' but never corrects out loud — she just gets quieter.",
    successCriteria: "User uses 'opo' / 'hindi po' (NOT bare 'oo' / 'hindi') for every answer to Lola Pacita. At least 3 yes-or-no exchanges, all respectful. One slip with 'oo' and Rwen should flag that her warmth visibly cooled.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
