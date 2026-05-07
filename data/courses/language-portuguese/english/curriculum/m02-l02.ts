import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l02-quanto-custa",
  module: 2,
  lesson: 2,
  title: "Quanto custa? — How much?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Survival on Brazilian streets needs one phrase above all: Quanto custa? — how much. Markets, taxis, açaí stands, anywhere money changes hands.",
    culturalNote: "Prices in Brazil are R$ (reais). Many small vendors negotiate slightly — the jeitinho includes a soft Não tem desconto? (any discount?). Cards work everywhere; PIX (instant transfer) is even more universal.",
  },

  chunks: [
    { id: "quanto_custa", target: "Quanto custa?", native: "How much does it cost?", literal: "How-much costs?", emoji: "💰", phonetic: "KWAN-too KOOS-tah", audioRef: null },
    { id: "reais", target: "Reais", native: "Reais (Brazilian currency)", literal: "Reais (R$)", emoji: "💵", phonetic: "hay-AYS", audioRef: null },
    { id: "muito_caro", target: "Muito caro", native: "Very expensive", literal: "Very expensive", emoji: "😬", phonetic: "MWEEN-too KAH-roo", audioRef: null },
  ],

  pattern: {
    name: "Asking about price",
    explanation: "Quanto custa? for one item. Quanto é? works too — slightly more colloquial. Reply: É [number] reais. Negotiate gently with Tem desconto? (any discount?).",
    examples: [
      { target: "Quanto custa?", native: "How much does it cost?" },
      { target: "É dez reais.", native: "It is ten reais." },
      { target: "Tem desconto?", native: "Any discount?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Quanto custa?", right: "How much?" },
      { left: "Reais", right: "Brazilian currency" },
      { left: "Muito caro", right: "Very expensive" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "How much does it cost?", correct: ["Quanto custa?", "quanto custa?", "Quanto custa", "quanto custa"] },
    { type: "fill_blank", instruction: "Tell vendor it is too pricey", sentence: "Muito ____!", options: ["caro", "barato", "bem"], correct: "caro", context: "Caro = expensive." },
    { type: "multiple_choice", instruction: "Vendor says R$ 50 — too much. Best response?", question: "Choose", options: [
      { text: "Muito caro. Tem desconto?", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Tem desconto? is the polite Brazilian negotiation opener." },
    { type: "build_sentence", instruction: "Ask price politely", words: ["custa?", "Quanto", "favor,", "por"], correct: ["Por", "favor,", "quanto", "custa?"], translation: "Please, how much does it cost?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Very expensive", correct: ["Muito caro", "muito caro"] },
  ],

  rwenDialogue: {
    intro: "At a feirinha (street market) in Salvador. You like a small painting.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Quanto custa?", native: "How much?", correct: true, feedback: "Direct, useful." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask quanto custa? to start." },
        { target: "Obrigado", native: "Thanks", correct: false, feedback: "Save thanks for after — first ask the price." },
      ]},
      { speaker: "npc", target: "Cinquenta reais.", native: "Fifty reais." },
      { speaker: "user", userChoices: [
        { target: "Muito caro. Tem desconto?", native: "Very expensive. Any discount?", correct: true, feedback: "Polite negotiation — perfect Brazilian-style." },
        { target: "Sim", native: "Yes", correct: false, feedback: "If you think it is too much, push back gently — tem desconto?" },
        { target: "Não", native: "No", correct: false, feedback: "Soften — Muito caro. Tem desconto?" },
      ]},
      { speaker: "npc", target: "Pra você, quarenta!", native: "For you, forty!" },
      { speaker: "rwen", rwenLine: "You ran the Brazilian micro-haggle. Polite, warm, effective.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "How much does it cost? (Portuguese)", correct: ["Quanto custa?", "quanto custa?", "Quanto custa"] },
      { prompt: "Very expensive (Portuguese)", correct: ["Muito caro", "muito caro"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine three things you might buy in Brazil — a coffee, an Uber, a souvenir. Out loud, ask: Quanto custa?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Salvador feira (street market). You spotted a hand-painted candle. Ask price, push back gently when it sounds high, settle on a fair number.",
    rwenRole: "Dona Alice — feira vendor, ~50, baiana, friendly haggler.",
    successCriteria: "User asks Quanto custa?, uses Muito caro and Tem desconto? to negotiate softly, and closes with obrigado/a — never bare nor rude.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
