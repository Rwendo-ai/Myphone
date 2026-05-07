import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l02-cafe-da-manha",
  module: 7,
  lesson: 2,
  title: "Café da manhã — Brazilian breakfast",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian breakfast (café da manhã) is light: coffee, bread, fruit, sometimes pão de queijo. The big meal is lunch.",
    culturalNote: "Pão de queijo — small cheese balls — are Brazil's gift to the world. Café com leite (coffee with milk) is the morning ritual. Hotel breakfasts add cold cuts, fruit, juice, eggs.",
  },

  chunks: [
    { id: "cafe_da_manha", target: "Café da manhã", native: "Breakfast", literal: "Coffee of morning", emoji: "🥐", phonetic: "kah-FEH dah mah-NYAH", audioRef: null },
    { id: "pao_de_queijo", target: "Pão de queijo", native: "Cheese bread", literal: "Bread of cheese", emoji: "🧀", phonetic: "powng jee KAY-zhoo", audioRef: null },
    { id: "suco", target: "Suco", native: "Juice", literal: "Juice", emoji: "🧃", phonetic: "SOO-koo", audioRef: null },
  ],

  pattern: {
    name: "Breakfast vocabulary",
    explanation: "Café da manhã has fixed parts: pão (bread), pão de queijo, manteiga (butter), queijo, suco de laranja (orange juice), café com leite. Light. Sweet. Quick.",
    examples: [
      { target: "No café da manhã, tem pão de queijo.", native: "At breakfast, there's pão de queijo." },
      { target: "Quero suco de laranja.", native: "I want orange juice." },
      { target: "Café com leite, por favor.", native: "Coffee with milk, please." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Café da manhã", right: "Breakfast" },
      { left: "Pão de queijo", right: "Cheese bread" },
      { left: "Suco", right: "Juice" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Orange juice", correct: ["Suco de laranja", "suco de laranja"] },
    { type: "fill_blank", instruction: "Coffee with milk", sentence: "Café ____ leite.", options: ["com", "de", "para"], correct: "com", context: "Café com leite — with." },
    { type: "multiple_choice", instruction: "Iconic Brazilian breakfast item?", question: "Choose", options: [
      { text: "Pão de queijo", correct: true },
      { text: "Pizza", correct: false },
      { text: "Hambúrguer", correct: false },
    ], explanation: "Pão de queijo is the iconic Brazilian breakfast bite." },
    { type: "build_sentence", instruction: "Build I want pão de queijo and a coffee", words: ["queijo", "Quero", "pão", "café.", "de", "e", "um"], correct: ["Quero", "pão", "de", "queijo", "e", "um", "café."], translation: "I want pão de queijo and a coffee." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Coffee with milk", correct: ["Café com leite", "café com leite"] },
  ],

  rwenDialogue: {
    intro: "Morning at a São Paulo padaria. Behind the glass: warm pão de queijo.",
    lines: [
      { speaker: "npc", target: "Bom dia, o que vai querer?", native: "Good morning, what do you want?" },
      { speaker: "user", userChoices: [
        { target: "Bom dia! Um café com leite e dois pães de queijo, por favor.", native: "Good morning! A coffee with milk and two pão de queijo, please.", correct: true, feedback: "Perfect Brazilian breakfast order." },
        { target: "Pão", native: "(too short)", correct: false, feedback: "Specify — café com leite e pão de queijo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order first — Bom dia, um café..." },
      ]},
      { speaker: "npc", target: "Saiu!", native: "Coming up!" },
      { speaker: "rwen", rwenLine: "Pão de queijo, café com leite — Brazilian morning unlocked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Pão de queijo (Portuguese)", correct: ["Pão de queijo", "pão de queijo", "Pao de queijo", "pao de queijo"] },
      { prompt: "Coffee with milk (Portuguese)", correct: ["Café com leite", "café com leite"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order a Brazilian breakfast out loud: Quero um café com leite e dois pães de queijo. Three reps.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Hotel breakfast in São Paulo. Order at the buffet bar — coffee, juice, eggs, pão de queijo.",
    rwenRole: "Hotel breakfast staff, ~30, friendly.",
    successCriteria: "User orders multiple breakfast items with por favor, picks a juice flavour (de laranja / de manga), specifies café com leite or café puro.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
