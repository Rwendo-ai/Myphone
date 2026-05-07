import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l07-esperanca",
  module: 10,
  lesson: 7,
  title: "Espero, Quero, Sonho — Hopes and dreams",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "What you HOPE in Portuguese: espero, quero, sonho. Espero voltar pro Brasil. Quero aprender mais. Sonho com o futuro.",
    culturalNote: "Brazilians dream out loud. Tenho um sonho de... is a common conversation thread. Saying espero que sim (I hope so) and tomara que (let's hope) sprinkle through everyday Brazilian.",
  },

  chunks: [
    { id: "espero", target: "Espero", native: "I hope", literal: "I hope/wait", emoji: "🤞", phonetic: "es-PEH-roo", audioRef: null },
    { id: "sonho", target: "Sonho com", native: "I dream of", literal: "Dream with", emoji: "💭", phonetic: "SOH-nyoo kohng", audioRef: null },
    { id: "tomara", target: "Tomara que", native: "Let's hope that", literal: "May-it-be that", emoji: "🍀", phonetic: "toh-MAH-rah keh", audioRef: null },
  ],

  pattern: {
    name: "Hope expressions",
    explanation: "Espero + verb (espero voltar). Sonho com + noun (sonho com o Brasil). Tomara que + clause (tomara que dê certo — let's hope it works out). Three layers of Brazilian hope.",
    examples: [
      { target: "Espero voltar logo.", native: "I hope to come back soon." },
      { target: "Sonho com o Rio.", native: "I dream of Rio." },
      { target: "Tomara que dê certo.", native: "Let's hope it works." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Espero", right: "I hope" },
      { left: "Sonho com", right: "I dream of" },
      { left: "Tomara que", right: "Let's hope" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I hope to return", correct: ["Espero voltar", "Eu espero voltar", "espero voltar"] },
    { type: "fill_blank", instruction: "Dream construction", sentence: "Sonho ____ Brasil.", options: ["com o", "do", "em o"], correct: "com o", context: "Sonhar COM + thing." },
    { type: "multiple_choice", instruction: "Brazilian hope expression?", question: "Choose", options: [
      { text: "Tomara que dê certo!", correct: true },
      { text: "Sou que dê certo", correct: false },
      { text: "Estou que dê certo", correct: false },
    ], explanation: "Tomara que + subjunctive — let's hope." },
    { type: "build_sentence", instruction: "Build I dream of speaking Portuguese fluently", words: ["fluentemente.", "Sonho", "português", "falar", "em"], correct: ["Sonho", "em", "falar", "português", "fluentemente."], translation: "I dream of speaking Portuguese fluently." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I hope so", correct: ["Espero que sim", "Eu espero que sim", "espero que sim"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks about your future.",
    lines: [
      { speaker: "npc", target: "Quais são seus sonhos?", native: "What are your dreams?" },
      { speaker: "user", userChoices: [
        { target: "Espero falar português fluente. Sonho com voltar pro Rio em dezembro.", native: "I hope to speak Portuguese fluently. I dream of returning to Rio in December.", correct: true, feedback: "Hope + dream chained. The future flows in Portuguese." },
        { target: "Sou sonho", native: "(wrong)", correct: false, feedback: "Use espero + verb / sonho com + noun." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Share a dream." },
      ]},
      { speaker: "npc", target: "Tomara que dê certo!", native: "Let's hope it works!" },
      { speaker: "rwen", rwenLine: "Three Brazilian hope words: espero, sonho, tomara. The future has shape now.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I hope so (Portuguese)", correct: ["Espero que sim", "Eu espero que sim", "espero que sim"] },
      { prompt: "Let's hope (Portuguese)", correct: ["Tomara que", "Tomara", "tomara"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three hopes: Espero + verb. Sonho com + noun. Tomara que + clause. Three Brazilian futures.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Year-end reflection with a Brazilian friend. Share three hopes for next year — in Portuguese, with feeling.",
    rwenRole: "Friend, ~30, also reflecting.",
    successCriteria: "User uses Espero + verb (concrete hope), Sonho com + noun (bigger dream), Tomara que (general wish), shares 3+ specific hopes.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
