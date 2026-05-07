import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l01-o-a",
  module: 4,
  lesson: 1,
  title: "O & A — The (gendered articles)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 4: the bones of grammar. Today the smallest words — o (the, m.) and a (the, f.). Every Portuguese noun takes one. Learn the noun WITH its article.",
    culturalNote: "Brazilian dictionaries always list nouns with their article — o livro, a casa. Memorising the article with the word saves you a thousand future mistakes.",
  },

  chunks: [
    { id: "o", target: "O", native: "The (m. singular)", literal: "The (m.)", emoji: "👨", phonetic: "oo", audioRef: null },
    { id: "a", target: "A", native: "The (f. singular)", literal: "The (f.)", emoji: "👩", phonetic: "ah", audioRef: null },
    { id: "exemplos", target: "O livro / A casa", native: "The book / The house", literal: "The book (m.) / The house (f.)", emoji: "📚", phonetic: "oo LEE-vroo / ah KAH-zah", audioRef: null },
  ],

  pattern: {
    name: "Singular gendered articles",
    explanation: "O before masculine nouns. A before feminine nouns. Most -o endings are masculine (o livro, o carro), most -a endings are feminine (a casa, a mesa). Exceptions exist — but the rule covers most.",
    examples: [
      { target: "O carro", native: "The car (m.)" },
      { target: "A casa", native: "The house (f.)" },
      { target: "O dia", native: "The day (m. — exception)" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "O", right: "The (m.)" },
      { left: "A", right: "The (f.)" },
      { left: "O livro", right: "The book" },
    ]},
    { type: "fill_blank", instruction: "Casa is feminine", sentence: "____ casa é grande.", options: ["A", "O", "Os"], correct: "A", context: "Feminine = A casa." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The book", correct: ["O livro", "o livro"] },
    { type: "multiple_choice", instruction: "Which pairing is right?", question: "Choose", options: [
      { text: "A mesa", correct: true },
      { text: "O mesa", correct: false },
      { text: "Os mesa", correct: false },
    ], explanation: "Mesa is feminine — A mesa." },
    { type: "build_sentence", instruction: "Build The car is big", words: ["é", "carro", "grande.", "O"], correct: ["O", "carro", "é", "grande."], translation: "The car is big." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The house", correct: ["A casa", "a casa"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend points around their apartment.",
    lines: [
      { speaker: "npc", target: "Olha — o sofá, a TV, a cozinha.", native: "Look — the sofa, the TV, the kitchen." },
      { speaker: "user", userChoices: [
        { target: "O sofá é bonito! A cozinha é grande.", native: "The sofa is nice! The kitchen is big.", correct: true, feedback: "O sofá (m.), a cozinha (f.). Articles matched." },
        { target: "A sofá é bonito", native: "(wrong)", correct: false, feedback: "Sofá ends in -á but is masculine — o sofá." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Comment on the apartment with articles." },
      ]},
      { speaker: "npc", target: "Obrigada!", native: "Thanks!" },
      { speaker: "rwen", rwenLine: "O and A are tiny but they shape every Portuguese sentence. Carry the article with the noun, always.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "The book (Portuguese)", correct: ["O livro", "o livro"] },
      { prompt: "The house (Portuguese)", correct: ["A casa", "a casa"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around. Out loud, name five things WITH their article: o [m. thing], a [f. thing]. Build the article reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend gives you a tour of their apartment in São Paulo. They name things; you reply with the right article.",
    rwenRole: "Camila — friend, ~30, paulistana, casual.",
    successCriteria: "User uses O for masculine nouns (sofá, carro, livro) and A for feminine (casa, mesa, cozinha) — always with article, never bare.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
