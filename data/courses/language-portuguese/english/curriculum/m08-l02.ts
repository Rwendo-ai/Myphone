import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l02-trabalhar",
  module: 8,
  lesson: 2,
  title: "Trabalhar — To work",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian work life: trabalhar. Eu trabalho de casa (work from home), num escritório (in an office). The post-2020 BR is heavy on home office.",
    culturalNote: "Home office is now standard for Brazilian white-collar workers — many work hybrid. Brazilians say home office in English. Office hours are roughly 9-6, with a long lunch break.",
  },

  chunks: [
    { id: "trabalhar", target: "Trabalhar", native: "To work", literal: "To work (-ar)", emoji: "💼", phonetic: "trah-bah-LYAR", audioRef: null },
    { id: "trabalho_de", target: "Eu trabalho de casa", native: "I work from home", literal: "I work from home", emoji: "🏠", phonetic: "trah-BAH-lyoo jee KAH-zah", audioRef: null },
    { id: "escritorio", target: "Num escritório", native: "In an office", literal: "In-an office", emoji: "🏢", phonetic: "noong es-kree-TOH-ree-oo", audioRef: null },
  ],

  pattern: {
    name: "Trabalhar conjugation + workplace",
    explanation: "Eu trabalho, você trabalha, nós trabalhamos. Pair with: de casa (from home), num escritório (in an office), em casa (at home), em São Paulo, com tecnologia.",
    examples: [
      { target: "Trabalho de casa.", native: "I work from home." },
      { target: "Você trabalha onde?", native: "Where do you work?" },
      { target: "Trabalhamos com design.", native: "We work in design." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Trabalhar", right: "To work" },
      { left: "Eu trabalho", right: "I work" },
      { left: "De casa", right: "From home" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I work from home", correct: ["Trabalho de casa", "trabalho de casa", "Eu trabalho de casa"] },
    { type: "fill_blank", instruction: "Conjugate trabalhar for nós", sentence: "Nós ____ juntos.", options: ["trabalhamos", "trabalho", "trabalha"], correct: "trabalhamos", context: "Nós + -amos." },
    { type: "multiple_choice", instruction: "Asking where someone works", question: "Choose", options: [
      { text: "Você trabalha onde?", correct: true },
      { text: "Você é onde?", correct: false },
      { text: "Você está onde?", correct: false },
    ], explanation: "Trabalha onde? = where do you work?" },
    { type: "build_sentence", instruction: "Build I work in São Paulo", words: ["em", "Paulo.", "Trabalho", "São"], correct: ["Trabalho", "em", "São", "Paulo."], translation: "I work in São Paulo." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where do you work?", correct: ["Onde você trabalha?", "onde você trabalha?", "Você trabalha onde?"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend at a coffee.",
    lines: [
      { speaker: "npc", target: "Você trabalha onde?", native: "Where do you work?" },
      { speaker: "user", userChoices: [
        { target: "Trabalho de casa, com tecnologia. E você?", native: "I work from home, in tech. And you?", correct: true, feedback: "Where + field + bounce. Brazilian work-talk flow." },
        { target: "Sou trabalho", native: "(wrong)", correct: false, feedback: "Use trabalho + place/field." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with trabalho + place." },
      ]},
      { speaker: "npc", target: "Trabalho num escritório no centro.", native: "I work in an office downtown." },
      { speaker: "rwen", rwenLine: "Trabalhar conjugates. Pair with de casa or num escritório. The Brazilian work-day vocabulary: ready.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I work from home (Portuguese)", correct: ["Trabalho de casa", "trabalho de casa", "Eu trabalho de casa"] },
      { prompt: "Where do you work? (Portuguese)", correct: ["Onde você trabalha?", "onde você trabalha?", "Você trabalha onde?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Trabalho [where] com [field]. State your work in Portuguese twice.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Networking event in São Paulo. Discuss work — yours and theirs.",
    rwenRole: "Brazilian professional, ~35, paulistano.",
    successCriteria: "User uses Trabalho + de casa / num escritório / com [field], asks Onde você trabalha?, names a Brazilian city/area correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
