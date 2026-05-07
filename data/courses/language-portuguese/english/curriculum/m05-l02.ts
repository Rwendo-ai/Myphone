import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l02-extended",
  module: 5,
  lesson: 2,
  title: "Tio, Tia, Primo, Prima — Extended family",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian Sundays are crowded. Add the next ring: tios (uncles), tias (aunts), primos (cousins). Brazilians have many — and call close family friends tio/tia too.",
    culturalNote: "In Brazil, ALL adults at a family gathering are tio or tia to children, even non-blood. The word stretches with affection. Friends of the family become honorary tios.",
  },

  chunks: [
    { id: "tio_tia", target: "Tio / Tia", native: "Uncle / Aunt", literal: "Uncle / Aunt", emoji: "👨‍🦳", phonetic: "CHEE-oo / CHEE-ah", audioRef: null },
    { id: "primo_prima", target: "Primo / Prima", native: "Cousin (m./f.)", literal: "Cousin", emoji: "👫", phonetic: "PREE-moo / PREE-mah", audioRef: null },
    { id: "avos", target: "Avô / Avó", native: "Grandfather / Grandmother", literal: "Grandparent", emoji: "👴👵", phonetic: "ah-VOH / ah-VAW", audioRef: null },
  ],

  pattern: {
    name: "Gendered family pairs",
    explanation: "Most family words come in -o/-a pairs. Tio/tia, primo/prima, avô/avó. The masculine plural covers mixed groups: tios = uncles+aunts together (or just uncles).",
    examples: [
      { target: "Tio Carlos / Tia Maria", native: "Uncle Carlos / Aunt Maria" },
      { target: "Meus primos vão hoje.", native: "My cousins are going today." },
      { target: "Minha avó é mineira.", native: "My grandmother is from Minas." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Tio", right: "Uncle" },
      { left: "Prima", right: "Cousin (f.)" },
      { left: "Avó", right: "Grandmother" },
    ]},
    { type: "fill_blank", instruction: "Avó (grandmother) is feminine", sentence: "____ avó é forte.", options: ["Minha", "Meu", "Meus"], correct: "Minha", context: "Minha avó." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My uncle", correct: ["Meu tio", "meu tio"] },
    { type: "multiple_choice", instruction: "Cousins (mixed group) — which is right?", question: "Choose", options: [
      { text: "Meus primos", correct: true },
      { text: "Minhas primos", correct: false },
      { text: "Meu prima", correct: false },
    ], explanation: "Mixed group → masculine plural: meus primos." },
    { type: "build_sentence", instruction: "Build My grandparents live in Minas", words: ["em", "Meus", "moram", "Minas.", "avós"], correct: ["Meus", "avós", "moram", "em", "Minas."], translation: "My grandparents live in Minas." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My cousins are going", correct: ["Meus primos vão", "meus primos vão", "Meus primos vao"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend describes who is at the family churrasco.",
    lines: [
      { speaker: "npc", target: "Vai ter quem hoje?", native: "Who's coming today?" },
      { speaker: "user", userChoices: [
        { target: "Meus tios, minha avó, e dois primos.", native: "My uncles/aunts, my grandmother, and two cousins.", correct: true, feedback: "Possessives matched, plurals right." },
        { target: "Meu tios", native: "(wrong number)", correct: false, feedback: "Plural — meus tios." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "List with meus/minhas + plural relatives." },
      ]},
      { speaker: "npc", target: "Vai ser cheio!", native: "It's going to be packed!" },
      { speaker: "rwen", rwenLine: "Brazilian Sunday is a roll-call of relatives. Tio, tia, primo, prima, avô, avó — six new people in your map.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "My uncle (Portuguese)", correct: ["Meu tio", "meu tio"] },
      { prompt: "My grandmother (Portuguese)", correct: ["Minha avó", "minha avó", "Minha avo", "minha avo"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: list six relatives in Portuguese — meu tio, minha tia, meu primo, minha prima, meu avô, minha avó.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First Sunday churrasco at your Brazilian friend's family. Their parents introduce you to everyone — uncles, cousins, grandparents.",
    rwenRole: "Friend's father — ~55, paulistano, introduces relatives one by one.",
    successCriteria: "User uses meu tio, minha tia, meus primos, meu avô etc. with right gender, says Muito prazer to each, and asks one follow-up question per person.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
