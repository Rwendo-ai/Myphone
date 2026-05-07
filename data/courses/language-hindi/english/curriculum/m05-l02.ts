import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-mata-mausi',
  module: 5,
  lesson: 2,
  title: 'Mātā-jī — Mother & the Maternal Side',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mā. Two letters. The word that nearly every language guards. In Hindi, mother is mātā-jī formally, but in real homes she's just 'mā' — and her sister isn't your 'aunt'. She's your māsī, and that distinction matters because in many families, māsī raises you almost as much as your mother does.",
    culturalNote: "Hindi splits maternal aunt/uncle off from paternal completely. Māsī = mother's sister. Māmā = mother's brother. There's no shared 'aunt' or 'uncle'. The system encodes who you can ask for what — māmā traditionally gives gifts to his sister's kids; māsī is the second mother.",
  },

  chunks: [
    {
      id: 'mata_ji',
      target: 'माता जी (Mātā-jī)',
      native: 'Mother (formal/respectful) — colloquially "mā" or "mummy"',
      literal: 'Mātā (mother) + jī (respect)',
      emoji: '👩',
      phonetic: 'maa-TAA-jee',
      audioRef: null,
    },
    {
      id: 'masi',
      target: 'मासी (Māsī)',
      native: "Mother's sister (maternal aunt)",
      literal: 'Māsī = "mā-like" — the second mother',
      emoji: '👩‍👧',
      phonetic: 'MAA-see',
      audioRef: null,
    },
    {
      id: 'mama',
      target: 'मामा (Māmā)',
      native: "Mother's brother (maternal uncle)",
      literal: "Māmā — mother's brother (NOT to be confused with 'mama' meaning mom in English)",
      emoji: '🧔‍♂️',
      phonetic: 'MAA-maa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Maternal-side kinship is its own vocabulary',
    explanation: "On your mother's side, every relative has a different word from the paternal side. Māsī (mother's sister), Māmā (mother's brother), Nānā (mother's father), Nānī (mother's mother). The paternal versions — chachā, tāyā, dādā, dādī — are completely different. English says 'aunt' for both; Hindi never confuses them.",
    examples: [
      { target: 'Mātā-jī', native: 'My mother (respectful)' },
      { target: 'Māsī-jī', native: "My mother's sister" },
      { target: 'Māmā-jī', native: "My mother's brother" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each maternal-side term to its meaning',
      pairs: [
        { left: 'Mātā-jī', right: 'Mother' },
        { left: 'Māsī', right: "Mother's sister" },
        { left: 'Māmā', right: "Mother's brother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your mother's sister is visiting from Bengaluru.",
      sentence: 'Meri _____-jī Bengaluru se ā rahī hain.',
      options: ['Māsī', 'Tete', 'Chachī'],
      correct: 'Māsī',
      context: "Mother's sister = Māsī. Father's sister would be Bua, never Māsī.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Mother's brother (maternal uncle)",
      correct: ['Māmā', 'Mama', 'mama'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says 'my mom's sister bought me this'. What word would she use in Hindi?",
      question: "Mother's sister in Hindi:",
      options: [
        { text: 'Māsī', correct: true },
        { text: 'Bua', correct: false },
        { text: 'Dādī', correct: false },
      ],
      explanation: "Māsī = mother's sister. Bua = father's sister (paternal aunt — completely different word). Dādī = father's mother. Hindi never blurs these.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My mother lives in Pune"',
      words: ['rahti', 'hain.', 'Meri', 'mātā-jī', 'Pune', 'mein'],
      correct: ['Meri', 'mātā-jī', 'Pune', 'mein', 'rahti', 'hain.'],
      translation: 'My mother lives in Pune.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Mother's sister (maternal aunt)",
      correct: ['Māsī', 'Masi', 'masi'],
    },
  ],

  rwenDialogue: {
    intro: "On a video call, Rwen wants you to meet his mother and his māsī, who is visiting for Diwali week. Both will be on screen at once.",
    lines: [
      {
        speaker: 'npc',
        target: 'Namaste beta, kaise ho?',
        native: 'Hello, dear (child) — how are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, Mātā-jī. Namaste, Māsī-jī. Main theek hoon.', native: 'Hello, Mother. Hello, Maternal Aunt. I am well.', correct: true, feedback: "Both maternal-side women greeted with their distinct titles and '-jī'. Rwen's mother is visibly pleased." },
          { target: 'Namaste, aunty.', native: 'Hello, aunty.', correct: false, feedback: "'Aunty' is the lazy English shortcut Indians use with non-family. With family, use the precise title: Māsī-jī (mother's sister)." },
          { target: 'Namaste, Bua-jī.', native: 'Hello, Paternal Aunt.', correct: false, feedback: "Wrong side! Bua = father's sister. Māsī = mother's sister. Mā introduced her sister, so it's Māsī-jī." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Māsī-jī ko bahut khushī huī. Tum sahī shabd jānte ho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Mother (formal)', correct: ['Mātā-jī', 'Mata-ji', 'mata-ji', 'Mataji', 'mataji'] },
      { prompt: "Mother's sister (maternal aunt)", correct: ['Māsī', 'Masi', 'masi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture your mother's siblings. In Hindi each gets a unique title — Māsī (her sister), Māmā (her brother). Try labelling them aloud. The word itself reframes the relationship.",
    rwenSignoff: "Mā ke bhāī, mā ki bahan — har kisi kā apnā nām. Phir milenge.",
  },

  phase8: {
    scenario: "Diwali sweets are being passed around the kitchen at Rwen's mother's flat in Pune. His mātā-jī is dipping ladoos in syrup; his māsī (her sister) just walked in with a tray of mithai. Rwen wants you to greet both before you sit. Two women, same generation, different sides of the family — except they're BOTH on the maternal side.",
    rwenRole: "Māsī-jī Sushma — Rwen's mother's older sister, ~58, schoolteacher, sharp tongue and a sweet smile; she was the one who taught Rwen Hindi as a child and notices instantly whether you've actually learned the maternal-side vocabulary or are guessing.",
    successCriteria: "User addresses Rwen's mother as 'Mātā-jī' (or 'Aunty-jī' in casual fallback, but ideally Mātā-jī here since she's THE mom) and the maternal aunt as 'Māsī-jī' (NOT 'Bua' which is paternal, NOT generic 'aunty'), uses '-jī' on both, and stays respectful throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
