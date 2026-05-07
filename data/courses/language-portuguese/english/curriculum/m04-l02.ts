import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l02-os-as",
  module: 4,
  lesson: 2,
  title: "Os & As — Plurals",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Singular o and a become plural os and as. The article matches AND the noun gets an -s. Os livros (the books). As casas (the houses).",
    culturalNote: "Brazilians simplify pluralisation in spoken language — sometimes dropping the final -s sound, but never in writing. The article still tells you whether it is plural: os carros vs o carro.",
  },

  chunks: [
    { id: "os", target: "Os", native: "The (m. plural)", literal: "The (m.pl.)", emoji: "👨👨", phonetic: "oos", audioRef: null },
    { id: "as", target: "As", native: "The (f. plural)", literal: "The (f.pl.)", emoji: "👩👩", phonetic: "ahs", audioRef: null },
    { id: "plural_s", target: "+ s", native: "Add -s for plural noun", literal: "Plural marker", emoji: "➕", phonetic: "ess", audioRef: null },
  ],

  pattern: {
    name: "Plural agreement chain",
    explanation: "Singular → plural: o livro → os livros, a casa → as casas, o pão → os pães (special). The article AND the noun BOTH change.",
    examples: [
      { target: "O carro → Os carros", native: "The car → The cars" },
      { target: "A casa → As casas", native: "The house → The houses" },
      { target: "O irmão → Os irmãos", native: "The brother → The brothers" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Os", right: "The (m. pl.)" },
      { left: "As", right: "The (f. pl.)" },
      { left: "Os livros", right: "The books" },
    ]},
    { type: "fill_blank", instruction: "Plural feminine", sentence: "____ casas são grandes.", options: ["As", "Os", "A"], correct: "As", context: "Feminine plural — as casas." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The books", correct: ["Os livros", "os livros"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "As mesas são bonitas.", correct: true },
      { text: "O mesas são bonitos.", correct: false },
      { text: "As mesa são bonita.", correct: false },
    ], explanation: "Plural feminine: as mesas (article + noun + adjective all agree)." },
    { type: "build_sentence", instruction: "Build The cars are red", words: ["vermelhos.", "Os", "são", "carros"], correct: ["Os", "carros", "são", "vermelhos."], translation: "The cars are red." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The houses", correct: ["As casas", "as casas"] },
  ],

  rwenDialogue: {
    intro: "At a market in Rio. Vendor describes the day's stock.",
    lines: [
      { speaker: "npc", target: "Olha as frutas! E os legumes também.", native: "Look at the fruits! And the vegetables too." },
      { speaker: "user", userChoices: [
        { target: "As frutas estão bonitas! Os legumes parecem frescos.", native: "The fruits look beautiful! The vegetables look fresh.", correct: true, feedback: "Plural articles + plural adjectives. Agreement chain holds." },
        { target: "A fruta", native: "(singular)", correct: false, feedback: "He said frutas (plural) — match with as frutas." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Comment with as / os." },
      ]},
      { speaker: "npc", target: "Quer levar?", native: "Want to take some?" },
      { speaker: "rwen", rwenLine: "Plural article + plural noun + plural adjective. Agreement triple-check: passed.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "The books (Portuguese)", correct: ["Os livros", "os livros"] },
      { prompt: "The houses (Portuguese)", correct: ["As casas", "as casas"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pluralise three things you said yesterday: O carro → Os carros. Out loud, three pairs.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Walking through a feirinha in Salvador. Talk about multiple items — fruits, prices, people. Use plurals.",
    rwenRole: "Vendor — Salvador, ~50, friendly.",
    successCriteria: "User uses Os/As for plurals, adds -s to nouns and adjectives, and chains agreement (article + noun + adjective).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
