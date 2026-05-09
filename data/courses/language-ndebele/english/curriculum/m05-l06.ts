import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06',
  module: 5,
  lesson: 6,
  title: 'uMakoti, izihlobo — In-Laws and Relatives',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "When marriage joins two families in Ndebele culture, a whole new vocabulary opens. uMakoti — the bride who has come into her husband's family. uMkhwenyana — the son-in-law. izihlobo — the wider net of relatives bound by blood, marriage, or shared ancestry. Marriage doesn't add a person; it joins two clans.",
    culturalNote: "uMakoti is more than 'daughter-in-law' in English. She is a young woman taken into a new household, traditionally with specific duties — rising early, greeting elders first, wearing a head covering in some homes. The culture is changing, especially in cities, but the word still carries the old expectations. Speak it with respect; many makoti you meet will have stories.",
  },

  chunks: [
    {
      id: 'umakoti',
      target: 'uMakoti',
      native: 'Daughter-in-law / new bride',
      literal: 'A woman who has joined her husband\'s family. Carries traditional duties and high social visibility.',
      emoji: '👰🏾',
      phonetic: 'oo-mah-KOH-tee',
      audioRef: null,
    },
    {
      id: 'umkhwenyana',
      target: 'uMkhwenyana',
      native: 'Son-in-law',
      literal: 'A man married into the wife\'s family. Treated formally by his wife\'s parents and uncles.',
      emoji: '🤵🏾',
      phonetic: 'oom-kweh-NYAH-nah',
      audioRef: null,
    },
    {
      id: 'izihlobo',
      target: 'izihlobo',
      native: 'Relatives (the wider family network)',
      literal: 'izi- (plural prefix, things) + hlobo (kind/sort). Literally "the kinds" — those who share kinship with you.',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ee-zee-HLOH-boh',
      audioRef: null,
    },
    {
      id: 'umkhwekazi',
      target: 'uMkhwekazi',
      native: 'Mother-in-law',
      literal: '-kazi feminine. Your spouse\'s mother — a relationship traditionally treated with formal respect, even avoidance.',
      emoji: '👵🏾',
      phonetic: 'oom-kweh-KAH-zee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'In-laws and the wider family circle',
    explanation: "Marriage produces an entire vocabulary set: uMakoti (daughter-in-law), uMkhwenyana (son-in-law), uMkhwekazi (mother-in-law), uMkhweni (father-in-law). The umbrella term izihlobo covers everyone you're related to — by blood, marriage, or clan. When a Ndebele speaker says 'all my izihlobo are coming', they mean the whole web.",
    examples: [
      { target: 'uMakoti omtsha', native: 'The new daughter-in-law / new bride' },
      { target: 'izihlobo zami', native: 'My relatives' },
      { target: 'uMkhwenyana wakhe', native: 'Her son-in-law' },
      { target: 'uMkhwekazi wami', native: 'My mother-in-law' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its meaning',
      pairs: [
        { left: 'uMakoti', right: 'Daughter-in-law / new bride' },
        { left: 'uMkhwenyana', right: 'Son-in-law' },
        { left: 'izihlobo', right: 'Relatives (wider family)' },
        { left: 'uMkhwekazi', right: 'Mother-in-law' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A new bride has just joined the family. The aunts are introducing her.',
      sentence: 'Lo ngu_____ wethu omtsha.',
      options: ['Makoti', 'Khulu', 'Babakazi'],
      correct: 'Makoti',
      context: 'New bride / daughter-in-law = uMakoti. The word marks her arrival into the husband\'s family.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'My relatives (the wider family)',
      correct: ['izihlobo zami', 'Izihlobo zami'],
    },
    {
      type: 'multiple_choice',
      instruction: "Pick the correct relationship",
      question: "Who is uMkhwenyana?",
      options: [
        { text: 'A man married into his wife\'s family — son-in-law', correct: true },
        { text: 'A man\'s younger brother', correct: false },
        { text: 'A man\'s grandfather', correct: false },
      ],
      explanation: "uMkhwenyana = son-in-law. He is treated with formal respect by his wife's parents and uncles — the relationship is mutual, formal, and slow-warming.",
    },
  ],

  rwenDialogue: {
    intro: "At a homestead in rural Matabeleland, the family is preparing for a feast. Rwen points out the new bride at the centre of the activity.",
    lines: [
      { speaker: 'rwen', rwenLine: "She married into our family three months ago. She is uMakoti omtsha — the new bride. Notice how the aunts circle around her — she is being taught the household." },
      { speaker: 'npc', target: 'uMakoti wethu uyaphekisisa.', native: 'Our new bride cooks beautifully.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'uMakoti wenu uyahlonipheka. Lichithekile.', native: 'Your daughter-in-law is respectful. You are blessed.', correct: true, feedback: "You complimented uMakoti directly and acknowledged the family. The aunts smile — you understand the respect rituals." },
          { target: 'She seems nice.', native: 'She seems nice (English).', correct: false, feedback: "English flattens the cultural moment. Use the kinship term: 'uMakoti wenu uyahlonipheka' (Your daughter-in-law is respectful)." },
          { target: 'Yini uMakoti?', native: 'What is a daughter-in-law?', correct: false, feedback: "Asking the meaning here breaks the warmth. You already know — compliment her with the title: 'uMakoti wenu...'" },
        ],
      },
      { speaker: 'rwen', rwenLine: "izihlobo — relatives. uMakoti is now izihlobo zethu. The vocabulary just grew by one whole household.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Daughter-in-law / new bride', correct: ['uMakoti', 'umakoti', 'Makoti'] },
      { prompt: 'Son-in-law', correct: ['uMkhwenyana', 'umkhwenyana', 'Mkhwenyana'] },
      { prompt: 'Relatives (wider family)', correct: ['izihlobo', 'Izihlobo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think about the in-laws in your own family — your siblings' spouses, your parents' in-laws. Label each in isiNdebele: uMakoti, uMkhwenyana, uMkhwekazi. If your family is small, think of the in-laws of close friends. The vocabulary stretches naturally to chosen family.",
    rwenSignoff: "Marriage joins two clans, not just two people. Tomorrow we put the whole circle together — talking about your family in full.",
  },

  phase8: {
    scenario: "You're at a Bulawayo wedding reception. The new uMakoti is being introduced to extended family. You're seated with the bride's aunties and you need to compliment uMakoti, ask after the family's izihlobo, and use kinship vocabulary correctly throughout.",
    rwenRole: "Rwen plays the bride's aunt — middle-aged, watchful, the kind of relative who notices whether outsiders use kinship terms with respect. She'll prompt you naturally throughout the conversation.",
    successCriteria: "User refers to the bride as uMakoti (not just 'bride' or 'she'), uses izihlobo when discussing the family network, and acknowledges the marriage in cultural terms — at least 3 kinship terms used correctly across the chat.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
