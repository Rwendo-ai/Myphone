import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-pati-patni',
  module: 5,
  lesson: 6,
  title: 'Pati & Patnī — Husband, Wife & Spouse',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Marriage in India is two families joining, not just two people. The vocabulary reflects that. 'Pati' is husband, 'Patnī' is wife — formal Hindi. But many people just say 'mere husband' or 'merī wife' in everyday English-Hindi mixing. Today we lock in the formal Hindi too.",
    culturalNote: "In a traditional Hindu wedding ceremony — the saat phere — the bride and groom take seven steps around a fire, each step a vow. From that moment, the language for them changes. He becomes pati; she becomes patnī. The words carry the weight of the ceremony.",
  },

  chunks: [
    {
      id: 'pati',
      target: 'पति (Pati)',
      native: 'Husband',
      literal: 'Pati — Sanskrit-rooted, the formal word for husband',
      emoji: '🤵',
      phonetic: 'PA-ti',
      audioRef: null,
    },
    {
      id: 'patni',
      target: 'पत्नी (Patnī)',
      native: 'Wife',
      literal: 'Patnī — feminine of pati',
      emoji: '👰',
      phonetic: 'PAT-nee',
      audioRef: null,
    },
    {
      id: 'shaadi',
      target: 'शादी (Shādī)',
      native: 'Wedding / marriage',
      literal: 'Shādī — the wedding event AND the institution',
      emoji: '💒',
      phonetic: 'SHAA-dee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Talking about marriage in Hindi",
    explanation: "Mere pati = my husband. Merī patnī = my wife. Use 'merā/merī' (my, masculine/feminine) to match. Note: in casual speech, 'pati' and 'patnī' get replaced with English 'husband/wife' constantly. Knowing the formal words is key for ceremonies, official conversations, and respectful introductions.",
    examples: [
      { target: 'Mere pati', native: 'My husband' },
      { target: 'Merī patnī', native: 'My wife' },
      { target: 'Hamārī shādī huī thī Diwali pe.', native: 'Our wedding was on Diwali.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the marriage vocabulary',
      pairs: [
        { left: 'Pati', right: 'Husband' },
        { left: 'Patnī', right: 'Wife' },
        { left: 'Shādī', right: 'Wedding / marriage' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A married woman introduces the man beside her',
      sentence: 'Yeh mere _____ hain.',
      options: ['pati', 'patnī', 'bhāī'],
      correct: 'pati',
      context: 'She is introducing her husband — pati.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'My wife',
      correct: ['Merī patnī', 'Meri patni', 'meri patni'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You ask Rwen about his sister Anjali. He says her wedding is next month. What word does he use?',
      question: 'Wedding in Hindi:',
      options: [
        { text: 'Shādī', correct: true },
        { text: 'Patnī', correct: false },
        { text: 'Buā', correct: false },
      ],
      explanation: "Shādī = wedding/marriage. Patnī = wife. Buā = paternal aunt — totally different topic.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My husband works in Delhi"',
      words: ['kaam', 'mein', 'Delhi', 'karte', 'Mere', 'pati', 'hain.'],
      correct: ['Mere', 'pati', 'Delhi', 'mein', 'kaam', 'karte', 'hain.'],
      translation: 'My husband works in Delhi.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Wedding / marriage',
      correct: ['Shādī', 'Shadi', 'shadi'],
    },
  ],

  rwenDialogue: {
    intro: "At the Diwali gathering, an older woman points at a man across the room and asks who he is.",
    lines: [
      {
        speaker: 'npc',
        target: 'Yeh kaun hain?',
        native: 'Who is this?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeh meri Didī ke pati hain.', native: 'This is my older sister\'s husband.', correct: true, feedback: "Clean. 'Didī ke pati' — older sister's husband. Hindi-precise relationship label." },
          { target: 'Yeh meri Didī kā husband hai.', native: 'This is my older sister\'s husband (English mix).', correct: false, feedback: "Indian-English mixing is real, but in formal Hindi the word is 'pati'. Try 'Didī ke pati hain'." },
          { target: 'Yeh patnī hai.', native: 'This is wife.', correct: false, feedback: "Patnī = wife — and you're pointing at a man. The word for husband is pati." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tumne sahī jawāb diyā. Yahān 'pati' shabd istemāl karnā formal aur sammān-bharā hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Husband', correct: ['Pati', 'pati'] },
      { prompt: 'Wife', correct: ['Patnī', 'Patni', 'patni'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine introducing a married couple in Hindi: 'Yeh mere bhāī hain, aur yeh unkī patnī hain' (This is my brother, and this is his wife). The structure 'X kī patnī / X ke pati' is what you'll use at every Indian wedding you ever attend.",
    rwenSignoff: "Pati, patnī, shādī — teen shabd, ek pūrī parivāric duniyā. Phir milenge.",
  },

  phase8: {
    scenario: "It's the engagement function (sagāī) for Rwen's older sister Anjali. Anjali Didī's fiancé Vikram is meeting the wider family for the first time. Aunts and uncles are quizzing him gently. You're sitting next to Vikram and an elder aunt asks you in Hindi: 'Yeh kaun hain? Anjali kā pati banegā?' You need to answer correctly using Hindi marriage vocabulary.",
    rwenRole: "Buā-jī Lalita — Rwen's father's sister, ~55, traditional and warm; she's the one who'll lead Anjali's wedding rituals next month and is curious whether the family's foreign friend can speak respectfully about the upcoming shādī.",
    successCriteria: "User uses 'pati' (husband / future husband) for Vikram, uses 'shādī' for the wedding, refers to Anjali as 'Didī' (NOT bare 'Anjali' to an elder), and stays in respectful Hindi rather than slipping into English-only.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
