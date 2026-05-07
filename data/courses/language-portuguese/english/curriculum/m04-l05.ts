import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l05-de-do-da",
  module: 4,
  lesson: 5,
  title: "De + o/a → Do / Da — More contractions",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Same rule, new preposition. De (of/from) plus o/a/os/as becomes do, da, dos, das. The contraction is mandatory — every time.",
    culturalNote: "Brazilians say sou do Brasil (not de o Brasil), gosto da praia (not de a praia). The contraction is the rhythm of natural Portuguese.",
  },

  chunks: [
    { id: "do", target: "Do", native: "Of/from the (m.)", literal: "de + o", emoji: "👈", phonetic: "doo", audioRef: null },
    { id: "da", target: "Da", native: "Of/from the (f.)", literal: "de + a", emoji: "👉", phonetic: "dah", audioRef: null },
    { id: "dos_das", target: "Dos / Das", native: "Of/from the (pl.)", literal: "de + os/as", emoji: "🔁", phonetic: "doos / dahs", audioRef: null },
  ],

  pattern: {
    name: "De-contraction",
    explanation: "de + o = do, de + a = da, de + os = dos, de + as = das. Used for origin (sou do Rio), possession (a casa do João), and gostar (gosto da praia).",
    examples: [
      { target: "Sou do Brasil.", native: "I'm from Brazil." },
      { target: "Gosto da praia.", native: "I like the beach." },
      { target: "O carro do João.", native: "João's car." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Do", right: "Of the (m.)" },
      { left: "Da", right: "Of the (f.)" },
      { left: "Das", right: "Of the (f. pl.)" },
    ]},
    { type: "fill_blank", instruction: "Praia is feminine", sentence: "Gosto ____ praia.", options: ["da", "do", "de"], correct: "da", context: "de + a praia = da praia." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am from Brazil", correct: ["Sou do Brasil", "sou do Brasil", "Eu sou do Brasil"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Sou do Rio", correct: true },
      { text: "Sou de o Rio", correct: false },
      { text: "Sou da Rio", correct: false },
    ], explanation: "de + o = do. Rio takes the masculine article." },
    { type: "build_sentence", instruction: "Build João's car", words: ["do", "O", "João.", "carro"], correct: ["O", "carro", "do", "João."], translation: "João's car." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I like the beach", correct: ["Gosto da praia", "gosto da praia", "Eu gosto da praia"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks about your origins and likes.",
    lines: [
      { speaker: "npc", target: "Você é de onde?", native: "Where are you from?" },
      { speaker: "user", userChoices: [
        { target: "Sou da Inglaterra. Gosto do Brasil!", native: "I'm from England. I like Brazil!", correct: true, feedback: "Da Inglaterra (f.), do Brasil (m.). Two contractions, two genders." },
        { target: "Sou de a Inglaterra", native: "(uncontracted)", correct: false, feedback: "Contract — da Inglaterra." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with sou da/do + place." },
      ]},
      { speaker: "npc", target: "Que legal!", native: "How nice!" },
      { speaker: "rwen", rwenLine: "Do, da, dos, das — said a thousand times daily in Brazil. You just said two of them.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am from Brazil (Portuguese)", correct: ["Sou do Brasil", "sou do Brasil", "Eu sou do Brasil"] },
      { prompt: "I like the beach (Portuguese)", correct: ["Gosto da praia", "gosto da praia"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three sentences: Sou do/da [origin]. Gosto do/da [thing]. A casa do/da [person]. Three contractions out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Conversation with a Brazilian about origins, likes, and possessions. Use de + article contractions throughout.",
    rwenRole: "Camila — paulistana friend, ~30.",
    successCriteria: "User contracts de + article every time (do, da, dos, das), picks the right gender, and never says de o or de a.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
