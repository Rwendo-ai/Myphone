import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l06-aeroporto",
  module: 9,
  lesson: 6,
  title: "No aeroporto — At the airport",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Voo (flight), bagagem (luggage), embarque (boarding). The airport vocabulary you need at GRU (São Paulo) or GIG (Rio).",
    culturalNote: "Brazilian airports are mostly orderly. International security is strict; domestic is faster. Many international travellers fly into GRU and connect domestic to other Brazilian cities.",
  },

  chunks: [
    { id: "voo", target: "O voo", native: "The flight", literal: "Flight (m.)", emoji: "✈️", phonetic: "oo VOH-oo", audioRef: null },
    { id: "bagagem", target: "A bagagem", native: "The luggage", literal: "Luggage (f.)", emoji: "🧳", phonetic: "ah bah-GAH-zhayng", audioRef: null },
    { id: "embarque", target: "O embarque", native: "Boarding", literal: "Boarding (m.)", emoji: "🛂", phonetic: "oo em-BAR-kee", audioRef: null },
  ],

  pattern: {
    name: "Airport navigation",
    explanation: "Onde fica o portão de embarque? — Where's the boarding gate? Vou pegar a bagagem — I'll get the luggage. O voo está atrasado — the flight is delayed.",
    examples: [
      { target: "Onde fica o embarque?", native: "Where is boarding?" },
      { target: "O voo está atrasado.", native: "The flight is delayed." },
      { target: "Perdi a bagagem.", native: "I lost the luggage." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Voo", right: "Flight" },
      { left: "Bagagem", right: "Luggage" },
      { left: "Embarque", right: "Boarding" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is boarding?", correct: ["Onde fica o embarque?", "onde fica o embarque?", "Onde é o embarque?"] },
    { type: "fill_blank", instruction: "Flight is delayed", sentence: "O voo está ____.", options: ["atrasado", "novo", "rápido"], correct: "atrasado", context: "Atrasado = delayed." },
    { type: "multiple_choice", instruction: "Lost luggage at GRU. Best line?", question: "Choose", options: [
      { text: "Perdi a bagagem.", correct: true },
      { text: "Sou bagagem.", correct: false },
      { text: "Estou bagagem.", correct: false },
    ], explanation: "Past of perder = perdi." },
    { type: "build_sentence", instruction: "Build I'll get the luggage", words: ["bagagem.", "pegar", "Vou", "a"], correct: ["Vou", "pegar", "a", "bagagem."], translation: "I'll get the luggage." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "The flight is delayed", correct: ["O voo está atrasado", "o voo está atrasado", "O voo esta atrasado"] },
  ],

  rwenDialogue: {
    intro: "GRU airport. The board shows your flight delayed.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Com licença, o voo pra Salvador está atrasado?", native: "Excuse me, is the flight to Salvador delayed?", correct: true, feedback: "Polite ask, specific destination." },
        { target: "Salvador?", native: "(unclear)", correct: false, feedback: "Frame: Com licença, o voo pra Salvador..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask politely." },
      ]},
      { speaker: "npc", target: "Está sim, atrasado uma hora.", native: "Yes, delayed by an hour." },
      { speaker: "rwen", rwenLine: "Voo, bagagem, embarque — airport survival in Brazil.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "The flight (Portuguese)", correct: ["O voo", "o voo"] },
      { prompt: "I lost the luggage (Portuguese)", correct: ["Perdi a bagagem", "Eu perdi a bagagem", "perdi a bagagem"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine three airport moments: Onde fica o embarque? O voo está atrasado? Perdi a bagagem. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "GRU airport, connecting to a domestic flight to Salvador. Boarding gate change, ask staff, find new gate.",
    rwenRole: "Airport staff — paulistana, ~30, brisk.",
    successCriteria: "User asks Onde fica o portão X?, parses portão / atrasado / embarque, says obrigado/a after each interaction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
