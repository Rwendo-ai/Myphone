import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l07-de-onde",
  module: 1,
  lesson: 7,
  title: "De onde você é? — Where are you from?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After name comes origin. De onde você é? — where are you from? Brazilians ask this fast — which state, which city. They map you instantly.",
    culturalNote: "Brazil is enormous and regional. A carioca (Rio), a paulistano (São Paulo), a baiano (Bahia), a mineiro (Minas Gerais) — the country is a mosaic. Saying which state matters more than which country, sometimes.",
  },

  chunks: [
    { id: "de_onde", target: "De onde você é?", native: "Where are you from?", literal: "From where you are?", emoji: "🌍", phonetic: "jee OHN-jee voh-SAY EH", audioRef: null },
    { id: "sou_de", target: "Eu sou de", native: "I am from", literal: "I am from", emoji: "🏠", phonetic: "EH-oo SOH jee", audioRef: null },
    { id: "moro_em", target: "Eu moro em", native: "I live in", literal: "I live in", emoji: "🏡", phonetic: "EH-oo MOH-roo AYNG", audioRef: null },
  ],

  pattern: {
    name: "De (from) vs Em (in)",
    explanation: "Sou de = where you are from (origin). Moro em = where you live now. Brazilians often ask both, in that order. Sou de Londres, mas moro em São Paulo.",
    examples: [
      { target: "Sou de Londres.", native: "I am from London." },
      { target: "Moro em São Paulo.", native: "I live in São Paulo." },
      { target: "De onde você é?", native: "Where are you from?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "De onde você é?", right: "Where are you from?" },
      { left: "Eu sou de", right: "I am from" },
      { left: "Eu moro em", right: "I live in" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am from London", correct: ["Eu sou de Londres", "eu sou de Londres", "Sou de Londres", "sou de Londres"] },
    { type: "fill_blank", instruction: "Pick the right preposition", sentence: "Eu moro ____ São Paulo.", options: ["em", "de", "para"], correct: "em", context: "Live in = moro em." },
    { type: "multiple_choice", instruction: "How would you ask a new acquaintance where they are from?", question: "Choose", options: [
      { text: "De onde você é?", correct: true },
      { text: "Como vai?", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "De onde você é? is the standard Brazilian where-from question." },
    { type: "build_sentence", instruction: "Build I live in Rio", words: ["Rio.", "Eu", "no", "moro"], correct: ["Eu", "moro", "no", "Rio."], translation: "I live in Rio. (em + o = no)" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where are you from?", correct: ["De onde você é?", "de onde você é?", "De onde voce e?", "de onde voce e?"] },
  ],

  rwenDialogue: {
    intro: "At a hostel in Rio. A Brazilian backpacker strikes up a chat.",
    lines: [
      { speaker: "npc", target: "Oi! De onde você é?", native: "Hi! Where are you from?" },
      { speaker: "user", userChoices: [
        { target: "Sou de Londres. E você?", native: "I am from London. And you?", correct: true, feedback: "Origin given, question bounced. Brazilian rhythm holds." },
        { target: "Moro em Londres", native: "I live in London", correct: false, feedback: "Close — but he asked origin (de onde), not residence (moro em). Use sou de." },
        { target: "Sim", native: "Yes", correct: false, feedback: "He asked where, not yes/no — try sou de + place." },
      ]},
      { speaker: "npc", target: "Sou de Salvador, mas moro aqui no Rio.", native: "I am from Salvador, but I live here in Rio." },
      { speaker: "rwen", rwenLine: "Origin AND residence — the full Brazilian map. He stacked both.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Where are you from? (Portuguese)", correct: ["De onde você é?", "de onde você é?", "De onde voce e?", "de onde voce e?"] },
      { prompt: "I am from London (Portuguese)", correct: ["Eu sou de Londres", "eu sou de Londres", "Sou de Londres", "sou de Londres"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Sou de [your city]. Moro em [where you live]. Stack origin and residence — Brazilians always do.",
    rwenSignoff: "Até a próxima!",
  },

  phase8: {
    scenario: "You are at a hostel common room in Lapa, Rio. A Brazilian guest sits down with a beer and asks where you are from.",
    rwenRole: "Rafael — backpacker, ~26, baiano (from Bahia) but living in Rio.",
    successCriteria: "User answers with Sou de [city] (origin) AND adds Moro em [city] when relevant, bounces back with E você?, and does not just answer the literal question without keeping the conversation flowing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
