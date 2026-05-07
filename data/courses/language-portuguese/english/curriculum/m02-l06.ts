import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l06-eu-quero",
  module: 2,
  lesson: 6,
  title: "Eu quero — I want / I'd like",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "To order anything in Brazil — a coffee, a beer, an açaí — you need: Eu quero. I want. Pair it with por favor and you sound polite.",
    culturalNote: "In Brazil, eu quero is normal — not rude as it would be in some cultures. Adding por favor softens it. The waiter will not flinch.",
  },

  chunks: [
    { id: "eu_quero", target: "Eu quero", native: "I want / I'd like", literal: "I want", emoji: "🤲", phonetic: "EH-oo KEH-roo", audioRef: null },
    { id: "um_cafe", target: "Um café", native: "A coffee", literal: "A (m.) coffee", emoji: "☕", phonetic: "oong kah-FEH", audioRef: null },
    { id: "uma_agua", target: "Uma água", native: "A water", literal: "A (f.) water", emoji: "💧", phonetic: "OO-mah AH-gwah", audioRef: null },
  ],

  pattern: {
    name: "Um (m.) vs Uma (f.) — gendered articles",
    explanation: "Café is masculine: um café. Água is feminine: uma água. Every Portuguese noun has a gender, and the article matches. You will see this every single lesson from now on.",
    examples: [
      { target: "Um café, por favor.", native: "A coffee, please." },
      { target: "Uma água, por favor.", native: "A water, please." },
      { target: "Eu quero um pão de queijo.", native: "I want a cheese bread." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu quero", right: "I want" },
      { left: "Um café", right: "A coffee" },
      { left: "Uma água", right: "A water" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want a coffee", correct: ["Eu quero um café", "eu quero um café", "Quero um café", "quero um cafe"] },
    { type: "fill_blank", instruction: "Pick the right article", sentence: "Eu quero ____ água.", options: ["uma", "um", "o"], correct: "uma", context: "Água is feminine — uma." },
    { type: "multiple_choice", instruction: "Order a coffee politely", question: "Choose", options: [
      { text: "Um café, por favor", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Um café, por favor — short, polite, perfect." },
    { type: "build_sentence", instruction: "Build I want a water", words: ["água.", "Eu", "uma", "quero"], correct: ["Eu", "quero", "uma", "água."], translation: "I want a water." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "A water, please", correct: ["Uma água, por favor", "uma água, por favor", "Uma agua, por favor"] },
  ],

  rwenDialogue: {
    intro: "At a padaria in Salvador. You walk to the counter.",
    lines: [
      { speaker: "npc", target: "Pois não?", native: "What can I get you?" },
      { speaker: "user", userChoices: [
        { target: "Um café e uma água, por favor.", native: "A coffee and a water, please.", correct: true, feedback: "Gendered articles right (um café, uma água) and softened with por favor." },
        { target: "Café água", native: "Coffee water (no articles)", correct: false, feedback: "Add the gendered articles — um café, uma água." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order first — Um café, por favor." },
      ]},
      { speaker: "npc", target: "Saindo!", native: "Coming up!" },
      { speaker: "rwen", rwenLine: "Two genders, two articles, no problem. Brazilian counter ordering: unlocked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I want (Portuguese)", correct: ["Eu quero", "eu quero", "Quero", "quero"] },
      { prompt: "A coffee (Portuguese)", correct: ["Um café", "um café", "Um cafe", "um cafe"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, order three things: Um café. Uma água. Um pão de queijo. Get the gendered articles in your mouth.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "A small bakery in Salvador. Order a coffee, a water, and a pão de queijo. Get the genders right.",
    rwenRole: "Cashier — friendly, ~30, baiana.",
    successCriteria: "User says Eu quero / Quero, picks um for café and pão (m.) and uma for água (f.), and adds por favor.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
