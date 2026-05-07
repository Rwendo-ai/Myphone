import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l08-praia",
  module: 9,
  lesson: 8,
  title: "Na praia — At the beach",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian beach culture is its own civilisation. Cadeira (chair), guarda-sol (umbrella), barraca (kiosk). Vendors sell everything — caipirinha, queijo coalho, biquíni.",
    culturalNote: "On Copacabana or Ipanema, you do not bring your own umbrella — you rent one (10-30 reais). The barraca owner becomes your beach concierge for the day.",
  },

  chunks: [
    { id: "praia", target: "A praia", native: "The beach", literal: "Beach (f.)", emoji: "🏖️", phonetic: "ah PRAH-yah", audioRef: null },
    { id: "cadeira_guarda", target: "Cadeira e guarda-sol", native: "Chair and umbrella", literal: "Chair and sun-guard", emoji: "⛱️", phonetic: "kah-DAY-rah ee GWAR-dah-sohl", audioRef: null },
    { id: "barraca", target: "A barraca", native: "The kiosk / beach hut", literal: "Kiosk (f.)", emoji: "🏪", phonetic: "ah bah-HAH-kah", audioRef: null },
  ],

  pattern: {
    name: "Beach kit ordering",
    explanation: "Quero alugar uma cadeira e um guarda-sol. Quanto custa o dia? Posso pagar no PIX? The full beach setup in three lines.",
    examples: [
      { target: "Quero alugar uma cadeira.", native: "I want to rent a chair." },
      { target: "Tem guarda-sol?", native: "Got an umbrella?" },
      { target: "Quanto pelo dia inteiro?", native: "How much for the whole day?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Praia", right: "Beach" },
      { left: "Cadeira", right: "Chair" },
      { left: "Barraca", right: "Beach kiosk" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want to rent a chair", correct: ["Quero alugar uma cadeira", "quero alugar uma cadeira"] },
    { type: "fill_blank", instruction: "Sun protection", sentence: "Tem guarda-____?", options: ["sol", "chuva", "lua"], correct: "sol", context: "Guarda-sol = sun-guard." },
    { type: "multiple_choice", instruction: "Brazilian beach barraca question?", question: "Choose", options: [
      { text: "Quanto pelo dia inteiro?", correct: true },
      { text: "Sou praia.", correct: false },
      { text: "Estou cadeira.", correct: false },
    ], explanation: "Quanto pelo dia inteiro? = How much for the whole day?" },
    { type: "build_sentence", instruction: "Build I want a chair and an umbrella", words: ["e", "Quero", "guarda-sol.", "uma", "cadeira", "um"], correct: ["Quero", "uma", "cadeira", "e", "um", "guarda-sol."], translation: "I want a chair and an umbrella." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "How much for the day?", correct: ["Quanto pelo dia?", "quanto pelo dia?", "Quanto pelo dia inteiro?"] },
  ],

  rwenDialogue: {
    intro: "Copacabana, 11am. You walk up to a barraca.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Bom dia! Quero alugar uma cadeira e um guarda-sol.", native: "Good morning! I want to rent a chair and an umbrella.", correct: true, feedback: "Greeting + clear request. Brazilian beach manager: pleased." },
        { target: "Cadeira", native: "(unclear)", correct: false, feedback: "Frame: Quero alugar uma cadeira e um guarda-sol." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order first — Quero alugar..." },
      ]},
      { speaker: "npc", target: "Quarenta o dia inteiro, no PIX!", native: "Forty for the whole day, by PIX!" },
      { speaker: "user", userChoices: [
        { target: "Fechado! Pode preparar?", native: "Deal! Can you set it up?", correct: true, feedback: "Closing + next step. Beach setup confirmed." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Confirm with Fechado + next ask." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Confirm the deal." },
      ]},
      { speaker: "rwen", rwenLine: "Cadeira, guarda-sol, barraca — Brazilian beach kit ordered.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Beach (Portuguese)", correct: ["A praia", "praia"] },
      { prompt: "I want to rent a chair (Portuguese)", correct: ["Quero alugar uma cadeira", "quero alugar uma cadeira"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, full beach order: Quero uma cadeira e um guarda-sol. Quanto pelo dia? Aceita PIX?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Sunday at Copacabana. Pick a barraca, negotiate price, set up for the day, order food and drinks across the afternoon.",
    rwenRole: "Barraqueiro — Copacabana, ~45, carioca, your concierge for the day.",
    successCriteria: "User rents cadeira + guarda-sol, negotiates with Tem desconto?, orders água / cerveja / espetinho throughout, pays via PIX.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
