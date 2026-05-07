import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l04-acai",
  module: 7,
  lesson: 4,
  title: "Açaí — The frozen bowl",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Açaí is religion in Brazil. A frozen bowl, dark purple, topped with banana, granola, mel (honey), morango. Eat it after a beach day — energy and joy.",
    culturalNote: "Açaí comes from the Amazon. In Belém it's a savory side. Everywhere else, it's a frozen sweet bowl. Brazilians say tigela for a bowl. Sizes: P (pequeno), M (médio), G (grande).",
  },

  chunks: [
    { id: "acai", target: "Açaí", native: "Açaí (Amazonian berry)", literal: "Açaí (m.)", emoji: "🫐", phonetic: "ah-sah-EE", audioRef: null },
    { id: "tigela", target: "Tigela", native: "Bowl", literal: "Bowl (f.)", emoji: "🥣", phonetic: "chee-GEH-lah", audioRef: null },
    { id: "complementos", target: "Complementos", native: "Toppings", literal: "Add-ons", emoji: "🍓", phonetic: "kom-pleh-MEN-toos", audioRef: null },
  ],

  pattern: {
    name: "Açaí ordering",
    explanation: "Pick size (P/M/G), add toppings (banana, granola, morango, leite condensado, mel). Order: Uma tigela média, com banana e granola, por favor.",
    examples: [
      { target: "Uma tigela média de açaí.", native: "A medium açaí bowl." },
      { target: "Com banana e granola.", native: "With banana and granola." },
      { target: "Sem leite condensado.", native: "Without condensed milk." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Açaí", right: "Amazonian berry" },
      { left: "Tigela", right: "Bowl" },
      { left: "Complementos", right: "Toppings" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "A small açaí bowl", correct: ["Uma tigela pequena de açaí", "uma tigela pequena de açaí", "Uma tigela P de açaí"] },
    { type: "fill_blank", instruction: "Toppings — with", sentence: "____ banana e granola.", options: ["Com", "Sem", "Por"], correct: "Com", context: "With = com." },
    { type: "multiple_choice", instruction: "Brazilian açaí is...", question: "Choose", options: [
      { text: "A frozen bowl with toppings", correct: true },
      { text: "A hot soup", correct: false },
      { text: "A pasta dish", correct: false },
    ], explanation: "Açaí is a frozen sweet bowl, eaten with toppings." },
    { type: "build_sentence", instruction: "Build A medium açaí with banana, please", words: ["por", "Uma", "média", "tigela", "com", "banana,", "açaí", "favor.", "de"], correct: ["Uma", "tigela", "média", "de", "açaí", "com", "banana,", "por", "favor."], translation: "A medium açaí with banana, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Without condensed milk", correct: ["Sem leite condensado", "sem leite condensado"] },
  ],

  rwenDialogue: {
    intro: "After a Copacabana beach day. The açaí stand has 12 toppings.",
    lines: [
      { speaker: "npc", target: "Tigela de açaí, qual tamanho?", native: "Açaí bowl, what size?" },
      { speaker: "user", userChoices: [
        { target: "Uma média, com banana, granola e mel.", native: "A medium, with banana, granola and honey.", correct: true, feedback: "Size + three toppings — Brazilian açaí pro." },
        { target: "Açaí", native: "(too vague)", correct: false, feedback: "Specify size and toppings — Uma média, com..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order with size + toppings." },
      ]},
      { speaker: "npc", target: "Sai uma média!", native: "Coming up — a medium!" },
      { speaker: "rwen", rwenLine: "Tigela de açaí, com complementos. The post-beach Brazilian ritual.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Açaí bowl (Portuguese)", correct: ["Tigela de açaí", "tigela de açaí", "Tigela de acai"] },
      { prompt: "With banana (Portuguese)", correct: ["Com banana", "com banana"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build the perfect açaí order: Uma tigela [size] de açaí, com [topping], por favor. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Late afternoon Rio — beach açaí stand. Pick size, add three toppings, exclude one (sem X), pay PIX.",
    rwenRole: "Açaí stand worker, ~25, carioca, fast.",
    successCriteria: "User picks size (P/M/G or pequena/média/grande), uses com for toppings AND sem for exclusions, pays via PIX.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
