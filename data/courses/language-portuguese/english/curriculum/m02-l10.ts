import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l10-survival",
  module: 2,
  lesson: 10,
  title: "Survival Day — Module 2 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 2 capstone. A whole day of Brazilian survival packed into one conversation. Buy, ask, soften, pay, navigate. No new words — just everything you have built.",
    culturalNote: "Survival in Brazil is jeitinho-flavoured. Direct asks softened with por favor and obrigado/a. Negotiation gentle, not hard. Help requested politely. The Brazilian street rewards warmth.",
  },

  chunks: [
    { id: "review_quanto", target: "Quanto custa?", native: "How much?", literal: "How-much costs?", emoji: "💰", phonetic: "KWAN-too KOOS-tah", audioRef: null },
    { id: "review_eu_quero", target: "Eu quero...", native: "I want / I'll take...", literal: "I want", emoji: "🤲", phonetic: "EH-oo KEH-roo", audioRef: null },
    { id: "review_a_conta", target: "A conta, por favor", native: "The bill, please", literal: "The bill, please", emoji: "💳", phonetic: "ah KOHN-tah", audioRef: null },
  ],

  pattern: {
    name: "The Brazilian survival kit",
    explanation: "Six tools you now own: Quanto custa? (price), Eu quero (order), Tem desconto? (haggle), A conta (bill), Cartão/PIX (pay), Não entendi (rescue). Stack them in any order.",
    examples: [
      { target: "Quanto custa?", native: "How much?" },
      { target: "Eu quero um café.", native: "I want a coffee." },
      { target: "A conta, por favor.", native: "The bill, please." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match each survival tool to its function", pairs: [
      { left: "Asking the price", right: "Quanto custa?" },
      { left: "Ordering food/drink", right: "Eu quero..." },
      { left: "Paying", right: "A conta, por favor" },
    ]},
    { type: "multiple_choice", instruction: "Vendor says R$ 80 — too much. Best Brazilian push-back?", question: "Choose", options: [
      { text: "Muito caro. Tem desconto?", correct: true },
      { text: "Não!", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Muito caro + Tem desconto? — soft Brazilian negotiation." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want a coffee, please", correct: ["Eu quero um café, por favor", "eu quero um café, por favor", "Quero um café, por favor"] },
    { type: "fill_blank", instruction: "Rescue line — you missed what they said", sentence: "Pode ____ mais devagar?", options: ["repetir", "comer", "andar"], correct: "repetir", context: "Pode repetir? = Can you repeat?" },
    { type: "build_sentence", instruction: "Polite end-of-meal", words: ["por", "A", "favor.", "conta,"], correct: ["A", "conta,", "por", "favor."], translation: "The bill, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is the bathroom?", correct: ["Onde fica o banheiro?", "onde fica o banheiro?", "Onde fica o banheiro"] },
  ],

  rwenDialogue: {
    intro: "Saturday in Salvador. You will: order at a barraca, haggle with a vendor, ask directions, pay with PIX. One conversation, full survival.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Oi! Eu quero um açaí, por favor.", native: "Hi! I want an açaí, please.", correct: true, feedback: "Greeting + order + please. Perfect opener." },
        { target: "Açaí", native: "Açaí (no greeting)", correct: false, feedback: "Brazilians greet first — Oi, eu quero..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open with greeting and order." },
      ]},
      { speaker: "npc", target: "Açaí grande, vinte reais.", native: "Large açaí, twenty reais." },
      { speaker: "user", userChoices: [
        { target: "Tem desconto se eu pagar no PIX?", native: "Any discount if I pay by PIX?", correct: true, feedback: "Polite haggle anchored on PIX — Brazilians love it." },
        { target: "Muito caro!", native: "Very expensive!", correct: false, feedback: "Soften — Tem desconto se eu pagar no PIX?" },
        { target: "Não", native: "No", correct: false, feedback: "If you want a discount, ask for one." },
      ]},
      { speaker: "npc", target: "Pode ser dezoito.", native: "Can be eighteen." },
      { speaker: "user", userChoices: [
        { target: "Fechado! E onde fica o banheiro?", native: "Done! And where is the bathroom?", correct: true, feedback: "Closed the deal AND used the new freedom — multitask Brazilian survival." },
        { target: "Não entendi", native: "Didn't understand", correct: false, feedback: "You did understand — accept and ask the next question." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Close the deal first — Fechado!" },
      ]},
      { speaker: "npc", target: "Ali, ó!", native: "Right there!" },
      { speaker: "rwen", rwenLine: "You ordered, haggled, navigated, paid. That is Brazilian street survival in one breath. Module 2: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "How much? (Portuguese)", correct: ["Quanto custa?", "quanto custa?", "Quanto custa", "quanto custa"] },
      { prompt: "I didn't understand (Portuguese)", correct: ["Não entendi", "não entendi", "Nao entendi", "nao entendi"] },
    ],
  },

  mission: {
    title: "Your Module 2 Mission",
    task: "Imagine your full Brazilian Saturday: order, haggle, navigate, pay. Run it out loud — five lines, all in Portuguese. The street is yours.",
    rwenSignoff: "Você sobrevive nas ruas brasileiras agora. Module 3 awaits — building YOU in Portuguese. Tchau, até a próxima!",
  },

  phase8: {
    scenario: "Saturday in Salvador. Order an açaí, haggle gently, ask for the bathroom, pay by PIX, leave warmly. Full survival cycle in one exchange.",
    rwenRole: "Barraca vendor — Salvador, ~45, baiano, friendly haggler.",
    successCriteria: "User uses ALL six tools: greeting, Eu quero, Quanto custa? / Tem desconto?, asks Onde fica o banheiro?, says Cartão / PIX when paying, closes with obrigado/a.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
