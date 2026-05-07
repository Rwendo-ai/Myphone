import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-bua-fufa',
  module: 5,
  lesson: 5,
  title: 'Bua, Fūfā, Chachī — Filling in the Family Tree',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Father's sister is NOT māsī. Her name is Bua. And her husband — your aunt's husband on the paternal side — has his own word too: Fūfā. English would just say 'aunt' and 'uncle by marriage'. Hindi has separate words for each marriage-link in the family tree.",
    culturalNote: "In Indian weddings, Bua (father's sister) traditionally has a special ceremonial role — tying the kalāvā (sacred thread), leading some rituals. Fūfā (her husband) gets gifts and respect from his nieces and nephews. Knowing the right words in Hindi tells the family you understand WHO does WHAT in the rituals.",
  },

  chunks: [
    {
      id: 'bua',
      target: 'बुआ (Buā)',
      native: "Father's sister (paternal aunt)",
      literal: 'Buā — distinct from māsī (mother\'s sister)',
      emoji: '👩‍🦱',
      phonetic: 'BOO-aa',
      audioRef: null,
    },
    {
      id: 'fufa',
      target: 'फूफा (Fūfā)',
      native: "Bua's husband (paternal aunt's husband)",
      literal: "Fūfā — exclusively Bua's husband",
      emoji: '👨‍🦳',
      phonetic: 'FOO-faa',
      audioRef: null,
    },
    {
      id: 'chachi',
      target: 'चाची (Chachī)',
      native: "Chachā's wife (younger paternal uncle's wife)",
      literal: "Chachā + ī = Chachī (his wife)",
      emoji: '👩',
      phonetic: 'CHA-chee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Spousal kinship terms — every uncle's wife has her own name",
    explanation: "In Hindi, the wife of each kind of uncle has a dedicated word. Chachā (younger paternal uncle) → Chachī (his wife). Tāyā (older paternal uncle) → Tāī (his wife). Māmā (maternal uncle) → Māmī (his wife). Bua (paternal aunt) → Fūfā (her husband, the one exception where the husband's title is irregular).",
    examples: [
      { target: 'Chachā-jī aur Chachī-jī', native: "Father's younger brother and his wife" },
      { target: 'Bua-jī aur Fūfā-jī', native: "Father's sister and her husband" },
      { target: 'Māmā-jī aur Māmī-jī', native: "Mother's brother and his wife" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each in-law/spousal kinship term to its meaning',
      pairs: [
        { left: 'Buā', right: "Father's sister" },
        { left: 'Fūfā', right: "Father's sister's husband" },
        { left: 'Chachī', right: "Father's younger brother's wife" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your father\'s sister is at the door. What do you call her?',
      sentence: 'Namaste, _____-jī!',
      options: ['Buā', 'Māsī', 'Dādī'],
      correct: 'Buā',
      context: "Father's sister = Buā. Mother's sister would be Māsī.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "Father's sister",
      correct: ['Buā', 'Bua', 'bua'],
    },
    {
      type: 'multiple_choice',
      instruction: "You introduce your friend's chachā. His wife's title is:",
      question: "Chachā's wife:",
      options: [
        { text: 'Chachī', correct: true },
        { text: 'Tāī', correct: false },
        { text: 'Māmī', correct: false },
      ],
      explanation: "Chachā → Chachī (his wife). Tāī = Tāyā's wife (older paternal uncle's wife). Māmī = Māmā's wife (maternal uncle's wife). Each pairing is fixed.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My paternal aunt is a doctor"',
      words: ['hain.', 'doctor', 'Meri', 'buā-jī'],
      correct: ['Meri', 'buā-jī', 'doctor', 'hain.'],
      translation: 'My paternal aunt is a doctor.',
    },
    {
      type: 'translate',
      instruction: "Type in Romanized Hindi",
      prompt: "Paternal aunt's husband",
      correct: ['Fūfā', 'Fufa', 'fufa'],
    },
  ],

  rwenDialogue: {
    intro: "An anglophone friend of yours has tagged along to the family Diwali dinner. He's lost in the family tree. You explain.",
    lines: [
      {
        speaker: 'npc',
        target: 'So who exactly is Bua and how is she different from Māsī?',
        native: 'So who exactly is Bua and how is she different from Māsī?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buā = papa ki bahan. Māsī = mā kī bahan. Dono "aunt" lekin alag side.', native: "Bua = father's sister. Māsī = mother's sister. Both are 'aunt' but different sides.", correct: true, feedback: "Clear, accurate, bilingual. You explained the side-distinction the way an Indian would." },
          { target: 'Bua aur Māsī same hai.', native: 'Bua and Māsī are the same.', correct: false, feedback: "They are NOT the same. Bua = father's sister (paternal). Māsī = mother's sister (maternal). Hindi never mixes them." },
          { target: "I don't know, ask Rwen.", native: "I don't know, ask Rwen.", correct: false, feedback: "You DO know. Bua = father's sister. Māsī = mother's sister. Try again." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Tumne mere dost ko mhuri samjhā dī — yeh achha kām hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Father's sister", correct: ['Buā', 'Bua', 'bua'] },
      { prompt: "Father's younger brother's wife", correct: ['Chachī', 'Chachi', 'chachi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of all the in-laws in your family — uncles' wives, aunts' husbands. In Hindi each has a unique title: Chachī, Tāī, Māmī, Fūfā. Try labelling them mentally. Notice how the words make the relationships sharper.",
    rwenSignoff: "Har riste kā apnā nām — Hindi mein koī rishtā 'sirf aunty' nahin hota. Phir milenge.",
  },

  phase8: {
    scenario: "Your anglophone friend Mark has come along to a Diwali gathering at Rwen's family flat. He keeps calling everyone 'aunty' and 'uncle' and the family is too polite to correct him — but Rwen's chachī-jī gives you a quiet glance. Your job: walk Mark through the room in Hindi-flavoured English so he learns who is who: Bua, Fūfā, Chachī, Māsī.",
    rwenRole: "Mark — your American colleague visiting India for the first time, well-intentioned but linguistically lost; Rwen's Chachī-jī Anita, ~50, watches from across the room while you do the explaining.",
    successCriteria: "User correctly identifies Bua as paternal aunt (NOT māsī), uses Chachī for chachā's wife (NOT generic 'aunty'), uses Fūfā for Bua's husband (NOT generic 'uncle'), and acknowledges in some form that Hindi distinguishes paternal vs maternal where English collapses.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
