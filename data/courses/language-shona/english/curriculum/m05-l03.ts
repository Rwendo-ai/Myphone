import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-siblings',
  module: 5,
  lesson: 3,
  title: 'Mukoma / Munin\'ina — Brothers & Sisters',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In Shona, there's no single word for 'sibling'. Instead, you specify the relationship precisely — older or younger, and your gender relative to them. It sounds complex, but it creates beautiful clarity.",
    culturalNote: "Shona sibling terms are relational — they depend on who is speaking. 'Hanzvadzi' means your sister if you are a brother, or your brother if you are a sister. The word describes the cross-gender relationship, not just the person.",
  },

  chunks: [
    {
      id: 'mukoma',
      target: 'Mukoma',
      native: 'Older sibling (used by a younger sibling)',
      literal: 'Mu-koma (one who came before)',
      emoji: '👫',
      phonetic: 'mu-KO-ma',
      audioRef: null,
    },
    {
      id: 'munin_ina',
      target: "Munin'ina",
      native: 'Younger sibling',
      literal: "Mu-nin'ina (the younger one)",
      emoji: '🧒',
      phonetic: "mu-ni-NI-na",
      audioRef: null,
    },
    {
      id: 'hanzvadzi',
      target: 'Hanzvadzi',
      native: 'Cross-gender sibling (brother\'s sister / sister\'s brother)',
      literal: 'Hanzvadzi (opposite-gender sibling)',
      emoji: '👫',
      phonetic: 'han-ZVA-dzi',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Sibling terms express age and gender relationship",
    explanation: "Mukoma = older sibling (younger person speaking). Munin'ina = younger sibling. Hanzvadzi = cross-gender sibling. These terms encode both the age difference and the gender relationship — Shona is precise about family.",
    examples: [
      { target: 'Mukoma wangu', native: 'My older sibling' },
      { target: "Munin'ina wangu", native: 'My younger sibling' },
      { target: 'Hanzvadzi yangu', native: 'My cross-gender sibling' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sibling term to its meaning',
      pairs: [
        { left: 'Mukoma', right: 'Older sibling' },
        { left: "Munin'ina", right: 'Younger sibling' },
        { left: 'Hanzvadzi', right: 'Cross-gender sibling' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "my older sibling"',
      sentence: '_____ wangu akanaka.',
      options: ['Mukoma', "Munin'ina", 'Ambuya'],
      correct: 'Mukoma',
      context: 'My older sibling is a good person.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Older sibling',
      correct: ['Mukoma', 'mukoma'],
    },
    {
      type: 'multiple_choice',
      instruction: "You are a brother. Your sister — what do you call her?",
      question: 'A brother\'s word for his sister:',
      options: [
        { text: 'Hanzvadzi', correct: true },
        { text: 'Mukoma', correct: false },
        { text: 'Tete', correct: false },
      ],
      explanation: "Hanzvadzi is the cross-gender sibling term. A brother calls his sister hanzvadzi. A sister calls her brother hanzvadzi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My younger sibling is at school"',
      words: ['wangu', "Munin'ina", 'ari', 'kuchikoro.'],
      correct: ["Munin'ina", 'wangu', 'ari', 'kuchikoro.'],
      translation: 'My younger sibling is at school',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Younger sibling',
      correct: ["Munin'ina", "munin'ina"],
    },
  ],

  rwenDialogue: {
    intro: "Rwen introduces you to his siblings at the family home.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Uyu ndi Mukoma wangu. Uyu ndi Munin'ina wangu. Vana vatatu tiri.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Makadii, Mukoma. Makadii, Munin\'ina.', native: 'How are you, older sibling. How are you, younger sibling.', correct: true, feedback: "Using their relational titles — that's proper Shona family respect." },
          { target: 'Makadii mese vanhu', native: 'How are you all people', correct: false, feedback: "Address them with their titles — Mukoma for the older, Munin'ina for the younger." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Greet them — 'Makadii, Mukoma. Makadii, Munin'ina.' — respectful introductions." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Vanofarira kusangana newe. Mhuri yedu inokugamuchira.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Older sibling', correct: ['Mukoma', 'mukoma'] },
      { prompt: 'Younger sibling', correct: ["Munin'ina", "munin'ina"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of your siblings (or close friends who feel like siblings). Assign Shona titles: Mukoma (older), Munin'ina (younger). How does precision change how you see the relationship?",
    rwenSignoff: "Siblings are your first community. Famba zvakanaka.",
  },

  phase8: {
    scenario: "At a family braai in Highfield, Tete Rumbidzai introduces you to her three children — one older than Rwen, one younger, and Rwen's hanzvadzi (his sister). She asks you to greet them in turn, watching to see whether you'll get the relational direction right.",
    rwenRole: "Tete Rumbidzai — Rwen's paternal aunt, ~50, gentle but probing; she asks the kind of small questions that quietly check whether you understand who is senior to whom.",
    successCriteria: "User uses 'Mukoma' for the older sibling and 'Munin'ina' for the younger (NOT swapped), and uses 'Hanzvadzi' (or addresses by name) for the cross-gender sister rather than calling her Mukoma/Munin'ina.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
