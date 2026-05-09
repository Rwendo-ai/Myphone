import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09',
  module: 7,
  lesson: 9,
  title: 'Border and travel — at home and abroad',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Two words separate Zimbabwean travellers from the rest: ezweni — 'in the country' — and ezizweni — 'abroad'. Add the prefix iz- and one country becomes many. Today you cross the Beitbridge border in isiNdebele.",
    culturalNote: "ePlumtree is the western border post (with Botswana); eBeitbridge is the southern border post (with South Africa). Long queues, formal language, and a different attitude towards documents await you. The phrase 'amaphepha ami' — 'my papers' — is one you'll say more than any other.",
  },

  chunks: [
    {
      id: 'ezweni',
      target: 'ezweni',
      native: 'in the country',
      literal: 'in the land/world',
      emoji: '🇿🇼',
      phonetic: 'eh-zweh-nee',
      audioRef: null,
    },
    {
      id: 'ezizweni',
      target: 'ezizweni',
      native: 'abroad / in foreign lands',
      literal: 'in the lands (plural)',
      emoji: '🌍',
      phonetic: 'eh-zee-zweh-nee',
      audioRef: null,
    },
    {
      id: 'umngcele',
      target: 'umngcele',
      native: 'border',
      emoji: '🛂',
      phonetic: 'oom-ngcheh-leh',
      audioRef: null,
    },
    {
      id: 'amaphepha',
      target: 'amaphepha ami',
      native: 'my papers / my documents',
      emoji: '📄',
      phonetic: 'ah-mah-peh-pah ah-mee',
      audioRef: null,
    },
    {
      id: 'ipasipoti',
      target: 'ipasipoti',
      native: 'passport',
      emoji: '🛄',
      phonetic: 'ee-pah-see-poh-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Singular vs plural in country words',
    explanation: "izwe means 'country' or 'land' (singular). The plural is izizwe — 'countries / lands.' Ezweni (in the country) and ezizweni (abroad) come from these. The doubling of 'iz-' marks the plural, and the locative -ni marks 'in / at.' One small prefix change moves you from 'home' to 'abroad.'",
    examples: [
      { target: 'izwe → ezweni', native: 'country → in the country' },
      { target: 'izizwe → ezizweni', native: 'countries → abroad' },
      { target: 'Ngihlala ezweni.', native: 'I live in the country (here).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each border word to its meaning',
      pairs: [
        { left: 'ezweni', right: 'in the country (home)' },
        { left: 'ezizweni', right: 'abroad / in foreign lands' },
        { left: 'umngcele', right: 'border' },
        { left: 'ipasipoti', right: 'passport' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence',
      sentence: 'Ngiya ___ namhla. (I am going abroad today.)',
      options: ['ezizweni', 'ezweni', 'ekhaya'],
      correct: 'ezizweni',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'My papers.',
      correct: ['Amaphepha ami', 'amaphepha ami', 'Amaphepha ami.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Which border post connects Bulawayo to Botswana?",
      options: [
        { text: 'ePlumtree', correct: true },
        { text: 'eBeitbridge', correct: false },
        { text: 'eVictoria Falls', correct: false },
      ],
      explanation: "Plumtree is the western post (Botswana). Beitbridge is the southern post (South Africa). Victoria Falls is also a border with Zambia, but the formal post there is the Falls bridge.",
    },
  ],

  rwenDialogue: {
    intro: "You're at Beitbridge border post, southern Zimbabwe. The immigration officer waves you to her counter.",
    lines: [
      { speaker: 'npc',  target: 'Sawubona. Amaphepha akho, ngicela.', native: 'Hello. Your papers, please.' },
      { speaker: 'rwen', rwenLine: "She wants your passport. Hand it over and confirm." },
      { speaker: 'user', userChoices: [
        { target: 'Yebo, lapha — ipasipoti yami.', native: 'Yes, here — my passport.', correct: true, feedback: "Direct, polite, and you named the document. She'll process you fast." },
        { target: 'Ngilahlekile.', native: 'I am lost.', correct: false, feedback: "You're not lost — you're at a border counter. Save that line for the streets." },
        { target: 'Malini?', native: 'How much?', correct: false, feedback: "She didn't ask for money — she asked for papers." },
      ]},
      { speaker: 'npc',  target: 'Uya ngaphi ezizweni?', native: 'Where are you going abroad?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngiya eGoli, ezweni laseSouth Africa.', native: 'I am going to Johannesburg, in South Africa.', correct: true, feedback: "Goli is the Ndebele/Zulu name for Johannesburg. You sound local." },
        { target: 'Ezizweni.', native: 'Abroad.', correct: false, feedback: "She wants more detail — which country, which city." },
      ]},
      { speaker: 'npc',  target: 'Hamba kuhle. Ungaphinda namuhla?', native: 'Go well. Are you returning today?' },
    ],
  },

  activeRecall: {
    instruction: 'Recall the border words.',
    prompts: [
      { prompt: 'How do you say "in the country (home)"?', correct: ['ezweni'] },
      { prompt: 'How do you say "abroad"?', correct: ['ezizweni'] },
      { prompt: 'How do you say "my papers"?', correct: ['amaphepha ami', 'Amaphepha ami', 'Amaphepha ami.'] },
    ],
  },

  mission: {
    title: 'Pack your border vocabulary',
    task: "Stand at your front door with your real passport (or any ID). Run the border script: 'Yebo, lapha — ipasipoti yami. Ngiya ezizweni.' Practise saying it without looking at notes. The officer's job is to clear you fast — your job is to be ready.",
    rwenSignoff: "A traveller who knows their border phrases is a traveller the queue forgets.",
  },

  phase8: {
    scenario: "You're at the Beitbridge border crossing into South Africa. The officer asks for your papers, your destination, and how long you'll be away. Handle the whole exchange in isiNdebele.",
    rwenRole: "Beitbridge immigration officer, 30s, formal but not unfriendly, sticks to standard questions",
    successCriteria: "User produced their papers, named a destination using ezweni / ezizweni or a place name with e-, and answered one follow-up.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
