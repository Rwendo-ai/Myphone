import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l01-sim-nao",
  module: 2,
  lesson: 1,
  title: "Sim & Não — Yes and No",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 2: street survival. First — sim and não. They look easy but Brazilians soften them constantly. A blunt não can sound rude.",
    culturalNote: "Brazilians soften no with sometimes a maybe (talvez), or não, obrigado/a (no, thanks). Direct rejection without softener can feel cold — the jeitinho brasileiro is to add warmth.",
  },

  chunks: [
    { id: "sim", target: "Sim", native: "Yes", literal: "Yes", emoji: "✅", phonetic: "SEENG", audioRef: null },
    { id: "nao", target: "Não", native: "No", literal: "No", emoji: "❌", phonetic: "NOWNG", audioRef: null },
    { id: "talvez", target: "Talvez", native: "Maybe", literal: "Maybe", emoji: "🤔", phonetic: "tahl-VEZ", audioRef: null },
  ],

  pattern: {
    name: "Soften the no",
    explanation: "Brazilians rarely say bare não. They add obrigado/a, valeu, or talvez to soften. Bare sim is fine — bare não less so.",
    examples: [
      { target: "Sim, claro!", native: "Yes, of course!" },
      { target: "Não, obrigado.", native: "No, thank you. (man)" },
      { target: "Talvez amanhã.", native: "Maybe tomorrow." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Sim", right: "Yes" },
      { left: "Não", right: "No" },
      { left: "Talvez", right: "Maybe" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Yes", correct: ["Sim", "sim"] },
    { type: "fill_blank", instruction: "Soften the rejection", sentence: "____, obrigada.", options: ["Não", "Sim", "Talvez"], correct: "Não", context: "No thanks (woman speaking)." },
    { type: "multiple_choice", instruction: "Vendor offers extra item — you do not want it. Best polite reply?", question: "Choose", options: [
      { text: "Não, obrigado/a", correct: true },
      { text: "Não", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Bare não sounds curt — soften with obrigado/a." },
    { type: "build_sentence", instruction: "Polite no", words: ["obrigado.", "Não,"], correct: ["Não,", "obrigado."], translation: "No, thank you (man)." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Maybe", correct: ["Talvez", "talvez"] },
  ],

  rwenDialogue: {
    intro: "A street vendor in Copacabana offers you a bracelet.",
    lines: [
      { speaker: "npc", target: "Pulseira? Dez reais!", native: "Bracelet? Ten reais!" },
      { speaker: "user", userChoices: [
        { target: "Não, obrigado/a.", native: "No, thank you.", correct: true, feedback: "Soft no — Brazilian way." },
        { target: "Não", native: "No (curt)", correct: false, feedback: "Add obrigado/a — softer." },
        { target: "Sim", native: "Yes", correct: false, feedback: "If you mean no, soften it: Não, obrigado/a." },
      ]},
      { speaker: "npc", target: "Tudo bem, bom passeio!", native: "All right, enjoy your walk!" },
      { speaker: "rwen", rwenLine: "You said no without sounding cold. That is jeitinho brasileiro — the small softness that keeps things warm.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Yes (Portuguese)", correct: ["Sim", "sim"] },
      { prompt: "No, thank you (man speaking)", correct: ["Não, obrigado", "não, obrigado", "Nao, obrigado"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "When you say no today, soften it. Add a thanks, a smile, a maybe. Practice the Brazilian softening reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Walking on Copacabana beach. Three vendors approach in five minutes — sunglasses, bracelets, beer. You are not buying. Soften each no.",
    rwenRole: "Beach vendors — friendly, polite, will move on if you say no warmly.",
    successCriteria: "User uses Não, obrigado/a (NOT bare não) for each refusal, varies with talvez or não, valeu for casual touch, and never sounds cold.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
