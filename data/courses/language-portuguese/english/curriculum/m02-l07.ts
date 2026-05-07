import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l07-a-conta",
  module: 2,
  lesson: 7,
  title: "A conta, por favor — The bill, please",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian restaurants do not bring the bill until you ask. The line: A conta, por favor — the bill, please.",
    culturalNote: "Service is usually 10% added (taxa de serviço) — it is optional but most leave it. Cards work everywhere; PIX is fastest. Splitting the bill (rachar a conta) is normal among friends.",
  },

  chunks: [
    { id: "a_conta", target: "A conta, por favor", native: "The bill, please", literal: "The bill, please", emoji: "💳", phonetic: "ah KOHN-tah", audioRef: null },
    { id: "cartao", target: "Cartão", native: "Card", literal: "Card", emoji: "💳", phonetic: "kar-TOWNG", audioRef: null },
    { id: "pix", target: "PIX", native: "PIX (instant transfer)", literal: "PIX", emoji: "⚡", phonetic: "PEEKS", audioRef: null },
  ],

  pattern: {
    name: "Paying in Brazil",
    explanation: "Three payment paths: Dinheiro (cash), Cartão (card), PIX (instant transfer via QR code). PIX is now everywhere — even small vendors. Restaurants ask: Cartão ou PIX?",
    examples: [
      { target: "A conta, por favor.", native: "The bill, please." },
      { target: "Posso pagar no cartão?", native: "Can I pay by card?" },
      { target: "Vou pagar no PIX.", native: "I'll pay by PIX." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "A conta", right: "The bill" },
      { left: "Cartão", right: "Card" },
      { left: "PIX", right: "Instant transfer" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "The bill, please", correct: ["A conta, por favor", "a conta, por favor", "A conta por favor"] },
    { type: "fill_blank", instruction: "Pay by card", sentence: "Posso pagar no ____?", options: ["cartão", "PIX", "café"], correct: "cartão", context: "Card = cartão." },
    { type: "multiple_choice", instruction: "Brazilian waiter asks Cartão ou PIX?. You will use card. Reply?", question: "Choose", options: [
      { text: "Cartão, por favor", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Direct: Cartão, por favor." },
    { type: "build_sentence", instruction: "Ask for the bill", words: ["por", "A", "favor.", "conta,"], correct: ["A", "conta,", "por", "favor."], translation: "The bill, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'll pay by PIX", correct: ["Vou pagar no PIX", "vou pagar no PIX", "Vou pagar por PIX"] },
  ],

  rwenDialogue: {
    intro: "End of dinner at a Rio botequim. Time to leave.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "A conta, por favor.", native: "The bill, please.", correct: true, feedback: "Direct, polite, Brazilian standard." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask for the bill first — a conta, por favor." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Open with a conta, por favor." },
      ]},
      { speaker: "npc", target: "Já trago. Cartão ou PIX?", native: "Bringing it. Card or PIX?" },
      { speaker: "user", userChoices: [
        { target: "Cartão, por favor.", native: "Card, please.", correct: true, feedback: "Clear and polite." },
        { target: "Não", native: "No", correct: false, feedback: "Pick a method — cartão or PIX." },
        { target: "Adeus", native: "Farewell", correct: false, feedback: "Pick payment first." },
      ]},
      { speaker: "rwen", rwenLine: "Brazilian restaurant flow: complete. Ask for bill, pick payment method, leave warm.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "The bill, please (Portuguese)", correct: ["A conta, por favor", "a conta, por favor", "A conta por favor"] },
      { prompt: "Card (Portuguese)", correct: ["Cartão", "cartão", "Cartao", "cartao"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, run the closing of a Brazilian meal: A conta, por favor. Cartão ou PIX? Cartão, obrigado/a.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "End of dinner at a small Rio botequim. Ask for the bill, choose your payment method, leave warmly.",
    rwenRole: "Garçom — waiter, ~35, carioca, friendly.",
    successCriteria: "User asks A conta, por favor, picks Cartão or PIX when prompted, and closes with obrigado/a or valeu.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
