import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l04-ir",
  module: 8,
  lesson: 4,
  title: "Ir — To go (irregular)",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ir is the most irregular verb in Portuguese — and the most useful. Eu vou, você vai, nós vamos. Pair with a place: vou pra praia.",
    culturalNote: "Brazilians use vou + verb for the near future: Vou comer (I will eat), Vou viajar (I will travel). Way more common than the formal future tense (eu comerei).",
  },

  chunks: [
    { id: "ir", target: "Ir", native: "To go", literal: "Go (irregular)", emoji: "➡️", phonetic: "EER", audioRef: null },
    { id: "vou_pra", target: "Vou pra...", native: "I'm going to (place)", literal: "I go to (= para a)", emoji: "🚶", phonetic: "VOH prah", audioRef: null },
    { id: "vou_verb", target: "Vou + verb", native: "I'll (do) — near future", literal: "Going to verb", emoji: "🔮", phonetic: "VOH", audioRef: null },
  ],

  pattern: {
    name: "Ir — irregular conjugation",
    explanation: "Eu vou, você vai, ele/ela vai, nós vamos, eles/elas vão. Use vou + verb infinitive for near-future actions: vou comer, vou viajar.",
    examples: [
      { target: "Vou pra praia.", native: "I'm going to the beach." },
      { target: "Vou comer agora.", native: "I'll eat now." },
      { target: "Vamos juntos.", native: "We're going together." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu vou", right: "I go" },
      { left: "Você vai", right: "You go" },
      { left: "Vamos", right: "We go" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm going to the beach", correct: ["Vou pra praia", "Eu vou pra praia", "vou pra praia", "Vou para a praia"] },
    { type: "fill_blank", instruction: "Conjugate ir for nós", sentence: "Nós ____ juntos.", options: ["vamos", "vou", "vai"], correct: "vamos", context: "Nós + vamos." },
    { type: "multiple_choice", instruction: "Brazilian near-future for I will eat?", question: "Choose", options: [
      { text: "Vou comer", correct: true },
      { text: "Comerei", correct: false },
      { text: "Sou comer", correct: false },
    ], explanation: "Brazilians use vou + verb almost always for near-future." },
    { type: "build_sentence", instruction: "Build We're going to Rio in February", words: ["em", "Vamos", "Rio", "fevereiro.", "no"], correct: ["Vamos", "no", "Rio", "em", "fevereiro."], translation: "We're going to Rio in February." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'll travel tomorrow", correct: ["Vou viajar amanhã", "Eu vou viajar amanhã", "vou viajar amanhã"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend on weekend plans.",
    lines: [
      { speaker: "npc", target: "Vai fazer o quê no fim de semana?", native: "What are you doing this weekend?" },
      { speaker: "user", userChoices: [
        { target: "Vou pra praia no sábado e vou descansar no domingo.", native: "Going to the beach Saturday and resting Sunday.", correct: true, feedback: "Two near-future ir constructions in one breath." },
        { target: "Sou praia", native: "(wrong)", correct: false, feedback: "Use vou pra/vou + verb." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell them — vou pra/vou + verb." },
      ]},
      { speaker: "npc", target: "Show! A gente se vê!", native: "Cool! See you around!" },
      { speaker: "rwen", rwenLine: "Ir is the engine of Brazilian future-talk. Vou pra X. Vou fazer Y. Built.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I'm going to the beach (Portuguese)", correct: ["Vou pra praia", "Eu vou pra praia", "vou pra praia", "Vou para a praia"] },
      { prompt: "We're going (Portuguese)", correct: ["Vamos", "Nós vamos", "vamos"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three near-future plans: Vou + verb. Vou comer. Vou trabalhar. Vou viajar.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Friday afternoon. Brazilian friend wants weekend plans. Discuss your three Saturday/Sunday plans using vou + verb.",
    rwenRole: "Brazilian friend, ~28, planning the weekend.",
    successCriteria: "User uses vou + verb for near-future, vou pra + place for destinations, conjugates vamos for joint plans.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
