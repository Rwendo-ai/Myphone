import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l09-er-ir",
  module: 4,
  lesson: 9,
  title: "-ER & -IR verbs",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two more verb families: -er and -ir. Comer (eat), beber (drink), partir (leave). Different endings, same logic.",
    culturalNote: "These cover most everyday Brazilian verbs: comer, beber, viver, decidir, ouvir. The -er and -ir patterns share most endings.",
  },

  chunks: [
    { id: "er_eu", target: "Eu com-O", native: "I eat (-o ending)", literal: "I eat", emoji: "🍴", phonetic: "KOH-moo", audioRef: null },
    { id: "er_voce", target: "Você com-E", native: "You eat (-e ending)", literal: "You eat", emoji: "🫵", phonetic: "KOH-mee", audioRef: null },
    { id: "ir_voce", target: "Você part-E", native: "You leave (-e ending)", literal: "You leave", emoji: "🚪", phonetic: "PAR-chee", audioRef: null },
  ],

  pattern: {
    name: "-er and -ir endings",
    explanation: "-er: eu -o, você -e, nós -emos, eles -em. -ir: eu -o, você -e, nós -imos, eles -em. Almost identical except nós (-emos vs -imos).",
    examples: [
      { target: "Eu como, nós comemos.", native: "I eat, we eat." },
      { target: "Eu bebo, eles bebem.", native: "I drink, they drink." },
      { target: "Eu parto, nós partimos.", native: "I leave, we leave." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu como", right: "I eat" },
      { left: "Você bebe", right: "You drink" },
      { left: "Nós comemos", right: "We eat" },
    ]},
    { type: "fill_blank", instruction: "Conjugate beber for você", sentence: "Você ____ café?", options: ["bebe", "bebo", "bebem"], correct: "bebe", context: "Você + -e = bebe." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I eat at home", correct: ["Como em casa", "como em casa", "Eu como em casa"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Nós bebemos água.", correct: true },
      { text: "Nós bebimos água.", correct: false },
      { text: "Nós bebem água.", correct: false },
    ], explanation: "-er + nós = -emos. Bebemos." },
    { type: "build_sentence", instruction: "Build I drink coffee in the morning", words: ["manhã.", "Bebo", "café", "de"], correct: ["Bebo", "café", "de", "manhã."], translation: "I drink coffee in the morning." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "We eat together", correct: ["Comemos juntos", "comemos juntos", "Nós comemos juntos"] },
  ],

  rwenDialogue: {
    intro: "Friend asks about your morning routine.",
    lines: [
      { speaker: "npc", target: "O que você come de manhã?", native: "What do you eat in the morning?" },
      { speaker: "user", userChoices: [
        { target: "Como pão de queijo e bebo café.", native: "I eat pão de queijo and drink coffee.", correct: true, feedback: "Como (-er) and bebo (-er) — both first-person -o." },
        { target: "Eu como pão e eu bebem café", native: "(wrong conjugation)", correct: false, feedback: "Eu + -o for both: como, bebo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with como/bebo." },
      ]},
      { speaker: "npc", target: "Mesma coisa que eu!", native: "Same as me!" },
      { speaker: "rwen", rwenLine: "Three families now — -ar, -er, -ir. You can conjugate most Brazilian verbs.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I eat (Portuguese)", correct: ["Eu como", "Como", "como", "eu como"] },
      { prompt: "We drink (Portuguese)", correct: ["Nós bebemos", "Bebemos", "bebemos", "nós bebemos"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three -er or -ir verbs across all forms: comer, beber, partir. Eu/você/nós/eles. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Conversation about a typical day with a Brazilian — what you eat, drink, when you leave for work.",
    rwenRole: "Brazilian friend, ~30, curious about your routine.",
    successCriteria: "User conjugates -er/-ir verbs correctly across eu / nós / vocês forms — como/comemos/comem, bebo/bebemos/bebem, parto/partimos/partem.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
