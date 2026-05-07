import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l03-este-essa",
  module: 4,
  lesson: 3,
  title: "Este, Esse, Aquele — This, that, that-over-there",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians have THREE this/that words. Este (this, near me), esse (that, near you), aquele (that, far from both). Distance matters.",
    culturalNote: "In casual Brazilian speech, esse often replaces este — but the three-way distance system is alive and well. Watch a Brazilian point: they use one word for what they are touching, another for what you are touching, a third for far away.",
  },

  chunks: [
    { id: "este", target: "Este / Esta", native: "This (near me)", literal: "This", emoji: "👇", phonetic: "ESS-tee", audioRef: null },
    { id: "esse", target: "Esse / Essa", native: "That (near you)", literal: "That (near listener)", emoji: "👉", phonetic: "ESS-ee", audioRef: null },
    { id: "aquele", target: "Aquele / Aquela", native: "That (far from both)", literal: "That-far", emoji: "👀", phonetic: "ah-KEH-lee", audioRef: null },
  ],

  pattern: {
    name: "Three-distance demonstratives",
    explanation: "Este = aqui (near me). Esse = aí (near you). Aquele = lá (far from both). Each has masculine and feminine forms: este/esta, esse/essa, aquele/aquela.",
    examples: [
      { target: "Este livro (in my hand)", native: "This book" },
      { target: "Esse livro (in your hand)", native: "That book (yours)" },
      { target: "Aquele livro (across the room)", native: "That book (over there)" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Este", right: "This (near me)" },
      { left: "Esse", right: "That (near you)" },
      { left: "Aquele", right: "That (far)" },
    ]},
    { type: "fill_blank", instruction: "Pointing at building across the street", sentence: "____ prédio é alto.", options: ["Aquele", "Este", "Essa"], correct: "Aquele", context: "Far = aquele." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "This book (in my hand)", correct: ["Este livro", "este livro"] },
    { type: "multiple_choice", instruction: "Friend holds a coffee. You comment on it. Which form?", question: "Choose", options: [
      { text: "Esse café", correct: true },
      { text: "Este café", correct: false },
      { text: "Aquele café", correct: false },
    ], explanation: "Near the listener (your friend) = esse." },
    { type: "build_sentence", instruction: "Build That house far away is big", words: ["é", "Aquela", "grande.", "casa"], correct: ["Aquela", "casa", "é", "grande."], translation: "That house (far) is big." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "This bag (near me)", correct: ["Esta bolsa", "esta bolsa"] },
  ],

  rwenDialogue: {
    intro: "Shopping for shoes in São Paulo. Three pairs catch your eye — one in your hand, one on the seller's shelf, one across the store.",
    lines: [
      { speaker: "npc", target: "Qual você gosta?", native: "Which one do you like?" },
      { speaker: "user", userChoices: [
        { target: "Gosto deste, mas aquele lá é mais bonito.", native: "I like this one, but that one over there is nicer.", correct: true, feedback: "Three-distance system at work — deste (mine) vs aquele (far)." },
        { target: "Eu este aquele", native: "(broken)", correct: false, feedback: "Use Gosto deste / Aquele lá é..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Compare with deste / aquele." },
      ]},
      { speaker: "npc", target: "Quer experimentar aquele?", native: "Want to try that one?" },
      { speaker: "rwen", rwenLine: "Three distances, three demonstratives. Brazilians map space with words.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "This book (in my hand)", correct: ["Este livro", "este livro"] },
      { prompt: "That house far away (Portuguese)", correct: ["Aquela casa", "aquela casa"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around. Out loud: Este [near], esse [middle], aquele [far]. Three distances, one room.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Trying on clothes in a São Paulo shop. Compare three items at three distances — get the demonstratives right.",
    rwenRole: "Vendedora — shop assistant, ~30, paulistana.",
    successCriteria: "User uses este/esta for items in own hand, esse/essa for items the seller holds, aquele/aquela for items across the shop, with correct gender agreement.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
