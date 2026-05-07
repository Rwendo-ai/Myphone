import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l06-bebidas",
  module: 7,
  lesson: 6,
  title: "Cerveja, Caipirinha, Guaraná — Drinks",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian drinks: cerveja gelada (cold beer), caipirinha (lime + cachaça + sugar), guaraná (the brown soda Brazilians fight over). Plus água sem gás (still water).",
    culturalNote: "Cerveja must be GELADA — ice cold. Lukewarm beer is not beer in Brazil. Caipirinha is national. Guaraná Antarctica vs Coca: a real Brazilian taste war.",
  },

  chunks: [
    { id: "cerveja_gelada", target: "Cerveja gelada", native: "Cold beer", literal: "Frozen beer", emoji: "🍺", phonetic: "ser-VEH-zhah zheh-LAH-dah", audioRef: null },
    { id: "caipirinha", target: "Caipirinha", native: "Caipirinha (lime cocktail)", literal: "National cocktail (f.)", emoji: "🍸", phonetic: "kai-pee-REE-nyah", audioRef: null },
    { id: "guarana", target: "Guaraná", native: "Guaraná (Brazilian soda)", literal: "Guaraná (m.)", emoji: "🥤", phonetic: "gwah-rah-NAH", audioRef: null },
  ],

  pattern: {
    name: "Drink ordering",
    explanation: "Uma cerveja gelada. Uma caipirinha. Um guaraná. Um copo de água sem gás (a glass of still water). The adjective gelada goes after the noun.",
    examples: [
      { target: "Uma cerveja bem gelada.", native: "A really cold beer." },
      { target: "Uma caipirinha de limão.", native: "A lime caipirinha." },
      { target: "Um copo de água, por favor.", native: "A glass of water, please." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Cerveja gelada", right: "Cold beer" },
      { left: "Caipirinha", right: "Lime cocktail" },
      { left: "Guaraná", right: "Brazilian soda" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "A cold beer, please", correct: ["Uma cerveja gelada, por favor", "uma cerveja gelada, por favor"] },
    { type: "fill_blank", instruction: "Cerveja is feminine — adjective agrees", sentence: "Cerveja ____.", options: ["gelada", "gelado", "gelados"], correct: "gelada", context: "Cerveja (f.) — gelada." },
    { type: "multiple_choice", instruction: "What is a caipirinha?", question: "Choose", options: [
      { text: "Cachaça, lime, sugar, ice", correct: true },
      { text: "Beer with lime", correct: false },
      { text: "Coffee with milk", correct: false },
    ], explanation: "Caipirinha = cachaça + limão + açúcar + gelo." },
    { type: "build_sentence", instruction: "Build I want a caipirinha", words: ["caipirinha.", "Quero", "uma"], correct: ["Quero", "uma", "caipirinha."], translation: "I want a caipirinha." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Still water (no gas)", correct: ["Água sem gás", "água sem gás", "Agua sem gas"] },
  ],

  rwenDialogue: {
    intro: "At a botequim (Brazilian neighbourhood bar) in Rio.",
    lines: [
      { speaker: "npc", target: "Beleza, o que vai ser?", native: "Cool, what'll it be?" },
      { speaker: "user", userChoices: [
        { target: "Uma cerveja bem gelada e uma caipirinha de limão.", native: "A very cold beer and a lime caipirinha.", correct: true, feedback: "Botequim Brazilian, two drinks, agreement on adjective. Pro level." },
        { target: "Cerveja", native: "(no article)", correct: false, feedback: "Frame — Uma cerveja..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order — Uma cerveja, uma caipirinha." },
      ]},
      { speaker: "npc", target: "Saiu!", native: "Coming up!" },
      { speaker: "rwen", rwenLine: "Brazilian drinks ordered, adjectives agreed. Botequim survival: confirmed.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Cold beer (Portuguese)", correct: ["Cerveja gelada", "cerveja gelada"] },
      { prompt: "Caipirinha (Portuguese)", correct: ["Caipirinha", "caipirinha"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three Brazilian drinks: Uma cerveja gelada. Uma caipirinha. Um guaraná. Build the order rhythm.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Friday night at a botequim in Lapa, Rio. Order three rounds across the night — adjust based on what your friends drink.",
    rwenRole: "Bartender, ~40, carioca.",
    successCriteria: "User uses gendered articles (uma cerveja, um guaraná), adjective agreement (cerveja gelada), and varies drinks across rounds.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
