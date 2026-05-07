import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l01-familia",
  module: 5,
  lesson: 1,
  title: "Família — Family core",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 5: family. In Brazil, family is loud, big, and gathers every Sunday. Today the core: mãe, pai, irmão, irmã. Mother, father, brother, sister.",
    culturalNote: "Brazilian families are extended — Sunday churrasco is sacred, with cousins, aunts, godparents (padrinhos), and friends-of-family all welcome. The family includes more people than blood.",
  },

  chunks: [
    { id: "mae", target: "Mãe", native: "Mother", literal: "Mother", emoji: "👩", phonetic: "MIGH", audioRef: null },
    { id: "pai", target: "Pai", native: "Father", literal: "Father", emoji: "👨", phonetic: "PIE", audioRef: null },
    { id: "irmaos", target: "Irmão / Irmã", native: "Brother / Sister", literal: "Brother / Sister", emoji: "👫", phonetic: "eer-MOWNG / eer-MAH", audioRef: null },
  ],

  pattern: {
    name: "Family vocabulary with possessives",
    explanation: "Each family word pairs with meu/minha. Minha mãe (my mother), meu pai (my father). Brazilians speak about family constantly — these four words come up every day.",
    examples: [
      { target: "Minha mãe é brasileira.", native: "My mother is Brazilian." },
      { target: "Meu pai mora em Rio.", native: "My father lives in Rio." },
      { target: "Tenho dois irmãos.", native: "I have two siblings/brothers." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Mãe", right: "Mother" },
      { left: "Pai", right: "Father" },
      { left: "Irmã", right: "Sister" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "My mother", correct: ["Minha mãe", "minha mãe", "Minha mae", "minha mae"] },
    { type: "fill_blank", instruction: "Pai is masculine", sentence: "____ pai mora aqui.", options: ["Meu", "Minha", "Meus"], correct: "Meu", context: "Pai (m.) — meu pai." },
    { type: "multiple_choice", instruction: "Talking about siblings", question: "Choose the correct sentence", options: [
      { text: "Tenho um irmão e uma irmã.", correct: true },
      { text: "Sou um irmão e uma irmã.", correct: false },
      { text: "Estou um irmão.", correct: false },
    ], explanation: "Possession of family = ter (tenho)." },
    { type: "build_sentence", instruction: "Build My father is Brazilian", words: ["é", "Meu", "brasileiro.", "pai"], correct: ["Meu", "pai", "é", "brasileiro."], translation: "My father is Brazilian." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have two brothers", correct: ["Tenho dois irmãos", "tenho dois irmãos", "Eu tenho dois irmãos"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks about your family.",
    lines: [
      { speaker: "npc", target: "Sua família é grande?", native: "Is your family big?" },
      { speaker: "user", userChoices: [
        { target: "Não muito. Tenho minha mãe, meu pai, e uma irmã.", native: "Not very. I have my mother, father, and a sister.", correct: true, feedback: "Possessives matched (minha/meu/uma). Family map drawn." },
        { target: "Sou família grande", native: "(wrong)", correct: false, feedback: "Use ter — tenho mãe, pai..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Describe your family with tenho + minha/meu." },
      ]},
      { speaker: "npc", target: "Aqui no Brasil a família é enorme!", native: "Here in Brazil family is huge!" },
      { speaker: "rwen", rwenLine: "Family in four words: mãe, pai, irmão, irmã. The core map.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My mother (Portuguese)", correct: ["Minha mãe", "minha mãe", "Minha mae", "minha mae"] },
      { prompt: "My brother (Portuguese)", correct: ["Meu irmão", "meu irmão", "Meu irmao", "meu irmao"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, list four people: minha mãe, meu pai, meu irmão, minha irmã. Pair gender to person.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian family Sunday lunch where you describe your family back home — names, ages, where they live.",
    rwenRole: "Family matriarch — ~60, kind, asks gentle questions about your background.",
    successCriteria: "User pairs meu/minha correctly with each family member, uses tenho for possession of relations, and adds at least one age (tenho irmão de X anos) or location (mora em).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
