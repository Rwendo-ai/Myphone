import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-pita-pitaji',
  module: 5,
  lesson: 1,
  title: 'Pitā-jī — Father (and the Respect Suffix)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In English, 'father' is one word and you say it directly. In Hindi, you almost never just say 'pitā' on its own — you say 'pitā-jī' or 'papa'. The little '-jī' sticker is doing huge work: it carries respect, warmth, and a thousand years of family hierarchy.",
    culturalNote: "Hindi distinguishes paternal and maternal sides of the family in almost every relationship — and your father's brothers are NOT lumped under 'uncle'. They get their own dedicated words: chachā (younger paternal uncle), tāyā (older paternal uncle). English collapses what Hindi keeps precise.",
  },

  chunks: [
    {
      id: 'pita_ji',
      target: 'पिता जी (Pitā-jī)',
      native: 'Father (respectful, the standard form)',
      literal: 'Pitā (father) + jī (respect particle) — never bare pitā in speech',
      emoji: '👨',
      phonetic: 'pi-TAA-jee',
      audioRef: null,
    },
    {
      id: 'chacha',
      target: 'चाचा (Chachā)',
      native: "Father's YOUNGER brother (paternal uncle)",
      literal: 'Chachā — specifically the junior paternal uncle',
      emoji: '🧔',
      phonetic: 'CHA-chaa',
      audioRef: null,
    },
    {
      id: 'taya',
      target: 'ताया (Tāyā)',
      native: "Father's OLDER brother (paternal uncle)",
      literal: 'Tāyā — specifically the senior paternal uncle',
      emoji: '👴',
      phonetic: 'TAA-yaa',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The '-jī' respect suffix",
    explanation: "Sticking '-jī' onto a name or kinship term turns it respectful. Pitā-jī, Chachā-jī, Dādā-jī, Priya-jī. Drop it with elders and you sound rude; drop it with peers and you sound formal. Default to '-jī' for any older family member.",
    examples: [
      { target: 'Pitā-jī', native: 'Father (respectful)' },
      { target: 'Chachā-jī', native: 'Paternal uncle (younger, respectful)' },
      { target: 'Tāyā-jī', native: 'Paternal uncle (older, respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi kinship term to its precise meaning',
      pairs: [
        { left: 'Pitā-jī', right: 'Father' },
        { left: 'Chachā', right: "Father's younger brother" },
        { left: 'Tāyā', right: "Father's older brother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your father's OLDER brother just walked in. Greet him.",
      sentence: 'Namaste, _____-jī!',
      options: ['Tāyā', 'Chachā', 'Pitā'],
      correct: 'Tāyā',
      context: 'Older paternal uncle = Tāyā. Younger = Chachā. Hindi keeps them distinct.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (with the respect suffix)',
      prompt: 'Father (the way you would actually address him)',
      correct: ['Pitā-jī', 'Pita-ji', 'pita-ji', 'Pitaji', 'pitaji'],
    },
    {
      type: 'multiple_choice',
      instruction: "English says 'my uncle is here'. Your father's younger brother is at the door. What's the Hindi word?",
      question: "Father's younger brother:",
      options: [
        { text: 'Chachā', correct: true },
        { text: 'Tāyā', correct: false },
        { text: 'Māmā', correct: false },
      ],
      explanation: "Chachā = father's YOUNGER brother. Tāyā = father's OLDER brother. Māmā would be your MOTHER's brother — totally different side of the family.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My father is a good person"',
      words: ['hain.', 'Mere', 'achche', 'pitā-jī', 'insān'],
      correct: ['Mere', 'pitā-jī', 'achche', 'insān', 'hain.'],
      translation: 'My father is a good person.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Father's older brother",
      correct: ['Tāyā', 'Taya', 'taya'],
    },
  ],

  rwenDialogue: {
    intro: "It's the night of Diwali. Rwen has invited you to his family home in Lucknow. As you step inside, two older men are lighting diyas on the windowsill. Rwen quietly tells you which is which.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Yeh mere Pitā-jī hain. Aur yeh mere Tāyā-jī hain — papa ke baṛe bhāī.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, Pitā-jī. Namaste, Tāyā-jī.', native: 'Hello, Father. Hello, Older Uncle.', correct: true, feedback: "Both elders addressed with their precise titles AND the '-jī' suffix. They both smile — they noticed." },
          { target: 'Namaste, uncle.', native: 'Hello, uncle (English).', correct: false, feedback: "English 'uncle' flattens what Hindi distinguishes. Use Tāyā-jī (older paternal uncle) and Pitā-jī specifically." },
          { target: 'Namaste, Chachā-jī.', native: 'Hello, Younger Uncle.', correct: false, feedback: "Wrong direction — Tāyā is OLDER, Chachā is YOUNGER. Rwen said 'baṛe bhāī' — older brother — so it's Tāyā-jī." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wāh — Tāyā-jī tumse khush hain. Tumne sahī shabd istemāl kiyā.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Father (respectful form)', correct: ['Pitā-jī', 'Pita-ji', 'pita-ji', 'Pitaji', 'pitaji'] },
      { prompt: "Father's older brother", correct: ['Tāyā', 'Taya', 'taya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture your father's brothers (or your friends' if you have none). Try to label each one in Hindi: is he Chachā (younger) or Tāyā (older)? English calls them all 'uncle' — Hindi gives each one a name.",
    rwenSignoff: "Phir milenge — and I'll be checking whether you tāyā-ed and chachā-ed correctly.",
  },

  phase8: {
    scenario: "It's the second evening of Diwali at Rwen's family home in Lucknow. The living room is full — diyas everywhere, mithai on the table. Two of Rwen's father's brothers are seated on the sofa: one is older than papa, one is younger. Rwen has whispered which is which. You need to greet each by the correct title before you sit down.",
    rwenRole: "Tāyā-jī Vinod — Rwen's father's elder brother, ~62, retired bank officer; warm but observant, the kind who quietly tests whether the foreigner has done their homework on Hindi family titles.",
    successCriteria: "User addresses the older brother as 'Tāyā-jī' (NOT just 'Chachā' or English 'uncle') and the younger as 'Chachā-jī', uses '-jī' on both, and ideally pairs each with 'Namaste' rather than English 'Hi'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
