import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05',
  module: 5,
  lesson: 5,
  title: 'uMalume, uNjihla — The Precise Aunts and Uncles',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "English collapses everything into 'uncle' and 'aunt'. isiNdebele refuses to. Your mother's brother is a different person — different relationship, different ceremonial duty, different word — than your father's brother. uMalume. uNjihla. uBabakazi. Different sides, different titles.",
    culturalNote: "In Ndebele kinship, your mother's brother (uMalume) holds a specific role: he negotiates lobola for his sister's daughters, hosts you in childhood visits, stands as a kind of 'second father from the maternal side'. Your father's sister (uNjihla / uBabakazi) is closer to a 'female father' — she has authority in your father's lineage. The vocabulary maps an entire social structure.",
  },

  chunks: [
    {
      id: 'umalume',
      target: 'uMalume',
      native: "Mother's brother (maternal uncle)",
      literal: "Specifically the brother of your mother. NOT used for father's brothers.",
      emoji: '👨🏾‍🦱',
      phonetic: 'oo-mah-LOO-meh',
      audioRef: null,
    },
    {
      id: 'unjihla',
      target: 'uNjihla',
      native: "Father's sister (paternal aunt)",
      literal: "Specifically the sister of your father. Holds authority on the paternal side.",
      emoji: '👩🏾‍🦱',
      phonetic: 'oon-JEE-hlah',
      audioRef: null,
    },
    {
      id: 'ubabakazi',
      target: 'uBabakazi',
      native: "Father's sister (alternative form)",
      literal: 'Baba (father) + -kazi (feminine). Literally "female father". Many speakers use this and uNjihla interchangeably.',
      emoji: '👩🏾',
      phonetic: 'oo-bah-bah-KAH-zee',
      audioRef: null,
    },
    {
      id: 'umamekazi',
      target: 'uMamekazi',
      native: "Mother's sister (maternal aunt)",
      literal: 'Mame (mother) + -kazi. Often shortened to "small mother" — she stands in for mother.',
      emoji: '👩🏾',
      phonetic: 'oo-mah-meh-KAH-zee',
      audioRef: null,
    },
    {
      id: 'ubabamkhulu',
      target: 'uBabamkhulu',
      native: "Father's older brother (senior paternal uncle)",
      literal: 'Baba (father) + omkhulu (great/elder). Literally "great father" — almost equal status to your own father.',
      emoji: '🧓🏾',
      phonetic: 'oo-bah-bahm-KOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Maternal vs paternal — the kinship grid',
    explanation: "Ndebele kinship distinguishes the two sides of the family with separate vocabulary. Maternal: uMalume (mother's brother), uMamekazi (mother's sister). Paternal: uBabakazi / uNjihla (father's sister), uBabamkhulu (father's older brother), uBabamncane (father's younger brother). Knowing which side someone is from changes how you address them.",
    examples: [
      { target: 'uMalume wami', native: 'My maternal uncle (mother\'s brother)' },
      { target: 'uNjihla wami', native: 'My paternal aunt (father\'s sister)' },
      { target: 'uBabamkhulu', native: 'My father\'s older brother' },
      { target: 'uMamekazi wami', native: 'My maternal aunt (mother\'s sister)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele word to its precise meaning',
      pairs: [
        { left: 'uMalume', right: "Mother's brother" },
        { left: 'uNjihla', right: "Father's sister" },
        { left: 'uMamekazi', right: "Mother's sister" },
        { left: 'uBabamkhulu', right: "Father's older brother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your mother's brother walks in. Greet him by his correct title.",
      sentence: 'Sawubona, _____ !',
      options: ['Malume', 'Babakazi', 'Khulu'],
      correct: 'Malume',
      context: "Mother's brother = uMalume. Different word than father's brother. Ndebele kinship is precise.",
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: "My father's sister (paternal aunt)",
      correct: ['uBabakazi wami', 'uNjihla wami', 'Ubabakazi wami', 'Unjihla wami'],
    },
    {
      type: 'multiple_choice',
      instruction: "Choose the correct distinction",
      question: "What's the difference between uMalume and uBabamkhulu?",
      options: [
        { text: "uMalume is mother's brother; uBabamkhulu is father's older brother. Different sides of the family.", correct: true },
        { text: "They're the same word, just different dialects.", correct: false },
        { text: "uMalume is younger and uBabamkhulu is older.", correct: false },
      ],
      explanation: "uMalume = MATERNAL uncle (mother's brother). uBabamkhulu = PATERNAL senior uncle (father's older brother). Different sides. Different ceremonial duties. Ndebele keeps them strictly separate.",
    },
  ],

  rwenDialogue: {
    intro: "At a Sunday lunch in Bulawayo, two older men greet you — one is the host's mother's brother, the other is the host's father's older brother. Rwen whispers which is which.",
    lines: [
      { speaker: 'rwen', rwenLine: "On the left — uMalume, my mother's brother. On the right — uBabamkhulu, my father's older brother. Different sides. Different titles. Greet each correctly." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona, Malume. Sawubona, Babamkhulu.', native: 'Hello, Maternal Uncle. Hello, Senior Paternal Uncle.', correct: true, feedback: "Both addressed by exact kinship side and seniority. uBabamkhulu nods slowly — you didn't lump them together." },
          { target: 'Sawubona, baba. Sawubona, baba.', native: 'Hello, father. Hello, father.', correct: false, feedback: "Both are uncles, not your father — and they're from different sides. Use uMalume (mother's brother) and uBabamkhulu (father's older brother)." },
          { target: 'Sawubona, uncles.', native: 'Hello, uncles (English).', correct: false, feedback: "English flattens what isiNdebele keeps precise. Use uMalume and uBabamkhulu — the maternal vs paternal distinction is part of the respect." },
        ],
      },
      { speaker: 'npc', target: 'Wakhuluma kuhle. Uyazi ukuthi ngubani lo, ngubani lo.', native: "You spoke well. You know who is who." },
      { speaker: 'rwen', rwenLine: "uMalume just complimented your kinship knowledge. That's a high mark.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Mother's brother", correct: ['uMalume', 'umalume', 'Malume'] },
      { prompt: "Father's sister (either form)", correct: ['uBabakazi', 'uNjihla', 'ubabakazi', 'unjihla', 'Babakazi', 'Njihla'] },
      { prompt: "Father's older brother", correct: ['uBabamkhulu', 'ubabamkhulu', 'Babamkhulu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Draw a small family tree on paper. Label each aunt and uncle with their precise isiNdebele title — uMalume, uBabamkhulu, uMamekazi, uNjihla. The grid is dense; don't worry about memorizing it all at once. Notice how the language refuses to lump people together.",
    rwenSignoff: "Maternal side, paternal side, older, younger. Ndebele will not let you be lazy with people. Tomorrow — the in-laws who join the family by marriage.",
  },

  phase8: {
    scenario: "You're at a large Sunday family lunch in Bulawayo. Rwen walks you around the room and whispers each relative's exact relationship to him as you go. Your job: greet each one with their correct kinship title — maternal vs paternal, older vs younger.",
    rwenRole: "Rwen as host, mid-walk through the room — patient, will gently correct you if you call uMalume 'Babamkhulu' or vice versa.",
    successCriteria: "User correctly distinguishes uMalume (maternal uncle) from uBabamkhulu/uBabamncane (paternal uncles), and uses uBabakazi/uNjihla for the paternal aunt versus uMamekazi for the maternal aunt — gets at least 3 of 4 sides right.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
