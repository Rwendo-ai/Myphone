import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l03-comer-beber",
  module: 8,
  lesson: 3,
  title: "Comer & Beber — Eat and drink",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Comer (eat) and beber (drink) are -er verbs. Eu como, eu bebo. Layer with foods and drinks for whole-day routines.",
    culturalNote: "Brazilians often say tomar instead of beber for drinks: tomar café, tomar cerveja. Beber is more for water and abstract drinking.",
  },

  chunks: [
    { id: "comer", target: "Comer", native: "To eat", literal: "Eat (-er)", emoji: "🍴", phonetic: "ko-MAYR", audioRef: null },
    { id: "beber_tomar", target: "Beber / Tomar", native: "To drink / Have (drink)", literal: "Drink", emoji: "🥤", phonetic: "beh-BAYR / toh-MAR", audioRef: null },
    { id: "almocar_jantar", target: "Almoçar / Jantar", native: "Have lunch / Have dinner", literal: "Lunch / Dinner (verbs)", emoji: "🍽️", phonetic: "ahl-mo-SAR / zhan-TAR", audioRef: null },
  ],

  pattern: {
    name: "Three meal verbs + comer/beber",
    explanation: "Eu como, eu bebo, eu tomo café, eu almoço, eu janto. Brazilians use almoçar and jantar as verbs themselves: Vou almoçar (I'm going to have lunch).",
    examples: [
      { target: "Eu almoço ao meio-dia.", native: "I have lunch at noon." },
      { target: "Tomo café às oito.", native: "I have coffee at 8." },
      { target: "Janto com a família.", native: "I have dinner with the family." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Comer", right: "To eat" },
      { left: "Tomar café", right: "Have coffee" },
      { left: "Almoçar", right: "Have lunch" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have lunch at noon", correct: ["Almoço ao meio-dia", "almoço ao meio-dia"] },
    { type: "fill_blank", instruction: "Drink coffee — Brazilian way", sentence: "____ café de manhã.", options: ["Tomo", "Bebo", "Como"], correct: "Tomo", context: "Tomar café — for coffee, the BR verb." },
    { type: "multiple_choice", instruction: "What time do you have dinner? (Brazilian)", question: "Choose", options: [
      { text: "Janto às oito.", correct: true },
      { text: "Sou jantar às oito.", correct: false },
      { text: "Estou janto.", correct: false },
    ], explanation: "Jantar is its own verb — eu janto." },
    { type: "build_sentence", instruction: "Build I have coffee with milk in the morning", words: ["leite", "Tomo", "manhã.", "café", "com", "de"], correct: ["Tomo", "café", "com", "leite", "de", "manhã."], translation: "I have coffee with milk in the morning." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "We have dinner together", correct: ["Jantamos juntos", "Nós jantamos juntos", "jantamos juntos"] },
  ],

  rwenDialogue: {
    intro: "Brazilian flatmate asks about meal plans.",
    lines: [
      { speaker: "npc", target: "Já almoçou?", native: "Have you had lunch?" },
      { speaker: "user", userChoices: [
        { target: "Ainda não. Vou almoçar agora.", native: "Not yet. I'll have lunch now.", correct: true, feedback: "Vou almoçar — Brazilian future-near. Smooth." },
        { target: "Eu sou almoço", native: "(wrong)", correct: false, feedback: "Use vou almoçar." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer about lunch — Vou almoçar / Já almocei." },
      ]},
      { speaker: "npc", target: "Tem feijoada na geladeira!", native: "There's feijoada in the fridge!" },
      { speaker: "rwen", rwenLine: "Comer, beber, tomar, almoçar, jantar — the verbs of a Brazilian eating day.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I have coffee in the morning (Portuguese)", correct: ["Tomo café de manhã", "Eu tomo café de manhã", "tomo café de manhã"] },
      { prompt: "I have lunch (Portuguese)", correct: ["Eu almoço", "Almoço", "almoço"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three meal-time sentences: Tomo café às X. Almoço ao meio-dia. Janto às Y.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend asks about your typical day's meals — when, what, with whom.",
    rwenRole: "Brazilian friend, ~30, curious about your routine.",
    successCriteria: "User uses tomar café, almoçar, jantar (NOT comer café da manhã), pairs with às + time, mentions com quem when relevant.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
