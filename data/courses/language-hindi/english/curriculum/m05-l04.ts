import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Dādā-Dādī, Nānā-Nānī — Both Sets of Grandparents',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English has 'grandfather' and 'grandmother' — and you'd add 'paternal' or 'maternal' if you really had to. Hindi never had to. Dādā is your father's father; Nānā is your mother's father. Two completely different words. The clue is in the consonant: D for paternal, N for maternal.",
    culturalNote: "In a traditional Indian household, dādā-dādī often live with you — they're 'home-side' grandparents in the joint family. Nānā-nānī are 'māmā ke ghar' — the maternal grandparents' home, where you go for summer holidays and Diwali if your mā's family hosts it. Two sets of grandparents, two emotional flavours, two distinct words.",
  },

  chunks: [
    {
      id: 'dada_ji',
      target: 'दादा जी (Dādā-jī)',
      native: "Father's father (paternal grandfather)",
      literal: 'Dādā = paternal grandfather; -jī = respect',
      emoji: '👴',
      phonetic: 'DAA-daa-jee',
      audioRef: null,
    },
    {
      id: 'dadi_ji',
      target: 'दादी जी (Dādī-jī)',
      native: "Father's mother (paternal grandmother)",
      literal: 'Dādī = paternal grandmother',
      emoji: '👵',
      phonetic: 'DAA-dee-jee',
      audioRef: null,
    },
    {
      id: 'nana_ji',
      target: 'नाना जी (Nānā-jī)',
      native: "Mother's father (maternal grandfather)",
      literal: 'Nānā = maternal grandfather',
      emoji: '🧓',
      phonetic: 'NAA-naa-jee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Dādā/Dādī = paternal; Nānā/Nānī = maternal',
    explanation: "The opening consonant tells you which side. D = dādā/dādī = your father's parents. N = nānā/nānī = your mother's parents. The female form just changes the final vowel: dādā→dādī, nānā→nānī. Get the side right; the gender follows automatically.",
    examples: [
      { target: 'Mere Dādā-jī', native: "My paternal grandfather" },
      { target: 'Meri Dādī-jī', native: "My paternal grandmother" },
      { target: 'Mere Nānā-jī', native: "My maternal grandfather" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each grandparent term to its precise meaning',
      pairs: [
        { left: 'Dādā', right: "Father's father" },
        { left: 'Dādī', right: "Father's mother" },
        { left: 'Nānā', right: "Mother's father" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your mother's mother is calling. Greet her.",
      sentence: 'Namaste, _____-jī!',
      options: ['Nānī', 'Dādī', 'Māsī'],
      correct: 'Nānī',
      context: "Mother's mother = Nānī (N for maternal). Father's mother would be Dādī (D for paternal).",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Paternal grandfather',
      correct: ['Dādā-jī', 'Dada-ji', 'dada-ji', 'Dadaji', 'dadaji'] ,
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says 'Mere mā ke pitā-jī...' — whose father is she talking about?",
      question: 'Mother\'s father in Hindi:',
      options: [
        { text: 'Nānā', correct: true },
        { text: 'Dādā', correct: false },
        { text: 'Tāyā', correct: false },
      ],
      explanation: "Mother's father = Nānā. The 'N' tells you it's the maternal side. Dādā would be the FATHER's father.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My paternal grandfather lives in Jaipur"',
      words: ['mein', 'rahte', 'Jaipur', 'Mere', 'hain.', 'dādā-jī'],
      correct: ['Mere', 'dādā-jī', 'Jaipur', 'mein', 'rahte', 'hain.'],
      translation: 'My paternal grandfather lives in Jaipur.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Maternal grandfather',
      correct: ['Nānā-jī', 'Nana-ji', 'nana-ji', 'Nanaji', 'nanaji'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen is showing you the family photo wall. Four black-and-white portraits hang in a row — both sets of grandparents. Get each one right.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Yeh mere Dādā-jī hain — papa ke pitā. Aur yeh meri Nānī-jī hain — mā kī mā.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wow, aapke Dādā-jī aur Nānī-jī dono ki tasveer ek saath. Bahut khoobsurat hai.', native: 'Wow, your paternal grandfather and maternal grandmother together. Beautiful.', correct: true, feedback: "You named both correctly — paternal grandfather (Dādā) AND maternal grandmother (Nānī). That precision tells Rwen you're really learning." },
          { target: 'Aapke dono dādā-jī hain?', native: 'Are these both your paternal grandfathers?', correct: false, feedback: "No — one's Dādā (paternal) and the other is Nānī (maternal). Hindi distinguishes the sides." },
          { target: 'Aapke grandparents bahut acche lagte hain.', native: 'Your grandparents (English) look very nice.', correct: false, feedback: "Use the Hindi words — Dādā-jī and Nānī-jī. The whole point is the precision English misses." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tumne yād rakhā — D paternal, N maternal. Dādī-jī khush hotī agar yeh sun letīn.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Paternal grandfather', correct: ['Dādā-jī', 'Dada-ji', 'dada-ji', 'Dadaji', 'dadaji'] },
      { prompt: 'Maternal grandmother', correct: ['Nānī-jī', 'Nani-ji', 'nani-ji', 'Naniji', 'naniji'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of (or imagine) your four grandparents. In Hindi each gets a unique title: Dādā-jī, Dādī-jī (father's parents), Nānā-jī, Nānī-jī (mother's parents). Which side did you grow up closer to? Hindi gives you the words to honour each side specifically.",
    rwenSignoff: "Char shabd, char log — har ek alag, har ek pyāre. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Diwali video call across three time zones — Rwen's dādī-jī (paternal grandmother) is on screen from Lucknow, his nānā-jī (maternal grandfather) joins from Jaipur. Both elders are quietly thrilled to be on the call together — they don't see each other often. You have one chance to greet them BOTH correctly within the first 30 seconds.",
    rwenRole: "Dādī-jī Saroj — Rwen's father's mother, ~76, traditional, very fond of children and ceremony; Nānā-jī Ramesh — Rwen's mother's father, ~80, retired professor, sharp and gently teasing about Hindi pronunciation.",
    successCriteria: "User addresses Dādī-jī as 'Dādī-jī' (paternal grandmother — D-side) and Nānā-jī as 'Nānā-jī' (maternal grandfather — N-side), does NOT swap them, AND greets both within the same opening rather than just one.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
