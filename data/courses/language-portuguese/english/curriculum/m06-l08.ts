import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l08-real-pix",
  module: 6,
  lesson: 8,
  title: "Reais & PIX — Money in Brazil",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian money is the real (R$). Bills come in 2, 5, 10, 20, 50, 100. PIX is the instant transfer that has eaten cash. Cards everywhere — even at the feira.",
    culturalNote: "Most Brazilians no longer carry cash. PIX uses a QR code or a key (CPF, phone, email). Even street vendors and beach sellers accept PIX. Tipping (gorjeta) is usually 10% — often built into the bill (taxa de serviço).",
  },

  chunks: [
    { id: "real", target: "O real / Os reais", native: "The real / Reais (currency)", literal: "Currency", emoji: "💵", phonetic: "oo HEH-ow / oos hay-AYS", audioRef: null },
    { id: "centavos", target: "Centavos", native: "Cents", literal: "Cents", emoji: "🪙", phonetic: "sen-TAH-voos", audioRef: null },
    { id: "troco", target: "Troco", native: "Change (money returned)", literal: "Change", emoji: "🔁", phonetic: "TROH-koo", audioRef: null },
  ],

  pattern: {
    name: "Reading prices aloud",
    explanation: "R$ 25,50 = vinte e cinco reais e cinquenta centavos. R$ 100,00 = cem reais. R$ 5,00 = cinco reais. The comma reads as e. Round amounts drop centavos.",
    examples: [
      { target: "R$ 10,00 = dez reais", native: "10 reais" },
      { target: "R$ 25,50 = vinte e cinco e cinquenta", native: "25.50 reais" },
      { target: "Tem troco?", native: "Got change?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Real", right: "Brazilian currency" },
      { left: "Centavos", right: "Cents" },
      { left: "Troco", right: "Change" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Ten reais", correct: ["Dez reais", "dez reais"] },
    { type: "fill_blank", instruction: "Asking for change", sentence: "Tem ____?", options: ["troco", "real", "PIX"], correct: "troco", context: "Tem troco? = Got change?" },
    { type: "multiple_choice", instruction: "What is R$ 100,00 spoken aloud?", question: "Choose", options: [
      { text: "Cem reais", correct: true },
      { text: "Cem reais e cem centavos", correct: false },
      { text: "Mil reais", correct: false },
    ], explanation: "Round amounts drop centavos. Cem reais." },
    { type: "build_sentence", instruction: "Build I'll pay by PIX", words: ["pagar", "PIX.", "Vou", "no"], correct: ["Vou", "pagar", "no", "PIX."], translation: "I'll pay by PIX." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Twenty-five reais", correct: ["Vinte e cinco reais", "vinte e cinco reais"] },
  ],

  rwenDialogue: {
    intro: "Buying water at a Salvador beach kiosk.",
    lines: [
      { speaker: "npc", target: "A água tá cinco reais.", native: "The water is 5 reais." },
      { speaker: "user", userChoices: [
        { target: "Posso pagar no PIX?", native: "Can I pay by PIX?", correct: true, feedback: "Posso + PIX = standard 2026 Brazilian transaction." },
        { target: "Tem dinheiro?", native: "(wrong subject)", correct: false, feedback: "You ask if YOU can pay PIX — Posso pagar no PIX?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Pay first — Posso pagar no PIX?" },
      ]},
      { speaker: "npc", target: "Pode! Aqui o QR.", native: "Sure! Here's the QR." },
      { speaker: "rwen", rwenLine: "Reais and PIX — Brazilian money in 2026. You spoke the modern flow.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Got change? (Portuguese)", correct: ["Tem troco?", "tem troco?", "Tem troco", "tem troco"] },
      { prompt: "I'll pay by PIX (Portuguese)", correct: ["Vou pagar no PIX", "vou pagar no PIX"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Read three Brazilian prices aloud: R$ 5,00 / R$ 47,90 / R$ 250,00. Then ask a vendor: Posso pagar no PIX?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Buying snacks across a Brazilian afternoon — café, beach water, an açaí. Use cash, PIX, and card across the three.",
    rwenRole: "Three vendors — padaria, beach kiosk, açaí stand.",
    successCriteria: "User reads prices fluently in reais, asks Posso pagar no PIX/cartão, says Tem troco? when needed, and rounds with cem / mil correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
