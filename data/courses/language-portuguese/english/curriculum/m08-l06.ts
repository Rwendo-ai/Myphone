import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l06-querer-poder",
  module: 8,
  lesson: 6,
  title: "Querer & Poder — Want and can",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two power verbs: querer (want) and poder (can). Quero água. Posso pagar? They unlock requests, possibilities, polite asking.",
    culturalNote: "Brazilians soften with poder: Posso fazer X? (Can I do X?) is more polite than just asking directly. Quero is fine, but pair with por favor for warmth.",
  },

  chunks: [
    { id: "querer", target: "Querer — Eu quero", native: "Want — I want", literal: "Want (irregular)", emoji: "🤲", phonetic: "keh-RAYR / KEH-roo", audioRef: null },
    { id: "poder", target: "Poder — Eu posso", native: "Can / be able to — I can", literal: "Can", emoji: "💪", phonetic: "po-DAYR / POH-soo", audioRef: null },
    { id: "voce_pode", target: "Você pode?", native: "Can you?", literal: "You can?", emoji: "❓", phonetic: "voh-SAY POH-jee", audioRef: null },
  ],

  pattern: {
    name: "Querer + thing / Poder + verb",
    explanation: "Querer + noun: Quero água. Or querer + verb: Quero comer (I want to eat). Poder + verb: Posso pagar? (Can I pay?). Pode falar mais devagar? (Can you speak slower?).",
    examples: [
      { target: "Quero um café.", native: "I want a coffee." },
      { target: "Quero comer agora.", native: "I want to eat now." },
      { target: "Posso pagar no PIX?", native: "Can I pay by PIX?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu quero", right: "I want" },
      { left: "Eu posso", right: "I can" },
      { left: "Você pode?", right: "Can you?" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want to eat", correct: ["Quero comer", "Eu quero comer", "quero comer"] },
    { type: "fill_blank", instruction: "Polite ask — can I?", sentence: "____ pagar no PIX?", options: ["Posso", "Quero", "Vou"], correct: "Posso", context: "Posso = Can I." },
    { type: "multiple_choice", instruction: "Politest restaurant request?", question: "Choose", options: [
      { text: "Pode trazer mais água, por favor?", correct: true },
      { text: "Mais água!", correct: false },
      { text: "Sou água.", correct: false },
    ], explanation: "Pode + verb + por favor = polite Brazilian request." },
    { type: "build_sentence", instruction: "Build Can you speak slower, please?", words: ["devagar,", "Pode", "favor?", "mais", "falar", "por"], correct: ["Pode", "falar", "mais", "devagar,", "por", "favor?"], translation: "Can you speak slower, please?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want a beer", correct: ["Quero uma cerveja", "Eu quero uma cerveja", "quero uma cerveja"] },
  ],

  rwenDialogue: {
    intro: "Restaurant. The bill arrives.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Posso pagar no PIX, por favor?", native: "Can I pay by PIX, please?", correct: true, feedback: "Posso + verb + por favor — polite Brazilian asking." },
        { target: "PIX!", native: "(rude)", correct: false, feedback: "Soften — Posso pagar no PIX, por favor?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Ask payment — Posso pagar no PIX?" },
      ]},
      { speaker: "npc", target: "Pode sim! Aqui o QR.", native: "You can! Here's the QR." },
      { speaker: "rwen", rwenLine: "Querer + poder — the request engine of Brazilian Portuguese. Polite and clear.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I want a coffee (Portuguese)", correct: ["Quero um café", "Eu quero um café", "quero um café"] },
      { prompt: "Can I? (Portuguese)", correct: ["Posso?", "posso?", "Eu posso?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three Brazilian polite requests: Quero X. Posso Y? Pode Z, por favor? Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian cafe with multiple needs — order, ask for water, request slower speech, settle bill. All polite asks.",
    rwenRole: "Server, ~30, paulistana, helpful.",
    successCriteria: "User mixes Quero (orders), Posso (permission), Pode (asking server), all softened with por favor.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
