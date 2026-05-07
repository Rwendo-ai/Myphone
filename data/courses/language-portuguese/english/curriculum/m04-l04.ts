import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l04-em-no-na",
  module: 4,
  lesson: 4,
  title: "Em + o/a → No / Na — Contracted prepositions",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Portuguese contracts em (in) plus o/a/os/as into one word: no, na, nos, nas. Like English do not → don't, but mandatory.",
    culturalNote: "Brazilians never say em o Rio — they say no Rio. Em a praia? Always na praia. The contraction is automatic; getting it wrong sounds foreign.",
  },

  chunks: [
    { id: "no", target: "No", native: "In the (m.)", literal: "em + o", emoji: "🏠", phonetic: "noo", audioRef: null },
    { id: "na", target: "Na", native: "In the (f.)", literal: "em + a", emoji: "🏡", phonetic: "nah", audioRef: null },
    { id: "nos_nas", target: "Nos / Nas", native: "In the (pl. m./f.)", literal: "em + os/as", emoji: "🌐", phonetic: "noos / nahs", audioRef: null },
  ],

  pattern: {
    name: "The contraction rule",
    explanation: "em + o = no, em + a = na, em + os = nos, em + as = nas. Always. With country/city names that take an article, it contracts: no Brasil, no Rio, na Bahia. Without article: em São Paulo, em Londres.",
    examples: [
      { target: "Moro no Brasil.", native: "I live in Brazil." },
      { target: "Estou na praia.", native: "I am at the beach." },
      { target: "As chaves estão na mesa.", native: "The keys are on the table." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "No", right: "In the (m.)" },
      { left: "Na", right: "In the (f.)" },
      { left: "Nas", right: "In the (f. pl.)" },
    ]},
    { type: "fill_blank", instruction: "Praia is feminine", sentence: "Estou ____ praia.", options: ["na", "no", "em"], correct: "na", context: "em + a praia = na praia." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I live in Brazil", correct: ["Moro no Brasil", "moro no Brasil", "Eu moro no Brasil"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "No Rio", correct: true },
      { text: "Em o Rio", correct: false },
      { text: "Em Rio", correct: false },
    ], explanation: "Contraction is mandatory — em + o = no." },
    { type: "build_sentence", instruction: "Build I am at the beach", words: ["praia.", "Estou", "na"], correct: ["Estou", "na", "praia."], translation: "I am at the beach." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "She is in the kitchen", correct: ["Ela está na cozinha", "ela está na cozinha"] },
  ],

  rwenDialogue: {
    intro: "Friend texts asking where you are.",
    lines: [
      { speaker: "npc", target: "Cadê você?", native: "Where are you?" },
      { speaker: "user", userChoices: [
        { target: "Estou na praia, no Rio.", native: "I'm at the beach, in Rio.", correct: true, feedback: "Two contractions in one breath: na praia, no Rio." },
        { target: "Estou em a praia em o Rio", native: "(uncontracted)", correct: false, feedback: "Contract: na praia, no Rio." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell them where — Estou na/no..." },
      ]},
      { speaker: "npc", target: "Que inveja!", native: "I'm so jealous!" },
      { speaker: "rwen", rwenLine: "No, na, nos, nas — the four contractions you will say a hundred times a day in Brazil.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "In Brazil (Portuguese)", correct: ["No Brasil", "no Brasil"] },
      { prompt: "At the beach (Portuguese)", correct: ["Na praia", "na praia"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three sentences with location: Estou no [m. place]. Estou na [f. place]. Out loud, no uncontracted em + o/a.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "WhatsApp call with Brazilian friend who asks where you are, where you live, where you work. All locations.",
    rwenRole: "Bea — friend, ~32, baiana.",
    successCriteria: "User contracts em + article every time (no, na, nos, nas) — never says em o or em a. Picks the right gender too.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
