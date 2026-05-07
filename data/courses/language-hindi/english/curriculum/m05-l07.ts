import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-saas-sasur',
  module: 5,
  lesson: 7,
  title: 'Sās, Sasur, Devar — In-Laws After Marriage',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When you marry into an Indian family, you don't just get 'in-laws' — you get a whole new vocabulary. Sās (mother-in-law). Sasur (father-in-law). Devar (husband's younger brother). Jeṭh (husband's older brother). Each one a distinct word, and saying the right one shows you've EARNED your place in the new family.",
    culturalNote: "In a Hindi-speaking joint family, a new bride is welcomed by her devar and jeṭh with specific roles — devar is the playful, teasing younger brother-in-law; jeṭh is treated almost like a father-in-law, with extreme respect (some women traditionally avoid even saying his name aloud). The vocabulary maps the social distance.",
  },

  chunks: [
    {
      id: 'saas',
      target: 'सास (Sās)',
      native: 'Mother-in-law',
      literal: 'Sās — works for both husband\'s mother and wife\'s mother',
      emoji: '👵',
      phonetic: 'SAAS',
      audioRef: null,
    },
    {
      id: 'sasur',
      target: 'ससुर (Sasur)',
      native: 'Father-in-law',
      literal: 'Sasur — works for both husband\'s father and wife\'s father',
      emoji: '👴',
      phonetic: 'SA-sur',
      audioRef: null,
    },
    {
      id: 'devar',
      target: 'देवर (Devar)',
      native: "Husband's younger brother",
      literal: 'Devar — playful, friendly relationship traditionally',
      emoji: '🧔',
      phonetic: 'DAY-var',
      audioRef: null,
    },
  ],

  pattern: {
    name: "In-law titles distinguish age and gender precisely",
    explanation: "Husband's younger brother = Devar. Husband's older brother = Jeṭh. Husband's sister = Nanad. Wife's brother = Sālā. Wife's sister = Sālī. Each one is a separate word — English just says 'brother-in-law' for all four. Hindi knows whose family, and whether older or younger.",
    examples: [
      { target: 'Mere sās-sasur', native: 'My mother- and father-in-law' },
      { target: 'Merā devar', native: "My husband's younger brother" },
      { target: 'Merā jeṭh', native: "My husband's older brother" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each in-law term to its meaning',
      pairs: [
        { left: 'Sās', right: 'Mother-in-law' },
        { left: 'Sasur', right: 'Father-in-law' },
        { left: 'Devar', right: "Husband's younger brother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A new bride introduces her mother-in-law to a guest',
      sentence: 'Yeh meri _____-jī hain.',
      options: ['sās', 'sasur', 'buā'],
      correct: 'sās',
      context: 'Mother-in-law = Sās.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Husband's younger brother",
      correct: ['Devar', 'devar'],
    },
    {
      type: 'multiple_choice',
      instruction: "Anjali Didī just married Vikram. Vikram's father is Anjali's:",
      question: 'Father-in-law in Hindi:',
      options: [
        { text: 'Sasur', correct: true },
        { text: 'Sās', correct: false },
        { text: 'Tāyā', correct: false },
      ],
      explanation: "Sasur = father-in-law (works for both spouses). Sās = mother-in-law. Tāyā = father's older brother — different family slot entirely.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My mother-in-law is very kind"',
      words: ['hain.', 'Meri', 'sās-jī', 'bahut', 'dayālū'],
      correct: ['Meri', 'sās-jī', 'bahut', 'dayālū', 'hain.'],
      translation: 'My mother-in-law is very kind.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Father-in-law',
      correct: ['Sasur', 'sasur'],
    },
  ],

  rwenDialogue: {
    intro: "Anjali Didī, newly married, introduces you to her in-laws at a family lunch.",
    lines: [
      {
        speaker: 'npc',
        target: 'Beta, mere sās-sasur se mil — yeh Vikram ke parents hain.',
        native: 'Dear, meet my mother-in-law and father-in-law — these are Vikram\'s parents.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, Sās-jī. Namaste, Sasur-jī.', native: 'Hello, mother-in-law. Hello, father-in-law.', correct: true, feedback: "Both addressed by their precise in-law titles with '-jī'. Anjali Didī\'s new family is impressed." },
          { target: 'Namaste, Mātā-jī. Namaste, Pitā-jī.', native: 'Hello, Mother. Hello, Father.', correct: false, feedback: "Those are titles for YOUR own parents. For Anjali's in-laws, it's Sās-jī and Sasur-jī." },
          { target: 'Namaste, aunty. Namaste, uncle.', native: 'Hello, aunty. Hello, uncle.', correct: false, feedback: "Generic English fallback — and the family will let it pass — but you know the precise Hindi: Sās-jī, Sasur-jī." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sās-jī muskurā rahī hain. Tumne unke pad ko sammān diyā.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother-in-law', correct: ['Sās', 'Saas', 'saas', 'sas'] },
      { prompt: "Husband's younger brother", correct: ['Devar', 'devar'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you (or someone you know) is married, picture your in-laws. In Hindi: Sās-jī (mother-in-law), Sasur-jī (father-in-law), Devar (husband's younger brother), Jeṭh (husband's older brother), Nanad (husband's sister). Each gets its own title — earned through marriage.",
    rwenSignoff: "Shādī ke baad, ek pūrī nayī kosh — naye log, naye nām. Phir milenge.",
  },

  phase8: {
    scenario: "Six months after Anjali Didī's wedding, you're at her in-laws' home in Indore for the first time as a family friend. Vikram's parents (Sās-jī and Sasur-jī from Anjali's perspective) are hosting. Vikram's younger brother (Devar from Anjali's view) is helping in the kitchen. Anjali wants you to greet each correctly so they know she has friends who 'get' the family vocabulary.",
    rwenRole: "Sasur-jī Mahesh — Anjali's father-in-law, ~64, retired engineer, traditional but warm; he asks small questions to test whether Anjali's friends understand the family hierarchy. Devar Aryan — Vikram's younger brother, ~26, playful.",
    successCriteria: "User addresses Vikram's father as 'Sasur-jī' (NOT 'Pitā-jī' which is for one's own father, NOT generic 'uncle'), Vikram's mother as 'Sās-jī', and treats the younger brother-in-law differently (more casual, devar-style) than the elders. Uses '-jī' on the in-laws.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
