import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-baba',
  module: 5,
  lesson: 1,
  title: 'Baba — Father & Paternal Family',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Family in Shona is not just who you live with — it's who you belong to. The kinship system is one of the most intricate and beautiful in Africa. We start with Baba — father — and what that word expands into.",
    culturalNote: "In Shona culture, your father's brothers are also called Baba — with a qualifier. Babamukuru (father's older brother) and Babamunini (father's younger brother). You owe them the same respect as your own father.",
  },

  chunks: [
    {
      id: 'baba',
      target: 'Baba',
      native: 'Father',
      literal: 'Father (honorific — never said casually)',
      emoji: '👨',
      phonetic: 'BAH-ba',
      audioRef: null,
    },
    {
      id: 'babamukuru',
      target: 'Babamukuru',
      native: "Father's older brother (uncle)",
      literal: 'Baba-mukuru = Father-big (senior)',
      emoji: '👴',
      phonetic: 'ba-ba-mu-KU-ru',
      audioRef: null,
    },
    {
      id: 'babamunini',
      target: 'Babamunini',
      native: "Father's younger brother (uncle)",
      literal: 'Baba-munini = Father-small (junior)',
      emoji: '🧔',
      phonetic: 'ba-ba-mu-NI-ni',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mukuru (senior/big) vs Munini (junior/small)',
    explanation: "'Mukuru' means senior or elder. 'Munini' means junior or younger. These qualifiers appear throughout family vocabulary — Babamukuru (older uncle), Babamunini (younger uncle), Amai mukuru (older aunt).",
    examples: [
      { target: 'Baba-mukuru', native: "Father's older brother" },
      { target: 'Baba-munini', native: "Father's younger brother" },
      { target: 'Ndiri mu-kuru', native: 'I am the elder (of siblings)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the family term to its meaning',
      pairs: [
        { left: 'Baba', right: 'Father' },
        { left: 'Babamukuru', right: "Father's older brother" },
        { left: 'Babamunini', right: "Father's younger brother" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete 'father's older brother'",
      sentence: 'Baba_____.',
      options: ['mukuru', 'munini', 'wangu'],
      correct: 'mukuru',
      context: "Your father's older brother.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Father',
      correct: ['Baba', 'baba'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your father's younger brother — what do you call him?",
      question: "Father's younger brother:",
      options: [
        { text: 'Babamunini', correct: true },
        { text: 'Babamukuru', correct: false },
        { text: 'Sekuru', correct: false },
      ],
      explanation: "Babamunini = father's younger (munini) brother. Babamukuru = father's older (mukuru) brother.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My father is a good person"',
      words: ['Baba', 'wangu', 'munhu', 'akanaka.'],
      correct: ['Baba', 'wangu', 'munhu', 'akanaka.'],
      translation: 'My father is a good person',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: "Father's older brother",
      correct: ['Babamukuru', 'babamukuru'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen introduces you to his father's family at a gathering.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uyu ndi Baba wangu. Uyu ndi Babamukuru wangu — mukuru waBaba.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Makadii, Baba. Makadii, Babamukuru.', native: 'How are you, Father. How are you, Uncle (senior).', correct: true, feedback: "Respectful greetings using the correct titles. The family approves." },
          { target: 'Makadii mese', native: 'How are all of you', correct: false, feedback: "That works — but using specific titles (Baba, Babamukuru) shows you know the family structure." },
          { target: 'Mhoro', native: 'Hello', correct: false, feedback: "For elders, use Makadii and address them by their family title: 'Makadii, Baba. Makadii, Babamukuru.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Vanoseka — vanofarira kuti uri kudzidza mazita emhuri yedu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Father', correct: ['Baba', 'baba'] },
      { prompt: "Father's older brother", correct: ['Babamukuru', 'babamukuru'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think about your father and his brothers. Try naming them in Shona: Baba, Babamukuru (older brother), Babamunini (younger brother). Shona names their relationships precisely.",
    rwenSignoff: "In Shona, family titles are respect made visible. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You've just arrived at the rural homestead in Domboshava for a Saturday family lunch. Two older men stand up from under the mango tree to greet you — Rwen quietly tells you one is his father's older brother, the other his father's younger brother. You need to address each by the correct title, not lump them together.",
    rwenRole: "Sekuru Mukoma — Rwen's uncle, ~55, sharp-eyed and watching whether you'll pick the right title; he's testing you without saying so.",
    successCriteria: "User uses 'Babamukuru' for the older brother (NOT just 'Baba' or swapped with 'Babamunini') and 'Babamunini' for the younger one, AND opens with a respectful greeting like 'Makadii' rather than a casual 'Mhoro'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
