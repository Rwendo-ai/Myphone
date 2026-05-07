import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l06-meses",
  module: 6,
  lesson: 6,
  title: "Meses — Months",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian months: lowercase (unlike English) and easy. Janeiro, fevereiro, março... most are recognisable. The big one: o Carnaval em fevereiro.",
    culturalNote: "Brazil's biggest holidays: Carnaval (Feb/Mar), São João (June, Northeast), Natal (December), Ano Novo (December 31). The school year runs Feb-Dec; summer is Dec-Feb.",
  },

  chunks: [
    { id: "janeiro_marco", target: "Janeiro, fevereiro, março", native: "January, February, March", literal: "Months Q1", emoji: "🌞", phonetic: "zhah-NAY-roo, feh-veh-RAY-roo, MAR-soo", audioRef: null },
    { id: "junho_julho", target: "Junho, julho", native: "June, July", literal: "Q2 winter (Brazil)", emoji: "🍂", phonetic: "ZHOO-nyoo, ZHOO-lyoo", audioRef: null },
    { id: "dezembro", target: "Dezembro", native: "December", literal: "December (summer)", emoji: "🎄", phonetic: "deh-ZEM-broo", audioRef: null },
  ],

  pattern: {
    name: "Months as lowercase nouns",
    explanation: "Always lowercase: janeiro, abril, agosto. Use em + month: em janeiro, em julho. NO contraction with month names — em janeiro, never no janeiro.",
    examples: [
      { target: "Em fevereiro tem Carnaval.", native: "In February there's Carnaval." },
      { target: "Meu aniversário é em maio.", native: "My birthday is in May." },
      { target: "Vou ao Brasil em dezembro.", native: "I'm going to Brazil in December." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Janeiro", right: "January" },
      { left: "Junho", right: "June" },
      { left: "Dezembro", right: "December" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "In December", correct: ["Em dezembro", "em dezembro"] },
    { type: "fill_blank", instruction: "Carnaval is in...", sentence: "O Carnaval é em ____.", options: ["fevereiro", "julho", "outubro"], correct: "fevereiro", context: "Carnaval is in February." },
    { type: "multiple_choice", instruction: "Brazilian summer months?", question: "Choose", options: [
      { text: "Dezembro, janeiro, fevereiro", correct: true },
      { text: "Junho, julho, agosto", correct: false },
      { text: "Setembro, outubro", correct: false },
    ], explanation: "Brazil is southern hemisphere — summer is Dec-Feb." },
    { type: "build_sentence", instruction: "Build My birthday is in May", words: ["maio.", "Meu", "é", "aniversário", "em"], correct: ["Meu", "aniversário", "é", "em", "maio."], translation: "My birthday is in May." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm going to Rio in February", correct: ["Vou ao Rio em fevereiro", "vou ao Rio em fevereiro"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks when you visit.",
    lines: [
      { speaker: "npc", target: "Quando você vem pro Brasil?", native: "When are you coming to Brazil?" },
      { speaker: "user", userChoices: [
        { target: "Vou em fevereiro, no Carnaval!", native: "I'm going in February, for Carnaval!", correct: true, feedback: "Em + month + Carnaval reference. Brazilian-tuned." },
        { target: "Vou no fevereiro", native: "(wrong contraction)", correct: false, feedback: "With months it is em fevereiro, not no fevereiro." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with em + month." },
      ]},
      { speaker: "npc", target: "Que sorte! Brasil em fevereiro é demais.", native: "Lucky! Brazil in February is amazing." },
      { speaker: "rwen", rwenLine: "Months in lowercase, paired with em — not no, not na.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "December (Portuguese)", correct: ["Dezembro", "dezembro"] },
      { prompt: "In February (Portuguese)", correct: ["Em fevereiro", "em fevereiro"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Recite all 12 months in Portuguese. Then say two things: when your birthday is, when you would visit Brazil.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Planning a Brazil trip with a Brazilian friend — discuss Carnaval timing, when winter is, what's good in each month.",
    rwenRole: "Brazilian friend, ~30, helpful planner.",
    successCriteria: "User uses month names lowercase, pairs with em (NOT no/na), references Brazilian seasons correctly (Dec-Feb summer).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
