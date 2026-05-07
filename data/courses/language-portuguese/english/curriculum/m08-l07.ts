import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l07-saber-conhecer",
  module: 8,
  lesson: 7,
  title: "Saber & Conhecer — Know how vs know who",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two verbs for know. Saber = know facts/skills. Conhecer = know people/places. Eu sei português (skill). Conheço o Rio (place). Different jobs.",
    culturalNote: "Mixing them up sounds foreign. Saber falar (know how to speak). Conhecer pessoas (know people). Conhecer um lugar (have been somewhere). Brazilians use both daily.",
  },

  chunks: [
    { id: "saber", target: "Saber — Eu sei", native: "Know (facts) — I know", literal: "Know (irregular)", emoji: "🧠", phonetic: "sah-BAYR / say", audioRef: null },
    { id: "conhecer", target: "Conhecer — Eu conheço", native: "Know (people/places) — I know", literal: "Know-be-acquainted", emoji: "🤝", phonetic: "ko-nyeh-SAYR", audioRef: null },
    { id: "voce_conhece", target: "Você conhece o Rio?", native: "Have you been to Rio?", literal: "You know Rio?", emoji: "🌎", phonetic: "voh-SAY ko-NYEH-see", audioRef: null },
  ],

  pattern: {
    name: "Saber vs Conhecer",
    explanation: "Saber + facts: Sei português (I know Portuguese), Sei nadar (I know how to swim). Conhecer + people/places: Conheço a Maria (I know Maria), Conheço São Paulo (I've been to São Paulo).",
    examples: [
      { target: "Sei falar português.", native: "I know how to speak Portuguese." },
      { target: "Conheço o Rio.", native: "I know Rio (have been)." },
      { target: "Não sei dirigir.", native: "I don't know how to drive." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Saber", right: "Know facts/skills" },
      { left: "Conhecer", right: "Know people/places" },
      { left: "Sei nadar", right: "I know how to swim" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I know how to speak Portuguese", correct: ["Sei falar português", "Eu sei falar português", "sei falar português"] },
    { type: "fill_blank", instruction: "Met someone — knew the person", sentence: "____ a Maria.", options: ["Conheço", "Sei", "Quero"], correct: "Conheço", context: "Person = conhecer." },
    { type: "multiple_choice", instruction: "Have you been to Rio?", question: "Choose", options: [
      { text: "Você conhece o Rio?", correct: true },
      { text: "Você sabe o Rio?", correct: false },
      { text: "Você é Rio?", correct: false },
    ], explanation: "Place = conhecer." },
    { type: "build_sentence", instruction: "Build I don't know how to drive", words: ["dirigir.", "Não", "sei"], correct: ["Não", "sei", "dirigir."], translation: "I don't know how to drive." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I know São Paulo (have been)", correct: ["Conheço São Paulo", "Eu conheço São Paulo", "conheço São Paulo"] },
  ],

  rwenDialogue: {
    intro: "Brazilian asks about your travel and skills.",
    lines: [
      { speaker: "npc", target: "Você conhece o Brasil?", native: "Do you know Brazil (been)?" },
      { speaker: "user", userChoices: [
        { target: "Conheço Rio e São Paulo. Mas não sei muito da cultura ainda.", native: "I know Rio and São Paulo. But I don't know much of the culture yet.", correct: true, feedback: "Conhecer for places, saber for knowledge. Both correct, both useful." },
        { target: "Sei Rio", native: "(wrong verb)", correct: false, feedback: "Place = conhecer." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with conhecer + place." },
      ]},
      { speaker: "npc", target: "Você precisa conhecer mais!", native: "You need to know (visit) more!" },
      { speaker: "rwen", rwenLine: "Saber for facts. Conhecer for people and places. Two verbs, one English word.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I know how to swim (Portuguese)", correct: ["Sei nadar", "Eu sei nadar", "sei nadar"] },
      { prompt: "I know Rio (place, Portuguese)", correct: ["Conheço o Rio", "Eu conheço o Rio", "conheço o Rio"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Two pairs: Sei + skill. Conheço + place/person. Out loud, four sentences.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian asks what you know — places visited and skills learnt.",
    rwenRole: "Curious Brazilian, ~30.",
    successCriteria: "User uses saber for skills/facts (sei nadar, sei português), conhecer for people/places (conheço Rio, conheço a Maria), never confuses them.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
