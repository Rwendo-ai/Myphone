import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l05-churrasco-meat",
  module: 7,
  lesson: 5,
  title: "Picanha & Linguiça — Churrasco meats",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "At the churrasco grill: picanha (top sirloin) is king. Linguiça (sausage), coração de frango (chicken hearts), pão de alho (garlic bread) round it out.",
    culturalNote: "Picanha is THE Brazilian cut — fatty cap, salty crust, sliced thin. Brazilians take it seriously. Asking for it bem passada (well done) gets a quiet sigh; mal passada (rare) gets a smile.",
  },

  chunks: [
    { id: "picanha", target: "Picanha", native: "Top sirloin (Brazilian cut)", literal: "Picanha (f.)", emoji: "🥩", phonetic: "pee-KAH-nyah", audioRef: null },
    { id: "linguica", target: "Linguiça", native: "Sausage", literal: "Sausage (f.)", emoji: "🌭", phonetic: "leen-GWEE-sah", audioRef: null },
    { id: "ponto", target: "Ao ponto", native: "Medium-rare (the right way)", literal: "At point", emoji: "🔥", phonetic: "ow POHN-too", audioRef: null },
  ],

  pattern: {
    name: "How you want your meat",
    explanation: "Mal passada = rare. Ao ponto = medium / proper. Bem passada = well done. Brazilians prefer ao ponto. The grill master at churrasco asks Como prefere?",
    examples: [
      { target: "Quero ao ponto.", native: "I want it medium." },
      { target: "Picanha mal passada.", native: "Rare picanha." },
      { target: "Linguiça bem passada.", native: "Well-done sausage." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Picanha", right: "Top sirloin" },
      { left: "Linguiça", right: "Sausage" },
      { left: "Ao ponto", right: "Medium" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want it medium", correct: ["Quero ao ponto", "quero ao ponto", "Eu quero ao ponto"] },
    { type: "fill_blank", instruction: "Picanha cooked just right", sentence: "Picanha ____ ponto.", options: ["ao", "no", "em"], correct: "ao", context: "Cooking term — ao ponto." },
    { type: "multiple_choice", instruction: "King cut at Brazilian churrasco?", question: "Choose", options: [
      { text: "Picanha", correct: true },
      { text: "Hambúrguer", correct: false },
      { text: "Frango frito", correct: false },
    ], explanation: "Picanha is the iconic Brazilian cut." },
    { type: "build_sentence", instruction: "Build I want picanha medium please", words: ["picanha", "ao", "favor.", "Quero", "por", "ponto,"], correct: ["Quero", "picanha", "ao", "ponto,", "por", "favor."], translation: "I want picanha medium please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Sausage well done", correct: ["Linguiça bem passada", "linguiça bem passada", "Linguica bem passada"] },
  ],

  rwenDialogue: {
    intro: "Sunday churrasco. The grill master holds out the spit.",
    lines: [
      { speaker: "npc", target: "Picanha pra você. Como prefere?", native: "Picanha for you. How do you like it?" },
      { speaker: "user", userChoices: [
        { target: "Ao ponto, por favor.", native: "Medium, please.", correct: true, feedback: "Brazilian-correct preference. The grill master nods." },
        { target: "Bem passada", native: "(quiet sigh)", correct: false, feedback: "Brazilians wince at well-done picanha — try ao ponto." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with cooking preference." },
      ]},
      { speaker: "npc", target: "Boa escolha!", native: "Good choice!" },
      { speaker: "rwen", rwenLine: "Picanha, ao ponto — the Brazilian churrasco answer that earns respect at the grill.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Picanha (Portuguese)", correct: ["Picanha", "picanha"] },
      { prompt: "Medium (cooking, Portuguese)", correct: ["Ao ponto", "ao ponto"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order three meats Brazilian-style: Picanha ao ponto. Linguiça bem passada. Frango ao ponto. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "At a churrascaria (rodízio Brazilian steakhouse) in São Paulo. Servers bring meat constantly — accept, decline, choose doneness.",
    rwenRole: "Garçom — server, ~40, paulistano, brings 8 different meats.",
    successCriteria: "User chooses ao ponto (NOT bem passada) for picanha, accepts/declines meats with politeness, asks names of unfamiliar cuts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
