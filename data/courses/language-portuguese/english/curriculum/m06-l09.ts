import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l09-quanto-custa-2",
  module: 6,
  lesson: 9,
  title: "Negociar — Real Brazilian haggling",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian shopping has a soft dance: ask, soften, counter. Tem desconto? Aceita PIX? Faz por X? — three ways to push back without offending.",
    culturalNote: "Brazilian haggling is gentle. Aggressive push-back rarely works; warm push-back often does. Vendors expect a little dance at feiras and small shops, less at chain stores.",
  },

  chunks: [
    { id: "tem_desconto", target: "Tem desconto?", native: "Any discount?", literal: "Has discount?", emoji: "💸", phonetic: "TAYNG des-KON-too", audioRef: null },
    { id: "faz_por", target: "Faz por X?", native: "Will you do it for X?", literal: "Make for X?", emoji: "🤝", phonetic: "fahs pohr", audioRef: null },
    { id: "aceita_pix", target: "Aceita PIX?", native: "Accept PIX?", literal: "Accept PIX?", emoji: "⚡", phonetic: "ah-SAY-tah PEEKS", audioRef: null },
  ],

  pattern: {
    name: "The soft haggle",
    explanation: "Three lines, in order: Tem desconto? Aceita PIX? Faz por X? Each opens a small door. Vendors close some and open others. Smile, dance, settle.",
    examples: [
      { target: "Tem desconto?", native: "Any discount?" },
      { target: "Aceita PIX?", native: "Accept PIX? (often gets a small discount)" },
      { target: "Faz por 30?", native: "Will you do it for 30?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Tem desconto?", right: "Any discount?" },
      { left: "Aceita PIX?", right: "Accept PIX?" },
      { left: "Faz por X?", right: "Do it for X?" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Any discount?", correct: ["Tem desconto?", "tem desconto?", "Tem desconto", "tem desconto"] },
    { type: "fill_blank", instruction: "Counter-offer 30", sentence: "Faz ____ trinta?", options: ["por", "em", "de"], correct: "por", context: "Faz por X = Do it for X." },
    { type: "multiple_choice", instruction: "Vendor says R$ 50 for a hat — too high. First polite move?", question: "Choose", options: [
      { text: "Tem desconto?", correct: true },
      { text: "Não", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Tem desconto? opens the door without offence." },
    { type: "build_sentence", instruction: "Build Will you do it for 25?", words: ["por", "Faz", "vinte", "e", "cinco?"], correct: ["Faz", "por", "vinte", "e", "cinco?"], translation: "Will you do it for 25?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Do you accept PIX?", correct: ["Aceita PIX?", "aceita PIX?", "Aceita PIX", "aceita PIX"] },
  ],

  rwenDialogue: {
    intro: "Feirinha (street market) in Rio. You like a small painting.",
    lines: [
      { speaker: "npc", target: "Esse é cinquenta reais.", native: "This one's 50 reais." },
      { speaker: "user", userChoices: [
        { target: "Tem desconto se eu pagar no PIX?", native: "Discount if I pay by PIX?", correct: true, feedback: "Tem desconto + PIX anchor — the modern Brazilian haggle move." },
        { target: "Muito caro!", native: "(too direct)", correct: false, feedback: "Soften — Tem desconto se pagar no PIX?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Try Tem desconto?" },
      ]},
      { speaker: "npc", target: "No PIX, faço por quarenta.", native: "By PIX, I'll do forty." },
      { speaker: "user", userChoices: [
        { target: "Faz por trinta e cinco?", native: "Do it for 35?", correct: true, feedback: "Counter-offer with faz por X. Brazilian haggle: in motion." },
        { target: "Não", native: "(curt)", correct: false, feedback: "Counter with a number — Faz por X?" },
        { target: "Sim", native: "Yes (folded too soon)", correct: false, feedback: "Try one more push — Faz por 35?" },
      ]},
      { speaker: "npc", target: "Bom, fechado!", native: "Right, deal!" },
      { speaker: "rwen", rwenLine: "Three lines, three small wins. Brazilian soft haggle: mastered.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Any discount? (Portuguese)", correct: ["Tem desconto?", "tem desconto?", "Tem desconto", "tem desconto"] },
      { prompt: "Will you do it for 30? (Portuguese)", correct: ["Faz por trinta?", "faz por trinta?", "Faz por 30?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine three Brazilian shopping moments. Run the three lines: Tem desconto? Aceita PIX? Faz por X?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Saturday at a Salvador feirinha. You found three things you want — a hat, a painting, a bracelet. Negotiate all three.",
    rwenRole: "Three vendors — Bahia, friendly hagglers.",
    successCriteria: "User uses all three soft-haggle lines, sticks to gentle tone, and closes warmly with obrigado/a or valeu.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
