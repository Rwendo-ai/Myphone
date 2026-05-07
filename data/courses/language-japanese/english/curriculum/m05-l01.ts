import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-haha-okaasan',
  module: 5,
  lesson: 1,
  title: 'Haha vs Okaasan — Talking About Mother',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Japanese splits family vocabulary in two: humble in-group words for your OWN family, and respectful out-group words for someone ELSE's. Your mother is 母 (haha) — but you call your friend's mother お母さん (okaasan). Get this wrong and you sound like you're showing off, or being rude.",
    culturalNote: "This is uchi/soto — inside/outside — applied to family. When you talk ABOUT your own mother to anyone outside the family, you use the humble haha. When you talk TO her, or about anyone else's mother, you use okaasan. The honorific お- and the suffix -さん do the lifting.",
  },

  chunks: [
    {
      id: 'haha',
      target: '母 (はは)',
      native: 'My (own) mother — humble, used to outsiders',
      literal: 'haha — mother (in-group, no honorifics)',
      emoji: '👩',
      phonetic: 'HA-ha',
      audioRef: null,
    },
    {
      id: 'okaasan',
      target: 'お母さん (おかあさん)',
      native: "Mother (respectful) — someone else's mother, or addressing your own",
      literal: 'o-kaa-san — honorific + mother + respectful suffix',
      emoji: '👩‍🦰',
      phonetic: 'oh-KAH-san',
      audioRef: null,
    },
    {
      id: 'haha_wa',
      target: '母は元気です',
      native: 'My mother is well',
      literal: 'haha wa genki desu — mother (topic) well is',
      emoji: '🌸',
      phonetic: 'HA-ha wa GEN-ki des',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'In-group (humble) vs out-group (respectful) family terms',
    explanation: "Talking ABOUT your own family to outsiders → use the humble bare form (haha, chichi). Talking about someone else's family, or addressing your own family directly → use the respectful お-...-さん form (okaasan, otousan). The respectful form sounds boastful when applied to your own kin in front of strangers.",
    examples: [
      { target: '母は先生です', native: 'My mother is a teacher (humble — talking to outsider)' },
      { target: 'お母さんはお元気ですか', native: "How is your mother? (respectful — asking about someone else's)" },
      { target: 'お母さん、行ってきます', native: 'Mum, I\'m off! (addressing your own mother directly)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese to its meaning',
      pairs: [
        { left: '母 (haha)', right: 'My own mother (humble)' },
        { left: 'お母さん (okaasan)', right: "Someone else's mother (respectful)" },
        { left: '元気です', right: 'Is well' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at work telling a colleague about your own mother. Which form?",
      sentence: '_____ は元気です。',
      options: ['母', 'お母さん', 'お母様'],
      correct: '母',
      context: "Your own mother, mentioned to an outsider — use the humble haha.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — your friend asks about YOUR mother. What word do they use for "mother"?',
      prompt: "Mother (the word your friend uses when asking about yours)",
      correct: ['okaasan', 'Okaasan', 'okāsan', 'お母さん'],
    },
    {
      type: 'multiple_choice',
      instruction: "A Japanese colleague asks 'お母さんはお元気ですか？' (How is your mother?). How do you reply about your own mother?",
      question: 'Correct reply about your own mother:',
      options: [
        { text: 'はい、母は元気です (Yes, my mother is well — humble)', correct: true },
        { text: 'はい、お母さんは元気です (Yes, OkaaSAN is well — sounds boastful about your own)', correct: false },
        { text: 'はい、母さんは元気です (mixed register — odd)', correct: false },
      ],
      explanation: 'Switch to the humble haha when you talk about your OWN mother, even though they used okaasan when asking about her. The asymmetry is the point — they elevate yours, you stay humble about her.',
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'My mother is well' (talking to a colleague)",
      words: ['元気', '母', 'は', 'です。'],
      correct: ['母', 'は', '元気', 'です。'],
      translation: 'My mother is well',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — talking ABOUT your own mother to your manager',
      prompt: 'My mother (humble form)',
      correct: ['haha', 'Haha'],
    },
  ],

  rwenDialogue: {
    intro: "Saturday lunch at a friend's apartment in Kichijoji. The friend's mother — who you're meeting for the first time — has just set down a tray of tea. Your friend turns and says...",
    lines: [
      {
        speaker: 'npc',
        target: 'お母さん、こちらは私の友達です。',
        native: "Mum, this is my friend. (the friend speaks to her own mother)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'はじめまして。お母さん、よろしくお願いします。', native: "Nice to meet you. (calling her okaasan — respectful)", correct: true, feedback: 'Right register — she is your friend\'s mother, so okaasan. The honorific お- + さん lifts her properly.' },
          { target: 'はじめまして。母、よろしくお願いします。', native: 'Nice to meet you. (calling her haha — wrong, that\'s for your OWN mother)', correct: false, feedback: 'Haha is only for your OWN mother when speaking about her to outsiders. For someone else\'s mother — okaasan, always.' },
          { target: 'はじめまして。', native: 'Nice to meet you. (no address — safe but cold)', correct: false, feedback: 'Safe but bland. Acknowledging her as okaasan shows you understand the relationship.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You picked the respectful form for someone else's mother — okaasan. The friend's mother registered it: a foreigner who knows the difference between haha and okaasan is a foreigner who's actually paying attention.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Your own mother (humble — to an outsider)', correct: ['haha', 'Haha', '母'] },
      { prompt: "Someone else's mother (respectful)", correct: ['okaasan', 'Okaasan', 'okāsan', 'お母さん'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture introducing your mother to a Japanese colleague. Practise saying 'haha wa genki desu' — my mother is well — out loud. Then picture asking about THEIR mother: 'okaasan wa ogenki desu ka?'. Feel the asymmetry.",
    rwenSignoff: "Uchi (inside) is humble. Soto (outside) gets the honorifics. Mata ashita.",
  },

  phase8: {
    scenario: "It's a casual Saturday lunch at a colleague's apartment in Setagaya. Their mother — visiting from Osaka — joins you at the low table. Your colleague asks how your own mother is doing back home. You need to navigate two switches in the same conversation: respectful okaasan when you address THEIR mother, humble haha when you answer about YOUR mother.",
    rwenRole: "Sato-san's mother — ~70, polite, observant; she's heard plenty of foreigners stumble between haha and okaasan and she's quietly listening for whether you'll get it right.",
    successCriteria: "User uses 'okaasan' (or 'お母さん') when addressing or referring to the colleague's mother present in the room, and switches to 'haha' (or '母') when answering about their own mother — does NOT call their own mother 'okaasan' to outsiders, and does NOT call the colleague's mother 'haha'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
