import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l08-sobremesa",
  module: 7,
  lesson: 8,
  title: "Sobremesa — Brazilian desserts",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After the meal: a sobremesa. Brigadeiro (chocolate fudge ball), pudim (caramel flan), quindim (coconut yolk), brigadeirão (the giant brigadeiro).",
    culturalNote: "Brazilian desserts are sweet — leite condensado runs through everything. At parties, brigadeiros are passed around in tiny paper cups. Pudim de leite is the classic family dessert.",
  },

  chunks: [
    { id: "sobremesa", target: "Sobremesa", native: "Dessert", literal: "Over-table (f.)", emoji: "🍮", phonetic: "soh-breh-MEH-zah", audioRef: null },
    { id: "brigadeiro", target: "Brigadeiro", native: "Chocolate fudge ball", literal: "Brigadeiro (m.)", emoji: "🍫", phonetic: "bree-gah-DAY-roo", audioRef: null },
    { id: "pudim", target: "Pudim", native: "Caramel flan", literal: "Pudding (m.)", emoji: "🍮", phonetic: "poo-JEENG", audioRef: null },
  ],

  pattern: {
    name: "Sweet ordering",
    explanation: "Vai querer sobremesa? Quero brigadeiro. Quero pudim de leite. Brigadeiros come in -inho, -ão sizes. Pudim de leite is the standard caramel flan.",
    examples: [
      { target: "Quero pudim de leite.", native: "I want milk pudim." },
      { target: "Tem brigadeiro?", native: "Got brigadeiro?" },
      { target: "A sobremesa do dia.", native: "Dessert of the day." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Sobremesa", right: "Dessert" },
      { left: "Brigadeiro", right: "Chocolate fudge ball" },
      { left: "Pudim", right: "Flan" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Dessert", correct: ["Sobremesa", "sobremesa"] },
    { type: "fill_blank", instruction: "Pudim de leite — milk pudim", sentence: "Pudim ____ leite.", options: ["de", "com", "para"], correct: "de", context: "Pudim DE leite (made of milk)." },
    { type: "multiple_choice", instruction: "Brazilian birthday party dessert?", question: "Choose", options: [
      { text: "Brigadeiro", correct: true },
      { text: "Tiramisù", correct: false },
      { text: "Cheesecake", correct: false },
    ], explanation: "Brigadeiros are the iconic Brazilian birthday treat." },
    { type: "build_sentence", instruction: "Build I want a flan, please", words: ["por", "Quero", "favor.", "um", "pudim,"], correct: ["Quero", "um", "pudim,", "por", "favor."], translation: "I want a flan, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Got brigadeiro?", correct: ["Tem brigadeiro?", "tem brigadeiro?", "Tem brigadeiro", "tem brigadeiro"] },
  ],

  rwenDialogue: {
    intro: "End of dinner. Server returns with the dessert tray.",
    lines: [
      { speaker: "npc", target: "Vai querer sobremesa? Tem pudim, brigadeirão e mousse.", native: "Want dessert? We have pudim, big brigadeiro, and mousse." },
      { speaker: "user", userChoices: [
        { target: "Vou querer um pudim, por favor.", native: "I'll have a pudim, please.", correct: true, feedback: "Vou querer + pudim — Brazilian classic choice." },
        { target: "Não obrigado", native: "(rude refusal)", correct: false, feedback: "Brazilians soften — Hoje não, valeu! works better than blunt no." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Choose a sweet — pudim." },
      ]},
      { speaker: "npc", target: "Saindo um pudim!", native: "One pudim coming up!" },
      { speaker: "rwen", rwenLine: "Brazilian sobremesa, ordered. The meal is complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Dessert (Portuguese)", correct: ["Sobremesa", "sobremesa"] },
      { prompt: "Brigadeiro (Portuguese)", correct: ["Brigadeiro", "brigadeiro"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order three Brazilian desserts: Pudim de leite. Brigadeiro. Mousse de maracujá. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "End of a Brazilian family dinner. Sobremesa offered. Pick one, compliment it after, ask for the recipe.",
    rwenRole: "Family matriarch, ~60, proud of her pudim.",
    successCriteria: "User accepts sobremesa with Vou querer or Aceito sim, compliments after with Que delícia!, asks Como faz?",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
