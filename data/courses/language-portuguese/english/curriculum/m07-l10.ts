import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l10-food-cap",
  module: 7,
  lesson: 10,
  title: "A Brazilian Food Day — Module 7 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7 capstone. A whole day of Brazilian food in one conversation. Café da manhã, almoço, lanche, jantar, sobremesa. The full belly tour.",
    culturalNote: "A Brazilian food day has rhythm: light café da manhã, big almoço (12-2pm), lanche da tarde (3-4pm), late jantar (8pm+). Sobremesa always. The day is structured around meals, not the other way round.",
  },

  chunks: [
    { id: "review_feijao", target: "Feijão e arroz", native: "The Brazilian base", literal: "Beans and rice", emoji: "🫘🍚", phonetic: "fay-ZHOWNG ee ah-HOSE", audioRef: null },
    { id: "review_caipirinha", target: "Caipirinha & Cerveja", native: "Brazilian drinks", literal: "Drinks", emoji: "🍺🍸", phonetic: "kai-pee-REE-nyah", audioRef: null },
    { id: "review_acai", target: "Açaí na tigela", native: "Açaí in a bowl", literal: "Açaí ritual", emoji: "🫐", phonetic: "ah-sah-EE", audioRef: null },
  ],

  pattern: {
    name: "The Brazilian food vocabulary",
    explanation: "Café da manhã, almoço, lanche, jantar, sobremesa — five meal moments. Quero / Vou querer — order. Estou com fome / cheio — state. Tem? — availability. Por favor / obrigado/a — frame.",
    examples: [
      { target: "Quero um café e pão de queijo.", native: "I want a coffee and pão de queijo." },
      { target: "Vou querer feijoada com arroz.", native: "I'll have feijoada with rice." },
      { target: "Estou cheio, mas a sobremesa tá tentadora.", native: "I'm full, but the dessert is tempting." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the meal to its type", pairs: [
      { left: "Café da manhã", right: "Breakfast (light)" },
      { left: "Almoço", right: "Lunch (big)" },
      { left: "Sobremesa", right: "Dessert" },
    ]},
    { type: "multiple_choice", instruction: "Iconic Brazilian Sunday meal?", question: "Choose", options: [
      { text: "Feijoada com arroz e cerveja", correct: true },
      { text: "Pizza com Coca", correct: false },
      { text: "Sushi", correct: false },
    ], explanation: "Feijoada — black bean stew with pork — is THE Saturday/Sunday Brazilian classic." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want a coffee with milk", correct: ["Quero um café com leite", "quero um café com leite"] },
    { type: "fill_blank", instruction: "Pick the right state verb", sentence: "Estou ____ fome.", options: ["com", "de", "em"], correct: "com", context: "Estar COM + state." },
    { type: "build_sentence", instruction: "Build I'll have a cold beer and rice with beans", words: ["e", "feijão.", "arroz", "cerveja", "Vou", "querer", "uma", "com", "gelada"], correct: ["Vou", "querer", "uma", "cerveja", "gelada", "e", "arroz", "com", "feijão."], translation: "I'll have a cold beer and rice with beans." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm full, thanks", correct: ["Estou cheio, obrigado", "Estou cheia, obrigada", "estou cheio, obrigado", "estou cheia, obrigada"] },
  ],

  rwenDialogue: {
    intro: "Saturday in Rio. Run a full Brazilian food day with me — breakfast, lunch, snack, dinner, dessert.",
    lines: [
      { speaker: "rwen", rwenLine: "Manhã. Padaria em Copacabana. O que você pede?" },
      { speaker: "user", userChoices: [
        { target: "Bom dia! Um café com leite e dois pães de queijo.", native: "Good morning! Coffee with milk and two pão de queijo.", correct: true, feedback: "Brazilian breakfast: nailed." },
        { target: "Café", native: "(too short)", correct: false, feedback: "Frame: Bom dia, um café com leite e..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order with greeting + items." },
      ]},
      { speaker: "rwen", rwenLine: "Meio-dia. PF restaurant. O almoço?" },
      { speaker: "user", userChoices: [
        { target: "Vou querer feijoada com arroz, e uma cerveja gelada.", native: "I'll have feijoada with rice, and a cold beer.", correct: true, feedback: "Saturday feijoada + cerveja — pure Brazilian noon." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Order specific — Vou querer feijoada..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order the meal." },
      ]},
      { speaker: "rwen", rwenLine: "Tarde. Praia. Quente. Açaí stand. Pede o quê?" },
      { speaker: "user", userChoices: [
        { target: "Uma tigela média de açaí, com banana e granola.", native: "A medium açaí bowl, with banana and granola.", correct: true, feedback: "Beach açaí — size and toppings, Brazilian-style." },
        { target: "Açaí", native: "(no detail)", correct: false, feedback: "Specify size and toppings." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order the açaí with size + toppings." },
      ]},
      { speaker: "rwen", rwenLine: "Noite. Restaurante. Final. Sobremesa?" },
      { speaker: "user", userChoices: [
        { target: "Estou quase cheio/a, mas vou querer um pudim de leite.", native: "I'm almost full, but I'll have a milk pudim.", correct: true, feedback: "Estado + sobremesa choice. Brazilian eats: complete." },
        { target: "Não", native: "(rude refusal)", correct: false, feedback: "Soften — Estou cheio/a, mas vou querer..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Choose a sobremesa." },
      ]},
      { speaker: "rwen", rwenLine: "Café da manhã, almoço, lanche, sobremesa — você comeu o Brasil em quatro lições. Module 7: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I'll have a cold beer (Portuguese)", correct: ["Vou querer uma cerveja gelada", "vou querer uma cerveja gelada"] },
      { prompt: "Açaí bowl (Portuguese)", correct: ["Tigela de açaí", "tigela de açaí", "Tigela de acai"] },
    ],
  },

  mission: {
    title: "Your Module 7 Mission",
    task: "Run a Brazilian food day in your head out loud — breakfast, lunch, beach açaí, dinner, dessert. Five Portuguese orders.",
    rwenSignoff: "A culinária brasileira agora é tua. Module 8 — daily verbs. Tchau!",
  },

  phase8: {
    scenario: "Full day in Rio across five eating moments: padaria, PF, beach açaí, botequim drinks, dinner with sobremesa. Lead each.",
    rwenRole: "Five Brazilian food workers across the day.",
    successCriteria: "User orders with Quero / Vou querer at each stop, uses gendered articles (um/uma), expresses estar com fome / cheio/a in transitions, says obrigado/a consistently.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
