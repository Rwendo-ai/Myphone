import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l07-nao-nunca",
  module: 4,
  lesson: 7,
  title: "Não, Nunca, Nada — Negation",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Portuguese loves DOUBLE negatives. Não vou nunca (I won't ever go). Não tem nada (there is nothing). Both words negate together — perfectly correct.",
    culturalNote: "English ears flinch at double negatives; Portuguese welcomes them. Não, nada, nunca, ninguém — pile them up. They reinforce, not cancel.",
  },

  chunks: [
    { id: "nao", target: "Não", native: "No / not", literal: "No", emoji: "❌", phonetic: "nowng", audioRef: null },
    { id: "nunca", target: "Nunca", native: "Never", literal: "Never", emoji: "🚫", phonetic: "NOON-kah", audioRef: null },
    { id: "nada", target: "Nada", native: "Nothing", literal: "Nothing", emoji: "0️⃣", phonetic: "NAH-dah", audioRef: null },
  ],

  pattern: {
    name: "Double-negative chains",
    explanation: "Não comes before the verb. Nunca, nada, ninguém can come before or after — both negatives stay. Não vou nunca = I am never going. Não tenho nada = I have nothing.",
    examples: [
      { target: "Não tenho nada.", native: "I have nothing." },
      { target: "Nunca vou lá.", native: "I never go there." },
      { target: "Ninguém sabe.", native: "Nobody knows." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Não", right: "Not" },
      { left: "Nunca", right: "Never" },
      { left: "Nada", right: "Nothing" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have nothing", correct: ["Não tenho nada", "não tenho nada", "Nao tenho nada"] },
    { type: "fill_blank", instruction: "Double negative — both stay", sentence: "Não vou ____ a Brasília.", options: ["nunca", "muito", "bem"], correct: "nunca", context: "Both não and nunca stay." },
    { type: "multiple_choice", instruction: "Which is correct Portuguese?", question: "Choose", options: [
      { text: "Não sei nada.", correct: true },
      { text: "Sei nada.", correct: false },
      { text: "Não sei algo.", correct: false },
    ], explanation: "Portuguese requires the double negative — não + nada." },
    { type: "build_sentence", instruction: "Build I never drink coffee", words: ["café.", "Nunca", "tomo"], correct: ["Nunca", "tomo", "café."], translation: "I never drink coffee." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Nobody knows", correct: ["Ninguém sabe", "ninguém sabe", "Ninguem sabe"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend invites you somewhere. You decline.",
    lines: [
      { speaker: "npc", target: "Vamos pra balada hoje?", native: "Let's go clubbing tonight?" },
      { speaker: "user", userChoices: [
        { target: "Hoje não posso, não tenho energia nenhuma.", native: "Not today, I have no energy at all.", correct: true, feedback: "Não + nenhuma — proper Brazilian double negative." },
        { target: "Tenho nada", native: "(missing não)", correct: false, feedback: "Não comes first — Não tenho nada." },
        { target: "Sim", native: "Yes (lying)", correct: false, feedback: "If you mean no, soften with não posso." },
      ]},
      { speaker: "npc", target: "Tudo bem, fica pra próxima!", native: "All good, next time!" },
      { speaker: "rwen", rwenLine: "Double negative is Brazilian normal. The two negatives reinforce — they do not cancel.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I have nothing (Portuguese)", correct: ["Não tenho nada", "não tenho nada", "Nao tenho nada"] },
      { prompt: "I never go there (Portuguese)", correct: ["Nunca vou lá", "nunca vou lá", "Nunca vou la"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: three double-negative Portuguese sentences. Não tenho nada. Não vejo ninguém. Nunca como carne. Build the chain.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend pushes hard for plans you do not want. You politely refuse using the double-negative chain.",
    rwenRole: "Pushy friend — Brazilian, ~28, will accept a soft no.",
    successCriteria: "User refuses politely with não + nada / nunca / ninguém in proper double-negative form, softens with obrigado/a, and never reduces to a single negative.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
