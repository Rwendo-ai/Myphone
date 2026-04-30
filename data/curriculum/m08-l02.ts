import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-kuuya',
  module: 8,
  lesson: 2,
  title: 'Kuuya — To Come',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The opposite of kuenda (to go) is kuuya (to come). Together they describe all movement. 'Uya' as a command means 'come here' — and it's one of the most heartfelt invitations you can offer someone.",
    culturalNote: "'Uya kuno' (come here) is used warmly to beckon someone — a child, a friend, a relative from afar. When said with the right tone, it carries enormous welcome. 'Come — be with me.'",
  },

  chunks: [
    {
      id: 'ndinouya',
      target: 'Ndinouya',
      native: 'I come / I am coming',
      literal: 'I-come (habitual)',
      emoji: '🚶‍♂️',
      phonetic: 'ndi-no-U-ya',
      audioRef: null,
    },
    {
      id: 'ndauya',
      target: 'Ndauya',
      native: 'I have come / I arrived',
      literal: 'I-came (completed)',
      emoji: '✅',
      phonetic: 'nda-U-ya',
      audioRef: null,
    },
    {
      id: 'uya_kuno',
      target: 'Uya kuno',
      native: 'Come here',
      literal: 'Come here',
      emoji: '👋',
      phonetic: 'U-ya KU-no',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Uya — the welcome command',
    explanation: "'Uya' (come) is both the verb stem and a command. As a command it's soft and welcoming — not harsh. Add 'kuno' (here) to direct it: 'Uya kuno' = come here. Add 'zvino' (now) for urgency: 'Uya zvino' = come now.",
    examples: [
      { target: 'Ndinouya', native: 'I come / I am coming' },
      { target: 'Ndauya', native: 'I have arrived / I came' },
      { target: 'Uya kuno, shamwari', native: 'Come here, friend' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Ndinouya', right: 'I come (habitually)' },
        { left: 'Ndauya', right: 'I have arrived' },
        { left: 'Uya kuno', right: 'Come here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have arrived',
      sentence: 'Nda_____. Ndiri pano zvino.',
      options: ['uya', 'enda', 'taura'],
      correct: 'uya',
      context: "I've arrived. I am here now.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have come / I have arrived',
      correct: ['Ndauya', 'ndauya'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to warmly invite your friend to come over. What do you say?",
      question: 'Warm invitation to come:',
      options: [
        { text: 'Uya kuno, shamwari', correct: true },
        { text: 'Enda kuno', correct: false },
        { text: 'Ndichaenda', correct: false },
      ],
      explanation: "'Uya kuno' = come here. 'Enda kuno' would mean 'go there'. Uya is always welcoming.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Come here, my child'",
      words: ['Uya', 'kuno,', 'mwanangu.'],
      correct: ['Uya', 'kuno,', 'mwanangu.'],
      translation: 'Come here, my child',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Come here',
      correct: ['Uya kuno', 'uya kuno'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen sees you across the market and calls you over.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Hesi! Uya kuno — ndinoda kukuratidza chimwe chinhu!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinouya! Ndichakusvika pakarepo.', native: "I'm coming! I'll reach you right away.", correct: true, feedback: "Responded immediately and confirmed your arrival. Rwen waves you over." },
          { target: 'Ndauya', native: 'I have come', correct: false, feedback: "That's past tense — you haven't arrived yet. Say 'Ndinouya!' — I'm coming!" },
          { target: 'Enda kuno', native: 'Go there', correct: false, feedback: "'Enda kuno' tells someone else to go there. You should say 'Ndinouya!' — I'm coming!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ndauya! The most welcoming words in the language. See you in a moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Come here', correct: ['Uya kuno', 'uya kuno'] },
      { prompt: 'I have arrived', correct: ['Ndauya', 'ndauya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Beckon someone today with 'Uya kuno' — a child, a pet, a friend. Even say it to yourself in the mirror: 'Uya kuno.' Feel the welcome in those two words.",
    rwenSignoff: "Uya kuno — come closer. The language wants you near. Famba zvakanaka.",
  },
};

export default lesson;
